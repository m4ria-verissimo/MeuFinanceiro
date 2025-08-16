function entrar(){
    var name = document.getElementById("name").value;
    if (name){
        localStorage.setItem("nome", name);
        window.location.href="index-2.html";
    }else{
        alert("digite:");
    }
   
}
