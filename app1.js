let ecran =document.querySelector(".resultat");

function affiche  (arg){
    console.log(arg);
    ecran.innerText += arg;

}
 
function del(){
    console.log();
    ecran.innerHTML= ecran.innerHTML.slice(0,-1);
}
function supp (ac){
    ecran.innerHTML ="";
}
function calcul() {
    console.log();
    ecran.innerHTML = eval(ecran.innerHTML);
}
function log (){
	ecran.innerHTML = Math.log(ecran.innerHTML);
}
function cosinus(){
	ecran.innerHTML = Math.cos(ecran.innerHTML);
}

function sinus(){
	ecran.innerHTML = Math.sin(ecran.innerHTML);
}
function tangente(){
	ecran.innerHTML = Math.tan(ecran.innerHTML);
}
function sqrt(){
	ecran.innerHTML = Math.sqrt(ecran.innerHTML,2);
}
function carre(){
	ecran.innerHTML = Math.pow(ecran.innerHTML,2);
}
function ln(){
	ecran.innerHTML = Math.ln(ecran.innerHTML);
}
/*
function zert(){
	ecran.innerHTML = Math.
}

function absolue(){
	ecran.innerHTML = Math.
}

function on(){
	ecran.innerHTML = Math.
}
function exp(){
	ecran.innerHTML = Math.
}
function second(){
	ecran.innerHTML = Math.
}
*/





