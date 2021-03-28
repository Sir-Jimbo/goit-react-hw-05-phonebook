(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e,t,n){e.exports={container:"ContactForm_container__CZoTU",label:"ContactForm_label__3Xwta",input:"ContactForm_input__L5OWw",button:"ContactForm_button__9iTSY"}},,,,,function(e,t,n){e.exports={container:"Filter_container__3xWFW",title:"Filter_title__nsMQ0",label:"Filter_label__2_mV5",input:"Filter_input__31saY",appear:"Filter_appear__3mQnz",appearActive:"Filter_appearActive__cF7XS",exit:"Filter_exit__1lOsN",exitActive:"Filter_exitActive__3RFwp"}},function(e,t,n){e.exports={item:"Contact_item__1f7di",button:"Contact_button__18Nlj"}},,,,,,,,,function(e,t,n){e.exports={enter:"ContactList_enter__26Pwd",enterActive:"ContactList_enterActive__3kj13",exit:"ContactList_exit__2s3uL",exitActive:"ContactList_exitActive__1URz-"}},function(e,t,n){e.exports={enter:"PhoneBook_enter__2JQXE",enterActive:"PhoneBook_enterActive__1PUbB",exit:"PhoneBook_exit__265pJ",exitActive:"PhoneBook_exitActive__244xX"}},function(e,t,n){e.exports={container:"Header_container__2oIu9",appear:"Header_appear__26gmR",appearActive:"Header_appearActive__1uqVE"}},function(e,t,n){e.exports={overlay:"Notification_overlay__37uuQ",message:"Notification_message__28soZ",enter:"Notification_enter__34nRy",enterActive:"Notification_enterActive__3SJc6",exit:"Notification_exit__k975O",exitActive:"Notification_exitActive__17Iq1"}},,function(e,t,n){e.exports={logo:"Logo_logo__2sIWL"}},function(e,t,n){e.exports={container:"Section_container__2nRt_"}},,,,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n(5),r=n.n(i),s=(n(31),n(24)),o=n(9),l=n(10),u=n(13),m=n(12),_=n(36),b=n(37),j=n(7),h=n.n(j),p=function(e){var t=e.value,n=e.onChange;return Object(a.jsx)(_.a,{in:!0,appear:!0,timeout:250,classNames:h.a,unmountOnExit:!0,children:Object(a.jsxs)("div",{className:h.a.container,children:[Object(a.jsx)("h2",{className:h.a.title,children:" Contacts "}),Object(a.jsx)("label",{className:h.a.label,children:"Find contacts by name:"}),Object(a.jsx)("input",{className:h.a.input,placeholder:"search by name",type:"text",value:t,onChange:n})]})})},x=n(38),d=n(8),f=n.n(d),O=function(e){var t=e.id,n=e.name,c=e.number,i=e.onClick;return Object(a.jsxs)("li",{className:f.a.item,children:[Object(a.jsx)("p",{className:f.a.contact,children:n}),Object(a.jsx)("p",{className:f.a.contact,children:c}),Object(a.jsx)("button",{className:f.a.button,type:"button",onClick:i,children:"x"})]},t)},v=n(17),g=n.n(v),N=function(e){var t=e.items,n=e.onDeleteContact;return Object(a.jsx)(x.a,{component:"ul",className:g.a.list,children:t.map((function(e){var t=e.id,c=e.name,i=e.number;return Object(a.jsx)(_.a,{timeout:250,classNames:g.a,children:Object(a.jsx)(O,{id:t,name:c,number:i,onClick:function(){return n(t)}})},t)}))})},C=n(21),S=n(2),y=n.n(S),A=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(C.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){return e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:y.a.container,onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{className:y.a.label,children:"Name"}),Object(a.jsx)("input",{className:y.a.input,type:"text",name:"name",placeholder:"enter your name",value:this.state.name,onChange:this.handleChange}),Object(a.jsx)("label",{className:y.a.label,children:"Phone number"}),Object(a.jsx)("input",{className:y.a.input,type:"tel",name:"number",placeholder:"enter your number",value:this.state.number,onChange:this.handleChange}),Object(a.jsx)("button",{className:y.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),F=n(18),k=n.n(F),w=n(22),L=n.n(w),E=function(){return Object(a.jsx)("h1",{className:L.a.logo,children:"Phonebook"})},P=n(19),J=n.n(P),B=function(){return Object(a.jsx)("header",{className:J.a.container,children:Object(a.jsx)(_.a,{in:!0,appear:!0,classNames:J.a,timeout:500,unmountOnExit:!0,children:Object(a.jsx)(E,{})})})},I=function(e){var t=e.children;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(B,{}),Object(a.jsx)("main",{children:t})]})},M=n(23),D=n.n(M),H=function(e){var t=e.children;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:D.a.container,children:t})})},R=n(20),T=n.n(R),Q=function(e){var t=e.message;return Object(a.jsx)("div",{className:T.a.overlay,children:Object(a.jsx)("p",{className:T.a.message,children:t})})},U=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],filter:"",error:!1,message:null},e.isShowMessage=function(t){e.setState({message:t}),setTimeout((function(){e.setState({message:null})}),2500)},e.formSubmitHandler=function(t){var n=t.name,a=t.number,c={id:Object(b.a)(),name:n,number:a};""!==n?""!==a?e.state.contacts.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?e.isShowMessage("".concat(n," is already in contacts.")):e.setState((function(e){var t=e.contacts;return{contacts:[].concat(Object(s.a)(t),[c])}})):e.isShowMessage("Enter phone, please!"):e.isShowMessage("Enter name, please!")},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.contacts;n!==t.\u0441ontacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,c=e.message,i=this.formSubmitHandler,r=this.changeFilter,s=this.deleteContact,o=this.state.filter.toLowerCase(),l=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(o)}));return Object(a.jsx)(I,{children:Object(a.jsxs)(H,{children:[Object(a.jsx)(_.a,{in:c,timeout:250,classNames:k.a,unmountOnExit:!0,children:Object(a.jsx)(Q,{message:c})}),Object(a.jsx)(A,{onSubmit:i}),t.length>1&&Object(a.jsx)(p,{value:n,onChange:r}),Object(a.jsx)(_.a,{in:t.length>0,timeout:250,classNames:k.a,unmountOnExit:!0,children:Object(a.jsx)(N,{items:l,onDeleteContact:s})})]})})}}]),n}(c.Component);function W(){return Object(a.jsx)("div",{children:Object(a.jsx)(U,{})})}r.a.render(Object(a.jsx)(W,{}),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.3d5629c5.chunk.js.map