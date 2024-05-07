import{r as K,ci as Ae,ch as Je,c9 as Ke}from"./index-3voNJrtd.js";var Ye={};function Qe(r){if(r&&r.__esModule)return r;var i={};if(r!=null){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(r,n):{};o.get||o.set?Object.defineProperty(i,n,o):i[n]=r[n]}}return i.default=r,i}var Ue=Qe,C={},te,_e;function Ze(){if(_e)return te;_e=1;function r(i){return i&&i.__esModule?i:{default:i}}return te=r,te}var z,me;function et(){if(me)return z;me=1;function r(){return z=r=Object.assign||function(i){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(i[a]=o[a])}return i},r.apply(this,arguments)}return z=r,z}var re,Ce;function tt(){if(Ce)return re;Ce=1;function r(i,n){if(i==null)return{};var o={},a=Object.keys(i),u,p;for(p=0;p<a.length;p++)u=a[p],!(n.indexOf(u)>=0)&&(o[u]=i[u]);return o}return re=r,re}var ie,Me;function rt(){if(Me)return ie;Me=1;var r=tt();function i(n,o){if(n==null)return{};var a=r(n,o),u,p;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(n);for(p=0;p<S.length;p++)u=S[p],!(o.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(n,u)&&(a[u]=n[u])}return a}return ie=i,ie}var ne,Oe;function it(){if(Oe)return ne;Oe=1;function r(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}return ne=r,ne}var ae,Le;function nt(){if(Le)return ae;Le=1;function r(n,o){for(var a=0;a<o.length;a++){var u=o[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(n,u.key,u)}}function i(n,o,a){return o&&r(n.prototype,o),a&&r(n,a),n}return ae=i,ae}var N,Re;function at(){if(Re)return N;Re=1;function r(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r=function(a){return typeof a}:r=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r(n)}function i(n){return typeof Symbol=="function"&&r(Symbol.iterator)==="symbol"?N=i=function(a){return r(a)}:N=i=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":r(a)},i(n)}return N=i,N}var oe,Te;function ot(){if(Te)return oe;Te=1;function r(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}return oe=r,oe}var se,Pe;function st(){if(Pe)return se;Pe=1;var r=at(),i=ot();function n(o,a){return a&&(r(a)==="object"||typeof a=="function")?a:i(o)}return se=n,se}var B,qe;function ut(){if(qe)return B;qe=1;function r(i){return B=r=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},r(i)}return B=r,B}var G,Ee;function lt(){if(Ee)return G;Ee=1;function r(i,n){return G=r=Object.setPrototypeOf||function(a,u){return a.__proto__=u,a},r(i,n)}return G=r,G}var ue,Ie;function dt(){if(Ie)return ue;Ie=1;var r=lt();function i(n,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(o&&o.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),o&&r(n,o)}return ue=i,ue}var le={},de,Ne;function Q(){if(Ne)return de;Ne=1;function r(i){return i&&i.__esModule?i:{default:i}}return de=r,de}var D={},De;function ft(){if(De)return D;De=1;var r=Q();Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var i=r(K);r(Ae());var n=function(u){u.index;var p=u.children;i.default.Children.count(p)},o=n;return D.default=o,D}var J={},X={},Xe;function Fe(){if(Xe)return X;Xe=1,Object.defineProperty(X,"__esModule",{value:!0}),X.default=void 0;var r={RESISTANCE_COEF:.6,UNCERTAINTY_THRESHOLD:3};return X.default=r,X}var We;function ct(){if(We)return J;We=1;var r=Q();Object.defineProperty(J,"__esModule",{value:!0}),J.default=o;var i=r(K),n=r(Fe());function o(a){var u=a.children,p=a.startIndex,S=a.startX,M=a.pageX,g=a.viewLength,w=a.resistance,_=i.default.Children.count(u)-1,v=p+(S-M)/g,y;return w?v<0?v=Math.exp(v*n.default.RESISTANCE_COEF)-1:v>_&&(v=_+1-Math.exp((_-v)*n.default.RESISTANCE_COEF)):v<0?(v=0,y=(v-p)*g+M):v>_&&(v=_,y=(v-p)*g+M),{index:v,startX:y}}return J}var W={},He;function pt(){if(He)return W;He=1;var r=Q();Object.defineProperty(W,"__esModule",{value:!0}),W.default=void 0;var i=r(K),n=function(u,p){var S=!1,M=function(T){return T?T.key:"empty"};if(u.children.length&&p.children.length){var g=i.default.Children.map(u.children,M),w=g[u.index];if(w!=null){var _=i.default.Children.map(p.children,M),v=_[p.index];w===v&&(S=!0)}}return S},o=n;return W.default=o,W}var H={},ke;function ht(){if(ke)return H;ke=1,Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;function r(n,o){var a=n%o;return a<0?a+o:a}var i=r;return H.default=i,H}var je;function vt(){return je||(je=1,function(r){var i=Q();Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"checkIndexBounds",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(r,"computeIndex",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(r,"constant",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(r,"getDisplaySameSlide",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(r,"mod",{enumerable:!0,get:function(){return p.default}});var n=i(ft()),o=i(ct()),a=i(Fe()),u=i(pt()),p=i(ht())}(le)),le}var Ve;function gt(){if(Ve)return C;Ve=1;var r=Ue,i=Ze();Object.defineProperty(C,"__esModule",{value:!0}),C.getDomTreeShapes=fe,C.findNativeHandler=ce,C.default=C.SwipeableViewsContext=void 0;var n=i(et()),o=i(rt()),a=i(it()),u=i(nt()),p=i(st()),S=i(ut()),M=i(dt()),g=r(K);i(Je()),i(Ae());var w=vt();function _(s,f,d,e){return s.addEventListener(f,d,e),{remove:function(){s.removeEventListener(f,d,e)}}}var v={container:{direction:"ltr",display:"flex",willChange:"transform"},slide:{width:"100%",WebkitFlexShrink:0,flexShrink:0,overflow:"auto"}},y={root:{x:{overflowX:"hidden"},"x-reverse":{overflowX:"hidden"},y:{overflowY:"hidden"},"y-reverse":{overflowY:"hidden"}},flexDirection:{x:"row","x-reverse":"row-reverse",y:"column","y-reverse":"column-reverse"},transform:{x:function(f){return"translate(".concat(-f,"%, 0)")},"x-reverse":function(f){return"translate(".concat(f,"%, 0)")},y:function(f){return"translate(0, ".concat(-f,"%)")},"y-reverse":function(f){return"translate(0, ".concat(f,"%)")}},length:{x:"width","x-reverse":"width",y:"height","y-reverse":"height"},rotationMatrix:{x:{x:[1,0],y:[0,1]},"x-reverse":{x:[-1,0],y:[0,1]},y:{x:[0,1],y:[1,0]},"y-reverse":{x:[0,-1],y:[1,0]}},scrollPosition:{x:"scrollLeft","x-reverse":"scrollLeft",y:"scrollTop","y-reverse":"scrollTop"},scrollLength:{x:"scrollWidth","x-reverse":"scrollWidth",y:"scrollHeight","y-reverse":"scrollHeight"},clientLength:{x:"clientWidth","x-reverse":"clientWidth",y:"clientHeight","y-reverse":"clientHeight"}};function T(s,f){var d=f.duration,e=f.easeFunction,t=f.delay;return"".concat(s," ").concat(d," ").concat(e," ").concat(t)}function Z(s,f){var d=y.rotationMatrix[f];return{pageX:d.x[0]*s.pageX+d.x[1]*s.pageY,pageY:d.y[0]*s.pageX+d.y[1]*s.pageY}}function k(s){return s.touches=[{pageX:s.pageX,pageY:s.pageY}],s}function fe(s,f){for(var d=[];s&&s!==f&&s!==document.body&&!s.hasAttribute("data-swipeable");){var e=window.getComputedStyle(s);e.getPropertyValue("position")==="absolute"||e.getPropertyValue("overflow-x")==="hidden"?d=[]:(s.clientWidth>0&&s.scrollWidth>s.clientWidth||s.clientHeight>0&&s.scrollHeight>s.clientHeight)&&d.push({element:s,scrollWidth:s.scrollWidth,scrollHeight:s.scrollHeight,clientWidth:s.clientWidth,clientHeight:s.clientHeight,scrollLeft:s.scrollLeft,scrollTop:s.scrollTop}),s=s.parentNode}return d}var R=null;function ce(s){var f=s.domTreeShapes,d=s.pageX,e=s.startX,t=s.axis;return f.some(function(l){var h=d>=e;(t==="x"||t==="y")&&(h=!h);var c=Math.round(l[y.scrollPosition[t]]),b=c>0,m=c+l[y.clientLength[t]]<l[y.scrollLength[t]];return h&&m||!h&&b?(R=l.element,!0):!1})}var pe=g.createContext();C.SwipeableViewsContext=pe;var j=function(s){(0,M.default)(f,s);function f(d){var e;return(0,a.default)(this,f),e=(0,p.default)(this,(0,S.default)(f).call(this,d)),e.rootNode=null,e.containerNode=null,e.ignoreNextScrollEvents=!1,e.viewLength=0,e.startX=0,e.lastX=0,e.vx=0,e.startY=0,e.isSwiping=void 0,e.started=!1,e.startIndex=0,e.transitionListener=null,e.touchMoveListener=null,e.activeSlide=null,e.indexCurrent=null,e.firstRenderTimeout=null,e.setRootNode=function(t){e.rootNode=t},e.setContainerNode=function(t){e.containerNode=t},e.setActiveSlide=function(t){e.activeSlide=t,e.updateHeight()},e.handleSwipeStart=function(t){var l=e.props.axis,h=Z(t.touches[0],l);e.viewLength=e.rootNode.getBoundingClientRect()[y.length[l]],e.startX=h.pageX,e.lastX=h.pageX,e.vx=0,e.startY=h.pageY,e.isSwiping=void 0,e.started=!0;var c=window.getComputedStyle(e.containerNode),b=c.getPropertyValue("-webkit-transform")||c.getPropertyValue("transform");if(b&&b!=="none"){var m=b.split("(")[1].split(")")[0].split(","),O=window.getComputedStyle(e.rootNode),x=Z({pageX:parseInt(m[4],10),pageY:parseInt(m[5],10)},l);e.startIndex=-x.pageX/(e.viewLength-parseInt(O.paddingLeft,10)-parseInt(O.paddingRight,10))||0}},e.handleSwipeMove=function(t){if(!e.started){e.handleTouchStart(t);return}if(!(R!==null&&R!==e.rootNode)){var l=e.props,h=l.axis,c=l.children,b=l.ignoreNativeScroll,m=l.onSwitching,O=l.resistance,x=Z(t.touches[0],h);if(e.isSwiping===void 0){var q=Math.abs(x.pageX-e.startX),E=Math.abs(x.pageY-e.startY),P=q>E&&q>w.constant.UNCERTAINTY_THRESHOLD;if(!O&&(h==="y"||h==="y-reverse")&&(e.indexCurrent===0&&e.startX<x.pageX||e.indexCurrent===g.Children.count(e.props.children)-1&&e.startX>x.pageX)){e.isSwiping=!1;return}if(q>E&&t.preventDefault(),P===!0||E>w.constant.UNCERTAINTY_THRESHOLD){e.isSwiping=P,e.startX=x.pageX;return}}if(e.isSwiping===!0){t.preventDefault(),e.vx=e.vx*.5+(x.pageX-e.lastX)*.5,e.lastX=x.pageX;var V=(0,w.computeIndex)({children:c,resistance:O,pageX:x.pageX,startIndex:e.startIndex,startX:e.startX,viewLength:e.viewLength}),A=V.index,L=V.startX;if(R===null&&!b){var ee=fe(t.target,e.rootNode),Y=ce({domTreeShapes:ee,startX:e.startX,pageX:x.pageX,axis:h});if(Y)return}L?e.startX=L:R===null&&(R=e.rootNode),e.setIndexCurrent(A);var I=function(){m&&m(A,"move")};(e.state.displaySameSlide||!e.state.isDragging)&&e.setState({displaySameSlide:!1,isDragging:!0},I),I()}}},e.handleSwipeEnd=function(){if(R=null,!!e.started&&(e.started=!1,e.isSwiping===!0)){var t=e.state.indexLatest,l=e.indexCurrent,h=t-l,c;Math.abs(e.vx)>e.props.threshold?e.vx>0?c=Math.floor(l):c=Math.ceil(l):Math.abs(h)>e.props.hysteresis?c=h>0?Math.floor(l):Math.ceil(l):c=t;var b=g.Children.count(e.props.children)-1;c<0?c=0:c>b&&(c=b),e.setIndexCurrent(c),e.setState({indexLatest:c,isDragging:!1},function(){e.props.onSwitching&&e.props.onSwitching(c,"end"),e.props.onChangeIndex&&c!==t&&e.props.onChangeIndex(c,t,{reason:"swipe"}),l===t&&e.handleTransitionEnd()})}},e.handleTouchStart=function(t){e.props.onTouchStart&&e.props.onTouchStart(t),e.handleSwipeStart(t)},e.handleTouchEnd=function(t){e.props.onTouchEnd&&e.props.onTouchEnd(t),e.handleSwipeEnd(t)},e.handleMouseDown=function(t){e.props.onMouseDown&&e.props.onMouseDown(t),t.persist(),e.handleSwipeStart(k(t))},e.handleMouseUp=function(t){e.props.onMouseUp&&e.props.onMouseUp(t),e.handleSwipeEnd(k(t))},e.handleMouseLeave=function(t){e.props.onMouseLeave&&e.props.onMouseLeave(t),e.started&&e.handleSwipeEnd(k(t))},e.handleMouseMove=function(t){e.props.onMouseMove&&e.props.onMouseMove(t),e.started&&e.handleSwipeMove(k(t))},e.handleScroll=function(t){if(e.props.onScroll&&e.props.onScroll(t),t.target===e.rootNode){if(e.ignoreNextScrollEvents){e.ignoreNextScrollEvents=!1;return}var l=e.state.indexLatest,h=Math.ceil(t.target.scrollLeft/t.target.clientWidth)+l;e.ignoreNextScrollEvents=!0,t.target.scrollLeft=0,e.props.onChangeIndex&&h!==l&&e.props.onChangeIndex(h,l,{reason:"focus"})}},e.updateHeight=function(){if(e.activeSlide!==null){var t=e.activeSlide.children[0];t!==void 0&&t.offsetHeight!==void 0&&e.state.heightLatest!==t.offsetHeight&&e.setState({heightLatest:t.offsetHeight})}},e.state={indexLatest:d.index,isDragging:!1,renderOnlyActive:!d.disableLazyLoading,heightLatest:0,displaySameSlide:!0},e.setIndexCurrent(d.index),e}return(0,u.default)(f,[{key:"componentDidMount",value:function(){var e=this;this.transitionListener=_(this.containerNode,"transitionend",function(t){t.target===e.containerNode&&e.handleTransitionEnd()}),this.touchMoveListener=_(this.rootNode,"touchmove",function(t){e.props.disabled||e.handleSwipeMove(t)},{passive:!1}),this.props.disableLazyLoading||(this.firstRenderTimeout=setTimeout(function(){e.setState({renderOnlyActive:!1})},0)),this.props.action&&this.props.action({updateHeight:this.updateHeight})}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.index;typeof t=="number"&&t!==this.props.index&&(this.setIndexCurrent(t),this.setState({displaySameSlide:(0,w.getDisplaySameSlide)(this.props,e),indexLatest:t}))}},{key:"componentWillUnmount",value:function(){this.transitionListener.remove(),this.touchMoveListener.remove(),clearTimeout(this.firstRenderTimeout)}},{key:"getSwipeableViewsContext",value:function(){var e=this;return{slideUpdateHeight:function(){e.updateHeight()}}}},{key:"setIndexCurrent",value:function(e){if(!this.props.animateTransitions&&this.indexCurrent!==e&&this.handleTransitionEnd(),this.indexCurrent=e,this.containerNode){var t=this.props.axis,l=y.transform[t](e*100);this.containerNode.style.WebkitTransform=l,this.containerNode.style.transform=l}}},{key:"handleTransitionEnd",value:function(){this.props.onTransitionEnd&&(this.state.displaySameSlide||this.state.isDragging||this.props.onTransitionEnd())}},{key:"render",value:function(){var e=this,t=this.props;t.action;var l=t.animateHeight,h=t.animateTransitions,c=t.axis,b=t.children,m=t.containerStyle,O=t.disabled;t.disableLazyLoading;var x=t.enableMouseEvents;t.hysteresis,t.ignoreNativeScroll,t.index,t.onChangeIndex,t.onSwitching,t.onTransitionEnd,t.resistance;var q=t.slideStyle,E=t.slideClassName,P=t.springConfig,V=t.style;t.threshold;var A=(0,o.default)(t,["action","animateHeight","animateTransitions","axis","children","containerStyle","disabled","disableLazyLoading","enableMouseEvents","hysteresis","ignoreNativeScroll","index","onChangeIndex","onSwitching","onTransitionEnd","resistance","slideStyle","slideClassName","springConfig","style","threshold"]),L=this.state,ee=L.displaySameSlide,Y=L.heightLatest,I=L.indexLatest,he=L.isDragging,ve=L.renderOnlyActive,ze=O?{}:{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},Be=!O&&x?{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove}:{},ge=(0,n.default)({},v.slide,q),U,F;if(he||!h||ee)U="all 0s ease 0s",F="all 0s ease 0s";else if(U=T("transform",P),F=T("-webkit-transform",P),Y!==0){var ye=", ".concat(T("height",P));U+=ye,F+=ye}var $={height:null,WebkitFlexDirection:y.flexDirection[c],flexDirection:y.flexDirection[c],WebkitTransition:F,transition:U};if(!ve){var Se=y.transform[c](this.indexCurrent*100);$.WebkitTransform=Se,$.transform=Se}return l&&($.height=Y),g.createElement(pe.Provider,{value:this.getSwipeableViewsContext()},g.createElement("div",(0,n.default)({ref:this.setRootNode,style:(0,n.default)({},y.root[c],V)},A,ze,Be,{onScroll:this.handleScroll}),g.createElement("div",{ref:this.setContainerNode,style:(0,n.default)({},$,v.container,m),className:"react-swipeable-view-container"},g.Children.map(b,function(Ge,xe){if(ve&&xe!==I)return null;var be,we=!0;return xe===I&&(we=!1,l&&(be=e.setActiveSlide,ge.overflowY="hidden")),g.createElement("div",{ref:be,style:ge,className:E,"aria-hidden":we,"data-swipeable":"true"},Ge)}))))}}]),f}(g.Component);j.displayName="ReactSwipableView",j.propTypes={},j.defaultProps={animateHeight:!1,animateTransitions:!0,axis:"x",disabled:!1,disableLazyLoading:!1,enableMouseEvents:!1,hysteresis:.6,ignoreNativeScroll:!1,index:0,threshold:5,springConfig:{duration:"0.35s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},resistance:!1};var $e=j;return C.default=$e,C}(function(r){var i=Ue;Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(r,"SwipeableViewsContext",{enumerable:!0,get:function(){return n.SwipeableViewsContext}});var n=i(gt())})(Ye);const St=Ke(Ye);export{St as S,vt as r};
