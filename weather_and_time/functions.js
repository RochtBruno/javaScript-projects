function load(){
    var message = window.document.getElementById('message');
    var image = window.document.getElementById('image');
    var text = window.document.getElementById('text');
    var date = new Date;
    var hour = date.getHours();
    message.innerHTML = `${hour} horas`;
    message.style.color = "black";
    message.style.padding = '20px';
    message.style.fontSize = '25px';
    message.style.fontWeight = 'bold';
    text.style.color = 'black';
    text.style.padding = '10px';
    text.style.fontWeight = 'bold'

    if(hour >= 0 && hour < 12){
        text.innerHTML = "Good Morning"
        text.style.color = "rgb(255, 147, 105)"
        image.src ="images/morning.jpg"
        document.body.style.backgroundColor = "rgb(255, 147, 105)"
    }else if(hour >= 12 && hour < 18){
        text.innerHTML = "Good Afternoon"
        text.style.color = "rgb(105, 130, 255)"
        image.src ="images/afternoon.jpg"
        document.body.style.backgroundColor = "rgb(105, 130, 255)"
    }else if(hour >= 18 && hour < 24){
        text.innerHTML = "Good Night"
        text.style.color = "rgb(46, 46, 46)"
        image.src ="images/night.jpg"
        document.body.style.backgroundColor = "rgb(46, 46, 46)"
    }
}