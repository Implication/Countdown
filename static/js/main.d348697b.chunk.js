(this.webpackJsonpcountdowntimer=this.webpackJsonpcountdowntimer||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),u=n.n(r),l=n(1),o=function(e){var t=e.min,n=e.sec;return c.a.createElement("div",null,c.a.createElement("span",{class:"timer"},t,":",n<10?"0".concat(n):n))},s=function(e){var t=e.value,n=e.toggle;return c.a.createElement("button",{class:"btn btn-speed btn-pause",onClick:n},t)};var i=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(0),i=Object(l.a)(u,2),m=i[0],b=i[1],d=Object(a.useState)(!0),p=Object(l.a)(d,2),f=p[0],v=p[1],E=Object(a.useState)(!1),S=Object(l.a)(E,2),j=S[0],y=S[1],O=Object(a.useState)(1e3),g=Object(l.a)(O,2),h=g[0],I=g[1],k=Object(a.useState)(""),q=Object(l.a)(k,2),w=q[0],C=q[1],M=null,x=Object(a.useState)("Pause"),L=Object(l.a)(x,2),P=L[0],J=L[1];function B(e){I(e)}return Object(a.useEffect)((function(){var e=document.querySelector("#minuteInput");return e=parseInt(e.value),e,f||(M=setInterval((function(){if(document.querySelector("#minuteInput").disabled=!0,0===m){if(0===n)return C((function(e){return"Time's up"})),v(!0),document.querySelector("#minuteInput").disabled=!1,document.querySelector(".timer").classList.remove("blink"),document.querySelector(".displayMessage").remove("red"),void clearInterval(M);r((function(e){return e-1})),b(59)}else b((function(e){return e-1}));e/2>=n&&0===m&&e%2===0&&(y(!0),C("More than halfway there!")),e/2>=n&&m<=30&&e%2!==0&&(y(!0),C("More than halfway there!")),0===n&&m<=20&&(document.querySelector(".displayMessage").classList.add("red"),console.log("????")),0===n&&m<=10&&document.querySelector(".timer").classList.add("blink")}),h)),function(){clearInterval(M)}}),[f,n,m,M,w,j]),c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"top"},c.a.createElement("label",null,"Countdown:"),c.a.createElement("input",{type:"number",placeholder:"(min)",id:"minuteInput",onChange:function(e){r(parseInt(e.target.value))}}),c.a.createElement("button",{class:"btn btn-start",onClick:function(e){v(!1)}},"Start")),j?c.a.createElement("p",{class:"displayMessage"},w):c.a.createElement("br",null),c.a.createElement(o,{min:n,sec:m}),c.a.createElement(s,{value:P,toggle:function(){v(!f),J(f?"Play":"Pause")}}),c.a.createElement("button",{class:"btn btn-speed",onClick:function(){return B(1e3)}},"1x"),c.a.createElement("button",{class:"btn btn-speed",onClick:function(){return B(666)}},"1.5x"),c.a.createElement("button",{class:"btn btn-speed",onClick:function(){return B(333)}},"2x"))};n(9),n(10);u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.d348697b.chunk.js.map