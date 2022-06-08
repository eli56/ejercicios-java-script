// console.log('Hola mundo' ) //muestra en consola

//1. alert('Hello World') // nuestra una alerta con mensaje

//2. document.write('Hello world')//escribe en la pantalla

//3. document.write(3+5)//pone el resulto de la suma sirve tanto para console y alert

/*4.
 let usuario =prompt ('ingrese nombre usuario')
console.log('Hola',usuario) se debe definir primero la variable donde se guardara muestra
 con el console y document.write*/

/*5.
var numeroUno=prompt('ingrese primer numero')
var numeroDos=prompt('ingrese segundo numero numero')
document.write('la suma es:' +(parseInt(numeroUno) + parseInt(numeroDos)) ) se debe usar el parseItn para convertir las 
variables de string a el dato que se necesita tener el cuanta el mas para concatenar operaciones*/

/*6.
let n1=prompt('ingrese numero 1')
let n2=prompt('ingrese numero 2')
if(n1>n2){
    
    console.log('el numero 1 es mayor')
}
else{
    console.log('el numero 2 es mayor')
} 
siempre se debe tener en cuenta que el else va por fuera
if(parseInt(n1)>parseInt(n2)) se puede hacer tambien de este midi{*/

/*7 
let n1=prompt('ingrese numero 1')
let n2=prompt('ingrese numero 2')
let n3=prompt('ingrese numero 3')

if(n1>n2){
        document.write('el numero 1 es mayor')
}
else if(n1>n3){
    document.write('el numero 1 es mayor')
}
if(n2>n1){   
    document.write('el numero 2 es mayor')
}
else if(n2>n3){
    document.write('el numero 2 es mayor')
}
else{
    console.log('el numero 3 es mayor')
} tratar de optimizar*/

/*8.
 let n1=prompt('ingrese numero')

if(n1 % 2 ===0 ){

    document.write('numero es divisible por 2')
}
else{ 
    document.write('numero no es divisible por 2')
} en JS no se usa mod para el resultado sino %*/


/*9.
let text=prompt('escriba una frase')
let letre='a'
let i
let suma=0
for(i=0; i<text.length; i++){
if(text.charAt(i)=== letre){
suma++
}
}
document.write('el numero de letras a que tiene la frase es de: '+suma)
 usamos metodo propio de java scrio charAt debido 
a que me devuelve el caracter en la posución en que le indiquemos, tambien usamos la letra que se iba a buscar en una variable, 
utilizamos el punto length para que contara las posiciones de la frase  y poder recorrerla toda*/

/*10.
let text=prompt('escriba una frase')
let i
let Vocal
for(i=0; i<text.length; i++){

if(text.charAt(i)==='a'
||text.charAt(i)==='e'
||text.charAt(i)==='i'
||text.charAt(i)==='o'
||text.charAt(i)==='e' ){

    document.write(text.charAt(i))
}
} */

/*11.
let text=prompt('escriba una frase')
let i
let Vocal=0
for(i=0; i<text.length; i++){

if(text.charAt(i)==='a'
||text.charAt(i)==='e'
||text.charAt(i)==='i'
||text.charAt(i)==='o'
||text.charAt(i)==='u' ){
    Vocal++
}
}
document.write('la cantida de volcales que tiene es de: '+Vocal)

//mismo caso de suma de vocales pero por casos 
let text=prompt('escriba una frase')
let i
let Vocal=0
for(i=0; i<text.length; i++){

switch(text.charAt(i)){
    case 'a':
        Vocal++
    break

    case 'e':
        Vocal++
    break

    case 'i':
        Vocal++
    break

    case 'o':
        Vocal++
    break

    case 'u':
        Vocal++
    break

} 
}
document.write('suma de todas las vocales es: '+Vocal)*/

/*12.
let text=prompt('escriba una frase')
let i
let VocalA=0, vocalE=0, VocalI=0, VocalO=0, VocalU=0

for(i=0; i<text.length; i++){

switch(text.charAt(i)){
    case 'a':
        VocalA++
    break

    case 'e':
        vocalE++
    break

    case 'i':
        VocalI++
    break

    case 'o':
        VocalO++
    break

    case 'u':
        VocalU++
    break

} 
}
document.write('La cantidad de A son:'+VocalA+' La cantidad de E son:'+vocalE+' La cantidad de I son:'
+VocalI+' La cantidad de O son:'+VocalO+' La cantidad de U son:'+VocalU)*/

/*13.
let num =prompt('ingrese numero')

if((num%2===0  )){

    document.write('es divisuble por 2')
}

else if((num%3===0  )){

    document.write('es divisuble por 3')
}

else if((num%5===0 )){

    document.write('es divisuble por 5')
}

else if(num%7===0){

    document.write('es divisuble por 7')
}*/

/*14.
let num =prompt('ingrese numero'

if((num%2===0  )){

    document.write('es divisible por 2')
}

if((num%3===0  )){

    document.write('es divisible por 3')
}

if((num%5===0 )){

    document.write('es divisible por 5')
}

if(num%7===0){

    document.write('es divisible por 7')
}

else if(num%2!=0 && num%3!=0 && num%5!=0 && num%7!=0 ) {

    document.write('no es divisible ni por 2,3,5,7 ')
}
// para que tome cada condicion como separada se usa el if sin el else if  */


/*15.
let n1 = prompt("Escribe un número");
let i;
for (i=0;i <= n1; i++) {
if (n1 % i === 0) {

document.write(i,", ");
}
} se tuvo en cuanta que que se debe incluir el numero */

/*16
let n1 = prompt('ingrese numero 1')
let n2 = prompt('ingrese numero 2')
let i, j

for(i=0;i<=n1;i++){

    for(j=0;j<=n2;j++){

    if((n1%i===0) && (n2%j===0))
    {
        if(i===j)
        {
            document.write(i,", ");
        }
        
    } 
    } 
 } */

 /*17

 let n1=prompt('ingrese numero')

 let suma=0

 for(i=0;i<n1;i++){
     
    if(n1%i===0)
    {
        suma++
    }    
 }

 if(suma<2){
    
    document.write('numero es primo')

 } 
 else{
    document.write('numero no es primo')
 }
 */