(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){e.exports=a.p+"static/media/about.455bcc01.jpg"},109:function(e,t,a){},110:function(e,t,a){e.exports=a.p+"static/media/HowItWorks.403b57cc.jpg"},114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),s=a.n(l),c=a(13),o=(a(75),a(8)),u=a(9),i=a(11),m=a(10),p=a(6),h=(a(76),a(77),a(23)),d=a(117),g=a(119),E=a(116),f=a(16),b=a.n(f),v=function(e,t){return b.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},y=function(e,t){return b.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},C=(a(54),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",message:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(h.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;v(n,r).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/userdashboard"))}))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"login-form"},r.a.createElement("div",{className:"login-container"},r.a.createElement("h2",null,"Signup"),r.a.createElement(d.a,{onSubmit:this.handleSubmit},r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Control,{className:"input",type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username",placeholder:"Username"})),r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Control,{className:"input",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password",placeholder:"Password"})),this.state.message&&r.a.createElement(g.a,{variant:"danger"},this.state.message),r.a.createElement(E.a,{className:"button",type:"submit"},"Signup"))))}}]),a}(n.Component)),x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",message:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(h.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;y(n,r).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/userdashboard"))}))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"login-form"},r.a.createElement("div",{className:"login-container"},r.a.createElement("h2",null,"Login"),r.a.createElement(d.a,{onSubmit:this.handleSubmit},r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Control,{className:"input",type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username",placeholder:"Username"})),r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Control,{className:"input",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password",placeholder:"Password"})),this.state.message&&r.a.createElement(g.a,{variant:"danger"},this.state.message),r.a.createElement(E.a,{className:"button",type:"submit"},"Login"))))}}]),a}(n.Component),O=a(118),N=a(26),w=a.n(N),S=(a(97),function(e){b.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)}))});function j(e){return r.a.createElement(O.a,{className:"nav justify-content-end",bg:"dark"},r.a.createElement("div",{className:"nav justify-content-start"},r.a.createElement(O.a.Brand,null,r.a.createElement(c.b,{className:"logo",to:"/"},r.a.createElement("img",{src:w.a,alt:"logo",style:{width:"40px"}})))),e.user&&r.a.createElement(O.a.Brand,null," ",r.a.createElement("button",{className:"button-current"},r.a.createElement(c.b,{to:"/currentPlan"},"Current Plan"))," "),e.user&&r.a.createElement(O.a.Brand,null," ",r.a.createElement(c.b,{className:"nav",to:"/userdashboard",step1:e.step},e.user.username,"'s profile")),e.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a.Brand,{className:"radius"},r.a.createElement(c.b,{className:"nav",to:"/",onClick:function(){return S(e)}},"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a.Brand,{className:"radius"},r.a.createElement(c.b,{className:"nav",to:"/signup"},"Signup")),r.a.createElement(O.a.Brand,null,r.a.createElement(c.b,{className:"nav",to:"/login"},"Login"))))}a(100),a(57);var k=a(65),D=a.n(k),F=a(66),U=a.n(F),P=a(67),G=a.n(P),I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{onSubmit:this.handleSubmit,className:"form"},r.a.createElement("h4",null,"1. Select the type of training:"),r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"flex-card"},r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,{htmlFor:"gym"},r.a.createElement("img",{src:D.a,alt:"gym"}),"Gym"),r.a.createElement(d.a.Control,{type:"radio",id:"type",name:"type",value:"gym",onChange:this.props.handleChange}))),r.a.createElement("div",{className:"flex-card"},r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,{htmlFor:"crossfit"},r.a.createElement("img",{src:U.a,alt:"crossfit"}),"Crossfit"),r.a.createElement(d.a.Control,{type:"radio",id:"type",name:"type",value:"crossfit",onChange:this.props.handleChange}))),r.a.createElement("div",{className:"flex-card"},r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,{htmlFor:"yoga"},r.a.createElement("img",{src:G.a,alt:"yoga"})," Yoga"),r.a.createElement(d.a.Control,{type:"radio",id:"type",name:"type",value:"yoga",onChange:this.props.handleChange})))),r.a.createElement("h4",null,"2. Select a number of days per week:"),r.a.createElement("div",{className:"flex-container-days"},r.a.createElement("div",{className:"flex-card-days"},r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,{htmlFor:"numberOfDays",style:{marginRight:"50px",marginLeft:"50px"}},"3 days"),r.a.createElement(d.a.Control,{type:"radio",id:"numberOfDAys",name:"numberOfDays",value:3,onChange:this.props.handleChange}))),r.a.createElement("div",{className:"flex-card-days"},r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,{htmlFor:"numberOfDays",style:{marginRight:"50px",marginLeft:"50px"}},"5 days"),r.a.createElement(d.a.Control,{type:"radio",id:"numberOfDAys",name:"numberOfDays",value:5,onChange:this.props.handleChange}))),r.a.createElement("div",{className:"flex-card-days"},r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,{htmlFor:"numberOfDays",style:{marginRight:"50px",marginLeft:"50px"}},"5+ days"),r.a.createElement(d.a.Control,{type:"radio",id:"numberOfDAys",name:"numberOfDays",value:6,onChange:this.props.handleChange})))),r.a.createElement(E.a,{className:"button",onClick:this.props.nextStep},"Select"))}}]),a}(n.Component),W=a(34),L=a(33);function B(e){var t=e.templates.filter((function(t){return t.type===e.type&&t.numberOfDays===Number(e.numberOfDays)&&t.ref}));return r.a.createElement("div",{className:"container-user"},r.a.createElement("div",{className:"container-plans"},r.a.createElement("h4",null,"Select a plan:"),t.map((function(t){return console.log(t._id),r.a.createElement(E.a,{onClick:e.handleBtn,name:"templateID",value:t._id,key:t._id},t.planName)}))),r.a.createElement("button",{className:"button-back",onClick:e.prevStep,style:{marginTop:"50px"}},r.a.createElement(L.a,{icon:W.a})))}a(105);function A(e){var t=e.templates.filter((function(t){return t._id===e.templateID})),a=Object.keys(t[0]).filter((function(e){return e.includes("day")}));console.log(a),console.log(t);var n=a.map((function(e){return t[0][e]}));return console.log(n),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flex-container details"},3==e.numberOfDays&&n.slice(0,3).map((function(e,t){return r.a.createElement("div",null,r.a.createElement("h3",{className:"day"},"Day",t+1,":"),e.map((function(e){return r.a.createElement("div",{className:"exercise"},r.a.createElement("h6",null,e.name),e.set1goal?r.a.createElement("p",null,"Run"==e.name?"Goal: "+e.set1goal+" m":"Set 1: "+e.set1goal):r.a.createElement(r.a.Fragment,null),e.set2goal?r.a.createElement("p",null,"Set 2: ",e.set2goal):r.a.createElement(r.a.Fragment,null),e.set3goal?r.a.createElement("p",null,"Set 3: ",e.set3goal):r.a.createElement(r.a.Fragment,null))})))})),5==e.numberOfDays&&n.slice(0,5).map((function(e,t){return r.a.createElement("div",null,r.a.createElement("h3",{className:"day"},"Day",t+1,":"),e.map((function(e){return r.a.createElement("div",{className:"exercise"},r.a.createElement("h6",null,e.name),e.set1goal?r.a.createElement("p",null,"Run"==e.name?"Goal: "+e.set1goal+" m":"Set 1: "+e.set1goal):r.a.createElement(r.a.Fragment,null),e.set2goal?r.a.createElement("p",null,"Set 2: ",e.set2goal):r.a.createElement(r.a.Fragment,null),e.set3goal?r.a.createElement("p",null,"Set 3: ",e.set3goal):r.a.createElement(r.a.Fragment,null))})))})),6==e.numberOfDays&&n.slice(0,6).map((function(e,t){return r.a.createElement("div",null,r.a.createElement("h3",{className:"day"},"Day",t+1,":"),e.map((function(e){return r.a.createElement("div",{className:"exercise"},r.a.createElement("h6",null,e.name),e.set1goal?r.a.createElement("p",null,"Run"==e.name?"Goal: "+e.set1goal+" m":"Set 1: "+e.set1goal):r.a.createElement(r.a.Fragment,null),e.set2goal?r.a.createElement("p",null,"Set 2: ",e.set2goal):r.a.createElement(r.a.Fragment,null),e.set3goal?r.a.createElement("p",null,"Set 3: ",e.set3goal):r.a.createElement(r.a.Fragment,null))})))}))),r.a.createElement("button",{className:"button-pick",onClick:e.handleSubmit},"Pick this plan"),r.a.createElement("button",{className:"button-back",onClick:e.prevStep,style:{marginTop:"50px"}},r.a.createElement(L.a,{icon:W.a})))}var R=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={step:1,templates:[],templateID:"",type:"",numberOfDays:0},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;console.log(n,r),e.setState(Object(h.a)({},n,r))},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.handleBtn=function(t){console.log("This is handleBtn",t.target),e.handleChange(t),e.nextStep()},e.getData=function(){b.a.get("/api/templates").then((function(t){e.setState({templates:t.data})})).catch((function(e){console.log(e)}))},e.handleSubmit=function(t){var a=e.state.templateID,n=e.props.user._id;console.log("We are getting templateId:",a),console.log("We are getting userId:",n),t.preventDefault(),b.a.post("/api/templates",{templateID:a,userId:n}).then((function(t){console.log("this is my updated user",t),e.props.setUser(t.data),e.props.history.push("/currentPlan")})).catch((function(e){console.log(e)}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"background-list"},r.a.createElement("div",{className:"container-user"},1===this.state.step&&r.a.createElement(I,{templates:this.state.templates,handleChange:this.handleChange,nextStep:this.nextStep}),2===this.state.step&&r.a.createElement(B,{templates:this.state.templates,type:this.state.type,numberOfDays:this.state.numberOfDays,handleBtn:this.handleBtn,nextStep:this.nextStep,prevStep:this.prevStep,step1:this.state.step}),3===this.state.step&&r.a.createElement(A,{templates:this.state.templates,type:this.state.type,numberOfDays:this.state.numberOfDays,templateID:this.state.templateID,handleSubmit:this.handleSubmit,prevStep:this.prevStep})))}}]),a}(n.Component);a(106);function M(e){return r.a.createElement("div",{className:"background-image"},r.a.createElement("h1",null,r.a.createElement("img",{src:w.a,alt:"logo",style:{width:"60px",marginRight:"15px"}}),"MIND MUSCLE CONNECTION",r.a.createElement("img",{src:w.a,alt:"logo",style:{width:"60px",marginLeft:"15px"}})),e.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"/userdashboard"},r.a.createElement("button",{className:"classname"},"Get started!"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"/signup"},r.a.createElement("button",{className:"classname"},"Join us!"))),r.a.createElement("div",{className:"footer"},r.a.createElement(c.b,{to:"/about",className:"about"},"About us")," | ",r.a.createElement(c.b,{to:"/how-it-works",className:"how-it-works"},"How it works")))}a(107),a(108);var _=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"background-image-about"},r.a.createElement("div",null,r.a.createElement("h1",{className:"about-title"},"About us"),r.a.createElement("p",{className:"about-text"},"Welcome to Mind-Muscle Connection,",r.a.createElement("br",null),r.a.createElement("br",null),"The number one Workout App where you can choose your type of Workout, decide the frequency of training and receive a personal schedule.",r.a.createElement("br",null),r.a.createElement("br",null),"Just within a few clicks!",r.a.createElement("br",null),r.a.createElement("br",null),"We're dedicated to providing you the best user experience, a simple overview of your training goals with great personal progress as a result. We hope you enjoy working with the app as much as we enjoy offering it to you.",r.a.createElement("br",null),r.a.createElement("br",null),"Sincerely,",r.a.createElement("br",null),r.a.createElement("br",null),"Mind-Muscle Connection")))}}]),a}(n.Component),H=(a(109),a(110),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"background-image-HowItWorks"},r.a.createElement("div",null,r.a.createElement("h1",{className:"HowItWorks-title"},"How it works"),r.a.createElement("p",{className:"HowItWorks-text"},"Sign-up to create your own userprofile.",r.a.createElement("br",null),r.a.createElement("br",null),"Login.",r.a.createElement("br",null),r.a.createElement("br",null),"Select a type of Workout and the Training Frequency.",r.a.createElement("br",null),r.a.createElement("br",null),"Click a plan to view the details.",r.a.createElement("br",null),r.a.createElement("br",null),"If you decide this is the right plan, then pick the plan and save it on your user profile.",r.a.createElement("br",null),r.a.createElement("br",null),"Your training plan displays all the exercise names, target amount of sets and target amount of reps in a simple overview.",r.a.createElement("br",null),r.a.createElement("br",null),"When you manage to perform more or less reps than the target amount, just fill out the actual amount of reps and keep track of your results!")))}}]),a}(n.Component)),T=a(68),J=(a(58),a(27)),q=a(69),Y=a(61),$=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t,a){e.props.handleChange(t,a)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.exercises,n=t.exercise,l=t.index;return r.a.createElement("div",{className:"container-exercise"},r.a.createElement("div",{key:Object(J.v4)()},r.a.createElement(d.a,{type:"submit",className:"form-exercise"},r.a.createElement("h5",null,n.name),r.a.createElement("h6",null,"Set 1 Goal: ",r.a.createElement("strong",null,n.set1goal)),r.a.createElement("div",null,r.a.createElement(q.a,{htmlFor:""},"Set 1 Reps: "),r.a.createElement(Y.a,{type:"number",name:"set1reps",min:"1",max:"100",value:a[l].set1reps,onChange:function(t){return e.handleChange(t,l)}})),r.a.createElement("div",null,r.a.createElement(q.a,{htmlFor:""},"Set 1 Weight: "),r.a.createElement(Y.a,{type:"number",min:"1",max:"100",name:"set1weight",value:a[l].set1weight,onChange:function(t){return e.handleChange(t,l)}})),r.a.createElement("h6",null,"Set 2 Goal: ",r.a.createElement("strong",null,n.set2goal)),r.a.createElement("div",null,r.a.createElement(q.a,{htmlFor:""},"Set 2 Reps: "),r.a.createElement(Y.a,{type:"number",min:"1",max:"100",name:"set2reps",value:a[l].set2reps,onChange:function(t){return e.handleChange(t,l)}})),r.a.createElement("div",null,r.a.createElement(q.a,{htmlFor:""},"Set 2 Weight: "),r.a.createElement(Y.a,{type:"number",min:"1",max:"100",name:"set2weight",value:a[l].set2weight,onChange:function(t){return e.handleChange(t,l)}})),n.set3goal&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,"Set 3 Goal: ",r.a.createElement("strong",null,n.set3goal)),r.a.createElement("div",null,r.a.createElement(q.a,{htmlFor:""},"Set 2 Reps: "),r.a.createElement(Y.a,{type:"number",min:"1",max:"100",name:"set3reps",value:a[l].set3reps,onChange:function(t){return e.handleChange(t,l)}})),r.a.createElement("div",null,r.a.createElement(q.a,{htmlFor:""},"Set 3 Weight: "),r.a.createElement(Y.a,{type:"number",min:"1",max:"100",name:"set3weight",value:a[l].set3weight,onChange:function(t){return e.handleChange(t,l)}}))))))}}]),a}(n.Component),z=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={currentPlan:[],selectedDay:null,exercises:null},e.handleChange=function(t,a){var n=t.target,r=n.name,l=n.value,s=Object(T.a)(e.state.exercises);s[a][r]=Number(l),console.log(typeof s[a][r]),e.setState({exercises:s})},e.handleClick=function(t){t.preventDefault(),console.log("My click",e.state.currentPlan._id);var a=e.state.currentPlan._id;console.log("this is state.currentPlan",e.state.currentPlan),b.a.put("/api/templates/".concat(a),e.state.currentPlan).then((function(t){console.log(t),e.setState({currentPlan:t.data})}))},e.showDetails=function(t){var a=e.state.currentPlan[t];t=e.state.selectedDay===t?null:t,e.setState({selectedDay:t,exercises:a})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(this.props.user){var t=this.props.user.currentPlan;b.a.get("/api/templates/".concat(t)).then((function(t){var a=t.data;e.setState({currentPlan:a})}))}}},{key:"render",value:function(){var e=this;console.log(this.state.currentPlan);var t=Object.keys(this.state.currentPlan).filter((function(e){return e.includes("day")}));return r.a.createElement("div",{className:"background-current"},r.a.createElement("div",{className:"container current"},r.a.createElement("button",{className:"btn btn-secondary",onClick:this.handleClick},"Update Plan"),t.map((function(t){return r.a.createElement("div",{key:Object(J.v4)()},r.a.createElement("button",{className:"btn btn-outline-light"},r.a.createElement("h4",{onClick:function(){return e.showDetails(t)}},t)),e.state.selectedDay===t&&e.state.exercises.map((function(t,a){return r.a.createElement($,{key:Object(J.v4)(),index:a,exercises:e.state.exercises,exercise:t,handleChange:e.handleChange})})))}))))}}]),a}(n.Component),K=(a(113),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={user:e.props.user},e.setUser=function(t){e.setState({user:t})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(j,{user:this.state.user,setUser:this.setUser}),r.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(M,{user:e.state.user,setUser:e.setUser})}}),r.a.createElement(p.a,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(C,Object.assign({setUser:e.setUser},t))}}),r.a.createElement(p.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(x,Object.assign({setUser:e.setUser},t))}}),r.a.createElement(p.a,{exact:!0,path:"/userdashboard",render:function(t){return r.a.createElement(R,Object.assign({user:e.state.user,setUser:e.setUser},t))}}),r.a.createElement(p.a,{exact:!0,path:"/about",render:function(t){return r.a.createElement(_,Object.assign({setUser:e.setUser},t))}}),r.a.createElement(p.a,{exact:!0,path:"/how-it-works",render:function(t){return r.a.createElement(H,Object.assign({setUser:e.setUser},t))}}),r.a.createElement(p.a,{exact:!0,path:"/currentPlan",render:function(t){return r.a.createElement(z,Object.assign({setUser:e.setUser,user:e.state.user},t))}}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.a.get("/api/auth/loggedin").then((function(e){var t=e.data;console.log(t),s.a.render(r.a.createElement(c.a,null,r.a.createElement(K,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,a){e.exports=a.p+"static/media/logo.b2f357c9.png"},54:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},65:function(e,t,a){e.exports=a.p+"static/media/gym.f36bdbc0.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/crossfit.6e16faad.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/yoga.3f4557c0.jpg"},70:function(e,t,a){e.exports=a(114)},75:function(e,t,a){},76:function(e,t,a){},97:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.dd2a4cc1.chunk.js.map