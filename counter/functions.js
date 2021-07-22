function count(){

    let init = document.getElementById('start');
    let finish = document.getElementById('finish');
    let path = document.getElementById('path');
    let result = document.getElementById('res')

    if(init.value.length == 0 || finish.value.length == 0 || path.value.length == 0){
        console.log("[ERROR] you have to complete the fields properly")
    } else{
        result.innerHTML = "Counting: <br/>"
        let i = Number(init.value);
        let f = Number(finish.value);
        let p = Number(path.value);
        if(p <= 0){
            alert("[Error] Now assuming Path = 1");
            p = 1;
        }
        if(i < f){
            //crescente
            for(let c = i; c <= f; c += p){
                result.innerHTML +=` ${c} >>`
            }
        }else if(i > f){
            //descrecente
            for(let c = i; c >= f; c -= p){
                result.innerHTML += ` ${c} >>`
            }
        }
        result.style.color = "blue"
    }

}