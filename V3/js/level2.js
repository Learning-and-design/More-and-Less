
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';
// import { OrbitControls } from "../node_module/three/examples/jsm/controls/OrbitControls";
// import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
console.log("Level 2 file Working")
// console.log("Select Less")
// console.log("06-04 Updated File L2");
console.log("New 23/04")


// Set Data To LocalStorage
// console.log("localStorage Data:- ", localStorage)
// console.log("localStorage Data:- ", localStorage.levelData)
// console.log("localStorage Keys:- ",Object.entries(localStorage))
// console.log("localStorage Keys:- ",localStorage.getItem())

var setItemLocal = localStorage.setItem('level0', false)
var setItemLocal = localStorage.setItem('level1', true)
var setItemLocal = localStorage.setItem('level2', true)
var setItemLocal = localStorage.setItem('level3', false)
var setItemLocal = localStorage.setItem('level4', false)
// console.log("setItemLocal:- ", setItemLocal);


// // Loader When Page is Load
window.onload = function () { document.getElementById("loading").style.display = "none" }


// Fetch EndPoint of URL
console.log("Host", location.host);
// var endPoint = location.host
var endPoint = `http://${location.host}` // For Local Testing
// var endPoint = `https://${location.host}`    // For Online

// // If User Change Tab Reload
// window.onbeforeunload = function() { return "Your work will be lost." };

// Access Canvas From index.html File
// const canvas = document.querySelector('.c');
const canvas = document.querySelector('.level2');
// document.addEventListener('touchstart', handler, {passive: true});

// Scene  - Global
var scene = new THREE.Scene();


// window Inner Height and weidth
// var winWidth = window.screen.width
// var winHeight = window.screen.height
var winWidth = window.innerWidth
var winHeight = window.innerHeight

// Camera - Global
var camera = new THREE.PerspectiveCamera(
  60,
  // window.innerWidth / window.innerHeight,
  winWidth / winHeight,
  1,
  1000
);
camera.position.set(0, 0, 4);

// Renderer - Global
const renderer = new THREE.WebGLRenderer({
  canvas,
  // canvasPopup,
  alpha: true,
  antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(winWidth, winHeight);

// console.log("window.innerWidth, window.innerHeight",window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Render Scene and Camera  - Global
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement);

// // Resize the Screen  - Global - Active
// window.addEventListener('resize', function () {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight)
// })
// // Loader When Page is Load
// window.onload = function () {
//   document.getElementById("loading").style.display = "none"
//     ,
//     console.log("refresh works-----------------------------");
//   // // // Resize the Screen  - Global
//   // window.addEventListener('resize', function () {
//   //   console.info("refresh and resize works")
//   camera.aspect = window.innerWidth / window.innerHeight;
//   //   // camera.aspect = window.innerHeight / window.innerWidth;   // For Testing
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight)
//   console.log("---------------------------------------------")
//   // })
// }


// Full Screen is Active or Not Detection
function fullscreenchanged(event) {
  // document.fullscreenElement will point to the element that
  // is in fullscreen mode if there is one. If not, the value
  // of the property is null.
  if (document.fullscreenElement) {
    // console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
    console.log(`Entered fullscreen mode.`);
  } else {
    console.log('Leaving fullscreen mode.');
    // Call Resize Function on Full Screen Exit
    // Resize the Screen  - Global
    window.addEventListener('resize', function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      // camera.aspect = window.innerHeight / window.innerWidth;   // For Testing
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight)
    })
  }
};
// var el = document.getElementById('fullscreen-div');
// el.addEventListener('fullscreenchange', fullscreenchanged);
document.addEventListener('fullscreenchange', fullscreenchanged);


//  ----------- Full Screen and Resize Function ---------------------------------------
function openFullscreen() {
  localStorage.setItem('FullScreen', true)
  console.log("Full Screen Fuction Working");
  // var elem = document.getElementById("level1Test");
  // console.log("-- W", winWidth, "H:-", winHeight);
  // console.log("Ele W:-", elem.width, "H:-", elem.height);
  // // winWidth = elem.width
  // // winHeight = elem.height

  // if (elem.requestFullscreen) {
  //     elem.requestFullscreen();
  // } else if (elem.mozRequestFullScreen) {
  //     // / Firefox /
  //     elem.mozRequestFullScreen();
  // } else if (elem.webkitRequestFullscreen) {
  //     // / Chrome, Safari & Opera /
  //     elem.webkitRequestFullscreen();
  // } else if (elem.msRequestFullscreen) {
  //     // / IE/Edge /
  //     elem.msRequestFullscreen();
  // }
  // elem.style.width = '100%';
  // elem.style.height = '100%';

  start()

  function ready() {
    const { type } = screen.orientation;
    console.log(`Fullscreen and locked to ${type}. Ready!`);
  }

  async function start() {
    // function start() {
    await document.body.requestFullscreen();
    await screen.orientation.lock("landscape");
    // screen.orientation.lock("landscape");
    ready();
  }
  // screen.orientation.lock("landscape")
  // screen.orientation.lock("landscape-primary")
  // screen.orientation.lock("landscape-secondary")
  // console.log("Lock Condition tested");

  // // renderer.setSize(window.innerWidth, window.innerHeight);
  // function Resize() {
  //     // camera.aspect = winWidth / winHeight;
  //     // camera.aspect = window.innerWidth / window.screen.height
  //     // camera.aspect = window.screen.width / window.innerHeight

  //     camera.updateProjectionMatrix();
  //     // renderer.setSize(winWidth, winHeight)
  //     renderer.setSize(window.screen.width, window.innerHeight);

  //     // Render Scene and Camera  - Global
  //     renderer.render(scene, camera)
  //     document.body.appendChild(renderer.domElement);

  // }

  // // Render Scene and Camera  - Global
  // renderer.render(scene, camera)
  // document.body.appendChild(renderer.domElement);

  // // Resize the Screen  - Global
  // window.addEventListener('resize', Resize)
  // window.addEventListener('resize', throttle(
  //     () => {
  //         const width = window.innerWidth;
  //         const height = window.innerHeight;
  //         camera.aspect = width / height;
  //         camera.updateProjectionMatrix();
  //         renderer.setSize(width, height);
  //         setCanvasDimensions(renderer.domElement, width, height);
  //     },
  //     // resizeUpdateInterval,
  //     { trailing: true }
  // ))
}

// renderer.setSize(window.innerWidth, window.innerHeight);
function Resize() {
  // camera.aspect = winWidth / winHeight;
  // camera.aspect = window.innerWidth / window.screen.height
  // camera.aspect = window.screen.width / window.innerHeight

  camera.updateProjectionMatrix();
  // renderer.setSize(winWidth, winHeight)
  renderer.setSize(window.screen.width, window.innerHeight);

  // Render Scene and Camera  - Global
  renderer.render(scene, camera)
  document.body.appendChild(renderer.domElement);

}

// Render Scene and Camera  - Global
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement);

// Resize the Screen  - Global
window.addEventListener('resize', Resize)
//  ------------------------------------------------------------------------




// // -------------    Active When Delivery to Client  -----------------------------
// var orbitControls
// // orbitControls = new Threex.OrbitControls(camera, renderer.domElement);
// orbitControls = new OrbitControls(camera, renderer.domElement);
// orbitControls.enableZoom = false;
// orbitControls.enabled = true;
// orbitControls.enablePan = false;
// orbitControls.enableDamping = false;
// orbitControls.autoRotate = true;
// orbitControls.autoRotateSpeed = 10;
// //  ------------------------------------------------------------------------------

// -------------------------- All The Images Of This Level Declare Here ---------------------------------

// NavBar Buttons
var homeBtn = "../asset/logo/Home.png"
var backBtn = "../asset/logo/Back.png"

// var bgMusicBtn = 
var hintBtnActive = "../asset/logo/Hint.png"
var hintBtnInactive = "../asset/logo/Hint_Inactive.png"

// var RewardImg = "../asset/logo/Rewards.png"
// var RewardStartImg = "../asset/logo/Rewards 10.png"   // Level 4 Start Reward
var RewardStartImg = "../asset/logo/Rewards.png"   // Level 4 Start Reward
var RewardEndImg = "../asset/logo/Rewards 20.png"   // Level 4 End Reward

var SoundImgMute = "../asset/logo/Music_Mute.png"
var SoundImgUnMute = "../asset/logo/Music.png"

// var bgImg = "../asset/level_one_assets/Backgound.png"   // BackGroud Image
var bgImg = "../asset/level_two_assets/Backgound.png"   // BackGroud L2 Image
var letsPlay = "../asset/Let's_play.png"    // Let's Play Button

// All Correct Ans Variables
var S1Cor = false, S2Cor = false, S3Cor = false, S4Cor = false, S5Cor = false, S6Cor = false,
  S7Cor = false, S8Cor = false, S9Cor = false, S10Cor = false

// All Wrong Ans Variables
var S1Wro = false, S2Wro = false, S3Wro = false, S4Wro = false, S5Wro = false, S6Wro = false,
  S7Wro = false, S8Wro = false, S9Wro = false, S10Wro = false

// Level 1 Complete Slide Images
var playAgain = "../asset/logo/Play again.png"
var playNext = "../asset/logo/Play the next level.png"

// Error Images
var ErrorBorder = "../asset/level_two_assets/Incorrectanswer highlight.png"
var SuccessBorder = "../asset/level_two_assets/Correct answer highlight.png"

// Error Border For Level Complete
// var ErrorBorderLCom = ""

// Level 1 Images
// Load Place holder Image - white Box
// var WhiteBox = "../asset/Image place holder.png"
var WhiteBox = "../asset/level_two_assets/Image place holder.png"

// Slide-1 Images
// var S1LHS = "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png"    // 2 Blue Shirts

// var S1LHS = "../asset/level_two_assets/image aseet Ltwo Updated/Set 1_10 red shirts.png"   // 10 Red Shirts
var S1LHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 1_2 red shirts.png"   // 2 Red Shirts
var S1RHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 1_10 red shirts.png"   // 10 Red Shirts

// Slide-2 Images
var S2LHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 2_3 bottles.png"   // 3 bottle
var S2RHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 2_9 bottles.png"   // 9 bottlw

// Slide-3 Images
var S3LHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 3_2 chairs.png"   // 2 chair
var S3RHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 3_8 chairs.png"   // 8 chair

// Slide-4 Images
var S4LHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 4_4 blue footballs.png"  // 4 FootBalls Blue
var S4RHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 4_8 blue footballs.png"  // 8 FootBalls Blue

// Slide-5 Images
var S5LHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 5_5 pink balloons.png"  // 10 Balloons
var S5RHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 5_9 pink balloons.png"  // 5 Balloons

// Slide-6 Images
var S6LHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 6_3 shorts.png"  // 3 Shorts
var S6RHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 6_8 shorts.png"  // 8 Shorts

// Slide-7 Images
var S7LHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 7_6 socks.png"  // 6 socks
var S7RHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 7_8 socks.png"  // 8 socks

// Slide-8 Images
var S8LHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 8_3 trousers.png"  // 3 Trousers
var S8RHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 8_5 trousers.png"  // 5 Trousers

// Slide-9 Images
var S9LHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 9_4 white footballs.png"  // 4 white ball
var S9RHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 9_5 white footballs.png"  // 5 white ball

// Slide-10 Images
var S10LHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 10_9 shoes.png"  // 9 Shoes
var S10RHS = "../asset/level_two_assets/image asset Ltwo Updated/Set 10_10 shoes.png"  // 10 Shoes


// Load ProgressBar Img
// Main Image
// var progressBarImg = "../asset/Progress_bar/Updated/Progress bar_Type_1 10.png"
var progressBarImg = "../asset/Progress_bar/Updated/Progress bar_level2_start.png"

// Audio Reply Btn Image
var AudioReplyBtnImg = "../asset/logo/Audio_Replay.png"


// Change Image according to round
// var l1PSDemo = "../asset/Progress_bar/Progress_Bar_Type2_element20.png" // Working
var l2PS1 = "../asset/Progress_bar/Updated/Progress bar_Type_1 11.png"
var l2PS2 = "../asset/Progress_bar/Updated/Progress bar_Type_1 12.png"
var l2PS3 = "../asset/Progress_bar/Updated/Progress bar_Type_1 13.png"
var l2PS4 = "../asset/Progress_bar/Updated/Progress bar_Type_1 14.png"
var l2PS5 = "../asset/Progress_bar/Updated/Progress bar_Type_1 15.png"
var l2PS6 = "../asset/Progress_bar/Updated/Progress bar_Type_1 16.png"
var l2PS7 = "../asset/Progress_bar/Updated/Progress bar_Type_1 17.png"
var l2PS8 = "../asset/Progress_bar/Updated/Progress bar_Type_1 18.png"
var l2PS9 = "../asset/Progress_bar/Updated/Progress bar_Type_1 19.png"
var l2PS10 = "../asset/Progress_bar/Updated/Progress bar_Type_1 20.png"

// ---------------------- Global Sound -------------------
// BackGround Sound
var BGSound = '../Sounds/level0_sounds/backgroud_music_free.mp3'


// Audio reply sound 
var AudioReplaySound = '../Sounds/level2_sounds/ML_A_L2_3.mp3'

// Sound for wrong ans
var wrong_ans_sound = '../Sounds/Global_Music/Music/For the wrong answer.mp3'
var tryAgainSound = '../Sounds/Global_Music/GL_A_20.mp3'

// Sound for right ans
var right_ans_sound = '../Sounds/Global_Music/Music/For correct answer.mp3'

// Global Varibale are Declare Here
var isFirstVisit = false;
var planeRedStatus = false;
var planeGreenStatus = false;
var audioPlayed = true;  // This is Check the audio is complete or Not

var replyAudioSound, soundReplyisPlaying = true, dblClick = false;
// var audio2Load = false;
var planeLHSMain, planeRHSMain, sound, sound2, listener, listenerBG, storeAudioState;

// Headers Variables
var planeHome, planeBack, planeProgress, planeSound, planeSoundOff, planeHint, planeReward;

// LevelOneComplete (LOC) Variables 
// var planeLOCLHS, planeLOCRHS;

// LevelTwoComplete (LTC) Variables 
var planeLTCLHS, planeLTCRHS;

// Variables For Wrong Answer Check
var planeWrongAns, planeWrongAnsS2, planeWrongAnsS3, planeWrongAnsS4, planeWrongAnsS5, planeWrongAnsS6, planeWrongAnsS7, planeWrongAnsS8, planeWrongAnsS9, planeWrongAnsS10

// Variables For Correct Answer Check
var planeCorrectAns, planeCorrectAnsS2, planeCorrectAnsS3, planeCorrectAnsS4, planeCorrectAnsS5, planeCorrectAnsS6, planeCorrectAnsS7, planeCorrectAnsS8, planeCorrectAnsS9, planeCorrectAnsS10

// Slide 1 Variables
var planeS1LHS, planeS1RHS

// Slide 2 Variables
var planeS2LHS, planeS2RHS

// Slide 3 Variables
var planeS3LHS, planeS3RHS

// Slide 4 Variables
var planeS4LHS, planeS4RHS

// Slide 5 Variables
var planeS5LHS, planeS5RHS

// Slide 6 Variables
var planeS6LHS, planeS6RHS

// Slide 7 Variables
var planeS7LHS, planeS7RHS

// Slide 8 Variables
var planeS8LHS, planeS8RHS

// Slide 9 Variables
var planeS9LHS, planeS9RHS

// Slide 10 Variables
var planeS10LHS, planeS10RHS


// Varibles for Check Fuction is active or not
var AnsS1Cor = false, AnsS2Cor = false, AnsS3Cor = false, AnsS4Cor = false, AnsS5Cor = false,
  AnsS6Cor = false, AnsS7Cor = false, AnsS8Cor = false, AnsS9Cor = false, AnsS10Cor = false


// Remove Eventlistner After function call
// Make 1 Varible For Check Is Play Again Button is Click or not
// Default is False
var isPlayAgain = false, SCom = true, isAudio10Com = false, AnsS2Cor = false

//Check Image Status
var musicImgStatus = true, replyAudioBtnSound, isAudiReplyplay = false, planeReplyAudio

var newrewardPoints, getNewRewardPoints, getRewardData, getRewardString, finalReward, meshText

// Global x,y Size For Slide Rounds
// SXIPosLHS = Slide X Image Position   LHS
// SYIPosLHS = Slide Y Image Position   LHS
// var SXIPosLHS = -1.75 // Old
var SXIPosLHS = -1.93
var SYIPosLHS = -0.4

// SXIPosRHS = Slide X Image Position   RHS
// SYIPosRHS = Slide Y Image Position   RHS
// var SXIPosRHS = 1.75 // Old
var SXIPosRHS = 1.93
var SYIPosRHS = -0.4


// Home Button Position
// var PHomeX = -2.8  // Old
var PHomeX = -3.2
var PHomeY = 1.5

// Back Button Position
// var PBackX = -2.1  // Old
var PBackX = -2.7
var PBackY = 1.5

// Sound Button Position
// var PSoundX = 1.5  // Old
var PSoundX = 1.7
var PSoundY = 1.5

// Hint Button Position
// var PHintX = 2 // Old
var PHintX = 2.2
var PHintY = 1.5

// Reward Button Position
var PRewardX = 3
var PRewardY = 1.53

// White Box Size
// WB:- White Box
// var WBPosX = 3 // Old
// var WBPosY = 3 // Old
var WBPosX = 3.6
var WBPosY = 3.1


// Skip Btn --------------------------
// Skip Button 
var skipBtn = "../asset/logo/Skip.png"
var planeSkipBtn

// Skip Btn Position
var SkipPosX = 3.3
var SkipPosY = -1.3

// Reward Points Position
var RewardPointsX = 3.05
var RewardPointsY = 1.4


// if Mobile Device check properly then apply to all levels
// ----------------------------        Working       ---------------------------------
// Check Webiste is open in mobile or desktop
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
// var element = document.getElementById('text');
if (isMobile) {
  // element.innerHTML = "You are using Mobile";
  console.log("This is Mobile");


  // Update Navbar Size for Mobile View
  // Home Button Position
  PHomeX = -3.3
  PHomeY = 1.5

  // Back Button Position
  // PBackX = -2.6  // Old
  PBackX = -2.8
  PBackY = 1.5

  // Sound Button Position
  // PSoundX = 1.7  // Old
  PSoundX = 1.85
  PSoundY = 1.5

  // Hint Button Position
  // PHintX = 2.2 // Old
  PHintX = 2.3
  PHintY = 1.5

  // Reward Button Position
  PRewardX = 3.1
  PRewardY = 1.53

  // Reward Points Position
  RewardPointsX = 3.15
  RewardPointsY = 1.4

  // White Box Size
  // WB:- White Box
  WBPosX = 3.5
  WBPosY = 3

  // SXIPosLHS = Slide X Image Position   LHS
  // SYIPosLHS = Slide Y Image Position   LHS
  SXIPosLHS = -1.93
  SYIPosLHS = -0.4
  // SXIPosRHS = Slide X Image Position   RHS
  // SYIPosRHS = Slide Y Image Position   RHS
  SXIPosRHS = 1.93
  SYIPosRHS = -0.4

  // setTimeout(() => {
  //     alert("This is Mobile")
  // }, 200);
  // alert("This is Mobile")

  // Showing Alert Message on Mobile Screen
  // Message is Empty
  // function tempAlert(msg, duration) {
  //     var el = document.createElement("div");
  //     el.setAttribute("style", "position:absolute;top:40%;left:20%;background-color:white;");
  //     el.innerHTML = msg;
  //     setTimeout(function () {
  //         el.parentNode.removeChild(el);
  //     }, duration);
  //     document.body.appendChild(el);
  // }
  // tempAlert("", 200)


} else {
  // element.innerHTML = "You are using Desktop";
  console.log("This is Desktop");
  // alert("This is desktop")
}
// -----------------------------------------------------------------------------------------


// Code For Orientation - Potrait
if (winHeight < winWidth) {
  console.log("This is Landscape");
  // screen.orientation.lock()

  // // Home Button Position
  // PHomeX = -3.3
  // PHomeY = 1.5

  // // Back Button Position
  // PBackX = -2.1
  // PBackY = 1.5

  let isFullScreen = false;
  let touchtime = 0;
  var elem = document.body;

  // mobile device
  // window.ontouchstart = function () {
  //     // init()
  //     console.log("bbbb")
  //     if (touchtime == 0) {
  //         // set first click
  //         touchtime = new Date().getTime();
  //     } else {
  //         // compare first click to this click and see if they occurred within double click threshold
  //         if (((new Date().getTime()) - touchtime) < 800) {
  //             // double click occurred
  //             if ((window.fullScreen) ||
  //                 (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
  //                 console.log(window.fullScreen + "____________________: " + (window.innerWidth == screen.width && window.innerHeight == screen.height));
  //             } else {
  //                 if (elem.requestFullscreen) {
  //                     elem.requestFullscreen();
  //                 } else if (elem.msRequestFullscreen) {
  //                     elem.msRequestFullscreen();
  //                 } else if (elem.mozRequestFullScreen) {
  //                     elem.mozRequestFullScreen();
  //                 } else if (elem.webkitRequestFullscreen) {
  //                     elem.webkitRequestFullscreen();
  //                 }
  //             }
  //             touchtime = 0;
  //         } else {
  //             // not a double click so set as a new first click
  //             touchtime = new Date().getTime();
  //         }
  //     }
  // }
}

// For Landscape Mode
if (winHeight > winWidth) {
  console.log("This is portrait");
  console.log("Old H:-", window.innerHeight, "W:-", window.innerWidth);

  var newH = window.innerWidth
  var newW = window.innerHeight
  console.log("New H:-", newH, "W:-", newW);
  window.innerHeight = newW
  window.innerWidth = newH


  // Scene  - Global
  var scene = new THREE.Scene();

  // Camera - Global
  var camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(0, 0, 4);

  // Renderer - Global
  const renderer = new THREE.WebGLRenderer({
    canvas,
    // canvasPopup,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.setSize(window.screen.width, window.screen.height);
  // console.log("window.innerWidth, window.innerHeight",window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Render Scene and Camera  - Global
  renderer.render(scene, camera)
  document.body.appendChild(renderer.domElement);

  // Resize the Screen  - Global
  // window.addEventListener('resize', function () {
  //     camera.aspect = winWidth / winHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(winWidth, winHeight)
  // })
}

// Detect When user Move to other Slide or Change Screen
document.addEventListener("visibilitychange", function () {
  var pageHidden = document.hidden
  var pageVisible = document.visibilityState
  console.log(pageHidden, pageVisible)
  /* console.log(document.hidden, document.visibilityState)  */
  console.log("Screen is Minimize")
  if (pageHidden == true) {
    // sound.pause()
    sound2.pause()
    // window.alert("Page Change")
    // window.location.reload()
  }
  if (pageHidden == false) {
    // sound.play()
    if (musicImgStatus == true) {
      sound2.play()
    }
    // window.location.reload()
  }
}, false);

// ------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------
// Fetch Data From Local Storage
getRewardString = localStorage.getItem('RewardPoints')
getRewardData = JSON.parse(getRewardString)
console.log("getRewardData Out", getRewardData)

// if (getRewardData) {
//   console.log("getRewardData", getRewardData)
// } else {
//   localStorage.setItem('RewardPoints', 0)
// }

// ---------------------------------------------------------------------------------------------------------


// Stop All Logs Dispay
console.log = function () { }
console.error = function () { }
console.warn = function () { }

const loadImg = new THREE.TextureLoader();
loadImg.load(
  // "../asset/level_one_assets/Backgound.png",
  bgImg,

  function (texture) {
    var planeMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      // visible: false 
    });

    //Create a 2x2 plane with texture
    // var planeGeometry = new THREE.PlaneBufferGeometry(16, 9);
    // var planeGeometry = new THREE.PlaneBufferGeometry(9.1, 4.8);
    var ang_rad = camera.fov * Math.PI / 180;
    var fov_y = camera.position.z * Math.tan(ang_rad / 2) * 2;
    var planeGeometry = new THREE.PlaneBufferGeometry(fov_y * camera.aspect, fov_y);
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(plane);
    // plane.position.z =1
  },
  // undefined,
  function (err) {
    console.error('An error happened in Backgroud Image', err);
  }

);


// // Screen Lock Function Working
// function openFullscreen() {
//   // localStorage.setItem('FullScreen', true)
//   console.log("Screen Locked");
//   start()

//   function ready() {
//     const { type } = screen.orientation;
//     console.log(`Fullscreen and locked to ${type}. Ready!`);
//   }

//   async function start() {
//     // await document.body.requestFullscreen();
//     await screen.orientation.lock("landscape");
//     ready();
//   }
// }
// screen.orientation.lock("landscape")

// Controls - access OrbitControls
// const controls = new OrbitControls( camera, renderer.domElement );

// to disable zoom
// controls.enableZoom = false;

// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = true;
// controls.enablePan = false;


// Call All The Functions Here
// init();
setTimeout(() => {
  // console.log("SetTime For Let's Play Button")
  firstVisit()
}, 500);
// firstVisit()



// firstVisit Function Will be Executed When Use Visit Page First Time
function firstVisit() {
  console.clear()

  // controls.update();
  // isFirstVisit = true;
  // insOneLoad = true;  // Display 1st instructor
  // insTwoLoad = false; // Hide 2nd instructor
  // Load Image here Start Button 
  const loadImg = new THREE.TextureLoader();
  loadImg.load(
    letsPlay,

    function (texture) {
      var planeMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var planeGeometry = new THREE.PlaneBufferGeometry(0.80, 0.60);
      var plane = new THREE.Mesh(planeGeometry, planeMaterial);
      scene.add(plane);
      plane.position.z = 1

      // OnClick Event For planeLHS
      const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
      domEvents.addEventListener(plane, 'click', function (event) {
        openFullscreen()
        // event.preventDefault()
        // console.log("planeInnerLHS clicked")
        // console.log("planeInnerLHS origDomEvent", event.origDomEvent)
        // console.log("planeInnerLHS isTrusted", event.origDomEvent.isTrusted)
        // var btndisable = event.origDomEvent.isTrusted;
        // console.log("btndisable",btndisable);

        // Remove EventListner Here
        domEvents.removeEventListener(plane, 'click', function (e) {
          // console.log("remove listner call")
          domEvents.addEventListener(plane, 'click', function (event) {
            // console.log("Add Listne Again")
          })
          // plane.visible = false
        })

        soundBG(BGSound)
        if (audioPlayed == true) {

          init();     // call Main Function
          // l1Slide1();    // Direct l1Slide 1 Call
          // console.log("this is true");
          //Level0 Complete
          var level2_Com = localStorage.getItem('level2Complete')
          var level2_Com_val = JSON.parse(level2_Com)
          // console.log("level1_Pre:--------------------------", level0_Com_val)
          if (level2_Com_val == true) {
            // S6Cor = true
            // l4PS6_Skip()
            skiplevelBtn()
          }

          plane.visible = false;
        }
        // plane.visible = false;    
      }, false)

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );
  // Render Scene and Camera  - Global
  renderer.render(scene, camera)
  document.body.appendChild(renderer.domElement);

  // // Resize the Screen  - Global - Active
  // window.addEventListener('resize', function () {
  //   camera.aspect = window.innerWidth / window.innerHeight;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize(window.innerWidth, window.innerHeight)
  // })
}

// // firstVisit Function Will be Executed When Use Visit Page First Time
// function firstVisitAgain() {
//   // isFirstVisit = true;
//   // insOneLoad = true;  // Display 1st instructor
//   // insTwoLoad = false; // Hide 2nd instructor
//   // Load Image here Start Button 
//   const loadImg2 = new THREE.TextureLoader();
//   loadImg2.load(
//     letsPlay,

//     function (texture2) {
//       var planeMaterial2 = new THREE.MeshBasicMaterial({
//         map: texture2,
//         transparent: true,
//         // visible: false 
//       });

//       //Create a 2x2 plane with texture
//       var planeGeometry2 = new THREE.PlaneBufferGeometry(0.80, 0.80);
//       var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
//       scene.add(plane2);
//       plane2.position.z = 1

//       // OnClick Event For planeLHS
//       const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
//       domEvents.addEventListener(plane2, 'click', function (event) {
//         // event.preventDefault()
//         // console.log("plane2 clicked")
//         // console.log("planeInnerLHS origDomEvent", event.origDomEvent)
//         // console.log("planeInnerLHS isTrusted", event.origDomEvent.isTrusted)
//         // var btndisable = event.origDomEvent.isTrusted;
//         // console.log("btndisable",btndisable);

//         // // Remove EventListner Here
//         // domEvents.removeEventListener(plane, 'click', function(e){
//         //     console.log("remove listner call")
//         //     domEvents.addEventListener(plane, 'click', function (event) {
//         //         console.log("Add Listne Again")
//         //     })
//         //     // plane.visible = false
//         // })

//         if (audioPlayed == true) {
//           nextAudio = false   // For Reactive Ins-1
//           // checkBGAudio()
//           init();     // call Main Function
//           // console.log("this is true");
//           plane2.visible = false;

//           // Comment audio only for testing purpose
//           // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
//           // btndisable = false

//           // console.log("insOneLoad inside Function", insOneLoad);
//           // console.log("insTwoLoad inside Function", insTwoLoad);
//           // isFirstVisit = false

//           // insOneLoad = false;  // Make instructor 1 invisible
//           // insTwoLoad = false;  // Make instructor 2 invisible
//         }
//         else {
//           // console.log("btndisable updated", btndisable);
//         }
//         // plane.visible = false;    
//       }, false)

//       //Render the scene
//       renderer.render(scene, camera);
//       document.body.appendChild(renderer.domElement);
//     },
//     // undefined,
//     function (err) {
//       console.error('An error happened in LHS Image.');
//     }
//   );
//   // Render Scene and Camera  - Global
//   renderer.render(scene, camera)
//   document.body.appendChild(renderer.domElement);

//   // Resize the Screen  - Global
//   window.addEventListener('resize', function () {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight)
//   })
// }

// Pause BG Audio Here
function soundBG(path) {
  // Audio Listener Object
  listenerBG = new THREE.AudioListener();
  // camera.add(listener);
  scene.add(listenerBG);

  // create the PositionalAudio object (passing in the listener)
  sound2 = new THREE.PositionalAudio(listenerBG);

  // load a sound and set it as the PositionalAudio object's buffer
  var audioLoader2 = new THREE.AudioLoader();
  // console.log("audioLoader :-", audioLoader)
  // console.log("audioLoader Start :-", audioLoader.manager.itemStart);
  // console.log("audioLoader End :-", audioLoader.manager.itemEnd);
  audioLoader2.load(path, function (buffer) {
    sound2.setBuffer(buffer);
    sound2.setRefDistance(20);
    sound2.setLoop(true);
    // Sound Speed Control here

    sound2.play();
    // For Autoplay audio
    // sound.autoplay = true;
    sound2.setVolume(0.1)
    // console.log("sound:- ", sound);
    // storeAudioState = sound2.source.onended;
  }, false);
}

// For Level Complete Audio
// Play Reply Audio and Pause playAudio Function sound here
function LevelCompleteSound(path) {

  // Audio Listener Object
  var listener3 = new THREE.AudioListener();
  // camera.add(listener);
  // scene.add(listener3);

  // create the PositionalAudio object (passing in the listener)
  var replyAudioSound = new THREE.PositionalAudio(listener3);

  // load a sound and set it as the PositionalAudio object's buffer
  var audioLoader3 = new THREE.AudioLoader();
  // console.log("audioLoader :-", audioLoader)
  // console.log("audioLoader Start :-", audioLoader.manager.itemStart);
  // console.log("audioLoader End :-", audioLoader.manager.itemEnd);
  audioLoader3.load(path, function (buffer) {

    replyAudioSound.setBuffer(buffer);
    replyAudioSound.setRefDistance(20);
    // Sound Speed Control here
    replyAudioSound.play();

  }, false);
}

// -------------------------     NavBar All Icons   ------------------------------------

// All Header Components Add Here
// Home Button Function
function headerHome() {
  // console.log("Function headerHome");
  const hHome = new THREE.TextureLoader();
  hHome.load(
    // Load Home Image
    homeBtn,

    function (textureHome) {
      var planeMaterialHome = new THREE.MeshBasicMaterial({
        map: textureHome,
        transparent: true,
        // visible: false 
      });
      //Create a 0.30x0.30 plane with texture
      // var planeGeometryHome = new THREE.PlaneBufferGeometry(0.38, 0.38);
      // var planeGeometryHome = new THREE.PlaneBufferGeometry(0.38, 0.36); // Active
      var planeGeometryHome = new THREE.PlaneBufferGeometry(0.38, 0.34);
      planeHome = new THREE.Mesh(planeGeometryHome, planeMaterialHome);
      scene.add(planeHome);
      planeHome.position.x = PHomeX
      planeHome.position.y = PHomeY
      planeHome.position.z = 1

      // Testing Position Responsive
      // planeHome.position.x = -2 * (planeHome.position.x / canvas.offsetWidth) - 2.1

      // OnClick Event For planeHome
      const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
      domEvents.addEventListener(planeHome, 'click', function (event) {
        // console.log("planeHome clicked")

        // planeLZCLHS.dispose

        // Only Remove but Button is Active after this event perform
        // scene.remove(planeLZCLHS, planeLZCRHS);


        // firstVisitAgain()
        // homePopup();
        // Redirect to new page onClick - working
        // domEventsLHS.userData = { URL: "http://stackoverflow.com" };
        // window.location.href = '/homePopup.html';

        var currentPath = `${endPoint}/level2.html`

        if (currentPath == `${endPoint}/level2.html`) {
          console.log("Redirect New Page");
          console.log("endPoint", endPoint);
          location.href = '/homePopup.html'
        } else {
          location.href = '/homePopup.html'
        }

        // Redirect to new page onClick - not working
        // var mybtn = document.querySelector('.level0_4');
        // mybtn.onClick = "location.href='level0_4.html'";

        // console.log("planeInnerLHS origDomEvent", event.origDomEvent)
        // console.log("planeInnerLHS isTrusted", event.origDomEvent.isTrusted)
        // var btndisable = event.origDomEvent.isTrusted;
        // console.log("btndisable",btndisable);
        // if (audioPlayed == true){
        //     console.log("this is true");
        //     plane.visible = false;
        //     init();     // call Main Function

        //     // Comment audio only for testing purpose
        //     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
        //     // btndisable = false

        //     insOneLoad = false;  // Make instructor 1 invisible
        //     insTwoLoad = false;  // Make instructor 2 invisible
        //     console.log("insOneLoad inside Function", insOneLoad);
        //     console.log("insTwoLoad inside Function", insTwoLoad);
        // }
        // else{
        //     console.log("btndisable updated", btndisable);
        // }
        // plane.visible = false;    
      }, false)

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in planeHome.');
    }
  );
  // Render Scene and Camera  - Global
  renderer.render(scene, camera)
  document.body.appendChild(renderer.domElement);
}

// Function Back Button 
function headerBack() {
  // console.log("Function headerBack");
  const hBack = new THREE.TextureLoader();
  hBack.load(
    // Load Back_inActive Image
    // "../asset/logo/Back_Inactive.png",
    backBtn,

    function (textureBack) {
      var planeMaterialBack = new THREE.MeshBasicMaterial({
        map: textureBack,
        transparent: true,
        // visible: false 
      });
      //Create a 0.30x0.30 plane with texture
      // var planeGeometryBack = new THREE.PlaneBufferGeometry(0.38, 0.36);
      var planeGeometryBack = new THREE.PlaneBufferGeometry(0.38, 0.34);
      planeBack = new THREE.Mesh(planeGeometryBack, planeMaterialBack);
      scene.add(planeBack);
      planeBack.position.x = PBackX
      planeBack.position.y = PBackY
      planeBack.position.z = 1

      //back Btn OnClick event Add Here
      const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
      domEvents.addEventListener(planeBack, 'click', function (event) {
        console.log("Back Btn Press")

        // location.Back()
        // history.back()
        // history.go(-1)
        // location.href = 'level2.html'

        // Go to Level 1 Gameplay
        // window.location.href = '/level1.html'
        var currentPath = `${endPoint}/level2.html`

        if (currentPath == `${endPoint}/level2.html`) {
          console.log("Redirect New Page");
          console.log("endPoint", endPoint);
          // location.href = '/level1.html'
          window.location.replace(`/level1.html`);  // Active
          // window.location.replace(`/level1Testing.html`);  // Testing
        } else {
          // location.href = '/level1.html'
          window.location.replace(`/level1.html`); // Active
          // window.location.replace(`/level1Testing.html`);  // Testing
        }


      })

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in planeBack.');
    }
  );
}

// Function Progress Button 
// Make ProgressBar Dynamic with Every Function Call add Path to it 
// Working
function headerProgress(PIpath) {
  console.clear()

  // console.log("Function headerProgress");
  // Put Switch Case Here For Dynamic Image

  const hProgress = new THREE.TextureLoader();
  hProgress.load(
    // Load Back_inActive Image

    // progressBarImg, // Put Dynamic Image here
    PIpath, // Put Dynamic Image here   // working

    function (textureProgress) {
      var planeMaterialProgress = new THREE.MeshBasicMaterial({
        map: textureProgress,
        transparent: true,
      });
      //Create a 0.30x0.30 plane with texture
      // var planeGeometryProgress = new THREE.PlaneBufferGeometry(2, 0.34);
      var planeGeometryProgress = new THREE.PlaneBufferGeometry(2, 0.3);
      planeProgress = new THREE.Mesh(planeGeometryProgress, planeMaterialProgress);
      scene.add(planeProgress);
      planeProgress.position.x = 0
      planeProgress.position.y = 1.5
      planeProgress.position.z = 1

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in planeProgress.');
    }
  );
}

// Function Hearder Sound
function headerSound(path) {

  // console.log("Function headerSound");
  const hSoundOn = new THREE.TextureLoader();
  hSoundOn.load(
    // Load Music Image
    // "../asset/logo/Music.png",
    path,

    function (textureSound) {
      var planeMaterialSound = new THREE.MeshBasicMaterial({
        map: textureSound,
        transparent: true,
        // visible: false 
      });
      //Create a 0.30x0.30 plane with texture
      var planeGeometrySound = new THREE.PlaneBufferGeometry(0.38, 0.34);
      planeSound = new THREE.Mesh(planeGeometrySound, planeMaterialSound);
      scene.add(planeSound);
      planeSound.position.x = PSoundX
      planeSound.position.y = PSoundY
      planeSound.position.z = 1

      // Add OnClick event Here
      // Music off When This Event Occurs
      const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
      domEvents.addEventListener(planeSound, 'click', function (event) {
        console.log("Sound Btn Click")

        // Check Toggel Condition
        toggelMusic()

        // sound.setVolume(0);
      }, false)

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in planeSound.');
    }
  );
}

// Function Toggel Music 
function toggelMusic() {

  if (musicImgStatus == true) {
    musicImgStatus = false
    sound2.pause()
    console.log("sound off");

    const hSoundOn = new THREE.TextureLoader();
    hSoundOn.load(
      // Load Music Image
      // "../asset/logo/Music_Mute.png",
      SoundImgMute,

      function (textureSound) {
        var planeMaterialSound = new THREE.MeshBasicMaterial({
          map: textureSound,
          transparent: true,
          // visible: false 
        });
        //Create a 0.30x0.30 plane with texture
        var planeGeometrySound = new THREE.PlaneBufferGeometry(0.38, 0.34);
        planeSound = new THREE.Mesh(planeGeometrySound, planeMaterialSound);
        scene.add(planeSound);
        planeSound.position.x = PSoundX
        planeSound.position.y = PSoundY
        planeSound.position.z = 1

        //Render the scene
        renderer.render(scene, camera);
        document.body.appendChild(renderer.domElement);
      },
      // undefined,
      function (err) {
        console.error('An error happened in planeSound.');
      }
    );
  }
  else {
    musicImgStatus = true
    sound2.play();
    console.log("sound on");
    const hSoundOn = new THREE.TextureLoader();
    hSoundOn.load(
      // Load Music Image
      // "../asset/logo/Music.png",
      SoundImgUnMute,

      function (textureSound) {
        var planeMaterialSound = new THREE.MeshBasicMaterial({
          map: textureSound,
          transparent: true,
          // visible: false 
        });
        //Create a 0.30x0.30 plane with texture
        var planeGeometrySound = new THREE.PlaneBufferGeometry(0.38, 0.34);
        planeSound = new THREE.Mesh(planeGeometrySound, planeMaterialSound);
        scene.add(planeSound);
        planeSound.position.x = PSoundX
        planeSound.position.y = PSoundY
        planeSound.position.z = 1

        //Render the scene
        renderer.render(scene, camera);
        document.body.appendChild(renderer.domElement);
      },
      // undefined,
      function (err) {
        console.error('An error happened in planeSound.');
      }
    );
  }
}

// Function Hint Button
function headerHint() {
  // console.log("Function headerHint");
  const hHint = new THREE.TextureLoader();
  hHint.load(
    // Load Hint_Inactive Image
    hintBtnActive,

    function (textureHint) {
      var planeMaterialHint = new THREE.MeshBasicMaterial({
        map: textureHint,
        transparent: true,
        // visible: false 
      });
      //Create a 0.30x0.30 plane with texture
      var planeGeometryHint = new THREE.PlaneBufferGeometry(0.38, 0.34);
      planeHint = new THREE.Mesh(planeGeometryHint, planeMaterialHint);
      scene.add(planeHint);
      planeHint.position.x = PHintX
      planeHint.position.y = PHintY
      planeHint.position.z = 1

      // OnClick On Hint Button
      const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
      domEvents.addEventListener(planeHint, 'click', function (event) {
        console.log("Hint Btn Click")

        // if (localStorage.levelData.)
        // window.location.href = "/level2_Pre.html"
        var currentPath = `${endPoint}/level2.html`

        if (currentPath == `${endPoint}/level2.html`) {
          console.log("Redirect New Page");
          console.log("endPoint", endPoint);
          // location.href = '/level2_Pre.html'
          window.location.replace(`/level2_Pre.html`);
        } else {
          // location.href = '/level2_Pre.html'
          window.location.replace(`/level2_Pre.html`);
        }

      })
      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in planeHint.');
    }
  );
}

// Function Reward Button 
function headerReward(RewardPath) {
  // console.log("Function headerReward");
  const hReward = new THREE.TextureLoader();
  hReward.load(
    // Load Rewards Image
    // RewardImg,
    RewardPath,

    function (textureReward) {
      var planeMaterialReward = new THREE.MeshBasicMaterial({
        map: textureReward,
        transparent: true,
        // visible: false 
      });
      //Create a 0.30x0.30 plane with texture
      var planeGeometryReward = new THREE.PlaneBufferGeometry(1, 0.34);
      planeReward = new THREE.Mesh(planeGeometryReward, planeMaterialReward);
      scene.add(planeReward);
      planeReward.position.x = PRewardX
      planeReward.position.y = PRewardY
      planeReward.position.z = 1

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in planeReward.');
    }
  );
}

// Function For Reward Points
function RewardPoints(rewards) {
  // finalReward = " "
  var loader = new THREE.FontLoader();

  finalReward = String(rewards)
  // console.log("finalReward", finalReward);

  loader.load('https://cdn.rawgit.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json', function (font) {


    // var geometry = new THREE.TextGeometry('10', {
    var geometry = new THREE.TextGeometry(finalReward, {
      font: font,

      size: 2.8,
      // height: 5,
      height: 1,
      curveSegments: 10,
    });

    // var material = new THREE.MeshPhongMaterial({ color: 0xff0000, specular: 0xffffff });
    // var material = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0xffffff });
    var material = new THREE.MeshBasicMaterial({
      color: 0xffffff, specular: 0xffffff
    });

    // mesh = new THREE.Mesh(geometry, material);
    meshText = new THREE.Mesh(geometry, material);
    // meshText.position.set(2, 1, 1);
    // meshText.position.x = 3.05
    // meshText.position.y = 1.4
    meshText.position.x = RewardPointsX
    meshText.position.y = RewardPointsY
    meshText.position.z = 1

    // meshText.scale.multiplyScalar(0.01) // active
    meshText.scale.x = 0.037
    meshText.scale.y = 0.037
    meshText.scale.z = 0.01
    // console.log("meshText", meshText);
    // console.log("meshText scale", meshText.scale);
    scene.add(meshText);
  });
}


// -------------------------------------------------------------------------------------


// ---------------------    Audio Reply Button -------------------------------------
// Play Reply Audio and Pause playAudio Function sound here
function soundReplyAudio(path) {
  console.clear()


  // sound.pause()
  // Audio Listener Object
  var listener3 = new THREE.AudioListener();
  // camera.add(listener);
  scene.add(listener3);

  // create the PositionalAudio object (passing in the listener)
  // replyAudioSound = new THREE.PositionalAudio(listener3);
  replyAudioBtnSound = new THREE.PositionalAudio(listener3);

  // load a sound and set it as the PositionalAudio object's buffer
  var audioLoader3 = new THREE.AudioLoader();
  // console.log("audioLoader :-", audioLoader)
  // console.log("audioLoader Start :-", audioLoader.manager.itemStart);
  // console.log("audioLoader End :-", audioLoader.manager.itemEnd);
  audioLoader3.load(path, function (buffer) {

    replyAudioBtnSound.setBuffer(buffer);
    replyAudioBtnSound.setRefDistance(20);
    // Sound Speed Control here
    replyAudioBtnSound.play();


    switch (path) {
      case AudioReplaySound:    // Working
        isAudiReplyplay = true  // Not Play again if audio is already working

        //Render the scene for Update The Values
        renderer.render(scene, camera);
        document.body.appendChild(renderer.domElement);
        break;

      // case wrong_ans_sound:    // Working
      //   isAudiReplyplay = true  // Not Play again if audio is already working
      //   replyAudioSound.stop();

      //   //Render the scene for Update The Values
      //   renderer.render(scene, camera);
      //   document.body.appendChild(renderer.domElement);
      //   break;

      // case right_ans_sound:    // Working
      //   isAudiReplyplay = true  // Not Play again if audio is already working
      //   replyAudioSound.stop();

      //   //Render the scene for Update The Values
      //   renderer.render(scene, camera);
      //   document.body.appendChild(renderer.domElement);
      //   break;

      default:
        break;
    }

    // For Autoplay audio
    // sound.autoplay = true;
    // replyAudioSound.setVolume(0.1)
    // console.log("replyAudioSound:- ", replyAudioSound);
    // console.log("isPlaying Status in soundreplyAudio", replyAudioSound.isPlaying);

    replyAudioBtnSound.source.onended = function () {
      // console.log("replyAudioSound Ended");
      soundReplyisPlaying = true
      // console.log("replyAudioSound.source.onended", replyAudioSound.source.onended);
      // sound.play()
      // playAudio()
      switch (path) {
        // case '../Sounds/Global_Music/Music/For the wrong answer.mp3':
        case AudioReplaySound:    // Working
          isAudiReplyplay = false

          //Render the scene for Update The Values
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
          break;

        // case wrong_ans_sound:    // Working - wrong ans click 
        //   isAudiReplyplay = false  // Not Play again if audio is already working

        //   //Render the scene for Update The Values
        //   renderer.render(scene, camera);
        //   document.body.appendChild(renderer.domElement);
        //   break;

        // case right_ans_sound:    // Working - right ans click
        //   isAudiReplyplay = false  // Not Play again if audio is already working

        //   //Render the scene for Update The Values
        //   renderer.render(scene, camera);
        //   document.body.appendChild(renderer.domElement);
        //   break;

        default:
          break;
      }
      // replyAudioSound.isPlaying = false
    }
    // this.isPlaying = false;
  }, false);
}

// Function For Reply Audio Button
// Call This Function only when user click on it
// if (isReplyBtnClick == true) {
function replyAudio(path) {
  // isReplyBtnClick = false
  // sound.pause()
  console.log("Reply Audio Working")

  const loadReplyAudio = new THREE.TextureLoader();
  loadReplyAudio.load(
    // '../asset/logo/Audio_Replay.png',
    AudioReplyBtnImg,

    function (textureReplyAudio) {
      var planeMaterialReplyAudio = new THREE.MeshBasicMaterial({
        map: textureReplyAudio,
        transparent: true,
      })

      // var planeGeometryReplyAudio = new THREE.PlaneBufferGeometry(0.35, 0.35)
      var planeGeometryReplyAudio = new THREE.PlaneBufferGeometry(0.35, 0.32)
      planeReplyAudio = new THREE.Mesh(planeGeometryReplyAudio, planeMaterialReplyAudio)
      scene.add(planeReplyAudio)
      planeReplyAudio.position.x = 3.4
      planeReplyAudio.position.y = 1.12
      planeReplyAudio.position.z = 1

      // OnClick Reply Audio Play and other Sound Should be Pause
      if (isAudiReplyplay == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeReplyAudio, 'click', function (event) {
          // if (isFunc4Active == false) {
          if (isAudiReplyplay == false) {

            console.log("Audio Reply Btn Click")

            soundReplyisPlaying = false

            soundReplyAudio(path)    // Working
            // playAudio(path)
            // soundAnsCheck(path)

          }
        })
      }
      // }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in planeHome.');
    }
  );
  // // Resize the Screen  - Global - Active
  // window.addEventListener('resize', function () {
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight)
  // })
}
// ---------------------------------------------------------------------------------


// Play Reply Audio and Pause playAudio Function sound here
// function soundReplyAudio(path) {
function soundAnsCheck(path) {

  // Audio Listener Object
  var listener3 = new THREE.AudioListener();
  // camera.add(listener);
  scene.add(listener3);

  // create the PositionalAudio object (passing in the listener)
  replyAudioSound = new THREE.PositionalAudio(listener3);

  // load a sound and set it as the PositionalAudio object's buffer
  var audioLoader3 = new THREE.AudioLoader();
  // console.log("audioLoader :-", audioLoader)
  // console.log("audioLoader Start :-", audioLoader.manager.itemStart);
  // console.log("audioLoader End :-", audioLoader.manager.itemEnd);
  audioLoader3.load(path, function (buffer) {

    replyAudioSound.setBuffer(buffer);
    replyAudioSound.setRefDistance(20);
    // Sound Speed Control here
    // replyAudioSound.play()
    if (SCom == true) {
      replyAudioSound.play()
    }

    // For Autoplay audio
    // sound.autoplay = true;
    // replyAudioSound.setVolume(0.1)
    // console.log("replyAudioSound:- ", replyAudioSound);
    // console.log("isPlaying Status in soundreplyAudio", replyAudioSound.isPlaying);

    replyAudioSound.source.onended = function () {
      console.log("replyAudioSound Ended");
      soundReplyisPlaying = true
      // console.log("replyAudioSound.source.onended", replyAudioSound.source.onended);
      // sound.play()
      // playAudio()
      if (isAudio10Com == true) {
        SCom = false
      }

      // For Wrong Click
      switch (path) {
        // case '../Sounds/Global_Music/tryAgain.mp3':
        case '../Sounds/Global_Music/Music/For the wrong answer.mp3':    // Working
          console.log("For the wrong answer")
          // console.log("Check Status:- ",planeLHSMainRed.visible);
          // if (planeWrongAns.visible == true) {
          //   planeWrongAns.visible = false
          // }
          // else if (planeWrongAnsS2.visible == true) {
          //     planeWrongAns.visible = false
          //     planeWrongAnsS2.visible = false
          // }
          // gPlayTshirt()
          // console.log("");

          //Render the scene for Update The Values
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
          break;
      }

      // For Correct Click
      // var AnsS1 = (S1Cor == true && S2Cor == false && S3Cor == false && S4Cor == false && S5Cor == false && S6Cor == false && S7Cor == false && S8Cor == false && S9Cor == false && S10Cor == false)
      // var AnsS2 = (S1Cor == true && S2Cor == true && S3Cor == false && S4Cor == false && S5Cor == false && S6Cor == false && S7Cor == false && S8Cor == false && S9Cor == false && S10Cor == false)
      // var AnsS3 = (S1Cor == true && S2Cor == true && S3Cor == true && S4Cor == false && S5Cor == false && S6Cor == false && S7Cor == false && S8Cor == false && S9Cor == false && S10Cor == false)
      // var AnsS4 = (S1Cor == true && S2Cor == true && S3Cor == true && S4Cor == true && S5Cor == false && S6Cor == false && S7Cor == false && S8Cor == false && S9Cor == false && S10Cor == false)
      // var AnsS5 = (S1Cor == true && S2Cor == true && S3Cor == true && S4Cor == true && S5Cor == true && S6Cor == false && S7Cor == false && S8Cor == false && S9Cor == false && S10Cor == false)
      // var AnsS6 = (S1Cor == true && S2Cor == true && S3Cor == true && S4Cor == true && S5Cor == true && S6Cor == true && S7Cor == false && S8Cor == false && S9Cor == false && S10Cor == false)
      // var AnsS7 = (S1Cor == true && S2Cor == true && S3Cor == true && S4Cor == true && S5Cor == true && S6Cor == true && S7Cor == true && S8Cor == false && S9Cor == false && S10Cor == false)
      // var AnsS8 = (S1Cor == true && S2Cor == true && S3Cor == true && S4Cor == true && S5Cor == true && S6Cor == true && S7Cor == true && S8Cor == true && S9Cor == false && S10Cor == false)
      // var AnsS9 = (S1Cor == true && S2Cor == true && S3Cor == true && S4Cor == true && S5Cor == true && S6Cor == true && S7Cor == true && S8Cor == true && S9Cor == true && S10Cor == false)
      // var AnsS10 = (S1Cor == true && S2Cor == true && S3Cor == true && S4Cor == true && S5Cor == true && S6Cor == true && S7Cor == true && S8Cor == true && S9Cor == true && S10Cor == true)


      console.log(`1-${S1Cor}, 2-${S2Cor}, 3-${S3Cor}, 4-${S4Cor}, 5-${S5Cor}`)
      console.log(`6-${S6Cor}, 7-${S7Cor}, 8-${S8Cor}, 9-${S9Cor}, 10-${S10Cor}`)
      // if (AnsS1) {
      if (S1Cor == true) {
        S1Cor = false
        console.log("S1Cor Status:-", S1Cor)

        AnswerCheckS1()
      }

      // else if (AnsS2) {
      else if (S2Cor == true) {
        S2Cor = false
        console.log("S2Cor Status:-", S2Cor)
        AnswerCheckS2()
      }

      // else if (AnsS3) {
      else if (S3Cor == true) {
        S3Cor = false
        console.log("S3Cor Status:-", S3Cor)
        AnswerCheckS3()
      }

      // else if (AnsS4) {
      else if (S4Cor == true) {
        S4Cor = false
        console.log("S4Cor Status:-", S4Cor)
        AnswerCheckS4()
      }

      // else if (AnsS5) {
      else if (S5Cor == true) {
        S5Cor = false
        console.log("S5Cor Status:-", S5Cor)
        AnswerCheckS5()
      }

      // else if (AnsS6) {
      else if (S6Cor == true) {
        S6Cor = false
        console.log("S6Cor Status:-", S6Cor)
        AnswerCheckS6()
      }
      // else if (AnsS7) {
      else if (S7Cor == true) {
        S7Cor = false
        console.log("S7Cor Status:-", S7Cor)
        AnswerCheckS7()
      }
      // else if (AnsS8) {
      else if (S8Cor == true) {
        S8Cor = false
        console.log("S8Cor Status:-", S8Cor)
        AnswerCheckS8()
      }
      // else if (AnsS9) {
      else if (S9Cor == true) {
        S9Cor = false
        console.log("S9Cor Status:-", S9Cor)
        AnswerCheckS9()
      }
      // else if (AnsS10) {
      else if (S10Cor == true) {
        S10Cor = false
        console.log("S10Cor Status:-", S10Cor)
        AnswerCheckS10()
      }
    }
  }, false);
}

// Check Clicked Answer S1
function AnswerCheckS1() {
  // console.log("Answer Check Function Working")

  S1Cor = false
  // if (S1Cor == true){
  //     S1Cor = false
  // console.log("S1Cor Condition working")

  // if (planeCorrectAns.visible == true) {
  //   console.log(" This is Visible S1")
  //   planeS1LHS.visible = false
  //   planeS1RHS.visible = false
  planeCorrectAns.visible = false
  // Noman Change
  // setTimeout(l2Slide2(), 1000)
  // Call Every Slide After 0.7 second
  l2Slide2()
  // setTimeout(() => {
  //   l2Slide2()
  // }, 500);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
}

// Check Clicked Answer S2
function AnswerCheckS2() {
  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S2Cor Condition working")

  // if (planeCorrectAnsS2.visible == true) {
  // if (planeCorrectAns.visible == true) {
  // console.log(" This is Visible S3")
  // planeCorrectAns.visible = false
  planeCorrectAnsS2.visible = false

  // planeS2LHS.visible = false
  // planeS2RHS.visible = false

  l2Slide3()
  // setTimeout(l2Slide3(), 100)
  // setTimeout(() => {
  // l2Slide3()
  // }, 700);

  //   //Render the scene for Update The Values
  //   renderer.render(scene, camera);
  //   document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S3
function AnswerCheckS3() {
  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S3Cor Condition working")

  // if (planeCorrectAnsS3.visible == true) {
  //   console.log(" This is Visible S3")
  //   planeCorrectAns.visible = false
  //   planeCorrectAnsS2.visible = false
  planeCorrectAnsS3.visible = false

  // planeS3LHS.visible = false
  // planeS3RHS.visible = false

  // setTimeout(l2Slide4(), 1000)
  l2Slide4()
  // setTimeout(() => {
  //   l2Slide4()
  // }, 700);

  //   //Render the scene for Update The Values
  //   renderer.render(scene, camera);
  //   document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S4
function AnswerCheckS4() {
  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S4Cor Condition working")

  // if (planeCorrectAnsS4.visible == true) {
  //   console.log(" This is Visible S4")

  //   planeCorrectAns.visible = false
  //   planeCorrectAnsS2.visible = false
  //   planeCorrectAnsS3.visible = false
  planeCorrectAnsS4.visible = false

  // planeS4LHS.visible = false
  // planeS4RHS.visible = false

  // setTimeout(l2Slide5(), 1000)
  l2Slide5()
  // setTimeout(() => {
  //   l2Slide5()
  // }, 700);

  //   //Render the scene for Update The Values
  //   renderer.render(scene, camera);
  //   document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S5
function AnswerCheckS5() {
  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S5Cor Condition working")
  // console.log("S5Cor Condition working", planeCorrectAnsS5)

  // if (planeCorrectAnsS5.visible == true) {
  //   console.log(" This is Visible S5")

  //   planeCorrectAns.visible = false
  //   planeCorrectAnsS2.visible = false
  //   planeCorrectAnsS3.visible = false
  //   planeCorrectAnsS4.visible = false
  planeCorrectAnsS5.visible = false

  // planeS5LHS.visible = false
  // planeS5RHS.visible = false

  // setTimeout(l2Slide6(), 1000)
  l2Slide6()
  // setTimeout(() => {
  //   l2Slide6()
  // }, 700);

  //   //Render the scene for Update The Values
  //   renderer.render(scene, camera);
  //   document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S6
function AnswerCheckS6() {
  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S6Cor Condition working")

  // if (planeCorrectAnsS6.visible == true) {
  //   console.log(" This is Visible S6")

  //   planeCorrectAns.visible = false
  //   planeCorrectAnsS2.visible = false
  //   planeCorrectAnsS3.visible = false
  //   planeCorrectAnsS4.visible = false
  //   planeCorrectAnsS5.visible = false

  //   planeS6LHS.visible = false
  //   planeS6RHS.visible = false

  planeCorrectAnsS6.visible = false
  // setTimeout(l2Slide7(), 1000)
  l2Slide7()
  // setTimeout(() => {
  //   l2Slide7()
  // }, 700);

  //   //Render the scene for Update The Values
  //   renderer.render(scene, camera);
  //   document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S7
function AnswerCheckS7() {
  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S7Cor Condition working")

  // if (planeCorrectAnsS7.visible == true) {
  //   console.log(" This is Visible S7")

  //   planeCorrectAns.visible = false
  //   planeCorrectAnsS2.visible = false
  //   planeCorrectAnsS3.visible = false
  //   planeCorrectAnsS4.visible = false
  //   planeCorrectAnsS5.visible = false
  //   planeCorrectAnsS6.visible = false

  //   planeS7LHS.visible = false
  //   planeS7RHS.visible = false

  planeCorrectAnsS7.visible = false
  l2Slide8()
  // setTimeout(l2Slide8(), 1000)
  // setTimeout(() => {
  //   l2Slide8()
  // }, 700);

  //   //Render the scene for Update The Values
  //   renderer.render(scene, camera);
  //   document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S8
function AnswerCheckS8() {
  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S8Cor Condition working")

  // if (planeCorrectAnsS8.visible == true) {
  //   console.log(" This is Visible S8")

  //   planeCorrectAns.visible = false
  //   planeCorrectAnsS2.visible = false
  //   planeCorrectAnsS3.visible = false
  //   planeCorrectAnsS4.visible = false
  //   planeCorrectAnsS5.visible = false
  //   planeCorrectAnsS6.visible = false
  //   planeCorrectAnsS7.visible = false

  //   planeS8LHS.visible = false
  //   planeS8RHS.visible = false

  planeCorrectAnsS8.visible = false

  l2Slide9()
  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  // setTimeout(l2Slide9(), 1000)
  // setTimeout(() => {
  //   l2Slide9()
  // }, 700);

  //   //Render the scene for Update The Values
  //   renderer.render(scene, camera);
  //   document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S9
function AnswerCheckS9() {
  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S9Cor Condition working")

  // if (planeCorrectAnsS9.visible == true) {
  //   console.log(" This is Visible S9")

  //   planeCorrectAns.visible = false
  //   planeCorrectAnsS2.visible = false
  //   planeCorrectAnsS3.visible = false
  //   planeCorrectAnsS4.visible = false
  //   planeCorrectAnsS5.visible = false
  //   planeCorrectAnsS6.visible = false
  //   planeCorrectAnsS7.visible = false
  //   planeCorrectAnsS8.visible = false

  //   planeS9LHS.visible = false
  //   planeS9RHS.visible = false

  planeCorrectAnsS9.visible = false
  l2Slide10()

  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  // setTimeout(l2Slide10(), 1000)
  //   setTimeout(() => {
  //   l2Slide10()
  // }, 700);

  //   //Render the scene for Update The Values
  //   renderer.render(scene, camera);
  //   document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S10
function AnswerCheckS10() {
  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S10Cor Condition working")

  // if (planeCorrectAnsS10.visible == true) {
  //   console.log(" This is Visible S10")
  //   planeCorrectAns.visible = false
  //   planeCorrectAnsS2.visible = false
  //   planeCorrectAnsS3.visible = false
  //   planeCorrectAnsS4.visible = false
  //   planeCorrectAnsS5.visible = false
  //   planeCorrectAnsS6.visible = false
  //   planeCorrectAnsS7.visible = false
  //   planeCorrectAnsS8.visible = false
  //   planeCorrectAnsS9.visible = false

  //   planeS10LHS.visible = false
  //   planeS10RHS.visible = false

  planeCorrectAnsS10.visible = false

  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  // setTimeout(levelTwoComplete(), 100)

  //   //Render the scene for Update The Values
  //   renderer.render(scene, camera);
  //   document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}


// Function For Level2 Slide 1
// Indicate Red Tshirt Slide
// function l2Slide1(ErrorBorderPath) {
// RHS Correct
function l2Slide1() {
  // Refrence for Noman
  console.log("Slide 1 Working");
  headerProgress(progressBarImg)    // Change Progressbar Image

  //  ------------------------  LHS  --------------------------
  // Correct
  const loadS1LHS = new THREE.TextureLoader();
  loadS1LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S1LHS,  // Bottle

    function (textureS1LHS) {
      // PM:- planeMaterial
      var PM_S1LHS = new THREE.MeshBasicMaterial({
        map: textureS1LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_S1LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS1LHS = new THREE.Mesh(PG_S1LHS, PM_S1LHS);
      scene.add(planeS1LHS);
      planeS1LHS.position.x = SXIPosLHS
      planeS1LHS.position.y = SYIPosLHS
      // planeS1LHS.position.z = 1

      // Add onClick Event Here Tshirt - Correct Answer
      console.log("AnsS2Cor Status Out", AnsS2Cor);
      if (AnsS1Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS1LHS, 'click', function (event) {
          if (AnsS1Cor == false) {
            console.log("Correct Answer S2")
            //  S1Cor = false
            S1Cor = true
            AnsS1Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS1LHS, 'click', false)
            // AnsS1Cor = true

            setTimeout(() => {
              scene.remove(planeS1LHS, planeS1RHS)
            }, 1000);

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2RHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------


            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false
              console.log("Green Highlight Active");

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS1RHS_Ans = new THREE.TextureLoader();
              loadS1RHS_Ans.load(
                SuccessBorder,

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S1RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  // var PG_S1RHS_Ans = new THREE.PlaneBufferGeometry(3, 3);
                  var PG_S1RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAns = new THREE.Mesh(PG_S1RHS_Ans, PM_S1RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAns);
                  }
                  planeCorrectAns.position.x = SXIPosLHS
                  planeCorrectAns.position.y = SYIPosLHS

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Green Highlight Not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  RHS  --------------------------
  // Wrong       
  const loadS1RHS = new THREE.TextureLoader();
  loadS1RHS.load(
    // 2nd URL
    S1RHS,   // Bottle

    function (textureS1RHS) {
      var PM_S1RHS = new THREE.MeshBasicMaterial({
        map: textureS1RHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S1RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS1RHS = new THREE.Mesh(PG_S1RHS, PM_S1RHS);
      scene.add(planeS1RHS);
      planeS1RHS.position.x = SXIPosRHS
      planeS1RHS.position.y = SYIPosRHS

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS1RHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          planeWrongAns.visible = false

          //Render the scene
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
        }
      })


      // Add onClick Event Here - Wrong Answer
      if (AnsS1Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS1RHS, 'click', function (event) {
          if (AnsS1Cor == false) {
            console.log("Wrong Answer S1")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS1LHS, 'click', false) // active
            AnsS1Cor = true
            // var Planes2 = planeS1LHS, planeS2LHS
            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2LHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              // conditions('Wrong')
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS1LHS_Ans = new THREE.TextureLoader();
              loadS1LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S1LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  // var PG_S1LHS_Ans = new THREE.PlaneBufferGeometry(3, 3);
                  var PG_S1LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeWrongAns = new THREE.Mesh(PG_S1LHS_Ans, PM_S1LHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeWrongAns);
                  }
                  planeWrongAns.position.x = SXIPosRHS
                  planeWrongAns.position.y = SYIPosRHS

                  // Hide Worng Answer
                  setTimeout(() => {
                    planeWrongAns.visible = false
                    AnsS1Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                  }, 500);

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Red Highlight not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in RHS Image.');
    }
  );


  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
}

// Function for Level2 Slide 2
// Indicate Bottel
// LHS Correct
function l2Slide2() {

  console.log("Slide 2 Function Working")
  // roundUpdate(2)
  headerProgress(l2PS1)    // Change Progressbar Image

  //  ------------------------  LHS  --------------------------
  // Correct
  const loadS2LHS = new THREE.TextureLoader();
  loadS2LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S2LHS,  // Bottle

    function (textureS2LHS) {
      // PM:- planeMaterial
      var PM_S2LHS = new THREE.MeshBasicMaterial({
        map: textureS2LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_S2LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS2LHS = new THREE.Mesh(PG_S2LHS, PM_S2LHS);
      scene.add(planeS2LHS);
      planeS2LHS.position.x = SXIPosLHS
      planeS2LHS.position.y = SYIPosLHS
      // planeS1LHS.position.z = 1

      // Add onClick Event Here Tshirt - Correct Answer
      console.log("AnsS2Cor Status Out", AnsS2Cor);
      if (AnsS2Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS2LHS, 'click', function (event) {
          if (AnsS2Cor == false) {
            console.log("Correct Answer S2")
            S1Cor = false
            S2Cor = true
            AnsS2Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS2LHS, 'click', false)
            // AnsS1Cor = true

            setTimeout(() => {
              scene.remove(planeS2LHS, planeS2RHS)
            }, 1000);

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2RHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------


            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false
              console.log("Green Highlight Active");

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS2RHS_Ans = new THREE.TextureLoader();
              loadS2RHS_Ans.load(
                SuccessBorder,

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S2RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S2RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS2 = new THREE.Mesh(PG_S2RHS_Ans, PM_S2RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS2);
                  }
                  planeCorrectAnsS2.position.x = SXIPosLHS
                  planeCorrectAnsS2.position.y = SYIPosLHS

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Green Highlight Not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  RHS  --------------------------
  // Wrong       
  const loadS2RHS = new THREE.TextureLoader();
  loadS2RHS.load(
    // 2nd URL
    S2RHS,   // Bottle

    function (textureS2RHS) {
      var PM_S2RHS = new THREE.MeshBasicMaterial({
        map: textureS2RHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S2RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS2RHS = new THREE.Mesh(PG_S2RHS, PM_S2RHS);
      scene.add(planeS2RHS);
      planeS2RHS.position.x = SXIPosRHS
      planeS2RHS.position.y = SYIPosRHS

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS2RHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          planeWrongAnsS2.visible = false

          //Render the scene
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
        }
      })


      // Add onClick Event Here - Wrong Answer
      if (AnsS2Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS2RHS, 'click', function (event) {
          if (AnsS2Cor == false) {
            console.log("Wrong Answer S2")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS2LHS, 'click', false) // active
            AnsS2Cor = true
            // var Planes2 = planeS1LHS, planeS2LHS
            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2LHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              // conditions('Wrong')
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS2LHS_Ans = new THREE.TextureLoader();
              loadS2LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S2LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S2LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeWrongAnsS2 = new THREE.Mesh(PG_S2LHS_Ans, PM_S2LHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeWrongAnsS2);
                  }
                  planeWrongAnsS2.position.x = SXIPosRHS
                  planeWrongAnsS2.position.y = SYIPosRHS

                  // Hide Worng Answer
                  setTimeout(() => {
                    planeWrongAnsS2.visible = false
                    AnsS2Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                  }, 500);

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Red Highlight not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in RHS Image.');
    }
  );

  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
}

// Function for Level2 Slide 3
// Indicate Chair
// LHS Correct
function l2Slide3() {
  // planeCorrectAnsS2.visible = false
  console.log("AnsS2Cor S3 Out", AnsS2Cor);

  // planeCorrectAns.visible = false
  console.log("Slide 3 Function Working")
  headerProgress(l2PS2)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS3LHS.visible == true) {
  //     console.log(" This is Visible")
  //     planeS3LHS.visible = false
  //     planeS3RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Correct
  const loadS3LHS = new THREE.TextureLoader();
  loadS3LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S3LHS,  // Bottle

    function (textureS3LHS) {
      // PM:- planeMaterial
      var PM_S3LHS = new THREE.MeshBasicMaterial({
        map: textureS3LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_S3LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS3LHS = new THREE.Mesh(PG_S3LHS, PM_S3LHS);
      scene.add(planeS3LHS);
      planeS3LHS.position.x = SXIPosLHS
      planeS3LHS.position.y = SYIPosLHS
      // planeS1LHS.position.z = 1

      // Add onClick Event Here Tshirt - Correct Answer
      console.log("AnsS2Cor Status Out", AnsS3Cor);
      if (AnsS3Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS3LHS, 'click', function (event) {
          if (AnsS3Cor == false) {
            console.log("Correct Answer S2")
            S1Cor, S2Cor = false
            S3Cor = true
            AnsS3Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS3LHS, 'click', false)
            // AnsS1Cor = true

            setTimeout(() => {
              scene.remove(planeS3LHS, planeS3RHS)
            }, 1000);

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2RHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------


            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false
              console.log("Green Highlight Active");

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS3RHS_Ans = new THREE.TextureLoader();
              loadS3RHS_Ans.load(
                SuccessBorder,

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S3RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S3RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS3 = new THREE.Mesh(PG_S3RHS_Ans, PM_S3RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS3);
                  }
                  planeCorrectAnsS3.position.x = SXIPosLHS
                  planeCorrectAnsS3.position.y = SYIPosLHS

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Green Highlight Not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  RHS  --------------------------
  // Wrong       
  const loadS3RHS = new THREE.TextureLoader();
  loadS3RHS.load(
    // 2nd URL
    S3RHS,   // Bottle

    function (textureS3RHS) {
      var PM_S3RHS = new THREE.MeshBasicMaterial({
        map: textureS3RHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S3RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS3RHS = new THREE.Mesh(PG_S3RHS, PM_S3RHS);
      scene.add(planeS3RHS);
      planeS3RHS.position.x = SXIPosRHS
      planeS3RHS.position.y = SYIPosRHS

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS3RHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          planeWrongAnsS3.visible = false

          //Render the scene
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
        }
      })


      // Add onClick Event Here - Wrong Answer
      if (AnsS3Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS3RHS, 'click', function (event) {
          if (AnsS3Cor == false) {
            console.log("Wrong Answer S3")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS3LHS, 'click', false) // active
            AnsS3Cor = true
            // var Planes2 = planeS1LHS, planeS2LHS
            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2LHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              // conditions('Wrong')
              soundReplyAudio(tryAgainSound)


              // Load RHS Image Here
              const loadS3LHS_Ans = new THREE.TextureLoader();
              loadS3LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S3LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S3LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeWrongAnsS3 = new THREE.Mesh(PG_S3LHS_Ans, PM_S3LHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeWrongAnsS3);
                  }
                  planeWrongAnsS3.position.x = SXIPosRHS
                  planeWrongAnsS3.position.y = SYIPosRHS

                  // Hide Worng Answer
                  setTimeout(() => {
                    planeWrongAnsS3.visible = false
                    AnsS3Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                  }, 500);

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Red Highlight not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in RHS Image.');
    }
  );


  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
}

// Function for Level1 Slide 4
// Indicate white Ball
// RHS Correct
function l2Slide4() {
  console.log("Slide 4 Function Working")
  headerProgress(l2PS3)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS3LHS.visible == true) {
  //     console.log(" This is Visible")
  //     planeS3LHS.visible = false
  //     planeS3RHS.visible = false
  // }
  //  ------------------------  Working  --------------------------
  // Correct
  const loadS4LHS = new THREE.TextureLoader();
  loadS4LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S4LHS,  // Bottle

    function (textureS4LHS) {
      // PM:- planeMaterial
      var PM_S4LHS = new THREE.MeshBasicMaterial({
        map: textureS4LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_S4LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS4LHS = new THREE.Mesh(PG_S4LHS, PM_S4LHS);
      scene.add(planeS4LHS);
      planeS4LHS.position.x = SXIPosLHS
      planeS4LHS.position.y = SYIPosLHS
      // planeS1LHS.position.z = 1

      // Add onClick Event Here Tshirt - Correct Answer
      console.log("AnsS2Cor Status Out", AnsS4Cor);
      if (AnsS4Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS4LHS, 'click', function (event) {
          if (AnsS4Cor == false) {
            console.log("Correct Answer S4")
            S1Cor = false
            S2Cor = false
            S3Cor = false
            S4Cor = true
            AnsS4Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS4LHS, 'click', false)
            // AnsS1Cor = true

            setTimeout(() => {
              scene.remove(planeS4LHS, planeS4RHS)
            }, 1000);

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2RHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------


            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false
              console.log("Green Highlight Active");

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS4RHS_Ans = new THREE.TextureLoader();
              loadS4RHS_Ans.load(
                SuccessBorder,

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S4RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S4RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS4 = new THREE.Mesh(PG_S4RHS_Ans, PM_S4RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS4);
                  }
                  planeCorrectAnsS4.position.x = SXIPosLHS
                  planeCorrectAnsS4.position.y = SYIPosLHS

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Green Highlight Not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  RHS  --------------------------
  // Wrong       
  const loadS4RHS = new THREE.TextureLoader();
  loadS4RHS.load(
    // 2nd URL
    S4RHS,   // Bottle

    function (textureS4RHS) {
      var PM_S4RHS = new THREE.MeshBasicMaterial({
        map: textureS4RHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S4RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS4RHS = new THREE.Mesh(PG_S4RHS, PM_S4RHS);
      scene.add(planeS4RHS);
      planeS4RHS.position.x = SXIPosRHS
      planeS4RHS.position.y = SYIPosRHS

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS4RHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          planeWrongAnsS4.visible = false

          //Render the scene
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
        }
      })


      // Add onClick Event Here - Wrong Answer
      if (AnsS4Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS4RHS, 'click', function (event) {
          if (AnsS4Cor == false) {
            console.log("Wrong Answer S4")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS4LHS, 'click', false) // active
            AnsS4Cor = true
            // var Planes2 = planeS1LHS, planeS2LHS
            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2LHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              // conditions('Wrong')
              soundReplyAudio(tryAgainSound)


              // Load RHS Image Here
              const loadS4LHS_Ans = new THREE.TextureLoader();
              loadS4LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S4LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S4LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeWrongAnsS4 = new THREE.Mesh(PG_S4LHS_Ans, PM_S4LHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeWrongAnsS4);
                  }
                  planeWrongAnsS4.position.x = SXIPosRHS
                  planeWrongAnsS4.position.y = SYIPosRHS

                  // Hide Worng Answer
                  setTimeout(() => {
                    planeWrongAnsS4.visible = false
                    AnsS4Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                  }, 500);

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Red Highlight not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in RHS Image.');
    }
  );
  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);

}

// Function for Level1 Slide 5
// Indicate Balloons
// LHS Correct
function l2Slide5() {
  console.log("Slide 5 Function Working")
  headerProgress(l2PS4)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS4LHS.visible == true) {
  //     console.log(" This is Visible 5 ")
  //     planeS4LHS.visible = false
  //     planeS4RHS.visible = false
  // }
  //  ------------------------  Working  --------------------------
  // Correct
  const loadS5LHS = new THREE.TextureLoader();
  loadS5LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S5LHS,  // Red Ball Img

    function (textureS5LHS) {
      var PM_LHS = new THREE.MeshBasicMaterial({
        map: textureS5LHS,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS5LHS = new THREE.Mesh(PG_LHS, PM_LHS);
      scene.add(planeS5LHS);
      planeS5LHS.position.x = SXIPosLHS
      planeS5LHS.position.y = SYIPosLHS
      // planeS1LHS.position.z = 1

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS5LHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          // planeCorrectAns.visible = false
          planeCorrectAnsS5.visible = false
        }
      })


      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS5Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS5LHS, 'click', function (event) {
          if (AnsS5Cor == false) {

            console.log("Correct Answer S5")
            AnsS5Cor = true
            S1Cor, S2Cor, S3Cor, S4Cor = false
            S5Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS5LHS, 'click', false)
            // AnsS1Cor = true

            setTimeout(() => {
              scene.remove(planeS5LHS, planeS5RHS)
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck('../Sounds/Global_Music/Music/For correct answer.mp3')

              // Load RHS Image Here
              const loadS5RHS_Ans = new THREE.TextureLoader();
              loadS5RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  var PM_RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS5 = new THREE.Mesh(PG_RHS_Ans, PM_RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS5);
                  }
                  planeCorrectAnsS5.position.x = SXIPosLHS
                  planeCorrectAnsS5.position.y = SYIPosLHS

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Green Highlight Not Active");
            }

          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  Working  --------------------------
  // Wrong       
  const loadS5RHS = new THREE.TextureLoader();
  loadS5RHS.load(
    S5RHS,   // Red Ball

    function (textureS5RHS) {
      var PM_RHS = new THREE.MeshBasicMaterial({
        map: textureS5RHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS5RHS = new THREE.Mesh(PG_RHS, PM_RHS);
      scene.add(planeS5RHS);
      planeS5RHS.position.x = SXIPosRHS
      planeS5RHS.position.y = SYIPosRHS


      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS5RHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          planeWrongAnsS5.visible = false

          //Render the scene
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
        }
      })

      // Add onClick Event Here - Wrong 
      if (AnsS5Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS5RHS, 'click', function (event) {
          if (AnsS5Cor == false) {

            console.log("Wrong Answer S5")


            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS5RHS, 'click', false) // active
            AnsS5Cor = true

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS5LHS, 'click', function (event) {
            //   console.log("Remove Event lister S5")
            // })
            // // ----------------------------------------------------------------------

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS5LHS_Ans = new THREE.TextureLoader();
              loadS5LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  var PM_LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeWrongAnsS5 = new THREE.Mesh(PG_LHS_Ans, PM_LHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeWrongAnsS5);
                  }
                  planeWrongAnsS5.position.x = SXIPosRHS
                  planeWrongAnsS5.position.y = SYIPosRHS

                  // Hide Worng Answer
                  setTimeout(() => {
                    planeWrongAnsS5.visible = false
                    AnsS5Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                  }, 500);

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Red Highlight not Active");
            }
          }
        }, false)
      }


      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in RHS Image.');
    }
  );

  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
}

// Function for Level1 Slide 6
// Indicate Blue Pants
// LHS Correct
function l2Slide6() {

  console.log("Slide 6 Function Working")
  headerProgress(l2PS5)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS5LHS.visible == true) {
  //     console.log(" This is Visible")
  //     planeS5LHS.visible = false
  //     planeS5RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Correct
  const loadS6LHS = new THREE.TextureLoader();
  loadS6LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S6LHS,  // Blue Pants

    function (textureS6LHS) {
      // PM:- planeMaterial
      // PM_LHS Global Name For All
      var PM_LHS = new THREE.MeshBasicMaterial({
        map: textureS6LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS6LHS = new THREE.Mesh(PG_LHS, PM_LHS);
      scene.add(planeS6LHS);
      planeS6LHS.position.x = SXIPosLHS
      planeS6LHS.position.y = SYIPosLHS
      // planeS1LHS.position.z = 1


      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS6LHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          // planeCorrectAns.visible = false
          planeCorrectAnsS6.visible = false
        }
      })


      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS6Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS6LHS, 'click', function (event) {
          if (AnsS6Cor == false) {

            console.log("Correct Answer S6")
            AnsS6Cor = true
            S1Cor, S2Cor, S3Cor, S4Cor, S5Cor = false
            S6Cor = true


            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS6LHS, 'click', false)
            // AnsS1Cor = true

            setTimeout(() => {
              scene.remove(planeS6LHS, planeS6RHS)
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundAnsCheck('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS6RHS_Ans = new THREE.TextureLoader();
              loadS6RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS6 = new THREE.Mesh(PG_RHS_Ans, PM_RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS6);
                  }
                  planeCorrectAnsS6.position.x = SXIPosLHS
                  planeCorrectAnsS6.position.y = SYIPosLHS

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Green Highlight Not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  RHS  --------------------------
  // Wrong      
  const loadS6RHS = new THREE.TextureLoader();
  loadS6RHS.load(
    S6RHS,   // goggles

    function (textureS6RHS) {
      var PM_RHS = new THREE.MeshBasicMaterial({
        map: textureS6RHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS6RHS = new THREE.Mesh(PG_RHS, PM_RHS);
      scene.add(planeS6RHS);
      planeS6RHS.position.x = SXIPosRHS
      planeS6RHS.position.y = SYIPosRHS

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS6RHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          planeWrongAnsS6.visible = false

          //Render the scene
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
        }
      })


      // Add onClick Event Here - Wrong Answer
      if (AnsS6Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS6RHS, 'click', function (event) {
          if (AnsS6Cor == false) {

            console.log("Wrong Answer S6")


            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS6RHS, 'click', false) // active
            AnsS6Cor = true

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS6LHS, 'click', function (event) {
            //   console.log("Remove Event lister S6")
            // })
            // // ----------------------------------------------------------------------

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)


              // Load RHS Image Here
              const loadS6LHS_Ans = new THREE.TextureLoader();
              loadS6LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  var PM_LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeWrongAnsS6 = new THREE.Mesh(PG_LHS_Ans, PM_LHS_Ans);
                  scene.add(planeWrongAnsS6);
                  planeWrongAnsS6.position.x = SXIPosRHS
                  planeWrongAnsS6.position.y = SYIPosRHS

                  // Hide Worng Answer
                  setTimeout(() => {
                    planeWrongAnsS6.visible = false
                    AnsS6Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                  }, 500);

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Red Highlight not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in RHS Image.');
    }
  );

  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
}

// Function for Level1 Slide 7
// Indicate socks
// RHS Correct
function l2Slide7() {
  console.log("Slide 7 Function Working")
  headerProgress(l2PS6)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS6LHS.visible == true) {
  //     console.log(" This is Visible")
  //     planeS6LHS.visible = false
  //     planeS6RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Correct
  const loadS7LHS = new THREE.TextureLoader();
  loadS7LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S7LHS,  // Blue Pants

    function (textureS7LHS) {
      // PM:- planeMaterial
      // PM_LHS Global Name For All
      var PM_LHS = new THREE.MeshBasicMaterial({
        map: textureS7LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS7LHS = new THREE.Mesh(PG_LHS, PM_LHS);
      scene.add(planeS7LHS);
      planeS7LHS.position.x = SXIPosLHS
      planeS7LHS.position.y = SYIPosLHS
      // planeS1LHS.position.z = 1


      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS7LHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          // planeCorrectAns.visible = false
          planeCorrectAnsS7.visible = false
        }
      })


      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS7Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS7LHS, 'click', function (event) {
          if (AnsS7Cor == false) {

            console.log("Correct Answer S7")
            AnsS7Cor = true
            S1Cor, S2Cor, S3Cor, S4Cor, S5Cor, S6Cor = false
            S7Cor = true


            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS7LHS, 'click', false)
            // AnsS1Cor = true

            setTimeout(() => {
              scene.remove(planeS7LHS, planeS7RHS)
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundAnsCheck('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS7RHS_Ans = new THREE.TextureLoader();
              loadS7RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS7 = new THREE.Mesh(PG_RHS_Ans, PM_RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS7);
                  }
                  planeCorrectAnsS7.position.x = SXIPosLHS
                  planeCorrectAnsS7.position.y = SYIPosLHS

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Green Highlight Not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  RHS  --------------------------
  // Wrong      
  const loadS7RHS = new THREE.TextureLoader();
  loadS7RHS.load(
    S7RHS,   // goggles

    function (textureS7RHS) {
      var PM_RHS = new THREE.MeshBasicMaterial({
        map: textureS7RHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS7RHS = new THREE.Mesh(PG_RHS, PM_RHS);
      scene.add(planeS7RHS);
      planeS7RHS.position.x = SXIPosRHS
      planeS7RHS.position.y = SYIPosRHS

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS7RHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          planeWrongAnsS7.visible = false

          //Render the scene
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
        }
      })


      // Add onClick Event Here - Wrong Answer
      if (AnsS7Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS7RHS, 'click', function (event) {
          if (AnsS7Cor == false) {

            console.log("Wrong Answer S7")


            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS7RHS, 'click', false) // active
            AnsS7Cor = true

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS6LHS, 'click', function (event) {
            //   console.log("Remove Event lister S6")
            // })
            // // ----------------------------------------------------------------------

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)


              // Load RHS Image Here
              const loadS7LHS_Ans = new THREE.TextureLoader();
              loadS7LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  var PM_LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeWrongAnsS7 = new THREE.Mesh(PG_LHS_Ans, PM_LHS_Ans);
                  scene.add(planeWrongAnsS7);
                  planeWrongAnsS7.position.x = SXIPosRHS
                  planeWrongAnsS7.position.y = SYIPosRHS

                  // Hide Worng Answer
                  setTimeout(() => {
                    planeWrongAnsS7.visible = false
                    AnsS7Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                  }, 500);

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Red Highlight not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in RHS Image.');
    }
  );
  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);

}

// Function for Level1 Slide 8
// Indicate Pants
// LHS Correct
function l2Slide8() {
  console.log("Slide 8 Function Working")
  headerProgress(l2PS7)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS7LHS.visible == true) {
  //     console.log(" This is Visible")
  //     planeS7LHS.visible = false
  //     planeS7RHS.visible = false
  // }
  //  ------------------------  Working  --------------------------
  // Correct
  const loadS8LHS = new THREE.TextureLoader();
  loadS8LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S8LHS,  // Pants

    function (textureS8LHS) {
      var PM_LHS = new THREE.MeshBasicMaterial({
        map: textureS8LHS,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS8LHS = new THREE.Mesh(PG_LHS, PM_LHS);
      scene.add(planeS8LHS);
      planeS8LHS.position.x = SXIPosLHS
      planeS8LHS.position.y = SYIPosLHS


      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS8LHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          // planeCorrectAns.visible = false
          planeCorrectAnsS8.visible = false
        }
      })


      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS8Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS8LHS, 'click', function (event) {
          if (AnsS8Cor == false) {

            console.log("Correct Answer S8")
            AnsS8Cor = true
            S1Cor, S2Cor, S3Cor, S4Cor, S5Cor, S6Cor, S7Cor = false
            S8Cor = true


            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS8LHS, 'click', false)
            // AnsS1Cor = true

            setTimeout(() => {
              scene.remove(planeS8LHS, planeS8RHS)
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundAnsCheck('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS8RHS_Ans = new THREE.TextureLoader();
              loadS8RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  var PM_RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS8 = new THREE.Mesh(PG_RHS_Ans, PM_RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS8);
                  }
                  planeCorrectAnsS8.position.x = SXIPosLHS
                  planeCorrectAnsS8.position.y = SYIPosLHS

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Green Highlight Not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  Working  --------------------------
  // Wrong      
  const loadS8RHS = new THREE.TextureLoader();
  loadS8RHS.load(
    S8RHS,   // goggles

    function (textureS8RHS) {
      var PM_RHS = new THREE.MeshBasicMaterial({
        map: textureS8RHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS8RHS = new THREE.Mesh(PG_RHS, PM_RHS);
      scene.add(planeS8RHS);
      planeS8RHS.position.x = SXIPosRHS
      planeS8RHS.position.y = SYIPosRHS

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS8RHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          planeWrongAnsS8.visible = false

          //Render the scene
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
        }
      })

      // Add onClick Event Here - Wrong Answer
      if (AnsS8Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS8RHS, 'click', function (event) {
          if (AnsS8Cor == false) {

            console.log("Wrong Answer S8")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS8RHS, 'click', false) // active
            AnsS8Cor = true

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS8LHS, 'click', function (event) {
            //   console.log("Remove Event lister S8")
            // })
            // // ----------------------------------------------------------------------

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)


              // Load RHS Image Here
              const loadS8LHS_Ans = new THREE.TextureLoader();
              loadS8LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  var PM_LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeWrongAnsS8 = new THREE.Mesh(PG_LHS_Ans, PM_LHS_Ans);
                  scene.add(planeWrongAnsS8);
                  planeWrongAnsS8.position.x = SXIPosRHS
                  planeWrongAnsS8.position.y = SYIPosRHS

                  // Hide Worng Answer
                  setTimeout(() => {
                    planeWrongAnsS8.visible = false
                    AnsS8Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                  }, 500);

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Red Highlight not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in RHS Image.');
    }
  );
  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);

}

// Function for Level1 Slide 9
// Indicate White Ball
// RHS Correct
function l2Slide9() {

  console.log("Slide 9 Function Working")
  headerProgress(l2PS8)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS8LHS.visible == true) {
  //     console.log(" This is Visible")
  //     planeS8LHS.visible = false
  //     planeS8RHS.visible = false
  // }
  //  ------------------------  Working  --------------------------
  // Correct
  const loadS9LHS = new THREE.TextureLoader();
  loadS9LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S9LHS,  // Pants

    function (textureS9LHS) {
      var PM_LHS = new THREE.MeshBasicMaterial({
        map: textureS9LHS,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS9LHS = new THREE.Mesh(PG_LHS, PM_LHS);
      scene.add(planeS9LHS);
      planeS9LHS.position.x = SXIPosLHS
      planeS9LHS.position.y = SYIPosLHS


      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS9LHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          // planeCorrectAns.visible = false
          planeCorrectAnsS9.visible = false
        }
      })


      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS9Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS9LHS, 'click', function (event) {
          if (AnsS9Cor == false) {

            console.log("Correct Answer S9")
            AnsS9Cor = true
            S1Cor, S2Cor, S3Cor, S4Cor, S5Cor, S6Cor, S7Cor, S8Cor = false
            S9Cor = true


            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS9LHS, 'click', false)
            // AnsS1Cor = true

            setTimeout(() => {
              scene.remove(planeS9LHS, planeS9RHS)
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundAnsCheck('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS9RHS_Ans = new THREE.TextureLoader();
              loadS9RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  var PM_RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS9 = new THREE.Mesh(PG_RHS_Ans, PM_RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS9);
                  }
                  planeCorrectAnsS9.position.x = SXIPosLHS
                  planeCorrectAnsS9.position.y = SYIPosLHS

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Green Highlight Not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  Working  --------------------------
  // Wrong      
  const loadS9RHS = new THREE.TextureLoader();
  loadS9RHS.load(
    S9RHS,   // goggles

    function (textureS9RHS) {
      var PM_RHS = new THREE.MeshBasicMaterial({
        map: textureS9RHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS9RHS = new THREE.Mesh(PG_RHS, PM_RHS);
      scene.add(planeS9RHS);
      planeS9RHS.position.x = SXIPosRHS
      planeS9RHS.position.y = SYIPosRHS

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS9RHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          planeWrongAnsS9.visible = false

          //Render the scene
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
        }
      })

      // Add onClick Event Here - Wrong Answer
      if (AnsS9Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS9RHS, 'click', function (event) {
          if (AnsS9Cor == false) {

            console.log("Wrong Answer S9")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS9RHS, 'click', false) // active
            AnsS9Cor = true

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS8LHS, 'click', function (event) {
            //   console.log("Remove Event lister S8")
            // })
            // // ----------------------------------------------------------------------

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)


              // Load RHS Image Here
              const loadS9LHS_Ans = new THREE.TextureLoader();
              loadS9LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  var PM_LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeWrongAnsS9 = new THREE.Mesh(PG_LHS_Ans, PM_LHS_Ans);
                  scene.add(planeWrongAnsS9);
                  planeWrongAnsS9.position.x = SXIPosRHS
                  planeWrongAnsS9.position.y = SYIPosRHS

                  // Hide Worng Answer
                  setTimeout(() => {
                    planeWrongAnsS9.visible = false
                    AnsS9Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                  }, 500);

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Red Highlight not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in RHS Image.');
    }
  );
  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
}

// Function for Level1 Slide 10
// Indicate Shoes
// RHS Correct
function l2Slide10() {

  console.log("Slide 10 Function Working")
  headerProgress(l2PS9)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS9LHS.visible == true) {
  //     console.log(" This is Visible")
  //     planeS9LHS.visible = false
  //     planeS9RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Correct
  const loadS10LHS = new THREE.TextureLoader();
  loadS10LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S10LHS,  // Pants

    function (textureS10LHS) {
      var PM_LHS = new THREE.MeshBasicMaterial({
        map: textureS10LHS,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS10LHS = new THREE.Mesh(PG_LHS, PM_LHS);
      scene.add(planeS10LHS);
      planeS10LHS.position.x = SXIPosLHS
      planeS10LHS.position.y = SYIPosLHS


      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS10LHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          // planeCorrectAns.visible = false
          planeCorrectAnsS10.visible = false
        }
      })


      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS10Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS10LHS, 'click', function (event) {
          if (AnsS10Cor == false) {

            AnsS10Cor = true
            console.log("Correct Answer S10")
            S1Cor, S2Cor, S3Cor, S4Cor, S5Cor, S6Cor, S7Cor, S8Cor, S9Cor = false
            S10Cor = true


            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS10LHS, 'click', false)
            // AnsS1Cor = true

            setTimeout(() => {
              scene.remove(planeS10LHS, planeS10RHS)
              // scene.remove(planeLHSMain, planeRHSMain)

            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundAnsCheck('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS10RHS_Ans = new THREE.TextureLoader();
              loadS10RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  var PM_RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS10 = new THREE.Mesh(PG_RHS_Ans, PM_RHS_Ans);
                  // console.log("S10 Status-----------", S10Cor);
                  // if (S10Cor == false) {
                  scene.add(planeCorrectAnsS10);
                  // }
                  planeCorrectAnsS10.position.x = SXIPosLHS
                  planeCorrectAnsS10.position.y = SYIPosLHS

                  // setTimeout(L1Complete(), 2000)    // Working
                  // Hide White plane
                  setTimeout(() => {
                    planeRHSMain.visible = false
                    planeLHSMain.visible = false
                  }, 1000);

                  // Call L1Complete Function
                  setTimeout(() => {
                    planeCorrectAns.visible = false
                    planeCorrectAnsS2.visible = false
                    planeCorrectAnsS3.visible = false
                    planeCorrectAnsS4.visible = false
                    planeCorrectAnsS5.visible = false
                    planeCorrectAnsS6.visible = false
                    planeCorrectAnsS7.visible = false
                    planeCorrectAnsS8.visible = false
                    planeCorrectAnsS9.visible = false
                    planeCorrectAnsS10.visible = false

                    planeLHSMain.visible = false
                    planeRHSMain.visible = false

                    planeS10LHS.visible = false
                    planeS10RHS.visible = false
                    levelTwoComplete()
                    // L1Complete()
                  }, 2000);


                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Green Highlight Not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  Working  --------------------------
  // Wrong      
  const loadS10RHS = new THREE.TextureLoader();
  loadS10RHS.load(
    S10RHS,   // goggles

    function (textureS10RHS) {
      var PM_RHS = new THREE.MeshBasicMaterial({
        map: textureS10RHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS10RHS = new THREE.Mesh(PG_RHS, PM_RHS);
      scene.add(planeS10RHS);
      planeS10RHS.position.x = SXIPosRHS
      planeS10RHS.position.y = SYIPosRHS

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS10RHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          planeWrongAnsS10.visible = false

          //Render the scene
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
        }
      })

      // Add onClick Event Here - Wrong Answer
      if (AnsS10Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS10RHS, 'click', function (event) {
          if (AnsS10Cor == false) {

            console.log("Wrong Answer S10")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS10RHS, 'click', false) // active
            AnsS10Cor = true

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS8LHS, 'click', function (event) {
            //   console.log("Remove Event lister S8")
            // })
            // // ----------------------------------------------------------------------

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)


              // Load RHS Image Here
              const loadS10LHS_Ans = new THREE.TextureLoader();
              loadS10LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  var PM_LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeWrongAnsS10 = new THREE.Mesh(PG_LHS_Ans, PM_LHS_Ans);
                  scene.add(planeWrongAnsS10);
                  planeWrongAnsS10.position.x = SXIPosRHS
                  planeWrongAnsS10.position.y = SYIPosRHS

                  // Hide Worng Answer
                  setTimeout(() => {
                    planeWrongAnsS10.visible = false
                    AnsS10Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                  }, 500);

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Red Highlight not Active");
            }
          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in RHS Image.');
    }
  );

  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
}

// Skip Button 
function skiplevelBtn() {

  // ------------------------ Put Skip Button Here    ----------------------------
  const loadSkipbtn = new THREE.TextureLoader();
  loadSkipbtn.load(
    // "../asset/logo/Skip.png",
    skipBtn,

    function (textureSkipBtn) {
      var planeMaterialSkipbtn = new THREE.MeshBasicMaterial({
        map: textureSkipBtn,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var planeGeometrySkipbtn = new THREE.PlaneBufferGeometry(0.35, 0.45);
      planeSkipBtn = new THREE.Mesh(planeGeometrySkipbtn, planeMaterialSkipbtn);
      scene.add(planeSkipBtn);
      // planeSkipBtn.position.x = 3.7
      // planeSkipBtn.position.y = -1.7

      // planeSkipBtn.position.x = 3  // Active
      // planeSkipBtn.position.y = -1.1   // Active
      planeSkipBtn.position.x = SkipPosX
      planeSkipBtn.position.y = SkipPosY
      planeSkipBtn.position.z = 1

      // Add onClick Event Here Tshirt - Wrong Answer
      const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
      domEvents.addEventListener(planeSkipBtn, 'click', function (event) {
        console.log("Skip btn Click")
        // Play try Again Audio - incorrect
        // playAudio('../Sounds/tryAgain.mp3')
        // window.location.href = '/level1.html'
        // localStorage.setItem('level1_Pre', true)

        var level3_Pre = localStorage.getItem('level3_Pre')
        var level3_Pre_val = JSON.parse(level3_Pre)
        // console.log("L2_Pre:-", level2_Pre_val)
        if (level3_Pre_val == false) {

          // document.location.href = '/level2_Pre.html'
          // window.location.replace(`${endPoint}/level2_Pre.html`);
          window.location.replace(`/level3_Pre.html`);

        } else {
          // document.location.href = '/level2.html'
          window.location.replace(`/level3.html`);

        }

        // var currentPath = `${endPoint}/level1.html`

        // if (currentPath == `${endPoint}/level1.html`) {
        //   console.log("Redirect New Page");
        //   console.log("endPoint", endPoint);
        //   // location.href = '/level1.html'
        //   // window.location.replace(`${endPoint}/level1_Pre.html`); // Active
        //   window.location.replace(`${endPoint}/level2_Pre.html`); // Active
        //   // history.back()
        //   // history.go(1)
        // } else {
        //   // location.href = '/level1.html'
        //   // window.location.replace(`${endPoint}/level1_Pre.html`); // Active
        //   window.location.replace(`${endPoint}/level2_Pre.html`); // Active
        //   // history.back()
        //   // history.go(1)
        // }

      }, false)

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );
}

// Funcyion Call After Level 1 Complete
// Level 2 Complete
function levelTwoComplete() {

  // AnsS10Cor = true
  // console.log("Check the Ans10 Status---------------------", AnsS10Cor)
  console.clear()
  console.log("level 2 Complete");

  LevelCompleteSound('../Sounds/Global_Music/GL_A_5.mp3')

  // setInterval(() => {
  //   RewardShow()
  // }, 4000);
  setTimeout(() => {
    RewardShow()
  }, 200);
  // removeEventListener(plane)

  // if (planeWrongAns.visible == true) {
  //   console.log("Check Level Two Complete func")
  //   planeWrongAns.visible = false
  // }
  // if (planeCorrectAnsS10.visible == false) {
  //   console.log("Red Status on LTC:-", planeWrongAns)
  // }

  headerProgress(l2PS10)
  // headerReward(RewardEndImg)


  scene.remove(meshText)
  // headerReward(RewardEndImg) // Active
  newrewardPoints = localStorage.setItem('RewardPoints', getRewardData + 10)
  // getNewRewardPoints = localStorage.getItem('RewardPoints')
  getRewardData = localStorage.getItem('RewardPoints')
  // console.log("newrewardPoints End", getRewardData);
  RewardPoints(getRewardData)

  // if (planeS10LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS10LHS.visible = false
  //   planeS10RHS.visible = false
  //   // Hide White Box
  //   planeLHSMain.visible = false
  //   planeRHSMain.visible = false
  // }

  //  ------------------------  Working  --------------------------
  // Inner Function Change Image onClick         
  // Load play again image 
  const playAgainImg = new THREE.TextureLoader();
  playAgainImg.load(
    // "../asset/logo/Play again.png",
    playAgain,

    function (texturePlayAgain) {
      var PM_Again = new THREE.MeshBasicMaterial({
        map: texturePlayAgain,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // var PG_Again = new THREE.PlaneBufferGeometry(0.80, 0.80);
      // var PG_Again = new THREE.PlaneBufferGeometry(0.80, 0.70);
      var PG_Again = new THREE.PlaneBufferGeometry(0.90, 0.70);
      planeLTCLHS = new THREE.Mesh(PG_Again, PM_Again);
      scene.add(planeLTCLHS);
      planeLTCLHS.position.x = -1
      // planeLTCLHS.position.y = -0.4
      planeLTCLHS.position.y = -0.35
      // planeLTCLHS.position.z = 1

      // OnClick Event For planeLHS
      const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
      domEvents.addEventListener(planeLTCLHS, 'click', function (event) {
        console.log("planeLTCLHS clicked")

        localStorage.setItem('level2Complete', true)
        // planeWrongAns.visible = false
        // planeWrongAnsS2.visible = false
        // planeWrongAnsS10.visible = false


        // planeLZCLHS.dispose

        // Only Remove but Button is Active after this event perform
        // scene.remove(planeLTCLHS, planeLOCRHS);
        // window.location.href = "/level2.html"
        var currentPath = `${endPoint}/level2.html`

        if (currentPath == `${endPoint}/level2.html`) {
          console.log("Redirect New Page");
          console.log("endPoint", endPoint);
          location.href = '/level2.html'
        } else {
          location.href = '/level2.html'
        }

      }, false)

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );


  //  ------------------------  Working  --------------------------
  // Play Next Level Image
  const playnextImg = new THREE.TextureLoader();
  playnextImg.load(
    // Play Next Level Image
    //    "../asset/logo/Play the next level.png",
    playNext,

    function (texturePlayNext) {
      var PM_Next = new THREE.MeshBasicMaterial({
        map: texturePlayNext,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      // var PG_Next = new THREE.PlaneBufferGeometry(0.80, 0.80);
      var PG_Next = new THREE.PlaneBufferGeometry(1.3, 0.70);
      planeLTCRHS = new THREE.Mesh(PG_Next, PM_Next);
      scene.add(planeLTCRHS);
      planeLTCRHS.position.x = 1
      // planeLTCRHS.position.y = -0.4
      planeLTCRHS.position.y = -0.35
      // planeLTCRHS.position.z = 1

      // // OnClick Event For planeLHS
      const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
      domEventsInnerLHS.addEventListener(planeLTCRHS, 'click', function (event) {
        console.log("Play the next level clicked")
        replyAudioSound.setVolume(0)

        localStorage.setItem('level2Complete', true)


        // window.location.href = '/level3_Pre.html'   // Call 2nd Level of Presentation
        var currentPath = `${endPoint}/level2.html`

        if (currentPath == `${endPoint}/level2.html`) {
          console.log("Redirect New Page");
          console.log("endPoint", endPoint);
          // location.href = '/level3_Pre.html'
          var level3_Pre = localStorage.getItem('level3_Pre')
          var level3_Pre_val = JSON.parse(level3_Pre)
          // console.log("L2_Pre:-", level2_Pre_val)
          if (level3_Pre_val == false) {

            location.href = '/level3_Pre.html'
          } else {
            location.href = '/level3.html'
          }

        } else {
          // location.href = '/level3_Pre.html'
          if (level3_Pre_val == false) {

            // location.href = '/level3_Pre.html'
            window.location.replace(`/level3_Pre.html`);

          } else {
            // location.href = '/level3.html'
            window.location.replace(`/level3.html`);

          }
        }

        // location.href = 'level1_Pre.html'
        scene.remove(planeWrongAnsS10, planeCorrectAnsS10);
        // location.href = 'level2.html'

        // planeLZCLHS.visible = false
        // planeLZCRHS.visible = false
        // alert("btn clicked")
      }, false)

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in Play the next level Image.');
    }
  );

  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
}

// Function For reward Show
function RewardShow() {
  // console.log("Reward Function Working")
  //  --------------------------------  Working -----------------------------------
  var count = 1000;
  var defaults = {
    origin: { y: 0.4 }
  };
  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }
  fire(0.25, {
    spread: 230,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 200,
  });
  fire(0.35, {
    spread: 200,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 200,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 200,
    startVelocity: 45,
  });
  //  --------------------------------------------------------------------------------

}

// Function For Display Canvas
function init() {
  // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3');
  // playAudio('../Sounds/level0_sounds/backgroud_music_free.mp3');
  NavbarBtns()

  function NavbarBtns() {

    // Call All Header Functions Here
    headerHome()
    headerBack()
    // headerProgress()
    headerProgress(progressBarImg)    // Change Progressbar Image
    headerSound('../asset/logo/Music.png')
    // headerSound()
    // toggelMusic()
    headerHint()

    headerReward(RewardStartImg)
    replyAudio(AudioReplaySound)
    RewardPoints(getRewardData)
  }

  // ------------------       working       ---------------------------------
  // Load LHS Image Here

  const loadLHSImg = new THREE.TextureLoader();
  loadLHSImg.load(
    // "../asset/Image place holder.png",
    WhiteBox,

    function (textureLHS) {
      var planeMaterialLHS = new THREE.MeshBasicMaterial({
        map: textureLHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // var planeGeometryLHS = new THREE.PlaneBufferGeometry(3, 3);
      var planeGeometryLHS = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
      planeLHSMain = new THREE.Mesh(planeGeometryLHS, planeMaterialLHS);
      scene.add(planeLHSMain);
      planeLHSMain.position.x = SXIPosLHS
      planeLHSMain.position.y = SYIPosLHS
      // planeLHS.position.z = 1

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    //  undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }

  );

  // Load RHS Image Here
  const loadRHSImg = new THREE.TextureLoader();
  loadRHSImg.load(
    // "../asset/Image place holder.png",
    WhiteBox,

    function (textureRHS) {
      // console.log("LHS Function Executed");
      var planeMaterialRHS = new THREE.MeshBasicMaterial({
        map: textureRHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // var planeGeometryRHS = new THREE.PlaneBufferGeometry(3, 3);
      var planeGeometryRHS = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
      planeRHSMain = new THREE.Mesh(planeGeometryRHS, planeMaterialRHS);
      scene.add(planeRHSMain);
      planeRHSMain.position.x = SXIPosRHS
      planeRHSMain.position.y = SYIPosRHS

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in RHS Image.');
    }
  );

  // Call Slide 1 Here
  // l2Slide1()

  setTimeout(() => {
    console.log("Settimeout call")

    l2Slide1()
    // l2Slide1(ErrorBorder)
    // }, 1000);
  }, 500);

  // Call Slide 5 For testing
  // l1Slide5()

  // //Render the scene - start Again if Render Not Working Properly
  // renderer.render(scene, camera);
  // document.body.appendChild(renderer.domElement);

  // controls.update();
  // // Resize the Screen  - Global
  // window.addEventListener('resize', function () {
  //   camera.aspect = window.innerWidth / window.innerHeight;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize(window.innerWidth, window.innerHeight)
  // })

}

// // Function For Homebtn Popup
// function homePopup() {

//   const canvasPopup = document.querySelector('.homepopup');


//   // Scene  - Popup
//   var scenePopup = new THREE.Scene();

//   // Camera For Popup
//   var cameraPopup = new THREE.PerspectiveCamera(
//     60,
//     // window.innerWidth / window.innerHeight,
//     600 / 500,
//     0.5,
//     1000
//   );
//   cameraPopup.position.set(0, 0, 4);

//   // RendererPopup- Global
//   const rendererPopup = new THREE.WebGLRenderer({
//     // canvas,
//     canvasPopup,
//     alpha: true,
//   });
//   // rendererPopup.setPixelRatio(window.devicePixelRatio);
//   // rendererPopup.setSize(window.innerWidth, window.innerHeight);
//   rendererPopup.setPixelRatio(600);
//   rendererPopup.setSize(600, 500);
//   document.body.appendChild(rendererPopup.domElement);

//   // Render 2nd Instructor After 1st audio complete
//   // Load Instructor After 1st audio execution done
//   const loadPopup = new THREE.TextureLoader();
//   loadPopup.load(
//     "../asset/Instructor_L0_2.png",

//     function (texturePopup) {
//       var planeMaterialPopup = new THREE.MeshBasicMaterial({
//         map: texturePopup,
//         transparent: true,
//         // visible: false
//       });
//       // textureInsL0_1.wrapS = THREE.RepeatWrapping;
//       // textureInsL0_1.wrapT = THREE.RepeatWrapping;
//       // textureLHS.repeat.set( 4, 4 );
//       //Create a 2x2 plane with texture
//       var planeGeometryPopup = new THREE.PlaneBufferGeometry(2.3, 2.3);
//       var planePopup = new THREE.Mesh(planeGeometryPopup, planeMaterialPopup);

//       scene.add(planePopup);
//       planePopup.position.x = 2
//       planePopup.position.y = -0.7
//       planePopup.position.z = 1

//       //Render the scene
//       rendererPopup.render(scenePopup, cameraPopup);
//       document.body.appendChild(rendererPopup.domElement);
//     },
//     // undefined,
//     function (err) {
//       console.error('An error happened in Instructor L0_2 Image.');
//     }
//   );
//   // }
//   // Render Scene and Camera Popup - Global
//   rendererPopup.render(scene, camera)
//   document.body.appendChild(rendererPopup.domElement);

//   // Resize the Screen Popup - Global
//   window.addEventListener('resize', function () {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     // camera.aspect = 600 / 500;
//     camera.updateProjectionMatrix();
//     rendererPopup.setSize(window.innerWidth, window.innerHeight)
//     // rendererPopup.setSize(600, 500)
//   })
// }