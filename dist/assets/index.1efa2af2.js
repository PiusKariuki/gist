import{j as O,a as Q,R as j,b as C,r as c,u as k,L as V,F as w,f as X,c as ee,d as re,e as te,g as ae,h as se,i as F,S as le,k as ne,O as oe,l as G,m as me,n as ce,o as ie,p as de,q as I,s as xe,t as ue,v as he,B as fe}from"./vendor.7f3fbe29.js";const ge=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}};ge();const e=O.exports.jsx,o=O.exports.jsxs,H=O.exports.Fragment,$=()=>({renderSpinner:s=>e("div",{className:`${s?"flex justify-center items-center":"hidden"}`,children:e("div",{className:"animate-spin rounded-full h-[4rem] w-[4rem] border-b-[0.2rem] \r border-green-40"})})}),pe="http://localhost:5000",P=Q.create({baseURL:pe}),be=t=>({setSelf:s,onSet:n})=>{const l=localStorage.getItem(t);l!==null&&s(JSON.parse(l)),n((a,r,m)=>{m?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(a))})},J=j({key:"user",default:{},effects_UNSTABLE:[be("gist_user"),({onSet:t})=>t(s=>console.log("current user",s))]}),Z=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Ne=/^[a-zA-Z0-9]{6,}$/,ve=()=>{const t=C(J),[s,n]=c.exports.useState(""),[l,a]=c.exports.useState(""),[r,m]=c.exports.useState(!1),[d,x]=c.exports.useState({}),[p,h]=c.exports.useState(""),[i,f]=c.exports.useState("");let g=k();return{errors:d,email:s,password:l,handleChange:N=>{switch(x(""),N.target.name){case"email":n(N.target.value),N.target.value.toLowerCase().match(Z)?f(""):f("Invalid email");break;case"pass":a(N.target.value);break}},login:async N=>{var S;N.preventDefault(),m(!0),x({});try{const{data:u}=await P.post("/login",{email:s,password:l});t(u),m(!1),x(""),g("/")}catch(u){x((S=u==null?void 0:u.response)==null?void 0:S.data),m(!1)}},load:r,mailErrors:i,passErrors:p}},we=()=>{const{errors:t,email:s,password:n,handleChange:l,login:a,load:r,mailErrors:m,passErrors:d}=ve(),{renderSpinner:x}=$();return o("div",{className:"flex flex-col bg-transparent w-full items-center",children:[e("p",{className:"text-[1.6rem] text-green-80 font-semibold mb-[6rem]",children:"GIST SHOP"}),o("form",{className:"flex flex-col gap-y-[0.5rem] pt-[3rem] w-[75vw] md:w-[50vw] lg:w-[30vw]",onSubmit:a,children:[e("input",{onChange:l,type:"text",id:"email",name:"email",value:s,placeholder:"Email",className:"w-full border-[0.0625rem]  \r border-black-70 h-[3.25rem] outline-none rounded-[0.25rem]\r font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("p",{className:"text-red-600 font-bold text-[1rem] text-center",children:m||(t==null?void 0:t.emailErr)}),e("input",{onChange:l,type:"password",id:"pass",name:"pass",placeholder:"password",value:n,className:"w-full border-[0.0625rem]  \r border-black-70 h-[3.25rem] outline-none rounded-[0.25rem]\r font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("p",{className:"text-red-600 font-bold text-[1rem] text-center",children:d||(t==null?void 0:t.passErr)}),x(r),o("div",{className:"flex flex-col  mt-[4rem] md:gap-y-[2rem] ",children:[e("button",{disabled:d.length>1||m.length>1,type:"submit",className:"w-full btn bg-red-20  hover:bg-red-20 text-[1.2rem]\r text-white h-[2.8125rem] ",children:"Sign in"}),o("p",{className:"text-[1.2rem] text-center self-center font-semibold tracking-[0.02rem]\r mt-[2rem] md:mt-[0rem]",children:["Need an account?",e("span",{className:"text-blue-600 px-[1rem]",children:e(V,{to:"/register",children:"Signup"})})]})]})]})]})},ye=()=>{const[t,s]=c.exports.useState(""),[n,l]=c.exports.useState(""),[a,r]=c.exports.useState(""),[m,d]=c.exports.useState(""),[x,p]=c.exports.useState(""),[h,i]=c.exports.useState(""),[f,g]=c.exports.useState(""),[b,y]=c.exports.useState(""),[N,S]=c.exports.useState(""),[u,A]=c.exports.useState(!1),[L,_]=c.exports.useState({}),Y=C(J);return{mailError:t,passError:n,email:a,password:m,fname:x,lname:h,bio:f,userName:b,handleChange:v=>{switch(_(""),v.target.id){case"email":r(v.target.value),v.target.value.toLowerCase().match(Z)?s(""):s("Invalid email");break;case"pass":d(v.target.value),v.target.value.match(Ne)?l(""):l("Password should be atleast six characters long");break;case"fname":p(v.target.value);break;case"lname":i(v.target.value);break;case"userName":y(v.target.value);break;case"bio":g(v.target.value);break;case"phone":S(v.target.value);break}},register:async v=>{var D,M;v.preventDefault(),A(!0),_({});let U={email:a,password:m,firstName:x,lastName:h,userName:b,bio:f,phonenumber:N};try{const{data:E}=await P.post("/register",U);Y(E),A(!1),_("")}catch(E){((D=E.response.data)==null?void 0:D.code)===11e3&&s("This email is already registered"),_((M=E==null?void 0:E.response)==null?void 0:M.data),A(!1)}},load:u,errors:L,phone:N}},Se=()=>{var b,y;const{mailError:t,passError:s,email:n,password:l,fname:a,lname:r,bio:m,userName:d,handleChange:x,register:p,load:h,errors:i,phone:f}=ye(),{renderSpinner:g}=$();return o("div",{className:"flex flex-col md:flex-row gap-x-[2.5rem]",children:[e("div",{className:"hidden lg:flex lg:min-w-[25%] bg-green-60 lg:min-h-screen"}),o("form",{className:"flex flex-col gap-y-[0.1rem] w-full lg:w-[50%] py-[3rem] px-[1rem]",onSubmit:p,children:[e("p",{className:"text-[2.2rem] text-blue-20 font-semibold mb-[1.5rem] justify-center",children:"GIST SHOP"}),e("p",{className:"text-[1rem] font-medium",children:"Create your account"}),e("label",{htmlFor:"email",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"Email Address"}),e("input",{onChange:x,value:n,required:!0,type:"text",id:"email",name:"email",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem]  font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("p",{className:"text-red-600 font-bold text-[1rem] text-center",children:t||((b=i==null?void 0:i.email)==null?void 0:b.message)||i.length>1&&i}),e("label",{htmlFor:"fname",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"First Name"}),e("input",{onChange:x,value:a,required:!0,type:"text",id:"fname",name:"fname",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("label",{htmlFor:"lname",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"Last Name"}),e("input",{onChange:x,value:r,required:!0,type:"text",id:"lname",name:"lname",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("label",{htmlFor:"userName",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"userName"}),e("input",{onChange:x,value:d,required:!0,type:"text",id:"userName",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("label",{htmlFor:"bio",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"Bio"}),e("input",{onChange:x,value:m,required:!0,id:"bio",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("label",{htmlFor:"phone",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"Phone Number"}),e("input",{onChange:x,value:f,required:!0,id:"phone",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("label",{htmlFor:"pass",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"Password"}),e("input",{onChange:x,value:l,required:!0,type:"password",id:"pass",name:"pass",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("p",{className:"text-red-600 font-bold text-[1rem] text-center",children:s||((y=i==null?void 0:i.password)==null?void 0:y.message)}),e("div",{className:"mt-[1rem]",children:g(h)}),e("button",{disabled:s.length>1||t.length>1||h,type:"submit",className:"btn py-[0.5rem] mt-[3rem] md:max-w-[7rem] text-white text-[1.2rem]\r font-bold ",children:"Submit"}),o("p",{className:"text-[1rem] text-center md:text-left  font-semibold mt-[2rem]\r tracking-[0.02rem]",children:["Already have an account?",e("span",{className:"text-blue-600 px-[1rem]",children:e(V,{to:"/",children:"Login"})})]})]})]})},ke=()=>o("div",{className:"flex flex-col md:flex-row py-[2.5rem] px-[2rem] md:gap-x-[2rem]",children:[o("div",{className:"flex flex-col order-2 md:order-1 self-center",children:[o("p",{className:"uppercase text-blue-20 font-[900] text-[2rem]",children:["Welcome to GIST-SHOP.",e("br",{}),e("span",{className:"text-black-40",children:"Social Shopping Platform."})]}),e("p",{className:"text-[1.2rem] mt-[1.5rem]",children:"An always live social shopping network, with your favorite brands and shops."}),e("button",{className:"bg-red-20 w-[9rem] rounded-md py-[1rem] px-[1rem] text-white\r font-[900] self-center mt-[1.4rem] hover:bg-red-600 hover:scale-110 trasition ease-in-out\r duration-300",children:"Join For Free"})]}),e("div",{className:"flex  bg-hero w-[80vw] h-[30vh] bg-center bg-cover bg-no-repeat order-1\r md:order-2 md:min-w-[55vw] md:h-[45vh] lg:h-[55vh] self-center rounded-xl"})]}),R=()=>{const[t,s]=c.exports.useState([]),[n,l]=c.exports.useState({}),[a,r]=c.exports.useState(""),[m,d]=c.exports.useState(!1);return{getProducts:async()=>{d(!0);try{let{data:h}=await P.get("/products");s(h),d(!1)}catch(h){d(!1),r(h)}},products:t,errors:a,load:m,getProductById:async h=>{d(!0);try{let{data:i}=await P.get(`/products/products/${h}`);l(i),d(!1)}catch(i){d(!1),r(i)}},product:n}},K=({name:t,price:s,img:n,userName:l,id:a})=>{let r=k();return o("div",{className:"flex flex-col p-[1rem] bg-white hover:border-[0.2rem] hover:border-gray-200\r border-[0.2rem] rounded-2xl border-white hover:shadow-2xl relative",onClick:()=>r(`/product/${a}`),children:[o("p",{className:"text-blue-20 font-[900] text-[1.4rem] mb-[1rem]",children:[t,e("br",{}),e(w,{icon:X,size:"1x",color:"blue"}),"\xA0\xA0\xA0",e("span",{className:"",children:l})]}),e("div",{className:"flex relative w-[70vw] h-[40vh] md:w-[25rem] bg-no-repeat bg-center bg-cover rounded-xl\r border-[0.1rem]",style:{backgroundImage:`url(/img/${n})`},children:o("p",{className:"absolute bottom-[4%] right-[10%] text-white font-[600] text-[1.2rem]\r bg-black-80 px-[1rem]",children:["$ ",s]})})]})},Ce=()=>{const{getProducts:t,products:s,errors:n,load:l}=R();return c.exports.useEffect(()=>{t()},[]),o("div",{className:"flex flex-col py-[3rem] px-[2rem] h-full w-screen",children:[e("p",{className:"text-black-40 text-[2.2rem] font-[600] mb-[2rem]",children:"Recommended products"}),e("div",{className:"scroller flex flex-row gap-x-8 overflow-x-auto w-screen",children:s.map((a,r)=>{var m;return e(K,{name:a==null?void 0:a.name,userName:(m=a==null?void 0:a.ownerId)==null?void 0:m.userName,img:a==null?void 0:a.images[0],price:a==null?void 0:a.price,id:a==null?void 0:a._id},r)})})]})},W=()=>{const[t,s]=c.exports.useState([]),[n,l]=c.exports.useState(""),[a,r]=c.exports.useState(!1);return{shops:t,getShops:async()=>{r(!0);try{let{data:d}=await P.get("/shop");s(d),r(!1)}catch(d){r(!1),l(d)}},errors:n,load:a}},Ie=({name:t,userName:s,img:n,id:l})=>{let a=k();return o("div",{className:"flex relative w-[25rem] h-[40vh] bg-no-repeat bg-center bg-cover flex-shrink-0\r border-2 rounded-2xl hover:shadow-2xl",style:{backgroundImage:`url(/img/${n})`},onClick:()=>a(`/shop/${l}`),children:[o("p",{className:"absolute top-[4%] right-[80%] text-black-20 font-[600] text-[1.2rem]",children:[e("span",{className:"text-black-40",children:"by"}),"\xA0\xA0",s]}),e("p",{className:"absolute bottom-[4%] right-[40%] text-blue-20 font-[900] text-[1.4rem]",children:t})]})};const Ee=()=>{const{shops:t,getShops:s,errors:n,load:l}=W();return c.exports.useEffect(()=>{s()},[]),o("div",{className:"flex flex-col py-[3rem] px-[2rem] bg-teal-50",children:[e("p",{className:"text-black-40 text-[2.2rem] font-[600] mb-[2rem]",children:"Popular shops"}),e("div",{className:"scroller flex flex-row gap-x-8 overflow-x-auto ",children:t.length>0&&t.map((a,r)=>e(Ie,{name:a.name,userName:a.userId.userName,img:a.image,id:a._id},r))})]})},Pe=()=>o(H,{children:[e(ke,{}),e(Ee,{}),e(Ce,{})]}),Ae=t=>({setSelf:s,onSet:n})=>{const l=localStorage.getItem(t);l!==null&&s(JSON.parse(l)),n((a,r,m)=>{m?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(a))})},q=j({key:"cartAtom",default:[],effects_UNSTABLE:[Ae("gist-cart"),({onSet:t})=>t(s=>console.log("cart",s))]}),T=j({key:"cartOpen",default:!1}),$e=ee({key:"cartSelector",get:({get:t})=>{const s=t(q);let n=0;return s.length>0&&s.forEach(l=>n+=l.price*l.quantity),n}}),z=j({key:"search",default:""}),Le=()=>{const[t,s]=c.exports.useState(""),n=C(z);let l=k();return{handleChange:r=>{s(r.target.value),n(r.target.value),r.target.value.length>0&&l("/searching")},input:t,setInput:s}},_e=()=>{const[t,s]=c.exports.useState(!1);let n=k();const l=C(z),a=C(T),{handleChange:r,input:m,setInput:d}=Le();return o("div",{className:"flex flex-row flex-nowrap  py-[1rem] px-[0.5rem] md:px-[2rem] \r gap-x-[1rem]",children:[e("p",{className:"hidden md:flex text-blue-20 text-[1.6rem] font-semibold",children:"Gist-Shop"}),o("div",{className:"relative",children:[e("input",{onFocus:()=>{s(!0),n("/searching")},onBlur:()=>{d("")},onChange:r,className:`${t?"w-[90vw] md:w-[35vw] lg:w-[45vw] xl:w-[55vw] border-2 relative shadow-lg rounded-md px-[2rem] h-[2.6rem] outline-none":" border-2 relative shadow-lg rounded-md px-[2rem] h-[2.6rem] outline-none md:w-[35vw] lg:w-[45vw] xl:w-[55vw]"}`,placeholder:"Search Gist-Shop",value:m}),e(w,{icon:re,size:"1x",color:"red",className:`${t?"absolute right-[17%] top-[30%]":"hidden"}`,onClick:()=>{l(""),d(""),s(!1),n("/")}}),e(w,{icon:te,size:"1x",color:"blue",className:`${t?"absolute right-[5%] top-[30%]":"hidden md:absolute right-[5%] top-[30%]"}`,onClick:()=>{n("/searching")}})]}),e("button",{className:"hidden md:flex w-[8rem] self-center border-2 border-blue-20 text-[1.2rem]\r hover:bg-blue-400 rounded-md text-center hover:text-white justify-around py-[0.3rem] \r font-[600] ml-auto",onClick:()=>n("/login"),children:"Sign in"}),e(w,{onClick:()=>a(x=>!x),icon:ae,color:"blue",className:`${t?"hidden md:flex md:ml-[2rem] self-center fa-lg md:fa-3x":"self-center md:ml-[2rem]  fa-lg md:fa-3x"}`}),e(w,{icon:se,color:"blue",className:`${t?"hidden md:flex md:ml-[2rem] self-center fa-lg md:fa-3x":"self-center md:ml-[2rem] fa-lg md:fa-3x"}`})]})},B=()=>{const t=C(q),s=F($e);return C(T),{addToCart:(a,r,m,d,x)=>{t(p=>[{name:d,quantity:a,price:r,image:m,shopId:x},p]),le.fire({icon:"success",text:"successfully added to cart",timer:1e3})},removeItem:a=>{t(r=>r.filter(m=>m.name!==a))},totalValue:s}},je=({image:t,name:s,amount:n,price:l})=>{const{removeItem:a}=B();return o("div",{className:"w-full bg-white flex flex-col border-[0.1rem] border-black-40 rounded-md \r px-[1rem] py-[0.6rem] gap-y-[1rem]",children:[o("div",{className:"flex flex-row flex-nowrap text-[1rem] text-black-40 font-[600] justify-between",children:[e("div",{style:{backgroundImage:`url(/img/${t})`},className:"border-[0.12rem]  border-black-40 h-[4rem] w-[4rem] bg-cover bg-center\r bg-no-repeat rounded-md"}),e("p",{className:"text-blue-20 text-left w-[6rem]",children:s})]}),o("div",{className:"flex flex-row flex-nowrap justify-between text-[1rem] text-black-40 \r font-[600]",children:[o("p",{className:"",children:["Items: ",e("span",{className:"text-blue-20 text-[1.3rem]",children:n})]}),o("p",{className:"text-blue-20",children:["$ ",l*n]})]}),e("div",{className:"flex flex-row justify-end",children:e(w,{onClick:()=>a(s),icon:ne,size:"1x",color:"red"})})]})},Fe=()=>{const{addToCart:t,removeItem:s,totalValue:n}=B(),l=F(q);let a=k();return o("div",{className:"w-[90vw] flex flex-col px-[1rem] py-[2rem] gap-y-[2rem]",children:[o("div",{className:"flex flex-row justify-between text-[1.2rem] tracking-wider font-[600]",children:[e("p",{className:"",children:"Estimated total"}),o("p",{className:"text-blue-20",children:["$",n]})]}),e("div",{className:"flex border-[0.12rem]  border-black-40 rounded-2xl px-[0.5rem] py-[0.5rem] \r bg-white",children:e("p",{className:"text-red-20 text-[1rem] font-[600] tracking-wide leading-relaxed",children:"Items in your cart will not be reserved. Complete checkout to secure your order"})}),e("button",{disabled:l.length===0,onClick:()=>a("/orders"),type:"button",className:"bg-red-20 w-full py-[0.7rem] px-[1.4rem] rounded-xl hover:bg-red-400 \r md:hover:scale-110 text-white text-[1.3rem] font-[700] disabled:bg-gray-300",children:"Checkout"}),e("div",{className:"flex flex-col gap-[1.3rem]",children:l.length>0?l==null?void 0:l.map((r,m)=>e(je,{image:r==null?void 0:r.image,name:r.name,price:r.price,amount:r.quantity},m)):o("div",{className:"flex flex-row self-center items-center py-[3rem] gap-x-[2rem]\r px-[2rem]",children:[e("div",{style:{backgroundImage:"url(/img/wallet.png)"},className:"bg-contain bg-center  bg-no-repeat h-[10rem] w-[10rem]"}),e("p",{className:"text-red-20 font-[700] text-[1rem] md:text-[1.7rem]",children:"Your cart is empty."})]})})]})},Oe=()=>{const t=F(T);return o("div",{className:"flex flex-col flex-nowrap overflow-x-clip",children:[e(_e,{}),o("div",{className:"relative",children:[e("div",{className:`${t?"absolute right-0 top-0 bg-teal-50 border-[0.1rem] border-black-40 min-h-full rounded-l-xl z-50":"hidden"}`,children:e(Fe,{})}),e(oe,{})]})]})},Re=()=>{var i,f;const[t,s]=c.exports.useState(0),[n,l]=c.exports.useState(0),{getProductById:a,product:r,errors:m,load:d}=R(),{renderSpinner:x}=$(),{productId:p}=G(),{addToCart:h}=B();return c.exports.useEffect(()=>{a(p)},[]),o("div",{className:"flex flex-col items-center px-[1rem] py-[1rem] md:px-[2rem] gap-[5rem]",children:[o("div",{className:"flex flex-col md:flex-row flex-wrap \r justify-around md:justify-center gap-y-[2.2rem] md:gap-[2rem] items-center",children:[x(d),o("div",{className:"flex flex-col gap-y-[2rem] self-center",children:[e("p",{className:"text-center text-black-40 font-[600] text-[2rem]",children:r==null?void 0:r.name}),((i=r==null?void 0:r.images)==null?void 0:i.length)>0?e("div",{style:{backgroundImage:`url(/img/${r.images[t]})`},className:"bg-cover bg-center bg-no-repeat w-[60vw] h-[20vh] self-center\r md:w-[20vw]  border-[0.12rem] border-black-40 rounded-2xl"}):null,e("p",{className:"text-center text-red-20 font-[600] text-[1.4rem]",children:(r==null?void 0:r.quantity)===0?"Out of stock":r.price===void 0?"":"$"+(r==null?void 0:r.price)})]}),o("div",{className:"flex flex-row gap-x-[1rem]",children:[o("div",{className:"inline-flex rounded-md shadow-sm border-[0.1rem] border-black-40",children:[e("button",{onClick:()=>l(g=>g===0?0:g-1),disabled:r.quantity===0,type:"button",className:"px-[1rem] py-[0.2rem] font-[600] rounded-l-lg text-black-40 \r text-center",children:"-"}),e("button",{disabled:r.quantity===0,type:"button",className:"px-[1rem] py-[0.2rem] font-[600] text-black-40 border-black-40\r border-x-[0.1rem]",children:n}),e("button",{onClick:()=>l(g=>g===(r==null?void 0:r.quantity)?g:g+1),disabled:r.quantity===0,type:"button",className:"px-[1rem] py-[0.2rem] font-[600] text-black-40 rounded-r-lg \r ",children:"+"})]}),e("button",{disabled:n===0,onClick:()=>{h(n,r==null?void 0:r.price,r==null?void 0:r.images[0],r==null?void 0:r.name,r==null?void 0:r.shopId)},className:"bg-red-20 px-[1rem] py-[0.1rem] text-white font-[600] text-[1rem]\r w-[8rem] rounded-lg disabled:bg-gray-400",children:"Add to Cart"})]})]}),e("div",{className:"hidden md:flex flex-row gap-[2rem]",children:(f=r==null?void 0:r.images)==null?void 0:f.map((g,b)=>e("div",{style:{backgroundImage:`url(/img/${g})`},className:"w-[12rem] h-[6rem] rounded-2xl bg-cover bg-center bg-no-repeat\r border-[0.12rem] border-black-40",onClick:()=>s(b)},b))})]})},qe=({name:t,img:s,price:n,userName:l,id:a})=>{let r=k();return o("div",{className:"flex flex-col rounded-2xl shadow-lg  border-[0.2rem] px-[0.3rem] py-[0.4rem]",onClick:()=>r(`/product/${a}`),children:[e("div",{style:{backgroundImage:`url(/img/${s})`},className:"bg-cover bg-center bg-no-repeat w-[14rem] h-[12rem] rounded-2xl"}),e("p",{className:"text-blue-20 font-[900] text-[1.4rem] mb-[1rem] max-w-[10rem]",children:t}),o("p",{className:"text-black-40 font-[900] text-[1.4rem] mb-[1rem]",children:["by:\xA0\xA0\xA0",l]}),o("p",{className:"text-red-20 font-[900] text-[1.4rem] mb-[1rem]",children:["$:\xA0\xA0\xA0",n]})]})};const Te=({name:t,img:s,userName:n,id:l})=>{let a=k();return o("div",{className:"flex flex-col rounded-2xl shadow-lg  border-[0.2rem] p-[2rem]\r flex-shrink-0",onClick:()=>a(`/shop/${l}`),children:[e("div",{style:{backgroundImage:`url(/img/${s})`},className:"bg-contain bg-center bg-no-repeat w-[80vw] md:w-[40vw] h-[12rem] rounded-2xl"}),e("p",{className:"text-blue-20 font-[900] text-[1.4rem] mb-[1rem]",children:t}),o("p",{className:"text-black-40 font-[900] text-[1.4rem] mb-[1rem]",children:["by:\xA0\xA0\xA0",n]})]})},ze=()=>{const[t,s]=c.exports.useState([]),[n,l]=c.exports.useState([]),a=F(z),{getProducts:r,products:m,load:d}=R(),{renderSpinner:x}=$(),{shops:p,getShops:h}=W();return c.exports.useEffect(()=>{r(),h()},[]),c.exports.useEffect(()=>{m.length>0&&s(m.filter(i=>i.name.toLowerCase().includes(a.toLowerCase()))),p.length>0&&l(p.filter(i=>i.name.toLowerCase().includes(a.toLowerCase())))},[a]),o("div",{className:"flex flex-col px-[2rem] md:px-[3rem]",children:[x(d),t.length>0?e("p",{className:"text-black-40 font-[800] text-[1.6rem] md:text-[2rem] my-[2rem]",children:"Products"}):null,e("div",{className:"scroller flex flex-row overflow-x-auto gap-x-[2rem]",children:t.length>0&&t.map((i,f)=>e(qe,{price:i.price,img:i.images[0],userName:i.ownerId.userName,name:i.name,id:i._id},f))}),n.length>0?e("p",{className:"text-black-40 font-[800] text-[1.6rem] md:text-[2rem] my-[2rem]",children:"Shops"}):null,e("div",{className:"flex flex-row flex-wrap items-center gap-[2rem]\r ",children:n.length>0&&n.map((i,f)=>e(Te,{img:i.image,name:i.name,userName:i.userId.userName,id:i._id},f))})]})},Be=()=>{const[t,s]=c.exports.useState([]),[n,l]=c.exports.useState(""),[a,r]=c.exports.useState(!1);return{shopDetails:t,getShopDetails:async d=>{r(!0);try{let{data:x}=await P.get(`/products/${d}`);s(x),r(!1)}catch(x){l(x),r(!1)}},load:a,errors:n}},Ue=()=>{var m,d,x,p,h,i,f,g,b,y,N,S;const{shopDetails:t,getShopDetails:s,load:n,errors:l}=Be();let{shopId:a}=G();const{renderSpinner:r}=$();return c.exports.useEffect(()=>{s(a)},[]),e(H,{children:n||t.length>0?o("div",{className:"flex flex-col px-[2rem] pb-[2rem]",children:[r(n),o("div",{className:"flex flex-col",children:[e("div",{className:"w-full py-[1rem] bg-white sticky top-0 z-50 border-b-4",children:e("p",{className:"text-[2rem] md:text-[2.5rem] text-black-40 font-[700]\r text-center ",children:(d=(m=t[0])==null?void 0:m.shopId)==null?void 0:d.name})}),o("div",{className:"flex flex-row flex-nowrap justify-around py-[2rem]",children:[t.length>0?e("div",{style:{backgroundImage:`url(/img/${(p=(x=t[0])==null?void 0:x.shopId)==null?void 0:p.image})`},className:"h-[6rem] w-[6rem] rounded-full bg-contain bg-center \r bg-no-repeat self-center bg-teal-100"}):null,o("div",{className:"flex flex-col gap-0 self-center items-center",children:[e("p",{className:"text-blue-20 text-[1rem] md:text-[1.4rem] font-[600]",children:t.length}),e("p",{className:"text-black-40 text-[1rem] md:text-[1.4rem] font-[600]",children:"Products"})]})]}),o("div",{className:"flex flex-row flex-nowrap gap-x-[1.4rem] py-[2rem] justify-around",children:[o("div",{className:"flex flex-col gap-0 items-center",children:[e(w,{icon:me,size:"1x",color:"blue"}),e("p",{className:"text-blue-20 text-[1rem] md:text-[1.4rem] font-[700]",children:(i=(h=t[0])==null?void 0:h.shopId)==null?void 0:i.email})]}),o("div",{className:"flex flex-col gap-0 items-center",children:[e(w,{icon:ce,size:"1x",color:"blue"}),e("p",{className:"text-blue-20 text-[1rem] md:text-[1.4rem] font-[600]\r text-center",children:(g=(f=t[0])==null?void 0:f.shopId)==null?void 0:g.phoneNumber})]}),o("div",{className:"flex flex-col gap-0 items-center",children:[e(w,{icon:ie,size:"1x",color:"blue"}),o("p",{className:"text-blue-20 text-[1rem] md:text-[1.4rem] font-[600] \r text-center",children:["\xA0\xA0",(y=(b=t[0])==null?void 0:b.shopId)==null?void 0:y.location]})]})]}),e("div",{className:"flex py-[2rem]",children:e("p",{className:"text-left text-[1.3rem] tracking-wide leading-relaxed text-blue-40",children:(S=(N=t[0])==null?void 0:N.shopId)==null?void 0:S.description})}),e("p",{className:"text-black-40 text-[1.6rem] md:text-[2.5rem] font-[700] py-[2rem]",children:"Products"}),e("div",{className:"flex flex-row flex-wrap gap-[2rem] justify-around",children:t==null?void 0:t.map((u,A)=>{var L;return e(K,{name:u==null?void 0:u.name,price:u==null?void 0:u.price,img:u==null?void 0:u.images[0],id:u==null?void 0:u._id,userName:(L=u==null?void 0:u.ownerId)==null?void 0:L.userName},A)})})]})]}):o("div",{className:"flex flex-row self-center items-center py-[10rem] gap-x-[2rem] px-[2rem]",children:[e("div",{style:{backgroundImage:"url(/img/wallet.png)"},className:"bg-contain bg-center  bg-no-repeat h-[10rem] w-[10rem]"}),e("p",{className:"text-red-20 font-[700] text-[1rem] md:text-[1.7rem]",children:"This shop is empty right now."})]})})},De=()=>o(de,{children:[o(I,{path:"/",element:e(Oe,{}),children:[e(I,{path:"/",element:e(Pe,{})}),e(I,{path:"/searching",element:e(ze,{})}),e(I,{path:"/product/:productId",element:e(Re,{})}),e(I,{path:"/shop/:shopId",element:e(Ue,{})})]}),e(I,{path:"/login",element:e(we,{})}),e(I,{path:"/register",element:e(Se,{})})]});xe.render(e(ue.StrictMode,{children:e(he,{children:e(fe,{children:e(De,{})})})}),document.getElementById("root"));
