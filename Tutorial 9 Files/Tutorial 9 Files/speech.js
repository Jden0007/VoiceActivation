var speech = new webkitSpeechRecognition();
speech.continuous = false;
speech.interimResults = false;
speech.interimResults = false;
speech.lang = "en-US";

speech.maxAlternatives = 3;

document.querySelector('#speechButton').addEventListener('click', listen);


function listen() {speech.start(); }

speech.addEventListener('result', processResult);

function processResult(event) {
    console.log(event.results);
 var speechText = event.results[ 0 ][ 0 ].transcript;
 var colorName = speechText.replace( /\s/g, '' );
                                console.log()
    document.querySelector('body').style.backgroundColor= colorName;
}


var message = new SpeechSynthesisUtterance();
message.text = speechText;
window.speechSynthesis.speak(message);
message.text = 'Changing the background color to:' + speechText;