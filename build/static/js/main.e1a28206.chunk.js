(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},17:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),s=(a(15),a(1)),l=a(2),i=a(4),u=a(3),m=a(5),p=(a(16),a(6)),h=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).Handelclick=function(t){a.props.valfunc(t)},a.state={},a}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn-primary",type:"button",onClick:function(e){t.Handelclick(t.props.butval)}},this.props.butval))}}]),e}(n.Component),b=(n.Component,function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).Valupdate=function(t){var e=Object.assign([],a.state.bar);e[a.state.value]=a.state.bar[a.state.value]+t,console.log(e[a.state.value]),e[a.state.value]>=0?a.setState({bar:e}):alert("Error")},a.state={bar:a.props.bar,buttonRange:a.props.btn,value:"0"},a}return Object(m.a)(e,t),Object(l.a)(e,[{key:"onChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){var t=this,e=this.state.bar.map(function(e,a){return r.a.createElement("div",{class:"progress","data-width":"100%",key:a},r.a.createElement("div",{class:e>t.props.limit?"red":"blue","data-name":"HTML",style:{width:e/t.props.limit*100+"%",background:0==e?"transparent":""}}),r.a.createElement("div",{className:"PVal",style:{color:e/t.props.limit*100>48?p.wht:""}},e,"%"))}),a=this.props.btn.map(function(e,a){return r.a.createElement(h,{butval:e,valfunc:t.Valupdate,key:a})}),n=this.state.bar.map(function(t,e){return r.a.createElement("option",{key:e,value:e},"ProgressBar ",e+1)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"panel-hdr"},r.a.createElement("h2",null,"Progress Bar Demo ")),r.a.createElement("div",{className:"ProgressSec"},e),r.a.createElement("div",{className:"ButtonSec"},r.a.createElement("div",{className:"Slctgrp"},r.a.createElement("select",{value:this.state.value,onChange:this.onChange.bind(this),className:"form-control"},n)),r.a.createElement("div",{className:"Btngrp"},a)))}}]),e}(n.Component)),v=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).fetchingDatachart=function(){fetch("http://pb-api.herokuapp.com/bars").then(function(t){return t.json()}).then(function(t){a.setState({data:t})})},a.state={},a}return Object(m.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.fetchingDatachart()}},{key:"render",value:function(){var t=this.state.data||null;if(t){this.state.data.bars.map(function(e,a){return r.a.createElement(b,{key:a,val:e,btn:t.buttons[0]})});return r.a.createElement("div",{className:"App"},r.a.createElement("section",null,r.a.createElement(b,{bar:t.bars,btn:t.buttons,limit:t.limit})))}return r.a.createElement("p",null,"Loading...")}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},6:function(t,e,a){t.exports={wht:"#fff"}},9:function(t,e,a){t.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.e1a28206.chunk.js.map