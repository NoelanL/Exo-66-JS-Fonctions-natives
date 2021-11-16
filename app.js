let operande = 10;

let entier = document.getElementById('entier');
let entier1 = parseInt("32");
let result = entier1 * operande;
entier.innerText = result;

let flottant = document.getElementById('flottant');
let flottant1 = parseFloat("54.85");
let result1 = flottant1 * operande + result;
flottant.innerText = result1;

let nonNumerique = document.getElementById('non-numerique');
let nonNumerique1 = "Vous y arriverez !";
let result3;

if (isNaN(nonNumerique1)){
    nonNumerique1 = 0;
    nonNumerique.innerHTML = nonNumerique1;
}

else{
    result3 = parseInt(nonNumerique1)
    nonNumerique.innerHTML = nonNumerique1;
}


let random = document.getElementById('random');
let aleatoire;
for( let i = 0; i < 1; i++){
    aleatoire = Math.random() *100;
    random.innerHTML = aleatoire;
}

let trunc = document.getElementById('trunc');
let trunc1 = 54.988;
let result4 = Math.trunc(trunc1);
trunc.innerHTML = result4;

let replace1 = document.getElementById('replace');
let world = "Hello world !";
let name = world.replace("world", "Noëlan Lengrand");
replace1.innerHTML = name;
