(this["webpackJsonpsolar-website"]=this["webpackJsonpsolar-website"]||[]).push([[0],[,,,,function(e,A,t){e.exports={movieContainer:"SelectedMovie_movieContainer__3GLyR",movieCard:"SelectedMovie_movieCard__1AlUH",loading:"SelectedMovie_loading__3Q6NY",movieInfo:"SelectedMovie_movieInfo__2LLNK",closeButton:"SelectedMovie_closeButton__2HLI_"}},,,,,function(e,A,t){e.exports={movieGrid:"MovieGrid_movieGrid__16eFt",placeholder:"MovieGrid_placeholder__3-5Ws"}},,function(e,A,t){e.exports={badge:"Badge_badge__1xCUA"}},function(e,A,t){e.exports={logo:"Logo_logo__1XOJC"}},function(e,A,t){e.exports={movie:"Movie_movie__3i11R"}},function(e,A,t){e.exports={spinner:"Spinner_spinner__kptye"}},function(e,A,t){e.exports={search:"Search_search__30hhR",svg_btn:"Search_svg_btn__O8GSe"}},,,,,,,,function(e,A,t){},function(e,A,t){"use strict";t.r(A);var s=t(1),o=t.n(s),c=t(10),r=t.n(c),g=t(2),n=t(0),C=Object(s.createContext)(null);function i(e){var A=e.children,t=Object(s.useState)([]),o=Object(g.a)(t,2),c=o[0],r=o[1],i=Object(s.useState)(null),a=Object(g.a)(i,2),Q=a[0],B=a[1];return Object(n.jsx)(C.Provider,{value:{movies:c,setMovies:r,movieId:Q,setMovieId:B},children:A})}function a(){return Object(s.useContext)(C)}var Q=Object(s.createContext)(null);function B(e){var A=e.children,t=Object(s.useState)(1),o=Object(g.a)(t,2),c=o[0],r=o[1],C=Object(s.useState)(0),i=Object(g.a)(C,2),a=i[0],B=i[1],I=Object(s.useState)(0),l=Object(g.a)(I,2),E=l[0],h=l[1];return Object(n.jsx)(Q.Provider,{value:{status:c,setStatus:r,delaySearch:a,setDelaySearch:B,delayDetails:E,setDelayDetails:h},children:A})}function I(){return Object(s.useContext)(Q)}var l=t(11),E=t.n(l),h=function(){return Object(n.jsx)("div",{className:E.a.badge,children:Object(n.jsx)("p",{children:"This website is solar-powered! It has been designed to use less energy when accessing our content. \u2600\ufe0f"})})},u=t.p+"static/media/logo.3dbc3c4d.png",j=t(12),d=t.n(j),v=function(){return Object(n.jsx)("div",{className:d.a.logo,children:Object(n.jsx)("img",{src:u,alt:"Movie Search"})})},b=t(16),U="data:image/png;base64,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q2FsF3HWtbW19tprry3iVM4xp4DCmhNwEYeP3gb6k9UiJIc7x8svv9weeeSR4Z7AmTsJKKxOTMM+aPQ1q3EfDz744Libp97W55ipJyx850MPPTRz+ml+k+Y085M4oLeAwupNt7gDR19gH/cxeqv46KOPjrtr4m0nTpyYeN9eu2P0tafR16Jm+Th+/PjEh0+a08QD3LFwAV90Xzjp4k44+hu/t99+e+tvum7cuDH1xAcOHGjPPfdcm/YbbuoJduGdjz32WHvnnXfa559/3n777bepr/CBBx5oL730Unv++eenPs6dqxVQWKv1/89nf/jhh9urr776n4/zgPECjz/+eHv99dfH3+nWcgLeEpYbmcAE9q6Awtq7s/fKCZQT8Jaw3MgWF/j69evto48+at99912J7+QefdF79A22J0+eXByCM5US8CesUuNabNhz5861b7/9tkRZjV75xsZGO3/+fPv+++8XC+FsZQQUVplRLTbozZs3t35WbrFnXc7Zvvnmm+U8kWdJJ+AtYbqRxEC//vrrzN/W0OW75m/fvh2fqNDq1q1bndP++OOPvq2hs1b+ByqsxDP666+/2vvvv9/+63uwtl/ClStX2s8//7z1c4nbt+3lX3/66af23nvvbV15oYvDF1980c6ePduOHTvW5eEeswIBbwlXgN71KUdvfbqW1fY5R7/pfPxf4Ouvv+5cVttmly9f3v7UrwkFFFbCoWxH+uOPP7Y/7fxrn2M6n7zYA3///feZE/ObmWypByispXJ7MgIE5hFQWPPoOZYAgaUKKKylcnsyAgTmEVBY8+g5lgCBpQoorKVyezICBOYRUFjz6DmWAIGlCiispXJ7MgIE5hFQWPPoDXzstOuLT3rqPsdMOlf12xd9TffqHrshv8JKPEXXdJ9vOIu+pvt8aRy9CAE/S7gIxYHO4Zru88G6pvt8fhmPVlgZp7Ijk2u678Do8alruvdAS3yIt4SJhyMaAQJRQGFFDysCBBILKKzEwxGNAIEooLCihxUBAokFFFbi4QwZbf/+/UOeftBzj/6Vax97U8Dkk899qGu6Hzp0qK2trZX8hyhG35/W9cM13btK1Xicwko8p6Gv6X7mzJmS/y7hk08+2Wlqfa7p/uabb7YXXnih0/k9aPkCCmv55p2fse813U+fPt3pOY4cOdLW19c7Pbbig/pc0/3LL79UWImH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",w=t(13),p=t.n(w);function m(e){var A=e.movie,t=A.imdbID,s=A.Title,o=(A.Poster,a().setMovieId),c=I().setStatus,r="N/A"!==A.Poster?A.Poster:U;return Object(n.jsxs)("article",{className:p.a.movie,onClick:function(){return e=t,c(0),void o(e);var e},children:[Object(n.jsx)("img",{src:r,alt:s}),Object(n.jsx)("h2",{children:s})]})}var F=t(9),O=t.n(F),x=t.p+"static/media/loader.f986ff88.gif",y=t(14),K=t.n(y);function f(){return Object(n.jsx)("div",{className:K.a.spinner,children:Object(n.jsx)("img",{src:x,alt:"Loading..."})})}function Y(){var e=a(),A=e.movies,t=e.setMovieId,s=I().status,o=A.map((function(e,A){return Object(n.jsx)(m,{movie:e,setMovieId:t},A)})),c=Object(b.a)(Array(10)).map((function(e,A){return Object(n.jsx)("div",{className:O.a.placeholder,children:Object(n.jsx)(f,{})},A)}));return 2===s?Object(n.jsx)("p",{children:"\ud83d\udea8 No movies found. Please try again"}):Object(n.jsx)("section",{className:O.a.movieGrid,children:0===s?c:o})}var M=t(3),W=t.n(M),Z=t(7);function G(e){return new Promise((function(A){return setTimeout(A,e)}))}var R=t.p+"static/media/search-icon.cc51b702.svg",D=t(15),J=t.n(D);function L(){var e=a().setMovies,A=I(),t=A.setStatus,o=A.delaySearch,c=Object(s.useState)(""),r=Object(g.a)(c,2),C=r[0],i=r[1],Q="bb03afad";function B(){return(B=Object(Z.a)(W.a.mark((function e(A){var s,c,r,g;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A.preventDefault(),s=C.trim().toLowerCase(),t(0),i(""),e.next=6,fetch("https://www.omdbapi.com/?s=".concat(s,"&apikey=").concat(Q));case 6:return c=e.sent,e.next=9,c.json();case 9:return r=e.sent,g=r.Search.filter((function(e){return"movie"===e.Type})),e.next=13,G(o);case 13:"True"===r.Response?l(g):E();case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(A){e(A),t(1)}function E(){t(2)}return Object(n.jsxs)("form",{className:J.a.search,onSubmit:function(e){return function(e){return B.apply(this,arguments)}(e)},children:[Object(n.jsx)("input",{placeholder:"Search",value:C,onChange:function(e){return i(e.target.value)},required:!0,autoFocus:!0}),Object(n.jsx)("button",{type:"submit",children:Object(n.jsx)("img",{src:R,alt:"search icon"})})]})}var k=t(4),V=t.n(k);function N(){var e=I(),A=e.status,t=e.setStatus,o=e.delayDetails,c=a(),r=c.movieId,C=c.setMovieId,i=Object(s.useState)(),Q=Object(g.a)(i,2),B=Q[0],l=Q[1],E="bb03afad";return Object(s.useEffect)((function(){var e=function(e){var A=document.getElementById("movie-card"),t=document.getElementById("movie-container");A!==e.target&&e.target===t&&C(null)};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[]),Object(s.useEffect)((function(){var e=function(){var e=Object(Z.a)(W.a.mark((function e(){var A,s;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?i=".concat(r,"&apikey=").concat(E));case 2:return A=e.sent,e.next=5,A.json();case 5:return s=e.sent,e.next=8,G(o);case 8:l(s),t(1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[E,r,t,o]),Object(n.jsx)("div",{className:V.a.movieContainer,id:"movie-container",children:Object(n.jsxs)("section",{className:V.a.movieCard,id:"movie-card",children:[Object(n.jsx)("button",{className:V.a.closeButton,onClick:function(){return C(null)},title:"Close",children:"\u2715"}),0===A?Object(n.jsx)("div",{className:V.a.loading,children:Object(n.jsx)(f,{})}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:"N/A"!==B.Poster?B.Poster:U,alt:B.Title}),Object(n.jsx)("div",{className:V.a.movieInfo,children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:B.Title}),Object(n.jsxs)("p",{children:["Year: ",B.Year]}),Object(n.jsxs)("p",{children:["Rating: ",B.imdbRating]}),Object(n.jsxs)("p",{children:["Genre: ",B.Genre]}),B.Directors?Object(n.jsxs)("p",{children:["Directors: ",B.Directors]}):Object(n.jsxs)("p",{children:["Director: ",B.Director]}),Object(n.jsxs)("p",{children:["Actors: ",B.Actors]}),Object(n.jsxs)("p",{children:["Plot: ",B.Plot]})]})})]})]})})}t(23);function P(){var e=Object(s.useState)(!1),A=Object(g.a)(e,2),t=A[0],o=A[1],c=a(),r=c.movieId,C=c.movies,i=I().status,Q=I(),B=Q.setDelaySearch,l=Q.setDelayDetails;return Object(s.useEffect)((function(){var e=new URLSearchParams(window.location.search),A=e.get("a")||0,t=e.get("b")||0,s=e.get("c")||!1;B(A),l(t),o(s)}),[B,l]),Object(n.jsxs)("div",{className:"App",children:[t&&Object(n.jsx)(h,{}),Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsxs)("div",{className:"App-searchbar",children:[Object(n.jsx)(v,{}),Object(n.jsx)(L,{}),!C.length&&1===i&&Object(n.jsx)("p",{children:"We've got information about your favourite movies!"})]}),Object(n.jsx)(Y,{}),r&&Object(n.jsx)(N,{})]})]})}r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(i,{children:Object(n.jsx)(B,{children:Object(n.jsx)(P,{})})})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.4251e8f2.chunk.js.map