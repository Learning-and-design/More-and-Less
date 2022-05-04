
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
// import GifLoader from 'https://cdn.skypack.dev/three-gif-loader';
// import GifLoader from '.';
console.log("Level 4 file Working")
// console.log("06-04 Updated File L4");
console.log("New 23/04")


// Set Data To LocalStorage
// console.log("localStorage Data:- ", localStorage)
// console.log("localStorage Data:- ", localStorage.levelData)
// console.log("localStorage Keys:- ",Object.entries(localStorage))
// console.log("localStorage Keys:- ",localStorage.getItem())

var setItemLocal = localStorage.setItem('level0', false)
var setItemLocal = localStorage.setItem('level1', true)
var setItemLocal = localStorage.setItem('level2', true)
var setItemLocal = localStorage.setItem('level3', true)
var setItemLocal = localStorage.setItem('level4', true)
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
const canvas = document.querySelector('.level4');
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

// // Resize the Screen  - Global
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
// var RewardStartImg = "../asset/logo/Rewards 30.png"   // Level 4 Start Reward
var RewardStartImg = "../asset/logo/Rewards.png"   // Level 4 Start Reward
var RewardEndImg = "../asset/logo/Rewards 40.png"   // Level 4 End Reward

var bgImg = "../asset/level_four_assets/Backgound.png"   // BackGroud Image
var letsPlay = "../asset/Let's_play.png"    // Let's Play Button

// Variables for Level4 Round Image
var roundImg, MoreText = false, LessText = false
// var MoreImg = "../asset/MoreImg.png"
// var LessImg = "../asset/LessImg.png"
// var MoreImg = "../asset/MoreWhite.jpg"
// var LessImg = "../asset/LessWhite.jpg"
var MoreImg = "../asset/Asset More.png"
var LessImg = "../asset/Asset Less.png"

// All Correct Ans Variables
var S1Cor = false, S2Cor = false, S3Cor = false, S4Cor = false, S5Cor = false, S6Cor = false,
  S7Cor = false, S8Cor = false, S9Cor = false, S10Cor = false

// All Wrong Ans Variables
var S1Wro = false, S2Wro = false, S3Wro = false, S4Wro = false, S5Wro = false, S6Wro = false,
  S7Wro = false, S8Wro = false, S9Wro = false, S10Wro = false

// Level 1 Complete Slide Images
var playAgain = "../asset/logo/Play again.png"
var playNext = "../asset/logo/Play the next level.png"
var newGame = "../asset/logo/Pick_New_Game_Blue.png"

// Error Images
var ErrorBorder = "../asset/level_four_assets/Incorrectanswer highlight.png"
var SuccessBorder = "../asset/level_four_assets/Correct answer highlight.png"

// Level 1 Images
// Load Place holder Image - white Box
// var WhiteBox = "../asset/Image place holder.png"
var WhiteBox = "../asset/level_four_assets/Image place holder.png"

// Slide-1 Images
// var S1LHS = "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png"    // 2 Blue Shirts
var S1LHS = "../asset/level_four_assets/image assest Lfour updated/Set 1_3 basketballs.png"    // 3 basketballs
var S1RHS = "../asset/level_four_assets/image assest Lfour updated/Set 1_6 basketballs.png"   // 6 basket balls

// Slide-2 Images
var S2LHS = "../asset/level_four_assets/image assest Lfour updated/Set 6_6 timers.png"  // 6 timers
var S2RHS = "../asset/level_four_assets/image assest Lfour updated/Set 6_2 timers.png"  // 2 timers

// Slide-3 Images
var S3LHS = "../asset/level_four_assets/image assest Lfour updated/Set 2_2 whistles.png"   // 2 whistles
var S3RHS = "../asset/level_four_assets/image assest Lfour updated/Set 2_5 whistles.png"   // 5 whistles

// Slide-4 Images
var S4LHS = "../asset/level_four_assets/image assest Lfour updated/Set 7_4 water bottles.png"  // 4 water bottles
var S4RHS = "../asset/level_four_assets/image assest Lfour updated/Set 7_2 water bottles.png"  // 2 water bottles

// Slide-5 Images
var S5LHS = "../asset/level_four_assets/image assest Lfour updated/Set 3_5 medals.png"   // 5 medals
var S5RHS = "../asset/level_four_assets/image assest Lfour updated/Set 3_7 medals.png"   // 7 medals

// Slide-6 Images
var S6LHS = "../asset/level_four_assets/image assest Lfour updated/Set 8_3 magnifying lens.png"  // 2 M_lens
var S6RHS = "../asset/level_four_assets/image assest Lfour updated/Set 8_5 magnifying lens.png"  // 4 M_lens

// Slide-7 Images
var S7LHS = "../asset/level_four_assets/image assest Lfour updated/Set 4_7 baskets.png"  // 7 baskets
var S7RHS = "../asset/level_four_assets/image assest Lfour updated/Set 4_9 baskets.png"  // 9 baskets

// Slide-8 Images
// var S8LHS = "../asset/level_four_assets/image assest Lfour updated/Set 9_4 tomatoes.png"  // 4 tomatoes
var S8LHS = "../asset/level_four_assets/image assest Lfour updated/Set 9_5 tomatoes.png"  // 5 tomatoes
var S8RHS = "../asset/level_four_assets/image assest Lfour updated/Set 9_6 tomatoes.png"  // 6 tomatoes

// Slide-9 Images                       
var S9LHS = "../asset/level_four_assets/image assest Lfour updated/Set 5_4 vests.png"  // 4 vests
var S9RHS = "../asset/level_four_assets/image assest Lfour updated/Set 5_3 vests.png"  // 3 vests

// Slide-10 Images
var S10LHS = "../asset/level_four_assets/image assest Lfour updated/Set 10_9 pizza pieces.png"  // 9 pizza
var S10RHS = "../asset/level_four_assets/image assest Lfour updated/Set 10_10 pizza pieces.png"  // 10 Pizza


// Load ProgressBar Img
// Main Image
// var progressBarImg = "../asset/Progress_bar/Updated/Progress bar_Type_1 30.png"
var progressBarImg = "../asset/Progress_bar/Updated/Progress bar_level4_start.png"



// Audio Reply Btn Image
var AudioReplyBtnImg = "../asset/logo/Audio_Replay.png"


// Change Image according to round
// var l1PSDemo = "../asset/Progress_bar/Progress bar_Type_3.png"
// var l4PSDemo = "../asset/Progress_bar/Progress_Bar_Type2_element20.png" // Working
var l4PS1 = "../asset/Progress_bar/Updated/Progress bar_Type_1 31.png"
var l4PS2 = "../asset/Progress_bar/Updated/Progress bar_Type_1 32.png"
var l4PS3 = "../asset/Progress_bar/Updated/Progress bar_Type_1 33.png"
var l4PS4 = "../asset/Progress_bar/Updated/Progress bar_Type_1 34.png"
var l4PS5 = "../asset/Progress_bar/Updated/Progress bar_Type_1 35.png"
var l4PS6 = "../asset/Progress_bar/Updated/Progress bar_Type_1 36.png"
var l4PS7 = "../asset/Progress_bar/Updated/Progress bar_Type_1 37.png"
var l4PS8 = "../asset/Progress_bar/Updated/Progress bar_Type_1 38.png"
var l4PS9 = "../asset/Progress_bar/Updated/Progress bar_Type_1 39.png"
var l4PS10 = "../asset/Progress_bar/Updated/Progress bar_Type_1 40.png"


// Audio reply sound 
var AudioReplaySound = '../Sounds/level2_sounds/ML_A_L2_3.mp3'

// Sound for wrong ans
var wrong_ans_sound = '../Sounds/Global_Music/Music/For the wrong answer.mp3'
var tryAgainSound = '../Sounds/Global_Music/GL_A_20.mp3'

// Sound for right ans
var right_ans_sound = '../Sounds/Global_Music/Music/For correct answer.mp3'

var AudioMore = '../Sounds/level4_sounds/ML_A_L4_4.mp3'
var AudioLess = '../Sounds/level4_sounds/ML_A_L4_3.mp3'

//  Error Correct Sound Stop
var ErrCorSoundStop = false, planeText;

// Global Varibale are Declare Here
var isFirstVisit = false;
var planeRedStatus = false;
var planeGreenStatus = false;
var audioPlayed = true;  // This is Check the audio is complete or Not

var replyAudioSound, soundReplyisPlaying = true, dblClick = false, L4Complete = false;
// var audio2Load = false;
var planeInsL0_1, planeInsL0_2, planeLHSMain, planeRHSMain, sound, sound2, listener, listenerBG, storeAudioState;

// Headers Variables
var planeHome, planeBack, planeProgress, planeSound, planeSoundOff, planeHint, planeReward;


// LevelOneComplete (LZC) Variables 
// var planeLOCLHS, planeLOCRHS;
var planeLFCLHS, planeLFCRHS;

// Variables For Wrong Answer Check
var planeWrongAns, planeWrongAnsS2, planeWrongAnsS3, planeWrongAnsS4, planeWrongAnsS5, planeWrongAnsS6, planeWrongAnsS7, planeWrongAnsS8, planeWrongAnsS9, planeWrongAnsS10

// Variables For Correct Answer Check
var planeCorrectAns, planeCorrectAnsS2, planeCorrectAnsS3, planeCorrectAnsS4, planeCorrectAnsS5, planeCorrectAnsS6, planeCorrectAnsS7, planeCorrectAnsS8, planeCorrectAnsS9, planeCorrectAnsS10

// Success Border Image
var planeSuccessImg, planeErrorImg

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

// Audio Reply varibales
// R1Audio:- Round 1 Audio
// var RLessAudio = false, RMoreAudio = false
var RoundAudio = false // round audio Less- True, More- False
var isAudioLess = false, isAudioMore = false
// var Round1 = false, Round2 = false, Round3 = false, Round4 = false, Round5 = false, Round6 = false, Round7 = false, Round8 = false,
//   Round9 = false, Round10 = false

//Check Image Status
var musicImgStatus = true, replyAudioBtnSound, isAudiReplyplay = false, planeReplyAudio, soundRoundChange, planeReplyAudioLess

var newrewardPoints, getNewRewardPoints, getRewardData, getRewardString, finalReward, meshText

// Postion Varible for anser check
var isLHSCor = false
var isRHSCor = false

var isLHSWro = false
var isRHSWro = false

// Global x,y Size For Slide Rounds
// SXIPosLHS = Slide X Image Position   LHS
// SYIPosLHS = Slide Y Image Position   LHS
// var SXIPosLHS = -2 // Old
var SXIPosLHS = -2.15
var SYIPosLHS = -0.3

// SXIPosRHS = Slide X Image Position   RHS
// SYIPosRHS = Slide Y Image Position   RHS
// var SXIPosRHS = 2  // Old
var SXIPosRHS = 2.15
var SYIPosRHS = -0.3

// Home Button Position
// var PHomeX = -2.8  // Old
var PHomeX = -3.2
var PHomeY = 1.5

// Back Button Position
// var PBackX = -2.1  // Old
var PBackX = -2.7
var PBackY = 1.5

// Sound Button Position
// var PSoundX = 1.5 // Old
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
// var WBPosX = 3.6 // Old
// var WBPosY = 3.6 // Old
var WBPosX = 4
var WBPosY = 3.6


// Skip Btn --------------------------
// Skip Button 
var skipBtn = "../asset/logo/Skip.png"
var planeSkipBtn

// // Skip Btn Position
// var SkipPosX = 3.3
// var SkipPosY = -1.3

var SkipPosX = 3.4
var SkipPosY = -1.2


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
  // PSoundX = 1.7 // Old
  PSoundX = 1.8
  PSoundY = 1.5

  // Hint Button Position
  // PHintX = 2.2 // Old
  PHintX = 2.3
  PHintY = 1.5

  // Reward Button Position
  // PRewardX = 3.1 // Old
  PRewardX = 3.1
  PRewardY = 1.53

  // Reward Points Position
  RewardPointsX = 3.15
  RewardPointsY = 1.4

  // White Box Size
  WBPosX = 4
  WBPosY = 3.6

  // SXIPosLHS = Slide X Image Position   LHS
  // SYIPosLHS = Slide Y Image Position   LHS
  SXIPosLHS = -2.15
  SYIPosLHS = -0.3

  // SXIPosRHS = Slide X Image Position   RHS
  // SYIPosRHS = Slide Y Image Position   RHS
  SXIPosRHS = 2.15
  SYIPosRHS = -0.3

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


// ------------------------------------------------------------------------------------------------------
// Background Image
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

// Controls - access OrbitControls
// const controls = new OrbitControls( camera, renderer.domElement );

// to disable zoom
// controls.enableZoom = false;

// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = true;
// controls.enablePan = false;

// -------------------------------------------------------------------------------------------
// Screen Lock Function Working
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
// -------------------------------------------------------------------------------------------


// Call All The Functions Here
// init();
setTimeout(() => {
  // console.log("SetTime For Let's Play Button")
  firstVisit()
}, 500);
// firstVisit()

//Every Round Music
// Pause BG Audio Here
function RoundChangeMusic(path) {


  // Audio Listener Object
  var listener2 = new THREE.AudioListener();
  // camera.add(listener);
  // scene.add(listener2);

  // create the PositionalAudio object (passing in the listener)
  // sound2 = new THREE.PositionalAudio(listener2);
  soundRoundChange = new THREE.PositionalAudio(listener2);

  // load a sound and set it as the PositionalAudio object's buffer
  var audioLoader2 = new THREE.AudioLoader();
  // console.log("audioLoader :-", audioLoader)
  // console.log("audioLoader Start :-", audioLoader.manager.itemStart);
  // console.log("audioLoader End :-", audioLoader.manager.itemEnd);
  audioLoader2.load(path, function (buffer) {
    soundRoundChange.setBuffer(buffer);
    soundRoundChange.setRefDistance(20);
    // soundRoundChange.setLoop(true);
    // Sound Speed Control here

    soundRoundChange.play();
    // For Autoplay audio
    // sound.autoplay = true;
    // sound2.setVolume(0.1)
    // console.log("sound:- ", sound);

    switch (path) {
      case AudioLess:    // Working
        isAudiReplyplay = true  // Not Play again if audio is already working

        //Render the scene for Update The Values
        renderer.render(scene, camera);
        document.body.appendChild(renderer.domElement);
        break;
      case AudioMore:    // Working
        isAudiReplyplay = true  // Not Play again if audio is already working

        //Render the scene for Update The Values
        renderer.render(scene, camera);
        document.body.appendChild(renderer.domElement);
        break;

      default:
        break;
    }
    // storeAudioState = sound2.source.onended;
    soundRoundChange.source.onended = function () {
      console.log("automatic sound ended")
      switch (path) {
        case AudioLess:    // Working
          isAudiReplyplay = false  // Not Play again if audio is already working

          //Render the scene for Update The Values
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
          break;
        case AudioMore:    // Working
          isAudiReplyplay = false  // Not Play again if audio is already working

          //Render the scene for Update The Values
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
          break;

        default:
          break;
      }
    }
  }, false);
}


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
      case AudioLess:    // Working
        isAudiReplyplay = true  // Not Play again if audio is already working

        //Render the scene for Update The Values
        renderer.render(scene, camera);
        document.body.appendChild(renderer.domElement);
        break;
      case AudioMore:    // Working
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

        case AudioLess:    // Working
          isAudiReplyplay = false  // Not Play again if audio is already working

          //Render the scene for Update The Values
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
          break;
        case AudioMore:    // Working
          isAudiReplyplay = false  // Not Play again if audio is already working

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
  console.log("Reply Audio Working -------------------------")

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
      planeReplyAudio.position.y = 1.03
      planeReplyAudio.position.z = 1

      // OnClick Reply Audio Play and other Sound Should be Pause
      if (isAudiReplyplay == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeReplyAudio, 'click', function (event) {
          // if (isFunc4Active == false) {
          if (isAudiReplyplay == false) {

            console.log("Audio Reply More")
            // console.log("")

            soundReplyisPlaying = false

            // soundReplyAudio(path)    // Working
            // playAudio(path)
            // soundAnsCheck(path)

            // ---------------------------------------------------------------------
            if (isAudioLess == true) {
              console.log("Audio Less Status:-", isAudioLess);
              soundReplyAudio(AudioLess)
            }
            else {
              console.log("Audio More Status:-", isAudioLess);
              soundReplyAudio(AudioMore)
            }
            // ---------------------------------------------------------------------

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
  console.clear() // active

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
        // setInterval(() => {
        // RewardShow()
        // }, 2000);
        // RewardShow2()
        // dotCheck()
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

          // var level4_Com = localStorage.getItem('level4Complete')
          // var level4_Com_val = JSON.parse(level4_Com)
          // // console.log("level1_Pre:--------------------------", level0_Com_val)
          // if (level4_Com_val == true) {
          //   // S6Cor = true
          //   // l4PS6_Skip()
          //   skiplevelBtn()
          // }

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

function RewardShow() {
  console.clear() // active
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

// function dotCheck() {
//   // var dotGeometry = new THREE.MeshBasicMaterial();
//   // dotGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
//   // var dotMaterial = new THREE.PointsMaterial({ size: 1, sizeAttenuation: false });
//   // var dot = new THREE.Points(dotGeometry, dotMaterial);
//   // scene.add(dot);
//   // video.src = "src to video";
//   // const video = document.getElementById('#video');
//   // video.src = "https://vimeo.com/672681772"
//   // video.load();
//   // video.play();

//   // var video = document.getElementById('video');
//   // assuming you have created a HTML video element with id="video"
//   // const texture = new THREE.VideoTexture(video);
//   // texture.needsUpdate;
//   // texture.minFilter = THREE.LinearFilter;
//   // texture.magFilter = THREE.LinearFilter;
//   // texture.format = THREE.RGBFormat;
//   // texture.crossOrigin = 'anonymous';

//   // var imageObject = new THREE.Mesh(
//   //   // new THREE.PlaneGeometry(width, height),
//   //   new THREE.PlaneGeometry(3, 3),
//   //   new THREE.MeshBasicMaterial({ map: texture }));
//   // imageObject.position.x = 0
//   // imageObject.position.y = 0
//   // scene.add(imageObject);

//   // const video = document.getElementById('#video');
//   // video.play();

//   // const texture = new THREE.VideoTexture(video);
//   // const material = new THREE.MeshBasicMaterial({ map: texture });

//   // const mesh = new THREE.Mesh(geometry, material);
//   // scene.add(mesh);

//   // renderer = new THREE.WebGLRenderer();
//   // renderer.setPixelRatio(window.devicePixelRatio);
//   // renderer.setSize(window.innerWidth, window.innerHeight);
//   // container.appendChild(renderer.domElement);
// }

// firstVisit Function Will be Executed When Use Visit Page First Time
function firstVisitAgain() {

  // isFirstVisit = true;
  // insOneLoad = true;  // Display 1st instructor
  // insTwoLoad = false; // Hide 2nd instructor
  // Load Image here Start Button 
  const loadImg2 = new THREE.TextureLoader();
  loadImg2.load(
    letsPlay,

    function (texture2) {
      var planeMaterial2 = new THREE.MeshBasicMaterial({
        map: texture2,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var planeGeometry2 = new THREE.PlaneBufferGeometry(0.80, 0.80);
      var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
      scene.add(plane2);
      plane2.position.z = 1

      // OnClick Event For planeLHS
      const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
      domEvents.addEventListener(plane2, 'click', function (event) {
        // event.preventDefault()
        // console.log("plane2 clicked")
        // console.log("planeInnerLHS origDomEvent", event.origDomEvent)
        // console.log("planeInnerLHS isTrusted", event.origDomEvent.isTrusted)
        // var btndisable = event.origDomEvent.isTrusted;
        // console.log("btndisable",btndisable);

        // // Remove EventListner Here
        // domEvents.removeEventListener(plane, 'click', function(e){
        //     console.log("remove listner call")
        //     domEvents.addEventListener(plane, 'click', function (event) {
        //         console.log("Add Listne Again")
        //     })
        //     // plane.visible = false
        // })

        if (audioPlayed == true) {
          nextAudio = false   // For Reactive Ins-1
          // checkBGAudio()
          init();     // call Main Function
          // console.log("this is true");
          plane2.visible = false;

          // Comment audio only for testing purpose
          // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
          // btndisable = false

          // console.log("insOneLoad inside Function", insOneLoad);
          // console.log("insTwoLoad inside Function", insTwoLoad);
          // isFirstVisit = false

          // insOneLoad = false;  // Make instructor 1 invisible
          // insTwoLoad = false;  // Make instructor 2 invisible
        }
        else {
          // console.log("btndisable updated", btndisable);
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

// For Level Complete Audio
// Play Reply Audio and Pause playAudio Function sound here
function LevelCompleteSound(path) {
  console.clear() // active


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


// // Play Reply Audio and Pause playAudio Function sound here
// function soundReplyAudio(path) {

//     // Audio Listener Object
//     var listener3 = new THREE.AudioListener();
//     // camera.add(listener);
//     scene.add(listener3);

//     // create the PositionalAudio object (passing in the listener)
//     replyAudioSound = new THREE.PositionalAudio(listener3);

//     // load a sound and set it as the PositionalAudio object's buffer
//     var audioLoader3 = new THREE.AudioLoader();
//     // console.log("audioLoader :-", audioLoader)
//     // console.log("audioLoader Start :-", audioLoader.manager.itemStart);
//     // console.log("audioLoader End :-", audioLoader.manager.itemEnd);
//     audioLoader3.load(path, function (buffer) {

//         replyAudioSound.setBuffer(buffer);
//         replyAudioSound.setRefDistance(20);
//         // Sound Speed Control here
//         replyAudioSound.play();

//         // For Autoplay audio
//         // sound.autoplay = true;
//         // replyAudioSound.setVolume(0.1)
//         // console.log("replyAudioSound:- ", replyAudioSound);
//         // console.log("isPlaying Status in soundreplyAudio", replyAudioSound.isPlaying);

//         replyAudioSound.source.onended = function () {
//             console.log("replyAudioSound Ended");
//             soundReplyisPlaying = true
//             // console.log("replyAudioSound.source.onended", replyAudioSound.source.onended);
//             // sound.play()
//             // playAudio()
//             switch (path) {
//                 // case '../Sounds/Global_Music/tryAgain.mp3':
//                 case '../Sounds/Global_Music/Music/For the wrong answer.mp3':
//                     console.log("For the wrong answer")
//                     // console.log("Check Status:- ",planeLHSMainRed.visible);
//                     planeLHSMainRed.visible = false
//                     // gPlayTshirt()
//                     // console.log("");

//                     //Render the scene for Update The Values
//                     renderer.render(scene, camera);
//                     document.body.appendChild(renderer.domElement);
//                     break;

//                 case '../Sounds/Global_Music/Music/For correct answer.mp3':
//                     console.log("For correct answer")
//                     // console.log("Check Status:- ",planeRHSMainGreen.visible);
//                     planeRHSMainGreen.visible = false
//                     // gPlayTshirt()
//                     // console.log("");

//                     //Render the scene for Update The Values
//                     renderer.render(scene, camera);
//                     document.body.appendChild(renderer.domElement);
//                     break;

//                 default:
//                     break;
//             }
//             // replyAudioSound.isPlaying = false
//         }
//         // this.isPlaying = false;
//     }, false);
// }

// // Sound Play only when audio is ended
// function toggelSoundReply() {
//     if(toggelSoundReplyStatus == true){
//         toggelSoundReplyStatus = false

//     }
// }

// // Function For Reply Audio Button
// function replyAudio(){
//     console.log("Reply Audio Working")

//     const loadReplyAudio =  new THREE.TextureLoader();
//     loadReplyAudio.load(
//         '../asset/logo/Audio_Replay.png',

//         function (textureReplyAudio) {
//             var planeMaterialReplyAudio = new THREE.MeshBasicMaterial({
//                 map: textureReplyAudio,
//                 transparent: true,
//             })

//             var planeGeometryReplyAudio = new THREE.PlaneBufferGeometry(0.30, 0.30)
//             planeReplyAudio = new THREE.Mesh(planeGeometryReplyAudio,planeMaterialReplyAudio)
//             scene.add(planeReplyAudio)
//             planeReplyAudio.position.x = 2.5
//             planeReplyAudio.position.y = 1.12    
//             planeReplyAudio.position.z = 1

//             // OnClick Reply Audio Play and other Sound Should be Pause
//             const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
//             domEvents.addEventListener(planeReplyAudio, 'click', function(event){
//                 console.log("Audio Reply Btn Click")
//                 // Call Reply Audio Btn
//             //     if (!replyAudioSound.source.onended){
//                 soundReplyisPlaying = false 
//                 // soundReplyAudio('../Sounds/Global_Music/Here_ins_again.mp3')    // Working
//                 playAudio('../Sounds/Global_Music/Here_ins_again.mp3')    // Working
//             // }

//                 // soundReplyAudio('')
//                 // sound.pause() // Pause Current Audio and Play This Audio
//                 sound.stop()   // Stop Current Audio

//             })

//             //Render the scene
//             renderer.render(scene, camera);
//             document.body.appendChild(renderer.domElement);


//         },
//         // undefined,
//         function (err) {
//             console.error('An error happened in planeHome.');
//         }
//     );
//     // Resize the Screen  - Global
//     window.addEventListener('resize', function () {
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(window.innerWidth, window.innerHeight)
//     })



// }

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
      // var planeGeometryHome = new THREE.PlaneBufferGeometry(0.37, 0.35); // Active
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

        var currentPath = `${endPoint}/level4.html`

        if (currentPath == `${endPoint}/level4.html`) {
          console.log("Redirect New Page")
          console.log("endPoint", endPoint)
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
        // console.log("Back Btn Press")

        // location.Back()
        // history.back()
        // history.go(-1)

        // Go to Level 3 Gameplay
        // window.location.href = '/level3.html'
        var currentPath = `${endPoint}/level4.html`
        console.log("currentPath", currentPath);

        if (currentPath == `${endPoint}/level4.html`) {
          console.log("Redirect New Page")
          console.log("endPoint", endPoint)
          // location.href = '/level3.html'
          window.location.replace(`/level3.html`);

        } else {
          // location.href = '/level3.html'
          window.location.replace(`/level3.html`);
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
        // visible: false 
      });
      //Create a 0.30x0.30 plane with texture
      // var planeGeometryProgress = new THREE.PlaneBufferGeometry(1.70, 0.33); // Active
      var planeGeometryProgress = new THREE.PlaneBufferGeometry(1.9, 0.3);
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

        // Add OnClick event Here
        // Music off When This Event Occurs
        // const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
        // domEvents.addEventListener(planeSound, 'click', function(event){
        //     console.log("Sound On Btn Click")

        //     sound2.play();

        // toggelMusic(path)
        // sound2.pause();
        // puase backgroud sound
        // setBackgroudAudio = false
        // checkBGAudio()
        // stopBGAudio();

        // audioChecker('../asset/logo/Music.png')
        // headerSoundOff()

        // sound2.stop();

        // sound.setVolume(0);
        // }, false)

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
        // console.log("Hint Btn Click")

        // if (localStorage.levelData.)
        // window.location.href = "/level4_Pre.html"
        window.location.replace(`/level4_Pre.html`);

        // // Go to Level 3 Gameplay
        // // window.location.href = '/level3.html'
        // var currentPath = `${endPoint}/level4.html`
        // console.log("currentPath", currentPath);

        // if (currentPath == `${endPoint}/level4.html`) {
        //   console.log("Redirect New Page")
        //   console.log("endPoint", endPoint)
        //   // location.href = '/level3.html'
        //   window.location.replace(`/level4_Pre.html`);

        // } else {
        //   // location.href = '/level3.html'
        //   window.location.replace(`/level4_Pre.html`);
        // }



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

    if (ErrCorSoundStop == false) {
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
          // console.log("For the wrong answer")
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
      // var AnsS2 = (S1Cor == false && S2Cor == true && S3Cor == false && S4Cor == false && S5Cor == false && S6Cor == false && S7Cor == false && S8Cor == false && S9Cor == false && S10Cor == false)
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
        // console.log("S1Cor Status:-", S1Cor)
        // S1Cor = false

        // //Render the scene for Update The Values
        // renderer.render(scene, camera);
        // document.body.appendChild(renderer.domElement);

        AnswerCheckS1()
      }

      // else if (AnsS2) {
      else if (S2Cor == true) {
        S2Cor = false
        // console.log("S2Cor Status:-", S2Cor)
        // S2Cor = false
        AnswerCheckS2()
      }

      // else if (AnsS3) {
      else if (S3Cor == true) {
        S3Cor = false
        // console.log("S3Cor Status:-", S3Cor)
        // S3Cor = false
        AnswerCheckS3()
      }

      // else if (AnsS4) {
      else if (S4Cor == true) {
        S4Cor = false
        // console.log("S4Cor Status:-", S4Cor)
        // S4Cor = false
        AnswerCheckS4()
      }

      // else if (AnsS5) {
      else if (S5Cor == true) {
        S5Cor = false
        // console.log("S5Cor Status:-", S5Cor)
        // S5Cor = false
        AnswerCheckS5()
      }

      // else if (AnsS6) {
      else if (S6Cor == true) {
        S6Cor = false
        // console.log("S6Cor Status:-", S6Cor)
        // S6Cor = false
        AnswerCheckS6()
      }
      // else if (AnsS7) {
      else if (S7Cor == true) {
        S7Cor = false
        // console.log("S7Cor Status:-", S7Cor)
        // S6Cor = false
        AnswerCheckS7()
      }
      // else if (AnsS8) {
      else if (S8Cor == true) {
        S8Cor = false
        // console.log("S8Cor Status:-", S8Cor)
        // S6Cor = false
        AnswerCheckS8()
      }
      // else if (AnsS9) {
      else if (S9Cor == true) {
        S9Cor = false
        // console.log("S9Cor Status:-", S9Cor)
        // S6Cor = false
        AnswerCheckS9()
      }
      // else if (AnsS10) {
      else if (S10Cor == true) {
        S10Cor = false
        // console.log("S10Cor Status:-", S10Cor)
        // S6Cor = false
        AnswerCheckS10()
      }
      // replyAudioSound.isPlaying = false
    }
    // this.isPlaying = false;
  }, false);
}

// ----------------------------------------------------------------

// Global DomEvent
// var domRemoveEvents = new THREEx.DomEvents(camera, renderer.domElement)

// Function For Answer Check
// function onClickAnswerCheck(More, Less) {
//   console.log(`Correct Answer`)

//   // Put Condition To Check Is Greater or not ----------------------------
//   if (More > Less) {
//     console.log(`More:- ${More}`)
//     soundAnsCheck(right_ans_sound)

//     // Put Function For Green Border  --------------------------------------
//     // Load Success Image Here
//     const loadSuccessImg = new THREE.TextureLoader();
//     loadSuccessImg.load(
//       SuccessBorder,  // Success (Green Border)

//       function (textureSuccess) {
//         var PM_Success_img = new THREE.MeshBasicMaterial({
//           map: textureSuccess,
//           transparent: true,
//         });
//         var PG_Success_img = new THREE.PlaneBufferGeometry(3.6, 3.6);
//         planeSuccessImg = new THREE.Mesh(PG_Success_img, PM_Success_img);
//         scene.add(planeSuccessImg);

//         if (isLHSCor == true) {
//           isLHSCor = false
//           planeSuccessImg.position.x = SXIPosLHS  // 1 Issue is Here in Postion Set
//           planeSuccessImg.position.y = SYIPosLHS  // 1 Issue is Here in Postion Set
//         } else {
//           planeSuccessImg.position.x = SXIPosRHS  // 1 Issue is Here in Postion Set
//           planeSuccessImg.position.y = SYIPosRHS  // 1 Issue is Here in Postion Set
//         }

//         // Remove Green Border After 1 Second Timeout
//         setTimeout(() => {
//           planeSuccessImg.visible = false
//           l4Slide2()

//           //Render the scene
//           renderer.render(scene, camera);
//           document.body.appendChild(renderer.domElement);
//         }, 1000);

//         //Render the scene
//         renderer.render(scene, camera);
//         document.body.appendChild(renderer.domElement);
//       },
//       // undefined,
//       function (err) {
//         console.error('An error happened in RHS Image.');
//       }
//     );

//   }
//   else {
//     console.log(`Less:- ${Less}`)
//     soundAnsCheck(wrong_ans_sound)
//     // Put Function For Red Border  --------------------------------------
//     // Load Error Image Here
//     const loadErrorImg = new THREE.TextureLoader();
//     loadErrorImg.load(
//       ErrorBorder,  // Error (Red Border)

//       function (textureError) {
//         var PM_Error_img = new THREE.MeshBasicMaterial({
//           map: textureError,
//           transparent: true,
//         });
//         var PG_Error_img = new THREE.PlaneBufferGeometry(3.6, 3.6);
//         planeErrorImg = new THREE.Mesh(PG_Error_img, PM_Error_img);
//         scene.add(planeErrorImg);

//         if (isLHSWro == true) {
//           isLHSWro = false
//           planeErrorImg.position.x = SXIPosLHS  // 1 Issue is Here in Postion Set
//           planeErrorImg.position.y = SYIPosLHS  // 1 Issue is Here in Postion Set
//         } else {

//           planeErrorImg.position.x = SXIPosRHS  // 1 Issue is Here in Postion Set
//           planeErrorImg.position.y = SYIPosRHS  // 1 Issue is Here in Postion Set
//         }


//         // Remove Error Image After 1 Second
//         setTimeout(() => {
//           planeErrorImg.visible = false

//           //Render the scene
//           renderer.render(scene, camera);
//           document.body.appendChild(renderer.domElement);
//         }, 1000);

//         //Render the scene
//         renderer.render(scene, camera);
//         document.body.appendChild(renderer.domElement);
//       },
//       // undefined,
//       function (err) {
//         console.error('An error happened in RHS Image.');
//       }
//     );
//   }

// }

// Check Clicked Answer S1

function AnswerCheckS1() {
  // console.clear() // active

  // console.log("Answer Check Function Working")

  S1Cor = false
  // if (S1Cor == true){
  //     S1Cor = false
  // console.log("S1Cor Condition working")

  // if (planeCorrectAns.visible == true) {
  // console.log(" This is Visible S1")
  planeCorrectAns.visible = false

  // DomRemoveEvent.removeEventListener(planeS1RHS, 'click', function (event) {
  //   console.log("PlaneS1RHS remove")
  // })
  // DomRemoveEvent.removeEventListener("click", planeS1RHS, false)

  // Noman Change
  l4Slide2()
  // setTimeout(l4Slide2(), 100)
  // setTimeout(l4Slide2Testing(), 100)
  // }
  // gPlayTshirt()
  // console.log("");

  // //Render the scene for Update The Values
  // renderer.render(scene, camera);
  // document.body.appendChild(renderer.domElement);
  // }

  // switch (true) {
  //     // switch (condition) {
  //         // case '../Sounds/Global_Music/tryAgain.mp3':
  //         // case '../Sounds/Global_Music/Music/For the wrong answer.mp3':    // Working
  //         case 'Wrong':
  //             console.log("For the wrong answer")
  //             // console.log("Check Status:- ",planeLHSMainRed.visible);
  //             if (planeWrongAns.visible == true){
  //             planeWrongAns.visible = false
  //             // setTimeout( l2Slide2() , 100)
  //             }
  //             // gPlayTshirt()
  //             // console.log("");

  //             //Render the scene for Update The Values
  //             renderer.render(scene, camera);
  //             document.body.appendChild(renderer.domElement);
  //             break;


  //         // case '../Sounds/Global_Music/Music/For correct answer.mp3':  // Working
  //         case 'Correct':
  //             console.log("For correct answer")
  //             // console.log("Check Status:- ",planeRHSMainGreen.visible);
  //             // planeRHSMainGreen.visible = false
  //             // if (planeCorrectAns.visible == true){
  //             if (S1Cor == true){
  //                 S1Cor = false
  //                 planeCorrectAns.visible = false
  //                 setTimeout( l1Slide2() , 200)
  //             }

  //             // if (S2Cor == true){
  //             //     // planeCorrectAns.visible = false
  //             //     setTimeout( l1Slide3() , 200)
  //             // }
  //             // gPlayTshirt()
  //             // console.log("");

  //             //Render the scene for Update The Values
  //             renderer.render(scene, camera);
  //             document.body.appendChild(renderer.domElement);
  //             break;


  //         // case '../Sounds/Global_Music/Music/For correct answer.mp3':
  //         //     console.log("For correct answer")
  //         //     // console.log("Check Status:- ",planeRHSMainGreen.visible);
  //         //     // planeRHSMainGreen.visible = false
  //         //     // if (planeCorrectAns.visible == true){
  //         //     // if (S1Cor == true){
  //         //     //     planeCorrectAns.visible = false
  //         //     //     setTimeout( l1Slide2() , 200)
  //         //     // }

  //         //     if (S2Cor == true){
  //         //         S2Cor = false
  //         //         // planeCorrectAns.visible = false
  //         //         setTimeout( l1Slide3() , 200)
  //         //     }
  //         //     // gPlayTshirt()
  //         //     // console.log("");

  //         //     //Render the scene for Update The Values
  //         //     renderer.render(scene, camera);
  //         //     document.body.appendChild(renderer.domElement);
  //         //     break;

  //         default:
  //             break;
  //    }
}

// Check Clicked Answer S2
function AnswerCheckS2() {
  // console.clear() // active

  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S2Cor Condition working")

  // if (planeCorrectAnsS2.visible == true) {
  // console.log(" This is Visible S2")

  // planeWrongAns.visible = false
  // planeCorrectAns.visible = false

  // planeWrongAnsS2.visible = false
  planeCorrectAnsS2.visible = false
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  l4Slide3()
  // setTimeout(l4Slide3(), 100)

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
  // console.clear() // active

  // if (S2Cor == true){
  // S3Cor = false
  // console.log("S3Cor Condition working")

  // if (planeCorrectAnsS3.visible == true) {
  // console.log(" This is Visible S3")

  // planeWrongAns.visible = false
  // planeCorrectAns.visible = false

  // planeWrongAnsS2.visible = false
  // planeCorrectAnsS2.visible = false

  // planeWrongAnsS3.visible = false
  planeCorrectAnsS3.visible = false  // Active

  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  // setTimeout(l4Slide4(), 100)
  l4Slide4()

  // //Render the scene for Update The Values
  // renderer.render(scene, camera);
  // document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S4
function AnswerCheckS4() {
  // console.clear() // active

  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S4Cor Condition working")

  // if (planeCorrectAnsS4.visible == true) {
  // console.log(" This is Visible S4")

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
  l4Slide5()
  // setTimeout(l4Slide5(), 100)

  //Render the scene for Update The Values
  // renderer.render(scene, camera);
  // document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S5
function AnswerCheckS5() {
  // console.clear() // active

  // if (S2Cor == true){
  S5Cor = false
  // console.log("S5Cor Condition working")
  // console.log("S5Cor Condition working", planeCorrectAnsS5)

  // if (planeCorrectAnsS5.visible == true) {
  // console.log(" This is Visible S5")

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
  l4Slide6()
  // setTimeout(l4Slide6(), 100)

  //Render the scene for Update The Values
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
  // console.clear() // active

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
  setTimeout(l4Slide7(), 100)

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S7
function AnswerCheckS7() {
  // console.clear() // active

  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S7Cor Condition working")

  // if (planeCorrectAnsS7.visible == true) {
  // console.log(" This is Visible S7")

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
  l4Slide8()
  // setTimeout(l4Slide8(), 100)

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
  // console.clear() // active

  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S8Cor Condition working")

  // if (planeCorrectAnsS8.visible == true) {
  // console.log(" This is Visible S8")

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
  l4Slide9()
  // setTimeout(l4Slide9(), 100)

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
  // console.clear() // active

  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S9Cor Condition working")

  // if (planeCorrectAnsS9.visible == true) {
  // console.log(" This is Visible S9")

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
  l4Slide10()
  // setTimeout(l4Slide10(), 100)

  // //Render the scene for Update The Values
  // renderer.render(scene, camera);
  // document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Check Clicked Answer S10
function AnswerCheckS10() {
  // console.clear() // active

  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S10Cor Condition working")

  // if (planeCorrectAnsS10.visible == true) {
  // console.log(" This is Visible S10")

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


  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  setTimeout(levelFourComplete(), 100)

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }

  // //Render the scene for Update The Values
  // renderer.render(scene, camera);
  // document.body.appendChild(renderer.domElement);
  // }
}

//  -----------------------------------------------------------------------------------------------
// For Make Level Dynamic Steps
// - On Wrong Selection Put DomEvent in false condition & For Hide Red Border put setTimeout
// - On Correct Selection Make AnsS?Cor True inside domEvent & Remove That Plane using scene.remove
// put ths into setTimeout
// Red Border Hide Timeout :- 500 Mili Second
// ------------------------------------------------------------------------------------------------


// Function For Level1 Slide 1
// Indicate Blue Tshirt Slide
// More RHS Right
function l4Slide1() {
  // console.clear()
  RoundChangeMusic(AudioMore)

  // if (RoundAudio == false) {
  // replyAudio(AudioMore)

  // }


  // if (L4Complete == false) {
  headerProgress(progressBarImg)    // Change Progressbar Image
  // if (MoreText == false) {
  // MoreText = true  // active
  // roundText(MoreImg) // active
  // if (MoreText == true) {
  //   console.log("MoreText", MoreText)
  //   // MoreText = false
  // }


  // L4Complete = true
  // }
  // }
  // roundText()
  // Refrence for Noman
  console.log("Slide 1 Working");


  //  ------------------------  Working  --------------------------
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
      });
      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S1LHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      planeS1LHS = new THREE.Mesh(PG_S1LHS, PM_S1LHS);
      scene.add(planeS1LHS);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS1LHS.position.x = SXIPosLHS   // Working
      planeS1LHS.position.y = SYIPosLHS   // Working
      // planeS1LHS.position.z = 1

      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS1LHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true

        if (dblClick == true) {
          planeWrongAns.visible = false
        }
      })


      // Add onClick Event Here - Wrong Answer
      if (AnsS1Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS1LHS, 'click', function (event) {
          if (AnsS1Cor == false) {
            console.log("Wrong Answer S1")

            // domEvents.removeEventListener(planeS1LHS, 'click', false)
            isLHSWro = true


            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS1LHS, 'click', false) // active
            AnsS1Cor = true

            // onClickAnswerCheck(S1R, S1L) // (more, less)
            // onClickAnswerCheck(S1L, S1R) // (less, more)
            // WrongAnswer()


            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus)

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

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
                  // console.log("LHS Function Executed");
                  var PM_S1LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS1LHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  // var PG_S1LHS_Ans = new THREE.PlaneBufferGeometry(2.1, 2.1);
                  // var PG_S1LHS_Ans = new THREE.PlaneBufferGeometry(3.6, 3.6); // Active
                  var PG_S1LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  // console.log("check for plane size planeGeometryRHS", planeGeometryRHS)
                  planeWrongAns = new THREE.Mesh(PG_S1LHS_Ans, PM_S1LHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  scene.add(planeWrongAns);
                  // planeWrongAns.position.x = -1.2
                  // planeWrongAns.position.y = -0.7
                  planeWrongAns.position.x = SXIPosLHS    // Working
                  planeWrongAns.position.y = SYIPosLHS    // Working

                  // Hide Red Border Af
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

  //  ------------------------  Working  --------------------------
  // Correct        
  const loadS1RHS = new THREE.TextureLoader();
  loadS1RHS.load(
    // 2nd URL
    S1RHS, // Shirt

    function (textureS1RHS) {
      var PM_S1RHS = new THREE.MeshBasicMaterial({
        map: textureS1RHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S1RHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      planeS1RHS = new THREE.Mesh(PG_S1RHS, PM_S1RHS);
      scene.add(planeS1RHS);
      // planeS1RHS.position.x = 1.2
      // planeS1RHS.position.y = -0.7
      planeS1RHS.position.x = SXIPosRHS   // Working
      planeS1RHS.position.y = SYIPosRHS   // Working

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS1Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS1RHS, 'click', function (event) {
          if (AnsS1Cor == false) {
            console.log("Correct Answer S1")
            AnsS1Cor = true
            S1Cor = true


            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS1RHS, 'click', false)
            // domEvents.removeEventListener(planeReplyAudio, 'click', false) // remove event from audio reply button

            setTimeout(() => {

              scene.remove(planeS1LHS, planeS1RHS);
            }, 1000);

            // domEvents.removeEventListener(planeS1RHS, 'click', false)
            // planeS1RHS.removeEventListener('click', console.log("RHS S1"))
            // planeS1LHS.removeEventListener('click', console.log("LHS S1"))

            // scene.remove(planeS1LHS, planeS1RHS);
            // planeS1LHS.geometry.dispose();
            // planeS1LHS.material.dispose();
            // // planeCorrectAns.material.dispose();
            // planeS1LHS = undefined;

            // planeS1RHS.geometry.dispose();
            // planeS1RHS.material.dispose();
            // // planeWrongAns.material.dispose();
            // planeS1RHS = undefined;

            isRHSCor = true

            // Call This FunctionFor Check Correct and Incorrect Answer
            // onClickAnswerCheck(S1L, S1R)
            // onClickAnswerCheck(S1R, S1L) // (more, less)
            // CorrectAnswer()

            // // // -----------------------------------------------------------------------
            // // Remove Plane EventListner Here
            // // var planeS1All = planeS1RHS, planeS1LHS
            // domEvents.removeEventListener(planeS1RHS, 'click', false)
            // // domEvents.removeEventListener(planeS1LHS, 'mouseover', false)
            // // // -----------------------------------------------------------------------

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false
              // console.log("Green Highlight Active");

              S1Cor = true

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

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S1RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  // var PG_S1RHS_Ans = new THREE.PlaneBufferGeometry(2.1, 2.1);
                  var PG_S1RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  // console.log("check for plaen size planeGeometryRHS", planeGeometryRHS)
                  // planeRHSMainGreen = new THREE.Mesh(planeGeometryRHS, planeMaterialRHS);
                  planeCorrectAns = new THREE.Mesh(PG_S1RHS_Ans, PM_S1RHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  scene.add(planeCorrectAns);
                  // planeCorrectAns.position.x = 1.2
                  // planeCorrectAns.position.y = -0.7
                  planeCorrectAns.position.x = SXIPosRHS  // Working
                  planeCorrectAns.position.y = SYIPosRHS  // Working

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
        MoreText = false
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

// const domEvents = new THREEx.DomEvents(camera, renderer.domElement);

// Function for Level1 Slide 2
// Indicate Cap
// Less Selection
function l4Slide2() {
  soundRoundChange.pause()
  RoundChangeMusic(AudioLess)
  isAudioLess = true
  console.log("slide 2 checking", isAudioLess);


  // RMoreAudio = true
  // scene.remove(planeReplyAudio)
  // RoundAudio = true
  // if (RoundAudio == true) {
  // replyAudio(AudioLess)
  // replyAudioLess(AudioLess)
  // }

  // if (L4Complete == false) {
  // scene.remove(planeText) // active
  // LessText = true  // active
  // roundText(LessImg) // active
  // if (MoreText == true) {
  //   roundText(MoreImg)
  // }
  // else {
  //   scene.remove(planeText);
  // }

  // }
  // domRemoveEvents.removeEventListener(planeS1LHS, 'mouseover', false)
  console.log("Slide 2 Function Working")
  // S1Cor = false
  headerProgress(l4PS1)    // Change Progressbar Image

  // if (planeS1LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS1LHS.visible = false
  //   planeS1RHS.visible = false
  // }

  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS2LHS = new THREE.TextureLoader();
  loadS2LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S2LHS, // Shirt

    function (textureS2LHS) {
      // PM:- planeMaterial
      var PM_S2LHS = new THREE.MeshBasicMaterial({
        map: textureS2LHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S2LHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      planeS2LHS = new THREE.Mesh(PG_S2LHS, PM_S2LHS);
      scene.add(planeS2LHS);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS2LHS.position.x = SXIPosLHS   // Working
      planeS2LHS.position.y = SYIPosLHS   // Working
      // planeS1LHS.position.z = 1

      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS2LHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true

        if (dblClick == true) {
          planeWrongAnsS2.visible = false
        }
      })


      // Add onClick Event Here - Wrong Answer
      if (AnsS2Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS2LHS, 'click', function (event) {
          if (AnsS2Cor == false) {
            console.log("Wrong Answer S2")

            // domEvents.removeEventListener(planeS1LHS, 'click', false)
            isLHSWro = true


            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS2LHS, 'click', false) // active
            AnsS2Cor = true

            // onClickAnswerCheck(S1R, S1L) // (more, less)
            // onClickAnswerCheck(S1L, S1R) // (less, more)
            // WrongAnswer()


            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus)

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

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
                  // console.log("LHS Function Executed");
                  var PM_S2LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureS2LHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  // var PG_S1LHS_Ans = new THREE.PlaneBufferGeometry(2.1, 2.1);
                  var PG_S2LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  // console.log("check for plane size planeGeometryRHS", planeGeometryRHS)
                  planeWrongAnsS2 = new THREE.Mesh(PG_S2LHS_Ans, PM_S2LHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  scene.add(planeWrongAnsS2);
                  // planeWrongAns.position.x = -1.2
                  // planeWrongAns.position.y = -0.7
                  planeWrongAnsS2.position.x = SXIPosLHS    // Working
                  planeWrongAnsS2.position.y = SYIPosLHS    // Working

                  // Hide Red Border Af
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

  //  ------------------------  Working  --------------------------
  // Correct        
  const loadS2RHS = new THREE.TextureLoader();
  loadS2RHS.load(
    // 2nd URL
    S2RHS, // Shirt

    function (textureS2RHS) {
      var PM_S2RHS = new THREE.MeshBasicMaterial({
        map: textureS2RHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S2RHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      planeS2RHS = new THREE.Mesh(PG_S2RHS, PM_S2RHS);
      scene.add(planeS2RHS);
      // planeS1RHS.position.x = 1.2
      // planeS1RHS.position.y = -0.7
      planeS2RHS.position.x = SXIPosRHS   // Working
      planeS2RHS.position.y = SYIPosRHS   // Working

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS2Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS2RHS, 'click', function (event) {
          if (AnsS2Cor == false) {
            console.log("Correct Answer S2")
            S1Cor = false
            S2Cor = true
            AnsS2Cor = true


            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS2RHS, 'click', false)

            setTimeout(() => {

              scene.remove(planeS2LHS, planeS2RHS);
            }, 1000);

            // domEvents.removeEventListener(planeS1RHS, 'click', false)
            // planeS1RHS.removeEventListener('click', console.log("RHS S1"))
            // planeS1LHS.removeEventListener('click', console.log("LHS S1"))

            // scene.remove(planeS1LHS, planeS1RHS);
            // planeS1LHS.geometry.dispose();
            // planeS1LHS.material.dispose();
            // // planeCorrectAns.material.dispose();
            // planeS1LHS = undefined;

            // planeS1RHS.geometry.dispose();
            // planeS1RHS.material.dispose();
            // // planeWrongAns.material.dispose();
            // planeS1RHS = undefined;

            isRHSCor = true

            // Call This FunctionFor Check Correct and Incorrect Answer
            // onClickAnswerCheck(S1L, S1R)
            // onClickAnswerCheck(S1R, S1L) // (more, less)
            // CorrectAnswer()

            // // // -----------------------------------------------------------------------
            // // Remove Plane EventListner Here
            // // var planeS1All = planeS1RHS, planeS1LHS
            // domEvents.removeEventListener(planeS1RHS, 'click', false)
            // // domEvents.removeEventListener(planeS1LHS, 'mouseover', false)
            // // // -----------------------------------------------------------------------

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false
              // console.log("Green Highlight Active");

              S2Cor = true

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
              const loadS2RHS_Ans = new THREE.TextureLoader();
              loadS2RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S2RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  // var PG_S1RHS_Ans = new THREE.PlaneBufferGeometry(2.1, 2.1);
                  var PG_S2RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  // console.log("check for plaen size planeGeometryRHS", planeGeometryRHS)
                  // planeRHSMainGreen = new THREE.Mesh(planeGeometryRHS, planeMaterialRHS);
                  planeCorrectAnsS2 = new THREE.Mesh(PG_S2RHS_Ans, PM_S2RHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  scene.add(planeCorrectAnsS2);
                  // planeCorrectAns.position.x = 1.2
                  // planeCorrectAns.position.y = -0.7
                  planeCorrectAnsS2.position.x = SXIPosRHS  // Working
                  planeCorrectAnsS2.position.y = SYIPosRHS  // Working

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
        MoreText = false
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

// Function for Level1 Slide 3
// Indicate Hat
// Less RHS Right
function l4Slide3() {
  soundRoundChange.pause()
  RoundChangeMusic(AudioMore)
  isAudioLess = false
  console.log("slide 3 checking", isAudioLess);

  // scene.remove(planeText)
  // MoreText = true
  // roundText(MoreImg)
  // console.log("Slide 3 Function Working")
  headerProgress(l4PS2)    // Change Progressbar Image

  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS3LHS = new THREE.TextureLoader();
  loadS3LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S3LHS,  // Hat Img

    function (textureS3LHS) {
      // PM:- planeMaterial
      var PM_S3LHS = new THREE.MeshBasicMaterial({
        map: textureS3LHS,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_S3LHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      planeS3LHS = new THREE.Mesh(PG_S3LHS, PM_S3LHS);
      scene.add(planeS3LHS);
      planeS3LHS.position.x = SXIPosLHS
      planeS3LHS.position.y = SYIPosLHS
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

            AnsS3Cor = true
            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS3LHS, 'click', false) // active

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);
            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
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
                  });

                  //Create a 2x2 plane with texture
                  var PG_S3LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeWrongAnsS3 = new THREE.Mesh(PG_S3LHS_Ans, PM_S3LHS_Ans);
                  scene.add(planeWrongAnsS3);
                  planeWrongAnsS3.position.x = SXIPosLHS
                  planeWrongAnsS3.position.y = SYIPosLHS

                  // Hide Worng Answer

                  setTimeout(() => {
                    planeWrongAnsS3.visible = false
                    AnsS3Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                  }, 700);

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
  // Correct      
  const loadS3RHS = new THREE.TextureLoader();
  loadS3RHS.load(
    S3RHS,   // Hat

    function (textureS3RHS) {
      var PM_S3RHS = new THREE.MeshBasicMaterial({
        map: textureS3RHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S3RHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      planeS3RHS = new THREE.Mesh(PG_S3RHS, PM_S3RHS);
      scene.add(planeS3RHS);
      planeS3RHS.position.x = SXIPosRHS
      planeS3RHS.position.y = SYIPosRHS

      S3Cor = true

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS3Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS3RHS, 'click', function (event) {
          if (AnsS3Cor == false) {
            console.log("Correct Answer S3")
            AnsS3Cor = true
            // Check Green Highlight Status
            // console.log("GreenStatus onClick:- ", planeGreenStatus);
            S3Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS3RHS, 'click', false)
            // AnsS2Cor = true

            setTimeout(() => {
              scene.remove(planeS3LHS, planeS3RHS)
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true
            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false
              // console.log("Green Highlight Active");

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // call Skip Function Here  after some time limit
              // setTimeout(gPlayTshirtSkip(), 5000)

              // Load RHS Image Here
              const loadS3RHS_Ans = new THREE.TextureLoader();
              loadS3RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  var PM_S3RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });
                  //Create a 2x2 plane with texture
                  var PG_S3RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS3 = new THREE.Mesh(PG_S3RHS_Ans, PM_S3RHS_Ans);
                  scene.add(planeCorrectAnsS3);
                  planeCorrectAnsS3.position.x = SXIPosRHS
                  planeCorrectAnsS3.position.y = SYIPosRHS

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
      console.error('An error happened in RHS Image.');
    }
  );

  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
}

// Function for Level1 Slide 4
// Indicate Red Ball
// More RHS Right
function l4Slide4() {
  soundRoundChange.pause()
  RoundChangeMusic(AudioLess)
  isAudioLess = true
  console.log("slide 4 checking", isAudioLess);
  // scene.remove(planeText)
  // LessText = true
  // roundText(LessImg)
  // console.log("Slide 4 Function Working")
  headerProgress(l4PS3)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS3LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS3LHS.visible = false
  //   planeS3RHS.visible = false
  // }
  //  ------------------------  Working  --------------------------
  // Wrong
  const loadS4LHS = new THREE.TextureLoader();
  loadS4LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S4LHS,  // Red Ball Img

    function (textureS4LHS) {
      // PM:- planeMaterial
      // PM_LHS Global Name For All
      var PM_LHS = new THREE.MeshBasicMaterial({
        map: textureS4LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      // PG:- planeGerometry
      var PG_LHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      planeS4LHS = new THREE.Mesh(PG_LHS, PM_LHS);
      scene.add(planeS4LHS);
      planeS4LHS.position.x = SXIPosLHS
      planeS4LHS.position.y = SYIPosLHS
      // planeS1LHS.position.z = 1

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
      console.log("AnsS4Cor out-", AnsS4Cor);
      if (AnsS4Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS4LHS, 'click', function (event) {
          console.log("AnsS4Cor in1-", AnsS4Cor);
          if (AnsS4Cor == false) {
            console.log("AnsS4Cor in2-", AnsS4Cor);
            console.log("Wrong Answer S4")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS4LHS, 'click', false) // active
            AnsS4Cor = true

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundReplyAudio('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS4LHS_Ans = new THREE.TextureLoader();
              loadS4LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  // console.log("LHS Function Executed");
                  // PM_LHS_Ans Global Name for All
                  var PM_LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  // console.log("check for plane size planeGeometryRHS", planeGeometryRHS)
                  planeWrongAnsS4 = new THREE.Mesh(PG_LHS_Ans, PM_LHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  scene.add(planeWrongAnsS4);
                  planeWrongAnsS4.position.x = SXIPosLHS
                  planeWrongAnsS4.position.y = SYIPosLHS

                  // Hide Worng Answer
                  setTimeout(() => {
                    planeWrongAnsS4.visible = false
                    AnsS4Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                  }, 700);

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

  //  ------------------------  Working  --------------------------
  // Correct       
  const loadS4RHS = new THREE.TextureLoader();
  loadS4RHS.load(
    S4RHS,   // Red Ball

    function (textureS4RHS) {
      var PM_RHS = new THREE.MeshBasicMaterial({
        map: textureS4RHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_RHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      planeS4RHS = new THREE.Mesh(PG_RHS, PM_RHS);
      scene.add(planeS4RHS);
      planeS4RHS.position.x = SXIPosRHS
      planeS4RHS.position.y = SYIPosRHS

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS4Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS4RHS, 'click', function (event) {
          if (AnsS4Cor == false) {
            AnsS4Cor = true
            console.log("Correct Answer S4")

            S4Cor = true
            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS4RHS, 'click', false)
            // AnsS2Cor = true

            setTimeout(() => {
              scene.remove(planeS4LHS, planeS4RHS)
            }, 1000);

            // Check Green Highlight Status
            // console.log("GreenStatus onClick:- ", planeGreenStatus);

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

                function (textureRHS_Ans) {
                  var PM_RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });
                  //Create a 2x2 plane with texture
                  var PG_RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS4 = new THREE.Mesh(PG_RHS_Ans, PM_RHS_Ans);
                  scene.add(planeCorrectAnsS4);
                  planeCorrectAnsS4.position.x = SXIPosRHS
                  planeCorrectAnsS4.position.y = SYIPosRHS

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

          }
        }, false)
      }
      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
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
// Less RHS Right
function l4Slide5() {
  soundRoundChange.pause()
  RoundChangeMusic(AudioMore)
  isAudioLess = false
  console.log("slide 5 checking", isAudioLess);
  // scene.remove(planeText)
  // MoreText = true
  // roundText(MoreImg)
  // console.log("Slide 5 Function Working")
  headerProgress(l4PS4)    // Change Progressbar Image

  //  ------------------------  LHS  --------------------------
  // Wrong
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
      var PG_LHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
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
          planeWrongAnsS5.visible = false

          //Render the scene
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
        }
      })

      // Add onClick Event Here - Wrong Answer
      if (AnsS5Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS5LHS, 'click', function (event) {
          if (AnsS5Cor == false) {
            console.log("Wrong Answer S5")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS5LHS, 'click', false) // active
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

                function (textureLHS_Ans) {
                  var PM_LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeWrongAnsS5 = new THREE.Mesh(PG_LHS_Ans, PM_LHS_Ans);
                  scene.add(planeWrongAnsS5);
                  planeWrongAnsS5.position.x = SXIPosLHS
                  planeWrongAnsS5.position.y = SYIPosLHS

                  // Hide Worng Answer
                  setTimeout(() => {
                    planeWrongAnsS5.visible = false
                    AnsS5Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                  }, 700);

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
  // Correct       
  const loadS5RHS = new THREE.TextureLoader();
  loadS5RHS.load(
    S5RHS,   // Red Ball

    function (textureS5RHS) {
      var PM_RHS = new THREE.MeshBasicMaterial({
        map: textureS5RHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_RHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      planeS5RHS = new THREE.Mesh(PG_RHS, PM_RHS);
      scene.add(planeS5RHS);
      planeS5RHS.position.x = SXIPosRHS
      planeS5RHS.position.y = SYIPosRHS

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS5Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS5RHS, 'click', function (event) {
          if (AnsS5Cor == false) {
            console.log("Correct Answer S5")
            AnsS5Cor = true

            // S4Cor = false
            S5Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS5RHS, 'click', false)
            // AnsS2Cor = true

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
              soundAnsCheck(right_ans_sound)

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
                  scene.add(planeCorrectAnsS5);
                  planeCorrectAnsS5.position.x = SXIPosRHS
                  planeCorrectAnsS5.position.y = SYIPosRHS

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
// Less LHS Right
function l4Slide6() {
  soundRoundChange.pause()
  RoundChangeMusic(AudioLess)
  isAudioLess = true
  console.log("slide 6 checking", isAudioLess);
  // scene.remove(planeText)
  // LessText = true
  // roundText(LessImg)

  planeCorrectAnsS5.visible = false
  // console.log("Slide 6 Function Working")
  headerProgress(l4PS5)    // Change Progressbar Image

  // // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS5LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS5LHS.visible = false
  //   planeS5RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Correct
  const loadS6LHS = new THREE.TextureLoader();
  loadS6LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S6LHS,  // goggles

    function (textureS6LHS) {
      var PM_LHS = new THREE.MeshBasicMaterial({
        map: textureS6LHS,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_LHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      planeS6LHS = new THREE.Mesh(PG_LHS, PM_LHS);
      scene.add(planeS6LHS);
      planeS6LHS.position.x = SXIPosLHS
      planeS6LHS.position.y = SYIPosLHS
      // planeS1LHS.position.z = 1

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS6Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS6LHS, 'click', function (event) {
          if (AnsS6Cor == false) {
            console.log("Correct Answer S6")
            AnsS6Cor = true
            S6Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS6LHS, 'click', false)
            // AnsS2Cor = true

            setTimeout(() => {
              scene.remove(planeS6LHS, planeS6RHS)
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // call Skip Function Here  after some time limit
              // setTimeout(gPlayTshirtSkip(), 5000)

              // Load RHS Image Here
              const loadS6RHS_Ans = new THREE.TextureLoader();
              loadS6RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  var PM_RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });
                  //Create a 2x2 plane with texture
                  var PG_RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS6 = new THREE.Mesh(PG_RHS_Ans, PM_RHS_Ans);
                  scene.add(planeCorrectAnsS6);
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
      });

      //Create a 2x2 plane with texture
      var PG_RHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
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

                function (textureLHS_Ans) {
                  // console.log("LHS Function Executed");
                  // PM_LHS_Ans Global Name for All
                  var PM_LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  // console.log("check for plane size planeGeometryRHS", planeGeometryRHS)
                  planeWrongAnsS6 = new THREE.Mesh(PG_LHS_Ans, PM_LHS_Ans);
                  // console.log("planeRHS", planeRHS)
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
                  }, 700);

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
// More RHS Right
function l4Slide7() {
  soundRoundChange.pause()
  RoundChangeMusic(AudioMore)
  isAudioLess = false
  console.log("slide 7 checking", isAudioLess);
  // scene.remove(planeText)
  // MoreText = true
  // roundText(MoreImg)
  // console.log("Slide 7 Function Working")
  headerProgress(l4PS6)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS6LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS6LHS.visible = false
  //   planeS6RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS7LHS = new THREE.TextureLoader();
  loadS7LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S7LHS,  // goggles

    function (textureS7LHS) {
      var PM_LHS = new THREE.MeshBasicMaterial({
        map: textureS7LHS,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_LHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      planeS7LHS = new THREE.Mesh(PG_LHS, PM_LHS);
      scene.add(planeS7LHS);
      planeS7LHS.position.x = SXIPosLHS
      planeS7LHS.position.y = SYIPosLHS

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

                function (textureLHS_Ans) {
                  var PM_LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeWrongAnsS7 = new THREE.Mesh(PG_LHS_Ans, PM_LHS_Ans);
                  scene.add(planeWrongAnsS7);
                  planeWrongAnsS7.position.x = SXIPosLHS
                  planeWrongAnsS7.position.y = SYIPosLHS

                  // Hide Worng Answer
                  setTimeout(() => {
                    planeWrongAnsS7.visible = false
                    AnsS7Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                  }, 700);

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
  // Correct       
  const loadS7RHS = new THREE.TextureLoader();
  loadS7RHS.load(
    S7RHS,   // goggles

    function (textureS7RHS) {
      var PM_RHS = new THREE.MeshBasicMaterial({
        map: textureS7RHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_RHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      planeS7RHS = new THREE.Mesh(PG_RHS, PM_RHS);
      scene.add(planeS7RHS);
      planeS7RHS.position.x = SXIPosRHS
      planeS7RHS.position.y = SYIPosRHS

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS7Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS7RHS, 'click', function (event) {
          if (AnsS7Cor == false) {
            console.log("Correct Answer S7")
            AnsS7Cor = true
            S7Cor = true
            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS7RHS, 'click', false)
            // AnsS2Cor = true

            setTimeout(() => {
              scene.remove(planeS7LHS, planeS7RHS)
            }, 1000);

            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false

              //For Correct Answer Audio
              // soundReplyAudio('../Sounds/Global_Music/Music/For correct answer.mp3')
              soundAnsCheck(right_ans_sound)

              // call Skip Function Here  after some time limit
              // setTimeout(gPlayTshirtSkip(), 5000)

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
                    // visible: false 
                  });
                  //Create a 2x2 plane with texture
                  var PG_RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS7 = new THREE.Mesh(PG_RHS_Ans, PM_RHS_Ans);
                  scene.add(planeCorrectAnsS7);
                  planeCorrectAnsS7.position.x = SXIPosRHS
                  planeCorrectAnsS7.position.y = SYIPosRHS

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
      console.error('An error happened in RHS Image.');
    }
  );

  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
}

// Function for Level1 Slide 8
// Indicate Pants
// Less RHS Right
function l4Slide8() {
  soundRoundChange.pause()
  RoundChangeMusic(AudioLess)
  isAudioLess = true
  console.log("slide 8 checking", isAudioLess);
  // scene.remove(planeText)
  // LessText = true
  // roundText(LessImg)
  // console.log("Slide 8 Function Working")
  headerProgress(l4PS7)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS7LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS7LHS.visible = false
  //   planeS7RHS.visible = false
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
      var PG_LHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      planeS8LHS = new THREE.Mesh(PG_LHS, PM_LHS);
      scene.add(planeS8LHS);
      planeS8LHS.position.x = SXIPosLHS
      planeS8LHS.position.y = SYIPosLHS

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS8Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS8LHS, 'click', function (event) {
          if (AnsS8Cor == false) {
            AnsS8Cor = true
            console.log("Correct Answer S8")

            S8Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS8RHS, 'click', false)
            // AnsS2Cor = true

            setTimeout(() => {
              scene.remove(planeS8LHS, planeS8RHS)
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

                function (textureRHS_Ans) {
                  var PM_RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });
                  //Create a 2x2 plane with texture
                  var PG_RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS8 = new THREE.Mesh(PG_RHS_Ans, PM_RHS_Ans);
                  scene.add(planeCorrectAnsS8);
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
      });

      //Create a 2x2 plane with texture
      var PG_RHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
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
                  }, 700);

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
// Indicate Bats
// Less LHS Right
function l4Slide9() {
  soundRoundChange.pause()
  RoundChangeMusic(AudioMore)
  isAudioLess = false
  console.log("slide 9 checking", isAudioLess);
  // scene.remove(planeText)
  // MoreText = true
  // roundText(MoreImg)
  // console.log("Slide 9 Function Working")
  headerProgress(l4PS8)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS8LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS8LHS.visible = false
  //   planeS8RHS.visible = false
  // }
  //  ------------------------  Working  --------------------------
  // Correct
  const loadS9LHS = new THREE.TextureLoader();
  loadS9LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S9LHS,  // bats

    function (textureS9LHS) {
      var PM_LHS = new THREE.MeshBasicMaterial({
        map: textureS9LHS,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_LHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      planeS9LHS = new THREE.Mesh(PG_LHS, PM_LHS);
      scene.add(planeS9LHS);
      planeS9LHS.position.x = SXIPosLHS
      planeS9LHS.position.y = SYIPosLHS

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS9Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS9LHS, 'click', function (event) {
          if (AnsS9Cor == false) {
            console.log("Correct Answer S9")
            AnsS9Cor = true
            S9Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS9LHS, 'click', false)
            // AnsS2Cor = true

            setTimeout(() => {
              scene.remove(planeS9LHS, planeS9RHS)
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

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                    // visible: false 
                  });
                  //Create a 2x2 plane with texture
                  var PG_RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS9 = new THREE.Mesh(PG_RHS_Ans, PM_RHS_Ans);
                  scene.add(planeCorrectAnsS9);
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
    S9RHS,   // bats

    function (textureS8RHS) {
      var PM_RHS = new THREE.MeshBasicMaterial({
        map: textureS8RHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_RHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
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
            // scene.remove(planeText)

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
                  }, 700);

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
// More RHS Right
function l4Slide10() {
  soundRoundChange.pause()
  RoundChangeMusic(AudioMore)
  isAudioLess = false
  console.log("slide 10 checking", isAudioLess);
  // scene.remove(planeText)
  // MoreText = true
  // roundText(MoreImg)
  // console.log("Slide 10 Function Working")
  headerProgress(l4PS9)    // Change Progressbar Image


  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS9LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS9LHS.visible = false
  //   planeS9RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS10LHS = new THREE.TextureLoader();
  loadS10LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S10LHS,  // bats

    function (textureS10LHS) {
      var PM_LHS = new THREE.MeshBasicMaterial({
        map: textureS10LHS,
        transparent: true,
      });

      //Create a 2x2 plane with texture
      var PG_LHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
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
          planeWrongAnsS10.visible = false

          //Render the scene
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
        }
      })

      // Add onClick Event Here - Wrong Answer
      if (AnsS10Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS10LHS, 'click', function (event) {
          if (AnsS10Cor == false) {

            console.log("Wrong Answer S10")

            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS10LHS, 'click', false) // active
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
                  planeWrongAnsS10.position.x = SXIPosLHS
                  planeWrongAnsS10.position.y = SYIPosLHS

                  // Hide Worng Answer
                  setTimeout(() => {
                    planeWrongAnsS10.visible = false
                    AnsS10Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                  }, 700);

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
  // Correct       
  const loadS10RHS = new THREE.TextureLoader();
  loadS10RHS.load(
    S10RHS,   // bats

    function (textureS10RHS) {
      var PM_RHS = new THREE.MeshBasicMaterial({
        map: textureS10RHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_RHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      planeS10RHS = new THREE.Mesh(PG_RHS, PM_RHS);
      scene.add(planeS10RHS);
      planeS10RHS.position.x = SXIPosRHS
      planeS10RHS.position.y = SYIPosRHS

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS10Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS10RHS, 'click', function (event) {
          if (AnsS10Cor == false) {
            console.log("Correct Answer Click")

            AnsS10Cor = true
            S10Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS10RHS, 'click', false)
            // AnsS2Cor = true

            setTimeout(() => {
              scene.remove(planeS10LHS, planeS10RHS)
            }, 700);


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

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });
                  //Create a 2x2 plane with texture
                  var PG_RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS10 = new THREE.Mesh(PG_RHS_Ans, PM_RHS_Ans);
                  scene.add(planeCorrectAnsS10);
                  planeCorrectAnsS10.position.x = SXIPosRHS
                  planeCorrectAnsS10.position.y = SYIPosRHS

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
            // // Only Put Image Path emty For remove Red and Green Border
            // ErrorBorder = ""
            // SuccessBorder = ""

          }
          LessImg = ""
          // scene.remove(planeText)
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

        // S1LHS = ""
        // S1RHS = ""
        // S2LHS = ""
        // S2RHS = ""
        // S3LHS = ""
        // S3RHS = ""
        // S4LHS = ""
        // S4RHS = ""
        // S5LHS = ""
        // S5RHS = ""
        // S6LHS = ""
        // S6RHS = ""
        // S7LHS = ""
        // S7RHS = ""
        // S8LHS = ""
        // S8RHS = ""
        // S9LHS = ""
        // S9RHS = ""
        // S10LHS = ""
        // S10RHS = ""

        // Call Level4 Complete
        // levelFourComplete()

        // ------------------------------------------------------------------------
        // var level4_Pre = localStorage.getItem('level4_Pre')
        // var level4_Pre_val = JSON.parse(level4_Pre)
        // // console.log("L2_Pre:-", level2_Pre_val)
        // if (level4_Pre_val == false) {

        //   // document.location.href = '/level2_Pre.html'
        //   // window.location.replace(`${endPoint}/level2_Pre.html`);
        //   window.location.replace(`/level4_Pre.html`);

        // } else {
        //   // document.location.href = '/level2.html'
        //   window.location.replace(`/level4.html`);
        // }
        // ------------------------------------------------------------------------

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
function levelFourComplete() {
  scene.remove(planeReplyAudio)
  isAudiReplyplay = false   // For Remove click event from audio reply button

  LevelCompleteSound('../Sounds/Global_Music/GL_A_3.mp3')

  scene.remove(planeText)
  // level4Complete = true
  // L4Complete = true
  // MoreImg = ""
  // LessImg = ""
  // roundText()
  setTimeout(() => {
    RewardShow()
  }, 200);


  scene.remove(meshText)
  // headerReward(RewardEndImg) // Active
  newrewardPoints = localStorage.setItem('RewardPoints', getRewardData + 10)
  // getNewRewardPoints = localStorage.getItem('RewardPoints')
  getRewardData = localStorage.getItem('RewardPoints')
  // console.log("newrewardPoints End", getRewardData);
  RewardPoints(getRewardData)

  // !roundText()
  // rewardmove()

  // Error Correct Sound Stop
  ErrCorSoundStop = true

  console.log("level 4 Complete");
  headerProgress(l4PS10)    // Change Progressbar Image
  // headerReward(RewardEndImg)

  // Hide White Box
  planeLHSMain.visible = false
  planeRHSMain.visible = false

  // if (planeS10LHS.visible == true) {
  //   console.log(" This is Visible")
  //   planeS10LHS.visible = false
  //   planeS10RHS.visible = false

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
      var PG_Again = new THREE.PlaneBufferGeometry(0.90, 0.70);
      planeLFCLHS = new THREE.Mesh(PG_Again, PM_Again);
      scene.add(planeLFCLHS);
      planeLFCLHS.position.x = -1
      // planeLFCLHS.position.y = -0.4
      planeLFCLHS.position.y = -0.3
      // planeLFCLHS.position.z = 1

      // OnClick Event For planeLHS
      const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
      domEvents.addEventListener(planeLFCLHS, 'click', function (event) {
        // console.log("planeLFCLHS clicked")
        localStorage.setItem('level4Complete', true)

        // window.location.href = "/level4.html"
        var currentPath = `${endPoint}/level4.html`

        if (currentPath == `${endPoint}/level4.html`) {
          console.log("Redirect New Page")
          console.log("endPoint", endPoint)
          location.href = '/level4.html'
        } else {
          location.href = '/level4.html'
        }
        // planeLZCLHS.dispose

        // Only Remove but Button is Active after this event perform
        // scene.remove(planeLFCLHS, planeLFCRHS);

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
    // playNext,
    newGame,

    function (texturePlayNext) {
      var PM_Next = new THREE.MeshBasicMaterial({
        map: texturePlayNext,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      // var PG_Next = new THREE.PlaneBufferGeometry(0.80, 0.80);
      var PG_Next = new THREE.PlaneBufferGeometry(1, 0.70);
      planeLFCRHS = new THREE.Mesh(PG_Next, PM_Next);
      scene.add(planeLFCRHS);
      planeLFCRHS.position.x = 1
      // planeLFCRHS.position.y = -0.4
      planeLFCRHS.position.y = -0.3
      // planeLFCRHS.position.z = 1

      // // OnClick Event For planeLHS
      const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
      domEventsInnerLHS.addEventListener(planeLFCRHS, 'click', function (event) {
        console.log("Play the next level clicked")
        localStorage.setItem('level4Complete', true)

        // location.href = 'level1_Pre.html'

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


function roundText(path) {
  // if (level4Complete == false) {
  //   roundImg = ""
  // }
  if (MoreText == true) {
    // MoreText = false
    console.log("roundtext m;:-", MoreText);
    if (L4Complete == false) {
      roundImg = MoreImg
    }
  }
  if (LessText == true) {
    LessText = false
    if (L4Complete == false) {
      roundImg = LessImg
    }
  }

  // Load Text Image For More and Less
  const loadText = new THREE.TextureLoader();
  loadText.load(
    // "../asset/Image place holder.png",
    // WhiteBox,
    roundImg,

    function (textureText) {
      // console.log("LHS Function Executed");
      var PM_Text = new THREE.MeshBasicMaterial({
        map: textureText,
        transparent: true,
      });

      // var PM_Text = new THREE.TextGeometry("Test");
      var PG_Text = new THREE.PlaneBufferGeometry(0.7, 0.3);
      planeText = new THREE.Mesh(PG_Text, PM_Text);
      // if (MoreText == true) {
      scene.add(planeText);
      // }
      planeText.position.x = -1.4
      planeText.position.y = 1.5
      planeText.position.z = 1

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    // undefined,
    function (err) {
      console.error('An error happened in RHS Image.');
    }

  );
  // MoreText = false

  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);

}


// Function For Display Canvas
function init() {
  // console.clear()

  // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3');
  // playAudio('../Sounds/level0_sounds/backgroud_music_free.mp3');

  // gPlayTshirt()
  Navbar()
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
    // roundText(MoreImg)
    headerReward(RewardStartImg)
    replyAudio() // working
    RewardPoints(getRewardData)
  }

  // replyAudio()

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
      textureLHS.wrapS = THREE.RepeatWrapping;
      textureLHS.wrapT = THREE.RepeatWrapping;
      // textureLHS.repeat.set( 4, 4 );

      //Create a 2x2 plane with texture
      // var planeGeometryLHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
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
      textureRHS.wrapS = THREE.RepeatWrapping;
      textureRHS.wrapT = THREE.RepeatWrapping;
      // textureLHS.repeat.set( 4, 4 );

      //Create a 2x2 plane with texture
      // var planeGeometryRHS = new THREE.PlaneBufferGeometry(3.6, 3.6);
      var planeGeometryRHS = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
      // console.log("check for plaen size planeGeometryRHS", planeGeometryRHS)
      planeRHSMain = new THREE.Mesh(planeGeometryRHS, planeMaterialRHS);
      // console.log("planeRHS", planeRHS)
      scene.add(planeRHSMain);
      planeRHSMain.position.x = SXIPosRHS
      planeRHSMain.position.y = SYIPosRHS
      // planeRHSMain.position.z = 0


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
  // l4Slide1()

  setTimeout(() => {
    l4Slide1()
  }, 400);

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


// function animate() {
//   renderer.render(scene, camera);
//   animator.animate(); // update the animation
//   requestAnimationFrame(animate);
// }





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