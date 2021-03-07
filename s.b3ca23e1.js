var app=function(){"use strict";function n(){}function s(n){return n()}function a(){return Object.create(null)}function t(n){n.forEach(s)}function e(n){return"function"==typeof n}function p(n,s){return n!=n?s==s:n!==s}function o(n,s){n.appendChild(s)}function c(n){n.parentNode.removeChild(n)}function l(n){return document.createElement(n)}function u(n){return document.createTextNode(n)}function i(){return u(" ")}function r(n,s,a,t){return n.addEventListener(s,a,t),()=>n.removeEventListener(s,a,t)}function k(n,s,a){null==a?n.removeAttribute(s):n.getAttribute(s)!==a&&n.setAttribute(s,a)}function d(n,s){s=""+s,n.wholeText!==s&&(n.data=s)}let g;function f(n){g=n}function m(){const n=function(){if(!g)throw new Error("Function called outside component initialization");return g}();return(s,a)=>{const t=n.$$.callbacks[s];if(t){const e=function(n,s){const a=document.createEvent("CustomEvent");return a.initCustomEvent(n,!1,!1,s),a}(s,a);t.slice().forEach((s=>{s.call(n,e)}))}}}function h(n,s){const a=n.$$.callbacks[s.type];a&&a.slice().forEach((n=>n(s)))}const y=[],v=[],$=[],b=[],w=Promise.resolve();let x=!1;function M(n){$.push(n)}let E=!1;const C=new Set;function T(){if(!E){E=!0;do{for(let n=0;n<y.length;n+=1){const s=y[n];f(s),L(s.$$)}for(f(null),y.length=0;v.length;)v.pop()();for(let n=0;n<$.length;n+=1){const s=$[n];C.has(s)||(C.add(s),s())}$.length=0}while(y.length);for(;b.length;)b.pop()();x=!1,E=!1,C.clear()}}function L(n){if(null!==n.fragment){n.update(),t(n.before_update);const s=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,s),n.after_update.forEach(M)}}const _=new Set;function j(n,s){n&&n.i&&(_.delete(n),n.i(s))}function H(n,s,a,t){if(n&&n.o){if(_.has(n))return;_.add(n),undefined.c.push((()=>{_.delete(n),t&&(a&&n.d(1),t())})),n.o(s)}}function S(n){n&&n.c()}function A(n,a,p,o){const{fragment:c,on_mount:l,on_destroy:u,after_update:i}=n.$$;c&&c.m(a,p),o||M((()=>{const a=l.map(s).filter(e);u?u.push(...a):t(a),n.$$.on_mount=[]})),i.forEach(M)}function N(n,s){const a=n.$$;null!==a.fragment&&(t(a.on_destroy),a.fragment&&a.fragment.d(s),a.on_destroy=a.fragment=null,a.ctx=[])}function O(n,s){-1===n.$$.dirty[0]&&(y.push(n),x||(x=!0,w.then(T)),n.$$.dirty.fill(0)),n.$$.dirty[s/31|0]|=1<<s%31}function P(s,e,p,o,l,u,i=[-1]){const r=g;f(s);const k=s.$$={fragment:null,ctx:null,props:u,update:n,not_equal:l,bound:a(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r?r.$$.context:[]),callbacks:a(),dirty:i,skip_bound:!1};let d=!1;if(k.ctx=p?p(s,e.props||{},((n,a,...t)=>{const e=t.length?t[0]:a;return k.ctx&&l(k.ctx[n],k.ctx[n]=e)&&(!k.skip_bound&&k.bound[n]&&k.bound[n](e),d&&O(s,n)),a})):[],k.update(),d=!0,t(k.before_update),k.fragment=!!o&&o(k.ctx),e.target){if(e.hydrate){const n=function(n){return Array.from(n.childNodes)}(e.target);k.fragment&&k.fragment.l(n),n.forEach(c)}else k.fragment&&k.fragment.c();e.intro&&j(s.$$.fragment),A(s,e.target,e.anchor,e.customElement),T()}f(r)}class I{$destroy(){N(this,1),this.$destroy=n}$on(n,s){const a=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return a.push(s),()=>{const n=a.indexOf(s);-1!==n&&a.splice(n,1)}}$set(n){var s;this.$$set&&(s=n,0!==Object.keys(s).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}function K(s){let a,e;return{c:n,m(n,t){a||(e=[r(document.body,"keyup",s[3]),r(document.body,"keydown",s[4])],a=!0)},p:n,i:n,o:n,d(n){a=!1,t(e)}}}function D(n,s,a){let{paused:t=!1}=s;const e=m();let p=[];return n.$$set=n=>{"paused"in n&&a(0,t=n.paused)},n.$$.update=()=>{2&n.$$.dirty&&p.length>0&&e("combo",p.join("-"))},[t,p,e,()=>{a(1,p=[])},({key:n})=>{t||(a(1,p=[...p,n]),e(n),e("key",n))}]}class U extends I{constructor(n){super(),P(this,n,D,K,p,{paused:0})}}function J(n){let s,a,t,e,p,g,f,m,h,y,v,$,b,w,x,M,E,C,T,L,_,O,P,I,K,D,J,G,q,B,z,F,R,V,W,Q,X,Y,Z,nn,sn,an,tn,en,pn,on,cn,ln,un,rn,kn,dn,gn,fn,mn,hn,yn,vn,$n,bn,wn,xn,Mn,En,Cn,Tn,Ln,_n,jn,Hn,Sn,An,Nn,On,Pn,In,Kn,Dn,Un,Jn,Gn,qn,Bn,zn,Fn,Rn,Vn,Wn,Qn,Xn,Yn,Zn,ns,ss,as,ts,es,ps,os,cs,ls,us,is,rs,ks,ds,gs,fs,ms,hs,ys,vs,$s,bs,ws,xs,Ms,Es,Cs,Ts=n[0].join(", ")+"",Ls=n[2].join(", ")+"",_s=JSON.stringify(n[3],null,2)+"",js=JSON.stringify(n[4],null,2)+"";return G=new U({}),G.$on("Enter",n[6]),nn=new U({props:{paused:!n[1]}}),nn.$on("Escape",n[5]),mn=new U({}),mn.$on("combo",n[8]),Sn=new U({}),Sn.$on("Enter",n[9]),Nn=new U({}),Nn.$on("Escape",n[10]),Bn=new U({}),Bn.$on("key",n[11]),os=new U({}),os.$on("combo",n[12]),{c(){s=l("main"),a=l("h1"),a.textContent="svelte-keydown",t=i(),e=l("p"),e.innerHTML='<a href="https://npmjs.com/package/svelte-keydown"><img src="https://img.shields.io/npm/v/svelte-keydown.svg?color=%23ff3e00&amp;style=for-the-badge" alt="NPM"/></a>',p=i(),g=l("blockquote"),g.innerHTML="<p>Utility to listen for keyboard events.</p>",f=i(),m=l("p"),m.innerHTML='<a href="https://github.com/metonym/svelte-keydown.git">GitHub repo</a>',h=i(),y=l("p"),y.innerHTML='Utility component leveraging the <a href="https://svelte.dev/docs#svelte_body">svelte:body API</a> to listen for <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event">keydown</a> events.',v=i(),$=l("p"),$.innerHTML="<strong>Use Cases</strong>",b=i(),w=l("ul"),w.innerHTML="<li>toggle modals</li> \n<li>capture a combination of keys (i.e., “Meta-s”)</li>",x=i(),M=l("hr"),E=i(),C=l("p"),C.innerHTML="<strong>Table of Contents</strong>",T=l("ul"),T.innerHTML='<li><a href="#install">Install</a></li> \n<li><a href="#usage">Usage</a></li> \n<li><a href="#examples">Examples</a></li> \n<ul><li><a href="#escape-to-close-modal">Escape to Close Modal</a></li> \n<li><a href="#%E2%80%9Ccommand%2Bs%E2%80%9D-to-save">“Command+S” to Save</a></li> \n</ul><li><a href="#api">API</a></li> \n<ul><li><a href="#dispatched-events">Dispatched events</a></li> \n</ul><li><a href="#typescript">TypeScript</a></li> \n<li><a href="#changelog">Changelog</a></li> \n<li><a href="#license">License</a></li>',L=i(),_=l("h2"),_.textContent="Install",O=i(),P=l("pre"),I=i(),K=l("h2"),K.textContent="Usage",D=i(),J=l("div"),S(G.$$.fragment),q=u('\n\nPress "enter": '),B=u(Ts),z=l("pre"),F=i(),R=l("h2"),R.textContent="Examples",V=i(),W=l("h3"),W.textContent="Escape to Close Modal",Q=i(),X=l("p"),X.textContent="In this use case, keydown events are paused if the modal is not open.",Y=i(),Z=l("div"),S(nn.$$.fragment),sn=i(),an=l("button"),an.textContent="Toggle me",tn=i(),en=l("br"),pn=l("br"),on=u("\n\nToggled? "),cn=u(n[1]),ln=l("pre"),un=i(),rn=l("h3"),rn.textContent="“Command+S” to Save",kn=i(),dn=l("p"),dn.innerHTML="Use the <code>combo</code> dispatched event to listen for a combination of keys.",gn=i(),fn=l("div"),S(mn.$$.fragment),hn=i(),yn=u(Ls),vn=l("pre"),$n=i(),bn=l("h2"),bn.textContent="API",wn=i(),xn=l("table"),xn.innerHTML='<thead><tr><th style="text-align:left">Prop name</th> \n<th style="text-align:left">Value</th></tr></thead> \n<tbody><tr><td style="text-align:left">paused</td> \n<td style="text-align:left"><code>boolean</code> (default: <code>false</code>)</td></tr></tbody>',Mn=i(),En=l("h3"),En.textContent="Dispatched events",Cn=i(),Tn=l("h4"),Tn.innerHTML="<code>on:[Key]</code>",Ln=i(),_n=l("p"),_n.textContent="Example:",jn=i(),Hn=l("div"),S(Sn.$$.fragment),An=i(),S(Nn.$$.fragment),On=l("pre"),Pn=i(),In=l("h4"),In.innerHTML="<code>on:key</code>",Kn=i(),Dn=l("p"),Dn.innerHTML="Alternative API to <code>on:[Key]</code>.",Un=i(),Jn=l("p"),Jn.textContent="Example:",Gn=i(),qn=l("div"),S(Bn.$$.fragment),zn=i(),Fn=l("pre"),Rn=u(_s),Vn=u("\n"),Wn=l("pre"),Qn=i(),Xn=l("h4"),Xn.innerHTML="<code>on:combo</code>",Yn=i(),Zn=l("p"),Zn.textContent="Triggered when a sequence of keys are pressed and cleared when a keyup event is fired.",ns=i(),ss=l("p"),ss.textContent="Examples:",as=i(),ts=l("ul"),ts.innerHTML="<li>“Shift-S”</li> \n<li>“Meta-c” (Copy)</li> \n<li>“Meta-v” (Paste)</li>",es=i(),ps=l("div"),S(os.$$.fragment),cs=i(),ls=l("pre"),us=u(js),is=u("\n"),rs=l("pre"),ks=i(),ds=l("h2"),ds.textContent="TypeScript",gs=i(),fs=l("p"),fs.textContent="Svelte version 3.31 or greater is required to use this module with TypeScript.",ms=i(),hs=l("h2"),hs.textContent="Changelog",ys=i(),vs=l("p"),vs.innerHTML='<a href="https://github.com/metonym/svelte-keydown/tree/master/CHANGELOG.md">CHANGELOG.md</a>',$s=i(),bs=l("h2"),bs.textContent="License",ws=i(),xs=l("p"),xs.innerHTML='<a href="https://github.com/metonym/svelte-keydown/tree/master/LICENSE">MIT</a>',k(a,"id","svelte-keydown"),k(_,"id","install"),k(P,"class","language-bash"),k(K,"id","usage"),k(J,"class","code-fence"),k(z,"class","language-svelte"),k(z,"data-svelte",""),k(R,"id","examples"),k(W,"id","escape-to-close-modal"),k(Z,"class","code-fence"),k(ln,"class","language-svelte"),k(ln,"data-svelte",""),k(rn,"id","%E2%80%9Ccommand%2Bs%E2%80%9D-to-save"),k(fn,"class","code-fence"),k(vn,"class","language-svelte"),k(vn,"data-svelte",""),k(bn,"id","api"),k(En,"id","dispatched-events"),k(Tn,"id","on%3A%5Bkey%5D"),k(Hn,"class","code-fence"),k(On,"class","language-svelte"),k(On,"data-svelte",""),k(In,"id","on%3Akey"),k(qn,"class","code-fence"),k(Wn,"class","language-svelte"),k(Wn,"data-svelte",""),k(Xn,"id","on%3Acombo"),k(ps,"class","code-fence"),k(rs,"class","language-svelte"),k(rs,"data-svelte",""),k(ds,"id","typescript"),k(hs,"id","changelog"),k(bs,"id","license"),k(s,"class","markdown-body")},m(c,l){!function(n,s,a){n.insertBefore(s,a||null)}(c,s,l),o(s,a),o(s,t),o(s,e),o(s,p),o(s,g),o(s,f),o(s,m),o(s,h),o(s,y),o(s,v),o(s,$),o(s,b),o(s,w),o(s,x),o(s,M),o(s,E),o(s,C),o(s,T),o(s,L),o(s,_),o(s,O),o(s,P),P.innerHTML='<span class="token function">yarn</span> <span class="token function">add</span> -D svelte-keydown\n<span class="token comment"># OR</span>\n<span class="token function">npm</span> i -D svelte-keydown\n',o(s,I),o(s,K),o(s,D),o(s,J),A(G,J,null),o(J,q),o(J,B),o(s,z),z.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Keydown <span class="token keyword">from</span> <span class="token string">"svelte-keydown"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> events <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Keydown</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>Enter=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    events <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>events<span class="token punctuation">,</span> <span class="token string">"enter"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n\nPress "enter": <span class="token language-javascript"><span class="token punctuation">{</span>events<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">", "</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n',o(s,F),o(s,R),o(s,V),o(s,W),o(s,Q),o(s,X),o(s,Y),o(s,Z),A(nn,Z,null),o(Z,sn),o(Z,an),o(Z,tn),o(Z,en),o(Z,pn),o(Z,on),o(Z,cn),o(s,ln),ln.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> showModal <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">closeModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    showModal <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Keydown</span> <span class="token attr-name">paused=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token operator">!</span>showModal<span class="token punctuation">}</span></span> <span class="token attr-name"><span class="token namespace">on:</span>Escape=</span><span class="token language-javascript"><span class="token punctuation">{</span>closeModal<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    showModal <span class="token operator">=</span> <span class="token operator">!</span>showModal<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">></span></span>\n  Toggle me\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n\nToggled? <span class="token language-javascript"><span class="token punctuation">{</span>showModal<span class="token punctuation">}</span></span>\n',o(s,un),o(s,rn),o(s,kn),o(s,dn),o(s,gn),o(s,fn),A(mn,fn,null),o(fn,hn),o(fn,yn),o(s,vn),vn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> save <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Keydown</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>combo=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail <span class="token operator">===</span> <span class="token string">"Meta-s"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Save"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      save <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>save<span class="token punctuation">,</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n\n<span class="token language-javascript"><span class="token punctuation">{</span>save<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">", "</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n',o(s,$n),o(s,bn),o(s,wn),o(s,xn),o(s,Mn),o(s,En),o(s,Cn),o(s,Tn),o(s,Ln),o(s,_n),o(s,jn),o(s,Hn),A(Sn,Hn,null),o(Hn,An),A(Nn,Hn,null),o(s,On),On.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Keydown</span> <span class="token attr-name"><span class="token namespace">on:</span>Enter</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Keydown</span> <span class="token attr-name"><span class="token namespace">on:</span>Escape</span> <span class="token punctuation">/></span></span>\n',o(s,Pn),o(s,In),o(s,Kn),o(s,Dn),o(s,Un),o(s,Jn),o(s,Gn),o(s,qn),A(Bn,qn,null),o(qn,zn),o(qn,Fn),o(Fn,Rn),o(Fn,Vn),o(s,Wn),Wn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> key_events <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Keydown</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>key=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> detail <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    key_events <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>key_events<span class="token punctuation">,</span> detail<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>\n  <span class="token language-javascript"><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>key_events<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>\n',o(s,Qn),o(s,Xn),o(s,Yn),o(s,Zn),o(s,ns),o(s,ss),o(s,as),o(s,ts),o(s,es),o(s,ps),A(os,ps,null),o(ps,cs),o(ps,ls),o(ls,us),o(ls,is),o(s,rs),rs.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> combo_events <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Keydown</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>combo=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> detail <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    combo_events <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>combo_events<span class="token punctuation">,</span> detail<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>\n  <span class="token language-javascript"><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>combo_events<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>\n',o(s,ks),o(s,ds),o(s,gs),o(s,fs),o(s,ms),o(s,hs),o(s,ys),o(s,vs),o(s,$s),o(s,bs),o(s,ws),o(s,xs),Ms=!0,Es||(Cs=r(an,"click",n[7]),Es=!0)},p(n,[s]){(!Ms||1&s)&&Ts!==(Ts=n[0].join(", ")+"")&&d(B,Ts);const a={};2&s&&(a.paused=!n[1]),nn.$set(a),(!Ms||2&s)&&d(cn,n[1]),(!Ms||4&s)&&Ls!==(Ls=n[2].join(", ")+"")&&d(yn,Ls),(!Ms||8&s)&&_s!==(_s=JSON.stringify(n[3],null,2)+"")&&d(Rn,_s),(!Ms||16&s)&&js!==(js=JSON.stringify(n[4],null,2)+"")&&d(us,js)},i(n){Ms||(j(G.$$.fragment,n),j(nn.$$.fragment,n),j(mn.$$.fragment,n),j(Sn.$$.fragment,n),j(Nn.$$.fragment,n),j(Bn.$$.fragment,n),j(os.$$.fragment,n),Ms=!0)},o(n){H(G.$$.fragment,n),H(nn.$$.fragment,n),H(mn.$$.fragment,n),H(Sn.$$.fragment,n),H(Nn.$$.fragment,n),H(Bn.$$.fragment,n),H(os.$$.fragment,n),Ms=!1},d(n){n&&c(s),N(G),N(nn),N(mn),N(Sn),N(Nn),N(Bn),N(os),Es=!1,Cs()}}}function G(n,s,a){let t=[],e=!0;let p=[],o=[],c=[];return[t,e,p,o,c,function(){a(1,e=!1)},()=>{a(0,t=[...t,"enter"])},()=>{a(1,e=!e)},n=>{"Meta-s"===n.detail&&(console.log("Save"),a(2,p=[...p,n.detail]))},function(s){h(n,s)},function(s){h(n,s)},({detail:n})=>{a(3,o=[...o,n])},({detail:n})=>{a(4,c=[...c,n])}]}return new class extends I{constructor(n){super(),P(this,n,G,J,p,{})}}({target:document.body})}();
