let frase = prompt("Ingrese una frase");
frase = frase.replace(/\s+/g, '');
function esPalindromo(frase){
    let separar = frase.split("");
    console.log(separar);
    let invertir = separar.reverse();
    console.log(invertir);
    let unirfrase = invertir.join("");
    
    return unirfrase;
}
if(frase == esPalindromo(frase)){
    document.write("SI");
}
else{
    document.write("NO")
}
