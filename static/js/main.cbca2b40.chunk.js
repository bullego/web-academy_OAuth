(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{24:function(e,t,n){e.exports=n(38)},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),c=n(19),i=n(14),u=n.n(i),s=n(20),l=n(22),d=n(8),h=n(9),f=n(11),m=n(10),p=n(1),b=n(6),E=(n(30),Object({NODE_ENV:"production",PUBLIC_URL:"/web-academy_OAuth",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"278f7af48162d7450bd84bc9d310e194",REACT_APP_NAME:"MyTrelloApp",REACT_APP_SCOPE:"read,write,account",REACT_APP_REDIRECT_URL:"https://bullego.github.io/web-academy_OAuth"})),O=E.REACT_APP_API_KEY,k=E.REACT_APP_NAME,T=E.REACT_APP_SCOPE,A=E.REACT_APP_REDIRECT_URL,g=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e="https://trello.com/1/authorize?return_url=".concat(A,"&expiration=1day&name=").concat(k,"&scope=").concat(T,"&response_type=token&key=").concat(O);return(a.createElement("div",{className:"Login"},a.createElement("a",{href:e},"Login with Trello account"),a.createElement("h2",null,"Please log in")))}}]),n}(a.Component),v=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},_=function(e){return JSON.parse(window.localStorage.getItem(e)||"{}").token},y=(n(31),function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={boards:[]},e.setBoards=function(t){e.setState({boards:t})},e}return Object(h.a)(n,[{key:"getToken",value:function(){return _("TOKEN")}},{key:"componentDidMount",value:function(){var e=this,t=this.getToken(),n="https://api.trello.com/1/members/".concat("5efc78dc483c927431aef6e5","/boards?key=").concat("278f7af48162d7450bd84bc9d310e194","&token=").concat(t);fetch(n).then((function(e){if(200!==e.status)throw Error("not success");return e.json()})).then((function(t){e.setBoards(t)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.boards.map((function(e,t){return a.createElement("li",{key:t,className:"board-item"},a.createElement("a",{href:"#",className:"board-link"},a.createElement("span",{className:"board-title"},e.name)))}));return a.createElement("div",{className:"Dashboard"},a.createElement("h2",null,"Hello from dashboard"),a.createElement("hr",null),a.createElement("ul",{className:"board-items"},e))}}]),n}(a.Component)),P=function(e){return a.createElement("div",null,"404 not found")};!function(e){e.HOME="/",e.LOGIN="/login",e.DASHBOARD="/dashboard",e.AUTHORIZATION="/authorization",e.NOT_FOUND="/404"}(r||(r={}));var N=[{path:r.LOGIN,exact:!0,title:"Go to Home/Login",render:function(e){return a.createElement(g,e)}},{path:r.DASHBOARD,exact:!1,title:"Go to Dashboard",isProtected:!0,render:function(e){return a.createElement(y,e)}},{path:r.HOME,exact:!0,isHidden:!0,render:function(){return a.createElement(p.a,{to:r.LOGIN})}},{path:r.NOT_FOUND,isHidden:!0,render:function(e){return a.createElement(P,e)}}],R=function(e){var t=e.location.hash;return(0,e.onSetToken)(t.split("=")[1]),o.a.createElement(p.a,{to:r.DASHBOARD})},S=n(23),D=function(e){var t=e.render,n=e.isAuthenticated,r=Object(S.a)(e,["render","isAuthenticated"]);return(o.a.createElement(p.b,Object.assign({},r,{render:function(e){return n?t(e):o.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}})))},C=(n(37),{token:"",boards:[],userProfile:void 0}),j=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state=C,e.setProfile=function(t){e.setState({userProfile:t})},e.setToken=function(t){e.setState({token:t}),v("TOKEN",{token:t})},e.logOut=function(){e.setState(C),e.goToLogin()},e.renderRoute=function(t,n){return t.isProtected?a.createElement(D,{key:n,path:t.path,exact:t.exact,render:t.render,isAuthenticated:e.isLoggedIn}):a.createElement(p.b,{key:n,path:t.path,exact:t.exact,render:function(e){return t.render(Object(l.a)({},e))}})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getToken()}},{key:"getToken",value:function(){var e=Object(s.a)(u.a.mark((function e(){var t,n,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.token){e.next=2;break}return e.abrupt("return");case 2:if(t=_("TOKEN")){e.next=5;break}return e.abrupt("return",this.goToLogin());case 5:return n="https://api.trello.com/1/members/me?key=".concat("278f7af48162d7450bd84bc9d310e194","&token=").concat(t),e.next=8,fetch(n);case 8:if(!0!==(r=e.sent).ok||200!==r.status){e.next=16;break}return e.next=12,r.json();case 12:return a=e.sent,this.setProfile(a),this.setToken(t),e.abrupt("return",this.goToDashboard());case 16:return e.abrupt("return",this.goToLogin());case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"goToLogin",value:function(){this.props.history.push(r.LOGIN)}},{key:"goToDashboard",value:function(){this.props.history.push(r.DASHBOARD)}},{key:"renderHeader",value:function(){return a.createElement("header",{className:"header"},N.map((function(e,t){return e.isHidden?null:a.createElement(b.b,{key:t,to:e.path},e.title)})),a.createElement("button",{onClick:this.logOut},"Log Out"))}},{key:"renderContent",value:function(){var e=this;return(a.createElement("main",{className:"main"},a.createElement(p.d,null,N.map(this.renderRoute),a.createElement(p.b,{path:r.AUTHORIZATION,render:function(t){return a.createElement(R,Object.assign({},t,{onSetToken:e.setToken}))}}),a.createElement(p.a,{to:r.NOT_FOUND}))))}},{key:"render",value:function(){return a.createElement("div",null,this.renderHeader(),this.renderContent())}},{key:"isLoggedIn",get:function(){return!!this.state.token}}]),n}(a.Component),L=Object(p.g)(j),H=a.createElement(b.a,null,a.createElement(L,null));c.render(H,document.querySelector("#root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.cbca2b40.chunk.js.map