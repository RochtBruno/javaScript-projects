    var chart = document.getElementById('chart');
    var getNumber = document.getElementById('get_number');
    var res = document.getElementById('res')
    var values = [];

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function addNumber(){
    if(isNumber(getNumber.value) && !inList(getNumber.value, values)){
        values.push(Number(getNumber.value))
        chart.innerHTML += `<p>Value ${Number(getNumber.value)} Added </p>`
        res.innerHTML = "";
    } else {
        console.log("número não encontrado ou ja pertence a lista")
    }
    chart.style.color = "blue";
    chart.style.fontWeight = "bold";
    getNumber.value = "";
    getNumber.focus();
}
function analyzeNumber(){
    if(values.length == 0){
        console.log("Error")
    } else {
        let tot = values.length;
        let major = values[0];
        let minor = values[0];
        let sum = 0;
        let average = 0
        for(let pos in values){
            sum += values[pos]
            average = sum / tot
            if(values[pos] > major)
                major = values[pos]
            if(values[pos] < minor)
                minor = values[pos]
        }

        
        res.innerHTML = "";
        res.innerHTML += `<p> ${tot} numbers registered</p>`;
        res.innerHTML += `<p> the major number was ${major}</p>`
        res.innerHTML += `<p> the minor number was ${minor}</p>`
        res.innerHTML += `<p> We have ${sum} after added up</p>`
        res.innerHTML += `<p> The average is ${average}</p>`

        res.style.color = "black";
        res.style.marginTop = "20px"
    }
}

