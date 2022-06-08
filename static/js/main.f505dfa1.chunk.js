(this["webpackJsonpnavbar-tutorial"]=this["webpackJsonpnavbar-tutorial"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var s=t(2),a=t.n(s),i=t(11),n=t.n(i),r=(t(17),t(6)),j=t(5),l=(t(18),t(7)),o=t(1),b=function(){var e=Object(s.useState)(!1),c=Object(r.a)(e,2),t=c[0],a=c[1],i=function(){return a(!t)};return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("h2",{children:"Eric's Developer Portfolio"})}),Object(o.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(o.jsx)("li",{onClick:i,className:"nav-item",children:Object(o.jsx)(l.b,{to:"/",children:"Projects "})}),Object(o.jsx)("li",{onClick:i,className:"nav-item",children:Object(o.jsx)(l.b,{to:"/about",children:"About Eric"})}),Object(o.jsx)("li",{onClick:i,className:"nav-item",children:Object(o.jsx)(l.b,{to:"/contact",children:"Contact"})})]}),Object(o.jsx)("div",{className:"hamburger",onClick:i,children:t?Object(o.jsx)(j.i,{size:30,style:{color:"#f8f8f8"}}):Object(o.jsx)(j.a,{size:30,style:{color:"#f8f8f8"}})})]})},d=(t(20),function(e){var c=e.name,t=e.src,s=e.description,a=e.link,i=e.guestLogin,n=e.guestDesc,r=e.guestP;return Object(o.jsxs)("div",{className:"project-card",children:[Object(o.jsx)("div",{className:"name",children:c}),Object(o.jsx)("img",{src:t,className:"src"}),Object(o.jsx)("div",{className:"desc",children:s}),Object(o.jsxs)("div",{className:"login-container",children:[Object(o.jsx)("div",{className:"guest",children:i}),Object(o.jsx)("div",{className:"guestD",children:n}),Object(o.jsx)("div",{className:"guestP",children:r})]}),Object(o.jsx)("a",{className:"p-link",target:"_blank",href:a,children:"Link to project"})]})}),m=(t(21),t.p+"static/media/project1img.a22ec1c1.png"),h=t.p+"static/media/project2img.1c7b4827.png",x=t.p+"static/media/project3img.ccbf11d0.png",p=t.p+"static/media/project4img.4fd63760.png",O=function(){var e="2021 Year in Review Game",c="2021 Year-In-Review slot machine style game. This game was created with HTML, CSS, and Vanilla JavaScript",t="https://ericpeterson91.github.io/2021-year-in-review/",s="Stuff Portfolio",a="Application to keep track of physical items owned. This application was created using MongoDB, ExpressJS, and NodeJS.",i="http://erics-project.herokuapp.com/",n="Horoscope App",r="Horoscope application generated with Python, Django, and JavaScript.",j="https://django-horoscope-app.herokuapp.com/",l="Personal Landing Page",b="Personal landing page created with the MERN stack.",O="https://landing-page-personal.herokuapp.com/";return Object(o.jsx)("div",{className:"hero",children:Object(o.jsxs)("div",{className:"project-container",children:[Object(o.jsx)("div",{children:Object(o.jsx)(d,{name:e,src:m,description:c,link:t})}),Object(o.jsx)("div",{children:Object(o.jsx)(d,{name:s,src:h,description:a,link:i})}),Object(o.jsx)("div",{children:Object(o.jsx)(d,{name:n,src:x,description:r,link:j})}),Object(o.jsx)("div",{children:Object(o.jsx)(d,{name:l,src:p,description:b,link:O,guestP:"Password: helloworld7",guestLogin:"Guest Login: ",guestDesc:"Email: guest@something.com"})})]})})},u=t(3),g=(t(22),t.p+"static/media/Eric.9da56d38.jpeg"),v=t(10),f=function(){return Object(o.jsxs)("div",{className:"about-container",children:[Object(o.jsx)("div",{className:"img",children:Object(o.jsx)("img",{className:"img-me",src:g,alt:""})}),Object(o.jsxs)("div",{className:"about",children:[Object(o.jsx)("h1",{children:"About Eric"}),Object(o.jsxs)("p",{children:[" Eric is full stack web developer from Saskatoon, Saskatchewan. ",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),"Eric is passionate about the world of JavaScript, and the world of software development more generally. ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})," Eric is open to work in Saskatoon, relocating cities for work, and also full-time remote work."]})]}),Object(o.jsxs)("div",{className:"logo-container",children:[Object(o.jsx)(j.c,{size:40,className:"github"}),Object(o.jsx)(j.g,{size:40,className:"node"}),Object(o.jsx)(v.a,{size:40,className:"express"}),Object(o.jsx)(j.h,{size:40,className:"react"}),Object(o.jsx)(j.e,{size:40,className:"js"}),Object(o.jsx)(j.b,{size:40,className:"css"}),Object(o.jsx)(j.d,{size:40,className:"html"}),Object(o.jsx)(v.b,{size:40,className:"mongo"})]})]})},N=t(12),k=(t(23),function(){var e=Object(s.useRef)();return Object(o.jsxs)("div",{className:"contact-container",children:[Object(o.jsxs)("div",{className:"form-container",children:[Object(o.jsx)("h2",{children:"Send Eric an email below:"}),Object(o.jsxs)("form",{className:"form",ref:e,onSubmit:function(c){c.preventDefault(),N.a.sendForm("service_m4dbcui","template_1uu9i9c",e.current,"ayyGYnL-Zut8YCKQJ").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),c.target.reset()},children:[Object(o.jsx)("label",{children:"Name"}),Object(o.jsx)("input",{type:"text",name:"name"}),Object(o.jsx)("label",{children:"Subject"}),Object(o.jsx)("input",{type:"text",name:"subject"}),Object(o.jsx)("label",{children:"Email"}),Object(o.jsx)("input",{type:"email",name:"email"}),Object(o.jsx)("label",{children:"Message"}),Object(o.jsx)("textarea",{name:"message"}),Object(o.jsx)("input",{type:"submit",value:"Send"})]})]}),Object(o.jsxs)("div",{className:"icon-container",children:[Object(o.jsx)("h2",{children:"Links:"}),Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)("a",{target:"_blank",href:"https://github.com/ericpeterson91?tab=repositories",children:Object(o.jsx)(j.c,{size:45,className:"github"})}),Object(o.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/eric-peterson-110a62162/",children:Object(o.jsx)(j.f,{size:45,className:"linkedin"})})]})]})]})});var w=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(b,{}),Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{path:"/",element:Object(o.jsx)(O,{})}),Object(o.jsx)(u.a,{path:"/about",element:Object(o.jsx)(f,{})}),Object(o.jsx)(u.a,{path:"/contact",element:Object(o.jsx)(k,{})})]})]})})};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.f505dfa1.chunk.js.map