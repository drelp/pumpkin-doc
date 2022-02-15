"use strict";(self.webpackChunkpumpkin_dev=self.webpackChunkpumpkin_dev||[]).push([[7080],{9278:function(e,t,r){r.d(t,{Zo:function(){return a},kt:function(){return f}});var n=r(9301);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},a=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,a=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,u(u({ref:t},a),{},{components:r})):n.createElement(m,u({ref:t},a))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,u=new Array(o);u[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,u[1]=s;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5920:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return a},default:function(){return d}});var n=r(1810),i=r(6919),o=(r(9301),r(9278)),u=["components"],s={sidebar_position:4},c="Pull Request \u89c4\u8303",l={unversionedId:"community/pr-template",id:"community/pr-template",isDocsHomePage:!1,title:"Pull Request \u89c4\u8303",description:"Describe what this PR does / why we need it",source:"@site/docs/community/pr-template.md",sourceDirName:"community",slug:"/community/pr-template",permalink:"/docs/community/pr-template",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Issue\u6a21\u677f\u53ca\u5f00\u53d1\u6d41\u7a0b",permalink:"/docs/community/issue-temp-and-dev-process"},next:{title:"\u5f00\u6e90\u8bb8\u53ef\u8bc1\u4e66",permalink:"/docs/community/LICENSE"}},a=[{value:"Describe what this PR does / why we need it",id:"describe-what-this-pr-does--why-we-need-it",children:[]},{value:"Does this pull request fix one issue?",id:"does-this-pull-request-fix-one-issue",children:[]},{value:"Describe how you did it.",id:"describe-how-you-did-it",children:[]},{value:"Describe how to verify it.",id:"describe-how-to-verify-it",children:[]},{value:"Special notes for reviews.",id:"special-notes-for-reviews",children:[]}],p={toc:a};function d(e){var t=e.components,r=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pull-request-\u89c4\u8303"},"Pull Request \u89c4\u8303"),(0,o.kt)("h3",{id:"describe-what-this-pr-does--why-we-need-it"},"Describe what this PR does / why we need it"),(0,o.kt)("p",null,"\u63cf\u8ff0\u6b64PR\u7684\u4f5c\u7528/\u6211\u4eec\u9700\u8981\u5b83\u7684\u539f\u56e0"),(0,o.kt)("h3",{id:"does-this-pull-request-fix-one-issue"},"Does this pull request fix one issue?"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u8bf7\u6c42\u89e3\u51b3\u4e86\u4e00\u4e2a\u95ee\u9898\u5417\uff1f"),(0,o.kt)("h3",{id:"describe-how-you-did-it"},"Describe how you did it."),(0,o.kt)("p",null,"\u63cf\u8ff0\u4e00\u4e0b\u4f60\u662f\u5982\u4f55\u505a\u5230\u7684\u3002"),(0,o.kt)("h3",{id:"describe-how-to-verify-it"},"Describe how to verify it."),(0,o.kt)("p",null,"\u63cf\u8ff0\u5982\u4f55\u9a8c\u8bc1\u5b83\u3002"),(0,o.kt)("h3",{id:"special-notes-for-reviews"},"Special notes for reviews."),(0,o.kt)("p",null,"\u4ee3\u7801\u68c0\u67e5\u7684\u7279\u522b\u8bf4\u660e\u3002"))}d.isMDXComponent=!0}}]);