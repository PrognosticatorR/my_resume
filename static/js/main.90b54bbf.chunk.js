(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(31),s=n.n(a),c=(n(91),n(115)),o=n(18),d=n(19),l=n(22),h=n(21),u=[{id:1,title:"Shivom.io (NcryptVentures), BENGALURU",duration:"June 2020 - PRESENT",description:"A health-tech company that works in the genetic engineering domain. As a software engineer, I am responsible for :",points:["Designed Backend development and platform revamp.","API development for various functionalities.","Worked on GraphQL, React, Redux for front-enddevelopment.","Worked with Redux-thunks to handle asynchronous actions.","Involved in the improvement of frontend code architecture and performance by introducing Redux and reusable codecomponent patterns.","Developed a microservice for bulk upload and scaled the uploading functionality of a single file on the AWS-S3 bucket from 5 GB to 300 GB."]},{id:2,title:"AJNA.DIGITAL (NcryptVentures), BENGALURU",duration:"August 2019- June 2020",description:"Ajna Digital is a fintech company. The flagship product is a global securities platform facilitating the capital raise for issuers and providing access to institutional-grade opportunities for investors. As a software developer, I was responsible for :",points:["Developed react-native application for android and iOS platforms.","Involved in user-interface and user-experience design discussion with founders.","Involved in Micro-service developments using NodeJS, MongoDB, Nat's Streaming (event handling for multiple microservices), AWS, etc.","Developed API documentation using Open API specification.","Worked on front-end for web 3.0 using React.js."]},{id:3,title:"Freelance Developer",duration:"March 2018 - July 2019",description:"Worked on various projects like e-commerce, News website, Job portal using Node, Express framework, MongoDB, SQL, word press, HTML/CSS, JavaScript, etc. Apart from that, worked on project support and maintenance.",points:[]},{id:4,title:"EdFlux.com, JAIPUR \u2014 Co-founder",duration:"April 2017 - Feb 2018",description:"",points:["Developed a holistic web-based solution to cater to the educational industry's needs. Channelizing information from clients to team members.","Maintaining a record of work conducted daily. Facilitating calls between team members at di\0erent locations in India.","Consolidating errors and concerns from team members. Discussing with the client and rectify or confirming changes in work."]},{id:5,title:"Strado.in, JAIPUR \u2014 Co-founder",duration:"April 2016 - May 2017",description:"",points:["Started a hyper-local aggregator to reduce price and information barriers of dining and partying at the best food places in a city; incubated in an innovation program funded by the Government of India.","Created a website that addressed customer's struggle with existing solutions from Yelp and Groupon such as lack of virtual tours to explore a place beforehand, price graphs to assess availability, etc.","Developed a merchant application for restaurants to manage food orders, interact with customers, and draw actionable insights on several aspects such as a menu, marketing e\0orts, operational bottlenecks, etc."]}],j=[{id:6,title:"AMITY SCHOOL OF ENGINEERING AND TECHNOLOGY - B. Tech",duration:"2012-2016",description:"",points:[]}],p=n(114),b=n(1),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"renderItems",value:function(){return this.props.data.map((function(e){var t=e.id,n=e.title,i=e.duration,r=e.description,a=e.points;return Object(b.jsx)(p.a,{children:Object(b.jsxs)("div",{style:{marginTop:30},children:[Object(b.jsx)("p",{style:{fontSize:20,margin:0},children:t+".  "+n})," ",Object(b.jsx)("span",{style:{paddingLeft:20},children:i}),Object(b.jsx)("p",{style:{paddingLeft:20,fontSize:16,margin:0},children:r}),Object(b.jsx)("div",{style:{paddingLeft:30},children:Object(b.jsx)(p.a,{bulleted:!0,children:a.map((function(e,t){return Object(b.jsx)(p.a.Item,{children:e},"point"+t)}))})})]})},t+n)}))}},{key:"render",value:function(){return this.renderItems()}}]),n}(i.Component),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"renderEdu",value:function(){return j.map((function(e){var t=e.id,n=e.title,i=e.duration;return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{style:{fontSize:20,margin:0},children:n}),Object(b.jsx)("span",{children:i})]},t+n)}))}},{key:"render",value:function(){return Object(b.jsx)(i.Fragment,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"header_text",style:{fontSize:"1.8rem",fontWeight:300},children:"ABOUT"}),Object(b.jsx)("p",{style:{fontSize:16},children:"I'm a full-stack developer with more than 4 years of well-rounded experience in web development, with a good understanding of DevOps. I am passionate about world-class web products and code practices."}),Object(b.jsx)("h3",{style:{fontSize:"1.8rem",fontWeight:300},className:"header_text",children:"EXPERIENCE"}),Object(b.jsx)(m,{data:u}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{style:{fontSize:"1.8rem",fontWeight:300},className:"header_text",children:"EDUCATION"}),this.renderEdu()]})]})})}}]),n}(i.Component),O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).renderSkills=function(){return e.props.data.map((function(e){var t=e.id,n=e.items,i=e.title;return Object(b.jsx)(p.a,{ordered:!0,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{style:{fontSize:20,margin:0},children:t+".  "+i}),Object(b.jsx)("p",{style:{paddingLeft:20},children:n.map((function(e,t){return Object(b.jsx)("span",{children:e+", "},e+t)}))})]})},t+i)}))},e}return Object(d.a)(n,[{key:"render",value:function(){return this.renderSkills()}}]),n}(i.Component),g=[{id:"1",title:"Languages",items:["NodeJS","TypeScript","JavaScript","Rust","HTML","CSS"]},{id:"2",title:"Frameworks",items:["Express","Fastify.js","Next.js","GraphQL","React-Native"]},{id:"3",title:"Libraries",items:["React.js","Redux","Thunks","WebPack","Babel"]},{id:"4",title:"Databases",items:["PostgreSQL","MongoDB","Redis"]},{id:"5",title:"Event-based architectures",items:[]},{id:"6",title:"Modern JS concepts",items:[]}],x=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{style:{fontSize:"1.8rem",fontWeight:300},className:"header_text",children:"SKILLS"}),Object(b.jsx)(O,{data:g})]}),Object(b.jsxs)("div",{style:{marginTop:25,marginBottom:25,fontSize:18},children:[Object(b.jsx)("h3",{style:{fontSize:"1.8rem",fontWeight:300},className:"header_text",children:"PROFILES"}),Object(b.jsx)("div",{style:{marginLeft:15},children:Object(b.jsxs)(p.a,{ordered:!0,children:[Object(b.jsx)(p.a.Item,{children:Object(b.jsx)("a",{href:"https://stackoverflow.com/users/8291111/devesh",target:"blank",children:"Stack Overflow"})}),Object(b.jsx)(p.a.Item,{children:Object(b.jsx)("a",{href:"https://github.com/deveshrawat",target:"blank",children:"GitHub"})}),Object(b.jsx)(p.a.Item,{children:Object(b.jsx)("a",{href:"https://www.linkedin.com/in/devesh-rawat/",target:"blank",children:"LinkedIn"})})]})})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{style:{fontSize:"1.8rem",fontWeight:300},className:"header_text",children:"LENGUAGES"}),Object(b.jsx)("div",{style:{marginLeft:15,fontSize:18},children:Object(b.jsxs)(p.a,{bulleted:!0,children:[Object(b.jsx)(p.a.Item,{children:"English"}),Object(b.jsx)(p.a.Item,{children:"Hindi"})]})})]})]})}}]),n}(i.Component),v=(n(72),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{style:{paddingBottom:30},children:Object(b.jsx)(c.a,{children:Object(b.jsxs)(c.a.Row,{children:[Object(b.jsxs)(c.a.Column,{width:"11",children:[Object(b.jsx)("p",{className:"username header_text",children:"Devesh Rawat"}),Object(b.jsx)("p",{className:"contact_info",style:{paddingLeft:10},children:"Sr. Software Engineer"})]}),Object(b.jsx)(c.a.Column,{width:"5",children:Object(b.jsxs)("div",{style:{padding:20},children:[Object(b.jsx)("p",{className:"contact_info",children:"Flat no. B-302, Bellandur,"}),Object(b.jsx)("p",{className:"contact_info",children:"Bengaluru, 560103."}),Object(b.jsx)("p",{className:"contact_info",children:"+918955333900, +919116612054"}),Object(b.jsx)("p",{className:"contact_info",children:"devsrawt@gmail.com"})]})})]})})})}}]),n}(i.Component));n(99);var y=function(){return Object(b.jsx)("div",{style:{width:"82%",margin:"auto",padding:40},children:Object(b.jsx)(c.a,{children:Object(b.jsxs)(c.a.Row,{children:[Object(b.jsx)(c.a.Column,{width:16,children:Object(b.jsx)(v,{})}),Object(b.jsx)(c.a.Column,{width:11,children:Object(b.jsx)(f,{})}),Object(b.jsx)(c.a.Column,{width:5,children:Object(b.jsx)(x,{})})]})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),a(e),s(e)}))};n(100);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),w()},72:function(e,t,n){},91:function(e,t,n){},99:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.90b54bbf.chunk.js.map