"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[472],{2639:function(e,t,r){r.d(t,{Z:function(){return s}});var a={},n=r(4691),i=r(184),s=function(){return(0,i.jsx)("div",{className:a.loaderContainer,children:(0,i.jsx)(n.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})})}},4254:function(e,t,r){r.d(t,{Z:function(){return u}});var a="MovieCard_movieGalleryItem__dnDEx",n="MovieCard_movieGalleryImg__9rhm1",i="MovieCard_movieItemDetails__QiHqU",s="MovieCard_movieGalleryDetailItem__w2MbF",c=r(5952),o=r(2639),l=r(184),u=function(e){var t=e.movie,r=e.releaseYear,u=e.userScore,d=e.overview,f=e.genres,m=e.isLoading,v=c.y.IMG_BASE_URL,p=c.y.MOVIE_IMG_PLACEHOLDER_URL,g="".concat(v).concat(t.poster_path);return m?(0,l.jsx)(o.Z,{}):(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("li",{className:a,children:[(0,l.jsx)("img",{className:n,src:function(e){return e.poster_path?g:p}(t),alt:t.title,"data-value":t.id,width:"200px"}),(0,l.jsxs)("ul",{className:i,children:[r&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("li",{className:s,children:t.title||t.original_name}),(0,l.jsx)("li",{className:s,children:r.slice(0,4)})]}),u&&(0,l.jsxs)("li",{className:s,children:["User Score: ",u]}),d&&(0,l.jsx)("li",{className:s,children:d}),f&&(0,l.jsxs)("li",{className:s,children:["Genres:"," ",f.map((function(e){return(0,l.jsxs)("span",{children:[e.name," "]},e.id)}))]})]})]})})}},2845:function(e,t,r){r.d(t,{Z:function(){return o}});var a="MovieGallery_movieGallery__M2pL-",n=r(7689),i=r(4254),s=r(2639),c=r(184),o=function(e){var t=e.movies,r=e.isLoading,o=(0,n.s0)();if(t)return r?(0,c.jsx)(s.Z,{}):(0,c.jsx)("ul",{className:a,onClick:function(e){if("IMG"===e.target.nodeName){var t=e.target.dataset.value;o("/movies/".concat(t))}},children:t.results.map((function(e){return(0,c.jsx)(i.Z,{movie:e,isLoading:r},e.id)}))})}},5952:function(e,t,r){r.d(t,{_:function(){return a},y:function(){return n}});var a=function(e,t,r){var a="/search/movie?query=".concat(r),n="/movie/".concat(e),i="/movie/".concat(e,"/credits"),s="/movie/".concat(e,"/reviews");switch(t){case"trending":return"/trending/all/day";case"search":return a;case"details":return n;case"cast":return i;case"reviews":return s;default:return}},n={API_KEY:"5d8e08b77a668b368d7194faf94b14f5",BASE_URL:"https://api.themoviedb.org/3",IMG_BASE_URL:"https://image.tmdb.org/t/p/w500",MOVIE_IMG_PLACEHOLDER_URL:"https://placehold.jp/84848b/ffffff/200x300.jpg?text=Movie%20Poster%20Unavailable",CAST_IMG_PLACEHOLDER_URL:"https://placehold.jp/95959d/ffffff/80x120.png?text=NO%20IMAGE%20AVAILABLE"}},1402:function(e,t,r){r.d(t,{Z:function(){return p},A:function(){return v}});var a=r(7689),n=r(5861),i=r(9439),s=r(7757),c=r.n(s),o=r(1243),l=r(2791),u=r(5952),d=function(e){return!e||e!==f()},f=function(){var e=new Date,t=e.getDate(),r=e.getMonth()+1;return"".concat(t,"-").concat(r)},m=function(e){var t=(0,l.useState)(null),r=(0,i.Z)(t,2),a=r[0],s=r[1],m=(0,l.useState)(null),v=(0,i.Z)(m,2),p=v[0],g=v[1],_=(0,l.useState)(0),h=(0,i.Z)(_,2),x=h[0],L=h[1],j=(0,l.useState)(!0),b=(0,i.Z)(j,2),I=b[0],S=b[1],y=u.y.API_KEY,E=u.y.BASE_URL;return(0,l.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var r,a,n,i,l,u;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&"/search/movie?query="!==e){t.next=4;break}return s(),S(!1),t.abrupt("return");case 4:if(t.prev=4,S(!0),!localStorage.getItem(e)){t.next=18;break}if(r=JSON.parse(localStorage.getItem(e)),a=r.timeStamp,n=r.responseData,d(a)){t.next=17;break}return s(n),g(null),S(!1),t.abrupt("return");case 17:localStorage.clear();case 18:return t.next=20,(0,o.Z)("".concat(E).concat(e),{params:{api_key:y,language:"en-US",adult:!1}});case 20:if(i=t.sent,0!==(l=i.data).total_results){t.next=26;break}return s(null),g(!0),t.abrupt("return");case 26:u=f(),localStorage.setItem(e,JSON.stringify({timeStamp:u,responseData:l})),s(i.data),g(null),L(i.data.total_results),t.next=38;break;case 33:t.prev=33,t.t0=t.catch(4),g(t.t0),s(null),console.log("Error fetching data from ".concat(e,": , ").concat(t.t0));case 38:return t.prev=38,S(!1),t.finish(38);case 41:case"end":return t.stop()}}),t,null,[[4,33,38,41]])})));return function(){return t.apply(this,arguments)}}();t()}),[e,y,E]),{data:a,error:p,isLoading:I,totalResults:x}},v=function(e,t){var r=(0,a.UO)().movieId,n=(0,u._)(r,e,t),i=m(n,t);return{movieId:r,URL:n,data:i.data,isLoading:i.isLoading,error:i.error}},p=v},1472:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var a="Trending_trendingTitle__EUXjL",n=r(1402),i=r(2845),s=r(184),c=function(){var e=(0,n.Z)("trending"),t=e.data,r=e.isLoading;return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:a,children:"Trending Today"}),(0,s.jsx)(i.Z,{movies:t,isLoading:r})]})},o=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(c,{})})}}}]);
//# sourceMappingURL=472.11e48f5d.chunk.js.map