import{d as e,m as a,o as s,c as t,p as c,i as d,a as n}from"./app.a9628eaa.js";c("data-v-20a09abe");const o={class:"buy-sell-ads"},p=n("div",{class:"bsa-cpc"},null,-1);d();var i=e({expose:[],props:{code:{type:String,required:!0},placement:{type:String,required:!0}},setup(e){const{code:c,placement:d}=e,n="bsa-cpc-script";function i(){"undefined"!=typeof _bsa&&_bsa&&_bsa.init("default",c,`placement:${d}`,{target:".bsa-cpc",align:"horizontal",disable_css:"true"})}return a((()=>{if(document.getElementById(n))i();else{const e=document.createElement("script");e.id=n,e.src="//m.servedby-buysellads.com/monetization.js",document.head.appendChild(e),e.onload=()=>{i()}}})),(e,a)=>(s(),t("div",o,[p]))}});i.__scopeId="data-v-20a09abe";export default i;
