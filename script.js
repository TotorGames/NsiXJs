function TF1(valeur){
    if (valeur == 'False'){
        alert("Vous avez bon !")
    }else{
        alert("Vous avez faux")
    }
}
function TF2(valeur){
    if (valeur == 'False'){
        alert("Vous avez bon !")
    }else{
        alert("Vous avez faux")
    }
}
function selection1(){
    const choice= document.getElementById("choix1");
    const valeur =  choice[choice.selectedIndex]
    if(valeur.value =="len"){
        alert("Vous avez bon sur cette question!")
    }else{
        alert("Votre réponse n'est pas bonne !")
    }
}

function selection2(){
    const selecteur = document .getElementById( "choix2" );
    const monChoix=selecteur[selecteur.selectedIndex];
    if(monChoix.value=="pierre"){
        alert("Vous avez bon sur cette question!")
    }else{
        alert("Votre réponse n'est pas bonne !")
    }
}

function conf1(){
    var reponse = document.getElementById("v1").value; 
    if(reponse == "py"||"Py" || "Python" || "python"){
        alert("Vous avez bon !")
    }else{
        alert("Vous avez tord !")
    }
}

function conf2(){
    var reponse = document.getElementById("v2").value; 
    if(reponse == "for" || "For" ){
        alert("Vous avez bon !")
    }else{
        alert("Vous avez tord !")
    }
}
