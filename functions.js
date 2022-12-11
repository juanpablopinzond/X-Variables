console.log("hello word");
console.log(4);
console.log([3, 10, "juan"]);
console.log({ key: "value" });

var num = 10;
console.log(num);
let palabra = "juan";
var x = palabra;
console.log(x);

let a = 10;
const b = "juan"; //Const, signifca constante, es decir, que le dice al programa que el valor no cambiara en el futuro
alert(b);

let libro = "harry potter`s diary";
console.log(libro);

let libro2 = " harry \n\ potter`s \n\ diary"; //Este signo hace que la siguiente palabra se imprima en la siguiente linea.
console.log(libro2);

document.write(libro, libro2);
document.write(libro.toUpperCase());
document.write(libro.toLowerCase());
document.write(libro.length);
document.write(libro.includes("potter"));

//Las propiedades de un texto se acceden, los metodos se llaman.

let numeros = 100; // todos los numeros son de tipo numeros, el infinity es una palabra reservada.
let decimales = 45.1056745345435454657678;
let negativos = -1000;
let infinitos = Infinity;
let notNumber = NaN;
console.log(numeros, decimales, negativos, infinitos, notNumber);

//Math es una libreria de matematicas, las cajas azules son propiedades y las moradas metodos.
let pi = Math.PI;
console.log(pi);
let entero = Math.round(decimales); //el metodo round redondea cualquier decimal a un entero.
console.log(entero);
let random = Math.random(); //este metodo genera un numero entre 0 y 1;
console.log(random);

let listaRandom = [1, "juan", true, {},
    [true, "juan", 10]
];
console.log(listaRandom[3]);

let abecedario = ["a", "b", "c", "d", "f"];
console.log(abecedario.length); //length es el tamaño del array.
console.log(abecedario[abecedario.length - 2]);
console.log(abecedario.sort()); //Este metodo ordena las letras. 
console.log(abecedario.includes("z")); //Este metodo retorna verdadero o falso si la letra que se pasa como parametro consta dentro del array. 
abecedario.push("x", "h"); //Este metodo agrega un elemento de cualquier tipo, al final de array.
console.log(abecedario);
abecedario.pop(); //Este metodo remueve el ultimo elemento del array.
console.log(abecedario);
abecedario.unshift("t");
console.log(abecedario); // Este metodo agrega uno o varios elementos a inicio del array;
abecedario.shift();
console.log(abecedario); //Este metodo elimina el primer elemento del array. 
abecedario.splice(2, 3);
console.log(abecedario); //Este metodo elimina los elementos que ingresamos por medio de su index como argmento del metodo al momento de invocarlo en el array.

let texto1 = "me gusta el chocolate";
let texto2 = "me gusta la hamburguesa";
let texto3 = "me gusta la fanta";
let texto4 = "me gusta los m&m";
let texto5 = "me gusta las galletas";
let texto6 = "me gusta los nachos";
let texto7 = "me gusta los tacos";

let regex = /^los/i; //Este regex busca el string que asignamos a la variable para que la buscque en las demas variables y devuelva true o false, la i es para que no le importe las mayusculas o minusculas y, ^este simbolo es para buscar dicho string de la variable en las demas variables pero al inicio, el $ va a buscar la palabra al final.
console.log(regex.test(texto1));
console.log(regex.test(texto2));
console.log(regex.test(texto3));
console.log(regex.test(texto4));
console.log(regex.test(texto5));
console.log(regex.test(texto6));
console.log(regex.test(texto7));

//Un objeto es como un diccionario, tienes la palabra de un lado y la definicion del otro. Los objetos de forman por llaves {}, dentro de esta se pone la key y su respectivo value, las keys pueden ser strings. las comillas son necesarias si en un key se quiere poner espacio.

let objeto = {
    string: "texto",
    "number": 2,
    array: [2, "juan", true],
    "boolean": false,
    diccionario: { x: 10 },
    tipos: {
        fuego: "charizar",
        agua: "empoleon",
        planta: "torterra"
    }
};

console.log(objeto);
console.log(objeto.diccionario.x);
console.log(objeto.tipos.fuego);
console.log(objeto["tipos"]["planta"]); //Estas son las dos formas para acceder a los objetos, se puede de una u otra y, si se utilizan los corchetes se usa strings. 
delete objeto.boolean;
delete objeto["number"];
console.log(objeto); //la palabra delete es un termino reservado por JS y sirve para eliminar una propiedad del objeto.

let usuario = {
    nombre: "Juan Pablo",
    apellido: "Pinzon",
    edad: 22,
    sexo: "Masculino"
};
//Los objetos son mutables, si se modifica alguna propiedad al objeto se esta modificando el objeto inicial, a diferencia de otros tipos de datos en JS que si se modifican variables dentro de otras variables, el dato original no sera reescrito o modificado.

let numero1 = 1;
let numero2 = numero1;
numero2 = 3;
console.log(numero1, numero2); //En este caso se reescribio el valor de la variable dos pero la variable original que estaba en el variale 1 sigue intacta.

let usuario2 = JSON.parse(JSON.stringify(usuario)); // Se esta modificando al objeto a un string para luego transformarlo en un nuevo objeto totalmente diferente, asi se crea uno nuevo.
usuario2.nombre = "Maria Emilia";
usuario2.sexo = "femenino";
console.log(usuario);
console.log(usuario2); //Se modifica el objeto original, ya sea que imprimas en la consola la nueva variable que contiene el objeto o el objeto original, esto se debe a que los objetos ocupan el mismo lugar en la memoria.

//TIPOS DE DATOS PRIMITIVOS
let texto = "Juan";
let numbero = 10;
let boolean = false;
let indefinido; // es igual a undefined, es cuando no se le asigna un valor a una variable, pero aun asi, adquiere el valor de undefined, en JS nunca nada esta vacio.
//NO MUY UTILIZADOS
let bigInt = BigInt(2324994293893848574523); // este imprime todo el numero entero.
console.log(bigInt);
let simbolo = Symbol("juan"); //este hace que el valor que se define sea unico y si se lo compara saldra falso, por que nunca tendra uno igual.

//TIPOS DE DATOS ESTRUCTURALES
let object = {
    0: 100,
    "nombre": "juan",
    MAC: "iphone"
}
let arrayX = ["juan", 100]; //estos datos son estructurales ya que se accede a cada una de sus propiedades o elementos, se navega por ellos y constituyen la mayor parte de la estructura de codigo de JS.
//otros tipos de datos estructurales son: object, arrays, Map, set, WeakMap, WeakSet, Date, RegExp.
// para identificar que datos son objetos llevan la palabra NEW, con esto crea un nuevo tipo de dato estructural.
function JP() {};
let nulo = null // Este tambien es un objeto
typeof boolean; //esta palabra reservada sirve para identificar que tipo es cada dato.

//TIPOS DE TEXTOS
let t1 = 'Texto entre comillas simples';
let t2 = "texto entre comillas dobles";
let plantillas = "(Plantillas literales)";
let t3 = `texto entre acentos graves ${plantillas}`; //Se llaman plantillas literales por que estra estructura permite agregar elementos dentro del texto lo que permite utilizar nuevamente estas plantillas en un uso proximo. 
console.log(t3);

let obj = new String("primitivo");
console.log(obj); // estamos creando un nuevo objeto que sera un string, al imprimirlos se imprime como string : - Que es su key - y "primitivo" - que es su value.
//  los tipos de datos primitivos no poseen metodos, pero el motor de javascript los envulve dentro del objeto que crea una nueva instancia de un dato primivo eso se llama coercion. 
console.log(typeof t1);
console.log(typeof obj);