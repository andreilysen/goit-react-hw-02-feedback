(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),i=n.n(s),r=(n(15),n(5)),o=n(6),l=n(7),b=n(10),d=n(9),u=n(0),j=function(e){var t=e.title,n=e.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:t}),n]})},h=n(8),m=n.n(h),O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)("button",{type:"button",name:e,className:m.a.button,onClick:n,children:e},e)}))})},g=n(2),x=n.n(g),f=function(e){var t=e.total,n=e.goodPercentage,a=e.good,c=e.neutral,s=e.bad;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{className:x.a.item,children:["good : ",a]}),Object(u.jsxs)("li",{className:x.a.item,children:["neutral : ",c]}),Object(u.jsxs)("li",{className:x.a.item,children:["bad : ",s]}),Object(u.jsxs)("li",{className:x.a.item,children:["Total : ",t]}),Object(u.jsxs)("li",{className:x.a.item,children:["Positive feedback : ",n," %"]})]})})},k=function(e){var t=e.message;return Object(u.jsx)("p",{children:t})},v=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.Increment=function(t){e.setState((function(e){return Object(r.a)({},t.target.name,e[t.target.name]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{title:"Please leave feedback",children:Object(u.jsx)(O,{options:Object.keys(this.state),onLeaveFeedback:this.Increment})}),Object(u.jsx)(j,{title:"Statistics",children:this.countTotalFeedback()?Object(u.jsx)(f,{total:this.countTotalFeedback(),goodPercentage:this.countPositiveFeedbackPercentage(),good:this.state.good,neutral:this.state.neutral,bad:this.state.bad}):Object(u.jsx)(k,{message:"No feedback given"})})]})}}]),n}(a.Component);i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={item:"Statistic_item__K3inM"}},8:function(e,t,n){e.exports={button:"Button_button__3Rx5e"}}},[[17,1,2]]]);
//# sourceMappingURL=main.e4dbf7a5.chunk.js.map