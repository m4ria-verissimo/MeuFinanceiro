function entrar(){
    var name = document.getElementById("name").value;
    if (name){
        localStorage.setItem("nome", name);
        window.location.href="index-2.html";
    }else{
        alert("digite:");
    }
   
}
function ok(){
var salario = Number( document.getElementById("salario").value);
 var saldo = document.getElementById("saldo").textContent=salario + " R$";

 
var gastos = document.getElementById("gastos");

}