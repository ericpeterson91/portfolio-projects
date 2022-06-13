(this["webpackJsonpportfolio-projects"]=this["webpackJsonpportfolio-projects"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),i=c(12),n=c.n(i),r=(c(18),c(6)),j=c(5),l=(c(19),c(8)),o=c(1),b=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],i=function(){return a(!c)};return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("h2",{className:"title",children:"Eric's Developer Portfolio"})}),Object(o.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(o.jsx)("li",{onClick:i,className:"nav-item",children:Object(o.jsx)(l.b,{to:"/portfolio-projects",children:"Projects "})}),Object(o.jsx)("li",{onClick:i,className:"nav-item",children:Object(o.jsx)(l.b,{to:"/about",children:"About Eric"})}),Object(o.jsx)("li",{onClick:i,className:"nav-item",children:Object(o.jsx)(l.b,{to:"/contact",children:"Contact"})})]}),Object(o.jsx)("div",{className:"hamburger",onClick:i,children:c?Object(o.jsx)(j.i,{size:30,style:{color:"#f8f8f8"}}):Object(o.jsx)(j.a,{size:30,style:{color:"#f8f8f8"}})})]})},d=(c(21),function(e){var t=e.name,c=e.src,s=e.description,a=e.link,i=e.guestLogin,n=e.guestDesc,r=e.guestP;return Object(o.jsxs)("div",{className:"project-card",children:[Object(o.jsx)("div",{className:"name",children:t}),Object(o.jsx)("div",{className:"desc",children:s}),Object(o.jsxs)("div",{className:"img-container",children:[Object(o.jsx)("img",{src:c,className:"src"}),Object(o.jsxs)("div",{className:"login-container",children:[Object(o.jsxs)("div",{className:"guest-container",children:[Object(o.jsx)("div",{className:"guest",children:i}),Object(o.jsx)("div",{className:"guestD",children:n}),Object(o.jsx)("div",{className:"guestP",children:r})]}),Object(o.jsx)("a",{className:"p-link",target:"_blank",href:a,children:"Link to project"})]})]})]})}),m=(c(22),c.p+"static/media/project1img.a22ec1c1.png"),u=c.p+"static/media/project2img.1c7b4827.png",h=c.p+"static/media/project3img.ccbf11d0.png",O=c.p+"static/media/project4img.4fd63760.png",p=function(){var e="2021 Year in Review Game",t="2021 Year-In-Review slot machine style game. This game was created with HTML, CSS, and Vanilla JavaScript",c="https://ericpeterson91.github.io/2021-year-in-review/",s="Stuff Portfolio",a="Application to keep track of physical items owned. This application was created using MongoDB, ExpressJS, and NodeJS.",i="http://erics-project.herokuapp.com/",n="Horoscope App",r="Horoscope application generated with Python, Django, and JavaScript.",j="https://django-horoscope-app.herokuapp.com/",l="Personal Landing Page",b="Personal landing page created with the MERN stack.",p="https://landing-page-personal.herokuapp.com/";return Object(o.jsx)("div",{className:"hero-container",children:Object(o.jsxs)("div",{className:"cards",children:[Object(o.jsx)(d,{name:e,src:m,description:t,link:c}),Object(o.jsx)(d,{name:s,src:u,description:a,link:i}),Object(o.jsx)(d,{name:n,src:h,description:r,link:j}),Object(o.jsx)(d,{name:l,src:O,description:b,link:p,guestP:"Password: helloworld7",guestLogin:"Guest Login: ",guestDesc:"Email: guest@something.com"})]})})},x=c(3),g=(c(23),c.p+"static/media/Eric.9da56d38.jpeg"),f=c(11),v=function(){return Object(o.jsxs)("div",{className:"about-container",children:[Object(o.jsx)("div",{className:"img-container",children:Object(o.jsx)("img",{className:"img-me",src:g,alt:""})}),Object(o.jsxs)("div",{className:"desc-container",children:[Object(o.jsx)("h1",{children:"About Eric"}),Object(o.jsxs)("p",{children:[" Eric is full stack web developer from Saskatoon, Saskatchewan. ",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),"Eric is passionate about the world of JavaScript, and the world of software development more generally. ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})," Eric is open to work in Saskatoon, relocating cities for work, and also full-time remote work."]})]}),Object(o.jsxs)("div",{className:"logo-container",children:[Object(o.jsx)(j.c,{size:60,className:"github"}),Object(o.jsx)(j.g,{size:60,className:"node"}),Object(o.jsx)(f.a,{size:60,className:"express"}),Object(o.jsx)(j.h,{size:60,className:"react"}),Object(o.jsx)(j.e,{size:60,className:"js"}),Object(o.jsx)(j.b,{size:60,className:"css"}),Object(o.jsx)(j.d,{size:60,className:"html"}),Object(o.jsx)(f.b,{size:60,className:"mongo"})]})]})},N=c(7),k=c(13),w=(c(24),function(){var e=Object(s.useState)({name:"",subject:"",email:"",message:""}),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(!1),n=Object(r.a)(i,2),l=n[0],b=n[1],d=Object(s.useRef)();return Object(o.jsxs)("div",{className:"contact-container",children:[Object(o.jsxs)("div",{className:"form-container",children:[Object(o.jsx)("h2",{children:"Send Eric an email below:"}),Object(o.jsxs)("form",{className:"form",ref:d,onSubmit:function(e){e.preventDefault(),c.name&&c.subject&&c.email&&c.message&&(k.a.sendForm("service_m4dbcui","template_1uu9i9c",d.current,"ayyGYnL-Zut8YCKQJ").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),b(!0))},children:[Object(o.jsx)("label",{children:"Your Name"}),Object(o.jsx)("input",{disabled:l,onChange:function(e){a(Object(N.a)(Object(N.a)({},c),{},{name:e.target.value}))},value:c.name,type:"text",name:"name"}),Object(o.jsx)("label",{children:"Subject"}),Object(o.jsx)("input",{disabled:l,onChange:function(e){a(Object(N.a)(Object(N.a)({},c),{},{subject:e.target.value}))},value:c.subject,type:"text",name:"subject"}),Object(o.jsx)("label",{children:"Your Email Address"}),Object(o.jsx)("input",{disabled:l,onChange:function(e){a(Object(N.a)(Object(N.a)({},c),{},{email:e.target.value}))},value:c.email,type:"email",name:"email"}),Object(o.jsx)("label",{children:"Message"}),Object(o.jsx)("textarea",{disabled:l,onChange:function(e){a(Object(N.a)(Object(N.a)({},c),{},{message:e.target.value}))},value:c.message,name:"message"}),Object(o.jsx)("input",{type:"submit",value:"Send"}),l?Object(o.jsx)("div",{className:"success",children:"Email sent succesfully!"}):null]})]}),Object(o.jsxs)("div",{className:"icon-container",children:[Object(o.jsx)("h1",{children:"Links:"}),Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)("a",{target:"_blank",href:"https://github.com/ericpeterson91?tab=repositories",children:Object(o.jsx)(j.c,{size:60,className:"github"})}),Object(o.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/eric-peterson-110a62162/",children:Object(o.jsx)(j.f,{size:60,className:"linkedin"})})]})]})]})});var S=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(b,{}),Object(o.jsxs)(x.c,{children:[Object(o.jsx)(x.a,{path:"/portfolio-projects",element:Object(o.jsx)(p,{})}),Object(o.jsx)(x.a,{path:"/about",element:Object(o.jsx)(v,{})}),Object(o.jsx)(x.a,{path:"/contact",element:Object(o.jsx)(w,{})})]})]})})};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.1b78d986.chunk.js.map