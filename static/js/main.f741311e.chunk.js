(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/developer_color.bdc6e315.svg"},,,function(e,t,a){e.exports=a.p+"static/media/developer.97d70f65.svg"},,function(e,t,a){e.exports=a.p+"static/media/medeo.cd7f523b.gif"},function(e,t,a){e.exports=a.p+"static/media/temtemone.460087be.gif"},function(e,t,a){e.exports=a.p+"static/media/earth.67af05e1.jpg"},function(e,t,a){e.exports=a(33)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),s=a.n(o),c=(a(20),a(21),a(22),a(23),a(24),a(25),a(26),a(27),a(28),a(1)),i=a.n(c);i.a.easing.jswing=i.a.easing.swing,i.a.extend(i.a.easing,{def:"easeOutQuad",swing:function(e,t,a,n,r){return i.a.easing[i.a.easing.def](e,t,a,n,r)},easeInQuad:function(e,t,a,n,r){return n*(t/=r)*t+a},easeOutQuad:function(e,t,a,n,r){return-n*(t/=r)*(t-2)+a},easeInOutQuad:function(e,t,a,n,r){return(t/=r/2)<1?n/2*t*t+a:-n/2*(--t*(t-2)-1)+a},easeInCubic:function(e,t,a,n,r){return n*(t/=r)*t*t+a},easeOutCubic:function(e,t,a,n,r){return n*((t=t/r-1)*t*t+1)+a},easeInOutCubic:function(e,t,a,n,r){return(t/=r/2)<1?n/2*t*t*t+a:n/2*((t-=2)*t*t+2)+a},easeInQuart:function(e,t,a,n,r){return n*(t/=r)*t*t*t+a},easeOutQuart:function(e,t,a,n,r){return-n*((t=t/r-1)*t*t*t-1)+a},easeInOutQuart:function(e,t,a,n,r){return(t/=r/2)<1?n/2*t*t*t*t+a:-n/2*((t-=2)*t*t*t-2)+a},easeInQuint:function(e,t,a,n,r){return n*(t/=r)*t*t*t*t+a},easeOutQuint:function(e,t,a,n,r){return n*((t=t/r-1)*t*t*t*t+1)+a},easeInOutQuint:function(e,t,a,n,r){return(t/=r/2)<1?n/2*t*t*t*t*t+a:n/2*((t-=2)*t*t*t*t+2)+a},easeInSine:function(e,t,a,n,r){return-n*Math.cos(t/r*(Math.PI/2))+n+a},easeOutSine:function(e,t,a,n,r){return n*Math.sin(t/r*(Math.PI/2))+a},easeInOutSine:function(e,t,a,n,r){return-n/2*(Math.cos(Math.PI*t/r)-1)+a},easeInExpo:function(e,t,a,n,r){return 0==t?a:n*Math.pow(2,10*(t/r-1))+a},easeOutExpo:function(e,t,a,n,r){return t==r?a+n:n*(1-Math.pow(2,-10*t/r))+a},easeInOutExpo:function(e,t,a,n,r){return 0==t?a:t==r?a+n:(t/=r/2)<1?n/2*Math.pow(2,10*(t-1))+a:n/2*(2-Math.pow(2,-10*--t))+a},easeInCirc:function(e,t,a,n,r){return-n*(Math.sqrt(1-(t/=r)*t)-1)+a},easeOutCirc:function(e,t,a,n,r){return n*Math.sqrt(1-(t=t/r-1)*t)+a},easeInOutCirc:function(e,t,a,n,r){return(t/=r/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+a:n/2*(Math.sqrt(1-(t-=2)*t)+1)+a},easeInElastic:function(e,t,a,n,r){var o=1.70158,s=0,c=n;if(0==t)return a;if(1==(t/=r))return a+n;if(s||(s=.3*r),c<Math.abs(n)){c=n;o=s/4}else o=s/(2*Math.PI)*Math.asin(n/c);return-c*Math.pow(2,10*(t-=1))*Math.sin((t*r-o)*(2*Math.PI)/s)+a},easeOutElastic:function(e,t,a,n,r){var o=1.70158,s=0,c=n;if(0==t)return a;if(1==(t/=r))return a+n;if(s||(s=.3*r),c<Math.abs(n)){c=n;o=s/4}else o=s/(2*Math.PI)*Math.asin(n/c);return c*Math.pow(2,-10*t)*Math.sin((t*r-o)*(2*Math.PI)/s)+n+a},easeInOutElastic:function(e,t,a,n,r){var o=1.70158,s=0,c=n;if(0==t)return a;if(2==(t/=r/2))return a+n;if(s||(s=r*(.3*1.5)),c<Math.abs(n)){c=n;o=s/4}else o=s/(2*Math.PI)*Math.asin(n/c);return t<1?c*Math.pow(2,10*(t-=1))*Math.sin((t*r-o)*(2*Math.PI)/s)*-.5+a:c*Math.pow(2,-10*(t-=1))*Math.sin((t*r-o)*(2*Math.PI)/s)*.5+n+a},easeInBack:function(e,t,a,n,r,o){return void 0==o&&(o=1.70158),n*(t/=r)*t*((o+1)*t-o)+a},easeOutBack:function(e,t,a,n,r,o){return void 0==o&&(o=1.70158),n*((t=t/r-1)*t*((o+1)*t+o)+1)+a},easeInOutBack:function(e,t,a,n,r,o){return void 0==o&&(o=1.70158),(t/=r/2)<1?n/2*(t*t*((1+(o*=1.525))*t-o))+a:n/2*((t-=2)*t*((1+(o*=1.525))*t+o)+2)+a},easeInBounce:function(e,t,a,n,r){return n-i.a.easing.easeOutBounce(e,r-t,0,n,r)+a},easeOutBounce:function(e,t,a,n,r){return(t/=r)<1/2.75?n*(7.5625*t*t)+a:t<2/2.75?n*(7.5625*(t-=1.5/2.75)*t+.75)+a:t<2.5/2.75?n*(7.5625*(t-=2.25/2.75)*t+.9375)+a:n*(7.5625*(t-=2.625/2.75)*t+.984375)+a},easeInOutBounce:function(e,t,a,n,r){return t<r/2?.5*i.a.easing.easeInBounce(e,2*t,0,n,r)+a:.5*i.a.easing.easeOutBounce(e,2*t-r,0,n,r)+.5*n+a}});a(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(2),m=a(3),u=a(5),d=a(4),f=a(7),p=a.n(f),h=a(10),v=a.n(h),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={logo:p.a},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=i()("nav").outerHeight();i()(".navbar-toggler").on("click",(function(){i()("#mainNav").hasClass("navbar-reduce")||i()("#mainNav").addClass("navbar-reduce")})),i()("body").scrollspy({target:"#mainNav",offset:t}),i()(".js-scroll").on("click",(function(){i()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:v.a})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:p.a}))})),i()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=i()(this.hash);if((e=e.length?e:i()("[name="+this.hash.slice(1)+"]")).length)return i()("html, body").animate({scrollTop:e.offset().top-t+5},1e3,"easeInExpo"),!1}})),i()(".js-scroll").on("click",(function(){i()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand js-scroll",href:"#page-top"},r.a.createElement("img",{src:this.state.logo,alt:"logo",style:{maxWidth:"70px"}})),r.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll active",href:"#home"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll",href:"#work"},"Work")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll",href:"#contact"},"Contact"))))))}}]),a}(r.a.Component),E=(a(32),a(11)),g=a.n(E),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"home",className:"intro route bg-image background"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{id:"stars2"}),r.a.createElement("div",{id:"stars3"}),r.a.createElement("div",{className:"intro-content display-table pt-md-5"},r.a.createElement("div",{className:"table-cell"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"intro-title mb-4"},"Hello, I am Nawal Kerkar"),r.a.createElement("p",{className:"intro-subtitle"},r.a.createElement("span",{className:"text-slider-items"}),r.a.createElement("strong",{className:"text-slider"},r.a.createElement(g.a,{strings:["Front End Developer","Back End Developer","Software Engineer"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0}))),r.a.createElement("p",{className:"pt-3"},r.a.createElement("a",{className:"btn btn-primary btn js-scroll px-4",href:"#work",role:"button"},"View My Work"))))))}}]),a}(r.a.Component),N=a(6),w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,a=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;Object(l.a)(this,e);var r=this;if(!t||1!==t.nodeType)return new Error("Incorrect element type");r.$container=t,r.texts=a||[],r.config=Object(N.a)(Object(N.a)({},e._defaultConfig),n||{}),r.radius=r.config.radius,r.depth=2*r.radius,r.size=1.5*r.radius,r.maxSpeed=e._getMaxSpeed(r.config.maxSpeed),r.initSpeed=e._getInitSpeed(r.config.initSpeed),r.direction=r.config.direction,r.keep=r.config.keep,r.paused=!1,r._createElment(),r._init(),e.list.push({el:r.$el,container:t,instance:r})}return Object(m.a)(e,[{key:"_createElment",value:function(){var e=this,t=document.createElement("div");t.className=e.config.containerClass,e.config.useContainerInlineStyles&&(t.style.position="relative",t.style.width="".concat(2*e.radius,"px"),t.style.height="".concat(2*e.radius,"px")),e.items=[],e.texts.forEach((function(a,n){var r=e._createTextItem(a,n);t.appendChild(r.el),e.items.push(r)})),e.$container.appendChild(t),e.$el=t}},{key:"_createTextItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=this,n=document.createElement("span");if(n.className=a.config.itemClass,a.config.useItemInlineStyles){n.style.willChange="transform, opacity, filter",n.style.position="absolute",n.style.top="50%",n.style.left="50%",n.style.zIndex=t+1,n.style.filter="alpha(opacity=0)",n.style.opacity=0;var r="50% 50%";n.style.WebkitTransformOrigin=r,n.style.MozTransformOrigin=r,n.style.OTransformOrigin=r,n.style.transformOrigin=r;var o="translate3d(-50%, -50%, 0) scale(1)";n.style.WebkitTransform=o,n.style.MozTransform=o,n.style.OTransform=o,n.style.transform=o}return n.innerText=e,Object(N.a)({el:n},a._computePosition(t))}},{key:"_computePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=this,n=a.texts.length;t&&(e=Math.floor(Math.random()*(n+1)));var r=Math.acos((2*e+1)/n-1),o=Math.sqrt((n+1)*Math.PI)*r;return{x:a.size*Math.cos(o)*Math.sin(r)/2,y:a.size*Math.sin(o)*Math.sin(r)/2,z:a.size*Math.cos(r)/2}}},{key:"_requestInterval",value:function(e,t){var a=(function(){return window.requestAnimationFrame}||function(e,t){window.setTimeout(e,1e3/60)})(),n=(new Date).getTime(),r={};return r.value=a((function o(){r.value=a(o),(new Date).getTime()-n>=t&&(e.call(),n=(new Date).getTime())})),r}},{key:"_init",value:function(){var t=this;t.active=!1,t.mouseX0=t.initSpeed*Math.sin(t.direction*(Math.PI/180)),t.mouseY0=-t.initSpeed*Math.cos(t.direction*(Math.PI/180)),t.mouseX=t.mouseX0,t.mouseY=t.mouseY0,e._on(t.$el,"mouseover",(function(){t.active=!0})),e._on(t.$el,"mouseout",(function(){t.active=!1})),e._on(t.keep?window:t.$el,"mousemove",(function(e){e=e||window.event;var a=t.$el.getBoundingClientRect();t.mouseX=(e.clientX-(a.left+a.width/2))/5,t.mouseY=(e.clientY-(a.top+a.height/2))/5})),t._next(),t.interval=t._requestInterval((function(){t._next.call(t)}),10)}},{key:"_next",value:function(){var e=this;if(!e.paused){e.keep||e.active||(e.mouseX=Math.abs(e.mouseX-e.mouseX0)<1?e.mouseX0:(e.mouseX+e.mouseX0)/2,e.mouseY=Math.abs(e.mouseY-e.mouseY0)<1?e.mouseY0:(e.mouseY+e.mouseY0)/2);var t=-Math.min(Math.max(-e.mouseY,-e.size),e.size)/e.radius*e.maxSpeed,a=Math.min(Math.max(-e.mouseX,-e.size),e.size)/e.radius*e.maxSpeed;if(!(Math.abs(t)<=.01&&Math.abs(a)<=.01)){var n=Math.PI/180,r=[Math.sin(t*n),Math.cos(t*n),Math.sin(a*n),Math.cos(a*n)];e.items.forEach((function(t){var a=t.x,n=t.y*r[1]+t.z*-r[0],o=t.y*r[0]+t.z*r[1],s=a*r[3]+o*r[2],c=n,i=o*r[3]-a*r[2],l=2*e.depth/(2*e.depth+i);t.x=s,t.y=c,t.z=i,t.scale=l.toFixed(3);var m=l*l-.25;m=(m>1?1:m).toFixed(3);var u=t.el,d=(t.x-u.offsetWidth/2).toFixed(2),f=(t.y-u.offsetHeight/2).toFixed(2),p="translate3d(".concat(d,"px, ").concat(f,"px, 0) scale(").concat(t.scale,")");u.style.WebkitTransform=p,u.style.MozTransform=p,u.style.OTransform=p,u.style.transform=p,u.style.filter="alpha(opacity=".concat(100*m,")"),u.style.opacity=m}))}}}},{key:"update",value:function(e){var t=this;t.texts=e||[],t.texts.forEach((function(e,a){var n=t.items[a];n||(n=t._createTextItem(e,a),Object.assign(n,t._computePosition(a,!0)),t.$el.appendChild(n.el),t.items.push(n)),n.el.innerText=e}));var a=t.texts.length,n=t.items.length;a<n&&t.items.splice(a,n-a).forEach((function(e){t.$el.removeChild(e.el)}))}},{key:"destroy",value:function(){var t=this;t.interval=null;var a=e.list.findIndex((function(e){return e.el===t.$el}));-1!==a&&e.list.splice(a,1),t.$container&&t.$el&&t.$container.removeChild(t.$el)}},{key:"pause",value:function(){this.paused=!0}},{key:"resume",value:function(){this.paused=!1}}],[{key:"_on",value:function(e,t,a,n){e.addEventListener?e.addEventListener(t,a,n):e.attachEvent?e.attachEvent("on".concat(t),a):e["on".concat(t)]=a}}]),e}();w.list=[],w._defaultConfig={radius:200,maxSpeed:"normal",initSpeed:"slow",direction:135,keep:!0,useContainerInlineStyles:!0,useItemInlineStyles:!0,containerClass:"tagcloud",itemClass:"tagcloud--item"},w._getMaxSpeed=function(e){return{slow:.5,normal:1,fast:2}[e]||1},w._getInitSpeed=function(e){return{slow:16,normal:32,fast:80}[e]||32};var k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={about_me:[{id:"first-p-about",content:"Hi, I'm Nawal! I am a Full-Stack developer at casbahTech."},{id:"second-p-about",content:"I'm specializes in JavaScript Technologies across the whole stack (Node.js, Express, React, Redux) with +3 years experience."},{id:"third-p-about",content:"I enjoy designing & engineering efficient and responsive web applications. "},{id:"fourth-p-about",content:"I like to develop expertise in a number of areas over the course of my life and career. I'm always Looking for new challenges and open for exciting career opportunities."},{id:"fifth-p-about",content:"You can read more about my biography, experience, skills, education and much more in the Docx attached bellow:"},{id:"sixth-p-about",content:r.a.createElement("a",{href:"./cv.docx"},"Download here")}]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=function(e,t,a){"string"===typeof e&&(e=document.querySelectorAll(e)),e.forEach||(e=[e]);var n=[];return e.forEach((function(e){e&&n.push(new w(e,t,a))})),n.length<=1?n[0]:n}(".contentTag",["React","Redux","JavaScript","CSS3","HTML5","Git","NodeJs","ExpressJs","Bootstrap","Antd","Saga","Jira","ES6","REST","JSON","SASS"]);console.log(e)}},{key:"render",value:function(){return r.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"box-shadow-full"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{class:"contentTag"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"about-me pt-4 pt-md-0"},r.a.createElement("div",{className:"title-box-2"},r.a.createElement("h5",{className:"title-left"},"About Me")),this.state.about_me.map((function(e){return r.a.createElement("p",{className:"lead",id:e.id,key:e.id},e.content)}))))))))))}}]),a}(r.a.Component),x=a(12),M=a.n(x),O=a(13),I=a.n(O),j=function(e){var t=e.title,a=e.descreption,n=e.image,o=e.url,s=e.year,c=e.animation;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{class:"row align-items-center h-100 text-center text-lg-left",bis_skin_checked:"1"},r.a.createElement("div",{class:"col-lg-6 p-3 ".concat(c?"work-box":""),bis_skin_checked:"1"},r.a.createElement("div",{className:"work-img"},r.a.createElement("img",{className:"projectImage work-img",src:n,alt:"project"}))),r.a.createElement("div",{class:"col-lg-5 mx-auto py-3",bis_skin_checked:"1"},r.a.createElement("h3",{class:"h3  "},t,r.a.createElement("span",{class:"badge badge-primary badge-sm ml-3"},s)),r.a.createElement("p",{class:"showcase__description mb-4 color-gray"},a),r.a.createElement("a",{href:o,class:"btn btn-outline-primary float-right"},"Visit site"))))},S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"work",className:"portfolio-mf sect-pt4 route"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"title-box text-center"},r.a.createElement("h3",{className:"title-a"},"Portfolio"),r.a.createElement("div",{className:"line-mf"})))),r.a.createElement(j,{descreption:"Medeo is a platform designed for sharing scientific content with health professionals.",title:"Medeo",image:M.a,year:"2020",url:"http://medeo-dz.com/"}),r.a.createElement(j,{descreption:"Temtem One is a mobile application offering several services, including: the purchase of products and services online (groceries, mobility, phone recharge, clothing, cosmetics, household appliances, flowers, etc.), credit transfer, etc.",title:"Temtem One",image:I.a,year:"2020",url:"https://www.temtem.one/"})))}}]),a}(r.a.Component),_=a(14),T=a.n(_),C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url("+T.a+")"}},r.a.createElement("div",{className:"overlay-mf"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"contact-mf"},r.a.createElement("div",{id:"contact",className:"box-shadow-full"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"title-box-2"},r.a.createElement("h5",{className:"title-left"},"Send A Message")),r.a.createElement("div",null,r.a.createElement("form",{action:"https://formspree.io/f/mwkalrka",method:"POST",className:"contactForm"},r.a.createElement("div",{id:"sendmessage"},"Your message has been sent. Thank you!"),r.a.createElement("div",{id:"errormessage"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 mb-3"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),r.a.createElement("div",{className:"validation"}))),r.a.createElement("div",{className:"col-md-12 mb-3"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),r.a.createElement("div",{className:"validation"}))),r.a.createElement("div",{className:"col-md-12 mb-3"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),r.a.createElement("div",{className:"validation"}))),r.a.createElement("div",{className:"col-md-12 mb-3"},r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),r.a.createElement("div",{className:"validation"}))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("button",{type:"submit",className:"button button-a button-big button-rouded"},"Send Message")))))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"title-box-2 pt-4 pt-md-0"},r.a.createElement("h5",{className:"title-left"},"Get in Touch")),r.a.createElement("div",{className:"more-info"},r.a.createElement("p",{className:"lead"},"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",r.a.createElement("br",null),"Simply fill the from and send me an email.")),r.a.createElement("div",{className:"socials"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/nanaker",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"ico-circle"},r.a.createElement("i",{className:"ion-social-github"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/nawal-kerkar-01b207ba/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"ico-circle"},r.a.createElement("i",{className:"ion-social-linkedin"}))))))))))))),r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"copyright-box"}))))))}}]),a}(r.a.Component),P=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){i()(".back-to-top").click((function(){return i()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return r.a.createElement("a",{href:"",className:"back-to-top animated"},r.a.createElement("i",{className:"fa fa-chevron-up"}))}}]),a}(r.a.Component),q=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){i()(window).on("load",(function(){i()("#preloader").length&&i()("#preloader").delay(100).fadeOut("slow",(function(){i()(this).remove()}))}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"preloader"})}}]),a}(r.a.Component);s.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(y,null),r.a.createElement(k,null),r.a.createElement(S,null),r.a.createElement(C,null),r.a.createElement(P,null),r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.f741311e.chunk.js.map