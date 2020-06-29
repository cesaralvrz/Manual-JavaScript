# Manual-JavaScript

No necesitamos instalar JavaScript, todos los navegadores puede correr JS. Solo un navegador y un editor de texto.

## HTML con Script JS

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Manual JS</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Script JS -->
  <script src="script.js"></script>
</body>
</html>
```


## Comentarios
Comentario de una línea:
`// Comentario`

Comentario de varias líneas:
```javascript
/* Líneas
de Comentarios
*/ 
```


## Hola Mundo
Primer “Hola Mundo” en la consola:
```javascript
console.log("Hola Mundo")
```


## Tipos de Datos y Variables
Tipos de Datos:
* undefined
* null
* boolean
* string
* symbol
* number
* object

Hay tres formas de declarar una variable:
1. var (es intercambiable y se puede utilizar en todo tu código)
`var edad = 22`

2. let (solo se será utilizado en el sitio donde se declara)
`let nombre = Carlos `

3. const (se mantiene fijo el valor y no se puede cambiar)
`const pi = 3.14`


### Diferencia entre declarar variables y asignarlas

Declarar:
`var a`

Asignar
`a = 22`

Asignar y declarar:
`var b = 23`


## Operaciones y Números
* Suma (+)
* Resta (-)
* Multiplicación (*)
* División (/)
* Resto (%)

```javascript
var sum = 10 + 10;
console.log(sum)
// 20
```

### Incrementar un Valor

```javascript
var miEdad = 22;
miEdad++;
console.log(miEdad)
// 23
```

### Disminuir un Valor

```javascript
var miEdad = 22;
miEdad--;
console.log(miEdad)
// 21
```


## Simplificar Operaciones (Shortcuts)

```javascript
var a = 3;
/* Para sumar un valor a 'a'
en vez de escribir a = a + 12 
Hacemos esto: */
var += 12;
```


## Variables “String” (Cadenas de Caracteres)
Las variables “string” se declaran usando comillas (‘’ o “”).

```javascript
var nombre = 'Marco'
var apellido = "Polo"
```

### Concatenación de Strings

Para juntas dos strings utilizamos el símbolo ‘+’:

```javascript
var cadena1 = "Hola" + " Juan"
console.log(cadena1)
// Hola Juan
```

```javascript
var cadena1 = "Hola"
cadena1 += " Juan"
console.log(cadena1)
// Hola Juan
```

```javascript
var cadena1 = "Hola" 
var cadena2 = " "
var cadena3 = "Juan"

var cadenaFinal = cadena1 + cadena2 + cadena3

console.log(cadenaFinal)
// Hola Juan
```


### Longitud de un String

```javascript
var marcaLongitud = 0
var marca = "Nike"

marcaLongitud = marca.length;

console.log(marcaLongitud)
// 4
```


## Arrays

```javascript
var primerArray = ["Juan", 22]
```


### Nested Arrays

Arrays dentro de un Array:

```javascript
var nest = [["verde", 34], ["rojo", 56]]
```


### Acceder a los valores de un Array con Indexes

```javascript
var numero = [50, 60, 70];
var primerNumero = numero[0];

console.log(primerNumero)
// 50
```


### Modificar los valores de un Array

```javascript
var numero = [50, 60, 70];
numero[0] = 34;
// el primer número ha cambiado de 50 a 34
```


### Modificar los valores de un Array Multidimensional

```javascript
var nest = [["verde", 34], ["rojo", 56]];
var color = next [1][0];
// rojo
```


### Manipulación de Arrays con “Push”

Agregar otro Array a un Array multidimensional.

```javascript
var animales = [["perro", "gato"], ["tortuga", "serpiente"]];
animales.push(["gallina", "paloma"]);
// [[perro, gato], [tortuga, serpiente], ["gallina", "paloma"]]
```


### Manipulación de Arrays con “Unshift”

La misma función que “Push” solo que en esta caso introduce el nuevo valor al principio del Array.

```javascript
var animales = [["perro", "gato"], ["tortuga", "serpiente"]];
animales.unshift(["gallina", "paloma"]);
// [["gallina", "paloma"], [perro, gato], [tortuga, serpiente]]
```


### Manipulación de Arrays con “Pop”

Para eliminar el primer valor adentro de un Array y asignarla a una nueva variable.

```javascript
var numeros = [1, 2, 3]
var quitarNumero = numeros.pop()
// quitarNumero ahora es igual a "3" y numero es igual a [1, 2]
```


### Manipulación de Arrays con “Shift”

La función es la misma que con “Pop” solo que ahora elimina el primer valor del Array.

```javascript
var numeros = [1, 2, 3]
var quitarNumero = numeros.shift()
// quitarNumero ahora es igual a "1" y numero es igual a [2, 3]
```


## Funciones

```javascript
function saludar(){
    console.log("Hola, Mundo")
}

saludar();
// Hola, Mundo
```


### Pasando Valores a una Función

```javascript
function resta(a, b){
	console.log(a - b);
}
resta(10, 9);
// 1
```

```javascript
function suma(num){
    return num + 3;
}

console.log(suma(7));
// 10
```


### Scopes y Funciones

Al declarar variables fuera de funciones, estas sirven en cualquiera. Mientras que cuando se declaran dentro de una función, estas solo funcionan dentro de la función en la que fueron declaradas. 

Para declarar variables adentro de una función y que funcionen de manera global no hay poner ningún prefijo antes de declarar la variable:
`numero = 5`

```javascript
var global = 5

function fun1(){
	var noEsGlobal = 2
	otraGlobal = 3
}
```

NOTA: Si declaramos una variable sobre la función que ya existe con el mismo nombre, esta será la que usará la función.


## Condicionales If

Comparadores:
* Igualdad (==)
* Igualdad Estricta (===) -> necesitan ser el mismo tipo de variable.
* Mayor (>)
* Mayor o Igual (>=)
* Menor (<)
* Menor o Igual (<=)
* Diferente (!=)
* Diferente Estricto (!==)
* Y (&&)
* O ( || )

```javascript
function comparacion(num){
    if(num < 0){
        return 'Número negativo'
    }
    else if(num > 0 && num <= 9){
        return 'Número natural'
    }
    else{
        return 'Número positivo'
    }
}

console.log(comparacion(10));
// Número positivo
```


## Switch Statement

```javascript
function casos(color){
    var respuesta = "";
    switch(color){
        case 1:
            respuesta = "verde";
            break;
        case 2:
            respuesta = "azul";
            break;
        case 3:
            respuesta = "rojo";
            break;
    }
    return respuesta;
} 

console.log(casos(2));
// azul
```


### Opción “default” 

```javascript
function casos(color){
    var respuesta = "";
    switch(color){
        case 1:
            respuesta = "verde";
            break;
        case 2:
            respuesta = "azul";
            break;
        case 3:
            respuesta = "rojo";
            break;
        default:
            respuesta = "Otro color";
            break;
    }
    return respuesta;
} 

console.log(casos(4));
// Otro color
```


### Multiples Casos

```javascript
function casos(nivel){
    var respuesta = "";
    switch(nivel){
        case 1:
        case 2:
        case 3:
            respuesta = "bajo";
            break;
        case 4:
        case 5:
        case 6:
            respuesta = "medio";
            break;
        case 7:
        case 8:
        case 9:
            respuesta = "alto";
            break;
        default:
            respuesta = "Otro nivel";
            break;
    }
    return respuesta;
} 

console.log(casos(4));
// medio
```


## Booleans en una Función
 En vez de escribir varias condiciones si hacemos una comparación (sin paréntesis) no devolverá si el valor es verdadero o falso.

```javascript
function verdaderoFalso(a, b){
    return a > b
} 

console.log(verdaderoFalso(2, 3));
// false
```


## Objetos (Objects)

Los objetos son similares a los arrays, solo que estos se diferencian en vez de usar “indexes” usan propiedades.

```javascript
    "nombre": "Ben",
    "raza": "Labrador",
    "color": "Negro",
    "edad": 7
};
```


### Asignar a variables los valores de un Objeto

```javascript
var miPerro = {
    "nombre": "Ben",
    "raza": "Labrador",
    "color": "Negro",
    "edad": 7
};

var nombrePerro = miPerro.nombre;
var razaPerro = miPerro.raza;
```


### Re-asignar los valores de un Objeto

```javascript
var miPerro = {
    "nombre": "Ben",
    "raza": "Labrador",
    "color": "Negro",
    "edad": 7
};

miPerro.nombre = "Tom";
console.log(miPerro)
// nombre: "Tom"
```


### Agregar una nueva propiedad a un Objeto

```javascript
var miPerro = {
    "nombre": "Ben",
    "raza": "Labrador",
    "color": "Negro",
    "edad": 7
};

miPerro.macho = true;
console.log(miPerro)
// macho = true
```


### Eliminar una propiedad de un Objeto

```javascript
var miPerro = {
    "nombre": "Ben",
    "raza": "Labrador",
    "color": "Negro",
    "edad": 7
};

miPerro.macho = true;
delete miPerro.macho;
```


### Verificar si un Objeto tiene una propiedad

Para realizar esto utilizamos “.hasOwnProperty”.

```javascript
var miPerro = {
    "nombre": "Ben",
    "raza": "Labrador",
    "color": "Negro",
    "edad": 7
};

function verificar(valor){
    if(miPerro.hasOwnProperty(valor)){
        return miPerro[valor];
    }
    else{
        return "No existe";
    }
}

console.log(verificar("edad"))
// 7
```



### Acceder a los valores de Objetos dentro de otro Objetos

```javascript
var almacenamiento = {
    "coche": {
        "adentro": {
            "guantera": "mapas",
            "asiento": "guantes",
        },
    } 
};

var miGuantera = almacenamiento.coche.adentro["guantera"];
console.log(miGuantera)
// mapas
```


### Accediendo a Arrays dentro de un Array

Tenemos un array, con dos objetos dentro y cada uno de estos tiene un array.

```javascript
var misPlantas = [
    {
        "tipo": "plata",
        "lista":[
            "rosa",
            "tulipan",
            "girasol",
        ]
    },
    {
        "tipo": "árbol",
        "lista":[
            "roble",
            "pino",
        ]
    }
]

var primerArbol = misPlantas[1].lista[0];
console.log(primerArbol)
// roble
```


### Ejercicio

```javascript
var coleccion = {
    "2345": {
        "album": "Viva",
        "artista": "John",
        "canciones": [
            "Soy yo",
            "El amante"
        ]
    },
    "1457": {
        "album": "Loca",
        "artista": "Maria",
        "canciones": [
            "La mejor soy yo",
            "El desenlace"
        ]
    }
}
// Una copia de la colección para hacer pruebas
var copiaDeColeccion = JSON.parse(JSON.stringify(coleccion));

function actualizarColeccion(id, propiedad, valor){
    if( valor === ""){
        delete [id][propiedad];
    } else if (propiedad === "canciones"){
        coleccion[id][propiedad] = coleccion[id][propiedad] || [];
        coleccion[id][propiedad].push(valor);
    } else{
        coleccion[id][propiedad] = valor;
    }
    return coleccion;
}

actualizarColeccion("2345", "canciones", "La canción")
// agregamos "La canción" a lista de canciones
console.log(actualizarColeccion("1457", "artista", "Julia"));
// actualizamos el nombre de "Maria" a "Julia"
```


## Bucles While

```javascript
var arrayDeNumero = [];

var x = 0;

while (x < 5){
    arrayDeNumero.push(x);
    x++;
}

console.log(arrayDeNumero);
// 0, 1, 2, 3, 4
```


## Bucle For

```javascript
var arrayDeNumero = [];

for(var i = 0; i < 5; i++){
    arrayDeNumero.push(i)
}

console.log(arrayDeNumero);
// 0, 1, 2, 3, 4
```


```javascript
var arrayDeNumero = [];

for(var i = 0; i < 10; i+= 2){
    arrayDeNumero.push(i)
}

console.log(arrayDeNumero);
// 0, 2, 4, 6, 8
```


```javascript
var arrayDeNumero = [];

for(var i = 10; i > 1; i-= 2){
    arrayDeNumero.push(i)
}

console.log(arrayDeNumero);
// 10, 8, 6, 4, 2
```


### Bucle for por los valores de un Array

```javascript
var arrayDeNumeros = [9, 10, 11, 12];

var totalDeNumeros = 0;

for(var i = 0; i < arrayDeNumeros.length; i++){
    totalDeNumeros += arrayDeNumeros[i];
}

console.log(totalDeNumeros);
// 42
```


### Nesting Bucles For

```javascript
function multiplicarArray(arr){
    var producto = 1

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            producto *= arr[i][j];
        }
    }
    return producto;
}

var producto = multiplicarArray([[1,2],[3,4],[5,6,7]]);
console.log(producto);
// 5040
```


## Bucle Do While
La diferencia principal entre los bucles While y Do While, es que el segundo se ejecuta por lo menos una vez ya que la condición se ejecuta al final del bucle.

```javascript
var miArray = []
var i = 10;

do{
    miArray.push(i);
    i++;
} while (i < 20)

console.log(miArray);
// 10, 11, 12, 13, 14
```


## Número

### Generar números aleatorios

Utilizamos Math.random().

```javascript
var numeroRandom = Math.random();
console.log(numeroRandom);
```


### Generar números enteros aleatorios

Lo redondeamos con Math.Floor() y luego lo multiplicamos por un número.

```javascript
var numeroRandomEntero = var numeroRandomEntero = Math.floor(Math.random() * 20);

console.log(numeroRandomEntero);
```


### Número aleatorios en un rango

```javascript
function nuestroRango (numMin, numMax){
    return Math.floor(Math.random() * (numMax - numMin + 1 )) + numMin;
}

var random = nuestroRango(3, 20);
console.log(random);
```


## Función ParseInt

Esta función sirve para transformar strings a ints.

```javascript
function convertirAInt(str){
    return parseInt(str);
}

convertirAInt("58");
```

### Función ParseFloat

```javascript
function convertirAFloat(str){
    return parseFloat(str);
}

console.log(convertirAFloat("58.5"));
```


## Diferencia entre declaración de variables
### Var y Let

Como mencionamos anteriormente cuando declaramos con Var, esta se modifica en todo el program, y Let solo en el bloque correspondiente.

```javascript
function verificar(){
    var x = "General"
    if(true){
        let x = "Bloque";
        console.log("x es en este: ", x );
    }
    console.log("x es esta en el: ", x);
    return x;
}

verificar();
// x es en este: Bloque
// x es esta en el: General
```


### Const

Const solo se puede declarar una vez, si intentamos cambiar el valor de una variable conts nos dará error, es recomendable utilizar mayusculas al declarar una variable const para recordarlo.

```javascript
function imprimir(str){
    const FRASE = str + " es fácil";
    FRASE = str + " es divertido";
    return FRASE;
}

console.log(imprimir("JavaScript"));
// nos dará error por declarar dos veces la variable
```


### Conmutar una variable Const

Puede funcionar tanto en Arrays, como en Objetos.

```javascript
const ARRAY = [1,2,3];

function editarArray(){
    ARRAY[0] = 4;
    ARRAY[1] = 5;
    ARRAY[2] = 6;

    return ARRAY;
}

console.log(editarArray());
// 4, 5, 6
```


### Prevenir que una variable Const se pueda conmutar

Usamos Object.freeze().

```javascript
const ARRAY = [1,2,3];

Object.freeze(ARRAY);

function editarArray(){
    ARRAY[0] = 4;
    ARRAY[1] = 5;
    ARRAY[2] = 6;

    return ARRAY;
}

console.log(editarArray());
// 1, 2, 3
```


## Destructuring Assignment
Manera de asignar los valores de un Objeto de manera más rápida y sencilla.

```javascript
var coordenadas = {x:3.2, y:2.7, z:1.8};

// Así de haría normalmente
var x = coordenadas.x;
var y = coordenadas.y;
var z = coordenadas.z;

// Así lo haríamos con este método
var {x : a, y : b, z : c} = coordenadas;

console.log(a, b, c);
// 3.2 2.7 1.8
```


### Destructuring Assignment con Objetos Nested

```javascript
const TIEMPO = {
    hoy: {min:10, max:22},
    mañana: {min:8, max:20},
};

function maxDeMañana(x){
    const { mañana : {max : maximaMañana}} = x;
    return maximaMañana;
}

console.log(maxDeMañana(TIEMPO));
// 20
```


### Destructuring Assignment para asignar valores a un Array

La diferencia entre Objetos y Arrays, es que los segundos van en orden pero se puede saltar indexes del Array.

```javascript
const [a, b, , d] = [1, 2, 3, 4];
console.log(a,b,d);
// 1, 2, 4
```


## Crear Strings con Template Literals
Template Literals son un tipo especial de String que hacen crear Strings complejos más fácilmente. Podemos poner varia líneas, asignar variables y mucho más.

```javascript
const PERSONA = {
    nombre : "Maria",
    edad : 22,
}

const SALUDO = `Ella se llama ${PERSONA.nombre}.
Tiene ${PERSONA.edad} años.`;

console.log(SALUDO);
// Ella se llama Maria.
// Tiene 22 años.
```


## Funciones Arrow
Las funciones Arrow nos permiten escribir 

```javascript
// antes
hello = function() {
  return "Hello World!";
}

// arrow functio
hello = () => {
  return "Hello World!";
}
```


## Classes
Clases son un tipo de función, usando la palabra class para crearla y tiene un constructor adentro.

```javascript
class Coche {
    constructor(marca) {
      this.marcadecoche = marca;
    }
  }
miCoche = new Coche("Ford");
console.log(miCoche.marcadecoche);
// Ford
```


```javascript
class DestruirPlaneta{
    constructor(planetaObjetivo){
        this.planetaObjetivo = planetaObjetivo;
    }
}

var zeus = new DestruirPlaneta('Saturno');

console.log(zeus.planetaObjetivo);
// Saturno
``` 


### Getters y Setters

Las clases nos permiten utilizar getter y setters. Es recomendable utilizar getter y setters para nuestra propiedades, especialmente con el valor antes de devolverlo o antes de hacer un ‘set’. El nombre no puede ser el mismo, muchos programadores utilizan un ‘_’ antes del nombre.

```javascript
class Coche {
    constructor(marca) {
      this._marcadecoche = marca;
    }
    get cnom() {
      return this._marcadecoche;
    }
    set cnom(x) {
      this._marcadecoche = x;
    }
  }
  
micoche = new Coche("Ford");

console.log(micoche._marcadecoche)
// Ford
```


```javascript
class miCoche {
    constructor(marca) {
      this._marcacoche = marca;
    }
    get marcadelcoche() {
      return this._marcacoche;
    }
    set marcadelcoche(x) {
      this._marcacoche = x;
    }
  }
  
mycar = new miCoche("Ford");
// Cambiamos la marca de coche a Volvo
mycar.marcadelcoche = "Volvo";

console.log(mycar.marcadelcoche)
// Volvo
```


## Import y Export
En un archivo tenemos esto, lo exportaremos.

```javascript
export const CAPITAL = str => str.toUpperCase()
```

En esto otro importaremos la función del archivo pasado.

```javascript
import { CAPITAL } form "./nombredelarchivo" // nombre del archivo
const CAP = CAPITAL("Hola");
console.log(CAP);
// HOLA
```


### Diferentes cosas que podemos exportar

```javascript
const SALUDAR = (string) => {
		return "Hola";
}
// Función
export {SALUDAR};
// Variables
export const NOMBRE = "Juan";
```


### Importar todo de un archivo

Usamos el símbolo ”*”. 

```javascript
import * as NOMBRE from "archivo"
// Importamos todo, asignamos el nombre que deseamos y de donde importamos el archivo (./ si lo importamos del mismo directorio).
```


## Manipulación del DOM
El DOM del HTML es un objeto modelo y interfaz de programación de HTML.

```html
<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hola Mundo";
</script>

</body>
</html>
```


## Encontrando Elementos HTML

```javascript
// Elementos por su id
document.getElementById(id)
// Elementos por tu tag
document.getElementsByTagName(tag)
// Elementos por su clase
document.getElementsByClassName(clase)
```


### Por ID

```html
<!DOCTYPE html>
<html>
<body>

<p id="intro">Hola Mundo</p>

<p id="demo"></p>

<script>
var miElemento = document.getElementById("intro");
document.getElementById("demo").innerHTML = 
"El texto del intro es " + miElemento.innerHTML;
</script>

</body>
</html>
```


### Por tag

```html
<!DOCTYPE html>
<html>
<body>

<p>Hola Mundo</p>

<p id="demo"></p>

<script>
var x = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = 
'El en primer párrafo (index 0) es: ' + x[0].innerHTML;
</script>

</body>
</html>
```


### Por Clase

```html
<!DOCTYPE html>
<html>
<body>

<p>Hola Mundo</p>

<p class="intro">El DOM es muy útil.</p>
<p class="intro">Segundo Párrafo</p>

<p id="demo"></p>

<script>
var x = document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML = 
'El primer párrafo (index 0) con la clase="intro" es: ' + x[0].innerHTML;
</script>

</body>
</html>
```


## Cambiando contenido HTML
La manera más sencilla de modificar el contenido de un archivo HMTL es usando la propiedad `innerHTML`.

```html
<html>
<body>

<p id="p1">Hola</p>

<script>
document.getElementById("p1").innerHTML = "Nuevo Texto";
</script>

</body>
</html>
```

```html
<!DOCTYPE html>
<html>
<body>

<h1 id="id01">Encabezado</h1>

<script>
var element = document.getElementById("id01");
element.innerHTML = "Nuevo Encabezado";
</script>

</body>
</html> 
```


### Cambiar el valor de un atributo

Para cambiar el valor de un atributo utilizamos la sintaxis siguiente:

`document.getElementById(id).attribute = new value`


```javascript
<!DOCTYPE html>
<html>
<body>

<img id="myImage" src="smiley.gif">

<script>
document.getElementById("myImage").src = "landscape.jpg";
</script>

</body>
</html>
```


## Cambiando el estilo (CSS)
Para cambiar el estilo de un HTML utilizamos la sintaxis siguiente:

`document.getElementById(id).style.property=new style`

```javascript
<html>
<body>

<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color = "blue";
</script>

<p>The paragraph above was changed by a script.</p>

</body>
</html>
```


### Cambiar el estilo usando eventos

```javascript
<!DOCTYPE html>
<html>
<body>

<h1 id="id1">My Heading 1</h1>

<button type="button"
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button>

</body>
</html>
```

