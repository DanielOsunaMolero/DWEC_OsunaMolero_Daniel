let persona ={};
let persona2 ={
    nombre: "procopio" ,
    edad: 27
}

let persona3 ={
    nombre : "apolinar",
    edad: 44,
    saluda:function(){
        console.log("hola");

        
    },
    despidete(texto){
        console.log(texto);
     },

     pregunta:(texto) => {console.log(texto)}

}

// //with a constructor

// function Perro(tipo,nombre){
//     this.nombre = nombre;
//     this.tipo = tipo;
//     this.ladrar = function(){
//         console.log("guau");
//     }
// }

// new miPerro = new Perro("foxterrier","perico");

// const{raza,...otros}={

//     raza:"podenco",
//     edad: 5, 
//     peso:15

// }

//factoty function

function construyeAnimal(nombre , edad){
    return{
        nombre: nombre,
        edad: edad

    };
}

let miAnimal=construyeAnimal("perico",3);
console.log(miAnimal);
//create a nother way of doing the same
let crearAnimal = (nombre,edad)=>{
    {nombre,edad}
};

let miAnimal2=crearAnimal("fufo",5);
console.log(miAnimal2);

//access obbjetos propierties
//using a dot

console.log(persona2.nombre);
console.log(persona3.saluda);
//añadiendo mas propiedades despues de que el objeto haya sido creado

console.log(persona);
persona.nombre="hilario";
persona["direccion completa"] = "calle pez","nº3";
console.log(persona);

Object.defineProperty(persona,'profesion',{
    value: 'ascensorista',
    writable: false,  //no puede cambiar el valor
    enumerable: false, //no puede ser iterado
    configurable: false, //no puede ser borrado
});

console.log(persona.profesion);