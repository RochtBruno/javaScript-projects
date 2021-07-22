function generate(){

    var number = document.getElementById('number');
    var res = document.getElementById('res');

    if(number.value.length == 0){
        window.alert("[Error] Please insert a valid number")
    } else{
        let n = Number(number.value);
        res.innerHTML = '';
        for(let c = 1 ;c <= 10; c++){
            res.innerHTML += ` ${n} X ${c} = ${n*c}<br/>`
        }
        res.style.color = "blue";
        res.style.marginTop = "20px"
    }

}