(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(24)},17:function(e,n,t){},19:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(10),i=t.n(c),r=(t(17),t(11)),l=t(3),s=t(4),d=t(6),u=t(5),m=t(7),p=t(1),h=(t(19),t(2)),f=(t(22),function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"Accordion"},a.a.createElement(h.Accordion,null,this.props.sections.map(function(n,t){return a.a.createElement(h.AccordionItem,{key:t,expanded:n.isExpanded},a.a.createElement(h.AccordionItemTitle,null,a.a.createElement("h3",null,n.name)),a.a.createElement(h.AccordionItemBody,null,a.a.createElement("p",null,"Content for ",n.name),a.a.createElement("button",{onClick:function(n){e.props.handleButton(t)},className:"btn btn-primary"},"Save and Continue")))})))}}]),n}(o.Component)),b=function(e){function n(){var e,t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={sections:[{name:"Section 1",isExpanded:!0},{name:"Section 2",isExpanded:!1},{name:"Section 3",isExpanded:!1},{name:"Section 4",isExpanded:!1}]},t.handleButton=t.handleButton.bind(Object(p.a)(Object(p.a)(t))),t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"handleButton",value:function(e){console.log("THIS IS ",this);var n=e+1;console.log("Clicked on index -> ",e),console.log("Next Section Index -> ",n),this.setState(function(e){var t=Object(r.a)(e.sections);return t.forEach(function(e,o){o===n?(e.isExpanded=!0,e.label=t[o].name=e.name=t[o].name+" -> Update: "+Math.floor(100*Math.random())):e.isExpanded=!1}),{sections:t}})}},{key:"componentDidMount",value:function(){console.log("Mounted"),console.log(this.state)}},{key:"componentDidUpdate",value:function(e,n){console.log("Component Updated"),console.log("Previous State -> ",n),console.log("Current State",this.state.sections)}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,{sections:this.state.sections,handleButton:this.handleButton}))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.ec480582.chunk.js.map