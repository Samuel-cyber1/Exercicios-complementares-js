function soma(){
    var soma01 = document.getElementById("id01").value;
    var soma02 = document.getElementById("id02").value;
    
     var resultado = parseInt(soma01) + parseInt(soma02)

    if ( soma01 > 0 && soma02 > 0){
        alert(resultado)

      
    } else{
        return alert("Não e possivel fazer a soma")
    }

}