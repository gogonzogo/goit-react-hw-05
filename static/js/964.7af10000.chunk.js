"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[964],{644:function(e,n,t){t.d(n,{$h:function(){return r},CJ:function(){return s},TS:function(){return i},_n:function(){return a},hH:function(){return c}});var r="5d8e08b77a668b368d7194faf94b14f5",a="https://api.themoviedb.org/3",i="https://image.tmdb.org/t/p/w500",c="https://placehold.jp/84848b/ffffff/200x300.jpg?text=Movie%20Poster%20Unavailable",s="https://placehold.jp/95959d/ffffff/80x120.png?text=NO%20IMAGE%20AVAILABLE"},290:function(e,n,t){t.d(n,{Df:function(){return o},TP:function(){return u},V0:function(){return l}});var r=t(861),a=t(757),i=t.n(a),c=t(243),s=t(644);c.Z.defaults.baseURL=s._n;var o=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s.$h));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n).concat(t,"?api_key=").concat(s.$h));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s.$h,"&query=").concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},254:function(e,n,t){t.d(n,{Z:function(){return l}});var r="MovieCard_movieGalleryItem__dnDEx",a="MovieCard_movieGalleryImg__9rhm1",i="MovieCard_movieItemDetails__QiHqU",c="MovieCard_movieGalleryDetailItem__w2MbF",s=t(644),o=t(809),u=t(184),l=function(e){var n=e.movie,t=e.releaseYear,l=e.userScore,f=e.overview,m=e.genres,h=e.isLoading,d="".concat(s.TS).concat(n.poster_path);return h?(0,u.jsx)(o.Z,{}):(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("li",{className:r,children:[(0,u.jsx)("img",{className:a,src:function(e){return e.poster_path?d:s.hH}(n),alt:n.title,"data-value":n.id,width:"200px"}),(0,u.jsxs)("ul",{className:i,children:[t&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("li",{className:c,children:n.title||n.original_name}),(0,u.jsx)("li",{className:c,children:t.slice(0,4)})]}),l&&(0,u.jsxs)("li",{className:c,children:["User Score: ",l]}),f&&(0,u.jsx)("li",{className:c,children:f}),m&&(0,u.jsxs)("li",{className:c,children:["Genres:"," ",m.map((function(e){return(0,u.jsxs)("span",{children:[e.name," "]},e.id)}))]})]})]})})}},845:function(e,n,t){t.d(n,{Z:function(){return o}});var r="MovieGallery_movieGallery__M2pL-",a=t(689),i=t(254),c=t(809),s=t(184),o=function(e){var n=e.movies,t=e.isLoading,o=(0,a.s0)();if(n)return t?(0,s.jsx)(c.Z,{}):(0,s.jsx)("ul",{className:r,onClick:function(e){if("IMG"===e.target.nodeName){var n=e.target.dataset.value;o("/movies/".concat(n))}},children:n.map((function(e){return(0,s.jsx)(i.Z,{movie:e,isLoading:t},e.id)}))})}},964:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(439),a="Movies_movieSearchContainer__Nvnzc",i={searchFormInput:"SearchForm_searchFormInput__3mF-P",searchFormContainer:"SearchForm_searchFormContainer__eByRx"},c=t(791),s=t(184),o=function(e){var n=e.onSubmit,t=(0,c.useState)(""),a=(0,r.Z)(t,2),o=a[0],u=a[1];return(0,s.jsx)("div",{className:i.searchContainer,children:(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(o)},className:i.searchFormContainer,children:[(0,s.jsx)("input",{className:i.searchFormInput,name:"search",type:"text",value:o,onChange:function(e){var n=e.target.value;u(n)}}),(0,s.jsx)("button",{className:i.searchFormButton,type:"submit",children:"Search"})]})})},u=t(845),l=t(87),f=t(290),m=function(){var e=(0,l.lr)(),n=(0,r.Z)(e,2),t=n[0],i=n[1],m=(0,c.useState)([]),h=(0,r.Z)(m,2),d=h[0],v=h[1],p=(0,c.useState)(!1),x=(0,r.Z)(p,2),_=x[0],j=x[1],g=(0,c.useState)(null),b=(0,r.Z)(g,2),y=b[0],Z=b[1],N=(0,c.useState)(!1),S=(0,r.Z)(N,2),w=S[0],C=S[1];return(0,c.useEffect)((function(){var e=t.get("query");e&&(j(!0),(0,f.V0)(e).then((function(e){return v(e.results)})).catch((function(e){return Z(e)})).finally((function(){j(!1),C(!0)})))}),[t]),(0,s.jsxs)("div",{className:a,children:[(0,s.jsx)(o,{onSubmit:function(e){e&&i({query:e})}}),w&&d.length<1&&!y?(0,s.jsx)("h1",{children:"No movies match search"}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(u.Z,{movies:d,isLoading:_})})]})}}}]);
//# sourceMappingURL=964.7af10000.chunk.js.map