(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{24:function(e,t,n){e.exports=n(38)},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),c=n(20),s=n(15),u=n.n(s),i=n(21),l=n(13),d=n(6),h=n(7),m=n(9),f=n(8),p=n(1),O=n(10),b=(n(30),Object({NODE_ENV:"production",PUBLIC_URL:"/web-academy_OAuth",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"278f7af48162d7450bd84bc9d310e194",REACT_APP_NAME:"MyTrelloApp",REACT_APP_SCOPE:"read,write,account",REACT_APP_REDIRECT_URL:"https://bullego.github.io/web-academy_OAuth"})),E=b.REACT_APP_API_KEY,_=b.REACT_APP_NAME,g=b.REACT_APP_SCOPE,k=b.REACT_APP_REDIRECT_URL,A=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e="https://trello.com/1/authorize?return_url=".concat(k,"&expiration=1day&name=").concat(_,"&scope=").concat(g,"&response_type=token&key=").concat(E);return(a.createElement("div",{className:"Login"},a.createElement("a",{href:e},"Login with Trello account"),a.createElement("h2",null,"Please log in")))}}]),n}(a.Component),T=(n(31),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={boards:[]},e.getBoards=function(){console.log("props from app to dash: ",e.props);var t=e.props,n=t.token,r=t.userName,a="https://api.trello.com/1/members/".concat(r,"/boards?key=").concat("278f7af48162d7450bd84bc9d310e194","&token=").concat(n);console.log("url FROM APP: ",a),fetch(a).then((function(e){if(200!==e.status)throw Error("not success");return e.json()})).then((function(t){console.log("Boards: ",t),e.setBoards(t)})).catch((function(e){console.log(e)}))},e.setBoards=function(t){e.setState({boards:t})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getBoards()}},{key:"render",value:function(){console.log("PROPS_in_DASH: ",this.props);var e=this.state.boards;console.log("BoArDs____: ",e);var t=e.map((function(e,t){return a.createElement("li",{key:t,className:"board-item"},a.createElement("a",{href:"#",className:"board-link"},a.createElement("span",{className:"board-title"},e.name)))}));return(a.createElement("div",{className:"Dashboard"},a.createElement("h2",null,"Hello from dashboard"),a.createElement("hr",null),a.createElement("ul",{className:"board-items"},t)))}}]),n}(a.Component)),v=function(e){return a.createElement("div",null,"404 not found")},P=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.setText;return(o.a.createElement("div",null,o.a.createElement("h1",null,"Hello World"),o.a.createElement("p",null,e)))}}]),n}(o.a.Component);!function(e){e.HOME="/",e.HELLO="/hello",e.LOGIN="/login",e.DASHBOARD="/dashboard",e.AUTHORIZATION="/authorization",e.NOT_FOUND="/404"}(r||(r={}));var y=[{path:r.LOGIN,exact:!0,title:"Go to Home/Login",render:function(e){return a.createElement(A,e)}},{path:r.DASHBOARD,exact:!1,title:"Go to Dashboard",isProtected:!0,render:function(e){return a.createElement(T,e)}},{path:r.HOME,exact:!0,isHidden:!0,render:function(){return a.createElement(p.a,{to:r.LOGIN})}},{path:r.NOT_FOUND,isHidden:!0,render:function(e){return a.createElement(v,e)}},{path:r.HELLO,exact:!0,isHidden:!0,render:function(e){return a.createElement(P,e)}}],N=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},j=function(e){console.log("PROPS from AUTH: ",e);var t=e.location.hash;return(0,e.onSetToken)(t.split("=")[1]),o.a.createElement(p.a,{to:r.DASHBOARD})},R=n(23),S=function(e){var t=e.render,n=e.isAuthenticated,r=Object(R.a)(e,["render","isAuthenticated"]);return(o.a.createElement(p.b,Object.assign({},r,{render:function(e){return n?t(e):o.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}})))},D=(n(37),{token:"",userName:"bullego1",userProfile:void 0,someText:"test_test_test"}),H=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state=D,e.setProfile=function(t){e.setState({userProfile:t})},e.setToken=function(t){e.setState({token:t}),N("TOKEN",{token:t,someValue:10})},e.logOut=function(){e.setState(D),e.goToLogin()},e.renderRoute=function(t,n){return t.isProtected?a.createElement(S,{key:n,path:t.path,exact:t.exact,render:function(n){return console.log("_____PROPS_____: ",n),t.render(Object(l.a)(Object(l.a)({},n),{},{token:e.state.token,userName:e.state.userName}))},isAuthenticated:e.isLoggedIn}):a.createElement(p.b,{key:n,path:t.path,exact:t.exact,render:function(e){return t.render(Object(l.a)({},e))}})},e.someFunc=function(){return e.state.someText},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getToken()}},{key:"getToken",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,r,a,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.token){e.next=2;break}return e.abrupt("return");case 2:if(c="TOKEN",t=JSON.parse(window.localStorage.getItem(c)||"{}"),n=t.token){e.next=5;break}return e.abrupt("return",this.goToLogin());case 5:return r="https://api.trello.com/1/members/me?key=".concat("278f7af48162d7450bd84bc9d310e194","&token=").concat(n),e.next=8,fetch(r);case 8:if(!0!==(a=e.sent).ok||200!==a.status){e.next=16;break}return e.next=12,a.json();case 12:return o=e.sent,this.setProfile(o),this.setToken(n),e.abrupt("return",this.goToDashboard());case 16:return e.abrupt("return",this.goToLogin());case 17:case"end":return e.stop()}var c}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"goToLogin",value:function(){this.props.history.push(r.LOGIN)}},{key:"goToDashboard",value:function(){this.props.history.push(r.DASHBOARD)}},{key:"renderHeader",value:function(){return a.createElement("header",{className:"header"},y.map((function(e,t){return e.isHidden?null:a.createElement(O.b,{key:t,to:e.path},e.title)})),a.createElement("button",{onClick:this.logOut},"Log Out"))}},{key:"renderContent",value:function(){var e=this;return(a.createElement("main",{className:"main"},a.createElement(p.d,null,y.map(this.renderRoute),a.createElement(p.b,{path:r.AUTHORIZATION,render:function(t){return a.createElement(j,Object.assign({},t,{onSetToken:e.setToken}))}}),a.createElement(p.a,{to:r.NOT_FOUND})),a.createElement(p.b,{path:r.HOME,render:function(t){return a.createElement(P,Object.assign({},t,{setText:e.someFunc()}))}})))}},{key:"render",value:function(){return a.createElement("div",null,this.renderHeader(),this.renderContent())}},{key:"isLoggedIn",get:function(){return!!this.state.token}}]),n}(a.Component),C=Object(p.g)(H),L=a.createElement(O.a,null,a.createElement(C,null));c.render(L,document.querySelector("#root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.5c7b4306.chunk.js.map