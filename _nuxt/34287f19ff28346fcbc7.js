(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{174:function(t,e,n){"use strict";n.r(e);n(31);var r=n(24),c=n.n(r),o=n(77),l=n.n(o),d=n(9),v=n.n(d),m=n(16),_=n(41),w={transitions:"page",head:function(){return{title:"Francis Magallen — Front-end & UI Developer"}},asyncData:function(t){var e,n,r,o,d,w,f,title,desc,x,C,h;return regeneratorRuntime.async((function(k){for(;;)switch(k.prev=k.next){case 0:return t.context,e=t.error,n=t.req,k.prev=1,k.next=4,regeneratorRuntime.awrap(c.a.getApi(l.a.apiEndpoint,{req:n}));case 4:return r=k.sent,o={},k.next=8,regeneratorRuntime.awrap(r.getSingle("homepage"));case 8:return d=k.sent,o=d.data,k.next=12,regeneratorRuntime.awrap(r.getByUID("work-post","first-100-days"));case 12:return w=k.sent,k.next=15,regeneratorRuntime.awrap(r.getByUID("work-post","performance-wave"));case 15:return f=k.sent,title=v.a.RichText.asText(o.title),desc=v.a.RichText.asText(o.summary),x=v.a.RichText.asHtml(o.job_extra,m.a,_.a),C=v.a.RichText.asHtml(o.about_me),h=o.body,window.prismic.setupEditButton(),k.abrupt("return",{document:o,title:title,cta:x,desc:desc,about:C,workSlices:h,f100d:w,pwave:f,documentId:d.id});case 25:k.prev=25,k.t0=k.catch(1),e({statusCode:404,message:"Page not found"});case 28:case"end":return k.stop()}}),null,null,[[1,25]])},filters:{truncate:function(t,e){return t.length>e&&(t=t.substring(0,e-16)+"..."),t}}},f=n(5),component=Object(f.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container page"},[n("div",{staticClass:"is-spacing-lg"}),t._v(" "),n("section",{staticClass:"section"},[n("div",{staticClass:"columns reverse-column-m"},[n("div",{staticClass:"column is-half"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("h2",{staticClass:"page-overview is-size-4 p-tag"},[t._v(t._s(t.desc))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.cta)}})]),t._v(" "),n("div",{staticClass:"column"},[n("img",{staticClass:"image profile-image",attrs:{src:t.document.image.url,alt:"Francis Claide Magallen"}})])])]),t._v(" "),n("div",{staticClass:"is-spacing-lg"}),t._v(" "),n("section",{staticClass:"section work-sample"},[n("div",{staticClass:"columns is-variable is-8-widescreen"},[n("div",{staticClass:"column"},[n("nuxt-link",{attrs:{to:"/work/"+t.f100d.uid}},[n("figure",{staticClass:"image"},[n("img",{attrs:{src:t.f100d.data.image.url,alt:""}})]),t._v(" "),n("h4",[t._v(t._s(t.f100d.data.title[0].text))]),t._v(" "),n("p",[t._v(t._s(t._f("truncate")(t.f100d.data.description[0].text,125)))])])],1),t._v(" "),n("div",{staticClass:"column"},[n("nuxt-link",{attrs:{to:"/work/"+t.pwave.uid}},[n("figure",{staticClass:"image"},[n("img",{attrs:{src:t.pwave.data.image.url,alt:""}})]),t._v(" "),n("h4",[t._v(t._s(t.pwave.data.title[0].text))]),t._v(" "),n("p",[t._v(t._s(t._f("truncate")(t.pwave.data.description[0].text,125)))])])],1)]),t._v(" "),n("div",{staticClass:"has-text-centered"},[n("nuxt-link",{staticClass:"is-link",attrs:{to:"/work"}},[t._v("Browse my work")])],1)]),t._v(" "),n("div",{staticClass:"is-spacing-lg"}),t._v(" "),n("section",{staticClass:"section has-text-centered"},[n("div",{staticClass:"is-centered-copy",domProps:{innerHTML:t._s(t.about)}}),t._v(" "),n("nuxt-link",{staticClass:"is-link",attrs:{to:"/about"}},[t._v("Learn more about me")])],1),t._v(" "),n("prismic-edit-button",{attrs:{documentId:t.documentId}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);