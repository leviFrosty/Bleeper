(this.webpackJsonptwitterclone=this.webpackJsonptwitterclone||[]).push([[0],{89:function(e,t){},90:function(e,t){},91:function(e,t,c){},92:function(e,t,c){"use strict";c.r(t);var a=c(8),s=c.n(a),n=c(53),i=c.n(n),r=c.p+"static/media/logo.25c6b790.webp",j=c(0),o=c.n(j),l=c(1),b=c(11),d=c(14),u=c(28),m=c(54),O=c(23),h=c(15),x=c(29),p=Object(m.a)({apiKey:"AIzaSyB6ILViLUrFNIqs2rF6X-NOEpwYsyhOPcg",authDomain:"calorie-counter-f457f.firebaseapp.com",projectId:"calorie-counter-f457f",storageBucket:"calorie-counter-f457f.appspot.com",messagingSenderId:"199242851087",appId:"1:199242851087:web:576a4a73c17e57f57b547a",measurementId:"G-2TCMGFJBCH"}),_=Object(O.c)(p),f=Object(h.f)(p),v=Object(x.b)(p),N=c(4);function g(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(b.a)(n,2),r=i[0],j=i[1],m=Object(a.useState)(!1),O=Object(b.a)(m,2),h=O[0],x=O[1],p=Object(a.useState)(""),f=Object(b.a)(p,2),v=f[0],g=f[1],w=Object(d.f)(),y=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!h){e.next=6;break}return e.next=4,Object(u.c)(_,c,r).then((function(e){var t=e.user,c=JSON.stringify(t);window.localStorage.setItem("userCredential",c),w.push("/new-user"),console.log("going to new user page")})).catch((function(e){g(e)}));case 4:e.next=8;break;case 6:return e.next=8,Object(u.h)(_,c,r).catch((function(e){g(e)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t=e.target,c=t.name,a=t.value;"email"===c?s(a):"password"===c&&j(a)},C=function(){x((function(e){return!e}))};return Object(N.jsxs)("div",{className:"signin-form__container",children:[Object(N.jsxs)("form",{className:"signin-form",onSubmit:y,children:[Object(N.jsxs)("div",{className:"input__container",children:[Object(N.jsx)("label",{htmlFor:"email",className:"requiredinput",children:"Email"}),Object(N.jsx)("input",{autoComplete:"username",name:"email",className:"input",required:!0,placeholder:"user@domain.tld",type:"email",value:c,onChange:k})]}),Object(N.jsxs)("div",{className:"input__container",children:[Object(N.jsx)("label",{htmlFor:"password",className:"requiredinput",children:"Password"}),Object(N.jsx)("input",{autoComplete:"current-password",name:"password",className:"input",minLength:8,required:!0,placeholder:"Min. 8 characters",type:"password",value:r,onChange:k}),v?Object(N.jsx)("div",{className:"input-error",children:Object(N.jsx)("p",{children:v.message})}):Object(N.jsx)("p",{}),Object(N.jsx)("input",{className:"input-submit",type:"submit",value:h?"Create account":"Login"})]})]}),Object(N.jsx)("div",{className:"not-registered",children:h?Object(N.jsxs)("div",{className:"not-registered__question",children:[Object(N.jsx)("span",{children:"Already Have an Account?"}),Object(N.jsx)("button",{onClick:C,children:"Login"})]}):Object(N.jsxs)("div",{className:"not-registered__question",children:[Object(N.jsx)("span",{children:"Not Registered Yet?"}),Object(N.jsx)("button",{onClick:C,children:"Create an Account"})]})})]})}var w=c.p+"static/media/google.9adf7ef7.png";function y(){var e=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(c=t.target.name)?a=new O.b:"github"===c&&(a=new O.a),e.next=4,Object(O.g)(_,a);case 4:return e.next=6,Object(O.d)(_,a).then((function(){})).catch((function(e){console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"sigin-thirdParties",children:[Object(N.jsx)("div",{className:"signin__button__container",children:Object(N.jsxs)("button",{className:"signin__button",name:"google",onClick:e,children:[Object(N.jsx)("img",{src:w,alt:""}),"Sign in with Google"]})}),Object(N.jsx)("div",{className:"signin__button__container",children:Object(N.jsxs)("button",{className:"signin__button",name:"github",onClick:e,children:[Object(N.jsx)("i",{className:"fab fa-github"}),"Sign in with GitHub"]})})]})}function k(){return Object(N.jsxs)("div",{className:"welcome",children:[Object(N.jsx)("div",{className:"welcome-start",children:Object(N.jsxs)("div",{className:"signin__container",children:[Object(N.jsxs)("div",{className:"signin-header",children:[Object(N.jsx)("div",{className:"signin-header-logo",children:Object(N.jsx)("img",{className:"signin-header-logo__image animate__swing",src:r,alt:""})}),Object(N.jsx)("div",{className:"signin-header__title",children:Object(N.jsx)("h1",{children:"Login"})}),Object(N.jsx)("div",{className:"signin-header__description",children:Object(N.jsx)("p",{children:"Connect with your friends and share memories!"})})]}),Object(N.jsx)("div",{className:"signin-socials",children:Object(N.jsx)(y,{})}),Object(N.jsxs)("div",{className:"break-container",children:[Object(N.jsx)("div",{className:"break-start"}),Object(N.jsx)("div",{className:"break-text",children:"or Sign in with Email"}),Object(N.jsx)("div",{className:"break-end"})]}),Object(N.jsx)(g,{})]})}),Object(N.jsx)("div",{className:"welcome-end",children:Object(N.jsxs)("div",{className:"bg",children:[Object(N.jsx)("div",{className:"bg_top_left_1"}),Object(N.jsx)("div",{className:"bg_top_left_2"}),Object(N.jsxs)("div",{className:"bg_top_right_row-1_item1__container",children:[Object(N.jsx)("div",{className:"r1_i1__box"}),Object(N.jsx)("div",{className:"r1_i1__triangle"})]}),Object(N.jsxs)("div",{className:"bg_top_right_row-1_item2__container",children:[Object(N.jsx)("div",{className:"r1_i2__box"}),Object(N.jsx)("div",{className:"r1_i2__triangle"})]}),Object(N.jsxs)("div",{className:"bg_top_right_row-1_item3__container",children:[Object(N.jsx)("div",{className:"r1_i3__box"}),Object(N.jsx)("div",{className:"r1_i3__triangle"})]}),Object(N.jsxs)("div",{className:"bg_top_right_row-1_item4__container",children:[Object(N.jsx)("div",{className:"r1_i4__box"}),Object(N.jsx)("div",{className:"r1_i4__triangle"})]}),Object(N.jsxs)("div",{className:"bg_top_right_row-2_item1__container",children:[Object(N.jsx)("div",{className:"r2_i1__box"}),Object(N.jsx)("div",{className:"r2_i1__triangle"})]}),Object(N.jsxs)("div",{className:"bg_top_right_row-2_item2__container",children:[Object(N.jsx)("div",{className:"r2_i2__box"}),Object(N.jsx)("div",{className:"r2_i2__triangle"})]}),Object(N.jsxs)("div",{className:"bg_top_right_row-2_item3__container",children:[Object(N.jsx)("div",{className:"r2_i3__box"}),Object(N.jsx)("div",{className:"r2_i3__triangle"})]}),Object(N.jsxs)("div",{className:"bg_top_right_row-2_item4__container",children:[Object(N.jsx)("div",{className:"r2_i4__box"}),Object(N.jsx)("div",{className:"r2_i4__triangle"})]}),Object(N.jsx)("div",{className:"bg_bottom-right_1"}),Object(N.jsx)("div",{className:"bg_bottom-right_2"}),Object(N.jsx)("div",{className:"bg_bottom-right_3"}),Object(N.jsx)("div",{className:"bg_bottom-right_4"}),Object(N.jsx)("div",{className:"bg_bottom-right_5"})]})})]})}var C=c(34),S=c(48),L=c(38);function F(e){var t=e.tweet,c=e.isOwner,a=e.attachmentURL,s=Object(S.useState)(!1),n=Object(b.a)(s,2),i=n[0],r=n[1],j=Object(S.useState)(t.text),d=Object(b.a)(j,2),u=d[0],m=d[1],O=function(){r((function(e){return!e}))},p=function(){var e=Object(l.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,Object(h.j)(Object(h.d)(f,"tweets",t.id),{text:u},{merge:!0});case 3:O();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this tweet?")){e.next=7;break}return e.next=4,Object(h.c)(Object(h.d)(f,"tweets",t.id));case 4:if(""===a){e.next=7;break}return e.next=7,Object(L.a)(Object(x.c)(v,a)).catch((function(e){console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"tweetCard",children:[Object(N.jsxs)("div",{className:"tweetCard-user",children:[Object(N.jsx)("img",{className:"tweetCard-user__img",src:t.userPhotoURL,alt:t.displayName}),Object(N.jsx)("h4",{className:"tweetCard-user__name",children:t.creatorDisplayName})]}),i?Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("form",{className:"tweetCard-editing",onSubmit:p,children:[Object(N.jsx)("input",{value:u,required:!0,maxLength:140,onChange:function(e){var t=e.target.value;m(t)},className:"tweetCard-editing__input"}),Object(N.jsxs)("div",{className:"tweetCard-editing__chars",children:[Object(N.jsx)("span",{children:u.length}),Object(N.jsx)("span",{children:"/140"})]})]})}):Object(N.jsx)("div",{className:"tweetCard-text",children:Object(N.jsx)("h3",{className:"tweetCard-text__content",children:t.text})}),a&&Object(N.jsx)("div",{className:"tweetCard-attachment",children:Object(N.jsx)("img",{className:"tweetCard-attachment__img",src:a,alt:""})}),function(){if(c)return Object(N.jsxs)("div",{children:[i?Object(N.jsx)("button",{className:"editing__button",onClick:O,children:"Cancel"}):Object(N.jsx)("button",{className:"editing__button",onClick:O,children:"Edit"}),i?Object(N.jsx)("button",{className:"editing__button",onClick:p,children:"Save"}):Object(N.jsx)("button",{className:"editing__button",onClick:_,children:"Delete"})]})}()]})}var I=c(94);function D(e){var t=e.userObj,c=Object(a.useState)(""),s=Object(b.a)(c,2),n=s[0],i=s[1],r=Object(a.useState)(""),j=Object(b.a)(r,2),d=j[0],u=j[1],m=Object(a.useState)(!1),O=Object(b.a)(m,2),p=O[0],_=O[1],g={text:n,creatorDisplayName:t.displayName,creatorId:t.uid,userPhotoURL:t.photoURL,createdAt:Date.now()},w=function(){var e=Object(l.a)(o.a.mark((function e(c){var a,s,n,r,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),a=document.querySelector(".tweetForm-imageInput"),s="",""===d){e.next=12;break}return e.next=6,Object(x.c)(v,"".concat(t.uid,"/").concat(Object(I.a)()));case 6:return n=e.sent,e.next=9,Object(x.d)(n,d,"data_url");case 9:return e.next=11,Object(x.a)(n);case 11:s=e.sent;case 12:return r=Object(h.b)(f,"tweets"),j=Object(C.a)({attachmentURL:s},g),e.next=16,Object(h.a)(r,j).catch((function(e){alert("Error adding document. Check console for more information"),console.log(e)}));case 16:i(""),a.value=null,u("");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.target.files,a=c[0],(s=new FileReader).onloadend=function(e){var t=e.target.result;u(t),_(!1)},s.onprogress=function(e){_(!0)},s.readAsDataURL(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)("div",{className:"tweetForm__container",children:Object(N.jsxs)("form",{className:"tweetForm",onSubmit:w,children:[Object(N.jsx)("div",{className:"tweetForm-start",children:Object(N.jsx)("img",{className:"tweetForm__profileImg",src:t.photoURL,alt:""})}),Object(N.jsxs)("div",{className:"tweetForm-end",children:[Object(N.jsxs)("div",{className:"textInput__container",children:[Object(N.jsx)("input",{onChange:function(e){var t=e.target.value;i(t)},type:"text",required:!0,maxLength:280,placeholder:"What's on your mind?",className:"tweetForm__textInput",value:n}),Object(N.jsxs)("div",{className:"textInput__chars",children:[Object(N.jsx)("span",{children:n.length}),Object(N.jsx)("span",{children:"/280"})]})]}),Object(N.jsxs)("div",{className:"image-input__container",children:[Object(N.jsxs)("div",{className:"input-input-start",children:[Object(N.jsx)("label",{htmlFor:"image-input",children:Object(N.jsx)("i",{className:"fas fa-file-image image-input__icon"})}),Object(N.jsx)("input",{id:"image-input",className:"tweetForm-imageInput",type:"file",accept:"image/*",onChange:y}),p&&Object(N.jsx)("div",{children:"Processing image..."}),d&&Object(N.jsxs)("div",{className:"tweetForm-attachedImage",children:[Object(N.jsx)("img",{className:"tweetForm-attachedImage__content",src:d,alt:""}),Object(N.jsx)("button",{type:"button",className:"tweetForm-attachedImage__deleteButton",onClick:function(){var e=document.querySelector(".tweetForm-imageInput");console.dir(e),e.value=null,u(null)},children:Object(N.jsx)("i",{className:"fas fa-trash-alt "})})]})]}),Object(N.jsx)("div",{className:"input-input-end",children:Object(N.jsx)("button",{className:"tweetForm__submitButton",type:"submit",children:"Bleep"})})]})]})]})})}function R(e){var t=e.userObj,c=Object(a.useState)([]),s=Object(b.a)(c,2),n=s[0],i=s[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(h.b)(f,"tweets"),e.next=3,Object(h.i)(t,Object(h.h)("createdAt","desc"));case 3:c=e.sent,Object(h.g)(c,(function(e){var t=e.docs.map((function(e){return Object(C.a)({id:e.id},e.data())}));i(t)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(N.jsxs)("div",{className:"home",children:[Object(N.jsxs)("div",{className:"home-title__container",children:[Object(N.jsx)("h1",{className:"home-title__heading",children:"Home"}),Object(N.jsx)("i",{className:"fas fa-home home-title__icon"})]}),Object(N.jsx)(D,{userObj:t}),Object(N.jsx)("div",{children:n.map((function(e){return Object(N.jsx)(F,{attachmentURL:e.attachmentURL,tweet:e,isOwner:t.uid===e.creatorId},e.id)}))})]})}var U=c(26);function q(e){var t=e.userObj;return Object(N.jsx)("div",{className:"nav",children:Object(N.jsxs)("div",{className:"nav-container",children:[Object(N.jsx)("div",{className:"nav-start",children:Object(N.jsx)(U.b,{to:"/",children:Object(N.jsx)("img",{className:"nav-home",src:r,alt:""})})}),Object(N.jsxs)("div",{className:"nav-links",children:[Object(N.jsx)(U.c,{className:"NavLink",exact:!0,to:"/",children:"Home"}),Object(N.jsx)(U.c,{className:"NavLink",to:"/profile",children:"Profile"})]}),Object(N.jsx)("div",{className:"nav-end",children:Object(N.jsxs)(U.b,{className:"navProfile-link",to:"/profile",children:[t.photoURL&&Object(N.jsx)("img",{className:"navProfile-image",src:t.photoURL,alt:""}),t.displayName]})})]})})}function A(){return Object(N.jsxs)("div",{children:["You look lost.",Object(N.jsx)(U.b,{to:"/",children:"Go home"})]})}function E(e){var t=e.userObj,c=e.refreshDisplayName,s=Object(a.useState)(""),n=Object(b.a)(s,2),i=n[0],r=n[1],j=Object(a.useState)(!1),u=Object(b.a)(j,2),m=u[0],h=u[1],x=Object(d.f)(),p=function(){var e=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,Object(O.i)(t,{displayName:i});case 3:h(!1),c();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"profile-options",children:[Object(N.jsxs)("div",{className:"profile-options__container",children:[Object(N.jsx)("div",{className:"profile-displayName__container",children:Object(N.jsxs)("div",{className:"profile-displayName",children:[Object(N.jsx)("h1",{children:t.displayName}),Object(N.jsx)("span",{className:"profile-editName",onClick:function(){h(!m)},children:Object(N.jsx)("i",{className:"fas fa-edit profile-editName__icon"})})]})}),Object(N.jsx)("button",{className:"profile-signOut",onClick:function(){Object(O.h)(_).catch((function(e){console.log(e)})),x.push("/")},children:"Sign out"})]}),m&&Object(N.jsxs)("div",{className:"profile-editNameModal",children:[Object(N.jsx)("h2",{className:"profile-editNameModal-title",children:"Change your name"}),Object(N.jsxs)("form",{className:"profile-editNameModal-form",onSubmit:p,children:[Object(N.jsxs)("div",{className:"profile-editNameModel-form__inputContainer",children:[Object(N.jsx)("input",{className:"profile-editNameModal-form__input",required:!0,maxLength:29,type:"text",onChange:function(e){var t=e.target.value;r(t)}}),Object(N.jsx)("button",{className:"profile-editNameModal-form__submit",type:"submit",children:"Save"})]}),Object(N.jsx)("p",{className:"profile-editNameModal-form__desc",children:"Your name how it will appear to other users."})]})]})]})}var M=c(17);function P(e){var t=e.userObj,c=Object(a.useState)([]),s=Object(b.a)(c,2),n=s[0],i=s[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var c,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.i)(Object(h.b)(f,"tweets"),Object(h.k)("creatorId","==",t.uid),Object(h.h)("createdAt","desc"));case 2:return c=e.sent,e.next=5,Object(h.e)(c);case 5:if(a=e.sent,s=[],!a.empty){e.next=11;break}return e.abrupt("return",Object(N.jsx)("div",{className:"profile__noPosts",children:Object(N.jsx)("h1",{children:"\ud83d\ude1e No tweets yet..."})}));case 11:a.forEach((function(e){var t=e.data();s=[].concat(Object(M.a)(s),[Object(C.a)({id:e.id},t)]),i(s)}));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.uid]),Object(N.jsxs)("div",{className:"profile-tweets",children:[Object(N.jsx)("h2",{className:"profile-tweets__heading",children:"Your tweets:"}),n.map((function(e){return Object(N.jsx)(F,{attachmentURL:e.attachmentURL,tweet:e,isOwner:t.uid===e.creatorId},e.id)}))]})}function B(e){var t=e.userObj,c=e.refreshDisplayName;return Object(N.jsxs)("div",{className:"profile",children:[Object(N.jsx)(E,{userObj:t,refreshDisplayName:c}),Object(N.jsx)(P,{userObj:t})]})}var G=c(57),Y=c.n(G);function H(e){var t=e.userObj,c=e.refreshDisplayName,s=Object(a.useState)(""),n=Object(b.a)(s,2),i=n[0],r=n[1],j=Object(d.f)(),m=function(){var e=Object(l.a)(o.a.mark((function e(a){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,Object(u.k)(t,{displayName:i}).catch((function(e){console.log(e)})).then((function(){c(),j.push("/")}));case 3:if(null!==t.photoURL){e.next=7;break}return s=Y.a.encode(i),e.next=7,Object(u.k)(t,{photoURL:"https://ui-avatars.com/api/?name=".concat(s,"?size=128?format=svg?bold=true")});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"newuser",children:[Object(N.jsxs)("div",{className:"newuser-welcome",children:[Object(N.jsx)("h1",{children:"Welcome to Bleeper!"}),Object(N.jsx)("p",{children:"Get started by entering your displayname below."})]}),Object(N.jsxs)("div",{className:"newuser-dnChange",children:[Object(N.jsx)("h2",{children:"Display Name"}),Object(N.jsxs)("form",{className:"newuser-form",onSubmit:m,children:[Object(N.jsx)("input",{id:"displayName",required:!0,maxLength:29,type:"text",onChange:function(e){var t=e.target.value;r(t)}}),Object(N.jsx)("label",{for:"displayName",children:"Your name how it will appear to other users."}),Object(N.jsx)("button",{type:"submit",children:"Let's go!"})]})]})]})}function J(){return Object(N.jsx)("div",{className:"madeWithLove",children:Object(N.jsx)("div",{children:Object(N.jsxs)("a",{href:"https://github.com/leviFrosty/twitClone",target:"_blank",rel:"noreferrer",className:"madeWithLove__github",children:["See the code ",Object(N.jsx)("i",{className:"fab fa-github"})]})})})}var W=function(e){var t=e.isLoggedIn,c=e.userObj,a=e.refreshDisplayName;return Object(N.jsxs)(U.a,{basename:"/twitclone",children:[t&&Object(N.jsx)(q,{userObj:c}),Object(N.jsx)(d.c,{children:Object(N.jsx)(s.a.Fragment,{children:t?Object(N.jsx)(s.a.Fragment,{children:Object(N.jsx)("div",{className:"main",children:Object(N.jsxs)("div",{className:"loggedin__container",children:[Object(N.jsx)(d.a,{exact:!0,path:"/new-user",children:Object(N.jsx)(H,{userObj:c,refreshDisplayName:a})}),Object(N.jsx)(d.a,{exact:!0,path:"/profile",children:Object(N.jsx)(B,{userObj:c,refreshDisplayName:a})}),Object(N.jsx)(d.a,{exact:!0,path:"/not-found",component:A}),Object(N.jsx)(d.a,{exact:!0,path:"/",children:Object(N.jsx)(R,{userObj:c})})]})})}):Object(N.jsxs)("div",{className:"logged-out",children:[Object(N.jsx)(d.a,{exact:!0,path:"/not-found",component:A}),Object(N.jsx)(d.a,{exact:!0,path:"/",component:k})]})})}),t&&Object(N.jsx)(s.a.Fragment,{children:Object(N.jsx)("div",{className:"explore",children:Object(N.jsx)(J,{})})})]})};function z(){return Object(N.jsx)("div",{className:"init",children:Object(N.jsx)("div",{className:"init__container",children:Object(N.jsx)("i",{className:"fas fa-spinner init__spinner"})})})}var K=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),i=Object(b.a)(n,2),r=i[0],j=i[1],o=Object(a.useState)(null),l=Object(b.a)(o,2),d=l[0],u=l[1];return Object(a.useEffect)((function(){Object(O.e)(_,(function(e){e?(u(e),j(!0)):j(!1),s(!0)}))}),[]),Object(N.jsx)("div",{className:c?"App":"App-Loading",children:c?Object(N.jsx)(W,{isLoggedIn:r,userObj:d,refreshDisplayName:function(){Object(O.f)(d),u({});var e=_.currentUser;u(e)}}):Object(N.jsx)(z,{})})};c(91);i.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(K,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.9d5e3d7f.chunk.js.map