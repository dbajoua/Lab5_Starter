// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  let Horn = document.getElementById("horn-select");

 
  
  Horn.addEventListener('change', Horndisplay);

  function Horndisplay() {

    if (Horn.value == "air-horn") {
    //  alert('hi');

      //image change
      let displayImage = document.getElementById("expose").getElementsByTagName("img")[0];
      displayImage.src = "assets/images/air-horn.svg";

      //audio change
      let hornAudio = document.getElementsByClassName("hidden")[0];
      hornAudio.src = "assets/audio/air-horn.mp3";

    }

    if (Horn.value == "car-horn") {
    //  alert('hi');

      //image change
      let displayImage = document.getElementById("expose").getElementsByTagName("img")[0];
      displayImage.src = "assets/images/car-horn.svg";

      //audio change
      let carAudio = document.getElementsByClassName("hidden")[0];
      carAudio.src = "assets/audio/car-horn.mp3";

    }

    if (Horn.value == "party-horn") {
   //   alert('hi');

      //image change
      let displayImage = document.getElementById("expose").getElementsByTagName("img")[0];
      displayImage.src = "assets/images/party-horn.svg";

      //audio change
      let partyAudio = document.getElementsByClassName("hidden")[0];
      partyAudio.src = "assets/audio/party-horn.mp3";

    }

  }

  // Volume
  let audioSlider = document.getElementById("volume");
  audioSlider.addEventListener('change', audioChange);
  
  function audioChange() {
    if (audioSlider.value == 0) {
      let displayImage = document.getElementById("expose").getElementsByTagName("img")[1];
      displayImage.src = "assets/icons/volume-level-0.svg";
      let audioVol = document.getElementsByClassName("hidden")[0];
      audioVol.volume = 0;
      
    }

    else if (audioSlider.value < 33 && audioSlider.value >= 1) {
      let displayImage = document.getElementById("expose").getElementsByTagName("img")[1];
      displayImage.src = "assets/icons/volume-level-1.svg";
      // change volume for the audio
      let audioVol = document.getElementsByClassName("hidden")[0];
      audioVol.volume = 0.33;
    //  alert(audioVol.volume);


    }

    else if (audioSlider.value >= 33 && audioSlider.value < 67) {
      let displayImage = document.getElementById("expose").getElementsByTagName("img")[1];
      displayImage.src = "assets/icons/volume-level-2.svg";
      // change volume for the audio
      let audioVol = document.getElementsByClassName("hidden")[0];
      audioVol.volume = 0.67;
   //   alert(audioVol.volume);

    }

    else {
      let displayImage = document.getElementById("expose").getElementsByTagName("img")[1];
      displayImage.src = "assets/icons/volume-level-3.svg";
       // change volume for the audio
       let audioVol = document.getElementsByClassName("hidden")[0];
       audioVol.volume = 1;
    //   alert(audioVol.volume);

    }


  }

  let playButton = document.getElementsByTagName("button")[0];
  //alert(playButton);

  playButton.addEventListener('click', buttonAction);

  function buttonAction() {
    let audio = document.getElementsByTagName("audio")[0];
    console.log(audio);
    audio.play();
  }


}