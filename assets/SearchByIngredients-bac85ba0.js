import{_ as i,o,c as l,b as n,t as _,a as g,r as h,h as f,v as p,e as c,F as x,d as I,f as v}from"./index-534b582f.js";const b={props:{smallIng:Object}},k={class:"w-full p-4 bg-white rounded cursor-pointer hover:scale-105 duration-500 shadow-2xl"},B={class:"font-bold text-xl"};function y(a,s,r,e,d,m){return o(),l("div",k,[n("h1",B,_(r.smallIng.strIngredient),1)])}const S=i(b,[["render",y]]),w={components:{SmallBlocksVue:S},setup(){const a=g();return a.getIngredientsMeal(),{mainone:a}}},V={class:"container mx-auto px-5"},$=n("h1",{class:"text-4xl font-bold text-orange-500 mt-10 mb-5"},"Ingredients",-1),M={class:"mb-10"},C={key:0,class:"text-center w-full"},D=n("h1",{class:"text-orange-500 font-bold"},"Loading...",-1),F=[D],L={key:1,class:"grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5"};function N(a,s,r,e,d,m){const u=h("SmallBlocksVue");return o(),l("div",null,[n("main",null,[n("div",V,[$,n("div",M,[f(n("input",{type:"text",class:"w-full p-3 focus:outline-orange-500 focus:outline-4 focus:outline border-none rounded-xl",placeholder:"Search By Meal...",onKeypress:s[0]||(s[0]=(...t)=>e.mainone.filtertheIng&&e.mainone.filtertheIng(...t)),"onUpdate:modelValue":s[1]||(s[1]=t=>e.mainone.searchIngredient=t)},null,544),[[p,e.mainone.searchIngredient]])]),e.mainone.alltheIngr.length==0?(o(),l("div",C,F)):c("",!0),e.mainone.alltheIngr.length>0?(o(),l("div",L,[(o(!0),l(x,null,I(e.mainone.restoreitall,t=>(o(),v(u,{key:t,smallIng:t},null,8,["smallIng"]))),128))])):c("",!0)])])])}const E=i(w,[["render",N]]);export{E as default};