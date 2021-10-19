(this["webpackJsonpgabby-portfolio"]=this["webpackJsonpgabby-portfolio"]||[]).push([[0],{124:function(e,t){},125:function(e,t){},126:function(e,t){},127:function(e,t){},128:function(e,t){},135:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(23),c=a.n(r),i=a(26),s=a(10),l=(a(84),a(13)),u=a(14),m=a(16),p=a(15),h=a(17),g=a(153),b=a(24),d=(a(85),a(86),a(87),a(136)),f=a(137),y=a(138),E=a(154),v=a(139),j=a(140),O=a(141),S=a(142),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={isOpen:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d.a,{color:"none",dark:!0,expand:"md"},o.a.createElement(i.b,{to:"/"},o.a.createElement(f.a,null,"Gabriella Pelton")),o.a.createElement(y.a,{onClick:this.toggle.bind(this)}),o.a.createElement(E.a,{isOpen:this.state.isOpen,navbar:!0},o.a.createElement(v.a,{className:"mr-auto",navbar:!0},o.a.createElement(j.a,null,o.a.createElement(i.b,{to:"/projects"},o.a.createElement(O.a,null,"Projects"))),o.a.createElement(j.a,null,o.a.createElement(i.b,{to:"/contact"},o.a.createElement(O.a,null,"Contact")))),o.a.createElement(S.a,null,o.a.createElement("a",{href:"https://github.com/gabbypelton"},"github")))))}}]),t}(n.Component),w=(Object(s.b)((function(e){return{}}),{})(k),a(143)),_=a(144),M=a(145),A=a(146),x=a(147),C=a(67),T=a.n(C),N=a(68),D=a(69),G=a(25),I=a(30),L=a.n(I),F="GET_MESSAGES",P="GET_MESSAGES_FAIL",W="GET_MESSAGES_SUCCESS",B="ADD_MESSAGE",U="ADD_MESSSAGE_FAIL",K="ADD_MESSAGE_SUCCESS",H="GET_TOKEN",R="GET_TOKEN_FAIL",J="GET_TOKEN_SUCCESS";L.a.defaults.baseURL="https://gabby-portfolio.herokuapp.com";var Y=function(){return function(e){e({type:H}),L.a.get("/messages/token").then((function(t){localStorage.setItem("contactToken",t.data.token),e({type:J})})).catch((function(t){e({type:R,error:t})}))}},z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={message:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom(!0)}},{key:"componentDidUpdate",value:function(e){e.messages.length<this.props.messages.length&&this.scrollToBottom(!1)}},{key:"setMessage",value:function(e){this.setState({message:e.target.value})}},{key:"submitMessage",value:function(){this.props.sendMessage(this.state.message),this.setState({message:""})}},{key:"handleKey",value:function(e){13===e.which&&(e.preventDefault(),this.submitMessage())}},{key:"scrollToBottom",value:function(e){N.animateScroll.scrollToBottom({containerId:"messages_container",duration:e?2500:0,delay:e?500:0})}},{key:"render",value:function(){var e=this;return o.a.createElement(w.a,{style:{color:"white",height:"90vh"}},o.a.createElement(_.a,{style:{display:"flex",height:"100%",flexDirection:"column",justifyContent:"center"}},o.a.createElement(w.a,{style:{display:"flex",flexFlow:"row wrap",justifyContent:"center"}},o.a.createElement(M.a,{onKeyDown:function(t){return e.handleKey(t)}},o.a.createElement(A.a,{style:{height:"100%",width:"100%"},type:"textarea",name:"message",value:this.state.message,placeholder:"Hello, have a job.",onChange:function(t){return e.setMessage(t)}})),o.a.createElement(x.a,{onClick:function(){return e.submitMessage()}},"Holler")),o.a.createElement(w.a,{className:"contact__detail"},o.a.createElement(_.a,null,o.a.createElement(w.a,{className:"contact__line"},"Please note this is just for fun. For secure communication, email me at:"),o.a.createElement(w.a,{className:"contact__line"},o.a.createElement("a",{href:"mailto:gabriellapelton@gmail.com"},"gabriellapelton@gmail.com")))),o.a.createElement(w.a,{className:"contact__row"},o.a.createElement(_.a,{className:"contact__column contact__column--messages",id:"messages_container"},this.props.messages.map((function(e){return o.a.createElement(w.a,{className:"contact__message",key:e._id},T()(e.createdOn).format("YYYY/MM/DD hh:mm")," ","(you): ",e.content)})),this.props.contactIsLoading?o.a.createElement(w.a,null,o.a.createElement(D.Bounce,null)):null))))}}]),t}(n.Component),$={sendMessage:function(e){return function(t){t({type:B});var a=localStorage.getItem("contactToken");L.a.post("/messages",{message:e,token:a}).then((function(a){t({type:K,payload:Object(G.a)({},a.data,{content:e})})})).catch((function(e){t({type:U,error:e})}))}}},q=Object(s.b)((function(e){return{messages:e.contact.messages,contactIsLoading:e.contact.isLoading}}),$)(z),Q=a(44);Q.a.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(Q.a.version,"/pdf.worker.js");var V=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{width:"inherit",maxWidth:"inherit",display:"flex",flexFlow:"column nowrap",alignItems:"center"}},o.a.createElement("div",null,o.a.createElement("img",{src:"https://res.cloudinary.com/dwa3bztx6/image/upload/v1634158372/Portfolio/Gabriella_Morgan_Resume_2021.png"})))}}]),t}(n.Component),X=Object(s.b)()(V),Z=a(148),ee=a(149),te=a(150),ae=a(151),ne=a(152),oe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={show:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(_.a,{className:"projects__item",xs:12},o.a.createElement(Z.a,{inverse:!0},o.a.createElement(ee.a,{style:{minHeight:"300px",maxHeight:"80vh",maxWidth:"100%",height:"auto",width:"auto"},src:this.props.project.imageSource,alt:"Card image cap"}),o.a.createElement(te.a,{className:"card__overlay"},o.a.createElement(ae.a,{style:{display:"flex",flexFlow:"row wrap",justifyContent:"center"}},this.props.project.title,o.a.createElement("small",{style:{width:"100%"},className:"text-muted"},this.props.project.date)),o.a.createElement(ne.a,null,o.a.createElement("b",null,"Product Description:",o.a.createElement("br",null)),this.props.project.description),o.a.createElement(ne.a,null,o.a.createElement("b",null,"My contribution:",o.a.createElement("br",null)),this.props.project.contribution),this.props.project.urls.map((function(e){return o.a.createElement(x.a,{style:{margin:"2%",minWidth:"100px"},color:"info",onClick:function(){return window.open(e.location)}},e.name)})))))}}]),t}(n.Component),re=Object(s.b)((function(e){return{}}),{})(oe),ce=a(71),ie=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(w.a,{className:"projects__container"},ce.map((function(e){return o.a.createElement(re,{project:e})})))}}]),t}(n.Component),se=Object(s.b)((function(e){return{}}),{})(ie),le=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("contactToken")?this.props.getMessages():this.props.getToken()}},{key:"render",value:function(){return o.a.createElement(g.a,{className:"App"},o.a.createElement(k,null),o.a.createElement(b.a,{path:"/projects",component:se}),o.a.createElement(b.a,{path:"/contact",component:q}),o.a.createElement(b.a,{exact:!0,path:"/",component:X}))}}]),t}(n.Component),ue=Object(s.b)(null,{getToken:Y,getMessages:function(){return function(e){e({type:F});var t=localStorage.getItem("contactToken");return L.a.get("/messages/mine?token=".concat(t)).then((function(t){e({type:W,payload:t.data})})).catch((function(t){e({type:P,error:t}),t.response&&404===t.response.status&&e(Y())}))}}})(le),me=a(28),pe=a(72),he=a(73),ge=a.n(he),be={token:""},de=a(74),fe={messages:[],isLoading:!1},ye=Object(me.c)({session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;return t.type,e},contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(G.a)({},e,{isLoading:!0});case W:return Object(G.a)({},e,{messages:t.payload.messages,isLoading:!1});case P:return Object(G.a)({},e,{isLoading:!1});case K:var a=t.payload,n=a.savedMessage,o=a.content;return Object(G.a)({},e,{messages:[].concat(Object(de.a)(e.messages),[Object(G.a)({},n,{content:o})])});default:return e}}}),Ee=Object(me.d)(ye,Object(me.a)(pe.a,ge.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(i.a,{basename:"/"},o.a.createElement(s.a,{store:Ee},o.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e){e.exports=JSON.parse('[{"title":"Gabriella Pelton Portfolio Site","description":"This site.","contribution":"All of it because it\'s for me. I used React and a couple of open source libraries. Click to see the repo on Github.","date":"January 2020","tags":[],"imageSource":"https://imgur.com/L49jH87.png","urls":[{"name":"Repo","location":"https://github.com/greatgabsp/portfolio"}]},{"title":"DriveFair","description":"Food delivery app. Web application for restaurants to create menu items, and customers to order. Mobile application for drivers to pick up, navigate, and deliver orders.","contribution":"100% of front-end, back-end, and mobile development.","date":"May 2020","tags":[],"imageSource":"https://imgur.com/zxlhbGd.gif","urls":[{"name":"API","location":"https://github.com/gabbypelton/drivefair.api"},{"name":"Web","location":"https://github.com/gabbypelton/drivefair.web"},{"name":"Mobile","location":"https://github.com/gabbypelton/drivefair.mobile"}]},{"title":"My Ambit App","description":"A mobile app for Ambit customers to view their usage, pay their bill, contact customer service, and more. Built in React Native with a .NET Core back end.","contribution":"Mobile views for real-time pricing, usage graph, debugging, maintenance","date":"2018-2020","tags":["full stack","front-end","back-end","react native",".NET","react","mobile"],"imageSource":"https://imgur.com/WkDh1lv.gif","urls":[{"name":"Play Store","location":"https://play.google.com/store/apps/details?id=com.myambitapp&hl=en_US"}]},{"title":"Snap And Save","description":"Snap & Save is a new Ambit Energy product with an SMS text-based digital promotion for new Ambit Texas residential Customers who live in deregulated areas of the state.","contribution":"Data exceptions UI (front and back end)","date":"2019","tags":["full stack","front-end","back-end","javascript"],"imageSource":"https://cdn.ambitenergy.io/images/ambitenergy/snap-and-save-logo.png","urls":[{"name":"More Info","location":"https://www.snapandsave.com"}]}]')},75:function(e,t,a){e.exports=a(135)},84:function(e,t,a){},87:function(e,t,a){}},[[75,1,2]]]);