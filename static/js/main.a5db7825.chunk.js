(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{32:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var c=s(20),n=s.n(c),a=s(27),o=s(21),d=s(22),r=s(23),l=s(26),i=s(0),u=s.n(i),h=(s(32),s(4)),b=s.n(h),m=s(37),j=s(38),f=s(25),G=s(1),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],v=function(e){Object(r.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(o.a)(this,s);for(var c=arguments.length,n=new Array(c),d=0;d<c;d++)n[d]=arguments[d];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:[]},e.chooseItemHandler=function(t){e.state.selectedGoods.includes(t)||e.setState((function(e){return{selectedGoods:[].concat(Object(a.a)(e.selectedGoods),[t])}}))},e.RemoveItemHandler=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e}return Object(d.a)(s,[{key:"resetSelectedItems",value:function(){this.setState({selectedGoods:[]})}},{key:"showItemsHandler",value:function(){var e="";switch(this.state.selectedGoods.length){case 1:e="".concat(this.state.selectedGoods," is selected");break;case 2:e="".concat(this.state.selectedGoods[0]," and ").concat(this.state.selectedGoods[1]," are selected");break;case 3:e="".concat(this.state.selectedGoods[0],",").concat(this.state.selectedGoods[1],"  and ").concat(this.state.selectedGoods[2]," are selected");break;case 0:e="No items selected";break;default:e="".concat(this.state.selectedGoods," are selected")}return e}},{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(G.jsxs)("div",{className:"App",children:[Object(G.jsxs)("h1",{children:[this.showItemsHandler(),t.length>0?Object(G.jsx)(m.a,{type:"button",className:"btn btn-danger",onClick:function(){return e.resetSelectedItems()},children:"X"}):""]}),Object(G.jsx)(j.a,{as:"ul",children:p.map((function(t){return Object(G.jsxs)(f.a,{className:b()("d-flex justify-content-between align-items-center",{active:e.state.selectedGoods.includes(t)}),as:"li",children:[t,Object(G.jsxs)("div",{children:[Object(G.jsx)(m.a,{type:"button",className:"addButton btn btn-success",onClick:function(){e.chooseItemHandler(t)},children:"Add"}),Object(G.jsx)(m.a,{type:"button",className:"btn btn-danger",onClick:function(){e.RemoveItemHandler(t)},children:"Remove"})]})]},t)}))})]})}}]),s}(u.a.Component),O=v;n.a.render(Object(G.jsx)(O,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.a5db7825.chunk.js.map