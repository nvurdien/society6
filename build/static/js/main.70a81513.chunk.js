(this.webpackJsonpsociety6=this.webpackJsonpsociety6||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(3),i=n.n(r),s=(n(12),n(4)),o=n(5),u=n(7),d=n(6),l=(n(13),n(14),n(0)),h=function(t,e,n,c,a,r,i){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"uk-card uk-text-center",children:[Object(l.jsx)("div",{className:"uk-card-media-top",children:Object(l.jsx)("img",{src:e,alt:n})}),Object(l.jsxs)("div",{className:"uk-card-body",children:[Object(l.jsx)("h3",{className:"uk-card-title uk-margin-small-right",children:c}),Object(l.jsxs)("button",{className:"uk-button uk-button-link",style:{textDecoration:"none"},children:[Object(l.jsx)("span",{"uk-icon":"icon: heart; ratio: .8"})," ",a]}),Object(l.jsx)("p",{className:"uk-margin-remove-top",children:r}),Object(l.jsxs)("p",{children:["$",i]})]})]})},t)},j=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).state={data:{data:{attributes:{cards:[]}}}},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://raw.githubusercontent.com/dkdemand/plp-exercise/main/search.json").then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)})).then((function(e){return t.setState({data:e})})).catch((function(t){return console.error(t)}))}},{key:"render",value:function(){return Object(l.jsx)("div",{className:"uk-padding",children:Object(l.jsx)("div",{className:"uk-child-width-1-3","uk-grid":"",children:this.state.data.data.attributes.cards.length>0?this.state.data.data.attributes.cards.map((function(t,e){return h("".concat(t.id," ").concat(e),t.card.image.src,t.card.image.alt,t.card.title,t.product.promote_cnt,t.artist.display_name,t.product.price)})):null})})}}]),n}(a.a.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.70a81513.chunk.js.map