"use strict";(self.webpackChunkpumpkin_dev=self.webpackChunkpumpkin_dev||[]).push([[7918],{4560:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var n=a(9301),r=a(3618),l=a(7075);var i=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(r.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(r.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},s=a(7695),o=a(2313),c=a(6835);function d(e){var t=e.siteTitle,a=e.versionLabel;return n.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function m(e){var t=e.siteTitle,a=e.versionLabel;return n.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function u(e){var t=e.versionLabel,a=e.to,i=e.onClick;return n.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:i},n.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var v=function(){var e=(0,s.Z)().siteConfig.title,t=(0,o.gA)({failfast:!0}).pluginId,a=(0,c.J)(t).savePreferredVersionName,r=(0,o.zu)(t),l=(0,o.Jo)(t),i=l.latestDocSuggestion,v=l.latestVersionSuggestion;if(!v)return n.createElement(n.Fragment,null);var h,p=null!=i?i:(h=v).docs.find((function(e){return e.id===h.mainDocId}));return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,"current"===r.name?n.createElement(d,{siteTitle:e,versionLabel:r.label}):n.createElement(m,{siteTitle:e,versionLabel:r.label})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:v.label,to:p.path,onClick:function(){return a(v.name)}})))},h=a(7274);function p(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(l.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return n.createElement(l.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function f(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement(n.Fragment,null,n.createElement(l.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(p,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(E,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var g=a(2894),b=a(422),_=a(8557),L=a(4927),N="docItemContainer_C+Ke",k="lastUpdated_pnqH",U="docItemCol_H7FE";var Z=function(e){var t,a=e.content,r=a.metadata,l=a.frontMatter,s=l.image,c=l.keywords,d=l.hide_title,m=l.hide_table_of_contents,u=r.description,p=r.title,E=r.editUrl,Z=r.lastUpdatedAt,T=r.formattedLastUpdatedAt,w=r.lastUpdatedBy,y=(0,o.gA)({failfast:!0}).pluginId,C=(0,o.gB)(y),A=(0,o.zu)(y),B=C.length>1,I=!d&&void 0===a.contentTitle;return n.createElement(n.Fragment,null,n.createElement(h.Z,{title:p,description:u,keywords:c,image:s}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,L.Z)("col",(t={},t[U]=!m,t))},n.createElement(v,null),n.createElement("div",{className:N},n.createElement("article",null,B&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",A.label),n.createElement("div",{className:"markdown"},I&&n.createElement(_.N,null,p),n.createElement(a,null)),(E||Z||w)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},E&&n.createElement(b.Z,{editUrl:E})),n.createElement("div",{className:(0,L.Z)("col",k)},(Z||w)&&n.createElement(f,{lastUpdatedAt:Z,formattedLastUpdatedAt:T,lastUpdatedBy:w})))),n.createElement(i,{metadata:r}))),!m&&a.toc&&n.createElement("div",{className:"col col--3"},n.createElement(g.Z,{toc:a.toc}))))}},422:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(9301),r=a(7075),l=a(1810),i=a(6919),s=a(4927),o="iconEdit_vK3U",c=["className"],d=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(d,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},8557:function(e,t,a){a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(6919),r=a(1810),l=a(9301),i=a(4927),s=a(7075),o=a(6835),c="enhancedAnchor_uCgO",d="h1Heading_Qw0s",m=["id"],u=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0,className:d}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,r=e.id,d=(0,n.Z)(e,m),u=(0,o.LU)().navbar.hideOnScroll;return r?l.createElement(t,d,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(a={},a[c]=!u,a)),id:r}),d.children,l.createElement("a",{className:"hash-link",href:"#"+r,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,d)});var t}},2894:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(9301),r=a(4927);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var c=o[r],d=c.href,m=decodeURIComponent(d.substring(d.indexOf("#")+1));n.id===m&&(l&&l.classList.remove(t),c.classList.add(t),i(c),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_d7-6",s="table-of-contents__link";function o(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return l(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(o,{toc:t}))}}}]);