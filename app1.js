let ecran =document.querySelector(".resultat");

function affiche  (arg){
    console.log(arg);
    ecran.innerText += arg;

}
 
function del(){
    console.log();
    ecran.innerHTML= ecran.innerHTML.substring(0,exp.length-1)
}
function supp (ac){
    ecran.innerHTML ="";
}
function calcul() {
    console.log();
    ecran.innerHTML = eval(ecran.innerHTML);
}





