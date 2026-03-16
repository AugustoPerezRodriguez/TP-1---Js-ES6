function formatearNombre(nombre){
    
    let NombreFormateado;

    let nombreMinuscula = nombre.toLowerCase()
    let Mayuscula = nombre(0).toUpperCase()
    let resto = nombreMinuscula.slice(1);

    NombreFormateado = Mayuscula + resto
    return NombreFormateado;
}

function contarLetras(texto){

    let textoSinEspacios = texto.replaceAll(" ","")
    return textoSinEspacios.length()

}

function maximo(a, b, c){

    let mayor = a;

    if (b > mayor){

        mayor = b;
    }
    if (c > mayor){

        mayor = c;
    }
    return mayor;
}
function validarPassword(password){

    if (password.length < 8) {
        return false;
    }
    let tieneNumero = false;
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= "0" && char <= "9") {
            tieneNumero = true;
            break;
        }
    }
    return tieneNumero;

}
function sumarArray(numeros){

    let total = 0

    for (let i = 0; i < numeros.length(); i++){

        total = total + numeros[i]
    }
    return total
}

function mayorNumero(numeros){
    let numMayor = numeros(0);

    for(let i = 0; i<= numeros.count();i++){
        if(numeros(i)>numMayor)
            numMayor=numeros(i)
    }
    return numMayor
}
//ejercicio 7
function obtenerPares(numeros){
    const pares = numeros.filter(n => n % 2 === 0);

    return pares
}
//ejercicio 8

const usuario = {

 nombre: "Ana",

 edad: 20,

 activo: false

}

function descripcionUsuario(usuario)
{
    return `${usuario.nombre} tiene ${usuario.edad} años`;
}

//ejercicio 9
function activarUsuario(usuario)
{
    usuario.activo = true;
}
//ejercicio 10

const productos = [

{nombre:"Mouse", precio:10},

{nombre:"Teclado", precio:25},

{nombre:"Monitor", precio:200}

]

function calcularTotal(productos)
{

    let total = 0

    for(let i = 0; i < productos.length; i++){
    total += productos[i].precio
    }
    return total
}
console.log(calcularTotal(productos))

//ejercicio 11
function CrearArrayNombres()
{
    const usuarios = [

    {nombre:"Ana", edad:17},

    {nombre:"Juan", edad:25},

    {nombre:"Pedro", edad:30}

    ]

    const nombres = usuarios.map(usuario=>usuario.nombre)
}
//ejercicio 12

function obtenerEdad(){

    const usuarios = [

    {nombre:"Ana", edad:17},

    {nombre:"Juan", edad:25},

    {nombre:"Pedro", edad:30}

    ]

    const mayores = usuarios.filter(function(usuario)
    {
    return usuario.edad >= 18
    })

}

//ejercicio 13

function sumaredades()
{
    const sumaEdades = usuarios.reduce((acumulador, usuario) => acumulador + usuario.edad,0) 

}

//ejercicio 14
const producto = {
nombre: "Notebook",
precio: 1000
}
const {nombre, precio} = producto
console.log(nombre)
console.log(precio)

//ejercicio 15


const productoActualizado = {
  ...producto,
  stock: 5
};

//ejercicio 16

function buscarProducto(lista, nombreBuscado) {
  return lista.find(function(producto) {
    return producto.nombre === nombreBuscado;
  });
}

//ejercicio 17

function devolverProductos50(productos)
{
    return productos.filter(producto => producto.precio > 50)
}
// ejercicio 18
function promedio(numeros) {
  const sumaTotal = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
  }, 0);

  return sumaTotal / numeros.length;
}

//DESAFIO FINAL

const usuarios = [

{id:1, nombre:"Ana", edad:20},

{id:2, nombre:"Juan", edad:15},

{id:3, nombre:"Pedro", edad:30}

]

function devolverUsuarios(usuarios){
    return usuarios
}

function obtenerUsuarioXId(id){
     return usuarios.find(u => u.id === id);
}

function obtenerMayores(){

}

function crearUsuario(nombre, edad){

}