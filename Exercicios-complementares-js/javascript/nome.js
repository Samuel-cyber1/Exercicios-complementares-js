function nome(){
    var nome = document.getElementById("id01").value;
    var sobreNome = document.getElementById("id02").value;
   

     document.getElementById("contatenar").innerHTML = `Ola, ${nome} ${sobreNome}!`;
  
}