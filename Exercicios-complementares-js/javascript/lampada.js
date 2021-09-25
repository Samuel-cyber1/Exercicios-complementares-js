function mudarLampada(vlampad) {
    var lampada = document.getElementById(vlampad);

    if (lampada.src.indexOf("lamAp.jpg") > -1) {
        lampada.src = "./img/lamAcc.jpg";
    } else {
        lampada.src = "./img/lamAp.jpg";
    }
}