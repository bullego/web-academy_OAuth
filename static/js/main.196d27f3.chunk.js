(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{24:function(e,t,n){e.exports=n(39)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),c=n(20),l=n(15),s=n.n(l),i=n(21),u=n(13),m=n(6),f=n(7),d=n(9),h=n(8),p=n(1),E=n(10),O=(n(30),Object({NODE_ENV:"production",PUBLIC_URL:"/web-academy_OAuth",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"278f7af48162d7450bd84bc9d310e194",REACT_APP_NAME:"MyTrelloApp",REACT_APP_SCOPE:"read,write,account",REACT_APP_REDIRECT_URL:"https://bullego.github.io/web-academy_OAuth"})),b=O.REACT_APP_API_KEY,g=O.REACT_APP_NAME,v=O.REACT_APP_SCOPE,k=O.REACT_APP_REDIRECT_URL,_=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e="https://trello.com/1/authorize?return_url=".concat(k,"&expiration=1day&name=").concat(g,"&scope=").concat(v,"&response_type=token&key=").concat(b);return(a.createElement("div",{className:"Login"},a.createElement("a",{href:e},"Login with Trello account"),a.createElement("h2",null,"Please log in")))}}]),n}(a.Component),A=(n(31),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={boards:[]},e.getBoards=function(){var t=e.props,n=t.token,r=t.userName,a="https://api.trello.com/1/members/".concat(r,"/boards?key=").concat("278f7af48162d7450bd84bc9d310e194","&token=").concat(n);console.log("url in dashboard: ",a),fetch(a).then((function(e){if(200!==e.status)throw Error("not success");return e.json()})).then((function(t){console.log("Boards: ",t),e.setBoards(t)})).catch((function(e){console.log(e)}))},e.setBoards=function(t){e.setState({boards:t})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.getBoards()}},{key:"render",value:function(){var e=this.state.boards.map((function(e,t){return a.createElement("li",{key:t,className:"board-item"},a.createElement("a",{href:"#",className:"board-link"},a.createElement("span",{className:"board-title"},e.name)))}));return a.createElement("div",{className:"Dashboard"},a.createElement("h2",null,"Hello from dashboard"),a.createElement("hr",null),a.createElement("ul",{className:"board-items"},e))}}]),n}(a.Component)),N=(n(32),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={userData:{username:"",fullName:"",email:"",avatarUrl:""}},e.getBoards=function(){console.log("props from app to userProfile: ",e.props);var t=e.props,n=t.token,r=t.userName,a="https://api.trello.com/1/members/".concat(r,"?key=").concat("278f7af48162d7450bd84bc9d310e194","&token=").concat(n);console.log("url in UserProfile: ",a),fetch(a).then((function(e){if(200!==e.status)throw Error("not success");return e.json()})).then((function(t){console.log("userData: ",t),e.setUserData(t)})).catch((function(e){console.log(e)}))},e.setUserData=function(t){var n={username:t.username,fullName:t.fullName,email:t.email,avatarUrl:t.avatarUrl};e.setState({userData:n})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.getBoards()}},{key:"render",value:function(){var e=this.state.userData,t=e.username,n=e.fullName,r=e.email,o=e.avatarUrl;return(a.createElement("div",{className:"UserProfile"},a.createElement("h2",{className:"profile-title"},"User Profile"),a.createElement("ul",{className:"profile-items"},a.createElement("li",{className:"profile-item"},a.createElement("p",null,a.createElement("img",{className:"profile-avatar",src:o,alt:"user avatar"}))),a.createElement("li",{className:"profile-item"},a.createElement("p",null,a.createElement("strong",null,"User name: "),t)),a.createElement("li",{className:"profile-item"},a.createElement("p",null,a.createElement("strong",null,"Full name: "),n)),a.createElement("li",{className:"profile-item"},a.createElement("p",null,a.createElement("strong",null,"Email: "),r)))))}}]),n}(a.Component)),P=function(e){return a.createElement("div",null,"404 not found")};!function(e){e.HOME="/",e.LOGIN="/login",e.DASHBOARD="/dashboard",e.USER_PROFILE="/userprofile",e.AUTHORIZATION="/authorization",e.NOT_FOUND="/404"}(r||(r={}));var T=[{path:r.LOGIN,exact:!0,title:"Go to Home/Login",render:function(e){return a.createElement(_,e)}},{path:r.DASHBOARD,exact:!1,title:"Go to Dashboard",isProtected:!0,render:function(e){return a.createElement(A,e)}},{path:r.USER_PROFILE,exact:!1,title:"Go to User Profile",isProtected:!0,render:function(e){return a.createElement(N,e)}},{path:r.HOME,exact:!0,isHidden:!0,render:function(){return a.createElement(p.a,{to:r.LOGIN})}},{path:r.NOT_FOUND,isHidden:!0,render:function(e){return a.createElement(P,e)}}],y=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},R=function(e){console.log("PROPS from AUTH: ",e);var t=e.location.hash;return(0,e.onSetToken)(t.split("=")[1]),console.log("HISTORY: ",window.location.pathname),console.log("DASHBOARD_URL: ",r.DASHBOARD),o.a.createElement(p.a,{to:r.DASHBOARD})},D=n(23),S=function(e){var t=e.render,n=e.isAuthenticated,r=Object(D.a)(e,["render","isAuthenticated"]);return(o.a.createElement(p.b,Object.assign({},r,{render:function(e){return n?t(e):o.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}})))},j=(n(38),{token:"",userName:"bullego1",userProfile:void 0}),U=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state=j,e.setProfile=function(t){e.setState({userProfile:t})},e.setToken=function(t){e.setState({token:t}),y("TOKEN",{token:t,someValue:10})},e.logOut=function(){e.setState(j),e.goToLogin()},e.renderRoute=function(t,n){return t.isProtected?a.createElement(S,{key:n,path:t.path,exact:t.exact,render:function(n){return console.log("_____PROPS_____: ",n),t.render(Object(u.a)(Object(u.a)({},n),{},{token:e.state.token,userName:e.state.userName}))},isAuthenticated:e.isLoggedIn}):a.createElement(p.b,{key:n,path:t.path,exact:t.exact,render:function(e){return t.render(Object(u.a)({},e))}})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.getToken()}},{key:"getToken",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,r,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.token){e.next=2;break}return e.abrupt("return");case 2:if(c="TOKEN",t=JSON.parse(window.localStorage.getItem(c)||"{}"),n=t.token){e.next=5;break}return e.abrupt("return",this.goToLogin());case 5:return r="https://api.trello.com/1/members/me?key=".concat("278f7af48162d7450bd84bc9d310e194","&token=").concat(n),e.next=8,fetch(r);case 8:if(!0!==(a=e.sent).ok||200!==a.status){e.next=16;break}return e.next=12,a.json();case 12:return o=e.sent,this.setProfile(o),this.setToken(n),e.abrupt("return",this.goToUserProfile());case 16:return e.abrupt("return",this.goToLogin());case 17:case"end":return e.stop()}var c}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"goToLogin",value:function(){this.props.history.push(r.LOGIN)}},{key:"goToDashboard",value:function(){this.props.history.push(r.DASHBOARD)}},{key:"goToUserProfile",value:function(){this.props.history.push(r.USER_PROFILE)}},{key:"renderHeader",value:function(){return a.createElement("header",{className:"header"},T.map((function(e,t){return e.isHidden?null:a.createElement(E.b,{key:t,to:e.path},e.title)})),a.createElement("button",{onClick:this.logOut},"Log Out"))}},{key:"renderContent",value:function(){var e=this;return(a.createElement("main",{className:"main"},a.createElement(p.d,null,T.map(this.renderRoute),a.createElement(p.b,{path:r.AUTHORIZATION,render:function(t){return a.createElement(R,Object.assign({},t,{onSetToken:e.setToken}))}}),a.createElement(p.a,{to:r.NOT_FOUND}))))}},{key:"render",value:function(){return a.createElement("div",null,this.renderHeader(),this.renderContent())}},{key:"isLoggedIn",get:function(){return!!this.state.token}}]),n}(a.Component),C=Object(p.g)(U),L=a.createElement(E.a,null,a.createElement(C,null));c.render(L,document.querySelector("#root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.196d27f3.chunk.js.map