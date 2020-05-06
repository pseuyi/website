var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function o(t){return document.createElement(t)}function u(){return t=" ",document.createTextNode(t);var t}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let p;function f(t){p=t}const d=[],m=[],g=[],b=[],w=Promise.resolve();let y=!1;function v(t){g.push(t)}let $=!1;const J=new Set;function T(){if(!$){$=!0;do{for(let t=0;t<d.length;t+=1){const e=d[t];f(e),z(e.$$)}for(d.length=0;m.length;)m.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];J.has(e)||(J.add(e),e())}g.length=0}while(d.length);for(;b.length;)b.pop()();y=!1,$=!1,J.clear()}}function z(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const M=new Set;function k(t,e){t&&t.i&&(M.delete(t),t.i(e))}function x(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),(void 0).c.push(()=>{M.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function I(t){t&&t.c()}function j(t,n,l){const{fragment:a,on_mount:i,on_destroy:c,after_update:o}=t.$$;a&&a.m(n,l),v(()=>{const n=i.map(e).filter(s);c?c.push(...n):r(n),t.$$.on_mount=[]}),o.forEach(v)}function B(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(d.push(t),y||(y=!0,w.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(e,s,l,a,i,c,o=[-1]){const u=p;f(e);const h=s.props||{},d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:o};let m=!1;d.ctx=l?l(e,h,(t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=s)&&(d.bound[t]&&d.bound[t](s),m&&U(e,t)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!a&&a(d.ctx),s.target&&(s.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(s.target)):d.fragment&&d.fragment.c(),s.intro&&k(e.$$.fragment),j(e,s.target,s.anchor),T()),f(u)}class _{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function C(e){let n;return{c(){n=o("section"),n.innerHTML='<header>\n    is a computer programmer based in chinatown, nyc.\n  </header> \n  <p>\n  they are interested in frameworks for social progress, <a href="https://hydra-editor.glitch.me/?sketch_id=D5F8r9Tt2gfz9iTF&amp;code=JTJGJTJGJTIwJTQwcHNldXlpJTBBJTBBb3NjKDclMkMlMjAwLjEpJTBBJTIwJTIwLmFkZChub2lzZSgwLjclMkMlMjAwLjEpKSUwQSUyMCUyMC5jb2xvcigyJTJDJTIwMiUyQyUyMDEwMCklMEElMjAlMjAuY29sb3JhbWEoMTAwKSUwQSUyMCUyMC5tb2R1bGF0ZSh2b3Jvbm9pKDEwJTJDJTIwMiUyQyUyMDUpJTBBJTIwJTIwJTIwJTIwLmthbGVpZCg0MDApJTBBJTIwJTIwJTIwJTIwLnNjYWxlKCglN0J0aW1lJTdEKSUzRCUzRU1hdGguc2luKHRpbWUpKjAuNSUyQjEpJTBBJTIwJTIwJTIwJTIwLm1vZHVsYXRlKG5vaXNlKDAuNiUyQzAuNSkpJTJDJTBBJTIwJTIwJTIwJTIwKCklMjAlM0QlM0UlMjBhLmZmdCU1QjIlNUQlMEElMjAlMjAlMjApJTBBJTIwJTIwLm91dCgp">expression with code</a>,\n    and experimenting with ways of thinking.\n  </p> \n  <header>currently</header> \n  <p>\n  they are thinking about type systems, <a href="https://en.wikipedia.org/wiki/Abstract_nonsense">abstract nonsense</a>, functional paradigms, and minimal web\n    frameworks. they are most experienced with data driven web applications but\n    are curious about other things too!\n  </p> \n\n  <header>recently</header> \n  <p>\n    they were at the recurse center, a programming retreat in brooklyn, nyc.\n    before that they worked on community management software.\n  </p>'},m(t,e){i(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class E extends _{constructor(t){super(),A(this,t,null,C,l,{})}}function S(e){let n;return{c(){n=o("div"),n.innerHTML='<a href="https://github.com/pseuyi">gh</a> \n  <a href="https://www.linkedin.com/in/pseuyi/">li</a> \n  <a href="https://www.are.na/freda-nada">are.na</a> \n  <a href="https://twitter.com/pseuyi">tw</a> \n  <a href="https://docs.google.com/document/d/18GQSqlOH4n46326_tAB26Go9NKEBiMQGqiRomDJTP6w/edit?usp=sharing">cv</a>'},m(t,e){i(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class L extends _{constructor(t){super(),A(this,t,null,S,l,{})}}function N(e){let n;return{c(){n=o("ul"),n.innerHTML='<li class="svelte-11rbzt2"><h2 class="svelte-11rbzt2">apps</h2></li> \n  <ul class="svelte-11rbzt2"><li class="svelte-11rbzt2"><a href="https://arcane-scrubland-08669.herokuapp.com/">set</a></li> \n    <li class="svelte-11rbzt2"><a href="/2048">2048</a></li> \n    <li class="svelte-11rbzt2"><a href="/sequencer">sequencer</a></li> \n    <li class="svelte-11rbzt2"><a href="https://iso-note.herokuapp.com/">markdown + html notes</a></li> \n    <li class="svelte-11rbzt2"><a href="/magiclamp">web terminal</a></li> \n    <li class="svelte-11rbzt2"><a href="https://vespertine-rhythms.herokuapp.com/">connect places</a></li></ul> \n\n  <li class="svelte-11rbzt2"><h2 class="svelte-11rbzt2">workshops</h2></li> \n  <ul class="svelte-11rbzt2"><li class="svelte-11rbzt2"><a href="https://github.com/pseuyi/react-ladies-lightning">writing react strategically @ react ladies</a></li> \n    <li class="svelte-11rbzt2"><a href="https://github.com/pseuyi/gdi-core-git-github">intro to git and github @ girl develop it hacktober</a></li> \n    <li class="svelte-11rbzt2"><a href="https://gist.github.com/pseuyi/407944acd0b4f09a8f9686d32f844117">intro to javascript @ girl develop it</a></li></ul> \n  <li class="svelte-11rbzt2"><h2 class="svelte-11rbzt2">sketches</h2></li> \n  <ul class="svelte-11rbzt2"><li class="svelte-11rbzt2"><a href="https://www.youtube.com/watch?v=iVCSJyFWHSs">eulerroom 2020</a></li> \n    <li class="svelte-11rbzt2"><a href="/modes">webmidi piano scales</a></li> \n    <li class="svelte-11rbzt2"><a href="/grammar">rita + processing</a></li> \n\n    <li class="svelte-11rbzt2"><a href="https://blockmate.herokuapp.com/">eth wallet</a></li> \n    <li class="svelte-11rbzt2"><a href="https://clubfriend.herokuapp.com/">clubfriend api</a></li> \n    <li class="svelte-11rbzt2"><a href="http://tilde.learning-gardens.co/~freda/">tilde club</a></li> \n\n    <li class="svelte-11rbzt2"><a href="/e-doser">mushrooms in vr</a></li></ul> \n\n  <li class="svelte-11rbzt2"><h2 class="svelte-11rbzt2">archive</h2></li> \n  <ul class="svelte-11rbzt2"><li class="svelte-11rbzt2"><a href="/2017">2017</a></li> \n    <li class="svelte-11rbzt2"><a href="/2016">2016</a></li></ul>',h(n,"class","svelte-11rbzt2")},m(t,e){i(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class K extends _{constructor(t){super(),A(this,t,null,N,l,{})}}function Q(e){let n;return{c(){n=o("section"),n.innerHTML='<a href="https://webring.recurse.com"><img alt="recurse center logo" width="32px" src="https://webring.recurse.com/icon.png"></a>'},m(t,e){i(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class D extends _{constructor(t){super(),A(this,t,null,Q,l,{})}}function G(e){let n,r,s,l,p,f,d,m,g,b;const w=new L({}),y=new E({}),v=new K({}),$=new D({});return{c(){n=o("main"),r=o("img"),l=u(),I(w.$$.fragment),p=u(),f=o("h2"),f.textContent="freda suyi ding",d=u(),I(y.$$.fragment),m=u(),I(v.$$.fragment),g=u(),I($.$$.fragment),h(r,"alt","photo of freda"),r.src!==(s="/pic.png")&&h(r,"src","/pic.png"),h(r,"ratio","70%"),h(f,"class","svelte-1qrcxhe"),h(n,"class","svelte-1qrcxhe")},m(t,e){i(t,n,e),a(n,r),a(n,l),j(w,n,null),a(n,p),a(n,f),a(n,d),j(y,n,null),a(n,m),j(v,n,null),a(n,g),j($,n,null),b=!0},p:t,i(t){b||(k(w.$$.fragment,t),k(y.$$.fragment,t),k(v.$$.fragment,t),k($.$$.fragment,t),b=!0)},o(t){x(w.$$.fragment,t),x(y.$$.fragment,t),x(v.$$.fragment,t),x($.$$.fragment,t),b=!1},d(t){t&&c(n),B(w),B(y),B(v),B($)}}}return new class extends _{constructor(t){super(),A(this,t,null,G,l,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
