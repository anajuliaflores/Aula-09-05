function converte(){
    var temp_cel = prompt ("Digite a temperatura");
    if(isNaN (temp_cel)){
        alert("Digite um número inteiro");
    }
    else {
        var temp_fare = 1.8* temp_cel + 32;
        alert ("A temperatura em Fare " + temp_fare);
    }
    var h2 = document.createElement("h2");
    h2.innerHTML = "A temperatura em Fare:" + temp_fare;
    document.getElementsByTagName("body") [0].appendChild(h2);

}