// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  let voiceSelect = document.getElementById("voice-select");
  //populate dropdown list
  let voices = [];
  function populateVoiceList() {
    //retrieve list of voices
    voices = synth.getVoices();
    

    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
       option.setAttribute('data-lang', voices[i].lang);
       option.setAttribute('data-name', voices[i].name);
       voiceSelect.appendChild(option);
    }
  }

 
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  let pressButton = document.getElementsByTagName("button")[0];
  pressButton.addEventListener('click', speakOut);

  function speakOut() {
    //access voice
    //access textarea/input
    //speak them outloud 
    let text = document.getElementById("text-to-speak").value;
   
   const utterThis = new SpeechSynthesisUtterance(text);
   const selectedOption = voiceSelect.selectedIndex;

   utterThis.voice = voices[selectedOption];
   synth.speak(utterThis);
   

  }


  








  }