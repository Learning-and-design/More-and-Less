// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
console.log("Level 3 file Working")
// console.log("06-04 Updated File L3");
console.log("New 23/04 ")

// Set Data To LocalStorage
// console.log("localStorage Data:- ", localStorage)
// console.log("localStorage Data:- ", localStorage.levelData)
// console.log("localStorage Keys:- ",Object.entries(localStorage))
// console.log("localStorage Keys:- ",localStorage.getItem())

var setItemLocal = localStorage.setItem('level0', false)
var setItemLocal = localStorage.setItem('level1', true)
var setItemLocal = localStorage.setItem('level2', true)
var setItemLocal = localStorage.setItem('level3', true)
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
const canvas = document.querySelector('.level3');
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

// // Resize the Screen  - Global - active
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

//  ------------------- Handle Context Lose -------------------------------------
// gl.getExtension('WEBGL_lose_context').loseContext();
// var canvas = document.getElementById('canvas');
// var gl = canvas.getContext('webgl');

// canvas.addEventListener('webglcontextlost', function (e) {
//   console.log(e);
// }, false);

// gl.getExtension('WEBGL_lose_context').loseContext();
// WebGLContextEvent event with type "webglcontextlost" is logged.
//  -------------------------------------------------------------------------------


// // -------------    Active When Delivery to Client  -----------------------------
// var orbitControls
// orbitControls = new OrbitControls(camera, renderer.domElement);
// orbitControls.enabled = true;
// orbitControls.enableZoom = false;
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
// var RewardImg = "../asset/logo/Rewards 20.png"   // Level 3 Reward Image
var RewardImg = "../asset/logo/Rewards.png"   // Level 3 Reward Image

// var bgImg = "../asset/level_one_assets/Backgound.png"   // BackGroud Image
var bgImg = "../asset/level_three_assets/Backgound.png"   // BackGroud L3 Image
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
var ErrorBorder = "../asset/level_three_assets/Incorrect answer highlight.png"
var SuccessBorder = "../asset/level_three_assets/Correct answer highlight.png"

// Level 1 Images
// Load Place holder Image - white Box
// var WhiteBox = "../asset/Image place holder.png"
var whiteBox = "../asset/level_three_assets/Image place holder.png"  // L3 Box Image

// Slide-1 Images
// var S1LHS = "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png"    // 2 Blue Shirts

// For set 1 Correct 1 ---- 7 | 1 | 10
// var S1LHS = "../asset/level_two_assets/image aseet Ltwo Updated/Set 1_10 red shirts.png"   
var S1UP = "../asset/level_three_assets/image assest Lthree updated/Set 1_1 shuttlecock.png"
var S1LHS = "../asset/level_three_assets/image assest Lthree updated/Set 1_7 shuttlecock.png"
var S1MID = "../asset/level_three_assets/image assest Lthree updated/Set 1_1 shuttlecock.png"
var S1RHS = "../asset/level_three_assets/image assest Lthree updated/Set 1_10 shuttlecock.png"

// Slide-2 Images
var S2UP = "../asset/level_three_assets/image assest Lthree updated/Set 2_3 racquets.png"
var S2LHS = "../asset/level_three_assets/image assest Lthree updated/Set 2_3 racquets.png"
var S2MID = "../asset/level_three_assets/image assest Lthree updated/Set 2_6 racquets.png"
var S2RHS = "../asset/level_three_assets/image assest Lthree updated/Set 2_9 racquets.png"

// Slide-3 Images
// MID Cor
var S3UP = "../asset/level_three_assets/image assest Lthree updated/Set 3_5 trophies.png"
var S3LHS = "../asset/level_three_assets/image assest Lthree updated/Set 3_1 trophies.png"
var S3MID = "../asset/level_three_assets/image assest Lthree updated/Set 3_5 trophies.png"
var S3RHS = "../asset/level_three_assets/image assest Lthree updated/Set 3_7 trophies.png"

// Slide-4 Images
// MID Cor
var S4UP = "../asset/level_three_assets/image assest Lthree updated/Set 4_2 pens.png"
var S4LHS = "../asset/level_three_assets/image assest Lthree updated/Set 4_6 pens.png"
var S4MID = "../asset/level_three_assets/image assest Lthree updated/Set 4_2 pens.png"  // 8 FootBalls Blue
var S4RHS = "../asset/level_three_assets/image assest Lthree updated/Set 4_10 pens.png"  // 4 FootBalls Blue

// Slide-5 Images
// LHS Cor
var S5UP = "../asset/level_three_assets/image assest Lthree updated/Set 5_4 erasers.png"
var S5LHS = "../asset/level_three_assets/image assest Lthree updated/Set 5_4 erasers.png"
var S5MID = "../asset/level_three_assets/image assest Lthree updated/Set 5_6 erasers.png"  // 10 Balloons
var S5RHS = "../asset/level_three_assets/image assest Lthree updated/Set 5_2 erasers.png"  // 5 Balloons

// Slide-6 Images
// LHS Cor
var S6UP = "../asset/level_three_assets/image assest Lthree updated/Set 6_6 buttons.png"
var S6LHS = "../asset/level_three_assets/image assest Lthree updated/Set 6_1 buttons.png"  // 5 Balloons
var S6MID = "../asset/level_three_assets/image assest Lthree updated/Set 6_6 buttons.png"  // 10 Balloons
var S6RHS = "../asset/level_three_assets/image assest Lthree updated/Set 6_4 buttons.png"

// Slide-7 Images
// RHS Cor
var S7UP = "../asset/level_three_assets/image assest Lthree updated/Set 7_5 carrots.png"  // 8 socks
var S7LHS = "../asset/level_three_assets/image assest Lthree updated/Set 7_2 carrots.png"  // 8 socks
var S7MID = "../asset/level_three_assets/image assest Lthree updated/Set 7_5 carrots.png"  // 8 socks
var S7RHS = "../asset/level_three_assets/image assest Lthree updated/Set 7_7 carrots.png"  // 6 socks

// Slide-8 Images
// MID Cor
var S8UP = "../asset/level_three_assets/image assest Lthree updated/Set 8_8 towels.png"  // 5 Trousers
var S8LHS = "../asset/level_three_assets/image assest Lthree updated/Set 8_10 towels.png"  // 3 Trousers
var S8MID = "../asset/level_three_assets/image assest Lthree updated/Set 8_5 towels.png"  // 5 Trousers
var S8RHS = "../asset/level_three_assets/image assest Lthree updated/Set 8_8 towels.png"  // 5 Trousers

// Slide-9 Images
// MID Cor
var S9UP = "../asset/level_three_assets/image assest Lthree updated/Set 9_6 bricks.png"  // 5 white ball
var S9LHS = "../asset/level_three_assets/image assest Lthree updated/Set 9_8 bricks.png"  // 4 white ball
var S9MID = "../asset/level_three_assets/image assest Lthree updated/Set 9_6 bricks.png"  // 5 white ball
var S9RHS = "../asset/level_three_assets/image assest Lthree updated/Set 9_5 bricks.png"  // 5 white ball

// Slide-10 Images
// RHS Cor
var S10UP = "../asset/level_three_assets/image assest Lthree updated/Set 10_4 cars.png"  // 10 Shoes
var S10LHS = "../asset/level_three_assets/image assest Lthree updated/Set 10_4 cars.png"  // 10 Shoes
var S10MID = "../asset/level_three_assets/image assest Lthree updated/Set 10_3 cars.png"  // 10 Shoes
var S10RHS = "../asset/level_three_assets/image assest Lthree updated/Set 10_5 cars.png"  // 9 Shoes


// Load ProgressBar Img
// Main Image
// var progressBarImg = "../asset/Progress_bar/Updated/Progress bar_Type_1 20.png"
var progressBarImg = "../asset/Progress_bar/Updated/Progress bar_level3_start.png"


// Audio Reply Btn Image
var AudioReplyBtnImg = "../asset/logo/Audio_Replay.png"

// Change Image according to round
// var l1PSDemo = "../asset/Progress_bar/Progress bar_Type_3.png"
// var l1PSDemo = "../asset/Progress_bar/Progress_Bar_Type2_element20.png" // Working
var l3PS1 = "../asset/Progress_bar/Updated/Progress bar_Type_1 21.png"
var l3PS2 = "../asset/Progress_bar/Updated/Progress bar_Type_1 22.png"
var l3PS3 = "../asset/Progress_bar/Updated/Progress bar_Type_1 23.png"
var l3PS4 = "../asset/Progress_bar/Updated/Progress bar_Type_1 24.png"
var l3PS5 = "../asset/Progress_bar/Updated/Progress bar_Type_1 25.png"
var l3PS6 = "../asset/Progress_bar/Updated/Progress bar_Type_1 26.png"
var l3PS7 = "../asset/Progress_bar/Updated/Progress bar_Type_1 27.png"
var l3PS8 = "../asset/Progress_bar/Updated/Progress bar_Type_1 28.png"
var l3PS9 = "../asset/Progress_bar/Updated/Progress bar_Type_1 29.png"
var l3PS10 = "../asset/Progress_bar/Updated/Progress bar_Type_1 30.png"


// Audio reply sound 
// var AudioReplaySound = '../Sounds/level2_sounds/ML_A_L2_3.mp3'
var AudioReplaySound = '../Sounds/level3_sounds/ML_A_L3_3.mp3'

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

var replyAudioSound, soundReplyisPlaying = true;
// var audio2Load = false;
var planeInsL0_1, planeInsL0_2, sound, sound2, listener, listenerBG, storeAudioState;

// All Plane Images
var planeLHSMain, planeRHSMain, planeMIDMain, planeUPMain

// Headers Variables
var planeHome, planeBack, planeProgress, planeSound, planeSoundOff, planeHint, planeReward;

// IntroLess Variables 
var planeintroLessLHS, planeintroLessRHS, planeintroLessRHSHand, planeIntroRHSHighlight;

// LevelThreeComplete (LTHC) Variables 
// var planeLOCLHS, planeLOCRHS;
var planeLTHCLHS, planeLTHCRHS;

// Variables For Wrong Answer Check
var planeWrongAns, planeWrongAnsS2, planeWrongAnsS3, planeWrongAnsS4, planeWrongAnsS5, planeWrongAnsS6, planeWrongAnsS7, planeWrongAnsS8, planeWrongAnsS9, planeWrongAnsS10

// Variables For Correct Answer Check
var planeCorrectAns, planeCorrectAnsS2, planeCorrectAnsS3, planeCorrectAnsS4, planeCorrectAnsS5, planeCorrectAnsS6, planeCorrectAnsS7, planeCorrectAnsS8, planeCorrectAnsS9, planeCorrectAnsS10

// Slide 1 Variables
var planeS1LHS, planeS1RHS, planeS1MID, planeS1UP

// Slide 2 Variables
var planeS2LHS, planeS2RHS, planeS2MID, planeS2UP

// Slide 3 Variables
var planeS3LHS, planeS3RHS, planeS3MID, planeS3UP

// Slide 4 Variables
var planeS4LHS, planeS4RHS, planeS4MID, planeS4UP

// Slide 5 Variables
var planeS5LHS, planeS5RHS, planeS5MID, planeS5UP


// Slide 6 Variables
var planeS6LHS, planeS6RHS, planeS6MID, planeS6UP

// Slide 7 Variables
var planeS7LHS, planeS7RHS, planeS7MID, planeS7UP


// Slide 8 Variables
var planeS8LHS, planeS8RHS, planeS8MID, planeS8UP


// Slide 9 Variables
var planeS9LHS, planeS9RHS, planeS9MID, planeS9UP


// Slide 10 Variables
var planeS10LHS, planeS10RHS, planeS10MID, planeS10UP

var ErrCorSound = false, dblClick = false

// Varibles for Check Fuction is active or not
var AnsS1Cor = false, AnsS2Cor = false, AnsS3Cor = false, AnsS4Cor = false, AnsS5Cor = false,
  AnsS6Cor = false, AnsS7Cor = false, AnsS8Cor = false, AnsS9Cor = false, AnsS10Cor = false

//Check Image Status
var musicImgStatus = true, replyAudioBtnSound, isAudiReplyplay = false, planeReplyAudio

var newrewardPoints, getNewRewardPoints, getRewardData, getRewardString, finalReward, meshText

// Global x,y Size For Slide Rounds

// White Box Size For Level 3 :- (2.9, 1.6)

// SXIPosLHS = Slide X Image Position   LHS
// SYIPosLHS = Slide Y Image Position   LHS
// var SXIPosLHS = -1.75
// var SYIPosLHS = -0.4
var SXIPosLHS = -3
var SYIPosLHS = -1.2

// SXIPosMID = Slide X Image Position   MID
// SYIPosMID = Slide Y Image Position   MID
var SXIPosMID = 0
var SYIPosMID = -1.2

// SXIPosUP = Slide X Image Position   UP
// SYIPosUP = Slide Y Image Position   UP
var SXIPosUP = 0
var SYIPosUP = 0.7

// SXIPosRHS = Slide X Image Position   RHS
// SYIPosRHS = Slide Y Image Position   RHS
var SXIPosRHS = 3
var SYIPosRHS = -1.2

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


// Skip Btn --------------------------
// Skip Button 
var skipBtn = "../asset/logo/Skip.png"
var planeSkipBtn

// // Skip Btn Position
// var SkipPosX = 3.3
// var SkipPosY = -1.3

// Skip Button 
var SkipPosX = 3.3
// var SkipPosY = 0.55 // old Active
// var SkipPosY = 0.9 // Active
var SkipPosY = 0.55


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
  // PBackX = -2.7 // Old
  PBackX = -2.8
  PBackY = 1.5

  // Sound Button Position
  PSoundX = 1.7
  PSoundY = 1.5

  // Hint Button Position
  PHintX = 2.2
  PHintY = 1.5

  // Reward Button Position
  PRewardX = 3
  PRewardY = 1.53

  // Reward Points Position
  // RewardPointsX = 3.15
  RewardPointsX = 3
  RewardPointsY = 1.4

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
    // window.stop()
    sound2.pause()
    // window.onblur()
    // window.alert("Page Change")
    // window.location.reload()
    // document.querySelector('#level1Test').pause()
    // document.getElementById('#level1Test').pause()
    // window.requestAnimationFrame();
  }
  if (pageHidden == false) {
    // sound.play()
    if (musicImgStatus == true) {
      sound2.play()
    }
    // window.onfocus()
    // await new Promise(resolve => setTimeout(resolve, 1000));
    // window.location.reload()
    // window.requestAnimationFrame();
    // window.requestAnimationFrame(presentationOne)
  }

}, false);

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
      var planeGeometryReplyAudio = new THREE.PlaneBufferGeometry(0.36, 0.33)
      planeReplyAudio = new THREE.Mesh(planeGeometryReplyAudio, planeMaterialReplyAudio)
      scene.add(planeReplyAudio)
      planeReplyAudio.position.x = 3.3
      planeReplyAudio.position.y = 1
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
      plane.position.x = 0
      plane.position.y = 0.3
      plane.position.z = 1

      // OnClick Event For planeLHS
      const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
      domEvents.addEventListener(plane, 'click', function (event) {
        openFullscreen()
        // RewardShow()
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


        soundBG('../Sounds/level0_sounds/backgroud_music_free.mp3')
        if (audioPlayed == true) {

          init();     // call Main Function
          // l1Slide1();    // Direct l1Slide 1 Call
          // console.log("this is true");
          var level3_Com = localStorage.getItem('level3Complete')
          var level3_Com_val = JSON.parse(level3_Com)
          // console.log("level1_Pre:--------------------------", level0_Com_val)
          if (level3_Com_val == true) {
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

  // // Resize the Screen  - Global
  // window.addEventListener('resize', function () {
  //   camera.aspect = window.innerWidth / window.innerHeight;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize(window.innerWidth, window.innerHeight)
  // })
}

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
    storeAudioState = sound2.source.onended;
  }, false);
}


// For Level Complete Audio
// Play Reply Audio and Pause playAudio Function sound here
function LevelCompleteSound(path) {
  console.clear()


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

//  ------------ NabBar All Buttons -------------------------------------

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
      // var planeGeometryHome = new THREE.PlaneBufferGeometry(0.35, 0.34);
      var planeGeometryHome = new THREE.PlaneBufferGeometry(0.36, 0.33);
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

        var currentPath = `${endPoint}/level3.html`

        if (currentPath == `${endPoint}/level3.html`) {
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
      var planeGeometryBack = new THREE.PlaneBufferGeometry(0.36, 0.33);
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

        // Go to Level 2 Gameplay
        // window.location.href = '/level2.html'

        var currentPath = `${endPoint}/level3.html`

        if (currentPath == `${endPoint}/level3.html`) {
          console.log("Redirect New Page");
          console.log("endPoint", endPoint);
          // location.href = '/level2.html'
          window.location.replace(`/level2.html`);

        } else {
          // location.href = '/level2.html'
          window.location.replace(`/level2.html`);

        }

      })

      // planeBack.addEventListener( 'click', onClick , function(event) {
      //     console.log("Back Btn Click-------------------")
      // })

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
        // visible: false 
      });
      //Create a 0.30x0.30 plane with texture
      // var planeGeometryProgress = new THREE.PlaneBufferGeometry(2, 0.33);
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
      var planeGeometrySound = new THREE.PlaneBufferGeometry(0.36, 0.33);
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
      "../asset/logo/Music_Mute.png",


      function (textureSound) {
        var planeMaterialSound = new THREE.MeshBasicMaterial({
          map: textureSound,
          transparent: true,
          // visible: false 
        });
        //Create a 0.30x0.30 plane with texture
        var planeGeometrySound = new THREE.PlaneBufferGeometry(0.36, 0.33);
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
      "../asset/logo/Music.png",

      function (textureSound) {
        var planeMaterialSound = new THREE.MeshBasicMaterial({
          map: textureSound,
          transparent: true,
          // visible: false 
        });
        //Create a 0.30x0.30 plane with texture
        var planeGeometrySound = new THREE.PlaneBufferGeometry(0.36, 0.33);
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
      var planeGeometryHint = new THREE.PlaneBufferGeometry(0.36, 0.33);
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
        // window.location.href = "/level3_Pre.html"

        var currentPath = `${endPoint}/level3.html`

        if (currentPath == `${endPoint}/level3.html`) {
          console.log("Redirect New Page");
          console.log("endPoint", endPoint);
          // location.href = '/level3_Pre.html'
          window.location.replace(`/level3_Pre.html`);

        } else {
          // location.href = '/level3_Pre.html'
          window.location.replace(`/level3_Pre.html`);

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
function headerReward(RewardImg) {
  // console.log("Function headerReward");
  const hReward = new THREE.TextureLoader();
  hReward.load(
    // Load Rewards Image

    RewardImg,

    function (textureReward) {
      var planeMaterialReward = new THREE.MeshBasicMaterial({
        map: textureReward,
        transparent: true,
        // visible: false 
      });
      //Create a 0.30x0.30 plane with texture
      // var planeGeometryReward = new THREE.PlaneBufferGeometry(0.80, 0.30);
      var planeGeometryReward = new THREE.PlaneBufferGeometry(1, 0.33);
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

//  ---------------------------------------------------------------------

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
    // replyAudioSound.play();

    // Sound Only Play Before Level Complete Slide
    if (ErrCorSound == false) {
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

      // For Wrong Click
      switch (path) {
        // case '../Sounds/Global_Music/tryAgain.mp3':
        case '../Sounds/Global_Music/Music/For the wrong answer.mp3':    // Working
          console.log("For the wrong answer")
          // console.log("Check Status:- ",planeLHSMainRed.visible);
          // if (planeWrongAns.visible == true) {
          // planeWrongAns.visible = false
          // planeWrongAnsS2.visible = false
          // planeWrongAnsS3.visible = false
          // planeWrongAns.visible = false
          // setTimeout( l2Slide2() , 100)

          // //Render the scene for Update The Values
          // renderer.render(scene, camera);
          // document.body.appendChild(renderer.domElement);

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

      // console.log(S1Cor, S2Cor, S3Cor, S4Cor, S5Cor, S6Cor)

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
    // this.isPlaying = false;
  }, false);
}

// Check Clicked Answer S1
function AnswerCheckS1() {
  console.clear()

  console.log("Answer Check Function Working")

  S1Cor = false
  // if (S1Cor == true){
  //     S1Cor = false
  console.log("S1Cor Condition working")

  // if (planeCorrectAns.visible == true) {
  console.log(" This is Visible S1")
  planeCorrectAns.visible = false
  // Noman Change
  l3Slide2()
  // setTimeout(l3Slide2(), 100)
  // }
  // gPlayTshirt()
  // console.log("");

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }

}

// Check Clicked Answer S2
function AnswerCheckS2() {
  console.clear()

  // if (S2Cor == true){
  // S2Cor = false
  console.log("S2Cor Condition working")

  // if (planeCorrectAnsS2.visible == true) {
  // console.log(" This is Visible S2")

  // planeWrongAns.visible = false
  // planeCorrectAns.visible = false

  // planeWrongAnsS2.visible = false
  planeCorrectAnsS2.visible = false
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  l3Slide3()
  // setTimeout(l3Slide3(), 100)

  // //Render the scene for Update The Values
  // renderer.render(scene, camera);
  // document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S3
function AnswerCheckS3() {
  console.clear()

  // if (S2Cor == true){
  //     S2Cor = false
  console.log("S3Cor Condition working")

  // if (planeCorrectAnsS3.visible == true) {
  console.log(" This is Visible S3")

  // planeWrongAns.visible = false
  // planeCorrectAns.visible = false

  // planeWrongAnsS2.visible = false
  // planeCorrectAnsS2.visible = false

  // planeWrongAnsS3.visible = false
  planeCorrectAnsS3.visible = false

  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  l3Slide4()
  // setTimeout(l3Slide4(), 100)

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
  console.clear()

  // if (S2Cor == true){
  //     S2Cor = false
  console.log("S4Cor Condition working")

  // if (planeCorrectAnsS4.visible == true) {
  console.log(" This is Visible S4")

  // planeWrongAns.visible = false
  // planeCorrectAns.visible = false

  // planeWrongAnsS2.visible = false
  // planeCorrectAnsS2.visible = false

  // planeWrongAnsS3.visible = false
  // planeCorrectAnsS3.visible = false

  // planeWrongAnsS4.visible = false
  planeCorrectAnsS4.visible = false

  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  l3Slide5()
  // setTimeout(l3Slide5(), 100)

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
  console.clear()

  // if (S2Cor == true){
  //     S2Cor = false
  console.log("S5Cor Condition working")
  // console.log("S5Cor Condition working", planeCorrectAnsS5)

  // if (planeCorrectAnsS5.visible == true) {
  console.log(" This is Visible S5")

  // planeWrongAns.visible = false
  // planeCorrectAns.visible = false

  // planeWrongAnsS2.visible = false
  // planeCorrectAnsS2.visible = false

  // planeWrongAnsS3.visible = false
  // planeCorrectAnsS3.visible = false

  // planeWrongAnsS4.visible = false
  // planeCorrectAnsS4.visible = false

  planeCorrectAnsS5.visible = false

  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  l3Slide6()
  // setTimeout(l3Slide6(), 100)

  // // Render the scene for Update The Values
  // renderer.render(scene, camera);
  // document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S6
function AnswerCheckS6() {
  console.clear()

  // if (S2Cor == true){
  //     S2Cor = false
  console.log("S6Cor Condition working")

  // if (planeCorrectAnsS6.visible == true) {
  console.log(" This is Visible S6")

  // planeWrongAns.visible = false
  // planeCorrectAns.visible = false

  // planeWrongAnsS2.visible = false
  // planeCorrectAnsS2.visible = false

  // planeWrongAnsS3.visible = false
  // planeCorrectAnsS3.visible = false

  // planeWrongAnsS4.visible = false
  // planeCorrectAnsS4.visible = false

  // planeCorrectAnsS5.visible = false

  planeCorrectAnsS6.visible = false

  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  l3Slide7()
  // setTimeout(l3Slide7(), 100)

  // //Render the scene for Update The Values
  // renderer.render(scene, camera);
  // document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S7
function AnswerCheckS7() {
  console.clear()

  // if (S2Cor == true){
  //     S2Cor = false
  console.log("S7Cor Condition working")

  // if (planeCorrectAnsS7.visible == true) {
  console.log(" This is Visible S7")

  // planeWrongAns.visible = false
  // planeCorrectAns.visible = false

  // planeWrongAnsS2.visible = false
  // planeCorrectAnsS2.visible = false

  // planeWrongAnsS3.visible = false
  // planeCorrectAnsS3.visible = false

  // planeWrongAnsS4.visible = false
  // planeCorrectAnsS4.visible = false

  // planeCorrectAnsS5.visible = false

  // planeCorrectAnsS6.visible = false

  planeCorrectAnsS7.visible = false


  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  l3Slide8()
  // setTimeout(l3Slide8(), 100)

  // //Render the scene for Update The Values
  // renderer.render(scene, camera);
  // document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S8
function AnswerCheckS8() {
  console.clear()

  // if (S2Cor == true){
  //     S2Cor = false
  console.log("S8Cor Condition working")

  // if (planeCorrectAnsS8.visible == true) {
  console.log(" This is Visible S8")

  // planeWrongAns.visible = false
  // planeCorrectAns.visible = false

  // planeWrongAnsS2.visible = false
  // planeCorrectAnsS2.visible = false

  // planeWrongAnsS3.visible = false
  // planeCorrectAnsS3.visible = false

  // planeWrongAnsS4.visible = false
  // planeCorrectAnsS4.visible = false

  // planeCorrectAnsS5.visible = false

  // planeCorrectAnsS6.visible = false

  // planeCorrectAnsS7.visible = false

  planeCorrectAnsS8.visible = false


  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  l3Slide9()
  // setTimeout(l3Slide9(), 100)

  // //Render the scene for Update The Values
  // renderer.render(scene, camera);
  // document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S9
function AnswerCheckS9() {
  console.clear()

  // if (S2Cor == true){
  //     S2Cor = false
  console.log("S9Cor Condition working")

  // if (planeCorrectAnsS9.visible == true) {
  console.log(" This is Visible S9")

  // planeWrongAns.visible = false
  // planeCorrectAns.visible = false

  // planeWrongAnsS2.visible = false
  // planeCorrectAnsS2.visible = false

  // planeWrongAnsS3.visible = false
  // planeCorrectAnsS3.visible = false

  // planeWrongAnsS4.visible = false
  // planeCorrectAnsS4.visible = false

  // planeCorrectAnsS5.visible = false

  // planeCorrectAnsS6.visible = false

  // planeCorrectAnsS7.visible = false

  // planeCorrectAnsS8.visible = false

  planeCorrectAnsS9.visible = false


  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  l3Slide10()
  // setTimeout(l3Slide10(), 100)

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
  console.clear()

  // if (S2Cor == true){
  //     S2Cor = false
  console.log("S10Cor Condition working")

  // if (planeCorrectAnsS10.visible == true) {
  console.log(" This is Visible S10")

  // planeWrongAns.visible = false
  // planeCorrectAns.visible = false

  // planeWrongAnsS2.visible = false
  // planeCorrectAnsS2.visible = false

  // planeWrongAnsS3.visible = false
  // planeCorrectAnsS3.visible = false

  // planeWrongAnsS4.visible = false
  // planeCorrectAnsS4.visible = false

  // planeCorrectAnsS5.visible = false

  // planeCorrectAnsS6.visible = false

  // planeCorrectAnsS7.visible = false

  // planeCorrectAnsS8.visible = false

  // planeCorrectAnsS9.visible = false

  planeCorrectAnsS10.visible = false
  levelThreeComplete()

  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  // setTimeout(levelThreeComplete(), 100)
  // setTimeout(() => {
  //   levelThreeComplete()
  // }, 1000);

  //   //Render the scene for Update The Values
  //   renderer.render(scene, camera);
  //   document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// ---------    All Boxes in Level Three Size:- ( 2.9, 1.6 )  -----------------------------------------------

// Function For Level3 Slide 1
// Indicate Blue Tshirt Slide
// RHS Correct
function l3Slide1() {
  console.clear()

  // Refrence for Noman
  console.log("Slide 1 Working");

  headerProgress(progressBarImg)    // Change Progressbar Image

  //  ------------------------  UP  --------------------------
  const loadS1UP = new THREE.TextureLoader();
  loadS1UP.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S1UP, // Shirt

    function (textureS1UP) {
      // PM:- planeMaterial
      var PM_S1UP = new THREE.MeshBasicMaterial({
        map: textureS1UP,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S1UP = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS1UP = new THREE.Mesh(PG_S1UP, PM_S1UP);
      scene.add(planeS1UP);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS1UP.position.x = SXIPosUP   // Working
      planeS1UP.position.y = SYIPosUP   // Working
      // planeS1LHS.position.z = 1


      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS1LHS = new THREE.TextureLoader();
  loadS1LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S1LHS, // Shirt

    function (textureS1LHS) {
      // PM:- planeMaterial
      var PM_S1LHS = new THREE.MeshBasicMaterial({
        map: textureS1LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S1LHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS1LHS = new THREE.Mesh(PG_S1LHS, PM_S1LHS);
      scene.add(planeS1LHS);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS1LHS.position.x = SXIPosLHS   // Working
      planeS1LHS.position.y = SYIPosLHS   // Working
      // planeS1LHS.position.z = 1


      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS1LHS, "dblclick", event => {
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
        domEvents.addEventListener(planeS1LHS, 'click', function (event) {
          if (AnsS1Cor == false) {
            console.log("Wrong Answer S1")


            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS1LHS, 'click', false)  // Active
            AnsS1Cor = true

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS1LHS_Ans = new THREE.TextureLoader();
              loadS1LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS1LHS_Ans) {
                  var PM_S1LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS1LHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  // var PG_S1LHS_Ans = new THREE.PlaneBufferGeometry(2.1, 2.1);
                  var PG_S1LHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAns = new THREE.Mesh(PG_S1LHS_Ans, PM_S1LHS_Ans);
                  scene.add(planeWrongAns);
                  // planeWrongAns.position.x = -1.2
                  // planeWrongAns.position.y = -0.7
                  planeWrongAns.position.x = SXIPosLHS    // Working
                  planeWrongAns.position.y = SYIPosLHS    // Working

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
      console.error('An error happened in LHS Image.');
    }
  );


  //  ------------------------  MID  --------------------------
  // Correct
  const loadS1MID = new THREE.TextureLoader();
  loadS1MID.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S1MID, // Shirt

    function (textureS1MID) {
      // PM:- planeMaterial
      var PM_S1MID = new THREE.MeshBasicMaterial({
        map: textureS1MID,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S1MID = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS1MID = new THREE.Mesh(PG_S1MID, PM_S1MID);
      scene.add(planeS1MID);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS1MID.position.x = SXIPosMID   // Working
      planeS1MID.position.y = SYIPosMID   // Working


      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS1Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS1MID, 'click', function (event) {
          if (AnsS1Cor == false) {
            console.log("Correct Answer S1")
            S1Cor = true
            AnsS1Cor = true


            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS1MID, 'click', false)
            // AnsS1Cor = true

            setTimeout(() => {
              scene.remove(planeS1UP, planeS1MID, planeS1LHS, planeS1RHS)
            }, 1000);


            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // AnswerCheck('Correct')

              // Next Slide Function Call Here
              // setTimeout(l2Slide2(), 2000)
              // l2Slide2()
              // setTimeout( l2Slide2() , 200)

              // call Skip Function Here  after some time limit
              // setTimeout(gPlayTshirtSkip(), 5000)

              // Load RHS Image Here
              const loadS1RHS_Ans = new THREE.TextureLoader();
              loadS1RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureS1RHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S1RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS1RHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  // var PG_S1RHS_Ans = new THREE.PlaneBufferGeometry(2.1, 2.1);
                  var PG_S1RHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  // console.log("check for plaen size planeGeometryRHS", planeGeometryRHS)
                  // planeRHSMainGreen = new THREE.Mesh(planeGeometryRHS, planeMaterialRHS);
                  planeCorrectAns = new THREE.Mesh(PG_S1RHS_Ans, PM_S1RHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  scene.add(planeCorrectAns);
                  // planeCorrectAns.position.x = 1.2
                  // planeCorrectAns.position.y = -0.7
                  planeCorrectAns.position.x = SXIPosMID  // Working
                  planeCorrectAns.position.y = SYIPosMID  // Working

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Green Highlight Not Active");
            }
            // S1Cor = true

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
    S1RHS, // Shirt

    function (textureS1RHS) {
      var PM_S1RHS = new THREE.MeshBasicMaterial({
        map: textureS1RHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var PG_S1RHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS1RHS = new THREE.Mesh(PG_S1RHS, PM_S1RHS);
      scene.add(planeS1RHS);
      // planeS1RHS.position.x = 1.2
      // planeS1RHS.position.y = -0.7
      planeS1RHS.position.x = SXIPosRHS   // Working
      planeS1RHS.position.y = SYIPosRHS   // Working



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
            // domEvents.removeEventListener(planeS1RHS, 'click', false) // Active
            AnsS1Cor = true

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS1LHS_Ans = new THREE.TextureLoader();
              loadS1LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS1LHS_Ans) {
                  var PM_S1LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS1LHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  // var PG_S1LHS_Ans = new THREE.PlaneBufferGeometry(2.1, 2.1);
                  var PG_S1LHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAns = new THREE.Mesh(PG_S1LHS_Ans, PM_S1LHS_Ans);
                  scene.add(planeWrongAns);
                  // planeWrongAns.position.x = -1.2
                  // planeWrongAns.position.y = -0.7
                  planeWrongAns.position.x = SXIPosRHS    // Working
                  planeWrongAns.position.y = SYIPosRHS    // Working

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

// Function for Level3 Slide 2
// Indicate Cap
// RHS Correct
function l3Slide2() {
  console.log("Slide 2 Function Working")
  // S1Cor = false
  headerProgress(l3PS1)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS1LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS1UP.visible = false
  //   planeS1LHS.visible = false
  //   planeS1MID.visible = false
  //   planeS1RHS.visible = false
  // }

  //  ------------------------  UP  --------------------------
  const loadS2UP = new THREE.TextureLoader();
  loadS2UP.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S2UP, // Shirt

    function (textureS2UP) {
      // PM:- planeMaterial
      var PM_S2UP = new THREE.MeshBasicMaterial({
        map: textureS2UP,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S2UP = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS2UP = new THREE.Mesh(PG_S2UP, PM_S2UP);
      scene.add(planeS2UP);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS2UP.position.x = SXIPosUP   // Working
      planeS2UP.position.y = SYIPosUP   // Working
      // planeS1LHS.position.z = 1

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  LHS  --------------------------
  // Correct
  const loadS2LHS = new THREE.TextureLoader();
  loadS2LHS.load(
    // 2nd URL
    S2LHS, // Shirt

    function (textureS2LHS) {
      var PM_S2LHS = new THREE.MeshBasicMaterial({
        map: textureS2LHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var PG_S2LHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS2LHS = new THREE.Mesh(PG_S2LHS, PM_S2LHS);
      scene.add(planeS2LHS);
      // planeS1RHS.position.x = 1.2
      // planeS1RHS.position.y = -0.7
      planeS2LHS.position.x = SXIPosLHS   // Working
      planeS2LHS.position.y = SYIPosLHS   // Working


      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS2Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS2LHS, 'click', function (event) {
          if (AnsS2Cor == false) {
            console.log("Correct Answer S1")
            S2Cor = true
            AnsS2Cor = true


            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS2LHS, 'click', false)
            // AnsS1Cor = true

            setTimeout(() => {
              scene.remove(planeS2UP, planeS2MID, planeS2LHS, planeS2RHS)
            }, 1000);


            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // AnswerCheck('Correct')

              // Next Slide Function Call Here
              // setTimeout(l2Slide2(), 2000)
              // l2Slide2()
              // setTimeout( l2Slide2() , 200)

              // call Skip Function Here  after some time limit
              // setTimeout(gPlayTshirtSkip(), 5000)

              // Load RHS Image Here
              const loadS2LHS_Ans = new THREE.TextureLoader();
              loadS2LHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureS2LHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S2LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS2LHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  // var PG_S1RHS_Ans = new THREE.PlaneBufferGeometry(2.1, 2.1);
                  var PG_S2LHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  // console.log("check for plaen size planeGeometryRHS", planeGeometryRHS)
                  // planeRHSMainGreen = new THREE.Mesh(planeGeometryRHS, planeMaterialRHS);
                  planeCorrectAnsS2 = new THREE.Mesh(PG_S2LHS_Ans, PM_S2LHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  scene.add(planeCorrectAnsS2);
                  // planeCorrectAns.position.x = 1.2
                  // planeCorrectAns.position.y = -0.7
                  planeCorrectAnsS2.position.x = SXIPosLHS  // Working
                  planeCorrectAnsS2.position.y = SYIPosLHS  // Working

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Green Highlight Not Active");
            }
            // S1Cor = true

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



  //  ------------------------  MID  --------------------------
  // Wrong
  const loadS2MID = new THREE.TextureLoader();
  loadS2MID.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S2MID, // Shirt

    function (textureS2MID) {
      // PM:- planeMaterial
      var PM_S2MID = new THREE.MeshBasicMaterial({
        map: textureS2MID,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S2MID = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS2MID = new THREE.Mesh(PG_S2MID, PM_S2MID);
      scene.add(planeS2MID);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS2MID.position.x = SXIPosMID   // Working
      planeS2MID.position.y = SYIPosMID   // Working

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS2MID, "dblclick", event => {
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
        domEvents.addEventListener(planeS2MID, 'click', function (event) {
          if (AnsS2Cor == false) {
            console.log("Wrong Answer S1")


            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS2MID, 'click', false) // Active
            AnsS2Cor = true

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS2LHS_Ans = new THREE.TextureLoader();
              loadS2LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS2LHS_Ans) {
                  var PM_S2LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS2LHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  // var PG_S1LHS_Ans = new THREE.PlaneBufferGeometry(2.1, 2.1);
                  var PG_S2LHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS2 = new THREE.Mesh(PG_S2LHS_Ans, PM_S2LHS_Ans);
                  scene.add(planeWrongAnsS2);
                  // planeWrongAns.position.x = -1.2
                  // planeWrongAns.position.y = -0.7
                  planeWrongAnsS2.position.x = SXIPosMID    // Working
                  planeWrongAnsS2.position.y = SYIPosMID    // Working

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
      console.error('An error happened in LHS Image.');
    }
  );


  // Wrong
  const loadS2RHS = new THREE.TextureLoader();
  loadS2RHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S2RHS, // Shirt

    function (textureS2RHS) {
      // PM:- planeMaterial
      var PM_S2RHS = new THREE.MeshBasicMaterial({
        map: textureS2RHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S2RHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS2RHS = new THREE.Mesh(PG_S2RHS, PM_S2RHS);
      scene.add(planeS2RHS);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS2RHS.position.x = SXIPosRHS   // Working
      planeS2RHS.position.y = SYIPosRHS   // Working

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
            console.log("Wrong Answer S1")


            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS2RHS, 'click', false) // Active
            AnsS2Cor = true

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS2RHS_Ans = new THREE.TextureLoader();
              loadS2RHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS2RHS_Ans) {
                  var PM_S2RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS2RHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  // var PG_S1LHS_Ans = new THREE.PlaneBufferGeometry(2.1, 2.1);
                  var PG_S2RHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS2 = new THREE.Mesh(PG_S2RHS_Ans, PM_S2RHS_Ans);
                  scene.add(planeWrongAnsS2);
                  // planeWrongAns.position.x = -1.2
                  // planeWrongAns.position.y = -0.7
                  planeWrongAnsS2.position.x = SXIPosRHS    // Working
                  planeWrongAnsS2.position.y = SYIPosRHS    // Working

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
      console.error('An error happened in LHS Image.');
    }
  );

  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
}

// Function for Level1 Slide 3
// Indicate Hat
// MID Correct
function l3Slide3() {
  console.log("Slide 3 Function Working")
  headerProgress(l3PS2)
  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS2LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS2UP.visible = false
  //   planeS2LHS.visible = false
  //   planeS2MID.visible = false
  //   planeS2RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Load Image Here
  const loadS3UP = new THREE.TextureLoader();
  loadS3UP.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S3UP, // Shirt

    function (textureS3UP) {
      var PM_S3UP = new THREE.MeshBasicMaterial({
        map: textureS3UP,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_S3UP = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS3UP = new THREE.Mesh(PG_S3UP, PM_S3UP);
      scene.add(planeS3UP);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS3UP.position.x = SXIPosUP   // Working
      planeS3UP.position.y = SYIPosUP   // Working
      // planeS1LHS.position.z = 1

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS3LHS = new THREE.TextureLoader();
  loadS3LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S3LHS, // Shirt

    function (textureS3LHS) {
      // PM:- planeMaterial
      var PM_S3LHS = new THREE.MeshBasicMaterial({
        map: textureS3LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S3LHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS3LHS = new THREE.Mesh(PG_S3LHS, PM_S3LHS);
      scene.add(planeS3LHS);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS3LHS.position.x = SXIPosLHS   // Working
      planeS3LHS.position.y = SYIPosLHS   // Working
      // planeS1LHS.position.z = 1

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS3LHS, "dblclick", event => {
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
        domEvents.addEventListener(planeS3LHS, 'click', function (event) {
          if (AnsS3Cor == false) {
            console.log("Wrong Answer S3")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS3LHS, 'click', false) // Active
            AnsS3Cor = true

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS3LHS_Ans = new THREE.TextureLoader();
              loadS3LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS3LHS_Ans) {
                  var PM_S3LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS3LHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S3LHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS3 = new THREE.Mesh(PG_S3LHS_Ans, PM_S3LHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  scene.add(planeWrongAnsS3);
                  // planeWrongAns.position.x = -1.2
                  // planeWrongAns.position.y = -0.7
                  planeWrongAnsS3.position.x = SXIPosLHS    // Working
                  planeWrongAnsS3.position.y = SYIPosLHS    // Working

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
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  MID  --------------------------
  // Correct
  const loadS3MID = new THREE.TextureLoader();
  loadS3MID.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S3MID, // Shirt

    function (textureS3MID) {
      // PM:- planeMaterial
      var PM_S3MID = new THREE.MeshBasicMaterial({
        map: textureS3MID,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S3MID = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS3MID = new THREE.Mesh(PG_S3MID, PM_S3MID);
      scene.add(planeS3MID);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS3MID.position.x = SXIPosMID   // Working
      planeS3MID.position.y = SYIPosMID   // Working

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS3Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS3MID, 'click', function (event) {
          if (AnsS3Cor == false) {

            console.log("Correct Answer S3")
            S1Cor, S2Cor = false
            S3Cor = true
            AnsS3Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS3MID, 'click', false)
            // AnsS3Cor = true

            setTimeout(() => {
              scene.remove(planeS3UP, planeS3MID, planeS3RHS, planeS3LHS)
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS3RHS_Ans = new THREE.TextureLoader();
              loadS3RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureS3RHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S3RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS3RHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S3RHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeCorrectAnsS3 = new THREE.Mesh(PG_S3RHS_Ans, PM_S3RHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  scene.add(planeCorrectAnsS3);
                  // planeCorrectAns.position.x = 1.2
                  // planeCorrectAns.position.y = -0.7
                  planeCorrectAnsS3.position.x = SXIPosMID  // Working
                  planeCorrectAnsS3.position.y = SYIPosMID  // Working

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                undefined,
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
    S3RHS, // Shirt

    function (textureS3RHS) {
      var PM_S3RHS = new THREE.MeshBasicMaterial({
        map: textureS3RHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var PG_S3RHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS3RHS = new THREE.Mesh(PG_S3RHS, PM_S3RHS);
      scene.add(planeS3RHS);
      // planeS1RHS.position.x = 1.2
      // planeS1RHS.position.y = -0.7
      planeS3RHS.position.x = SXIPosRHS   // Working
      planeS3RHS.position.y = SYIPosRHS   // Working

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
            // domEvents.removeEventListener(planeS3RHS, 'click', false) // Active
            AnsS3Cor = true

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS3MIDAns = new THREE.TextureLoader();
              loadS3MIDAns.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS3MIDAns) {
                  // console.log("LHS Function Executed");
                  var PM_S3MIDAns = new THREE.MeshBasicMaterial({
                    map: textureS3MIDAns,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S3MIDAns = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS3 = new THREE.Mesh(PG_S3MIDAns, PM_S3MIDAns);
                  // console.log("planeRHS", planeRHS)
                  scene.add(planeWrongAnsS3);
                  // planeWrongAns.position.x = -1.2
                  // planeWrongAns.position.y = -0.7
                  planeWrongAnsS3.position.x = SXIPosRHS    // Working
                  planeWrongAnsS3.position.y = SYIPosRHS    // Working

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
// Indicate Red Ball
// MID Correct
function l3Slide4() {
  console.log("Slide 4 Function Working")
  headerProgress(l3PS3)
  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS3LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS3UP.visible = false
  //   planeS3LHS.visible = false
  //   planeS3MID.visible = false
  //   planeS3RHS.visible = false
  // }
  //  ------------------------  UP  --------------------------
  // Load Image Here
  const loadS4UP = new THREE.TextureLoader();
  loadS4UP.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S4UP, // Shirt

    function (textureS4UP) {
      // PM:- planeMaterial
      var PM_S4UP = new THREE.MeshBasicMaterial({
        map: textureS4UP,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S4UP = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS4UP = new THREE.Mesh(PG_S4UP, PM_S4UP);
      scene.add(planeS4UP);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS4UP.position.x = SXIPosUP   // Working
      planeS4UP.position.y = SYIPosUP   // Working
      // planeS1LHS.position.z = 1



      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS4LHS = new THREE.TextureLoader();
  loadS4LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S4LHS, // Shirt

    function (textureS4LHS) {
      // PM:- planeMaterial
      var PM_S4LHS = new THREE.MeshBasicMaterial({
        map: textureS4LHS,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_S4LHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS4LHS = new THREE.Mesh(PG_S4LHS, PM_S4LHS);
      scene.add(planeS4LHS);
      planeS4LHS.position.x = SXIPosLHS   // Working
      planeS4LHS.position.y = SYIPosLHS   // Working

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS4LHS, "dblclick", event => {
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
        domEvents.addEventListener(planeS4LHS, 'click', function (event) {
          if (AnsS4Cor == false) {

            console.log("Wrong Answer S4")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS4LHS, 'click', false) // active
            AnsS4Cor = true

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS4LHS_Ans = new THREE.TextureLoader();
              loadS4LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS4LHS_Ans) {
                  var PM_S4LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS4LHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S4LHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS4 = new THREE.Mesh(PG_S4LHS_Ans, PM_S4LHS_Ans);
                  scene.add(planeWrongAnsS4);
                  planeWrongAnsS4.position.x = SXIPosLHS    // Working
                  planeWrongAnsS4.position.y = SYIPosLHS    // Working

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
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  MID  --------------------------
  // Correct
  const loadS4MID = new THREE.TextureLoader();
  loadS4MID.load(
    S4MID, // Shirt

    function (textureS4MID) {
      var PM_S4MID = new THREE.MeshBasicMaterial({
        map: textureS4MID,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S4MID = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS4MID = new THREE.Mesh(PG_S4MID, PM_S4MID);
      scene.add(planeS4MID);
      planeS4MID.position.x = SXIPosMID   // Working
      planeS4MID.position.y = SYIPosMID   // Working

      // Add onClick Event Here - Correct Answer
      if (AnsS4Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS4MID, 'click', function (event) {
          if (AnsS4Cor == false) {
            console.log("Correct Answer S4")
            S1Cor, S2Cor, S3Cor = false
            S4Cor = true
            AnsS4Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS4MID, 'click', false)
            // AnsS4Cor = true

            setTimeout(() => {
              scene.remove(planeS4UP, planeS4MID, planeS4RHS, planeS4LHS)
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS4RHS_Ans = new THREE.TextureLoader();
              loadS4RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureS4RHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S4RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS4RHS_Ans,
                    transparent: true,
                  });
                  //Create a 2x2 plane with texture
                  var PG_S4RHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeCorrectAnsS4 = new THREE.Mesh(PG_S4RHS_Ans, PM_S4RHS_Ans);
                  scene.add(planeCorrectAnsS4);
                  planeCorrectAnsS4.position.x = SXIPosMID  // Working
                  planeCorrectAnsS4.position.y = SYIPosMID  // Working

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                undefined,
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
    S4RHS, // Shirt

    function (textureS4RHS) {
      var PM_S4RHS = new THREE.MeshBasicMaterial({
        map: textureS4RHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S4RHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS4RHS = new THREE.Mesh(PG_S4RHS, PM_S4RHS);
      scene.add(planeS4RHS);
      planeS4RHS.position.x = SXIPosRHS   // Working
      planeS4RHS.position.y = SYIPosRHS   // Working

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
            // domEvents.removeEventListener(planeS4RHS, 'click', false) // active
            AnsS4Cor = true

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS4MIDAns = new THREE.TextureLoader();
              loadS4MIDAns.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS4MIDAns) {
                  // console.log("LHS Function Executed");
                  var PM_S4MIDAns = new THREE.MeshBasicMaterial({
                    map: textureS4MIDAns,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S4MIDAns = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS4 = new THREE.Mesh(PG_S4MIDAns, PM_S4MIDAns);
                  scene.add(planeWrongAnsS4);
                  planeWrongAnsS4.position.x = SXIPosRHS    // Working
                  planeWrongAnsS4.position.y = SYIPosRHS    // Working

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
function l3Slide5() {
  console.log("Slide 5 Function Working")
  headerProgress(l3PS4)

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS4LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS4UP.visible = false
  //   planeS4LHS.visible = false
  //   planeS4MID.visible = false
  //   planeS4RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Load Image Here
  const loadS5UP = new THREE.TextureLoader();
  loadS5UP.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S5UP, // Shirt

    function (textureS5UP) {
      // PM:- planeMaterial
      var PM_S5UP = new THREE.MeshBasicMaterial({
        map: textureS5UP,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S5UP = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS5UP = new THREE.Mesh(PG_S5UP, PM_S5UP);
      scene.add(planeS5UP);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS5UP.position.x = SXIPosUP   // Working
      planeS5UP.position.y = SYIPosUP   // Working
      // planeS1LHS.position.z = 1



      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  LHS  --------------------------
  // Correct
  const loadS5LHS = new THREE.TextureLoader();
  loadS5LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S5LHS, // Shirt

    function (textureS5LHS) {
      var PM_S5LHS = new THREE.MeshBasicMaterial({
        map: textureS5LHS,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_S5LHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS5LHS = new THREE.Mesh(PG_S5LHS, PM_S5LHS);
      scene.add(planeS5LHS);
      planeS5LHS.position.x = SXIPosLHS   // Working
      planeS5LHS.position.y = SYIPosLHS   // Working

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
            // AnsS4Cor = true

            setTimeout(() => {
              scene.remove(planeS5UP, planeS5MID, planeS5RHS, planeS5LHS)
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS5RHS_Ans = new THREE.TextureLoader();
              loadS5RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureS5RHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S5RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS5RHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S5RHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeCorrectAnsS5 = new THREE.Mesh(PG_S5RHS_Ans, PM_S5RHS_Ans);
                  scene.add(planeCorrectAnsS5);
                  planeCorrectAnsS5.position.x = SXIPosLHS  // Working
                  planeCorrectAnsS5.position.y = SYIPosLHS  // Working

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Green Highlight Not Active");
            }
            // S1Cor = true

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

  //  ------------------------  MID  --------------------------
  //Wrong
  const loadS5MID = new THREE.TextureLoader();
  loadS5MID.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S5MID, // Shirt

    function (textureS5MID) {
      // PM:- planeMaterial
      var PM_S5MID = new THREE.MeshBasicMaterial({
        map: textureS5MID,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S5MID = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS5MID = new THREE.Mesh(PG_S5MID, PM_S5MID);
      scene.add(planeS5MID);
      planeS5MID.position.x = SXIPosMID   // Working
      planeS5MID.position.y = SYIPosMID   // Working

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS5MID, "dblclick", event => {
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

      // Add onClick Event Here - Wrong Answer
      if (AnsS5Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS5MID, 'click', function (event) {
          if (AnsS5Cor == false) {

            console.log("Wrong Answer S5")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS5MID, 'click', false) // active
            AnsS5Cor = true

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS5MIDAns = new THREE.TextureLoader();
              loadS5MIDAns.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS5MIDAns) {
                  var PM_S5MIDAns = new THREE.MeshBasicMaterial({
                    map: textureS5MIDAns,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S5MIDAns = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS5 = new THREE.Mesh(PG_S5MIDAns, PM_S5MIDAns);
                  scene.add(planeWrongAnsS5);
                  planeWrongAnsS5.position.x = SXIPosMID    // Working
                  planeWrongAnsS5.position.y = SYIPosMID    // Working

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
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  RHS  --------------------------
  // Wrong
  const loadS5RHS = new THREE.TextureLoader();
  loadS5RHS.load(
    // 2nd URL
    S5RHS, // Shirt

    function (textureS5RHS) {
      var PM_S5RHS = new THREE.MeshBasicMaterial({
        map: textureS5RHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S5RHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS5RHS = new THREE.Mesh(PG_S5RHS, PM_S5RHS);
      scene.add(planeS5RHS);
      planeS5RHS.position.x = SXIPosRHS   // Working
      planeS5RHS.position.y = SYIPosRHS   // Working

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

      // Add onClick Event Here - Wrong Answer
      if (AnsS5Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS5RHS, 'click', function (event) {
          if (AnsS5Cor == false) {
            console.log("Wrong Answer S5")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS5RHS, 'click', false) // active
            AnsS5Cor = true

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS5LHS_Ans = new THREE.TextureLoader();
              loadS5LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS5LHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S5LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS5LHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S5LHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS5 = new THREE.Mesh(PG_S5LHS_Ans, PM_S5LHS_Ans);
                  scene.add(planeWrongAnsS5);
                  planeWrongAnsS5.position.x = SXIPosRHS    // Working
                  planeWrongAnsS5.position.y = SYIPosRHS    // Working

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
// Indicate Goggles
// LHS Correct
function l3Slide6() {
  console.log("Slide 6 Function Working")
  headerProgress(l3PS5)

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS5LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS5UP.visible = false
  //   planeS5LHS.visible = false
  //   planeS5MID.visible = false
  //   planeS5RHS.visible = false
  // }
  //  ------------------------  UP  --------------------------
  const loadS6UP = new THREE.TextureLoader();
  loadS6UP.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S6UP, // Shirt

    function (textureS6UP) {
      // PM:- planeMaterial
      var PM_S6UP = new THREE.MeshBasicMaterial({
        map: textureS6UP,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S6UP = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS6UP = new THREE.Mesh(PG_S6UP, PM_S6UP);
      scene.add(planeS6UP);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS6UP.position.x = SXIPosUP   // Working
      planeS6UP.position.y = SYIPosUP   // Working
      // planeS1LHS.position.z = 1

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS6LHS = new THREE.TextureLoader();
  loadS6LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S6LHS, // Shirt

    function (textureS6LHS) {
      // PM:- planeMaterial
      var PM_S6LHS = new THREE.MeshBasicMaterial({
        map: textureS6LHS,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_S6LHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS6LHS = new THREE.Mesh(PG_S6LHS, PM_S6LHS);
      scene.add(planeS6LHS);
      planeS6LHS.position.x = SXIPosLHS   // Working
      planeS6LHS.position.y = SYIPosLHS   // Working

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS6LHS, "dblclick", event => {
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
        domEvents.addEventListener(planeS6LHS, 'click', function (event) {
          if (AnsS6Cor == false) {

            console.log("Wrong Answer S6")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS6LHS, 'click', false) // Active
            AnsS6Cor = true

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS6LHS_Ans = new THREE.TextureLoader();
              loadS6LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS6LHS_Ans) {
                  var PM_S6LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS6LHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S6LHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS6 = new THREE.Mesh(PG_S6LHS_Ans, PM_S6LHS_Ans);
                  scene.add(planeWrongAnsS6);
                  planeWrongAnsS6.position.x = SXIPosLHS    // Working
                  planeWrongAnsS6.position.y = SYIPosLHS    // Working

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
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  MID  --------------------------
  // Correct
  const loadS6MID = new THREE.TextureLoader();
  loadS6MID.load(
    S6MID, // Shirt

    function (textureS6MID) {
      var PM_S6MID = new THREE.MeshBasicMaterial({
        map: textureS6MID,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S6MID = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS6MID = new THREE.Mesh(PG_S6MID, PM_S6MID);
      scene.add(planeS6MID);
      planeS6MID.position.x = SXIPosMID   // Working
      planeS6MID.position.y = SYIPosMID   // Working

      // Add onClick Event Here - Correct Answer
      if (AnsS6Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS6MID, 'click', function (event) {
          if (AnsS6Cor == false) {
            console.log("Correct Answer S6")
            S1Cor, S2Cor, S3Cor, S4Cor, S5Cor = false
            S6Cor = true
            AnsS6Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS6MID, 'click', false)
            // AnsS4Cor = true

            setTimeout(() => {
              scene.remove(planeS6UP, planeS6MID, planeS6RHS, planeS6LHS)
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS6RHS_Ans = new THREE.TextureLoader();
              loadS6RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureS6RHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S6RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS6RHS_Ans,
                    transparent: true,
                  });
                  //Create a 2x2 plane with texture
                  var PG_S6RHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeCorrectAnsS6 = new THREE.Mesh(PG_S6RHS_Ans, PM_S6RHS_Ans);
                  scene.add(planeCorrectAnsS6);
                  planeCorrectAnsS6.position.x = SXIPosMID  // Working
                  planeCorrectAnsS6.position.y = SYIPosMID  // Working

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                undefined,
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
    // 2nd URL
    S6RHS, // Shirt

    function (textureS6RHS) {
      var PM_S6RHS = new THREE.MeshBasicMaterial({
        map: textureS6RHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S6RHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS6RHS = new THREE.Mesh(PG_S6RHS, PM_S6RHS);
      scene.add(planeS6RHS);
      planeS6RHS.position.x = SXIPosRHS   // Working
      planeS6RHS.position.y = SYIPosRHS   // Working

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
            console.log("Wrong Answer S4")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS6RHS, 'click', false) // active
            AnsS6Cor = true

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS6MIDAns = new THREE.TextureLoader();
              loadS6MIDAns.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS6MIDAns) {
                  // console.log("LHS Function Executed");
                  var PM_S6MIDAns = new THREE.MeshBasicMaterial({
                    map: textureS6MIDAns,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S6MIDAns = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS6 = new THREE.Mesh(PG_S6MIDAns, PM_S6MIDAns);
                  scene.add(planeWrongAnsS6);
                  planeWrongAnsS6.position.x = SXIPosRHS    // Working
                  planeWrongAnsS6.position.y = SYIPosRHS    // Working

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
// Indicate Pink Balls
// RHS Correct
function l3Slide7() {
  console.log("Slide 7 Function Working")
  headerProgress(l3PS6)

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS6LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS6UP.visible = false
  //   planeS6LHS.visible = false
  //   planeS6MID.visible = false
  //   planeS6RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Load Image Here
  const loadS7UP = new THREE.TextureLoader();
  loadS7UP.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S7UP, // Shirt

    function (textureS7UP) {
      // PM:- planeMaterial
      var PM_S7UP = new THREE.MeshBasicMaterial({
        map: textureS7UP,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_S7UP = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS7UP = new THREE.Mesh(PG_S7UP, PM_S7UP);
      scene.add(planeS7UP);
      planeS7UP.position.x = SXIPosUP   // Working
      planeS7UP.position.y = SYIPosUP   // Working

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS7LHS = new THREE.TextureLoader();
  loadS7LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S7LHS, // Shirt

    function (textureS7LHS) {
      // PM:- planeMaterial
      var PM_S7LHS = new THREE.MeshBasicMaterial({
        map: textureS7LHS,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_S7LHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS7LHS = new THREE.Mesh(PG_S7LHS, PM_S7LHS);
      scene.add(planeS7LHS);
      planeS7LHS.position.x = SXIPosLHS   // Working
      planeS7LHS.position.y = SYIPosLHS   // Working

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS7LHS, "dblclick", event => {
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
        domEvents.addEventListener(planeS7LHS, 'click', function (event) {
          if (AnsS7Cor == false) {

            console.log("Wrong Answer S7")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS7LHS, 'click', false) // active
            AnsS7Cor = true

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS7LHS_Ans = new THREE.TextureLoader();
              loadS7LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS7LHS_Ans) {
                  var PM_S7LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS7LHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S7LHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS7 = new THREE.Mesh(PG_S7LHS_Ans, PM_S7LHS_Ans);
                  scene.add(planeWrongAnsS7);
                  planeWrongAnsS7.position.x = SXIPosLHS    // Working
                  planeWrongAnsS7.position.y = SYIPosLHS    // Working

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
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  MID  --------------------------
  // Correct
  const loadS7MID = new THREE.TextureLoader();
  loadS7MID.load(
    S7MID, // Shirt

    function (textureS7MID) {
      var PM_S7MID = new THREE.MeshBasicMaterial({
        map: textureS7MID,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S7MID = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS7MID = new THREE.Mesh(PG_S7MID, PM_S7MID);
      scene.add(planeS7MID);
      planeS7MID.position.x = SXIPosMID   // Working
      planeS7MID.position.y = SYIPosMID   // Working

      // Add onClick Event Here - Correct Answer
      if (AnsS7Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS7MID, 'click', function (event) {
          if (AnsS7Cor == false) {
            console.log("Correct Answer S6")
            S1Cor, S2Cor, S3Cor, S4Cor, S5Cor, S6Cor = false
            S7Cor = true
            AnsS7Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS7MID, 'click', false)
            // AnsS4Cor = true

            setTimeout(() => {
              scene.remove(planeS7UP, planeS7MID, planeS7RHS, planeS7LHS)
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS7RHS_Ans = new THREE.TextureLoader();
              loadS7RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureS7RHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S7RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS7RHS_Ans,
                    transparent: true,
                  });
                  //Create a 2x2 plane with texture
                  var PG_S7RHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeCorrectAnsS7 = new THREE.Mesh(PG_S7RHS_Ans, PM_S7RHS_Ans);
                  scene.add(planeCorrectAnsS7);
                  planeCorrectAnsS7.position.x = SXIPosMID  // Working
                  planeCorrectAnsS7.position.y = SYIPosMID  // Working

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                undefined,
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
    // 2nd URL
    S7RHS, // Shirt

    function (textureS7RHS) {
      var PM_S7RHS = new THREE.MeshBasicMaterial({
        map: textureS7RHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S7RHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS7RHS = new THREE.Mesh(PG_S7RHS, PM_S7RHS);
      scene.add(planeS7RHS);
      planeS7RHS.position.x = SXIPosRHS   // Working
      planeS7RHS.position.y = SYIPosRHS   // Working

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

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS7MIDAns = new THREE.TextureLoader();
              loadS7MIDAns.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS7MIDAns) {
                  // console.log("LHS Function Executed");
                  var PM_S7MIDAns = new THREE.MeshBasicMaterial({
                    map: textureS7MIDAns,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S7MIDAns = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS7 = new THREE.Mesh(PG_S7MIDAns, PM_S7MIDAns);
                  scene.add(planeWrongAnsS7);
                  planeWrongAnsS7.position.x = SXIPosRHS    // Working
                  planeWrongAnsS7.position.y = SYIPosRHS    // Working

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
// MID Correct
function l3Slide8() {
  console.log("Slide 8 Function Working")
  headerProgress(l3PS7)

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS7LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS7UP.visible = false
  //   planeS7LHS.visible = false
  //   planeS7MID.visible = false
  //   planeS7RHS.visible = false
  // }
  //  ------------------------  UP  --------------------------
  const loadS8UP = new THREE.TextureLoader();
  loadS8UP.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S8UP, // Shirt

    function (textureS8UP) {
      // PM:- planeMaterial
      var PM_S8UP = new THREE.MeshBasicMaterial({
        map: textureS8UP,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_S8UP = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS8UP = new THREE.Mesh(PG_S8UP, PM_S8UP);
      scene.add(planeS8UP);
      planeS8UP.position.x = SXIPosUP   // Working
      planeS8UP.position.y = SYIPosUP   // Working

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS8LHS = new THREE.TextureLoader();
  loadS8LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S8LHS, // Shirt

    function (textureS8LHS) {
      // PM:- planeMaterial
      var PM_S8LHS = new THREE.MeshBasicMaterial({
        map: textureS8LHS,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_S8LHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS8LHS = new THREE.Mesh(PG_S8LHS, PM_S8LHS);
      scene.add(planeS8LHS);
      planeS8LHS.position.x = SXIPosLHS   // Working
      planeS8LHS.position.y = SYIPosLHS   // Working

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS8LHS, "dblclick", event => {
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
        domEvents.addEventListener(planeS8LHS, 'click', function (event) {
          if (AnsS8Cor == false) {
            console.log("Wrong Answer S8")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS8LHS, 'click', false) // active
            AnsS8Cor = true

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS8LHS_Ans = new THREE.TextureLoader();
              loadS8LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS8LHS_Ans) {
                  var PM_S8LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS8LHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S8LHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS8 = new THREE.Mesh(PG_S8LHS_Ans, PM_S8LHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  scene.add(planeWrongAnsS8);
                  planeWrongAnsS8.position.x = SXIPosLHS    // Working
                  planeWrongAnsS8.position.y = SYIPosLHS    // Working

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
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  MID  --------------------------
  //Wrong
  const loadS8MID = new THREE.TextureLoader();
  loadS8MID.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S8MID, // Shirt

    function (textureS8MID) {
      // PM:- planeMaterial
      var PM_S8MID = new THREE.MeshBasicMaterial({
        map: textureS8MID,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S8MID = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS8MID = new THREE.Mesh(PG_S8MID, PM_S8MID);
      scene.add(planeS8MID);
      planeS8MID.position.x = SXIPosMID   // Working
      planeS8MID.position.y = SYIPosMID   // Working

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS8MID, "dblclick", event => {
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
        domEvents.addEventListener(planeS8MID, 'click', function (event) {
          if (AnsS8Cor == false) {

            console.log("Wrong Answer S8")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS8MID, 'click', false) // active
            AnsS8Cor = true

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS8MIDAns = new THREE.TextureLoader();
              loadS8MIDAns.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS8MIDAns) {
                  var PM_S8MIDAns = new THREE.MeshBasicMaterial({
                    map: textureS8MIDAns,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S8MIDAns = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS8 = new THREE.Mesh(PG_S8MIDAns, PM_S8MIDAns);
                  scene.add(planeWrongAnsS8);
                  planeWrongAnsS8.position.x = SXIPosMID    // Working
                  planeWrongAnsS8.position.y = SYIPosMID    // Working

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
      console.error('An error happened in LHS Image.');
    }
  );

  // Correct
  const loadS8RHS = new THREE.TextureLoader();
  loadS8RHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S8RHS, // Shirt

    function (textureS8RHS) {
      var PM_S8RHS = new THREE.MeshBasicMaterial({
        map: textureS8RHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S8RHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS8RHS = new THREE.Mesh(PG_S8RHS, PM_S8RHS);
      scene.add(planeS8RHS);
      planeS8RHS.position.x = SXIPosRHS   // Working
      planeS8RHS.position.y = SYIPosRHS   // Working


      // Add onClick Event Here - Correct Answer
      if (AnsS8Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS8RHS, 'click', function (event) {
          if (AnsS8Cor == false) {
            console.log("Correct Answer S8")
            AnsS8Cor = true
            S1Cor, S2Cor, S3Cor, S4Cor, S5Cor, S6Cor, S7Cor = false
            S8Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS8RHS, 'click', false)
            // AnsS8Cor = true

            setTimeout(() => {
              scene.remove(planeS8UP, planeS8MID, planeS8LHS, planeS8RHS)
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS8RHS_Ans = new THREE.TextureLoader();
              loadS8RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureS8RHS_Ans) {
                  var PM_S8RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS8RHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S8RHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeCorrectAnsS8 = new THREE.Mesh(PG_S8RHS_Ans, PM_S8RHS_Ans);
                  scene.add(planeCorrectAnsS8);
                  planeCorrectAnsS8.position.x = SXIPosRHS  // Working
                  planeCorrectAnsS8.position.y = SYIPosRHS  // Working

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                undefined,
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


  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
}

// Function for Level1 Slide 9
// Indicate 
// MID Correct
function l3Slide9() {
  console.log("Slide 9 Function Working")
  headerProgress(l3PS8)

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS8LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS8UP.visible = false
  //   planeS8LHS.visible = false
  //   planeS8MID.visible = false
  //   planeS8RHS.visible = false
  // }
  //  ------------------------  UP  --------------------------
  // Load Image Here
  const loadS9UP = new THREE.TextureLoader();
  loadS9UP.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S9UP, // Shirt

    function (textureS9UP) {
      // PM:- planeMaterial
      var PM_S9UP = new THREE.MeshBasicMaterial({
        map: textureS9UP,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S9UP = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS9UP = new THREE.Mesh(PG_S9UP, PM_S9UP);
      scene.add(planeS9UP);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS9UP.position.x = SXIPosUP   // Working
      planeS9UP.position.y = SYIPosUP   // Working
      // planeS1LHS.position.z = 1


      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS9LHS = new THREE.TextureLoader();
  loadS9LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S9LHS, // Shirt

    function (textureS9LHS) {
      // PM:- planeMaterial
      var PM_S9LHS = new THREE.MeshBasicMaterial({
        map: textureS9LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S9LHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS9LHS = new THREE.Mesh(PG_S9LHS, PM_S9LHS);
      scene.add(planeS9LHS);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS9LHS.position.x = SXIPosLHS   // Working
      planeS9LHS.position.y = SYIPosLHS   // Working
      // planeS1LHS.position.z = 1

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS9LHS, "dblclick", event => {
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
        domEvents.addEventListener(planeS9LHS, 'click', function (event) {
          if (AnsS9Cor == false) {

            console.log("Wrong Answer S9")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS9LHS, 'click', false) // active
            AnsS9Cor = true

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS9LHS_Ans = new THREE.TextureLoader();
              loadS9LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS9LHS_Ans) {
                  var PM_S9LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS9LHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S9LHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS9 = new THREE.Mesh(PG_S9LHS_Ans, PM_S9LHS_Ans);
                  scene.add(planeWrongAnsS9);
                  planeWrongAnsS9.position.x = SXIPosLHS    // Working
                  planeWrongAnsS9.position.y = SYIPosLHS    // Working

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
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  MID  --------------------------
  // Correct
  const loadS9MID = new THREE.TextureLoader();
  loadS9MID.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S9MID, // Shirt

    function (textureS9MID) {
      // PM:- planeMaterial
      var PM_S9MID = new THREE.MeshBasicMaterial({
        map: textureS9MID,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S9MID = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS9MID = new THREE.Mesh(PG_S9MID, PM_S9MID);
      scene.add(planeS9MID);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS9MID.position.x = SXIPosMID   // Working
      planeS9MID.position.y = SYIPosMID   // Working


      // Add onClick Event Here - Correct Answer
      if (AnsS9Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS9MID, 'click', function (event) {
          if (AnsS9Cor == false) {
            console.log("Correct Answer Click")
            AnsS9Cor = true
            S1Cor, S2Cor, S3Cor, S4Cor, S5Cor, S6Cor, S7Cor, S8Cor = false
            S9Cor = true


            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS9MID, 'click', false)
            // AnsS9Cor = true

            setTimeout(() => {
              scene.remove(planeS9UP, planeS9MID, planeS9LHS, planeS9RHS)
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false


              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS9RHS_Ans = new THREE.TextureLoader();
              loadS9RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureS9RHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S9RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS9RHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S9RHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeCorrectAnsS9 = new THREE.Mesh(PG_S9RHS_Ans, PM_S9RHS_Ans);
                  scene.add(planeCorrectAnsS9);
                  planeCorrectAnsS9.position.x = SXIPosMID  // Working
                  planeCorrectAnsS9.position.y = SYIPosMID  // Working

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Green Highlight Not Active");
            }
            // S1Cor = true

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
  const loadS9RHS = new THREE.TextureLoader();
  loadS9RHS.load(
    S9RHS, // Shirt

    function (textureS9RHS) {
      var PM_S9RHS = new THREE.MeshBasicMaterial({
        map: textureS9RHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var PG_S9RHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS9RHS = new THREE.Mesh(PG_S9RHS, PM_S9RHS);
      scene.add(planeS9RHS);
      planeS9RHS.position.x = SXIPosRHS   // Working
      planeS9RHS.position.y = SYIPosRHS   // Working

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

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS9MIDAns = new THREE.TextureLoader();
              loadS9MIDAns.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS9MIDAns) {
                  var PM_S9MIDAns = new THREE.MeshBasicMaterial({
                    map: textureS9MIDAns,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S9MIDAns = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS9 = new THREE.Mesh(PG_S9MIDAns, PM_S9MIDAns);
                  scene.add(planeWrongAnsS9);
                  planeWrongAnsS9.position.x = SXIPosRHS    // Working
                  planeWrongAnsS9.position.y = SYIPosRHS    // Working

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
function l3Slide10() {
  console.log("Slide 10 Function Working")
  headerProgress(l3PS9)

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS9LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS9UP.visible = false
  //   planeS9LHS.visible = false
  //   planeS9MID.visible = false
  //   planeS9RHS.visible = false
  // }
  //  ------------------------  UP  --------------------------
  const loadS10UP = new THREE.TextureLoader();
  loadS10UP.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S10UP, // Shirt

    function (textureS10UP) {
      // PM:- planeMaterial
      var PM_S10UP = new THREE.MeshBasicMaterial({
        map: textureS10UP,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S10UP = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS10UP = new THREE.Mesh(PG_S10UP, PM_S10UP);
      scene.add(planeS10UP);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS10UP.position.x = SXIPosUP   // Working
      planeS10UP.position.y = SYIPosUP   // Working
      // planeS1LHS.position.z = 1



      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  LHS  --------------------------
  // Correct
  const loadS10LHS = new THREE.TextureLoader();
  loadS10LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S10LHS, // Shirt

    function (textureS10LHS) {
      var PM_S10LHS = new THREE.MeshBasicMaterial({
        map: textureS10LHS,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_S10LHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS10LHS = new THREE.Mesh(PG_S10LHS, PM_S10LHS);
      scene.add(planeS10LHS);
      planeS10LHS.position.x = SXIPosLHS   // Working
      planeS10LHS.position.y = SYIPosLHS   // Working

      // Add onClick Event Here Tshirt - Correct Answer
      // Add onClick Event Here Correct Answer
      if (AnsS10Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS10LHS, 'click', function (event) {
          if (AnsS10Cor == false) {
            console.log("Correct Answer S10")
            AnsS10Cor = true
            S1Cor, S2Cor, S3Cor, S4Cor, S5Cor, S6Cor, S7Cor, S8Cor, S9Cor = false
            S10Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS10LHS, 'click', false)
            // AnsS10Cor = true

            setTimeout(() => {
              scene.remove(planeS10UP, planeS10MID, planeS10LHS, planeS10RHS)
              scene.remove(planeUPMain, planeMIDMain, planeLHSMain, planeRHSMain)
              // RewardShow()
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // Load RHS Image Here
              const loadS10RHS_Ans = new THREE.TextureLoader();
              loadS10RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureS10RHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S10RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS10RHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S10RHS_Ans = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeCorrectAnsS10 = new THREE.Mesh(PG_S10RHS_Ans, PM_S10RHS_Ans);
                  scene.add(planeCorrectAnsS10);
                  planeCorrectAnsS10.position.x = SXIPosLHS  // Working
                  planeCorrectAnsS10.position.y = SYIPosLHS  // Working

                  //Render the scene
                  renderer.render(scene, camera);
                  document.body.appendChild(renderer.domElement);
                },
                undefined,
                function (err) {
                  console.error('An error happened in RHS Image.');
                }
              );
            }
            else {
              console.log("Green Highlight Not Active");
            }
            // S1Cor = true
            // When Click On Correct Answer Red and Green Image sound me blank
            ErrorBorder = " "
            SuccessBorder = " "

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

  //  ------------------------  MID  --------------------------
  // Wrong
  const loadS10MID = new THREE.TextureLoader();
  loadS10MID.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S10MID, // Shirt

    function (textureS10MID) {
      var PM_S10MID = new THREE.MeshBasicMaterial({
        map: textureS10MID,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S10MID = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS10MID = new THREE.Mesh(PG_S10MID, PM_S10MID);
      scene.add(planeS10MID);
      planeS10MID.position.x = SXIPosMID   // Working
      planeS10MID.position.y = SYIPosMID   // Working

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS10MID, "dblclick", event => {
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
        domEvents.addEventListener(planeS10MID, 'click', function (event) {
          if (AnsS10Cor == false) {

            console.log("Wrong Answer S10")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS10MID, 'click', false) // active
            AnsS10Cor = true

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS10MIDAns = new THREE.TextureLoader();
              loadS10MIDAns.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS10MIDAns) {
                  var PM_S10MIDAns = new THREE.MeshBasicMaterial({
                    map: textureS10MIDAns,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S10MIDAns = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS10 = new THREE.Mesh(PG_S10MIDAns, PM_S10MIDAns);
                  scene.add(planeWrongAnsS10);
                  planeWrongAnsS10.position.x = SXIPosMID    // Working
                  planeWrongAnsS10.position.y = SYIPosMID    // Working

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
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  RHS  --------------------------
  // Wrong
  const loadS10RHS = new THREE.TextureLoader();
  loadS10RHS.load(
    S10RHS, // Shirt

    function (textureS10RHS) {
      var PM_S10RHS = new THREE.MeshBasicMaterial({
        map: textureS10RHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var PG_S10RHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeS10RHS = new THREE.Mesh(PG_S10RHS, PM_S10RHS);
      scene.add(planeS10RHS);
      planeS10RHS.position.x = SXIPosRHS   // Working
      planeS10RHS.position.y = SYIPosRHS   // Working

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

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS10MIDAns = new THREE.TextureLoader();
              loadS10MIDAns.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureS10MIDAns) {
                  var PM_S10MIDAns = new THREE.MeshBasicMaterial({
                    map: textureS10MIDAns,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S10MIDAns = new THREE.PlaneBufferGeometry(2.9, 1.6);
                  planeWrongAnsS10 = new THREE.Mesh(PG_S10MIDAns, PM_S10MIDAns);
                  scene.add(planeWrongAnsS10);
                  planeWrongAnsS10.position.x = SXIPosRHS    // Working
                  planeWrongAnsS10.position.y = SYIPosRHS    // Working

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

        var level4_Pre = localStorage.getItem('level4_Pre')
        var level4_Pre_val = JSON.parse(level4_Pre)
        // console.log("L2_Pre:-", level2_Pre_val)
        if (level4_Pre_val == false) {

          // document.location.href = '/level2_Pre.html'
          // window.location.replace(`${endPoint}/level2_Pre.html`);
          window.location.replace(`/level4_Pre.html`);

        } else {
          // document.location.href = '/level2.html'
          window.location.replace(`/level4.html`);

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
// Level 1 Complete
function levelThreeComplete() {
  console.clear()

  // RewardShow()
  // -------------------------------------------------------
  // Stop ErrCorSound like in round 4 (levelfourcomplet function)
  ErrCorSound = true

  //  make varible true here default false
  // ----------------------------------------

  console.log("level 3 Complete");
  headerProgress(l3PS10)
  // RewardShow()
  LevelCompleteSound('../Sounds/Global_Music/GL_A_5.mp3')

  setTimeout(() => {
    // setInterval(() => {
    RewardShow()
    // }, 4000);
  }, 200);



  scene.remove(meshText)
  // headerReward(RewardEndImg) // Active
  newrewardPoints = localStorage.setItem('RewardPoints', getRewardData + 10)
  // getNewRewardPoints = localStorage.getItem('RewardPoints')
  getRewardData = localStorage.getItem('RewardPoints')
  // console.log("newrewardPoints End", getRewardData);
  RewardPoints(getRewardData)


  // if (planeS10LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS10UP.visible = false
  //   planeS10LHS.visible = false
  //   planeS10MID.visible = false
  //   planeS10RHS.visible = false
  // Hide White Box
  // planeUPMain.visible = false
  // planeMIDMain.visible = false
  // planeLHSMain.visible = false
  // planeRHSMain.visible = false
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
      // var PG_Again = new THREE.PlaneBufferGeometry(0.80, 0.70);
      var PG_Again = new THREE.PlaneBufferGeometry(0.90, 0.70);
      // var PG_Again = new THREE.PlaneBufferGeometry(0.80, 0.80);
      // var PG_Again = new THREE.PlaneBufferGeometry(1, 1);
      planeLTHCLHS = new THREE.Mesh(PG_Again, PM_Again);
      scene.add(planeLTHCLHS);
      planeLTHCLHS.position.x = -1
      // planeLTHCLHS.position.y = 0.3
      // planeLTHCLHS.position.y = -0.4
      planeLTHCLHS.position.y = -0.35
      // planeLTHCLHS.position.z = 1

      // OnClick Event For planeLHS
      const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
      domEvents.addEventListener(planeLTHCLHS, 'click', function (event) {
        console.log("planeLTHCLHS clicked")
        localStorage.setItem('level3Complete', true)


        // planeLZCLHS.dispose
        // Play Again Level 3 
        // window.location.href = "/level3.html"
        var currentPath = `${endPoint}/level3.html`

        if (currentPath == `${endPoint}/level3.html`) {
          console.log("Redirect New Page");
          console.log("endPoint", endPoint);
          location.href = '/level3.html'
        } else {
          location.href = '/level3.html'
        }

        // Only Remove but Button is Active after this event perform
        scene.remove(planeLTHCLHS, planeLTHCRHS);

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
      planeLTHCRHS = new THREE.Mesh(PG_Next, PM_Next);
      scene.add(planeLTHCRHS);
      planeLTHCRHS.position.x = 1
      // planeLTHCRHS.position.y = 0.3
      // planeLTHCRHS.position.y = -0.4
      planeLTHCRHS.position.y = -0.35
      // planeLTHCRHS.position.z = 1

      // // OnClick Event For planeLHS
      const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
      domEventsInnerLHS.addEventListener(planeLTHCRHS, 'click', function (event) {
        console.log("Play the next level clicked")
        localStorage.setItem('level3Complete', true)

        // Play Level 4 
        // window.location.href = '/level4_Pre.html'

        var currentPath = `${endPoint}/level3.html`

        if (currentPath == `${endPoint}/level3.html`) {
          console.log("Redirect New Page");
          console.log("endPoint", endPoint);
          // location.href = '/level4_Pre.html'
          var level4_Pre = localStorage.getItem('level4_Pre')
          var level4_Pre_val = JSON.parse(level4_Pre)
          // console.log("L2_Pre:-", level2_Pre_val)
          if (level4_Pre_val == false) {
            // location.href = '/level4_Pre.html'
            window.location.replace(`/level4_Pre.html`);

          } else {
            // location.href = '/level4.html'
            window.location.replace(`/level4.html`);

          }

        } else {
          // location.href = '/level4_Pre.html'
          if (level4_Pre_val == false) {

            location.href = '/level4_Pre.html'
          } else {
            location.href = '/level4.html'
          }

        }

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

// Function For Reward
function RewardShow() {
  console.clear()

  // var texture = new THREE.TextureLoader("../asset/Reward_Collection_Animation/Reward_Gif.gif");
  // var plane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200),
  //   new THREE.MeshLambertMaterial({ map: texture }));
  // plane.position.set(0, 0, 1)

  //  --------------------------------  Working -----------------------------------
  var count = 1500;
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

  // -------------------- Fire Style Working ------------------------------------
  // var duration = 15 * 1000;
  // var animationEnd = Date.now() + duration;
  // var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  // function randomInRange(min, max) {
  //   return Math.random() * (max - min) + min;
  // }
  // var interval = setInterval(function () {
  //   var timeLeft = animationEnd - Date.now();

  //   if (timeLeft <= 0) {
  //     return clearInterval(interval);
  //   }
  //   var particleCount = 50 * (timeLeft / duration);
  //   // since particles fall down, start a bit higher than random
  //   confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  //   confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  // }, 250);
  // ----------------------------------------------------------------------------------

  // // const texturePath = 'https://i.imgur.com/Oj6RJV9.png';
  // var texturePath = '../asset/Reward_Collection_Animation/Reward_Gif.gif';
  // var spriteTexture = new THREE.TextureLoader().load(texturePath)
  // var animator = new PlainAnimator(spriteTexture, 4, 4, 10, 15);
  // var texture = animator.init();
  // var geometry = new THREE.PlaneGeometry(3, 3);
  // var material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
  // var mesh = new THREE.Mesh(geometry, material)
  // scene.add(mesh)


  // animate();
  // console.log("Function headerBack");
  // const rewardImg = new THREE.VideoTexture();
  // const rewardImg = new GifLoader();
  // const loader = new GifLoader();
  // const rewardImg = new GLTFLoader();

  // const rewardImg = new THREE.TextureLoader();
  // rewardImg.load(
  //   // Load Back_inActive Image
  //   // "../asset/logo/Back_Inactive.png",
  //   // backBtn,
  //   '../asset/Reward_Collection_Animation/Reward_Gif.gif',
  //   function (texture) {
  //     var planeMaterial = new THREE.MeshBasicMaterial({
  //       map: texture,
  //       transparent: true,
  //       // visible: false 
  //     });
  //     //Create a 2x2 plane with texture
  //     // var planeGeometry = new THREE.PlaneBufferGeometry(16, 9);
  //     // var planeGeometry = new THREE.PlaneBufferGeometry(9.1, 4.8);
  //     var ang_rad = camera.fov * Math.PI / 180;
  //     var fov_y = camera.position.z * Math.tan(ang_rad / 2) * 2;
  //     var planeGeometry = new THREE.PlaneBufferGeometry(fov_y * camera.aspect, fov_y);
  //     var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  //     scene.add(plane);
  //     plane.position.z = 1
  //   }
  // );

}


// Function For Display Canvas
function init() {
  console.clear()

  // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3');
  // playAudio('../Sounds/level0_sounds/backgroud_music_free.mp3');
  Navbar()
  // gPlayTshirt()
  function Navbar() {
    // Call All Header Functions Here
    headerHome()
    headerBack()
    headerProgress(progressBarImg)    // Change Progressbar Image
    // headerProgress()
    headerSound('../asset/logo/Music.png')
    // headerSound()
    // toggelMusic()

    headerHint()

    headerReward(RewardImg)
    replyAudio(AudioReplaySound)
    RewardPoints(getRewardData)
  }

  // ------------------       Working       ---------------------------------
  // Load LHS Image Here
  const loadLHSImg = new THREE.TextureLoader();
  loadLHSImg.load(
    // "../asset/Image place holder.png",
    whiteBox,

    function (textureLHS) {
      var planeMaterialLHS = new THREE.MeshBasicMaterial({
        map: textureLHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var planeGeometryLHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeLHSMain = new THREE.Mesh(planeGeometryLHS, planeMaterialLHS);
      scene.add(planeLHSMain);
      // planeLHSMain.position.x = -1.75
      // planeLHSMain.position.y = -0.4
      planeLHSMain.position.x = SXIPosLHS
      planeLHSMain.position.y = SYIPosLHS

      // // OnClick Event For planeLHS
      // const domEventsLHS = new THREEx.DomEvents(camera, renderer.domElement)
      // domEventsLHS.addEventListener(planeLHSMain, 'click', function (event) {
      //   // console.log("planeLHS clicked")
      // }, false)
      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    //  undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  // Load MID:- Middle Image Here -------------------------------------------
  const loadMIDImg = new THREE.TextureLoader();
  loadMIDImg.load(
    // "../asset/Image place holder.png",
    whiteBox,

    function (textureMID) {
      var planeMaterialMID = new THREE.MeshBasicMaterial({
        map: textureMID,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var planeGeometryMID = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeMIDMain = new THREE.Mesh(planeGeometryMID, planeMaterialMID);
      scene.add(planeMIDMain);
      // planeLHSMain.position.x = -1.75
      // planeLHSMain.position.y = -0.4
      planeMIDMain.position.x = SXIPosMID
      planeMIDMain.position.y = SYIPosMID

      // // OnClick Event For planeMID
      // const domEventsLHS = new THREEx.DomEvents(camera, renderer.domElement)
      // domEventsLHS.addEventListener(planeMIDMain, 'click', function (event) {
      //   // console.log("planeMID clicked")
      // }, false)
      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    //  undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  // Load UP:- Upper Image Here -------------------------------------------
  const loadUPImg = new THREE.TextureLoader();
  loadUPImg.load(
    // "../asset/Image place holder.png",
    whiteBox,

    function (textureUP) {
      var planeMaterialUP = new THREE.MeshBasicMaterial({
        map: textureUP,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var planeGeometryUP = new THREE.PlaneBufferGeometry(2.9, 1.6);
      planeUPMain = new THREE.Mesh(planeGeometryUP, planeMaterialUP);
      scene.add(planeUPMain);
      // planeLHSMain.position.x = -1.75
      // planeLHSMain.position.y = -0.4
      planeUPMain.position.x = SXIPosUP
      planeUPMain.position.y = SYIPosUP

      // // OnClick Event For planeMID
      // const domEventsLHS = new THREEx.DomEvents(camera, renderer.domElement)
      // domEventsLHS.addEventListener(planeUPMain, 'click', function (event) {
      //   // console.log("planeMID clicked")
      // }, false)
      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    //  undefined,
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );


  // Load RHS Image Here  -----------------------------------------------
  const loadRHSImg = new THREE.TextureLoader();
  loadRHSImg.load(
    // "../asset/Image place holder.png",
    whiteBox,

    function (textureRHS) {
      // console.log("LHS Function Executed");
      var planeMaterialRHS = new THREE.MeshBasicMaterial({
        map: textureRHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var planeGeometryRHS = new THREE.PlaneBufferGeometry(2.9, 1.6);
      // console.log("check for plaen size planeGeometryRHS", planeGeometryRHS)
      planeRHSMain = new THREE.Mesh(planeGeometryRHS, planeMaterialRHS);
      // console.log("planeRHS", planeRHS)
      scene.add(planeRHSMain);
      // planeRHSMain.position.x = 1.75
      // planeRHSMain.position.y = -0.4
      planeRHSMain.position.x = SXIPosRHS
      planeRHSMain.position.y = SYIPosRHS

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    undefined,
    function (err) {
      console.error('An error happened in RHS Image.');
    }
  );


  // Call Slide 1 Here
  // l3Slide1()

  setTimeout(() => {
    l3Slide1()
  }, 300);

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
