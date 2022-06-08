(this["webpackJsonpportfolio-projects"]=this["webpackJsonpportfolio-projects"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var s=t(2),a=t.n(s),i=t(11),n=t.n(i),r=(t(17),t(6)),j=t(5),o=(t(18),t(7)),l=t(1),b=function(){var e=Object(s.useState)(!1),c=Object(r.a)(e,2),t=c[0],a=c[1],i=function(){return a(!t)};return Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("h2",{children:"Eric's Developer Portfolio"})}),Object(l.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(l.jsx)("li",{onClick:i,className:"nav-item",children:Object(l.jsx)(o.b,{to:"/",children:"Projects "})}),Object(l.jsx)("li",{onClick:i,className:"nav-item",children:Object(l.jsx)(o.b,{to:"/about",children:"About Eric"})}),Object(l.jsx)("li",{onClick:i,className:"nav-item",children:Object(l.jsx)(o.b,{to:"/contact",children:"Contact"})})]}),Object(l.jsx)("div",{className:"hamburger",onClick:i,children:t?Object(l.jsx)(j.i,{size:30,style:{color:"#f8f8f8"}}):Object(l.jsx)(j.a,{size:30,style:{color:"#f8f8f8"}})})]})},d=(t(20),function(e){var c=e.name,t=e.src,s=e.description,a=e.link,i=e.guestLogin,n=e.guestDesc,r=e.guestP;return Object(l.jsxs)("div",{className:"project-card",children:[Object(l.jsx)("div",{className:"name",children:c}),Object(l.jsx)("img",{src:t,className:"src"}),Object(l.jsx)("div",{className:"desc",children:s}),Object(l.jsxs)("div",{className:"login-container",children:[Object(l.jsx)("div",{className:"guest",children:i}),Object(l.jsx)("div",{className:"guestD",children:n}),Object(l.jsx)("div",{className:"guestP",children:r})]}),Object(l.jsx)("a",{className:"p-link",target:"_blank",href:a,children:"Link to project"})]})}),m=(t(21),t.p+"static/media/project1img.a22ec1c1.png"),h=t.p+"static/media/project2img.1c7b4827.png",p=t.p+"static/media/project3img.ccbf11d0.png",x=t.p+"static/media/project4img.4fd63760.png",O=function(){var e="2021 Year in Review Game",c="2021 Year-In-Review slot machine style game. This game was created with HTML, CSS, and Vanilla JavaScript",t="https://ericpeterson91.github.io/2021-year-in-review/",s="Stuff Portfolio",a="Application to keep track of physical items owned. This application was created using MongoDB, ExpressJS, and NodeJS.",i="http://erics-project.herokuapp.com/",n="Horoscope App",r="Horoscope application generated with Python, Django, and JavaScript.",j="https://django-horoscope-app.herokuapp.com/",o="Personal Landing Page",b="Personal landing page created with the MERN stack.",O="https://landing-page-personal.herokuapp.com/";return Object(l.jsx)("div",{className:"hero",children:Object(l.jsxs)("div",{className:"project-container",children:[Object(l.jsx)("div",{children:Object(l.jsx)(d,{name:e,src:m,description:c,link:t})}),Object(l.jsx)("div",{children:Object(l.jsx)(d,{name:s,src:h,description:a,link:i})}),Object(l.jsx)("div",{children:Object(l.jsx)(d,{name:n,src:p,description:r,link:j})}),Object(l.jsx)("div",{children:Object(l.jsx)(d,{name:o,src:x,description:b,link:O,guestP:"Password: helloworld7",guestLogin:"Guest Login: ",guestDesc:"Email: guest@something.com"})})]})})},u=t(3),g=(t(22),t.p+"static/media/Eric.9da56d38.jpeg"),f=t(10),v=function(){return Object(l.jsxs)("div",{className:"about-container",children:[Object(l.jsx)("div",{className:"img",children:Object(l.jsx)("img",{className:"img-me",src:g,alt:""})}),Object(l.jsxs)("div",{className:"about",children:[Object(l.jsx)("h1",{children:"About Eric"}),Object(l.jsxs)("p",{children:[" Eric is full stack web developer from Saskatoon, Saskatchewan. ",Object(l.jsx)("br",{})," ",Object(l.jsx)("br",{}),"Eric is passionate about the world of JavaScript, and the world of software development more generally. ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{})," Eric is open to work in Saskatoon, relocating cities for work, and also full-time remote work."]})]}),Object(l.jsxs)("div",{className:"logo-container",children:[Object(l.jsx)(j.c,{size:40,className:"github"}),Object(l.jsx)(j.g,{size:40,className:"node"}),Object(l.jsx)(f.a,{size:40,className:"express"}),Object(l.jsx)(j.h,{size:40,className:"react"}),Object(l.jsx)(j.e,{size:40,className:"js"}),Object(l.jsx)(j.b,{size:40,className:"css"}),Object(l.jsx)(j.d,{size:40,className:"html"}),Object(l.jsx)(f.b,{size:40,className:"mongo"})]})]})},N=t(12),k=(t(23),function(){var e=Object(s.useRef)();return Object(l.jsxs)("div",{className:"contact-container",children:[Object(l.jsxs)("div",{className:"form-container",children:[Object(l.jsx)("h2",{children:"Send Eric an email below:"}),Object(l.jsxs)("form",{className:"form",ref:e,onSubmit:function(c){c.preventDefault(),N.a.sendForm("service_m4dbcui","template_1uu9i9c",e.current,"ayyGYnL-Zut8YCKQJ").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),c.target.reset()},children:[Object(l.jsx)("label",{children:"Name"}),Object(l.jsx)("input",{type:"text",name:"name"}),Object(l.jsx)("label",{children:"Subject"}),Object(l.jsx)("input",{type:"text",name:"subject"}),Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{type:"email",name:"email"}),Object(l.jsx)("label",{children:"Message"}),Object(l.jsx)("textarea",{name:"message"}),Object(l.jsx)("input",{type:"submit",value:"Send"})]})]}),Object(l.jsxs)("div",{className:"icon-container",children:[Object(l.jsx)("h2",{children:"Links:"}),Object(l.jsxs)("div",{className:"icons",children:[Object(l.jsx)("a",{target:"_blank",href:"https://github.com/ericpeterson91?tab=repositories",children:Object(l.jsx)(j.c,{size:45,className:"github"})}),Object(l.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/eric-peterson-110a62162/",children:Object(l.jsx)(j.f,{size:45,className:"linkedin"})})]})]})]})});var w=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(b,{}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/",element:Object(l.jsx)(O,{})}),Object(l.jsx)(u.a,{path:"/about",element:Object(l.jsx)(v,{})}),Object(l.jsx)(u.a,{path:"/contact",element:Object(l.jsx)(k,{})})]})]})})};n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.0b2a7f10.chunk.js.map