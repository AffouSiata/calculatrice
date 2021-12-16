function calculatrice(){
    var nombre1,nombre2,resultat;

    nombre1 = document.getElementById("nbre1").value;
    nombre2 = document.getElementById("nbre2").value;
    resultInput = document.querySelector('#result');


    
    if(document.getElementById("add").selected){
        resultat = parseInt(nombre1) + parseInt(nombre2);

    }
    else if(document.getElementById("sous").selected){
        resultat = parseInt(nombre1) - parseInt(nombre2);
    }
    else if(document.getElementById("mul").selected){
        resultat = parseInt(nombre1) * parseInt(nombre2);
    }
    else{
        resultat = parseInt(nombre1) / parseInt(nombre2);
    }

    resultInput.value = resultat;
}

document.getElementById("btn").addEventListener('click', e => {
    calculatrice();
})