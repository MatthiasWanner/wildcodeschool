const numero1 = parseInt(prompt("Choisissez un premier chiffre :"));
const numero2 = parseInt(prompt("Choisissez un second chiffre :"));
const numero3 = parseInt(prompt("Choisissez un dernier chiffre :"));

//console.log("Vous avez choisi " + numero1 + ", " + numero2 + ", et " + numero3 + "!");

if(numero1 === numero2 && numero2 === numero3){
    console.log("Les trois variables sont identiques");
}else if(numero1 === numero2 || numero2 === numero3 || numero1 === numero3){
    console.log("Deux des variables sont identiques");
}else{
    console.log("Toutes les variables sont différentes");
}