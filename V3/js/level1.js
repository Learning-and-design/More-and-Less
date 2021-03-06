
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';
// import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
// console.log("Level 1 file Working")
// import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'
console.log("Level 1")
// console.log("06-04 Updated File L1");
console.log("New 23/04")


// Reload page on Page visit
// location.reload();
// window.location.reload()
// ------------------    Working   ------------------------------
// const reloadUsingLocationHash = () => {
//     // window.location.hash = "reload"; // reload return in url
//     window.location.hash = "";
// }
// window.onload = reloadUsingLocationHash();
// -------------------------------------------------------------

// Set Round Data to local Storage
var setItemLocal
var rNum = 0
// roundUpdate()
// function roundUpdate(rNum) {
//     var roundData = {
//         //rNum = Round Number
//         level1Rounds: rNum
//     }
//     setItemLocal = localStorage.setItem('level1Rounds', JSON.stringify(roundData))
// }

// Set Data To LocalStorage
// console.log("localStorage Data:- ", localStorage)
// console.log("localStorage Data:- ", localStorage.levelData)
// console.log("localStorage Keys:- ",Object.entries(localStorage))
// console.log("localStorage Keys:- ",localStorage.getItem())

setItemLocal = localStorage.setItem('level0', false)
setItemLocal = localStorage.setItem('level1', true)
setItemLocal = localStorage.setItem('level2', false)
setItemLocal = localStorage.setItem('level3', false)
setItemLocal = localStorage.setItem('level4', false)
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
const canvas = document.querySelector('.level1');
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
var renderer = new THREE.WebGLRenderer({
  canvas,
  // canvasPopup,
  alpha: true,
  antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(winWidth, winHeight);
// renderer.setSize(window.innerHeight, window.innerWidth);
// console.log("window.innerWidth, window.innerHeight",window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Render Scene and Camera  - Global
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement);

// // Resize the Screen  - Global
// window.addEventListener('resize', function () {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   // camera.aspect = window.innerHeight / window.innerWidth;   // For Testing
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


// // Set Canvas To Full Screen on Landscap Mode ------ Working but Bug Exist
// if (window.innerHeight > window.innerWidth) {
//   // alert("Please use Landscape!");
//   console.log("Before H:-", window.innerHeight, "W:-", window.innerWidth);
//   var newH = window.innerHeight
//   var newW = window.innerWidth
//   console.log("Please use Landscape!")
//   window.innerWidth = newH
//   window.innerHeight = newW
//   // window.innerWidth = 667
//   console.log("After H:-", window.innerHeight, "W:-", window.innerWidth);

//   // Scene  - Global
//   var scene = new THREE.Scene();

//   // Camera - Global
//   var camera = new THREE.PerspectiveCamera(
//     60,
//     window.innerWidth / window.innerHeight,
//     1,
//     1000
//   );
//   camera.position.set(0, 0, 4);

//   // Renderer - Global
//   var renderer = new THREE.WebGLRenderer({
//     canvas,
//     // canvasPopup,
//     alpha: true,
//     antialias: true,
//   });
//   renderer.setPixelRatio(window.devicePixelRatio);
//   // renderer.setSize(window.innerWidth, window.innerHeight);
//   // renderer.setSize(newW, newH); // New But Not Working Click event
//   renderer.setSize(newH, newW); // New But Not Working Click event
//   camera.updateProjectionMatrix();
//   // console.log("window.innerWidth, window.innerHeight",window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   // Render Scene and Camera  - Global
//   renderer.render(scene, camera)
//   document.body.appendChild(renderer.domElement);

//   // Resize the Screen  - Global
//   window.addEventListener('resize', function () {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     // camera.aspect = window.innerHeight / window.innerWidth;   // For Testing
//     camera.updateProjectionMatrix();
//     // renderer.setSize(window.innerWidth, window.innerHeight)
//     // renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setSize(newH, newW); // New But Not Working Click event

//     // Render Scene and Camera  - Global
//     renderer.render(scene, camera)
//     document.body.appendChild(renderer.domElement);

//   })

//   // GoInFullscreen()
//   // // Full Screen Function
//   // // const canvas = element
//   // function GoInFullscreen(canvas) {
//   //   if (canvas.requestFullscreen)
//   //     canvas.requestFullscreen();
//   //   else if (canvas.mozRequestFullScreen)
//   //     canvas.mozRequestFullScreen();
//   //   else if (canvas.webkitRequestFullscreen)
//   //     canvas.webkitRequestFullscreen();
//   //   else if (canvas.msRequestFullscreen)
//   //     canvas.msRequestFullscreen();
//   // }

//   // /* Get into full screen */
//   // function GoInFullscreen(canvas) {
//   //   if (canvas.requestFullscreen)
//   //     canvas.requestFullscreen();
//   //   else if (canvas.mozRequestFullScreen)
//   //     canvas.mozRequestFullScreen();
//   //   else if (canvas.webkitRequestFullscreen)
//   //     canvas.webkitRequestFullscreen();
//   //   else if (canvas.msRequestFullscreen)
//   //     canvas.msRequestFullscreen();
//   // }

//   // /* Get out of full screen */
//   // function GoOutFullscreen() {
//   //   if (document.exitFullscreen)
//   //     document.exitFullscreen();
//   //   else if (document.mozCancelFullScreen)
//   //     document.mozCancelFullScreen();
//   //   else if (document.webkitExitFullscreen)
//   //     document.webkitExitFullscreen();
//   //   else if (document.msExitFullscreen)
//   //     document.msExitFullscreen();
//   // }

//   // /* Is currently in full screen or not */
//   // function IsFullScreenCurrently() {
//   //   var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;

//   //   // If no element is in full-screen
//   //   if (full_screen_element === null)
//   //     return false;
//   //   else
//   //     return true;
//   // }

//   // $("#go-button").on('click', function () {
//   //   if (IsFullScreenCurrently())
//   //     GoOutFullscreen();
//   //   else
//   //     GoInFullscreen($("#element").get(0));
//   // });

//   // $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function () {
//   //   if (IsFullScreenCurrently()) {
//   //     $("#element span").text('Full Screen Mode Enabled');
//   //     $("#go-button").text('Disable Full Screen');
//   //   }
//   //   else {
//   //     $("#element span").text('Full Screen Mode Disabled');
//   //     $("#go-button").text('Enable Full Screen');
//   //   }
//   // });
// }



// if (window.innerHeight < window.innerWidth) {
//   // alert("Please use Landscape!");
//   console.log("Please use Potrait!")
// }


// document.addEventListener("deviceready", onDeviceReady, false);
// function onDeviceReady() {
//   screen.lockOrientation('landscape'); // or 'portrait'

//   // Render Scene and Camera  - Global
//   renderer.render(scene, camera)
//   document.body.appendChild(renderer.domElement);

//   // Resize the Screen  - Global
//   window.addEventListener('resize', function () {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight)
//   })
// };
// window.scrollTo(0, 0);
// // window.lockOrientationUniversal('landscape');
// locOrientation = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation || screen.orientation.lock;
// locOrientation('landscape');

// Home Button Position
// var PHomeX = -2.8  // Old
// var PHomeX = -3.2  // Active
// var PHomeY = 1.5 // Active
var PHomeX = -3.3
var PHomeY = 1.5
// var PHomeX = -width
// var PHomeY = height

// Back Button Position
// var PBackX = -2.1  // Old
var PBackX = -2.75
var PBackY = 1.5

// Sound Button Position
var PSoundX = 1.7
var PSoundY = 1.5

// Hint Button Position
var PHintX = 2.2
var PHintY = 1.5

// Reward Button Position
var PRewardX = 3
var PRewardY = 1.53

// White Box Size
// var WBPosX = 3 // Old
// var WBPosY = 3 // Old
var WBPosX = 3.6
var WBPosY = 3.1

// var SXIPosLHS = -1.75  // Old
var SXIPosLHS = -1.93
var SYIPosLHS = -0.4

// SXIPosRHS = Slide X Image Position   RHS
// SYIPosRHS = Slide Y Image Position   RHS
// var SXIPosRHS = 1.75  // Old
var SXIPosRHS = 1.93
var SYIPosRHS = -0.4

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
  PBackX = -2.8
  PBackY = 1.5

  // Sound Button Position
  PSoundX = 1.85
  PSoundY = 1.5

  // Hint Button Position
  PHintX = 2.3
  PHintY = 1.5

  // Reward Button Position
  PRewardX = 3.1
  PRewardY = 1.53

  // Reward Points Position
  RewardPointsX = 3.15
  RewardPointsY = 1.4


  SXIPosLHS = -1.93
  SYIPosLHS = -0.4

  // SXIPosRHS = Slide X Image Position   RHS
  // SYIPosRHS = Slide Y Image Position   RHS
  SXIPosRHS = 1.93
  SYIPosRHS = -0.4

  // White Box Position
  WBPosX = 3.4
  WBPosY = 3

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


// // -------------    Active When Delivery to Client  -----------------------------
// var orbitControls
// orbitControls = new OrbitControls(camera, renderer.domElement);
// orbitControls.enableZoom = false;
// orbitControls.enabled = true;
// orbitControls.enablePan = false;
// orbitControls.enableDamping = false;
// orbitControls.autoRotate = true;
// orbitControls.autoRotateSpeed = 10;
// orbitControls.update();
// //  ------------------------------------------------------------------------------


// ------------ Function For Stop Zoom Wothout OrbitControl ----------------------------
// const view = new MapView({
//   container: "viewDiv",
//   map: new EsriMap({
//     basemap: "hybrid"
//   }),
//   center: [174.062376, -39.355675],
//   zoom: 11,
//   // Disable mouse-wheel and single-touch map navigation.
//   navigation: {
//     mouseWheelZoomEnabled: false,
//     browserTouchPanEnabled: false
//   }
// });

// Listen to events that have been disallowed for navigation.
// var view
// view.on("mouse-wheel", () => {
//   // warnUser("To zoom in please double click the map. Use zoom in/out buttons.");
//   console.log("Wheeling")
// });

// document.addEventListener("deviceready",
//   document.ready(function () {
//     document.keydown(function (event) {
//       if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
//         alert('disabling zooming');
//         event.preventDefault();
//         // 107 Num Key  +
//         //109 Num Key  -
//         //173 Min Key  hyphen/underscor Hey
//         // 61 Plus key  +/=
//       }
//     });

//     window.bind('mousewheel DOMMouseScroll', function (event) {
//       if (event.ctrlKey == true) {
//         alert('disabling zooming');
//         event.preventDefault();
//       }
//     });
//   })
//   , false);


// -------------------------------------------------------------------------------------

// window.addEventListener('resize', onWindowResize, false);

// -------------------------- All The Images Of This Level Declare Here ---------------------------------
// NavBar Buttons
var homeBtn = "../asset/logo/Home.png"
var backBtn = "../asset/logo/Back.png"

// var bgMusicBtn = 
var hintBtnActive = "../asset/logo/Hint.png"
var hintBtnInactive = "../asset/logo/Hint_Inactive.png"

// var RewardImg = "../asset/logo/Rewards.png"
// var RewardStartImg = "../asset/logo/Rewards 00.png"   // Level 4 Start Reward
// var RewardStartImg = "../asset/logo/Rewards 0.png"   // Level 4 Start Reward
var RewardStartImg = "../asset/logo/Rewards.png"   // Level 4 Start Reward
var RewardEndImg = "../asset/logo/Rewards 10.png"   // Level 4 End Reward

var bgImg = "../asset/level_one_assets/Backgound.png"   // BackGroud Image
var letsPlay = "../asset/Let's_play.png"    // Let's Play Button

// All Correct Ans Variables
var S1Cor = false, S2Cor = false, S3Cor = false, S4Cor = false, S5Cor = false, S6Cor = false,
  S7Cor = false, S8Cor = false, S9Cor = false, S10Cor = false

// Level 1 Complete Slide Images
var playAgain = "../asset/logo/Play again.png"
var playNext = "../asset/logo/Play the next level.png"

// Error Images
var ErrorBorder = "../asset/level_one_assets/Incorrect answer highlight.png"
var SuccessBorder = "../asset/level_one_assets/Correct answer highlight.png"

// Level 1 Images
// Load Place holder Image - white Box
var WhiteBox = "../asset/Image place holder.png"

// Slide-1 Images
// var S1LHS = "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png"    // 2 Blue Shirts
var S1LHS = "../asset/level_one_assets/Image asset Lone Update/Set 1_2 blue shirts.png"    // 2 Blue Shirts
var S1RHS = "../asset/level_one_assets/Image asset Lone Update/Set 1_10 blue shirts.png"   // 10 Blue Shirts

// Slide-2 Images
var S2LHS = "../asset/level_one_assets/Image asset Lone Update/Set 2_3 caps.png"   // 3 Caps
var S2RHS = "../asset/level_one_assets/Image asset Lone Update/Set 2_8 caps.png"   // 8 Caps

// Slide-3 Images
var S3LHS = "../asset/level_one_assets/Image asset Lone Update/Set 3_2 hats.png"   // 2 Hats
var S3RHS = "../asset/level_one_assets/Image asset Lone Update/Set 3_7 hats.png"   // 7 Hats

// Slide-4 Images
var S4LHS = "../asset/level_one_assets/Image asset Lone Update/Set 4_4 red balls.png"  // 4 Balls Red
var S4RHS = "../asset/level_one_assets/Image asset Lone Update/Set 4_9 red balls.png"  // 9 Balls Red

// Slide-5 Images
var S5LHS = "../asset/level_one_assets/Image asset Lone Update/Set 5_5 balloons.png"  // 5 Balloons
var S5RHS = "../asset/level_one_assets/Image asset Lone Update/Set 5_10 balloons.png"  // 10 Balloons

// Slide-6 Images
var S6LHS = "../asset/level_one_assets/Image asset Lone Update/Set 6_3 goggles.png"  // 3 Goggles
var S6RHS = "../asset/level_one_assets/Image asset Lone Update/Set 6_6 goggles.png"  // 6 Goggles

// Slide-7 Images
var S7LHS = "../asset/level_one_assets/Image asset Lone Update/Set 7_6 pink balls.png"  // 6 Balls Pink
var S7RHS = "../asset/level_one_assets/Image asset Lone Update/Set 7_9 pink balls.png"  // 9 Balls Pink

// Slide-8 Images
var S8LHS = "../asset/level_one_assets/Image asset Lone Update/Set 8_2 trousers.png"  // 2 Trousers
var S8RHS = "../asset/level_one_assets/Image asset Lone Update/Set 8_4 trousers.png"  // 4 Trousers

// Slide-9 Images
var S9LHS = "../asset/level_one_assets/Image asset Lone Update/Set 9_5 bats.png"  // 5 Bats
var S9RHS = "../asset/level_one_assets/Image asset Lone Update/Set 9_6 bats.png"  // 6 Bats

// Slide-10 Images
var S10LHS = "../asset/level_one_assets/Image asset Lone Update/Set 10_9 shoes.png"  // 9 Shoes
var S10RHS = "../asset/level_one_assets/Image asset Lone Update/Set 10_10 shoes.png"  // 10 Shoes


// Load ProgressBar Img
// Main Image
// var progressBarImg = "../asset/Progress_bar/Progress bar_Type_1.png"
var progressBarImg = "../asset/Progress_bar/Updated/Progress bar_level1_start.png"


// Audio Reply Btn Image
var AudioReplyBtnImg = "../asset/logo/Audio_Replay.png"

// Change Image according to round
// var l1PSDemo = "../asset/Progress_bar/Progress_Bar_Type2_element20.png" // Working
var l1PS1 = "../asset/Progress_bar/Updated/Progress bar_Type_1 1.png"
var l1PS2 = "../asset/Progress_bar/Updated/Progress bar_Type_1 2.png"
var l1PS3 = "../asset/Progress_bar/Updated/Progress bar_Type_1 3.png"
var l1PS4 = "../asset/Progress_bar/Updated/Progress bar_Type_1 4.png"
var l1PS5 = "../asset/Progress_bar/Updated/Progress bar_Type_1 5.png"
var l1PS6 = "../asset/Progress_bar/Updated/Progress bar_Type_1 6.png"
var l1PS7 = "../asset/Progress_bar/Updated/Progress bar_Type_1 7.png"
var l1PS8 = "../asset/Progress_bar/Updated/Progress bar_Type_1 8.png"
var l1PS9 = "../asset/Progress_bar/Updated/Progress bar_Type_1 9.png"
var l1PS10 = "../asset/Progress_bar/Updated/Progress bar_Type_1 10.png"

//  -------------------  Global Sound   -------------------
// BackGround Sound
var BGSound = '../Sounds/level0_sounds/backgroud_music_free.mp3'

// Audio reply sound 
var AudioReplaySound = '../Sounds/level1_sounds/ML_A_L1_3.mp3'

// Sound for wrong ans
var wrong_ans_sound = '../Sounds/Global_Music/Music/For the wrong answer.mp3' // Active 30-04
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
var planeLHSMain, planeRHSMain, sound, sound2, listener, listenerBG, storeAudioState;

// Headers Variables
var planeHome, planeBack, planeProgress, planeSound, planeSoundOff, planeHint, planeReward


// LevelOneComplete (LZC) Variables 
var planeLOCLHS, planeLOCRHS;

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

// All Plane LHS and RHS in 1 variable
// var AllPlane = planeS1LHS, planeS1RHS, planeS2LHS, planeS2RHS, planeS3LHS, planeS3RHS,
//     planeS4LHS, planeS4RHS, planeS5LHS, planeS5RHS, planeS6LHS, planeS6RHS, planeS7LHS, planeS7RHS,
//     planeS8LHS, planeS8RHS, planeS9LHS, planeS9RHS, planeS10LHS, planeS10RHS,
//     planeWrongAns, planeWrongAnsS2, planeWrongAnsS3, planeWrongAnsS4, planeWrongAnsS5,
//     planeWrongAnsS6, planeWrongAnsS7, planeWrongAnsS8, planeWrongAnsS9, planeWrongAnsS10,
//     planeCorrectAns, planeCorrectAnsS2, planeCorrectAnsS3, planeCorrectAnsS4, planeCorrectAnsS5,
//     planeCorrectAnsS6, planeCorrectAnsS7, planeCorrectAnsS8, planeCorrectAnsS9, planeCorrectAnsS10


// Remove Eventlistner After function call
// Make 1 Varible For Check Is Play Again Button is Click or not
// Default is False
var isPlayAgain = false, SCom = true, isAudio10Com = false, dblClick = false

//Check Image Status
var musicImgStatus = true, planeReplyAudio, isAudiReplyplay = false, replyAudioBtnSound

var newrewardPoints, getNewRewardPoints, getRewardData, getRewardString, finalReward, meshText

// Global x,y Size For Slide Rounds
// SXIPosLHS = Slide X Image Position   LHS
// SYIPosLHS = Slide Y Image Position   LHS


// Stop All Logs Dispay
console.log = function () { }
console.error = function () { }
console.warn = function () { }



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


// ------------------------------------------------------------------------------------------------------
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
// var controls = new THREE.OrbitControls(camera, renderer.domElement);
// var controls = new OrbitControls(camera, renderer.domElement);

// to disable zoom
// controls.enableZoom = false;
// controls.enablePan = false;
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = true;
// controls.update()


// Call All The Functions Here
// init();
// Call Let's play Button
setTimeout(() => {
  // console.log("SetTime For Let's Play Button")
  firstVisit()
}, 500);


// -------------------------------------------------------------------------------------------
// var loader = new THREE.FontLoader();
// var meshText;

// // requestAnimationFrame(render);

// // function render() {
// //   if (mesh) {
// //     // mesh.rotation.y += 0.01;
// //     // mesh.rotation.z += 0.007;
// //   }
// //   renderer.render(scene, camera);
// //   requestAnimationFrame(render);
// // }
// renderer.render(scene, camera);

// loader.load('https://cdn.rawgit.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json', function (font) {
//   // var geometry = new THREE.TextGeometry('Hello three.js!', {
//   var geometry = new THREE.TextGeometry('10', {
//     font: font,
//     // size: 80,
//     size: 10,
//     height: 5,
//     // curveSegments: 12,
//     // bevelEnabled: true,
//     // bevelThickness: 10,
//     // bevelSize: 8,
//     // bevelSegments: 5
//   });

//   var material = new THREE.MeshLambertMaterial({
//     // color: 0xF3FFE2
//     color: 0xFFFFFF
//     // color: 'white'
//   });
//   // mesh = new THREE.Mesh(geometry, material);
//   meshText = new THREE.Mesh(geometry, material);
//   meshText.position.set(0, 1, 1);
//   meshText.scale.multiplyScalar(0.01)
//   // mesh.castShadow = true;
//   scene.add(meshText);
// });
// -------------------------------------------------------------------------------------------

// ----------------------   Working to Set Image in Cache -----------------------------
// // Store Data in Cache Memory
// let isCacheSupported = "caches" in window;
// const cacheName = "images";
// // const imageUrl = "/assets/c.jpeg";

// Store Data in Cache Memory
// let isCacheSupported = "caches" in window;
// const cacheName = "images";
// const imageUrl = "/assets/c.jpeg";
// loadFromCache()

// Create Image Array Here
// var imageArray = [ErrorBorder, SuccessBorder, right_ans_sound, wrong_ans_sound, S1LHS, S1RHS, S2LHS, S2RHS, S3LHS, S3RHS]
// var imageArray = [ErrorBorder, SuccessBorder]

// caches.open('cacheName').then(cache => {
//   console.log("Image Added");
// })

// // Store Array/Single Images in Cache - Working
// caches.open(cacheName).then(cache => {
//   // cache.add(WhiteBox).then(() => { // Working
//   // cache.add(ErrorBorder).then(() => {  // Working for single image
//   cache.addAll(imageArray).then(() => { // Testing for All Images
//     console.log("Data Added")
//   }).catch(() => {
//     console.log("Image not Found")
//   })
// })

// // Matching Array/Single Images in Cache - Working
// caches.open(cacheName).then(cache => {
//   // cache.match(WhiteBox).then(settings => { // Working
//   // cache.match(ErrorBorder).then(settings => { // Working for single image
//   cache.match(imageArray).then(settings => { // Testing For All Images
//     console.log("Setting-------", settings)
//   })
// })

// // Find All Array Items From cache Working
// caches.open(cacheName).then((cache) => {
//   cache.keys().then((arrayOfRequest) => {
//     console.log("Image Array-------", arrayOfRequest); // [Request,  Request]
//   });
// });

// // Delete All Items From Cache - Working
// caches.delete(cacheName).then(() => {
//   console.log('Cache successfully deleted!');
// })
//  ----------------------------------------------------------------------------


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

        //  ------------------   Working   ----------------------
        // Get Item From Local Storage 
        // var roundData = localStorage.getItem("level1Rounds")
        // var finalData = JSON.parse(roundData).level1Rounds
        // console.log("roundData", finalData)
        //  ------------------------------------------------------

        // Put Switch Condition Here For Goto That Round

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
          // init(finalData);     // call Main Function
          // l1Slide1();    // Direct l1Slide 1 Call
          // console.log("this is true");

          //Level0 Complete
          var level1_Com = localStorage.getItem('level1Complete')
          var level1_Com_val = JSON.parse(level1_Com)
          // console.log("level1_Pre:--------------------------", level0_Com_val)
          if (level1_Com_val == true) {
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
//     // isFirstVisit = true;
//     // insOneLoad = true;  // Display 1st instructor
//     // insTwoLoad = false; // Hide 2nd instructor
//     // Load Image here Start Button 
//     const loadImg2 = new THREE.TextureLoader();
//     loadImg2.load(
//         letsPlay,

//         function (texture2) {
//             var planeMaterial2 = new THREE.MeshBasicMaterial({
//                 map: texture2,
//                 transparent: true,
//                 // visible: false 
//             });

//             //Create a 2x2 plane with texture
//             var planeGeometry2 = new THREE.PlaneBufferGeometry(0.80, 0.80);
//             var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
//             scene.add(plane2);
//             plane2.position.z = 1

//             // OnClick Event For planeLHS
//             const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
//             domEvents.addEventListener(plane2, 'click', function (event) {
//                 // event.preventDefault()
//                 // console.log("plane2 clicked")
//                 // console.log("planeInnerLHS origDomEvent", event.origDomEvent)
//                 // console.log("planeInnerLHS isTrusted", event.origDomEvent.isTrusted)
//                 // var btndisable = event.origDomEvent.isTrusted;
//                 // console.log("btndisable",btndisable);

//                 // // Remove EventListner Here
//                 // domEvents.removeEventListener(plane, 'click', function(e){
//                 //     console.log("remove listner call")
//                 //     domEvents.addEventListener(plane, 'click', function (event) {
//                 //         console.log("Add Listne Again")
//                 //     })
//                 //     // plane.visible = false
//                 // })

//                 if (audioPlayed == true) {
//                     nextAudio = false   // For Reactive Ins-1
//                     // checkBGAudio()
//                     init();     // call Main Function
//                     // console.log("this is true");
//                     plane2.visible = false;

//                     // Comment audio only for testing purpose
//                     // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
//                     // btndisable = false

//                     // console.log("insOneLoad inside Function", insOneLoad);
//                     // console.log("insTwoLoad inside Function", insTwoLoad);
//                     // isFirstVisit = false

//                     // insOneLoad = false;  // Make instructor 1 invisible
//                     // insTwoLoad = false;  // Make instructor 2 invisible
//                 }
//                 else {
//                     // console.log("btndisable updated", btndisable);
//                 }
//                 // plane.visible = false;    
//             }, false)

//             //Render the scene
//             renderer.render(scene, camera);
//             document.body.appendChild(renderer.domElement);
//         },
//         // undefined,
//         function (err) {
//             console.error('An error happened in LHS Image.');
//         }
//     );
//     // Render Scene and Camera  - Global
//     renderer.render(scene, camera)
//     document.body.appendChild(renderer.domElement);

//     // Resize the Screen  - Global
//     window.addEventListener('resize', function () {
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(window.innerWidth, window.innerHeight)
//     })
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

    // // Stop Current audio
    // switch (path) {
    //   // case '../Sounds/Global_Music/Here_ins_again.mp3':
    //   case AudioPAgain:
    //     console.log("Switch statment work")
    //     sound.pause()
    //     // sound.disconnect()
    //     break;
    //   // case Audio3:
    //   //     console.log("Audio3 Switch");
    //   //     sound.pause()
    //   //     break;
    //   case Audio3:
    //     console.log("Switch statment work")
    //     // if (Slide6Execute == true && isFunc4Active == false) {
    //     //   isFunc4Active = true
    //     // }
    //     isFunc4Active = true
    //     break;
    // }
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

// ---------------------- NavBar Buttons  ----------------------------------
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
      // var planeGeometryHome = new THREE.PlaneBufferGeometry(0.37, 0.37); // Active
      var planeGeometryHome = new THREE.PlaneBufferGeometry(0.37, 0.34);
      planeHome = new THREE.Mesh(planeGeometryHome, planeMaterialHome);
      // planeHome.position.set(-(window.innerWidth) * 1.5, (window.innerHeight) * 0.6, 1)
      // planeHome.position.set(0, 0, 0)
      // planeHome.position.set(-(window.screen.width), (window.innerHeight), 0)
      // planeHome.position.set(-(window.screen.width), (window.screen.height), 1)

      // planeHome.position.set(-window.width, window.screen.height, 1)
      scene.add(planeHome);
      planeHome.position.x = PHomeX
      planeHome.position.y = PHomeY
      planeHome.position.z = 1

      // Testing Position Responsive
      // planeHome.position.x = -2 * (planeHome.position.x / canvas.offsetWidth) - 2.1

      // OnClick Event For planeHome
      const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
      domEvents.addEventListener(planeHome, 'click', function (event) {
        console.log("planeHome clicked")

        var currentPath = `${endPoint}/level1.html`

        if (currentPath == `${endPoint}/level1.html`) {
          console.log("Redirect New Page");
          console.log("endPoint", endPoint);
          document.location.href = '/homePopup.html'
        } else {
          document.location.href = '/homePopup.html'
        }

        // planeLZCLHS.dispose

        // Only Remove but Button is Active after this event perform
        // scene.remove(planeLZCLHS, planeLZCRHS);


        // firstVisitAgain()
        // homePopup();
        // Redirect to new page onClick - working
        // domEventsLHS.userData = { URL: "http://stackoverflow.com" };
        // window.location.href = '/homePopup.html';

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
      var planeGeometryBack = new THREE.PlaneBufferGeometry(0.37, 0.34);
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
        // Go to Level 1 Gameplay
        // window.location.href = '/level1.html'
        var currentPath = `${endPoint}/level1.html`

        if (currentPath == `${endPoint}/level1.html`) {
          console.log("Redirect New Page");
          console.log("endPoint", endPoint);
          // document.location.href = '/level1.html'
          // window.location.replace(`${endPoint}/level1.html`); // Active
          window.location.replace(`${endPoint}/index.html`);
          // window.location.replace(`/level1Testing.html`);  // Testing


        } else {
          // location.href = '/level1.html'
          // document.location.href = '/level1.html'
          // window.location.replace(`${endPoint}/level1.html`); // Active
          window.location.replace(`${endPoint}/index.html`);
          // window.location.replace(`/level1Testing.html`);  // Testing


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
      // var planeGeometryProgress = new THREE.PlaneBufferGeometry(2, 0.34);
      var planeGeometryProgress = new THREE.PlaneBufferGeometry(2, 0.3);
      planeProgress = new THREE.Mesh(planeGeometryProgress, planeMaterialProgress);
      scene.add(planeProgress);
      planeProgress.position.x = 0
      planeProgress.position.y = 1.52
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
      });
      //Create a 0.30x0.30 plane with texture
      var planeGeometrySound = new THREE.PlaneBufferGeometry(0.37, 0.34);
      planeSound = new THREE.Mesh(planeGeometrySound, planeMaterialSound);
      scene.add(planeSound);
      planeSound.position.x = PSoundX
      planeSound.position.y = PSoundY
      planeSound.position.z = 1

      // Add OnClick event Here
      // Music off When This Event Occurs
      const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
      domEvents.addEventListener(planeSound, 'click', function (event) {
        // console.log("Sound Btn Click")

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
    // console.log("sound off");

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
        var planeGeometrySound = new THREE.PlaneBufferGeometry(0.37, 0.34);
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
    // console.log("sound on");
    const hSoundOn = new THREE.TextureLoader();
    hSoundOn.load(
      // Load Music Image
      "../asset/logo/Music.png",

      function (textureSound) {
        var planeMaterialSound = new THREE.MeshBasicMaterial({
          map: textureSound,
          transparent: true,
        });
        //Create a 0.30x0.30 plane with texture
        var planeGeometrySound = new THREE.PlaneBufferGeometry(0.37, 0.34);
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
      });
      //Create a 0.30x0.30 plane with texture
      var planeGeometryHint = new THREE.PlaneBufferGeometry(0.37, 0.34);
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
        // window.location.href = "/level1_Pre.html"
        var currentPath = `${endPoint}/level1.html`

        if (currentPath == `${endPoint}/level1.html`) {
          console.log("Redirect New Page");
          console.log("endPoint", endPoint);
          location.href = "/level1_Pre.html"
        } else {
          location.href = "/level1_Pre.html"
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
function headerReward(rewardPath) {
  // console.log("Function headerReward");
  const hReward = new THREE.TextureLoader();
  hReward.load(
    // Load Rewards Image
    // RewardImg,
    rewardPath,

    function (textureReward) {
      var planeMaterialReward = new THREE.MeshBasicMaterial({
        map: textureReward,
        transparent: true,
        // visible: false 
      });
      //Create a 0.30x0.30 plane with texture
      // var planeGeometryReward = new THREE.PlaneBufferGeometry(0.80, 0.30);
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


// -------------------------------------------------------------------------

// Check Clicked Answer S1
function AnswerCheckS1() {
  // console.log("Answer Check Function Working")

  S1Cor = false
  // if (S1Cor == true){
  //     S1Cor = false
  // console.log("S1Cor Condition working")

  // if (planeCorrectAns.visible == true) {
  // console.log(" This is Visible S1")
  // planeS1LHS.visible = false
  // planeS1RHS.visible = false
  // console.log("remove before"); 
  // scene.remove(planeWrongAns, planeCorrectAns)
  // planeWrongAns.dispose()
  // planeWrongAns.dispose()
  // console.log("remove after");

  // //Render the scene
  // renderer.render(scene, camera);
  // document.body.appendChild(renderer.domElement);
  // planeCorrectAns.visible = false
  // scene.remove(planeCorrectAns)
  // Noman Change
  // setTimeout(l1Slide2(), 1000)
  // Call Every Slide After 0.7 second
  setTimeout(() => {

    planeCorrectAns.visible = false
  }, 300);
  setTimeout(() => {
    l1Slide2()
    // }, 1000);
  }, 700);
  // setTimeout(() => {
  //   l1Slide2()
  // }, 700);
  // }
}

// Check Clicked Answer S2
function AnswerCheckS2() {
  // if (S2Cor == true){
  //     S2Cor = false
  // console.log("S2Cor Condition working")
  // scene.remove(planeS1LHS, planeS1RHS)
  // scene.overrideMaterial(planeS2LHS, planeS2RHS)
  // if (planeCorrectAnsS2.visible == true) {
  // console.log(" This is Visible S3")
  // planeCorrectAns.visible = false
  // planeCorrectAnsS2.visible = false // active

  // planeS2LHS.visible = false
  // planeS2RHS.visible = false

  // setTimeout(l1Slide3(), 100)
  setTimeout(() => {

    // planeCorrectAns.visible = false
    planeCorrectAnsS2.visible = false
  }, 300);
  setTimeout(() => {
    l1Slide3()
  }, 700);
  // setTimeout(() => {
  //   l1Slide3()
  // }, 700);

  //Render the scene for Update The Values
  // renderer.render(scene, camera);
  // document.body.appendChild(renderer.domElement);
  // }
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
  // console.log(" This is Visible S3")
  // planeCorrectAns.visible = false
  // planeCorrectAnsS2.visible = false
  // planeCorrectAnsS3.visible = false // active

  // planeS3LHS.visible = false
  // planeS3RHS.visible = false

  // setTimeout(l1Slide4(), 1000)
  // l1Slide4()
  setTimeout(() => {

    // planeCorrectAns.visible = false
    planeCorrectAnsS3.visible = false
  }, 300);

  setTimeout(() => {
    // l1Slide2()
    l1Slide4()
  }, 700);
  // setTimeout(() => {
  //   l1Slide4()
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
  // console.log(" This is Visible S4")

  // planeCorrectAns.visible = false
  // planeCorrectAnsS2.visible = false
  // planeCorrectAnsS3.visible = false
  // planeCorrectAnsS4.visible = false // active

  // planeS4LHS.visible = false
  // planeS4RHS.visible = false

  // setTimeout(l1Slide5(), 1000)
  // l1Slide5()

  setTimeout(() => {

    // planeCorrectAns.visible = false
    planeCorrectAnsS4.visible = false
  }, 300);

  setTimeout(() => {

    l1Slide5()
    // l1Slide2()
  }, 700);
  // setTimeout(() => {
  // }, 700);

  // //Render the scene for Update The Values
  // renderer.render(scene, camera);
  // document.body.appendChild(renderer.domElement);
  // }/

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

  // if (planeCorrectAnsS5.visible == true) {
  //   // console.log(" This is Visible S5")

  //   planeCorrectAns.visible = false
  //   planeCorrectAnsS2.visible = false
  //   planeCorrectAnsS3.visible = false
  //   planeCorrectAnsS4.visible = false
  // planeCorrectAnsS5.visible = false

  // planeS5LHS.visible = false
  // planeS5RHS.visible = false

  // setTimeout(l1Slide6(), 1000)
  // l1Slide6()
  setTimeout(() => {

    // planeCorrectAns.visible = false
    planeCorrectAnsS5.visible = false
  }, 500);

  setTimeout(() => {
    l1Slide6()

  }, 700);
  //   setTimeout(() => {
  //   }, 700);

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
  //   // console.log(" This is Visible S6")

  //   planeCorrectAns.visible = false
  //   planeCorrectAnsS2.visible = false
  //   planeCorrectAnsS3.visible = false
  //   planeCorrectAnsS4.visible = false
  //   planeCorrectAnsS5.visible = false
  // planeCorrectAnsS6.visible = false

  // planeS6LHS.visible = false
  // planeS6RHS.visible = false

  // setTimeout(l1Slide7(), 1000)
  // l1Slide7()
  setTimeout(() => {

    // planeCorrectAns.visible = false
    planeCorrectAnsS6.visible = false
  }, 500);

  setTimeout(() => {

    l1Slide7()

  }, 700);
  //   setTimeout(() => {
  //   }, 700);

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
  //   // console.log(" This is Visible S7")

  //   planeCorrectAns.visible = false
  //   planeCorrectAnsS2.visible = false
  //   planeCorrectAnsS3.visible = false
  //   planeCorrectAnsS4.visible = false
  //   planeCorrectAnsS5.visible = false
  //   planeCorrectAnsS6.visible = false
  // planeCorrectAnsS7.visible = false

  // planeS7LHS.visible = false
  // planeS7RHS.visible = false

  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  // setTimeout(l1Slide8(), 1000)
  // l1Slide8()
  setTimeout(() => {

    // planeCorrectAns.visible = false
    planeCorrectAnsS7.visible = false
  }, 500);
  setTimeout(() => {
    l1Slide8()

  }, 700);
  //   setTimeout(() => {
  //   }, 700);

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
  //   // console.log(" This is Visible S8")

  //   planeCorrectAns.visible = false
  //   planeCorrectAnsS2.visible = false
  //   planeCorrectAnsS3.visible = false
  //   planeCorrectAnsS4.visible = false
  //   planeCorrectAnsS5.visible = false
  //   planeCorrectAnsS6.visible = false
  //   planeCorrectAnsS7.visible = false
  // planeCorrectAnsS8.visible = false

  // planeS8LHS.visible = false
  // planeS8RHS.visible = false

  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  // setTimeout(l1Slide9(), 1000)
  // l1Slide9()
  setTimeout(() => {

    // planeCorrectAns.visible = false
    planeCorrectAnsS8.visible = false
  }, 500);
  setTimeout(() => {
    l1Slide9()
  }, 700);
  //   setTimeout(() => {
  //   }, 700);

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
  //   // console.log(" This is Visible S9")

  //   planeCorrectAns.visible = false
  //   planeCorrectAnsS2.visible = false
  //   planeCorrectAnsS3.visible = false
  //   planeCorrectAnsS4.visible = false
  //   planeCorrectAnsS5.visible = false
  //   planeCorrectAnsS6.visible = false
  //   planeCorrectAnsS7.visible = false
  //   planeCorrectAnsS8.visible = false
  // planeCorrectAnsS9.visible = false

  // planeS9LHS.visible = false
  // planeS9RHS.visible = false

  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  // setTimeout(l1Slide10(), 1000)
  // l1Slide10()
  setTimeout(() => {

    planeCorrectAnsS9.visible = false
    // planeCorrectAns.visible = false
  }, 500);
  setTimeout(() => {
    l1Slide10()

  }, 700);
  //   setTimeout(() => {
  //   }, 700);

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
  //   // console.log(" This is Visible S10")

  //   planeCorrectAns.visible = false
  //   planeCorrectAnsS2.visible = false
  //   planeCorrectAnsS3.visible = false
  //   planeCorrectAnsS4.visible = false
  //   planeCorrectAnsS5.visible = false
  //   planeCorrectAnsS6.visible = false
  //   planeCorrectAnsS7.visible = false
  //   planeCorrectAnsS8.visible = false
  //   planeCorrectAnsS9.visible = false
  // planeCorrectAnsS10.visible = false

  // planeS10LHS.visible = false
  // planeS10RHS.visible = false

  // console.log(" This is Visible S2")
  // planeS2LHS.visible = false
  // planeS2RHS.visible = false
  // setTimeout(levelOneComplete(), 100)
  // levelOneComplete()
  planeCorrectAnsS10.visible = false
  // setTimeout(() => {

  //   // planeCorrectAns.visible = false
  // }, 500);
  setTimeout(() => {
    levelOneComplete()
  }, 700);
  // setTimeout(l1Slide10(), 100)

  //Render the scene for Update The Values
  //   renderer.render(scene, camera);
  //   document.body.appendChild(renderer.domElement);
  // }

  //Render the scene for Update The Values
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // }
}

// Play Reply Audio and Pause playAudio Function sound here
// function soundReplyAudio(path) {
function soundAnsCheck(path) {
  console.log("Function execute")

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
    // if (S10Cor == false) {
    // scene.add(planeCorrectAnsS5);
    if (SCom == true) {
      replyAudioSound.play()
    }
    // }

    // switch (path) {
    //   case wrong_ans_sound:    // Working
    //     isAudiReplyplay = true  // Not Play again if audio is already working
    //     // replyAudioSound.stop();
    //     // replyAudioBtnSound.pause();

    //     //Render the scene for Update The Values
    //     renderer.render(scene, camera);
    //     document.body.appendChild(renderer.domElement);
    //     break;

    //   case right_ans_sound:    // Working
    //     isAudiReplyplay = true  // Not Play again if audio is already working
    //     // replyAudioSound.stop();
    //     // replyAudioBtnSound.pause();

    //     //Render the scene for Update The Values
    //     renderer.render(scene, camera);
    //     document.body.appendChild(renderer.domElement);
    //     break;

    //   default:
    //     break;
    // }



    // For Autoplay audio
    // sound.autoplay = true;
    // replyAudioSound.setVolume(0.1)
    // console.log("replyAudioSound:- ", replyAudioSound);
    // console.log("isPlaying Status in soundreplyAudio", replyAudioSound.isPlaying);

    replyAudioSound.source.onended = function () {
      // console.log("replyAudioSound Ended");
      soundReplyisPlaying = true

      if (isAudio10Com == true) {
        SCom = false
      }
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
          //   planeWrongAns.visible = false

          // }
          // gPlayTshirt()

          //Render the scene for Update The Values
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
          break;

        // case AudioReplaySound:    // Working
        //   isAudiReplyplay = false
        //   // console.log("For the wrong answer")
        //   // console.log("Check Status:- ",planeLHSMainRed.visible);
        //   // if (planeWrongAns.visible == true) {
        //   //   planeWrongAns.visible = false

        //   // }
        //   // gPlayTshirt()

        //   //Render the scene for Update The Values
        //   renderer.render(scene, camera);
        //   document.body.appendChild(renderer.domElement);
        //   break;
      }

      // // For Correct Click
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

      // Level One Complete
      // var LOC = (S1Cor == true && S2Cor == true && S3Cor == true && S4Cor == true && S5Cor == true && S6Cor == true && S7Cor == true && S8Cor == true && S9Cor == true && S10Cor == true)

      // console.log(S1Cor, S2Cor, S3Cor, S4Cor, S5Cor, S6Cor)

      console.log(`1-${S1Cor}, 2-${S2Cor}, 3-${S3Cor}, 4-${S4Cor}, 5-${S5Cor}`)
      console.log(`6-${S6Cor}, 7-${S7Cor}, 8-${S8Cor}, 9-${S9Cor}, 10-${S10Cor}`)
      // if (AnsS1) {
      if (S1Cor == true) {
        S1Cor = false
        // console.log("S1Cor Status:-", S1Cor)
        // location.href = 'level1_Com.js'
        AnswerCheckS1()
      }

      // else if (AnsS2) {
      else if (S2Cor == true) {
        S2Cor = false
        // console.log("S2Cor Status:-", S2Cor)
        AnswerCheckS2()
      }

      // else if (AnsS3) {
      else if (S3Cor == true) {
        S3Cor = false
        // console.log("S3Cor Status:-", S3Cor)
        AnswerCheckS3()
      }

      // else if (AnsS4) {
      else if (S4Cor == true) {
        S4Cor = false
        // console.log("S4Cor Status:-", S4Cor)
        AnswerCheckS4()
      }

      // else if (AnsS5) {
      else if (S5Cor == true) {
        S5Cor = false
        // console.log("S5Cor Status:-", S5Cor)
        AnswerCheckS5()
      }

      // else if (AnsS6) {
      else if (S6Cor == true) {
        S6Cor = false
        // console.log("S6Cor Status:-", S6Cor)
        AnswerCheckS6()
      }
      // else if (AnsS7) {
      else if (S7Cor == true) {
        S7Cor = false
        // console.log("S7Cor Status:-", S7Cor)
        AnswerCheckS7()
      }
      // else if (AnsS8) {
      else if (S8Cor == true) {
        S8Cor = false
        // console.log("S8Cor Status:-", S8Cor)
        AnswerCheckS8()
      }
      // else if (AnsS9) {
      else if (S9Cor == true) {
        S9Cor = false
        // console.log("S9Cor Status:-", S9Cor)
        AnswerCheckS9()
      }
      // else if (AnsS10) {
      else if (S10Cor == true) {
        S10Cor = false
        // console.log("S10Cor Status:-", S10Cor)
        AnswerCheckS10()
      }
      // else if (LOC) {
      //     console.log("LOC Status:-", S10Cor)
      //     // S6Cor = false
      //     // AnswerCheckS10()
      //     levelOneComplete()
      // }
    }
  }, false);
}

// -------------------  All Slide Instructions ----------------------
// Red Border Hide Timeout :- 500 Mili Second
// scene Remove Timeout :- 1000 Mili Second
// More Select Level Select All More
// ------------------------------------------------------------------

// Function For Level1 Slide 1
// Indicate Blue Tshirt Slide
// RHS Correct
function l1Slide1() {
  // console.log("Slide 1 Working");
  // roundUpdate(1)
  headerProgress(progressBarImg)    // Change Progressbar Image

  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS1LHS = new THREE.TextureLoader();
  loadS1LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S1LHS, // Blue Shirt

    function (textureS1LHS) {
      // PM:- planeMaterial
      var PM_S1LHS = new THREE.MeshBasicMaterial({
        map: textureS1LHS,
        transparent: true,
      });
      //Create a 2x2 plane with texture
      var PG_S1LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS1LHS = new THREE.Mesh(PG_S1LHS, PM_S1LHS);
      scene.add(planeS1LHS);
      // planeS1LHS.position.x = -1.2
      // planeS1LHS.position.y = -0.7
      planeS1LHS.position.x = SXIPosLHS   // Working
      planeS1LHS.position.y = SYIPosLHS   // Working
      // planeS1LHS.position.z = 1

      // Click Event Checker
      // planeS1LHS.addEventListener('click', console.log("Click Event Detection with only plane---"), false)
      // window.addEventListener(planeS1LHS, 'click', console.log("Click Event Detection with only plane---"), false)

      // Dispose Material, Geometry, texture
      // geometry.dispose();
      // material.dispose();
      // texture.dispose();

      // PG_S1LHS.dispose();
      // PM_S1LHS.dispose();
      // loadS1LHS.dispose();

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS1LHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          // planeWrongAns.visible = false

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
            // domEvents.removeEventListener(planeS1LHS, 'click', false) // Active 30-04
            AnsS1Cor = true


            // PG_S1LHS.dispose();
            // PM_S1LHS.dispose();
            // loadS1RHS.dispose()
            // renderer.render(scene, camera);
            // PG_S1LHS = 'undefined'
            // PM_S1LHS = 'undefined'
            // planeS1LHS = 'undefined'
            // scene.remove(PM_S1LHS, PG_S1LHS, planeS1LHS)            
            // console.log("PM_S1LHS Dispose", PM_S1LHS);
            // console.log("PM_S1LHS Dispose", PG_S1LHS);
            // console.log("planeS1LHS Dispose", planeS1LHS);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              // soundAnsCheck(tryAgainSound)
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
                  var PG_S1LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeWrongAns = new THREE.Mesh(PG_S1LHS_Ans, PM_S1LHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeWrongAns)
                  }
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
            // ----------------------------------------------------------------------

          }
        }, false)
      }

      //Render the scene
      renderer.render(scene, camera);
      document.body.appendChild(renderer.domElement);
    },
    function (err) {
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  RHS  --------------------------
  // Correct         
  const loadS1RHS = new THREE.TextureLoader();
  loadS1RHS.load(
    S1RHS, // Blue Shirt

    function (textureS1RHS) {
      var PM_S1RHS = new THREE.MeshBasicMaterial({
        map: textureS1RHS,
        transparent: true,
        // visible: false
      });
      //Create a 2x2 plane with texture
      var PG_S1RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS1RHS = new THREE.Mesh(PG_S1RHS, PM_S1RHS);
      scene.add(planeS1RHS);
      // planeS1RHS.position.x = 1.2
      // planeS1RHS.position.y = -0.7
      planeS1RHS.position.x = SXIPosRHS   // Working
      planeS1RHS.position.y = SYIPosRHS   // Working

      // planeS1RHS.onclick = function () {
      //   //   canvas.requestPointerLock();
      //   //   // console.log("canvas lock")
      //   console.log("OnClick Event Testing -----------------");
      // }

      // Click Event Checker
      // planeS1LHS.addEventListener('click', console.log("Click Event Detection with only plane---"), false)
      // window.addEventListener(planeS1LHS, 'click', console.log("Click Event Detection with only plane---"), false)

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS1Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS1RHS, 'click', function (event) {
          if (AnsS1Cor == false) {
            AnsS1Cor = true

            console.log("Correct Answer S1")
            S1Cor = true

            // Disable click event for Slide 2 For Some Time
            domEvents.removeEventListener(planeS1RHS, 'click', false)
            AnsS2Cor = true

            // Remove Event Listner After Click
            // console.log("planeS1LHS Dispose B", planeS1LHS);
            // console.log("planeS1RHS Dispose B", planeS1RHS);

            // Disable Click on Canvas After Click ------------------------------------
            // const controls = new THREE.PointerLockControls(camera, document.body);

            // // add event listener to show/hide a UI (e.g. the game's menu)
            // controls.addEventListener('lock', function () {
            //   menu.style.display = 'none';
            // });

            // // controls.addEventListener('unlock', function () {
            // //   menu.style.display = 'block';
            // // });

            // Lock pointer on Click on canvas
            // canvas.onclick = function () {
            //   canvas.requestPointerLock();
            //   // console.log("canvas lock")
            // }
            //  ------------------------------------------------------------------

            setTimeout(() => {
              scene.remove(planeS1LHS, planeS1RHS)


              // planeS1LHS = undefined                           // Active
              // planeS1RHS = undefined                           // Active
              // console.log("planeS1LHS Dispose", planeS1LHS);   // Active
              // console.log("planeS1RHS Dispose", planeS1RHS);   // Active

              // scene.remove(PM_S1LHS, PG_S1LHS, planeS1LHS)            
              // console.log("PM_S1LHS Dispose", PM_S1LHS);
              // console.log("PM_S1LHS Dispose", PG_S1LHS);

              // Enable click event for Slide 2 For Some Time
              AnsS2Cor = false
              // }, 1000);
            }, 1000);



            // Make Highlight True
            planeGreenStatus = true

            // Put Condition to Show Highlight
            if (planeGreenStatus == true) {
              planeGreenStatus = false
              // console.log("Green Highlight Active");

              //For Correct Answer Audio
              // soundAnsCheck('../Sounds/Global_Music/Music/For correct answer.mp3')
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
                  // scene.add(planeCorrectAns);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAns);
                  }
                  // planeCorrectAns.position.x = 1.2
                  // planeCorrectAns.position.y = -0.7
                  planeCorrectAns.position.x = SXIPosRHS  // Working
                  planeCorrectAns.position.y = SYIPosRHS  // Working

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

  //Render the scene
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
}

// Function for Level1 Slide 2
// Indicate Cap
// RHS Correct
function l1Slide2() {
  // scene.remove(meshText)
  // console.log("Slide 2 Function Working")
  // roundUpdate(2)
  headerProgress(l1PS1)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS1LHS.visible == true) {
  //     console.log(" This is Visible")
  //     planeS1LHS.visible = false
  //     planeS1RHS.visible = false
  //     // console.log("remove before"); 
  //     // scene.remove(planeWrongAns, planeCorrectAns)
  //     // planeWrongAns.dispose()
  //     // planeWrongAns.dispose()
  //     // console.log("remove after");

  //     // //Render the scene
  //     // renderer.render(scene, camera);
  //     // document.body.appendChild(renderer.domElement);

  // }
  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS2LHS = new THREE.TextureLoader();
  loadS2LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S2LHS,  // cap Img

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
      // planeS2LHS.position.x = -1.2
      // planeS2LHS.position.y = -0.7
      planeS2LHS.position.x = SXIPosLHS
      planeS2LHS.position.y = SYIPosLHS
      // planeS1LHS.position.z = 1

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS2LHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          // planeWrongAnsS2.visible = false

          //Render the scene
          renderer.render(scene, camera);
          document.body.appendChild(renderer.domElement);
        }
      })


      // Click Event Checker
      // planeS1LHS.addEventListener('click', console.log("Click Event Detection with only plane---"), false)
      // window.addEventListener(planeS1LHS, 'click', console.log("Click Event Detection with only plane---"), false)

      // Add onClick Event Here - Wrong Answer
      if (AnsS2Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS2LHS, 'click', function (event) {
          if (AnsS2Cor == false) {
            console.log("Wrong Answer S2")


            // Remove Event Listner After Click
            // domEvents.removeEventListener(planeS2LHS, 'click', false)  // Active
            AnsS2Cor = true
            // var Planes2 = planeS1LHS, planeS2LHS
            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2LHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

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
                  // console.log("check for plane size planeGeometryRHS", planeGeometryRHS)
                  planeWrongAnsS2 = new THREE.Mesh(PG_S2LHS_Ans, PM_S2LHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  // scene.add(planeWrongAnsS2);
                  if (S10Cor == false) {
                    scene.add(planeWrongAnsS2);
                  }
                  planeWrongAnsS2.position.x = SXIPosLHS
                  planeWrongAnsS2.position.y = SYIPosLHS

                  // Hide Worng Answer
                  // setTimeout(() => {
                  //   planeWrongAnsS2.visible = false
                  // }, 200);
                  setTimeout(() => {
                    planeWrongAnsS2.visible = false
                    AnsS2Cor = false

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
  const loadS2RHS = new THREE.TextureLoader();
  loadS2RHS.load(
    // 2nd URL
    S2RHS,   // cap

    function (textureS2RHS) {
      var PM_S2RHS = new THREE.MeshBasicMaterial({
        map: textureS2RHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var PG_S2RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS2RHS = new THREE.Mesh(PG_S2RHS, PM_S2RHS);
      scene.add(planeS2RHS);
      // planeS2RHS.position.x = 1.2
      // planeS2RHS.position.y = -0.7
      planeS2RHS.position.x = SXIPosRHS
      planeS2RHS.position.y = SYIPosRHS


      // Click Event Checker
      // planeS1LHS.addEventListener('click', console.log("Click Event Detection with only plane---"), false)
      // window.addEventListener(planeS1LHS, 'click', console.log("Click Event Detection with only plane---"), false)

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS2Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS2RHS, 'click', function (event) {
          if (AnsS2Cor == false) {
            console.log("Correct Answer S2")
            AnsS2Cor = true
            S1Cor = false
            S2Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS2RHS, 'click', false)
            // Disable click event for Slide 2 For Some Time
            AnsS3Cor = true


            setTimeout(() => {
              scene.remove(planeS2LHS, planeS2RHS)

              // planeS2LHS = undefined
              // planeS2RHS = undefined
              // console.log("planeS1LHS Dispose", planeS2LHS);
              // console.log("planeS1RHS Dispose", planeS2RHS);

              // Enable click event for Slide 2 For Some Time
              AnsS3Cor = false
              // }, 1000);
            }, 1000);


            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS1LHS, 'click', function (event) {
            //     console.log("Remove Event lister S10")
            // })
            // // ----------------------------------------------------------------------

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2RHS, 'click', function (event) {
            //     console.log("Remove Event lister S2 RHS")
            // })
            // // ----------------------------------------------------------------------

            // Check Green Highlight Status
            // console.log("GreenStatus onClick:- ", planeGreenStatus);


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
                  var PG_S2RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS2 = new THREE.Mesh(PG_S2RHS_Ans, PM_S2RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS2);
                  }
                  planeCorrectAnsS2.position.x = SXIPosRHS
                  planeCorrectAnsS2.position.y = SYIPosRHS

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

// Function for Level1 Slide 3
// Indicate Hat
// LHS Correct
function l1Slide3() {
  // console.log("Slide 3 Function Working")
  headerProgress(l1PS2)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS3LHS.visible == true) {
  //     console.log(" This is Visible")
  //     planeS3LHS.visible = false
  //     planeS3RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS3LHS = new THREE.TextureLoader();
  loadS3LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S3LHS,  // cap Img

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
      // planeS2LHS.position.x = -1.2
      // planeS2LHS.position.y = -0.7
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
          // planeWrongAnsS3.visible = false

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
            // var Planes2 = planeS1LHS, planeS2LHS
            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2LHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

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
                  // console.log("check for plane size planeGeometryRHS", planeGeometryRHS)
                  planeWrongAnsS3 = new THREE.Mesh(PG_S3LHS_Ans, PM_S3LHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  // scene.add(planeWrongAnsS2);
                  if (S10Cor == false) {
                    scene.add(planeWrongAnsS3);
                  }
                  planeWrongAnsS3.position.x = SXIPosLHS
                  planeWrongAnsS3.position.y = SYIPosLHS

                  // Hide Worng Answer
                  // setTimeout(() => {
                  //   planeWrongAnsS2.visible = false
                  // }, 200);
                  setTimeout(() => {
                    planeWrongAnsS3.visible = false
                    AnsS3Cor = false

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                    // }, 1000);
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
    // 2nd URL
    S3RHS,   // cap

    function (textureS3RHS) {
      var PM_S3RHS = new THREE.MeshBasicMaterial({
        map: textureS3RHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var PG_S3RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS3RHS = new THREE.Mesh(PG_S3RHS, PM_S3RHS);
      scene.add(planeS3RHS);
      // planeS2RHS.position.x = 1.2
      // planeS2RHS.position.y = -0.7
      planeS3RHS.position.x = SXIPosRHS
      planeS3RHS.position.y = SYIPosRHS

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS3Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS3RHS, 'click', function (event) {
          if (AnsS3Cor == false) {
            console.log("Correct Answer S3")
            AnsS3Cor = true
            S1Cor = false
            S2Cor = false
            S3Cor = true

            // Disable click event for Slide 2 For Some Time
            AnsS4Cor = true


            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS3RHS, 'click', false)

            setTimeout(() => {
              scene.remove(planeS3LHS, planeS3RHS)


              // planeS3LHS = undefined
              // planeS3RHS = undefined
              // console.log("planeS3LHS Dispose", planeS3LHS);
              // console.log("planeS3RHS Dispose", planeS3RHS);


              // Enable click event for Slide 2 For Some Time
              AnsS4Cor = false
            }, 1000);
            // }, 700);


            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS1LHS, 'click', function (event) {
            //     console.log("Remove Event lister S10")
            // })
            // // ----------------------------------------------------------------------

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2RHS, 'click', function (event) {
            //     console.log("Remove Event lister S2 RHS")
            // })
            // // ----------------------------------------------------------------------

            // Check Green Highlight Status
            // console.log("GreenStatus onClick:- ", planeGreenStatus);


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
                  // console.log("LHS Function Executed");
                  var PM_S3RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S3RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS3 = new THREE.Mesh(PG_S3RHS_Ans, PM_S3RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS3);
                  }
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
// RHS Correct
function l1Slide4() {
  // console.log("Slide 4 Function Working")
  headerProgress(l1PS3)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS3LHS.visible == true) {
  //     console.log(" This is Visible")
  //     planeS3LHS.visible = false
  //     planeS3RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS4LHS = new THREE.TextureLoader();
  loadS4LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S4LHS,  // cap Img

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
      // planeS2LHS.position.x = -1.2
      // planeS2LHS.position.y = -0.7
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
          // planeWrongAnsS4.visible = false

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
            // domEvents.removeEventListener(planeS4LHS, 'click', false) // Active
            AnsS4Cor = true

            // var Planes2 = planeS1LHS, planeS2LHS
            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2LHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

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
                  // console.log("check for plane size planeGeometryRHS", planeGeometryRHS)
                  planeWrongAnsS4 = new THREE.Mesh(PG_S4LHS_Ans, PM_S4LHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  // scene.add(planeWrongAnsS2);
                  if (S10Cor == false) {
                    scene.add(planeWrongAnsS4);
                  }
                  planeWrongAnsS4.position.x = SXIPosLHS
                  planeWrongAnsS4.position.y = SYIPosLHS

                  // Hide Worng Answer
                  // setTimeout(() => {
                  //   planeWrongAnsS2.visible = false
                  // }, 200);
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

  //  ------------------------  RHS  --------------------------    
  // Correct       
  const loadS4RHS = new THREE.TextureLoader();
  loadS4RHS.load(
    // 2nd URL
    S4RHS,   // cap

    function (textureS4RHS) {
      var PM_S4RHS = new THREE.MeshBasicMaterial({
        map: textureS4RHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var PG_S4RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS4RHS = new THREE.Mesh(PG_S4RHS, PM_S4RHS);
      scene.add(planeS4RHS);
      // planeS2RHS.position.x = 1.2
      // planeS2RHS.position.y = -0.7
      planeS4RHS.position.x = SXIPosRHS
      planeS4RHS.position.y = SYIPosRHS

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS4Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS4RHS, 'click', function (event) {
          if (AnsS4Cor == false) {
            console.log("Correct Answer S4")
            AnsS4Cor = true
            S1Cor, S2Cor, S3Cor = false
            S4Cor = true

            // Disable click event for Slide 2 For Some Time
            AnsS4Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS4RHS, 'click', false)

            setTimeout(() => {
              scene.remove(planeS4LHS, planeS4RHS)


              // planeS4LHS = undefined
              // planeS4RHS = undefined
              // console.log("planeS4LHS Dispose", planeS4LHS);
              // console.log("planeS4RHS Dispose", planeS4RHS);


              // Enable click event for Slide 2 For Some Time
              AnsS5Cor = false
            }, 1000);
            // }, 700);


            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS1LHS, 'click', function (event) {
            //     console.log("Remove Event lister S10")
            // })
            // // ----------------------------------------------------------------------

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2RHS, 'click', function (event) {
            //     console.log("Remove Event lister S2 RHS")
            // })
            // // ----------------------------------------------------------------------

            // Check Green Highlight Status
            // console.log("GreenStatus onClick:- ", planeGreenStatus);


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
              const loadS4RHS_Ans = new THREE.TextureLoader();
              loadS4RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S4RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S4RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS4 = new THREE.Mesh(PG_S4RHS_Ans, PM_S4RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS4);
                  }
                  planeCorrectAnsS4.position.x = SXIPosRHS
                  planeCorrectAnsS4.position.y = SYIPosRHS

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

// Function for Level1 Slide 5
// Indicate Balloons
// LHS Correct
function l1Slide5() {
  // console.log("Slide 5 Function Working")
  headerProgress(l1PS4)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS4LHS.visible == true) {
  //     console.log(" This is Visible 5 ")
  //     planeS4LHS.visible = false
  //     planeS4RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS5LHS = new THREE.TextureLoader();
  loadS5LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S5LHS,  // cap Img

    function (textureS5LHS) {
      // PM:- planeMaterial
      var PM_S5LHS = new THREE.MeshBasicMaterial({
        map: textureS5LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_S5LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS5LHS = new THREE.Mesh(PG_S5LHS, PM_S5LHS);
      scene.add(planeS5LHS);
      // planeS2LHS.position.x = -1.2
      // planeS2LHS.position.y = -0.7
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
          // planeWrongAnsS5.visible = false

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
            // domEvents.removeEventListener(planeS5LHS, 'click', false) // Active
            AnsS5Cor = true

            // var Planes2 = planeS1LHS, planeS2LHS
            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2LHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              // conditions('Wrong')
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS5LHS_Ans = new THREE.TextureLoader();
              loadS5LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S5LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S5LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  // console.log("check for plane size planeGeometryRHS", planeGeometryRHS)
                  planeWrongAnsS5 = new THREE.Mesh(PG_S5LHS_Ans, PM_S5LHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  // scene.add(planeWrongAnsS2);
                  if (S10Cor == false) {
                    scene.add(planeWrongAnsS5);
                  }
                  planeWrongAnsS5.position.x = SXIPosLHS
                  planeWrongAnsS5.position.y = SYIPosLHS

                  // Hide Worng Answer
                  // setTimeout(() => {
                  //   planeWrongAnsS2.visible = false
                  // }, 200);
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
    // 2nd URL
    S5RHS,   // cap

    function (textureS5RHS) {
      var PM_S5RHS = new THREE.MeshBasicMaterial({
        map: textureS5RHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var PG_S5RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS5RHS = new THREE.Mesh(PG_S5RHS, PM_S5RHS);
      scene.add(planeS5RHS);
      // planeS2RHS.position.x = 1.2
      // planeS2RHS.position.y = -0.7
      planeS5RHS.position.x = SXIPosRHS
      planeS5RHS.position.y = SYIPosRHS

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS5Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS5RHS, 'click', function (event) {
          if (AnsS5Cor == false) {
            console.log("Correct Answer S5")
            AnsS5Cor = true
            S1Cor, S2Cor, S3Cor, S4Cor = false
            S5Cor = true

            // Disable click event for Slide 2 For Some Time
            AnsS6Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS5RHS, 'click', false)

            setTimeout(() => {
              scene.remove(planeS5LHS, planeS5RHS)


              // planeS5LHS = undefined
              // planeS5RHS = undefined
              // console.log("planeS5LHS Dispose", planeS5LHS);
              // console.log("planeS5RHS Dispose", planeS5RHS);


              // Enable click event for Slide 2 For Some Time
              AnsS6Cor = false
              // }, 700);

            }, 1000);


            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS1LHS, 'click', function (event) {
            //     console.log("Remove Event lister S10")
            // })
            // // ----------------------------------------------------------------------

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2RHS, 'click', function (event) {
            //     console.log("Remove Event lister S2 RHS")
            // })
            // // ----------------------------------------------------------------------

            // Check Green Highlight Status
            // console.log("GreenStatus onClick:- ", planeGreenStatus);


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
              const loadS5RHS_Ans = new THREE.TextureLoader();
              loadS5RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S5RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S5RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS5 = new THREE.Mesh(PG_S5RHS_Ans, PM_S5RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS5);
                  }
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
function l1Slide6() {
  // console.log("Slide 6 Function Working")
  headerProgress(l1PS5)    // Change Progressbar Image


  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS5LHS.visible == true) {
  //     console.log(" This is Visible")
  //     planeS5LHS.visible = false
  //     planeS5RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS6LHS = new THREE.TextureLoader();
  loadS6LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S6LHS,  // cap Img

    function (textureS6LHS) {
      // PM:- planeMaterial
      var PM_S6LHS = new THREE.MeshBasicMaterial({
        map: textureS6LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_S6LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS6LHS = new THREE.Mesh(PG_S6LHS, PM_S6LHS);
      scene.add(planeS6LHS);
      // planeS2LHS.position.x = -1.2
      // planeS2LHS.position.y = -0.7
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
          // planeWrongAnsS6.visible = false

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

            // var Planes2 = planeS1LHS, planeS2LHS
            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2LHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              // conditions('Wrong')
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS6LHS_Ans = new THREE.TextureLoader();
              loadS6LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S6LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S6LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  // console.log("check for plane size planeGeometryRHS", planeGeometryRHS)
                  planeWrongAnsS6 = new THREE.Mesh(PG_S6LHS_Ans, PM_S6LHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  // scene.add(planeWrongAnsS2);
                  if (S10Cor == false) {
                    scene.add(planeWrongAnsS6);
                  }
                  planeWrongAnsS6.position.x = SXIPosLHS
                  planeWrongAnsS6.position.y = SYIPosLHS

                  // Hide Worng Answer
                  // setTimeout(() => {
                  //   planeWrongAnsS2.visible = false
                  // }, 200);
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
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  RHS  --------------------------    
  // Correct       
  const loadS6RHS = new THREE.TextureLoader();
  loadS6RHS.load(
    // 2nd URL
    S6RHS,   // cap

    function (textureS6RHS) {
      var PM_S6RHS = new THREE.MeshBasicMaterial({
        map: textureS6RHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var PG_S6RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS6RHS = new THREE.Mesh(PG_S6RHS, PM_S6RHS);
      scene.add(planeS6RHS);
      // planeS2RHS.position.x = 1.2
      // planeS2RHS.position.y = -0.7
      planeS6RHS.position.x = SXIPosRHS
      planeS6RHS.position.y = SYIPosRHS

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS6Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS6RHS, 'click', function (event) {
          if (AnsS6Cor == false) {
            console.log("Correct Answer S6")
            AnsS6Cor = true
            S1Cor, S2Cor, S3Cor, S4Cor, S5Cor = false
            S6Cor = true

            // Disable click event for Slide 2 For Some Time
            AnsS7Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS6RHS, 'click', false)

            setTimeout(() => {
              scene.remove(planeS6LHS, planeS6RHS)

              // planeS6LHS = undefined
              // planeS6RHS = undefined
              // console.log("planeS6LHS Dispose", planeS6LHS);
              // console.log("planeS6RHS Dispose", planeS6RHS);

              // Enable click event for Slide 2 For Some Time
              AnsS7Cor = false

              // }, 700);
            }, 1000);


            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS1LHS, 'click', function (event) {
            //     console.log("Remove Event lister S10")
            // })
            // // ----------------------------------------------------------------------

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2RHS, 'click', function (event) {
            //     console.log("Remove Event lister S2 RHS")
            // })
            // // ----------------------------------------------------------------------

            // Check Green Highlight Status
            // console.log("GreenStatus onClick:- ", planeGreenStatus);


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
              const loadS6RHS_Ans = new THREE.TextureLoader();
              loadS6RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S6RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S6RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS6 = new THREE.Mesh(PG_S6RHS_Ans, PM_S6RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS6);
                  }
                  planeCorrectAnsS6.position.x = SXIPosRHS
                  planeCorrectAnsS6.position.y = SYIPosRHS

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

// Function for Level1 Slide 7
// Indicate Pink Balls
// LHS Correct
function l1Slide7() {
  // console.log("Slide 7 Function Working")
  headerProgress(l1PS6)    // Change Progressbar Image


  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS6LHS.visible == true) {
  //     console.log(" This is Visible")
  //     planeS6LHS.visible = false
  //     planeS6RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS7LHS = new THREE.TextureLoader();
  loadS7LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S7LHS,  // cap Img

    function (textureS7LHS) {
      // PM:- planeMaterial
      var PM_S7LHS = new THREE.MeshBasicMaterial({
        map: textureS7LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_S7LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS7LHS = new THREE.Mesh(PG_S7LHS, PM_S7LHS);
      scene.add(planeS7LHS);
      // planeS2LHS.position.x = -1.2
      // planeS2LHS.position.y = -0.7
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
          // planeWrongAnsS7.visible = false

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

            // var Planes2 = planeS1LHS, planeS2LHS
            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2LHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              // conditions('Wrong')
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS7LHS_Ans = new THREE.TextureLoader();
              loadS7LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S7LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S7LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  // console.log("check for plane size planeGeometryRHS", planeGeometryRHS)
                  planeWrongAnsS7 = new THREE.Mesh(PG_S7LHS_Ans, PM_S7LHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  // scene.add(planeWrongAnsS2);
                  if (S10Cor == false) {
                    scene.add(planeWrongAnsS7);
                  }
                  planeWrongAnsS7.position.x = SXIPosLHS
                  planeWrongAnsS7.position.y = SYIPosLHS

                  // Hide Worng Answer
                  // setTimeout(() => {
                  //   planeWrongAnsS2.visible = false
                  // }, 200);
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
    // 2nd URL
    S7RHS,   // cap

    function (textureS7RHS) {
      var PM_S7RHS = new THREE.MeshBasicMaterial({
        map: textureS7RHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var PG_S7RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS7RHS = new THREE.Mesh(PG_S7RHS, PM_S7RHS);
      scene.add(planeS7RHS);
      // planeS2RHS.position.x = 1.2
      // planeS2RHS.position.y = -0.7
      planeS7RHS.position.x = SXIPosRHS
      planeS7RHS.position.y = SYIPosRHS

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS7Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS7RHS, 'click', function (event) {
          if (AnsS7Cor == false) {
            console.log("Correct Answer S7")
            AnsS7Cor = true
            S1Cor, S2Cor, S3Cor, S4Cor, S5Cor, S6Cor = false
            S7Cor = true

            // Disable click event for Slide 2 For Some Time
            AnsS8Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS7RHS, 'click', false)

            setTimeout(() => {
              scene.remove(planeS7LHS, planeS7RHS)

              // planeS7LHS = undefined
              // planeS7RHS = undefined
              // console.log("planeS7LHS Dispose", planeS7LHS);
              // console.log("planeS7RHS Dispose", planeS7RHS);


              // Enable click event for Slide 2 For Some Time
              AnsS8Cor = false

              // }, 700);
            }, 1000);


            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS1LHS, 'click', function (event) {
            //     console.log("Remove Event lister S10")
            // })
            // // ----------------------------------------------------------------------

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2RHS, 'click', function (event) {
            //     console.log("Remove Event lister S2 RHS")
            // })
            // // ----------------------------------------------------------------------

            // Check Green Highlight Status
            // console.log("GreenStatus onClick:- ", planeGreenStatus);


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
              const loadS7RHS_Ans = new THREE.TextureLoader();
              loadS7RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S7RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S7RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS7 = new THREE.Mesh(PG_S7RHS_Ans, PM_S7RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS7);
                  }
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
// RHS Correct
function l1Slide8() {
  // console.log("Slide 8 Function Working")
  headerProgress(l1PS7)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS7LHS.visible == true) {
  //     console.log(" This is Visible")
  //     planeS7LHS.visible = false
  //     planeS7RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS8LHS = new THREE.TextureLoader();
  loadS8LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S8LHS,  // cap Img

    function (textureS8LHS) {
      // PM:- planeMaterial
      var PM_S8LHS = new THREE.MeshBasicMaterial({
        map: textureS8LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_S8LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS8LHS = new THREE.Mesh(PG_S8LHS, PM_S8LHS);
      scene.add(planeS8LHS);
      // planeS2LHS.position.x = -1.2
      // planeS2LHS.position.y = -0.7
      planeS8LHS.position.x = SXIPosLHS
      planeS8LHS.position.y = SYIPosLHS
      // planeS1LHS.position.z = 1

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS8LHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          // planeWrongAnsS8.visible = false

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
            // domEvents.removeEventListener(planeS8LHS, 'click', false) // Active
            AnsS8Cor = true
            // var Planes2 = planeS1LHS, planeS2LHS
            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2LHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              // conditions('Wrong')
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS8LHS_Ans = new THREE.TextureLoader();
              loadS8LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S8LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S8LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  // console.log("check for plane size planeGeometryRHS", planeGeometryRHS)
                  planeWrongAnsS8 = new THREE.Mesh(PG_S8LHS_Ans, PM_S8LHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  // scene.add(planeWrongAnsS2);
                  if (S10Cor == false) {
                    scene.add(planeWrongAnsS8);
                  }
                  planeWrongAnsS8.position.x = SXIPosLHS
                  planeWrongAnsS8.position.y = SYIPosLHS

                  // Hide Worng Answer
                  // setTimeout(() => {
                  //   planeWrongAnsS2.visible = false
                  // }, 200);
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
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  RHS  --------------------------    
  // Correct       
  const loadS8RHS = new THREE.TextureLoader();
  loadS8RHS.load(
    // 2nd URL
    S8RHS,   // cap

    function (textureS8RHS) {
      var PM_S8RHS = new THREE.MeshBasicMaterial({
        map: textureS8RHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var PG_S8RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS8RHS = new THREE.Mesh(PG_S8RHS, PM_S8RHS);
      scene.add(planeS8RHS);
      // planeS2RHS.position.x = 1.2
      // planeS2RHS.position.y = -0.7
      planeS8RHS.position.x = SXIPosRHS
      planeS8RHS.position.y = SYIPosRHS

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS8Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS8RHS, 'click', function (event) {
          if (AnsS8Cor == false) {
            console.log("Correct Answer S8")
            AnsS8Cor = true
            S1Cor, S2Cor, S3Cor, S4Cor, S5Cor, S6Cor, S7Cor = false
            S8Cor = true

            // Enable click event for Slide 2 For Some Time
            AnsS9Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS8RHS, 'click', false)

            setTimeout(() => {
              scene.remove(planeS8LHS, planeS8RHS)

              // planeS8LHS = undefined
              // planeS8RHS = undefined
              // console.log("planeS8LHS Dispose", planeS8LHS);
              // console.log("planeS8RHS Dispose", planeS8RHS);

              // Enable click event for Slide 2 For Some Time
              AnsS9Cor = false
              // }, 700);

            }, 1000);


            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS1LHS, 'click', function (event) {
            //     console.log("Remove Event lister S10")
            // })
            // // ----------------------------------------------------------------------

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2RHS, 'click', function (event) {
            //     console.log("Remove Event lister S2 RHS")
            // })
            // // ----------------------------------------------------------------------

            // Check Green Highlight Status
            // console.log("GreenStatus onClick:- ", planeGreenStatus);


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
              const loadS8RHS_Ans = new THREE.TextureLoader();
              loadS8RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S8RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S8RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS8 = new THREE.Mesh(PG_S8RHS_Ans, PM_S8RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS8);
                  }
                  planeCorrectAnsS8.position.x = SXIPosRHS
                  planeCorrectAnsS8.position.y = SYIPosRHS

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

// Function for Level1 Slide 9
// Indicate Bats
// RHS Correct
function l1Slide9() {
  // console.log("Slide 9 Function Working")
  headerProgress(l1PS8)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS8LHS.visible == true) {
  //     console.log(" This is Visible")
  //     planeS8LHS.visible = false
  //     planeS8RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS9LHS = new THREE.TextureLoader();
  loadS9LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S9LHS,  // cap Img

    function (textureS9LHS) {
      // PM:- planeMaterial
      var PM_S9LHS = new THREE.MeshBasicMaterial({
        map: textureS9LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_S9LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS9LHS = new THREE.Mesh(PG_S9LHS, PM_S9LHS);
      scene.add(planeS9LHS);
      // planeS2LHS.position.x = -1.2
      // planeS2LHS.position.y = -0.7
      planeS9LHS.position.x = SXIPosLHS
      planeS9LHS.position.y = SYIPosLHS
      // planeS1LHS.position.z = 1

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS9LHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          // planeWrongAnsS9.visible = false

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
            // domEvents.removeEventListener(planeS9LHS, 'click', false) // Active
            AnsS9Cor = true
            // var Planes2 = planeS1LHS, planeS2LHS
            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2LHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              // conditions('Wrong')
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS9LHS_Ans = new THREE.TextureLoader();
              loadS9LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S9LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S9LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  // console.log("check for plane size planeGeometryRHS", planeGeometryRHS)
                  planeWrongAnsS9 = new THREE.Mesh(PG_S9LHS_Ans, PM_S9LHS_Ans);
                  // console.log("planeRHS", planeRHS)
                  // scene.add(planeWrongAnsS2);
                  if (S10Cor == false) {
                    scene.add(planeWrongAnsS9);
                  }
                  planeWrongAnsS9.position.x = SXIPosLHS
                  planeWrongAnsS9.position.y = SYIPosLHS

                  // Hide Worng Answer
                  // setTimeout(() => {
                  //   planeWrongAnsS2.visible = false
                  // }, 200);
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
      console.error('An error happened in LHS Image.');
    }
  );

  //  ------------------------  RHS  --------------------------    
  // Correct       
  const loadS9RHS = new THREE.TextureLoader();
  loadS9RHS.load(
    // 2nd URL
    S9RHS,   // cap

    function (textureS9RHS) {
      var PM_S9RHS = new THREE.MeshBasicMaterial({
        map: textureS9RHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var PG_S9RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS9RHS = new THREE.Mesh(PG_S9RHS, PM_S9RHS);
      scene.add(planeS9RHS);
      // planeS2RHS.position.x = 1.2
      // planeS2RHS.position.y = -0.7
      planeS9RHS.position.x = SXIPosRHS
      planeS9RHS.position.y = SYIPosRHS

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS9Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS9RHS, 'click', function (event) {
          if (AnsS9Cor == false) {
            console.log("Correct Answer S9")
            AnsS9Cor = true
            S1Cor, S2Cor, S3Cor, S4Cor, S5Cor, S6Cor, S7Cor, S8Cor = false
            S9Cor = true

            // Disable click event for Slide 2 For Some Time
            AnsS10Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS9RHS, 'click', false)

            setTimeout(() => {
              scene.remove(planeS9LHS, planeS9RHS)

              // planeS9LHS = undefined
              // planeS9RHS = undefined
              // console.log("planeS9LHS Dispose", planeS9LHS);
              // console.log("planeS9RHS Dispose", planeS9RHS);

              // Enable click event for Slide 2 For Some Time
              AnsS10Cor = false
              // }, 700);
            }, 1000);


            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS1LHS, 'click', function (event) {
            //     console.log("Remove Event lister S10")
            // })
            // // ----------------------------------------------------------------------

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2RHS, 'click', function (event) {
            //     console.log("Remove Event lister S2 RHS")
            // })
            // // ----------------------------------------------------------------------

            // Check Green Highlight Status
            // console.log("GreenStatus onClick:- ", planeGreenStatus);


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
              const loadS9RHS_Ans = new THREE.TextureLoader();
              loadS9RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S9RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S9RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS9 = new THREE.Mesh(PG_S9RHS_Ans, PM_S9RHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeCorrectAnsS9);
                  }
                  planeCorrectAnsS9.position.x = SXIPosRHS
                  planeCorrectAnsS9.position.y = SYIPosRHS

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

// Function for Level1 Slide 10
// Indicate Shoes
// RHS Correct
function l1Slide10() {
  // console.log("Slide 10 Function Working")
  headerProgress(l1PS9)    // Change Progressbar Image

  // console.log("Audio Playing Status", replyAudioSound)
  // if (planeS9LHS.visible == true) {
  //     console.log(" This is Visible")
  //     planeS9LHS.visible = false
  //     planeS9RHS.visible = false
  // }
  //  ------------------------  LHS  --------------------------
  // Wrong
  const loadS10LHS = new THREE.TextureLoader();
  loadS10LHS.load(
    // "../asset/level_one_assets/Image asset Lone/Set 1_2 blue shirts.png",
    S10LHS,  // cap Img

    function (textureS10LHS) {
      // PM:- planeMaterial
      var PM_S10LHS = new THREE.MeshBasicMaterial({
        map: textureS10LHS,
        transparent: true,
        // visible: false 
      });

      //Create a 2x2 plane with texture
      var PG_S10LHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS10LHS = new THREE.Mesh(PG_S10LHS, PM_S10LHS);
      scene.add(planeS10LHS);
      planeS10LHS.position.x = SXIPosLHS
      planeS10LHS.position.y = SYIPosLHS
      // planeS1LHS.position.z = 1

      // Detect Double Click
      const domEventsdbl = new THREEx.DomEvents(camera, renderer.domElement);
      domEventsdbl.addEventListener(planeS10LHS, "dblclick", event => {
        console.log("Double-click detected")
        // Double-click detected
        dblClick = true
        if (dblClick == true) {
          dblClick = false
          // planeWrongAnsS10.visible = false

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
            // var Planes2 = planeS1LHS, planeS2LHS
            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2LHS, 'click', function (event) {
            //   console.log("Remove Event lister S2")
            // })
            // // ----------------------------------------------------------------------

            // Check planeRedStatus
            // console.log("planeRedStatus onClick:- ", planeRedStatus);

            // Make Highlight True
            planeRedStatus = true

            if (planeRedStatus == true) {
              planeRedStatus = false
              // console.log("Red Highlight Active");

              // For InCorrect Answer
              // soundAnsCheck('../Sounds/Global_Music/Music/For the wrong answer.mp3')
              soundAnsCheck(wrong_ans_sound)
              // conditions('Wrong')
              soundReplyAudio(tryAgainSound)

              // Load RHS Image Here
              const loadS10LHS_Ans = new THREE.TextureLoader();
              loadS10LHS_Ans.load(
                // "../asset/level_one_assets/Incorrect answer highlight.png",
                ErrorBorder,

                function (textureLHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S10LHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureLHS_Ans,
                    transparent: true,
                    // visible: false 
                  });

                  //Create a 2x2 plane with texture
                  var PG_S10LHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeWrongAnsS10 = new THREE.Mesh(PG_S10LHS_Ans, PM_S10LHS_Ans);
                  if (S10Cor == false) {
                    scene.add(planeWrongAnsS10);
                  }
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
    // 2nd URL
    S10RHS,   // cap

    function (textureS10RHS) {
      var PM_S10RHS = new THREE.MeshBasicMaterial({
        map: textureS10RHS,
        transparent: true,
        // visible: false 
      });
      //Create a 2x2 plane with texture
      var PG_S10RHS = new THREE.PlaneBufferGeometry(3, 3);
      planeS10RHS = new THREE.Mesh(PG_S10RHS, PM_S10RHS);
      scene.add(planeS10RHS);
      planeS10RHS.position.x = SXIPosRHS
      planeS10RHS.position.y = SYIPosRHS

      // Add onClick Event Here Tshirt - Correct Answer
      if (AnsS10Cor == false) {
        const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
        domEvents.addEventListener(planeS10RHS, 'click', function (event) {
          if (AnsS10Cor == false) {
            console.log("Correct Answer S10")
            AnsS10Cor = true
            S1Cor, S2Cor, S3Cor, S4Cor, S5Cor, S6Cor, S7Cor, S8Cor, S9Cor = false
            S10Cor = true

            // Remove Event Listner After Click
            domEvents.removeEventListener(planeS10RHS, 'click', false)

            setTimeout(() => {
              scene.remove(planeS10LHS, planeS10RHS)
              scene.remove(planeLHSMain, planeRHSMain)

              // planeS10LHS = undefined
              // planeS10RHS = undefined
              // console.log("planeS10LHS Dispose", planeS10LHS);
              // console.log("planeS10RHS Dispose", planeS10RHS);
              // }, 700);
            }, 1000);


            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS1LHS, 'click', function (event) {
            //     console.log("Remove Event lister S10")
            // })
            // // ----------------------------------------------------------------------

            // // ----------------------------------------------------------------------
            // domEvents.removeEventListener(planeS2RHS, 'click', function (event) {
            //     console.log("Remove Event lister S2 RHS")
            // })
            // // ----------------------------------------------------------------------

            // Check Green Highlight Status
            // console.log("GreenStatus onClick:- ", planeGreenStatus);


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
              const loadS10RHS_Ans = new THREE.TextureLoader();
              loadS10RHS_Ans.load(
                // "../asset/Image place holder.png",
                SuccessBorder,

                function (textureRHS_Ans) {
                  // console.log("LHS Function Executed");
                  var PM_S10RHS_Ans = new THREE.MeshBasicMaterial({
                    map: textureRHS_Ans,
                    transparent: true,
                  });

                  //Create a 2x2 plane with texture
                  var PG_S10RHS_Ans = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
                  planeCorrectAnsS10 = new THREE.Mesh(PG_S10RHS_Ans, PM_S10RHS_Ans);
                  // if (S10Cor == false) {
                  scene.add(planeCorrectAnsS10);
                  // }
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

        var level2_Pre = localStorage.getItem('level2_Pre')
        var level2_Pre_val = JSON.parse(level2_Pre)
        // console.log("L2_Pre:-", level2_Pre_val)
        if (level2_Pre_val == false) {

          // document.location.href = '/level2_Pre.html'
          // window.location.replace(`${endPoint}/level2_Pre.html`);
          window.location.replace(`/level2_Pre.html`);

        } else {
          // document.location.href = '/level2.html'
          window.location.replace(`/level2.html`);

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

// localStorage.setItem('RewardPoints', 90)

// Funcyion Call After Level 1 Complete
// Level 1 Complete
function levelOneComplete() {

  // Set Reward Animation repeat every 2 second
  // Level Ended Sound
  // LevelCompleteSound('../Sounds/Global_Music/GL_A_8.mp3')
  LevelCompleteSound('../Sounds/Global_Music/GL_A_5.mp3')

  // setInterval(() => {
  //   RewardShow()
  // }, 4000);
  setTimeout(() => {
    RewardShow()
  }, 200);

  // SCom = false
  // Remove all Plane Gerometry
  // scene.remove(AllPlane)
  // AllPlane.visible = false
  // AllPlane.planeGeometry.dispose()
  // planeS10LHS.removeEventListener()
  // console.log("level 1 Complete")

  headerProgress(l1PS10)    // Change Progressbar Image
  // finalReward = " "
  // RewardPoints()


  // getRewardData = ""
  // RewardPoints(getRewardData)

  scene.remove(meshText)
  // headerReward(RewardEndImg) // Active
  newrewardPoints = localStorage.setItem('RewardPoints', getRewardData + 10)
  // getNewRewardPoints = localStorage.getItem('RewardPoints')
  getRewardData = localStorage.getItem('RewardPoints')
  // console.log("newrewardPoints End", getRewardData);
  RewardPoints(getRewardData)

  // if (planeS10LHS.visible == true) {
  //     console.log(" This is Visible")

  //     // Hide White Box
  //     planeLHSMain.visible = false
  //     planeRHSMain.visible = false
  //     // AllPlane.visible = false
  //     // planeCorrectAnsS10.visible = false
  //     // planeWrongAnsS10.visible = false
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
      // var PG_Again = new THREE.PlaneBufferGeometry(0.80, 0.70); // Active
      var PG_Again = new THREE.PlaneBufferGeometry(0.90, 0.70);
      planeLOCLHS = new THREE.Mesh(PG_Again, PM_Again);
      scene.add(planeLOCLHS);
      planeLOCLHS.position.x = -1
      // planeLOCLHS.position.y = -0.4
      planeLOCLHS.position.y = -0.35
      // planeLOCLHS.position.z = 1

      // OnClick Event For planeLHS
      const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
      domEvents.addEventListener(planeLOCLHS, 'click', function (event) {
        // console.log("planeLOCLHS clicked")
        // window.location.href = "/level1.html"
        localStorage.setItem('level1Complete', true)

        var currentPath = `${endPoint}/level1.html`

        if (currentPath == `${endPoint}/level1.html`) {
          console.log("Redirect New Page");
          console.log("endPoint", endPoint);
          location.href = '/level1.html'
        } else {
          location.href = '/level1.html'
        }

        // planeWrongAns.visible = false
        // planeWrongAnsS2.visible = false

        // // ----------------------------------------------------------------------
        // domEvents.removeEventListener(planeLOCLHS, 'click', function (event) {
        //     console.log("Remove Event lister LOC")
        // })
        // // ----------------------------------------------------------------------

        // planeWrongAnsS10.visible = false
        // planeWrongAnsS10.visible = false
        // planeCorrectAnsS10.visible = false

        // planeLZCLHS.dispose

        // Only Remove but Button is Active after this event perform
        // scene.remove(planeWrongAnsS10, planeCorrectAnsS10)

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
      // var PG_Next = new THREE.PlaneBufferGeometry(1.3, 0.70); // Active
      var PG_Next = new THREE.PlaneBufferGeometry(1.3, 0.70);
      planeLOCRHS = new THREE.Mesh(PG_Next, PM_Next);
      scene.add(planeLOCRHS);
      planeLOCRHS.position.x = 1
      // planeLOCRHS.position.y = -0.4
      planeLOCRHS.position.y = -0.35
      // planeLOCRHS.position.z = 1

      // // OnClick Event For planeLHS
      const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
      domEventsInnerLHS.addEventListener(planeLOCRHS, 'click', function (event) {
        console.log("Play the next level clicked")
        replyAudioSound.setVolume(0)
        localStorage.setItem('level1Complete', true)


        // S1Cor, S2Cor, S3Cor, S4Cor, S5Cor, S6Cor, S7Cor, S8Cor, S9Cor, S10Cor = false
        // S11 = true

        // planeS10LHS.visible = false
        // planeS10RHS.visible = false

        scene.remove(planeWrongAnsS10, planeCorrectAnsS10);
        // location.href = 'level2.html'
        // window.location.href = '/level2_Pre.html'   // Call 2nd Level of Presentation
        var currentPath = `${endPoint}/level1.html`

        if (currentPath == `${endPoint}/level1.html`) {
          console.log("Redirect New Page");
          console.log("endPoint", endPoint);
          var level2_Pre = localStorage.getItem('level2_Pre')
          var level2_Pre_val = JSON.parse(level2_Pre)
          // console.log("L2_Pre:-", level2_Pre_val)
          if (level2_Pre_val == false) {

            // document.location.href = '/level2_Pre.html'
            // window.location.replace(`${endPoint}/level2_Pre.html`);
            window.location.replace(`/level2_Pre.html`);

          } else {
            // document.location.href = '/level2.html'
            window.location.replace(`/level2.html`);

          }

        } else {
          // console.log("L2_Pre:-", level2_Pre_val)
          // location.href = '/level2_Pre.html'
          if (level2_Pre_val == false) {
            location.href = '/level2_Pre.html'
          } else {
            location.href = '/level2.html'
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
  renderer.render(scene, camera)
  document.body.appendChild(renderer.domElement)
}

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
// function init(finalData) {
function init() {
  // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3');
  // gPlayTshirt()
  NavbarBtns()

  function NavbarBtns() {

    // Call All Header Functions Here
    headerHome()
    headerBack()
    // headerProgress()
    headerSound('../asset/logo/Music.png')
    // headerSound()
    // toggelMusic()
    headerHint()

    headerReward(RewardStartImg)
    replyAudio(AudioReplaySound)
    RewardPoints(getRewardData)
    // replyAudio()
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

      /* -> Nomaan edited*/
      var planeGeometryRHS = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
      /* -> Nomaan edited*/

      // console.log("check for plaen size planeGeometryRHS", planeGeometryRHS)
      planeRHSMain = new THREE.Mesh(planeGeometryRHS, planeMaterialRHS);
      // console.log("planeRHS", planeRHS)
      scene.add(planeRHSMain);
      // Nomaan edited
      planeRHSMain.position.x = SXIPosRHS
      planeRHSMain.position.y = SYIPosRHS
      // Nomaan edited
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
  // l1Slide1()

  setTimeout(() => {
    console.log("Settimeout call")

    l1Slide1()
    // }, 1000);
  }, 500);

  // // Check Final data
  // switch (finalData) {
  //     case 1:
  //         l1Slide1()
  //         // AnswerCheckS1()
  //         break;
  //     case 2:
  //         l1Slide2()
  //         // AnswerCheckS1()
  //         // AnswerCheckS2()
  //         break;
  //     case 3:
  //         l1Slide3()
  //         break;
  //     case 4:
  //         l1Slide4()
  //         break;
  //     case 5:
  //         l1Slide5()
  //         break;
  //     case 6:
  //         l1Slide6()
  //         break;
  //     case 7:
  //         l1Slide7()
  //         break;
  //     case 8:
  //         l1Slide8()
  //         break;

  //     default:
  //         break;
  // }

  // Put Switch Case Here For Render the Last Round


  // Call Slide 5 For testing
  // l1Slide5()

  // //Render the scene - start Again if Render Not Working Properly
  // renderer.render(scene, camera);
  // document.body.appendChild(renderer.domElement);

  // controls.update();

  // Resize the Screen  - Global  - Active
  // window.addEventListener('resize', function () {
  //   camera.aspect = window.innerWidth / window.innerHeight;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize(window.innerWidth, window.innerHeight)
  // })
}
