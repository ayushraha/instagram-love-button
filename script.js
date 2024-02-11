var dil=document.querySelector("i");
var con=document.querySelector("#container");

con.addEventListener("dblclick",function(){
    dil.style.transform= "translate(-50%,-50%) scale(1)"
    dil.style.opacity= 0.8

    setTimeout(function(){
        dil.style.opacity=0;    
    },1000)
    
    setTimeout(function(){
        dil.style.transform= "translate(-50%,-50%) scale(0)"   
    },1000)
})