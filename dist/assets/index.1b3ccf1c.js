import{j as L,a as T,R as z,b as $,r as o,u as G,L as j,F as k,f as H,c as M,d as D,e as J,g as V,h as Z,i as A,k as K,l as W,m as Q,B as X}from"./vendor.19acdf93.js";const Y=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}};Y();const e=L.exports.jsx,m=L.exports.jsxs,ee=L.exports.Fragment,O=()=>({renderSpinner:s=>e("div",{className:`${s?"flex justify-center items-center":"hidden"}`,children:e("div",{className:"animate-spin rounded-full h-[4rem] w-[4rem] border-b-[0.2rem] \r border-green-40"})})}),re="http://localhost:5000",C=T.create({baseURL:re}),te=r=>({setSelf:s,onSet:n})=>{const l=localStorage.getItem(r);l!==null&&s(JSON.parse(l)),n((t,a,c)=>{c?localStorage.removeItem(r):localStorage.setItem(r,JSON.stringify(t))})},_=z({key:"user",default:{},effects_UNSTABLE:[te("gist_user"),({onSet:r})=>r(s=>console.log("current user",s))]}),q=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,se=/^[a-zA-Z0-9]{6,}$/,ae=()=>{const r=$(_),[s,n]=o.exports.useState(""),[l,t]=o.exports.useState(""),[a,c]=o.exports.useState(!1),[d,i]=o.exports.useState({}),[N,g]=o.exports.useState(""),[u,x]=o.exports.useState("");let w=G();return{errors:d,email:s,password:l,handleChange:p=>{switch(i(""),p.target.name){case"email":n(p.target.value),p.target.value.toLowerCase().match(q)?x(""):x("Invalid email");break;case"pass":t(p.target.value);break}},login:async p=>{var y;p.preventDefault(),c(!0),i({});try{const{data:f}=await C.post("/login",{email:s,password:l});r(f),c(!1),i(""),w("/")}catch(f){i((y=f==null?void 0:f.response)==null?void 0:y.data),c(!1)}},load:a,mailErrors:u,passErrors:N}},oe=()=>{const{errors:r,email:s,password:n,handleChange:l,login:t,load:a,mailErrors:c,passErrors:d}=ae(),{renderSpinner:i}=O();return m("div",{className:"flex flex-col bg-transparent w-full items-center",children:[e("p",{className:"text-[1.6rem] text-green-80 font-semibold mb-[6rem]",children:"GIST SHOP"}),m("form",{className:"flex flex-col gap-y-[0.5rem] pt-[3rem] w-[75vw] md:w-[50vw] lg:w-[30vw]",onSubmit:t,children:[e("input",{onChange:l,type:"text",id:"email",name:"email",value:s,placeholder:"Email",className:"w-full border-[0.0625rem]  \r border-black-70 h-[3.25rem] outline-none rounded-[0.25rem]\r font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("p",{className:"text-red-600 font-bold text-[1rem] text-center",children:c||(r==null?void 0:r.emailErr)}),e("input",{onChange:l,type:"password",id:"pass",name:"pass",placeholder:"password",value:n,className:"w-full border-[0.0625rem]  \r border-black-70 h-[3.25rem] outline-none rounded-[0.25rem]\r font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("p",{className:"text-red-600 font-bold text-[1rem] text-center",children:d||(r==null?void 0:r.passErr)}),i(a),m("div",{className:"flex flex-col  mt-[4rem] md:gap-y-[2rem] ",children:[e("button",{disabled:d.length>1||c.length>1,type:"submit",className:"w-full btn bg-red-20  hover:bg-red-20 text-[1.2rem]\r text-white h-[2.8125rem] ",children:"Sign in"}),m("p",{className:"text-[1.2rem] text-center self-center font-semibold tracking-[0.02rem]\r mt-[2rem] md:mt-[0rem]",children:["Need an account?",e("span",{className:"text-blue-600 px-[1rem]",children:e(j,{to:"/register",children:"Signup"})})]})]})]})]})},le=()=>{const[r,s]=o.exports.useState(""),[n,l]=o.exports.useState(""),[t,a]=o.exports.useState(""),[c,d]=o.exports.useState(""),[i,N]=o.exports.useState(""),[g,u]=o.exports.useState(""),[x,w]=o.exports.useState(""),[b,S]=o.exports.useState(""),[p,y]=o.exports.useState(""),[f,P]=o.exports.useState(!1),[B,E]=o.exports.useState({}),U=$(_);return{mailError:r,passError:n,email:t,password:c,fname:i,lname:g,bio:x,userName:b,handleChange:h=>{switch(E(""),h.target.id){case"email":a(h.target.value),h.target.value.toLowerCase().match(q)?s(""):s("Invalid email");break;case"pass":d(h.target.value),h.target.value.match(se)?l(""):l("Password should be atleast six characters long");break;case"fname":N(h.target.value);break;case"lname":u(h.target.value);break;case"userName":S(h.target.value);break;case"bio":w(h.target.value);break;case"phone":y(h.target.value);break}},register:async h=>{var R,I;h.preventDefault(),P(!0),E({});let F={email:t,password:c,firstName:i,lastName:g,userName:b,bio:x,phonenumber:p};try{const{data:v}=await C.post("/register",F);U(v),P(!1),E("")}catch(v){((R=v.response.data)==null?void 0:R.code)===11e3&&s("This email is already registered"),E((I=v==null?void 0:v.response)==null?void 0:I.data),P(!1)}},load:f,errors:B,phone:p}},ne=()=>{var b,S;const{mailError:r,passError:s,email:n,password:l,fname:t,lname:a,bio:c,userName:d,handleChange:i,register:N,load:g,errors:u,phone:x}=le(),{renderSpinner:w}=O();return m("div",{className:"flex flex-col md:flex-row gap-x-[2.5rem]",children:[e("div",{className:"hidden lg:flex lg:min-w-[25%] bg-green-60 lg:min-h-screen"}),m("form",{className:"flex flex-col gap-y-[0.1rem] w-full lg:w-[50%] py-[3rem] px-[1rem]",onSubmit:N,children:[e("p",{className:"text-[2.2rem] text-blue-20 font-semibold mb-[1.5rem] justify-center",children:"GIST SHOP"}),e("p",{className:"text-[1rem] font-medium",children:"Create your account"}),e("label",{htmlFor:"email",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"Email Address"}),e("input",{onChange:i,value:n,required:!0,type:"text",id:"email",name:"email",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem]  font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("p",{className:"text-red-600 font-bold text-[1rem] text-center",children:r||((b=u==null?void 0:u.email)==null?void 0:b.message)||u.length>1&&u}),e("label",{htmlFor:"fname",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"First Name"}),e("input",{onChange:i,value:t,required:!0,type:"text",id:"fname",name:"fname",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("label",{htmlFor:"lname",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"Last Name"}),e("input",{onChange:i,value:a,required:!0,type:"text",id:"lname",name:"lname",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("label",{htmlFor:"userName",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"userName"}),e("input",{onChange:i,value:d,required:!0,type:"text",id:"userName",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("label",{htmlFor:"bio",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"Bio"}),e("input",{onChange:i,value:c,required:!0,id:"bio",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("label",{htmlFor:"phone",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"Phone Number"}),e("input",{onChange:i,value:x,required:!0,id:"phone",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("label",{htmlFor:"pass",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"Password"}),e("input",{onChange:i,value:l,required:!0,type:"password",id:"pass",name:"pass",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("p",{className:"text-red-600 font-bold text-[1rem] text-center",children:s||((S=u==null?void 0:u.password)==null?void 0:S.message)}),e("div",{className:"mt-[1rem]",children:w(g)}),e("button",{disabled:s.length>1||r.length>1||g,type:"submit",className:"btn py-[0.5rem] mt-[3rem] md:max-w-[7rem] text-white text-[1.2rem]\r font-bold ",children:"Submit"}),m("p",{className:"text-[1rem] text-center md:text-left  font-semibold mt-[2rem]\r tracking-[0.02rem]",children:["Already have an account?",e("span",{className:"text-blue-600 px-[1rem]",children:e(j,{to:"/",children:"Login"})})]})]})]})},me=()=>m("div",{className:"flex flex-col md:flex-row py-[2.5rem] px-[2rem] md:gap-x-[2rem]",children:[m("div",{className:"flex flex-col order-2 md:order-1 self-center",children:[m("p",{className:"uppercase text-blue-20 font-[900] text-[2rem]",children:["Welcome to GIST-SHOP.",e("br",{}),e("span",{className:"text-black-40",children:"Social Shopping Platform."})]}),e("p",{className:"text-[1.2rem] mt-[1.5rem]",children:"An always love social shopping network, with your favorite brands and shops."}),e("button",{className:"bg-red-20 w-[9rem] rounded-md py-[1rem] px-[1rem] text-white\r font-[900] self-center mt-[1.4rem] hover:bg-red-600 hover:scale-110 trasition ease-in-out\r duration-300",children:"Join For Free"})]}),e("div",{className:"flex  bg-hero w-[80vw] h-[30vh] bg-center bg-cover bg-no-repeat order-1\r md:order-2 md:min-w-[55vw] md:h-[45vh] lg:h-[55vh] self-center rounded-xl"})]}),ce=()=>{const[r,s]=o.exports.useState([]),[n,l]=o.exports.useState(""),[t,a]=o.exports.useState(!1);return{getProducts:async()=>{a(!0);try{let{data:d}=await C.get("/products");s(d),a(!1)}catch(d){a(!1),l(d)}},products:r,errors:n,load:t}},ie=({name:r,price:s,img:n,userName:l})=>m("div",{className:"flex flex-col p-[1rem] bg-white hover:border-[0.2rem] hover:border-gray-200\r border-[0.2rem] rounded-2xl border-white hover:shadow-2xl flex-shrink-0",children:[m("p",{className:"text-blue-20 font-[900] text-[1.4rem] mb-[1rem]",children:[r,e("br",{}),e(k,{icon:H,size:"1x",color:"blue"}),"\xA0\xA0\xA0",e("span",{className:"",children:l})]}),e("div",{className:"flex relative w-[25rem] h-[40vh] bg-no-repeat bg-center bg-cover rounded-xl\r border-[0.1rem]",style:{backgroundImage:`url(/img/${n})`},children:m("p",{className:"absolute bottom-[4%] right-[10%] text-white font-[600] text-[1.2rem]\r bg-black-80 px-[1rem]",children:["$ ",s]})})]}),de=()=>{const{getProducts:r,products:s,errors:n,load:l}=ce();return o.exports.useEffect(()=>{r()},[]),m("div",{className:"flex flex-col py-[3rem] px-[2rem]",children:[e("p",{className:"text-black-40 text-[2.2rem] font-[600] mb-[2rem]",children:"Recommended products"}),e("div",{className:"scroller flex flex-row gap-x-8 overflow-x-auto ",children:s.length>0&&s.map((t,a)=>e(ie,{name:t.name,userName:t.ownerId.userName,img:t.images[0],price:t.price},a))})]})},ue=()=>{const[r,s]=o.exports.useState([]),[n,l]=o.exports.useState(""),[t,a]=o.exports.useState(!1);return{shops:r,getShops:async()=>{a(!0);try{let{data:d}=await C.get("/shop");s(d),a(!1)}catch(d){a(!1),l(d)}},errors:n,load:t}},he=({name:r,userName:s,img:n})=>m("div",{className:"flex relative w-[25rem] h-[40vh] bg-no-repeat bg-center bg-cover flex-shrink-0\r border-2 rounded-2xl hover:shadow-2xl",style:{backgroundImage:`url(/img/${n})`},children:[m("p",{className:"absolute top-[4%] right-[80%] text-black-20 font-[600] text-[1.2rem]",children:[e("span",{className:"text-black-40",children:"by"}),"\xA0\xA0",s]}),e("p",{className:"absolute bottom-[4%] right-[40%] text-blue-20 font-[900] text-[1.4rem]",children:r})]});const pe=()=>{const{shops:r,getShops:s,errors:n,load:l}=ue();return o.exports.useEffect(()=>{s()},[]),m("div",{className:"flex flex-col py-[3rem] px-[2rem] bg-teal-50",children:[e("p",{className:"text-black-40 text-[2.2rem] font-[600] mb-[2rem]",children:"Popular shops"}),e("div",{className:"scroller flex flex-row gap-x-8 overflow-x-auto ",children:r.length>0&&r.map((t,a)=>e(he,{name:t.name,userName:t.userId.userName,img:t.image},a))})]})},xe=()=>{const[r,s]=o.exports.useState(!1);return m("div",{className:"flex flex-row flex-nowrap w-screen py-[1rem] px-[0.5rem] md:px-[2rem] \r gap-x-[1rem]",children:[e("p",{className:"hidden md:flex text-blue-20 text-[1.6rem] font-semibold",children:"Gist-Shop"}),m("div",{className:"relative",children:[e("input",{onFocus:()=>s(!0),onBlur:()=>s(!1),className:`${r?"w-[90vw] md:w-[35vw] lg:w-[45vw] xl:w-[55vw] border-2 relative shadow-lg rounded-md px-[2rem] h-[2.6rem] outline-none":" border-2 relative shadow-lg rounded-md px-[2rem] h-[2.6rem] outline-none md:w-[35vw] lg:w-[45vw] xl:w-[55vw]"}`,placeholder:"Search Gist-Shop"}),e(k,{icon:M,size:"1x",color:"red",className:`${r?"absolute right-[17%] top-[30%] md:hidden":"hidden"}`,onClick:()=>s(!1)}),e(k,{icon:D,size:"1x",color:"blue",className:`${r?"absolute right-[5%] top-[30%]":"hidden md:absolute right-[5%] top-[30%]"}`})]}),e("button",{className:"hidden md:flex w-[8rem] self-center border-2 border-blue-20 text-[1.2rem]\r hover:bg-blue-400 rounded-md text-center hover:text-white justify-around py-[0.3rem] \r font-[600] ml-auto",children:"Sign in"}),e(k,{icon:J,color:"blue",className:`${r?"hidden md:flex md:ml-[2rem] self-center fa-lg md:fa-3x":"self-center md:ml-[2rem]  fa-lg md:fa-3x"}`}),e(k,{icon:V,color:"blue",className:`${r?"hidden md:flex md:ml-[2rem] self-center fa-lg md:fa-3x":"self-center md:ml-[2rem] fa-lg md:fa-3x"}`})]})},fe=()=>m("div",{className:"flex flex-col flex-nowrap overflow-x-clip",children:[e(xe,{}),e(me,{}),e(pe,{}),e(de,{})]}),ge=()=>e(ee,{children:m(Z,{children:[e(A,{path:"/*",element:e(fe,{})}),e(A,{path:"/login",element:e(oe,{})}),e(A,{path:"/register",element:e(ne,{})})]})});K.render(e(W.StrictMode,{children:e(Q,{children:e(X,{children:e(ge,{})})})}),document.getElementById("root"));
