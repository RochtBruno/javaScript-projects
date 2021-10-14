

const sounds = {
    "A" : 'boom.wav',
    'S' : 'clap.wav',
    'D' : 'hihat.wav',
    'F' : 'kick.wav',
    'G' : 'openhat.wav',
    'H' : 'ride.wav',
    'J' : 'snare.wav',
    'K' : 'tink.wav',
    'L' : 'tom.wav'
}
const createDiv = (text) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = text;
    div.id = text;
    document.getElementById('container').appendChild(div)
}

const show = (sounds) => {
    Object.keys(sounds).forEach(createDiv)
}

const playSound = (letter) => {
    const audio = new Audio(`./sounds/${sounds[letter]}`);
    audio.play();
}

const active = (event) => {
    let letter = '';
    if(event.type == 'click'){
        letter = event.target.id;
   } else {
        letter = event.key.toUpperCase();
   }
   const letterExists = sounds.hasOwnProperty(letter);
   if(letterExists){
    playSound(letter);
   }
   
}


show(sounds);

document.getElementById('container').addEventListener('click', active);
window.addEventListener('keydown',active);
