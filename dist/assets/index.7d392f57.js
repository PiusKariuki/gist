import{j as F,a as V,R as B,b as I,r as n,u as A,L as U,F as C,f as Z,c as K,d as W,e as Q,g as X,h as Y,i as T,k as v,l as ee,m as re,n as te,o as ae,B as se}from"./vendor.709369a5.js";const le=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=l(r);fetch(r.href,t)}};le();const e=F.exports.jsx,m=F.exports.jsxs,ne=F.exports.Fragment,$=()=>({renderSpinner:s=>e("div",{className:`${s?"flex justify-center items-center":"hidden"}`,children:e("div",{className:"animate-spin rounded-full h-[4rem] w-[4rem] border-b-[0.2rem] \r border-green-40"})})}),oe="http://localhost:5000",P=V.create({baseURL:oe}),me=a=>({setSelf:s,onSet:l})=>{const o=localStorage.getItem(a);o!==null&&s(JSON.parse(o)),l((r,t,c)=>{c?localStorage.removeItem(a):localStorage.setItem(a,JSON.stringify(r))})},z=B({key:"user",default:{},effects_UNSTABLE:[me("gist_user"),({onSet:a})=>a(s=>console.log("current user",s))]}),G=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,ce=/^[a-zA-Z0-9]{6,}$/,ie=()=>{const a=I(z),[s,l]=n.exports.useState(""),[o,r]=n.exports.useState(""),[t,c]=n.exports.useState(!1),[i,u]=n.exports.useState({}),[x,h]=n.exports.useState(""),[d,g]=n.exports.useState("");let S=A();return{errors:i,email:s,password:o,handleChange:p=>{switch(u(""),p.target.name){case"email":l(p.target.value),p.target.value.toLowerCase().match(G)?g(""):g("Invalid email");break;case"pass":r(p.target.value);break}},login:async p=>{var k;p.preventDefault(),c(!0),u({});try{const{data:b}=await P.post("/login",{email:s,password:o});a(b),c(!1),u(""),S("/")}catch(b){u((k=b==null?void 0:b.response)==null?void 0:k.data),c(!1)}},load:t,mailErrors:d,passErrors:x}},de=()=>{const{errors:a,email:s,password:l,handleChange:o,login:r,load:t,mailErrors:c,passErrors:i}=ie(),{renderSpinner:u}=$();return m("div",{className:"flex flex-col bg-transparent w-full items-center",children:[e("p",{className:"text-[1.6rem] text-green-80 font-semibold mb-[6rem]",children:"GIST SHOP"}),m("form",{className:"flex flex-col gap-y-[0.5rem] pt-[3rem] w-[75vw] md:w-[50vw] lg:w-[30vw]",onSubmit:r,children:[e("input",{onChange:o,type:"text",id:"email",name:"email",value:s,placeholder:"Email",className:"w-full border-[0.0625rem]  \r border-black-70 h-[3.25rem] outline-none rounded-[0.25rem]\r font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("p",{className:"text-red-600 font-bold text-[1rem] text-center",children:c||(a==null?void 0:a.emailErr)}),e("input",{onChange:o,type:"password",id:"pass",name:"pass",placeholder:"password",value:l,className:"w-full border-[0.0625rem]  \r border-black-70 h-[3.25rem] outline-none rounded-[0.25rem]\r font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("p",{className:"text-red-600 font-bold text-[1rem] text-center",children:i||(a==null?void 0:a.passErr)}),u(t),m("div",{className:"flex flex-col  mt-[4rem] md:gap-y-[2rem] ",children:[e("button",{disabled:i.length>1||c.length>1,type:"submit",className:"w-full btn bg-red-20  hover:bg-red-20 text-[1.2rem]\r text-white h-[2.8125rem] ",children:"Sign in"}),m("p",{className:"text-[1.2rem] text-center self-center font-semibold tracking-[0.02rem]\r mt-[2rem] md:mt-[0rem]",children:["Need an account?",e("span",{className:"text-blue-600 px-[1rem]",children:e(U,{to:"/register",children:"Signup"})})]})]})]})]})},ue=()=>{const[a,s]=n.exports.useState(""),[l,o]=n.exports.useState(""),[r,t]=n.exports.useState(""),[c,i]=n.exports.useState(""),[u,x]=n.exports.useState(""),[h,d]=n.exports.useState(""),[g,S]=n.exports.useState(""),[N,y]=n.exports.useState(""),[p,k]=n.exports.useState(""),[b,L]=n.exports.useState(!1),[D,E]=n.exports.useState({}),J=I(z);return{mailError:a,passError:l,email:r,password:c,fname:u,lname:h,bio:g,userName:N,handleChange:f=>{switch(E(""),f.target.id){case"email":t(f.target.value),f.target.value.toLowerCase().match(G)?s(""):s("Invalid email");break;case"pass":i(f.target.value),f.target.value.match(ce)?o(""):o("Password should be atleast six characters long");break;case"fname":x(f.target.value);break;case"lname":d(f.target.value);break;case"userName":y(f.target.value);break;case"bio":S(f.target.value);break;case"phone":k(f.target.value);break}},register:async f=>{var O,j;f.preventDefault(),L(!0),E({});let _={email:r,password:c,firstName:u,lastName:h,userName:N,bio:g,phonenumber:p};try{const{data:w}=await P.post("/register",_);J(w),L(!1),E("")}catch(w){((O=w.response.data)==null?void 0:O.code)===11e3&&s("This email is already registered"),E((j=w==null?void 0:w.response)==null?void 0:j.data),L(!1)}},load:b,errors:D,phone:p}},xe=()=>{var N,y;const{mailError:a,passError:s,email:l,password:o,fname:r,lname:t,bio:c,userName:i,handleChange:u,register:x,load:h,errors:d,phone:g}=ue(),{renderSpinner:S}=$();return m("div",{className:"flex flex-col md:flex-row gap-x-[2.5rem]",children:[e("div",{className:"hidden lg:flex lg:min-w-[25%] bg-green-60 lg:min-h-screen"}),m("form",{className:"flex flex-col gap-y-[0.1rem] w-full lg:w-[50%] py-[3rem] px-[1rem]",onSubmit:x,children:[e("p",{className:"text-[2.2rem] text-blue-20 font-semibold mb-[1.5rem] justify-center",children:"GIST SHOP"}),e("p",{className:"text-[1rem] font-medium",children:"Create your account"}),e("label",{htmlFor:"email",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"Email Address"}),e("input",{onChange:u,value:l,required:!0,type:"text",id:"email",name:"email",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem]  font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("p",{className:"text-red-600 font-bold text-[1rem] text-center",children:a||((N=d==null?void 0:d.email)==null?void 0:N.message)||d.length>1&&d}),e("label",{htmlFor:"fname",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"First Name"}),e("input",{onChange:u,value:r,required:!0,type:"text",id:"fname",name:"fname",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("label",{htmlFor:"lname",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"Last Name"}),e("input",{onChange:u,value:t,required:!0,type:"text",id:"lname",name:"lname",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("label",{htmlFor:"userName",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"userName"}),e("input",{onChange:u,value:i,required:!0,type:"text",id:"userName",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("label",{htmlFor:"bio",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"Bio"}),e("input",{onChange:u,value:c,required:!0,id:"bio",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("label",{htmlFor:"phone",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"Phone Number"}),e("input",{onChange:u,value:g,required:!0,id:"phone",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("label",{htmlFor:"pass",className:"font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] \r mb-[0.5rem]",children:"Password"}),e("input",{onChange:u,value:o,required:!0,type:"password",id:"pass",name:"pass",className:"border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20\r rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"}),e("p",{className:"text-red-600 font-bold text-[1rem] text-center",children:s||((y=d==null?void 0:d.password)==null?void 0:y.message)}),e("div",{className:"mt-[1rem]",children:S(h)}),e("button",{disabled:s.length>1||a.length>1||h,type:"submit",className:"btn py-[0.5rem] mt-[3rem] md:max-w-[7rem] text-white text-[1.2rem]\r font-bold ",children:"Submit"}),m("p",{className:"text-[1rem] text-center md:text-left  font-semibold mt-[2rem]\r tracking-[0.02rem]",children:["Already have an account?",e("span",{className:"text-blue-600 px-[1rem]",children:e(U,{to:"/",children:"Login"})})]})]})]})},he=()=>m("div",{className:"flex flex-col md:flex-row py-[2.5rem] px-[2rem] md:gap-x-[2rem]",children:[m("div",{className:"flex flex-col order-2 md:order-1 self-center",children:[m("p",{className:"uppercase text-blue-20 font-[900] text-[2rem]",children:["Welcome to GIST-SHOP.",e("br",{}),e("span",{className:"text-black-40",children:"Social Shopping Platform."})]}),e("p",{className:"text-[1.2rem] mt-[1.5rem]",children:"An always live social shopping network, with your favorite brands and shops."}),e("button",{className:"bg-red-20 w-[9rem] rounded-md py-[1rem] px-[1rem] text-white\r font-[900] self-center mt-[1.4rem] hover:bg-red-600 hover:scale-110 trasition ease-in-out\r duration-300",children:"Join For Free"})]}),e("div",{className:"flex  bg-hero w-[80vw] h-[30vh] bg-center bg-cover bg-no-repeat order-1\r md:order-2 md:min-w-[55vw] md:h-[45vh] lg:h-[55vh] self-center rounded-xl"})]}),R=()=>{const[a,s]=n.exports.useState([]),[l,o]=n.exports.useState({}),[r,t]=n.exports.useState(""),[c,i]=n.exports.useState(!1);return{getProducts:async()=>{i(!0);try{let{data:h}=await P.get("/products");s(h),i(!1)}catch(h){i(!1),t(h)}},products:a,errors:r,load:c,getProductById:async h=>{i(!0);try{let{data:d}=await P.get(`/products/products/${h}`);o(d),i(!1)}catch(d){i(!1),t(d)}},product:l}},fe=({name:a,price:s,img:l,userName:o,id:r})=>{let t=A();return m("div",{className:"flex flex-col p-[1rem] bg-white hover:border-[0.2rem] hover:border-gray-200\r border-[0.2rem] rounded-2xl border-white hover:shadow-2xl relative",onClick:()=>t(`/product/${r}`,{replace:!0}),children:[m("p",{className:"text-blue-20 font-[900] text-[1.4rem] mb-[1rem]",children:[a,e("br",{}),e(C,{icon:Z,size:"1x",color:"blue"}),"\xA0\xA0\xA0",e("span",{className:"",children:o})]}),e("div",{className:"flex relative w-[70vw] h-[40vh] md:w-[25rem] bg-no-repeat bg-center bg-cover rounded-xl\r border-[0.1rem]",style:{backgroundImage:`url(/img/${l})`},children:m("p",{className:"absolute bottom-[4%] right-[10%] text-white font-[600] text-[1.2rem]\r bg-black-80 px-[1rem]",children:["$ ",s]})})]})},pe=()=>{const{getProducts:a,products:s,errors:l,load:o}=R();return n.exports.useEffect(()=>{a()},[]),m("div",{className:"flex flex-col py-[3rem] px-[2rem] h-full w-screen",children:[e("p",{className:"text-black-40 text-[2.2rem] font-[600] mb-[2rem]",children:"Recommended products"}),e("div",{className:"scroller flex flex-row gap-x-8 overflow-x-auto w-screen",children:s.map((r,t)=>{var c;return e(fe,{name:r==null?void 0:r.name,userName:(c=r==null?void 0:r.ownerId)==null?void 0:c.userName,img:r==null?void 0:r.images[0],price:r==null?void 0:r.price,id:r==null?void 0:r._id},t)})})]})},H=()=>{const[a,s]=n.exports.useState([]),[l,o]=n.exports.useState(""),[r,t]=n.exports.useState(!1);return{shops:a,getShops:async()=>{t(!0);try{let{data:i}=await P.get("/shop");s(i),t(!1)}catch(i){t(!1),o(i)}},errors:l,load:r}},ge=({name:a,userName:s,img:l})=>m("div",{className:"flex relative w-[25rem] h-[40vh] bg-no-repeat bg-center bg-cover flex-shrink-0\r border-2 rounded-2xl hover:shadow-2xl",style:{backgroundImage:`url(/img/${l})`},children:[m("p",{className:"absolute top-[4%] right-[80%] text-black-20 font-[600] text-[1.2rem]",children:[e("span",{className:"text-black-40",children:"by"}),"\xA0\xA0",s]}),e("p",{className:"absolute bottom-[4%] right-[40%] text-blue-20 font-[900] text-[1.4rem]",children:a})]});const be=()=>{const{shops:a,getShops:s,errors:l,load:o}=H();return n.exports.useEffect(()=>{s()},[]),m("div",{className:"flex flex-col py-[3rem] px-[2rem] bg-teal-50",children:[e("p",{className:"text-black-40 text-[2.2rem] font-[600] mb-[2rem]",children:"Popular shops"}),e("div",{className:"scroller flex flex-row gap-x-8 overflow-x-auto ",children:a.length>0&&a.map((r,t)=>e(ge,{name:r.name,userName:r.userId.userName,img:r.image},t))})]})},q=B({key:"search",default:""}),Ne=()=>{const[a,s]=n.exports.useState(""),l=I(q);return{handleChange:r=>{s(r.target.value),l(r.target.value)},input:a,setInput:s}},M=()=>{const[a,s]=n.exports.useState(!1);let l=A();const o=I(q),{handleChange:r,input:t,setInput:c}=Ne();return m("div",{className:"flex flex-row flex-nowrap  py-[1rem] px-[0.5rem] md:px-[2rem] \r gap-x-[1rem]",children:[e("p",{className:"hidden md:flex text-blue-20 text-[1.6rem] font-semibold",children:"Gist-Shop"}),m("div",{className:"relative",children:[e("input",{onFocus:()=>{s(!0),l("/search")},onBlur:()=>{},onChange:r,className:`${a?"w-[90vw] md:w-[35vw] lg:w-[45vw] xl:w-[55vw] border-2 relative shadow-lg rounded-md px-[2rem] h-[2.6rem] outline-none":" border-2 relative shadow-lg rounded-md px-[2rem] h-[2.6rem] outline-none md:w-[35vw] lg:w-[45vw] xl:w-[55vw]"}`,placeholder:"Search Gist-Shop",value:t}),e(C,{icon:K,size:"1x",color:"red",className:`${a?"absolute right-[17%] top-[30%]":"hidden"}`,onClick:()=>{o(""),c(""),s(!1)}}),e(C,{icon:W,size:"1x",color:"blue",className:`${a?"absolute right-[5%] top-[30%]":"hidden md:absolute right-[5%] top-[30%]"}`})]}),e("button",{className:"hidden md:flex w-[8rem] self-center border-2 border-blue-20 text-[1.2rem]\r hover:bg-blue-400 rounded-md text-center hover:text-white justify-around py-[0.3rem] \r font-[600] ml-auto",onClick:()=>l("/login"),children:"Sign in"}),e(C,{icon:Q,color:"blue",className:`${a?"hidden md:flex md:ml-[2rem] self-center fa-lg md:fa-3x":"self-center md:ml-[2rem]  fa-lg md:fa-3x"}`}),e(C,{icon:X,color:"blue",className:`${a?"hidden md:flex md:ml-[2rem] self-center fa-lg md:fa-3x":"self-center md:ml-[2rem] fa-lg md:fa-3x"}`})]})},we=({name:a,img:s,price:l,userName:o,id:r})=>{let t=A();return m("div",{className:"flex flex-col rounded-2xl shadow-lg  border-[0.2rem] px-[0.3rem] py-[0.4rem]",onClick:()=>t(`/product/${r}`),children:[e("div",{style:{backgroundImage:`url(/img/${s})`},className:"bg-cover bg-center bg-no-repeat w-[14rem] h-[12rem] rounded-2xl"}),e("p",{className:"text-blue-20 font-[900] text-[1.4rem] mb-[1rem] max-w-[10rem]",children:a}),m("p",{className:"text-black-40 font-[900] text-[1.4rem] mb-[1rem]",children:["by:\xA0\xA0\xA0",o]}),m("p",{className:"text-red-20 font-[900] text-[1.4rem] mb-[1rem]",children:["$:\xA0\xA0\xA0",l]})]})},ve=({name:a,img:s,userName:l})=>m("div",{className:"flex flex-col rounded-2xl shadow-lg  border-[0.2rem] p-[2rem]\r flex-shrink-0",children:[e("div",{style:{backgroundImage:`url(/img/${s})`},className:"bg-contain bg-center bg-no-repeat w-[80vw] md:w-[40vw] h-[12rem] rounded-2xl"}),e("p",{className:"text-blue-20 font-[900] text-[1.4rem] mb-[1rem]",children:a}),m("p",{className:"text-black-40 font-[900] text-[1.4rem] mb-[1rem]",children:["by:\xA0\xA0\xA0",l]})]}),Se=()=>{const[a,s]=n.exports.useState([]),[l,o]=n.exports.useState([]),r=Y(q),{getProducts:t,products:c}=R(),{shops:i,getShops:u}=H();return n.exports.useEffect(()=>{t(),u()},[]),n.exports.useEffect(()=>{c.length>0&&s(c.filter(x=>x.name.toLowerCase().includes(r.toLowerCase()))),i.length>0&&o(i.filter(x=>x.name.toLowerCase().includes(r.toLowerCase())))},[r]),m("div",{className:"flex flex-col px-[2rem] md:px-[3rem]",children:[a.length>0?e("p",{className:"text-black-40 font-[800] text-[1.6rem] md:text-[2rem] my-[2rem]",children:"Products"}):null,e("div",{className:"scroller flex flex-row overflow-x-auto gap-x-[2rem]",children:a.length>0&&a.map((x,h)=>e(we,{price:x.price,img:x.images[0],userName:x.ownerId.userName,name:x.name,id:x._id},h))}),l.length>0?e("p",{className:"text-black-40 font-[800] text-[1.6rem] md:text-[2rem] my-[2rem]",children:"Shops"}):null,e("div",{className:"flex flex-row flex-wrap items-center gap-[2rem]\r ",children:l.length>0&&l.map((x,h)=>e(ve,{img:x.image,name:x.name,userName:x.userId.userName},h))})]})},ye=()=>m(ne,{children:[e(he,{}),e(be,{}),e(pe,{})]}),ke=()=>m("div",{className:"flex flex-col flex-nowrap overflow-x-clip",children:[e(M,{}),m(T,{children:[e(v,{index:!0,element:e(ye,{})}),e(v,{path:"/search/*",element:e(Se,{})})]})]}),Ce=()=>{var h;const[a,s]=n.exports.useState(0),[l,o]=n.exports.useState(0),{getProductById:r,product:t,errors:c,load:i}=R(),{renderSpinner:u}=$();let{productId:x}=ee();return n.exports.useEffect(()=>{r(x)},[]),m("div",{className:"flex flex-col md:flex-row flex-wrap px-[2rem] py-[1rem]\r justify-around gap-y-[2.2rem]",children:[e(M,{}),u(i),m("div",{className:"flex flex-col gap-y-[2rem]",children:[e("p",{className:"text-left text-black-40 font-[600] text-[2rem]",children:t==null?void 0:t.name}),((h=t==null?void 0:t.images)==null?void 0:h.length)>0?e("div",{style:{backgroundImage:`url(/img/${t.images[a]})`},className:"bg-contain bg-center bg-no-repeat w-[60vw] h-[20vh] "}):null,e("p",{className:"text-left text-red-20 font-[600] text-[1.4rem]",children:(t==null?void 0:t.quantity)===0?"Out of stock":t.price===void 0?"":"$"+(t==null?void 0:t.price)}),m("div",{className:"flex flex-row gap-x-[1rem]",children:[m("div",{className:"inline-flex rounded-md shadow-sm border-[0.1rem] border-black-40",children:[e("button",{onClick:()=>o(d=>d===0?0:d-1),disabled:t.quantity===0,type:"button",className:"px-[1rem] py-[1.3rem] font-[600] rounded-l-lg text-black-40\r ",children:"-"}),e("button",{disabled:t.quantity===0,type:"button",className:"px-[1rem] py-[1.3rem] font-[600] text-black-40 border-black-40\r border-x-[0.1rem]",children:l}),e("button",{onClick:()=>o(d=>d===(t==null?void 0:t.quantity)?d:d+1),disabled:t.quantity===0,type:"button",className:"px-[1rem] py-[0rem] font-[600] text-black-40 rounded-r-lg \r ",children:"+"})]}),e("button",{className:"bg-red-20 px-[2rem] py-[0.1rem] text-white font-[600] text-[1rem]\r w-[12rem] rounded-lg",children:"Add to Cart"})]})]})]})},Pe=()=>m(T,{children:[e(v,{path:"/",element:e(ke,{})}),e(v,{path:"/login",element:e(de,{})}),e(v,{path:"/register",element:e(xe,{})}),e(v,{path:"/product/:productId",element:e(Ce,{})})]});re.render(e(te.StrictMode,{children:e(ae,{children:e(se,{children:e(Pe,{})})})}),document.getElementById("root"));
