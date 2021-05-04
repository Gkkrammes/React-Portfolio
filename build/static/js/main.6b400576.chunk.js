(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{30:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(2),r=a(19),i=a.n(r),n=a(14),o=a(15),l=a(18),h=a(17),d=a(12),j=a(7),b=(a(30),a(27)),m=a.n(b),p=a(36),u=a(23);var O=function(e){return Object(c.jsx)("div",{className:"wrapper",children:e.children})};var x=function(e){return Object(c.jsx)("header",{children:e.header})},g=a.p+"static/media/github.ff7b9911.png",f=a.p+"static/media/linkedin.f3954761.png",k=function(){var e=Object(s.useState)("Submit"),t=Object(u.a)(e,2),a=t[0],r=t[1],i=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,c,s,i,n,o,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r("Sending..."),a=t.target.elements,c=a.name,s=a.email,i=a.message,n={name:c.value,email:s.value,message:i.value},e.next=6,fetch("http://localhost:3000/./Contact",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)});case 6:return o=e.sent,r("Submit"),e.next=10,o.json();case 10:l=e.sent,alert(l.status);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{header:"REACH OUT"}),Object(c.jsx)(O,{children:Object(c.jsxs)("form",{className:"contactForm",onSubmit:i,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Please feel free to reach out with and requests, recommendations, or inqueries."}),Object(c.jsx)("label",{htmlFor:"name"}),Object(c.jsx)("input",{className:"name-input",type:"text",placeholder:"name",id:"name",required:!0})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"email"}),Object(c.jsx)("input",{className:"email-input",type:"email",placeholder:"email",id:"email",required:!0})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"message"}),Object(c.jsx)("textarea",{className:"massage-input",placeholder:"message",id:"message",required:!0})]}),Object(c.jsx)("div",{className:"buttonWrapper",children:Object(c.jsx)("button",{id:"contact-button",type:"submit",children:a})}),Object(c.jsx)("h2",{children:"Thanks for visiting."}),Object(c.jsx)("a",{href:"https://github.com/Gkkrammes",rel:"noopener noreferrer",target:"_blank",children:Object(c.jsx)("img",{src:g,className:"icon-github",alt:"Github Icon"})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/gretchen-krammes-1a56321b1/",rel:"noopener noreferrer",target:"_blank",children:Object(c.jsx)("img",{src:f,className:"icon-linkedin",alt:"LinkedinIcon"})})]})})]})},v=a(60),y=a(61),N=a(62),w=a(63),S=a(64),I=a(65);var G=function(e){return Object(c.jsx)(O,{children:Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"img-container",children:Object(c.jsxs)(v.a,{children:[Object(c.jsx)(y.a,{id:"project-button",block:!0,children:e.name}),Object(c.jsx)(N.a,{className:"projectImage",top:!0,width:"100%",src:e.picture,alt:"website image"}),Object(c.jsxs)(w.a,{className:"content",children:[Object(c.jsx)(S.a,{style:{fontSize:"18px",fontWeight:"bold"},children:"DESCRIPTION:"}),Object(c.jsx)(I.a,{style:{fontSize:"18px"},children:e.description}),Object(c.jsxs)("div",{className:"portfolio-link",children:[Object(c.jsx)("a",{className:"external-links",id:"github",style:{fontSize:"18px",fontWeight:"bold",color:"#1F8832",textAlign:"center"},tag:d.b,href:"".concat(e.github),rel:"noopener noreferrer",target:"_blank",children:"GITHUB"}),"|",Object(c.jsx)("a",{className:"external-links",id:"website",style:{fontSize:"18px",fontWeight:"bold",color:"#1F8832",textAlign:"center"},tag:d.b,href:"".concat(e.site),rel:"noopener noreferrer",target:"_blank",children:"DEPLOYED SITE"})]})]})]})})})})},A=a(8),T=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={projects:A},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{header:"PROJECTS"}),Object(c.jsx)(O,{children:A.map((function(e){return Object(c.jsx)(G,{id:e.id,picture:e.image,name:e.name,description:e.description,github:e.github,site:e.site},e.id)}))})]})}}]),a}(s.Component);var D=function(){return Object(c.jsx)(O,{children:Object(c.jsxs)("div",{className:"table-responsive",children:[Object(c.jsx)("table",{className:"table table-borderless",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"HTML"}),Object(c.jsx)("th",{children:"MySQL"}),Object(c.jsx)("th",{children:"jQuery"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Bootstrap"}),Object(c.jsx)("th",{children:"Tests"}),Object(c.jsx)("th",{children:"APIs"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"CSS"}),Object(c.jsx)("th",{children:"Sass"}),Object(c.jsx)("th",{children:"Node.JS"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"JavaScript"}),Object(c.jsx)("th",{children:"MongoDB"}),Object(c.jsx)("th",{children:"React"})]})]})}),Object(c.jsx)("div",{className:"resumeWrapper",children:Object(c.jsx)("a",{type:"submit",className:"Resume",href:"https://docs.google.com/document/d/1GahBznAAflaid6UP-R_zP74ppyPfLa_HjXKYtex22wQ/edit?usp=sharing",rel:"noopener noreferrer",target:"_blank",children:"VIEW MY RESUME"})})]})})},C=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsx)("main",{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"About",children:Object(c.jsxs)("div",{className:"about-container",children:[Object(c.jsx)("h2",{children:"Hello there."}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("p",{className:"about-container-p",children:"I am a full stack web developer leveraging experience in sales and customer service to build a better and more responsive user experience. I recently earned a professional certificate in full stack coding from Butler University, with recently developed skills in React, JavaScript, Css, and website responsiveness. I am interested in expanding my knowledge and experience to grow into a successful career in UX/UI design."})})]})}),Object(c.jsxs)("div",{className:"Projects",children:[Object(c.jsx)(x,{header:"FEATURED"}),Object(c.jsxs)(O,{children:[Object(c.jsx)(G,{id:A[0].id,picture:A[0].image,name:A[0].name,description:A[0].description,tech:A[0].tech,github:A[0].github,site:A[0].site},A[0].id),Object(c.jsx)(G,{id:A[1].id,picture:A[1].image,name:A[1].name,description:A[1].description,tech:A[1].tech,github:A[1].github,site:A[1].site},A[1].id)]}),Object(c.jsx)("div",{className:"buttonWrapper",children:Object(c.jsx)("button",{type:"submit",id:"portfolioButton",className:"profile btn-lg",onClick:function(e){return window.location.href="/portfolio"},children:"VIEW PORTFOLIO"})})]}),Object(c.jsxs)("div",{className:"Skills",children:[Object(c.jsx)(x,{header:"SKILLS"}),Object(c.jsx)(D,{})]})]})})}}]),a}(s.Component),P=a(66),E=a(67);var U=function(){return Object(c.jsx)("div",{className:"jumbotron-main",children:Object(c.jsx)(P.a,{children:Object(c.jsx)(E.a,{children:Object(c.jsx)("h1",{children:"GRETCHEN KRAMMES"})})})})},H=a(68),R=a(69),W=a(70),z=a(74),M=a(71),F=a(72),L=a(73),q=function(e){var t=Object(s.useState)(!0),a=Object(u.a)(t,2),r=a[0],i=a[1];return Object(c.jsx)("header",{children:Object(c.jsxs)(H.a,{className:"navbar",color:"white",light:!0,expand:"md",children:[Object(c.jsx)(R.a,{className:"navicon",children:"GK"}),Object(c.jsx)(W.a,{onClick:function(){return i(!r)},className:"mr-2"}),Object(c.jsx)(z.a,{isOpen:!r,navbar:!0,children:Object(c.jsxs)(M.a,{className:"mr-auto",navbar:!0,children:[Object(c.jsx)(F.a,{children:Object(c.jsx)(L.a,{tag:d.b,to:"/",children:"HOME"})}),Object(c.jsx)(F.a,{children:Object(c.jsx)(L.a,{tag:d.b,to:"/portfolio",children:"PORTFOLIO"})}),Object(c.jsx)(F.a,{children:Object(c.jsx)(L.a,{tag:d.b,to:"/contact",children:"CONTACT"})})]})})]})})},J=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(q,{}),Object(c.jsx)(U,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/",component:C}),Object(c.jsx)(j.a,{exact:!0,path:"/contact",component:k}),Object(c.jsx)(j.a,{exact:!0,path:"/portfolio",component:T}),Object(c.jsx)(j.a,{exact:!0,path:"/skills",component:D}),Object(c.jsx)(j.a,{exact:!0,path:"/jumbo",component:U})]})]})})}}]),a}(s.Component);a(57);i.a.render(Object(c.jsx)(d.a,{children:Object(c.jsx)(J,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"id":"1","image":"/Users/gretchenkrammes/Documents/GitHub/react-portfolio/public/Images/omnicalculator.png","name":"Omnicalculator","description":"A complex React application with multiple calculators to help you make basic calculations, track finances, and much more!","github":"","site":""},{"id":"2","image":"/Users/gretchenkrammes/Documents/GitHub/react-portfolio/public/Images/partyplanner.png","name":"Party Planner","description":"An ultimate party planner that centralizes every step of the party planning process in one application.","github":"https://github.com/Gkkrammes/Project2","site":" https://peaceful-shore-75888.herokuapp.com/"},{"id":"3","image":"/Users/gretchenkrammes/Documents/GitHub/react-portfolio/public/Images/dailymeow.png","name":"The Daily Meow","description":"A simple calendar application to bring a little cat inspired joy to your everyday scheduling.","github":"https://github.com/Gkkrammes/The-Daily-Meow","site":"https://gkkrammes.github.io/The-Daily-Meow/"},{"id":"4","image":"/Users/gretchenkrammes/Documents/GitHub/react-portfolio/public/Images/notetaker.png","name":"Note Taker","description":"A basic note taking app that saves notes for a user.","github":" https://github.com/Gkkrammes/Note-Taker","site":" https://gretchens-note-taker.herokuapp.com/"},{"id":"5","image":"/Users/gretchenkrammes/Documents/GitHub/react-portfolio/public/Images/scheduler.png","name":"Workday Scheduler","description":"A daily calendar application that allows the user to schedule events on an hourly basis.","github":"https://github.com/Gkkrammes/Workday-Scheduler","site":"https://gkkrammes.github.io/Workday-Scheduler/"},{"id":"6","image":"/Users/gretchenkrammes/Documents/GitHub/react-portfolio/public/Images/weather.png","name":"Weather Dashboard","description":"A dashboard that displays a daily and five-day forecast for a given city.","github":"https://github.com/Gkkrammes/Weather-Dashboard","site":"https://gkkrammes.github.io/Weather-Dashboard/"},{"id":"7","image":"/Users/gretchenkrammes/Documents/GitHub/react-portfolio/public/Images/codequiz.png","name":"Coding Quiz","description":"A quiz application that allows the user to test their basic coding knowledge.","github":"https://github.com/Gkkrammes/Code-Quiz","site":"https://gkkrammes.github.io/Code-Quiz/"},{"id":"8","image":"/Users/gretchenkrammes/Documents/GitHub/react-portfolio/public/Images/password.png","name":"Password Generator","description":"A quick and easy way to generate a password within the selected parameters.","github":"https://github.com/Gkkrammes/Password-Generator","site":"https://gkkrammes.github.io/Password-Generator/"}]')}},[[58,1,2]]]);
//# sourceMappingURL=main.6b400576.chunk.js.map