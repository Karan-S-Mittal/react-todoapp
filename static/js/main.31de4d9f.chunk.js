(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=a(9),u=a(1),o=a(2),m=a(4),h=a(3),s=(a(5),function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Description")))}),p=function(e){var t=e.characterData,a=e.removeCharachter,n=t.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return a(t)}},"Delete")))}));return r.a.createElement("tbody",null,n)},E=function(e){var t=e.characterData,a=e.removeCharachter;return r.a.createElement("table",null,r.a.createElement(s,null),r.a.createElement(p,{characterData:t,removeCharachter:a}))},b=a(8),v=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).initialState={name:"",job:""},e.state=e.initialState,e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(b.a)({},n,r))},e.submitForm=function(){e.props.handleSubmit(e.state),e.setState(e.initialState)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"name"},"Task Title"),r.a.createElement("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"job"},"Task Description"),r.a.createElement("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}))}}]),a}(n.Component),d=function(){return r.a.createElement("div",null,r.a.createElement("h1",null," To-Do-App "),r.a.createElement("p",null,"The app provides a simple functionality if adding and removing tasks."))},f=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Karan Mittal"),r.a.createElement("p",null,"Data Scientist | Full Stack Web Developer | Writer | Technology Enthusiast"))},j=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={characters:[{name:"Task Title",job:"Task Description"}]},e.removeCharachter=function(t){var a=e.state.characters;e.setState({characters:a.filter((function(e,a){return a!==t}))})},e.handleSubmit=function(t){e.setState({characters:[].concat(Object(i.a)(e.state.characters),[t])})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.characters;return r.a.createElement("div",{className:"container"},r.a.createElement(d,null),r.a.createElement("hr",null),r.a.createElement(E,{characterData:e,removeCharachter:this.removeCharachter}),r.a.createElement("hr",null),r.a.createElement(v,{handleSubmit:this.handleSubmit}),r.a.createElement("hr",null),r.a.createElement(f,null))}}]),a}(n.Component);c.a.render(r.a.createElement(j,null),document.getElementById("root"))},5:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.31de4d9f.chunk.js.map