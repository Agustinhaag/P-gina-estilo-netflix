let fila= document.querySelector(".contenedor-carrousel");
let peliculas= document.getElementsByClassName("peliculas");
let flechaizquierda=document.getElementById("flecha-izquierda")
let flechaderecha=document.getElementById("flecha-derecha");

flechaderecha.addEventListener("click", ()=>{
    fila.scrollLeft += fila.offsetWidth ;
     let indicadoractivo= document.querySelector(".indicadores .activo");
if(indicadoractivo.nextSibling){
    indicadoractivo.nextSibling.classList.add("activo");
    indicadoractivo.classList.remove("activo");
}
})

flechaizquierda.addEventListener("click", ()=>{
    fila.scrollLeft -= fila.offsetWidth;
    let indicadoractivo= document.querySelector(".indicadores .activo");
if(indicadoractivo.previousSibling){
    indicadoractivo.previousSibling.classList.add("activo");
    indicadoractivo.classList.remove("activo");
}
})

const numpag= Math.ceil(peliculas.length / 5);
for(let i=0; i<numpag ;i++){
    const indicador= document.createElement('button');  

if(i===0){
    indicador.classList.add("activo");
}    document.querySelector('.indicadores').appendChild(indicador);
indicador.addEventListener("click", (e)=>{
    fila.scrollLeft=i*fila.offsetWidth;
    document.querySelector(".indicadores .activo").classList.remove("activo");
    e.target.classList.add("activo");
})
}
 
let menu = document.getElementById("menu");
let mostrar = document.getElementById("mostrar");
let ocultar = document.getElementById("ocultar");
let enlaces= document.querySelectorAll('.menu a[href^="#"]');
mostrar.addEventListener("click",()=>{
 menu.classList.add("visible");
})
ocultar.addEventListener("click",()=>{
    menu.classList.remove("visible");
   })

enlaces.forEach(enlace=> {
    enlace.addEventListener("click",()=>{
  menu.classList.remove("visible");
   });

})
   


