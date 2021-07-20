function verificar(){
    var date = new Date;
    var year = date.getFullYear();
    var formAno = document.getElementById('birth');
    var res = document.getElementById('res');
    if(formAno.value.length == 0 || formAno.value > year || formAno.value == 0){
        window.alert('Error! Something went wrong')
    }else{
        var btnsex = document.getElementsByName('radsex');
        //descobrir a idade
        var age = year - formAno.value;
        var gender = '';
        //criar img de forma dinâmica 
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        img.style.maxWidth = "50%";
        img.style.height = "300px";
        img.style.borderRadius = "50px";
        img.style.padding = "20px";
        img.style.display = "block";
        img.style.margin = "auto"
        if(btnsex[0].checked){
            gender = "male"
            if(age >=0 && age < 12){
                img.setAttribute('src','images/crianca_homem.jpg');
            }else if(age >=12 && age <=19){
                img.setAttribute('src','images/homem_jovem.jpg');
            }else if(age >= 20 && age < 60){
                img.setAttribute('src','images/homem__adulto.jpg');
            }else{
                img.setAttribute('src','images/idoso.jpg');
            }
        }else if(btnsex[1].checked){
            gender = "female"
            if(age >=0 && age < 12){
                img.setAttribute('src','images/crianca_mulher.jpg');
            }else if(age >=12 && age <=19){
                img.setAttribute('src','images/mulher_jovem.jpg');
            }else if(age >= 20 && age < 60){
                img.setAttribute('src','images/mulher__adulta.jpg');
            }else{
                img.setAttribute('src','images/idosa.jpg');
            }
        }
        res.innerHTML = `We detect ${gender} with ${age} years`
        res.appendChild(img)
    }
}