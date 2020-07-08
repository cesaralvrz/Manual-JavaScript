var numero = document.getElementById("numero").innerHTML;
document.getElementById("mas").addEventListener("click", sumar);
document.getElementById("menos").addEventListener("click", restar);

function sumar(){
    document.getElementById("numero").innerHTML = numero++;
}

function restar(){
    document.getElementById("numero").innerHTML = numero--;
}

