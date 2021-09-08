(this["webpackJsonpmovie-library-crud"]=this["webpackJsonpmovie-library-crud"]||[]).push([[0],{30:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(22),c=n.n(r),s=(n(30),n(10)),o=n(2),l=n(9),u=n.n(l),d=n(15),h=n(5),b=n(6),v=n(11),m=n(8),j=n(7),p=n(3),O=n.n(p),f=n(0),g=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)("p",{children:"Carregando..."})})}}]),n}(i.Component),x=n(18),y=n(16),k=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).state=Object(y.a)({},e.movie),i.handleSubmit=i.handleSubmit.bind(Object(v.a)(i)),i}return Object(b.a)(n,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(x.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{htmlFor:"movie_title",children:["T\xedtulo",Object(f.jsx)("div",{children:Object(f.jsx)("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}})})]})})}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{htmlFor:"movie_subtitle",children:["Subt\xedtulo",Object(f.jsx)("div",{children:Object(f.jsx)("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}})})]})})}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("label",{htmlFor:"movie_image",children:["Imagem",Object(f.jsx)("div",{children:Object(f.jsx)("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}})})]})})}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{htmlFor:"movie_storyline",children:["Sinopse",Object(f.jsx)("div",{children:Object(f.jsx)("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}})})]})})}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{htmlFor:"movie_genre",children:["G\xeanero",Object(f.jsx)("div",{children:Object(f.jsxs)("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)},children:[Object(f.jsx)("option",{value:"action",children:"A\xe7\xe3o"}),Object(f.jsx)("option",{value:"comedy",children:"Com\xe9dia"}),Object(f.jsx)("option",{value:"thriller",children:"Suspense"}),Object(f.jsx)("option",{value:"fantasy",children:"Fantasia"})]})})]})})}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{htmlFor:"movie_rating",children:["Avalia\xe7\xe3o",Object(f.jsx)("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}})]})})}},{key:"renderSubmitButton",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"button",onClick:this.handleSubmit,children:"Submit"})})}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("form",{className:"movie-card",children:[this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()]}),Object(f.jsx)(s.b,{to:"/",className:"button",children:"Voltar"})]})}}]),n}(a.a.Component),S=(O.a.shape,O.a.string,O.a.number,O.a.func,k),w=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.movie,t=e.id,n=e.title,i=e.subtitle,a=e.storyline,r=e.imagePath;return Object(f.jsxs)("section",{"data-testid":"movie-card",className:"movie-card",children:[Object(f.jsx)("h4",{className:"movie-card-title",children:n}),Object(f.jsx)("img",{src:r,alt:n,className:"movie-card-image"}),Object(f.jsx)("h5",{className:"movie-card-subtitle",children:i}),Object(f.jsx)("p",{className:"movie-card-storyline",children:a}),Object(f.jsx)(s.b,{to:"/movies/".concat(t),className:"link",children:"VER DETALHES"})]})}}]),n}(a.a.Component),N=(O.a.shape,O.a.string,O.a.number,w),I=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(f.jsx)("header",{className:"movie-card-header",children:Object(f.jsx)("h1",{className:"page-title",children:"Movie Card Library Crud"})})}}]),n}(a.a.Component),M=n(25),C=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(C));var _=function(){return JSON.parse(localStorage.getItem("movies"))},P=function(e){return localStorage.setItem("movies",JSON.stringify(e))},A="OK",D=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},F=function(e){var t=_().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){D(t)(e)}))},R=function(e){return new Promise((function(t){var n=_().map((function(t){return t.id===parseInt(e.id,10)?Object(y.a)(Object(y.a)({},t),e):t}));P(n),D(A)(t)}))},T=function(e){return new Promise((function(t){var n=_(),i=n[n.length-1].id+1,a=Object(y.a)(Object(y.a)({},e),{},{id:i});n=[].concat(Object(M.a)(n),[a]),P(n),D(A)(t)}))},E=function(e){var t=_();return t=t.filter((function(t){return t.id!==parseInt(e,10)})),P(t),new Promise((function(e){D({status:A})(e)}))},G=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).state={movie:{},loading:!0,redirect:!1},i.handleSubmit=i.handleSubmit.bind(Object(v.a)(i)),i.getMovieData=i.getMovieData.bind(Object(v.a)(i)),i}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.getMovieData()}},{key:"handleSubmit",value:function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t);case 2:this.setState({redirect:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieData",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,F(t);case 3:n=e.sent,this.setState({loading:!1,movie:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.movie;return e.redirect?Object(f.jsx)(o.a,{to:"/movie-card-library-crud"}):t?Object(f.jsx)(g,{}):Object(f.jsx)("div",{"data-testid":"edit-movie",children:Object(f.jsx)(S,{movie:n,onSubmit:this.handleSubmit})})}}]),n}(i.Component),V=(O.a.shape,O.a.string,G),L=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).state={loading:!0,movie:[]},e.fetchMovie=e.fetchMovie.bind(Object(v.a)(e)),e.removeMovie=e.removeMovie.bind(Object(v.a)(e)),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"fetchMovie",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,F(t);case 3:n=e.sent,this.setState({loading:!1,movie:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeMovie",value:function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.movie,i=n.id,a=n.title,r=n.storyline,c=n.imagePath,o=n.genre,l=n.rating,u=n.subtitle;return t.loading?Object(f.jsx)(g,{}):Object(f.jsxs)("div",{children:[Object(f.jsxs)("section",{"data-testid":"movie-details",className:"movie-card",children:[Object(f.jsx)("h2",{className:"movie-card-title",children:"Title: ".concat(a)}),Object(f.jsx)("img",{alt:"Movie Cover",src:"../".concat(c),className:"movie-card-image"}),Object(f.jsx)("p",{className:"movie-card-subtitle",children:"Subtitle: ".concat(u)}),Object(f.jsx)("p",{className:"movie-card-storyline",children:"Storyline: ".concat(r)}),Object(f.jsx)("p",{children:"Genre: ".concat(o)}),Object(f.jsx)("p",{children:"Rating: ".concat(l)})]}),Object(f.jsx)(s.b,{to:"/movies/".concat(i,"/edit"),className:"button",children:"EDITAR"}),Object(f.jsx)(s.b,{to:"/movie-card-library-crud",onClick:function(){return e.removeMovie(i)},className:"button",children:"DELETAR"}),Object(f.jsx)(s.b,{to:"/movie-card-library-crud",className:"button",children:"VOLTAR"})]})}}]),n}(i.Component),W=(O.a.shape,O.a.string,L),B=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).moviesData=function(e){return e.map((function(e){return Object(f.jsx)(N,{movie:e,className:"movie-card-body"},e.title)}))},e.state={movies:[],loading:!0},e.fetchMovies=e.fetchMovies.bind(Object(v.a)(e)),e.moviesData=e.moviesData.bind(Object(v.a)(e)),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchMovies();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchMovies",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=_();D(t)(e)}));case 2:t=e.sent,this.setState({movies:t,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movies,n=e.loading;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("main",{children:[Object(f.jsx)(I,{}),Object(f.jsx)("section",{"data-testid":"movie-list",className:"movie-list",children:n?Object(f.jsx)(g,{}):this.moviesData(t)})]}),Object(f.jsx)("footer",{children:Object(f.jsx)(s.b,{to:"/movies/new",className:"add-card",children:"ADICIONAR CART\xc3O"})})]})}}]),n}(i.Component),J=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).state={redirect:!1},i.handleSubmit=i.handleSubmit.bind(Object(v.a)(i)),i}return Object(b.a)(n,[{key:"handleSubmit",value:function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:this.setState({redirect:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.redirect?Object(f.jsx)(o.a,{to:"/movie-card-library-crud"}):Object(f.jsx)("div",{"data-testid":"new-movie",children:Object(f.jsx)(S,{onSubmit:this.handleSubmit})})}}]),n}(i.Component),K=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{"data-testid":"404-error",children:["P\xe1gina n\xe3o encontrada",Object(f.jsx)(s.b,{to:"/movie-card-library-crud",className:"link",children:"P\xe1gina Inicial"})]})}}]),n}(i.Component);n(41);var X=function(){return Object(f.jsx)(s.a,{children:Object(f.jsxs)(o.d,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/movie-card-library-crud",component:B}),Object(f.jsx)(o.b,{exact:!0,path:"/movies/new",component:J}),Object(f.jsx)(o.b,{exact:!0,path:"/movies/:id",component:W}),Object(f.jsx)(o.b,{exact:!0,path:"/movies/:id/edit",component:V}),Object(f.jsx)(o.b,{path:"*",component:K})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(f.jsx)(X,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.b2b4dd4b.chunk.js.map