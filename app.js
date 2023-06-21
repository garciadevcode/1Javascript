
//clase para todos los objetos del juego
class item{
    //parametros, instanciar el item
    constructor(nombre, precio, imagen){
        this.nombre=nombre;
        this.precio=precio;
        this.imagen=imagen;
    }
}

//Variables Globales
const mochila_armaduras=[]; //Guardamos todo lo comprado
let oro=1000;   

//Objetos items del Juego

const salud =new item ("Salud",100, "vida.png")
const espada=new item ("Espada", 100, "espada.png")
const escudo=new item ("escudo", 100, "escudo.png")

//elementos

const elementoOro= document.querySelector("#oro");  //vamos a controlar el ID oro y lo vamos a guardar en elementoOro
elementoDeMiMochila= document.querySelector("#mis_elementos");
elementoOro.innerHTML=oro; // tomamos elementoOro y le agregamos lo qye hay en la variable let oro=1000;


//funciones regulares
function comprar(item) {
    mochila_armaduras.push(item);  
    if (oro-item.precio<=0) {
        alert  ("No tienes suficiente oro para comprar " + item.nombre)
    } else{
        oro=oro-item.precio;
        actualizarVisualHTML();     
        
    }    
}

function vender(indice) {
    const item=mochila_armaduras[indice];
    oro=oro+item.precio;
    mochila_armaduras.splice(indice,1);
    actualizarVisualHTML();     
}

function actualizarVisualHTML() {
    elementoDeMiMochila.innerHTML=""; //primero vacio todo
    for (const item of mochila_armaduras){
        let indiceItem=mochila_armaduras.indexOf(item);
        let elementoItem= `
        <li class ="item" onclick="vender(${indiceItem})">
            <img src="img/${item.imagen}">
            </li>`;
        elementoDeMiMochila.innerHTML+=elementoItem;
    }
    elementoOro.innerHTML=oro;
}