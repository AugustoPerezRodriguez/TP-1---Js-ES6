// Ejercicio 1
function formatearNombre(nombre){
    let nombreMinuscula = nombre.toLowerCase()
    let mayuscula = nombre[0].toUpperCase()
    let resto = nombreMinuscula.slice(1);

    return mayuscula + resto
}

console.log("Ej1:", formatearNombre("JUAN")) 
console.log("Ej1:", formatearNombre("mARIA")) 


// Ejercicio 2
function contarLetras(texto){
    let textoSinEspacios = texto.replaceAll(" ","")
    return textoSinEspacios.length
}

console.log("Ej2:", contarLetras("hola mundo")) 


// Ejercicio 3
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

console.log("Ej3:", maximo(5, 10, 3)) 


// Ejercicio 4
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

console.log("Ej4:", validarPassword("abc12345")) 
console.log("Ej4:", validarPassword("abcdefg")) 


// Ejercicio 5
function sumarArray(numeros){
    let total = 0

    for (let i = 0; i < numeros.length; i++){
        total = total + numeros[i]
    }
    return total
}

console.log("Ej5:", sumarArray([3,5,10]))


// Ejercicio 6
function mayorNumero(numeros){
    let numMayor = numeros[0];

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > numMayor){
            numMayor = numeros[i]
        }
    }
    return numMayor
}

console.log("Ej6:", mayorNumero([4,7,1,20,3])) 


// Ejercicio 7
function obtenerPares(numeros){
    return numeros.filter(n => n % 2 === 0);
}

console.log("Ej7:", obtenerPares([1,2,3,4,5,6])) 


// Ejercicio 8
const usuario = {
 nombre: "Ana",
 edad: 20,
 activo: false
}

function descripcionUsuario(usuario){
    return `${usuario.nombre} tiene ${usuario.edad} años`;
}

console.log("Ej8:", descripcionUsuario(usuario))


// Ejercicio 9
function activarUsuario(usuario){
    usuario.activo = true;
}

activarUsuario(usuario)
console.log("Ej9:", usuario) 


// Ejercicio 10
const productos = [
{nombre:"Mouse", precio:10},
{nombre:"Teclado", precio:25},
{nombre:"Monitor", precio:200}
]

function calcularTotal(productos){
    let total = 0

    for(let i = 0; i < productos.length; i++){
        total += productos[i].precio
    }
    return total
}

console.log("Ej10:", calcularTotal(productos)) 


// Ejercicio 11
function CrearArrayNombres(){
    const usuarios = [
    {nombre:"Ana", edad:17},
    {nombre:"Juan", edad:25},
    {nombre:"Pedro", edad:30}
    ]

    return usuarios.map(usuario => usuario.nombre)
}

console.log("Ej11:", CrearArrayNombres())


// Ejercicio 12
function obtenerEdad(){
    const usuarios = [
    {nombre:"Ana", edad:17},
    {nombre:"Juan", edad:25},
    {nombre:"Pedro", edad:30}
    ]

    return usuarios.filter(usuario => usuario.edad >= 18)
}

console.log("Ej12:", obtenerEdad())


// Ejercicio 13
function sumaredades(){
    const usuarios = [
    {nombre:"Ana", edad:17},
    {nombre:"Juan", edad:25},
    {nombre:"Pedro", edad:30}
    ]

    return usuarios.reduce((acc, u) => acc + u.edad, 0)
}

console.log("Ej13:", sumaredades())


// Ejercicio 14
const producto = {
nombre: "Notebook",
precio: 1000
}

const {nombre, precio} = producto
console.log("Ej14:", nombre, precio)


// Ejercicio 15
const productoActualizado = {
  ...producto,
  stock: 5
}

console.log("Ej15:", productoActualizado)


// Ejercicio 16
function buscarProducto(lista, nombreBuscado) {
  return lista.find(producto => producto.nombre === nombreBuscado);
}

console.log("Ej16:", buscarProducto(productos, "Mouse"))


// Ejercicio 17
function devolverProductos50(productos){
    return productos.filter(producto => producto.precio > 50)
}

console.log("Ej17:", devolverProductos50(productos))


// Ejercicio 18
function promedio(numeros) {
  const sumaTotal = numeros.reduce((acc, num) => acc + num, 0);
  return sumaTotal / numeros.length;
}

console.log("Ej18:", promedio([10,8,6,9])) 


// DESAFÍO FINAL
const usuariosAPI = [
{id:1, nombre:"Ana", edad:20},
{id:2, nombre:"Juan", edad:15},
{id:3, nombre:"Pedro", edad:30}
]

function obtenerUsuarios(){
    return usuariosAPI
}

function obtenerUsuarioXId(id){
    return usuariosAPI.find(u => u.id === id);
}

function obtenerMayores(){
    return usuariosAPI.filter(usuario => usuario.edad >= 18)
}

function crearUsuario(nombre, edad){
    const nuevoUsuario = {
        id: usuariosAPI.length + 1,
        nombre: nombre,
        edad: edad
    }
    usuariosAPI.push(nuevoUsuario)
}

// TESTS
console.log("Desafío 1:", obtenerUsuarios())
console.log("Desafío 2:", obtenerUsuarioXId(2))
console.log("Desafío 3:", obtenerMayores())

crearUsuario("Lucas", 22)
console.log("Desafío 4:", usuariosAPI)