(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{108:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(41),o=a.n(l),c=(a(73),a(2)),s=a(5),i=a(4),u=a(3),m=a(10),d=a(26),p=a(13),h=a(45),v=a(9),f=a.n(v),b=a(16),g=a(28),E=a.n(g),y=a(118),j=a(15),O=a(65);var k={init:function(){y.a({dsn:"https://a391c71f76fc4a1e892fe3621faa9b13@o438873.ingest.sentry.io/5410673",integrations:[new O.a.BrowserTracing],tracesSampleRate:1})},log:function(e){j.a(e)}};E.a.defaults.baseURL="https://murmuring-chamber-49648.herokuapp.com/api",E.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(k.log("Log error",e),d.toast.error("Unexpected error")),Promise.reject(e)}));var w={get:E.a.get,post:E.a.post,put:E.a.put,delete:E.a.delete,setJwt:function(e){E.a.defaults.headers.common["x-auth-token"]=e}};function N(){return w.get("/movies")}function C(e){return w.delete("/movies/"+e._id)}function S(e){return w.get("/movies/"+e)}function x(e){var t=Object(p.a)({},e);return delete t._id,e._id?w.put("/movies/"+e._id,t):w.post("/movies",t)}var I=a(24),R=a.n(I),P=function(e){var t=e.itemCount,a=e.pageSize,n=e.onPageChange,l=e.currentPage,o=t/a;if(1===(o=Math.ceil(o)))return null;var c=R.a.range(1,o+1);return r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination"},c.map((function(e){return r.a.createElement("li",{key:e,className:e===l?"page-item active":"page-item"},r.a.createElement("a",{onClick:function(){return n(e)},className:"page-link"},e))}))))},_=function(e){var t=e.items,a=e.selectedGenre,n=e.onItemSelect;return r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{key:e._id,onClick:function(){return n(e)},className:e.name===a.name?"list-group-item active":"list-group-item "},e.name)}))))};function F(){return w.get("/genres")}var A=a(14),G=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){var e="fa fa-heart";return this.props.liked||(e+="-o"),r.a.createElement("i",{style:{cursor:"pointer"},onClick:this.props.onClick,className:e})}}]),a}(n.Component),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).raiseSort=function(t){var a=Object(p.a)({},e.props.sortColumn);a.path===t?a.order="asc"===a.order?"desc":"asc":(a.path=t,a.order="asc"),e.props.onSort(a)},e.renderSortIcon=function(t){return e.props.sortColumn.path!==t.path?null:"asc"===e.props.sortColumn.order?r.a.createElement("i",{className:"fa fa-sort-asc","aria-hidden":"true"}):"desc"===e.props.sortColumn.order?r.a.createElement("i",{className:"fa fa-sort-desc","aria-hidden":"true"}):void 0},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.column.map((function(t){return r.a.createElement("th",{style:{cursor:"pointer"},key:t.path||t.key,onClick:function(){return e.raiseSort(t.path)}},t.label," ",e.renderSortIcon(t))}))))}}]),a}(n.Component),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).renderCell=function(e,t){return t.content?t.content(e):R.a.get(e,t.path)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.column;return r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t._id},n.map((function(a){return r.a.createElement("td",{key:t._id+(a.path||a.key)},e.renderCell(t,a))})))})))}}]),a}(n.Component),D=a(63),M=a.n(D);function q(e){return w.post("/users",{email:e.email,password:e.password,name:e.username})}function B(e,t){return H.apply(this,arguments)}function H(){return(H=Object(b.a)(f.a.mark((function e(t,a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.post("/auth",{email:t,password:a});case 2:n=e.sent,r=n.data,localStorage.setItem("token",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("token");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){try{var e=localStorage.getItem("token");return M()(e)}catch(t){return null}}function U(e){return V.apply(this,arguments)}function V(){return(V=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("token",t);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}w.setJwt(localStorage.getItem("token"));var W=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).column=[{path:"title",label:"Title",content:function(e){return r.a.createElement(A.b,{to:"/movies/".concat(e._id)}," ",e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return r.a.createElement(G,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}},{key:"delete",content:function(t){return J()?r.a.createElement("button",{onClick:function(){return e.props.onDelete(t)},className:"btn btn-danger"},"Delete"):null}}],e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.onSort,n=e.sortColumn;return r.a.createElement("table",{className:"table"},r.a.createElement(T,{sortColumn:n,onSort:a,column:this.column}),r.a.createElement(L,{data:t,column:this.column}))}}]),a}(n.Component),$=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.user;return console.log(e),r.a.createElement(A.b,{className:"btn btn-primary",to:"/movies/new"},"New Movies")}}]),a}(n.Component),K=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onChange,a=e.value,n=e.name;return r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"search"}),r.a.createElement("input",{onChange:function(e){return t(e.currentTarget)},value:a,name:n,className:"form-control col-md-6",type:"search",id:"search"}))}}]),a}(n.Component),Q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],pageSize:4,currentPage:1,getGenres:[],selectedGenre:"",sortColumn:{path:"title",order:"asc"},search:""},e.onDelete=function(){var t=Object(b.a)(f.a.mark((function t(a){var n,r,l,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.movies,r=n.filter((function(e){return a._id!==e._id})),e.setState({movies:r}),t.prev=3,t.next=6,C(a);case 6:l=t.sent,o=l.data,console.log(o),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),t.t0.response&&404===t.t0.response.status&&d.toast.error("expected error"),e.setState({movies:n});case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),e.handleLike=function(t){var a=Object(h.a)(e.state.movies),n=a.indexOf(t);a[n]=Object(p.a)({},a[n]),a[n].liked=!a[n].liked,console.log(a),e.setState({movies:a})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleGenreSelect=function(t){e.setState({selectedGenre:t,currentPage:1,search:""})},e.handleSort=function(t){e.setState({sortColumn:t})},e.handleChange=function(t){t.name;var a=t.value;e.setState({search:a,selectedGenre:"",currentPage:1})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,a,n,r,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return t=e.sent,a=t.data,n=[{name:"All Genres",_id:""}].concat(Object(h.a)(a)),e.next=7,N();case 7:r=e.sent,l=r.data,this.setState({movies:l,getGenres:n});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies.length,t=this.state,a=t.currentPage,n=t.pageSize,l=t.movies,o=t.getGenres,c=t.selectedGenre,s=t.sortColumn,i=t.search,u=l;i?u=l.filter((function(e){return e.title.toLowerCase().startsWith(i.toLowerCase())})):c&&c._id&&(u=l.filter((function(e){return e.genre._id===c._id})));var m=function(e,t,a){var n=(t-1)*a;return R()(e).slice(n).take(a).value()}(R.a.orderBy(u,[s.path],[s.order]),a,n),d=this.props.user;return console.log(d),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement(_,{onItemSelect:this.handleGenreSelect,selectedGenre:c,items:o})),r.a.createElement("div",{className:"col"},d&&r.a.createElement("div",null,r.a.createElement($,null)),"Showing ",u.length," Movies in",r.a.createElement(K,{onChange:this.handleChange,value:this.state.search,name:"search"}),r.a.createElement(W,{movies:m,sortColumn:s,onLike:this.handleLike,onSort:this.handleSort}),r.a.createElement(P,{item:e,itemCount:u.length,pageSize:n,currentPage:a,onPageChange:this.handlePageChange})))}}]),a}(n.Component),X=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Customers")}}]),a}(n.Component),Y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h3",null,"Rental")}}]),a}(n.Component),Z=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h3",null,"Form map")}}]),a}(n.Component),ee=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h3",null,"Page Not found")}}]),a}(n.Component),te=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){!function(){z.apply(this,arguments)}(),window.location="/"}},{key:"render",value:function(){return null}}]),a}(n.Component),ae=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.user;return console.log(e),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(A.c,{className:"navbar-brand",to:"/"},"Vidly"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(A.c,{className:"nav-link",to:"/movies"},"Movies ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(A.c,{className:"nav-link",to:"/customers"},"Customers")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(A.c,{className:"nav-link",to:"/rentals"},"Rental")),!e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(A.c,{className:"nav-link",to:"/loginForm"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(A.c,{className:"nav-link",to:"/register"},"Register"))),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(A.c,{className:"nav-link",to:"/"},e.name)),r.a.createElement("li",{className:"nav-item"},r.a.createElement(A.c,{className:"nav-link",to:"/logout"},"Logout"))))))}}]),a}(n.Component),ne=a(11),re=a.n(ne),le=a(23),oe=a(27),ce=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.value,n=e.label,l=e.onChange,o=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},n),r.a.createElement("input",{label:n,onChange:l,name:t,value:a,type:"text",className:"form-control",id:t,"aria-describedby":"emailHelp"}),o&&r.a.createElement("div",{className:"alert alert-danger"},o))}}]),a}(n.Component),se=a(66),ie=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.label,n=e.options,l=e.error,o=Object(se.a)(e,["name","label","options","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({name:t,id:t},o,{className:"form-control"}),r.a.createElement("option",{value:""}),n.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))),l&&r.a.createElement("div",{className:"alert alert-danger"},l))}}]),a}(n.Component),ue=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={data:{},error:{}},e.validate=function(){var t=e.state.data,a={},n=re.a.validate(t,e.schema,{abortEarly:!1});if(!n.error)return null;var r,l=Object(oe.a)(n.error.details);try{for(l.s();!(r=l.n()).done;){var o=r.value;a[o.path[0]]=o.message}}catch(c){l.e(c)}finally{l.f()}return a},e.validateProperty=function(t){var a=t.currentTarget,n=a.name,r=a.value,l=Object(le.a)({},n,r),o=Object(le.a)({},n,e.schema[n]),c=re.a.validate(l,o),s="";if(c.error){var i,u=Object(oe.a)(c.error.details);try{for(u.s();!(i=u.n()).done;){s=i.value.message}}catch(m){u.e(m)}finally{u.f()}}else s=null;return s},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({error:a||{}}),e.doSubmit()},e.handleChange=function(t){var a=t.currentTarget,n=a.name,r=a.value,l=Object(p.a)({},e.state.data),o=Object(p.a)({},e.state.error);l[n]=r,e.setState({data:l});var c=e.validateProperty(t);o[n]=c||null,e.setState({data:l,error:o})},e.renderButton=function(t){return r.a.createElement("button",{disabled:e.validate(),type:"submit",className:"btn btn-primary"},t)},e.renderSelect=function(t,a,n){var l=e.state,o=l.data,c=l.error;return r.a.createElement(ie,{name:t,value:o[t],label:a,options:n,onChange:e.handleChange,error:c[t]})},e.renderInput=function(t,a){var n=e.state,l=n.data,o=n.error;return r.a.createElement(ce,{className:"form-control",name:t,value:l[t],label:a,onChange:e.handleChange,error:o[t]})},e}return a}(n.Component),me=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:{email:"",password:""},error:{}},e.schema={email:re.a.string().email().required(),password:re.a.string().min(5).required()},e.doSubmit=Object(b.a)(f.a.mark((function t(){var a,n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.data,t.prev=1,t.next=4,B(a.email,a.password);case 4:n=e.props.location.state,window.location=n?n.from.pathname:"/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),t.t0.response&&400===t.t0.response.status&&((r=Object(p.a)({},e.state.error)).email=t.t0.response.data,e.setState({error:r}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e}return Object(s.a)(a,[{key:"render",value:function(){if(J())return r.a.createElement(m.a,{to:"/"});var e=this.state,t=e.error,a=e.data;return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group "},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:"form-control col-4",value:a.email,onChange:this.handleChange,name:"email",id:"email",type:"text"}),t.email&&r.a.createElement("div",{className:"alert alert-danger col-4"},t.email),r.a.createElement("label",{value:this.state.data.password,htmlFor:"password"},"Password"),r.a.createElement("input",{className:"form-control col-4",value:a.password,onChange:this.handleChange,name:"password",id:"password",type:"password"}),t.password&&r.a.createElement("div",{className:"alert alert-danger col-4"},t.password)),this.renderButton("Login")))}}]),a}(ue),de=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:{title:"",numberInStock:"",dailyRentalRate:"",genreId:""},error:{},genres:[]},e.schema={_id:re.a.string(),title:re.a.string().required().label("Title"),genreId:re.a.string().required().label("Genre"),numberInStock:re.a.number().integer().min(1).max(100).required().label("Number in Stock"),dailyRentalRate:re.a.number().integer().min(1).max(10).required().label("Daily Rental Rate")},e.validate=function(){var t=e.state,a=t.data,n=t.error,r=Object(p.a)({},n),l=re.a.validate(a,e.schema,{abortEarly:!1});if(!l.error)return null;var o,c=Object(oe.a)(l.error.details);try{for(c.s();!(o=c.n()).done;){var s=o.value;r[s.path[0]]=s.message}}catch(i){c.e(i)}finally{c.f()}return r},e.validateProperty=function(t){var a=t.currentTarget,n=a.name,r=a.value,l=Object(le.a)({},n,r),o=Object(le.a)({},n,e.schema[n]);return re.a.validate(l,o)},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({error:a||{}}),e.doSubmit()},e.handleChange=function(t){var a=t.currentTarget,n=a.name,r=a.value,l=Object(p.a)({},e.state.data),o=Object(p.a)({},e.state.error);l[n]=r,e.setState({data:l});var c=e.validateProperty(t);if(!c.error)return null;var s,i=Object(oe.a)(c.error.details);try{for(i.s();!(s=i.n()).done;){var u=s.value;o[u.path[0]]=u.message,console.log(o)}}catch(m){i.e(m)}finally{i.f()}e.setState({data:l,error:o})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,a,n,r,l,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return t=e.sent,a=t.data,e.next=6,N();case 6:if(n=e.sent,n.data,this.setState({genres:a}),"new"!==(r=this.props.match.params.id)){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,S(r);case 14:if(l=e.sent,o=l.data,console.log(o),r){e.next=19;break}return e.abrupt("return",this.props.history.replace("/notfound"));case 19:this.setState({data:this.mapToViewModel(o)});case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"doSubmit",value:function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(this.state.data);case 3:this.props.history.push("/movies"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status&&d.toast.error("expected error");case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"solo",value:function(e){var t=N(),a=F(),n=t.find((function(t){return t._id===e._id||{}}));return console.log(n),n.title=e.title,n.genre=a.find((function(t){return t._id===e.genreId})),n.numberInStock=e.numberInStock,n.dailyRentalRate=e.dailyRentalRate,n}},{key:"render",value:function(){var e=this.state,t=(e.data,e.error);return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{name:"title",value:this.state.data.title,onChange:this.handleChange,type:"text",className:"form-control",id:"title","aria-describedby":"emailHelp"}),t.title&&r.a.createElement("div",{className:"alert alert-danger"},t.title)),r.a.createElement("div",null,r.a.createElement("label",{name:"genreId",htmlFor:"genreId"},"Genre"),r.a.createElement("select",{name:"genreId",value:this.state.data.genreId,onChange:this.handleChange,className:"custom-select",id:"genreId"},r.a.createElement("option",{value:""}),this.state.genres.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))),t.genreId&&r.a.createElement("div",{className:"alert alert-danger"},t.genreId)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"numberInStock"},"Number in Stock"),r.a.createElement("input",{name:"numberInStock",value:this.state.data.numberInStock,onChange:this.handleChange,type:"number",className:"form-control",id:"numberInStock"}),t.numberInStock&&r.a.createElement("div",{className:"alert alert-danger"},t.numberInStock)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"rate"},"Rate"),r.a.createElement("input",{name:"dailyRentalRate",value:this.state.data.dailyRentalRate,onChange:this.handleChange,type:"number",className:"form-control",id:"rate","aria-describedby":"emailHelp"}),t.dailyRentalRate&&r.a.createElement("div",{className:"alert alert-danger"},t.dailyRentalRate)),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))}}]),a}(ue),pe=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:{email:"",password:"",username:""},error:{}},e.schema={email:re.a.string().email().required(),password:re.a.string().min(5).required(),username:re.a.string().required()},e.validate=function(){var t=e.state.data,a={},n=re.a.validate(t,e.schema,{abortEarly:!1});if(!n.error)return null;var r,l=Object(oe.a)(n.error.details);try{for(l.s();!(r=l.n()).done;){var o=r.value;""===t[o.path[0]]&&(a[o.path[0]]+=o.message)}}catch(c){l.e(c)}finally{l.f()}return a},e.validateProperty=function(t){var a,n=t.currentTarget,r=n.name,l=n.value,o=Object(le.a)({},r,l),c=Object(le.a)({},r,e.schema[r]);return(a=re.a.validate(o,c)).error?a.error.details[0].message:null},e.handleChange=function(t){var a=t.currentTarget,n=a.name,r=a.value,l=Object(p.a)({},e.state.data);l[n]=r;var o={},c=e.validateProperty(t);c?o[n]=c:delete o[n],e.setState({data:l,error:o})},e.handleSubmit=function(t){t.preventDefault();var a=e.validate(t);e.setState({error:a||{}}),e.onSubmit()},e.onSubmit=Object(b.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q(e.state.data);case 3:U(t.sent.headers["x-auth-token"]),window.location="/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((a=Object(p.a)({},e.state.error)).email=t.t0.response.data,e.setState({error:a}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=(e.data,e.error);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"User Name"),r.a.createElement("input",{onChange:this.handleChange,value:this.state.data.email,name:"email",type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),t.email&&r.a.createElement("div",{className:"alert alert-danger col-4"},t.email)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{onChange:this.handleChange,value:this.state.data.password,name:"password",type:"password",className:"form-control",id:"exampleInputPassword1"}),t.password&&r.a.createElement("div",{className:"alert alert-danger col-4"},t.password)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Name"),r.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.data.username,name:"username",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),t.username&&r.a.createElement("div",{className:"alert alert-danger col-4"},t.username)),r.a.createElement("div",{className:"form-group form-check"}),r.a.createElement("button",{disabled:this.validate(),type:"submit",className:"btn btn-primary"},"Login")))}}]),a}(n.Component),he=(a(108),a(109),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=J();this.setState({user:e})}},{key:"render",value:function(){var e=this;this.state.user;return r.a.createElement("div",null,r.a.createElement(d.ToastContainer,null),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(ae,{user:this.state.user})),r.a.createElement("main",{className:"container"},r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/movies/:id",render:function(e){return J()?r.a.createElement(de,e):r.a.createElement(m.a,{to:{pathname:"/loginForm",state:{from:e.location}}})}}),r.a.createElement(m.b,{path:"/movies",render:function(t){return r.a.createElement(Q,Object.assign({user:e.state.user},t))}}),r.a.createElement(m.b,{path:"/customers",component:X}),r.a.createElement(m.b,{path:"/rentals",component:Y}),r.a.createElement(m.b,{path:"/header",component:Z}),r.a.createElement(m.b,{path:"/notFound",component:ee}),r.a.createElement(m.b,{path:"/loginForm",component:me}),r.a.createElement(m.b,{path:"/logout",component:te}),r.a.createElement(m.b,{path:"/register",component:pe}),r.a.createElement(m.a,{from:"/",exact:!0,to:"/movies"}),r.a.createElement(m.a,{to:"/notfound"}))))}}]),a}(n.Component));a(110),a(111),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log("SUPERMAN","https://murmuring-chamber-49648.herokuapp.com/api"),k.init(),o.a.render(r.a.createElement(A.a,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){e.exports=a(112)},73:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.bc0c3ae3.chunk.js.map