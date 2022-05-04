// import useEffect from 'react'
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
console.log("Level 0 Working");
console.log("New 23/04")


// On Reload Page
// window.location.reload() // without passing true as argument
// const currentState = history.state

// Add Data to URL Varibles
// snum = slide Number
// var snum = 0
// var url = "http://127.0.0.1:5500/index.html#"

// function urlUpdate(snum) {
//     window.location.href = `${url}${snum}`
// }

// // window.history.pushState({}, '', url);
// window.history.pushState({}, '', window.location.href);

// // useEffect((
// //     console.log("Use effect working")
// // ), [])
// Loader When Page is Load
window.onload = function () {
    document.getElementById("loading").style.display = "none"
}



// Set Data To LocalStorage
// console.log("localStorage Data:- ", localStorage)
// console.log("localStorage Data:- ", localStorage.levelData)
// console.log("localStorage Keys:- ",Object.entries(localStorage))
// console.log("localStorage Keys:- ",localStorage.getItem())

// var setItemLocal = localStorage.setItem('level0', true)
var setItemLocal = localStorage.setItem('level0', true)
var setItemLocal = localStorage.setItem('level1', false)
var setItemLocal = localStorage.setItem('level2', false)
var setItemLocal = localStorage.setItem('level3', false)
var setItemLocal = localStorage.setItem('level4', false)

// var setItemLocal = localStorage.setItem('level1_Pre', false)     // Active
// var setItemLocal = localStorage.setItem('level2_Pre', false)     // Active
// var setItemLocal = localStorage.setItem('level3_Pre', false)     // Active
// var setItemLocal = localStorage.setItem('level4_Pre', false)     // Active

// console.log("setItemLocal:- ", setItemLocal);


// // Loader When Page is Load
// window.onload = function () { document.getElementById("loading").style.display = "none" }


// Fetch EndPoint of URL
console.log("Host", location.host);
// var endPoint = location.host
var endPoint = `http://${location.host}` // For Local Testing
// var endPoint = `https://${location.host}`    // For Online


// Access Canvas From index.html File
const canvas = document.querySelector('.c');
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

// // Resize the Screen  - Global -active
// window.addEventListener('resize', function () {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight)
// })

// // Loader When Page is Load
// window.onload = function () {
//     document.getElementById("loading").style.display = "none"
//         ,
//         console.log("refresh works-----------------------------");
//     // // // Resize the Screen  - Global
//     // window.addEventListener('resize', function () {
//     //   console.info("refresh and resize works")
//     camera.aspect = window.innerWidth / window.innerHeight;
//     //   // camera.aspect = window.innerHeight / window.innerWidth;   // For Testing
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     console.log("---------------------------------------------")
//     // })
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


// varible For Global Size
// PXPosLHS = 

const loadImg = new THREE.TextureLoader();
loadImg.load(
    "../asset/BackgroundL0.png",

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

// Global x,y Size For Slide Rounds
// SXIPosLHS = Slide X Image Position   LHS
// SYIPosLHS = Slide Y Image Position   LHS
// var SXIPosLHS = -1.75    // Old
var SXIPosLHS = -1.93
var SYIPosLHS = -0.45

// SXIPosRHS = Slide X Image Position   RHS
// SYIPosRHS = Slide Y Image Position   RHS
// var SXIPosRHS = 1.75     // Old
var SXIPosRHS = 1.93
var SYIPosRHS = -0.45

// Home Button Position
// var PHomeX = -2.8    // Old
var PHomeX = -3.2
var PHomeY = 1.5

// Back Button Position
// var PBackX = -2.1    // Old
var PBackX = -2.7
var PBackY = 1.5

// Sound Button Position
// var PSoundX = 1.5    // Old
var PSoundX = 1.7
var PSoundY = 1.5

// Hint Button Position
// var PHintX = 2   // Old
var PHintX = 2.2
var PHintY = 1.5

// Reward Button Position
var PRewardX = 3
var PRewardY = 1.53

// White Box Size
// WB:- White Box
// var WBPosX = 3   // Active
// var WBPosY = 3   // Active
var WBPosX = 3.6
var WBPosY = 3.15

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
    // PBackX = -2.6    // Old
    PBackX = -2.8
    PBackY = 1.5

    // Sound Button Position
    // PSoundX = 1.7    // Old
    PSoundX = 1.8
    PSoundY = 1.5

    // Hint Button Position
    // PHintX = 2.2 // Old
    PHintX = 2.3
    PHintY = 1.5

    // Reward Button Position
    PRewardX = 3.1
    PRewardY = 1.53


    // White Box Size
    // WB:- White Box
    WBPosX = 3.5
    WBPosY = 3

    // SXIPosLHS = Slide X Image Position   LHS
    // SYIPosLHS = Slide Y Image Position   LHS
    SXIPosLHS = -1.95
    SYIPosLHS = -0.45

    // SXIPosRHS = Slide X Image Position   RHS
    // SYIPosRHS = Slide Y Image Position   RHS
    SXIPosRHS = 1.95
    SYIPosRHS = -0.45

    // Reward Points Position
    RewardPointsX = 3.15
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
        sound2.pause()
        // window.alert("Page Change")
        window.location.reload()
    }
    if (pageHidden == false) {
        // sound.play()
        if (musicImgStatus == true) {
            sound2.play()
        }
        // window.location.reload()
    }
}, false);

// Image
var ins1 = "../asset/Instructor_L0_1.png"
var ins2 = "../asset/Instructor_L0_2.png"

var shand = "../asset/hand_img.png"

var play_again = "../asset/logo/Play again.png"
var play_next = "../asset/logo/Play the next level.png"
var play_game = "../asset/logo/Play game.png"

// var rewardImg = "../asset/logo/Rewards 0.png"
var rewardImg = "../asset/logo/Rewards.png"

// Skip Button 
var skipBtn = "../asset/logo/Skip.png"

// Slides
// intro more
var s1sound = "../Sounds/level0_sounds/ML_A_L0_4.mp3"
var s1lhs = "../asset/new_image_assets/game element-10.png"

var s1rhs = "../asset/new_image_assets/game element-03.png"

// intro less
var s2sound = "../Sounds/level0_sounds/ML_A_L0_5.mp3"
var s2lhs = "../asset/new_image_assets/game element-08.png"
var s2rhs = "../asset/new_image_assets/game element-02.png"

// intro equal
var s3equal = "../asset/new_image_assets/game element-05.png"
var s3sound = "../Sounds/level0_sounds/ML_A_L0_6.mp3"

// recog more
var s4lhs = "../asset/new_image_assets/game element-08.png"
var s4rhs = "../asset/new_image_assets/game element-02.png"
var s4sound = "../Sounds/level0_sounds/ML_A_L0_8.mp3"

// recog less         
var s5lhs = "../asset/new_image_assets/game element-03.png"
var s5rhs = "../asset/new_image_assets/game element-07.png"
var s5sound = "../Sounds/level0_sounds/ML_A_L0_9.mp3"
// recog equal
var s6img = "../asset/new_image_assets/game element-04.png"
var s6sound = "../Sounds/level0_sounds/ML_A_L0_10.mp3"

// Level0 Complete Sound
// Level 0 Complete Sound
var L0ComSound = "../Sounds/Global_Music/GL_A_8_L0_Complete.mp3"


// Success and Error Borders are here for add in cache
// Error Images
var ErrorBorder = "../asset/level_one_assets/Incorrect answer highlight.png"
var SuccessBorder = "../asset/level_one_assets/Correct answer highlight.png"

// Controls - access OrbitControls
// const controls = new OrbitControls( camera, renderer.domElement);

// to disable zoom
// controls.enableZoom = false;

// to disable rotation
// controls.enableRotate = false;

// to disable pan
// controls.enablePan = false;

// Global Varibale are Declare Here
var isAudioPlaying = false;
var setBackgroudAudio = true;

var isFirstVisit = false;
var audioPlayed = true;  // This is Check the audio is complete or Not
var insOneLoad = true;
var insTwoLoad = true;
var ins2Hide = false;
// var audio2Load = false;
var planeInsL0_1, planeInsL0_2, planeLHSMain, planeRHSMain, sound, sound2, listener, listener2, storeAudioState;

// Headers Variables
var planeHome, planeBack, planeProgress, planeSound, planeSoundOff, planeHint, planeReward;

// IntroMore Variables 
var planeintroMoreLHS, planeintroMoreRHS, planeintroMoreLHSHand;

// IntroLess Variables 
var planeintroLessLHS, planeintroLessRHS, planeintroLessRHSHand;

// IntroEqual Variables 
var planeintroEqualLHS, planeintroEqualRHS, planeintroEqualRHSHand;

// RecogMore Variables 
var planerecogMoreLHS, planerecogMoreRHS, planerecogMoreLHSHand;

// RecogLess Variables 
var planerecogLessLHS, planerecogLessRHS, planerecogLessLHSHand;

// RecogEqual Variables 
var planerecogEqualLHS, planerecogEqualRHS, planerecogEqualLHSHand;

// LevelZeroComplete (LZC) Variables 
var planeLZCLHS, planeLZCRHS;

var isLevel0PlayAgain = false

// var sound = document.getElementById("sound").value;
var nextAudio = false;  // For Next audio Approval default (false)
// console.log("nextAudio ", nextAudio);

//Check Image Status
var musicImgStatus = true, planeSkipBtn

var newrewardPoints, getNewRewardPoints, getRewardData, getRewardString, finalReward, meshText

// All Dot varibales
var dot, dot2, dot3, isDotShow = true

//  -----------------------------------------------------------------------------------
// var objectLevelData = {
//     mData: musicImgStatus,
//     // mData: 'Abhishek',
//     // mdData: 'kadiwala',
// }
// // Set Data to LoacalStorage
// var setLevelData = localStorage.setItem('levelData', JSON.stringify(objectLevelData));
// console.log("setLevelData", setLevelData);
//  -----------------------------------------------------------------------------------

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

// var nextAudioConst = false;

// Stop All Logs Dispay
console.log = function () { }
console.error = function () { }
console.warn = function () { }

// For Prevent Passive events
// window.addEventListener('touchstart', function (event) {
//     // some logic
//     event.preventDefault(); // <-- that should not be used in passive
//     // some other magic
// });
// window.addEventListener('touchstart', function () {
//     // some logic
// }, { passive: false }); // <-- mark the event listerner as NOT passive
// document.addEventListener("mousewheel", mousewheel.bind(this), { passive: false });
// document.addEventListener('wheel', function (e) {
//     e.preventDefault();
//     doStuff(e);
// }, { passive: false });
// document.addEventListener('touchmove', handler, { passive: false });
// (passiveSupported && active) ? el.addEventListener(name, fn, { passive: false, capture: bubble }) : el.addEventListener(name, fn, bubble || false);

// // Screen Lock Function Working
// function openFullscreen() {
//     // localStorage.setItem('FullScreen', true)
//     // console.log("Full Screen Fuction Working");
//     start()

//     function ready() {
//         const { type } = screen.orientation;
//         console.log(`Fullscreen and locked to ${type}. Ready!`);
//     }

//     async function start() {
//         // await document.body.requestFullscreen();
//         await screen.orientation.lock("landscape");
//         ready();
//     }

// }
// screen.orientation.lock("landscape")


// Call All The Functions Here
// init();
// Call Let's play Button
setTimeout(() => {
    // console.log("SetTime For Let's Play Button")
    firstVisit()
    // console.clear()
}, 500);
// firstVisit()
// checkBGAudio()

// setInterval(() => {
//     console.clear()
// }, 5000);


// ----------------------   Working to Set Image in Cache -----------------------------
// Store Data in Cache Memory
let isCacheSupported = "caches" in window;
const cacheName = "images";
// const imageUrl = "/assets/c.jpeg";

// Store Data in Cache Memory
// let isCacheSupported = "caches" in window;
// const cacheName = "images";
// const imageUrl = "/assets/c.jpeg";
// loadFromCache()

// Create Image Array Here
// var imageArray = [ErrorBorder, SuccessBorder, right_ans_sound, wrong_ans_sound, S1LHS, S1RHS, S2LHS, S2RHS, S3LHS, S3RHS]
var imageArray = [ErrorBorder, SuccessBorder]

// caches.open('cacheName').then(cache => {
//   console.log("Image Added");
// })

// Store Array/Single Images in Cache - Working
caches.open(cacheName).then(cache => {
    // cache.add(WhiteBox).then(() => { // Working
    // cache.add(ErrorBorder).then(() => {  // Working for single image
    cache.addAll(imageArray).then(() => { // Testing for All Images
        console.log("Data Added")
    }).catch(() => {
        console.log("Image not Found")
    })
})

// Matching Array/Single Images in Cache - Working
caches.open(cacheName).then(cache => {
    // cache.match(WhiteBox).then(settings => { // Working
    // cache.match(ErrorBorder).then(settings => { // Working for single image
    cache.match(imageArray).then(settings => { // Testing For All Images
        console.log("Setting-------", settings)
    })
})

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
    isFirstVisit = true;
    insOneLoad = true;  // Display 1st instructor
    insTwoLoad = false; // Hide 2nd instructor
    // Load Image here Start Button 
    const loadImg = new THREE.TextureLoader();
    loadImg.load(
        "../asset/Let's_play.png",

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


                // Working
                // ---------------------    levelplay count ------------------------------------------
                var visitCount = localStorage.getItem("level0_Visit");
                // visitCount = 0
                // Check if page_view entry is present
                if (visitCount) {
                    visitCount = Number(visitCount) + 1;
                    localStorage.setItem("level0_Visit", visitCount);
                } else {
                    visitCount = 1;
                    localStorage.setItem("level0_Visit", 1);
                }
                // counterContainer.innerHTML = visitCount;

                // // Adding onClick event listener
                // resetButton.addEventListener("click", () => {
                //     visitCount = 1;
                //     localStorage.setItem("page_view", 1);
                //     counterContainer.innerHTML = visitCount;
                // });
                //  -----------------------------------------------------------------------------------------------


                // level0Count += 1
                // localStorage.setItem('level0Count', levelcount + 1)

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
                    // checkBGAudio()
                    init();     // call Main Function
                    // console.log("this is true");
                    plane.visible = false;

                    // Comment audio only for testing purpose
                    playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
                    // btndisable = false

                    // console.log("insOneLoad inside Function", insOneLoad);
                    // console.log("insTwoLoad inside Function", insTwoLoad);
                    // isFirstVisit = false

                    //Level0 Complete
                    var level0_Com = localStorage.getItem('level0Complete')
                    var level0_Com_val = JSON.parse(level0_Com)
                    // console.log("level4_Pre:--------------------------", level0_Com_val)
                    if (level0_Com_val == true) {
                        // S6Cor = true
                        // l4PS6_Skip()
                        skiplevelBtn()
                    }

                    insOneLoad = false;  // Make instructor 1 invisible
                    insTwoLoad = false;  // Make instructor 2 invisible
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
    // // Resize the Screen  - Global - active
    // window.addEventListener('resize', function () {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight)
    // })
}

// firstVisit Function Will be Executed When Use Visit Page First Time
function firstVisitAgain() {
    // console.clear()

    // isFirstVisit = true;
    insOneLoad = true;  // Display 1st instructor
    insTwoLoad = false; // Hide 2nd instructor
    // Load Image here Start Button 
    const loadImg2 = new THREE.TextureLoader();
    loadImg2.load(
        "../asset/Let's_play.png",

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
                    playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
                    // btndisable = false

                    // console.log("insOneLoad inside Function", insOneLoad);
                    // console.log("insTwoLoad inside Function", insTwoLoad);
                    // isFirstVisit = false

                    insOneLoad = false;  // Make instructor 1 invisible
                    insTwoLoad = false;  // Make instructor 2 invisible
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
    // // Resize the Screen  - Global - active
    // window.addEventListener('resize', function () {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight)
    // })
}

// // setTimeout level 0_2 slide -- Move Instructor to right side
// setTimeout(firstVisit(),1000)

// Autoplay Function
// function autoPlay(){
//     var playAudio = document.querySelector('.c').autoPlay;
//}

// // Call function on Reload
// window.onload = function() {
//     setTimeout(function(){
//     // myAudio.play();
//     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
//     }, 0); // you can change this... whatever you want //
// }

// Call Function On Reload page
// if (){
// window.onload = playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
// }

// playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
// setInterval(playAudio, 5000)

// setTimeout(function () { 
//     console.log("Set Timeout Function -ML_A_L0_1 ");

//     // Load Required Audio (playAudio Function is Declare Above)
//     sound.play();
//     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')

//     // // Set Interval Here
//     // const setIntervalobj = setInterval(playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3'), 70)
//     // clearInterval(setIntervalobj)

// }, 1000)

// setInterval(playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3'), 1000)

// setTimeout(function () { 
//     console.log("Set Timeout Function -ML_A_L0_2 ");

//     // Load Required Audio (playAudio Function is Declare Above)
//     // getAudioContext();
//     // console.log("getAudioContext:- ", getAudioContext);
//     // playAudio('../Sounds/level0_sounds/ML_A_L0_2.mp3')

//     //  ------------------------  Working  --------------------------
//                 // Inner Function Change Image onClick         
//                 const loadLHSImgInner = new THREE.TextureLoader();
//                 loadLHSImgInner.load(
//                 // "../asset/Set.png",
//                 "../asset/new_image_assets/game element-01.png",

//                 //   "../asset/test.jpeg",
//                 //  "../asset/Image place holder.png",
//                     function (textureInnerLHS) {
//                         var planeMaterialInnerLHS = new THREE.MeshBasicMaterial({
//                             map: textureInnerLHS,
//                             // visible: false 
//                         });
//                         textureInnerLHS.wrapS = THREE.RepeatWrapping;
//                         textureInnerLHS.wrapT = THREE.RepeatWrapping;
//                         // textureLHS.repeat.set( 4, 4 );
//                         //Create a 2x2 plane with texture
//                         var planeGeometryInnerLHS = new THREE.PlaneBufferGeometry(2, 2);
//                         var planeInnerLHS = new THREE.Mesh(planeGeometryInnerLHS, planeMaterialInnerLHS);
//                         scene.add(planeInnerLHS);
//                         planeInnerLHS.position.x = -1.5
//                         planeInnerLHS.position.y = -0.7

//                         // // OnClick Event For planeLHS
//                         // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//                         // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
//                         //     console.log("planeInnerLHS clicked")
//                         //     // alert("btn clicked")
//                         // }, false)

//                         //Render the scene
//                         renderer.render(scene, camera);
//                         document.body.appendChild(renderer.domElement);
//                     },
//                     // undefined,
//                     function (err) {
//                         console.error('An error happened in LHS Image.');
//                     }
//                 );
// }, 1000)


// Function For Play Audio
function playAudio(path) {
    // console.clear()

    isAudioPlaying = true;
    if (isAudioPlaying) {
        // console.log("IsAudioPlaying:- " + isAudioPlaying)

        // const audioScene = new THREE.Scene();

        // Audio Listener Object
        listener = new THREE.AudioListener();
        // camera.add(listener);
        scene.add(listener);

        // create the PositionalAudio object (passing in the listener)
        sound = new THREE.PositionalAudio(listener);

        // load a sound and set it as the PositionalAudio object's buffer
        var audioLoader = new THREE.AudioLoader();
        // console.log("audioLoader :-", audioLoader)
        // console.log("audioLoader Start :-", audioLoader.manager.itemStart);
        // console.log("audioLoader End :-", audioLoader.manager.itemEnd);
        audioLoader.load(path, function (buffer) {
            sound.setBuffer(buffer);
            sound.setRefDistance(20);
            // Sound Speed Control here

            sound.play();
            // For Autoplay audio
            // sound.autoplay = true;
            // sound.setVolume(0.5)
            // console.log("sound:- ", sound);
            storeAudioState = sound.source.onended;

            // console.log("storeAudioState", storeAudioState);
            sound.source.onended = function () {

                switch (path) {
                    case '../Sounds/level0_sounds/ML_A_L0_1.mp3':
                        // console.log("first end");
                        presentationTwo()
                        playAudio("../Sounds/level0_sounds/ML_A_L0_2.mp3")

                        // insTwoLoad = false
                        // console.log("insTwoLoad in switch", insTwoLoad);
                        break;

                    case '../Sounds/level0_sounds/ML_A_L0_2.mp3':
                        // console.log("Second end");
                        // insTwoLoad = false
                        // ins2Hide = true
                        setTimeout(() => {
                            introMore()
                        }, 200);
                        // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
                        break;
                    case '../Sounds/level0_sounds/ML_A_L0_4.mp3':
                        // console.log("Third end");
                        // insTwoLoad = false
                        // ins2Hide = true
                        setTimeout(() => {
                            introLess()
                        }, 200);
                        // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
                        break;
                    case '../Sounds/level0_sounds/ML_A_L0_5.mp3':
                        // console.log("Fourth end");
                        // insTwoLoad = false
                        // ins2Hide = true
                        setTimeout(() => {

                            introEqual()
                        }, 200);
                        // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
                        break;
                    case '../Sounds/level0_sounds/ML_A_L0_6.mp3':
                        // console.log("Fifth end");
                        playAudio("../Sounds/level0_sounds/ML_A_L0_7.mp3")
                        // insTwoLoad = false
                        // ins2Hide = true
                        // recogMore()
                        // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
                        break;
                    case '../Sounds/level0_sounds/ML_A_L0_7.mp3':
                        // console.log("sixth end");
                        // insTwoLoad = false
                        // ins2Hide = true
                        setTimeout(() => {

                            recogMore()
                        }, 200);
                        // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
                        break;
                    case '../Sounds/level0_sounds/ML_A_L0_8.mp3':
                        // console.log("seventh end");
                        // insTwoLoad = false
                        // ins2Hide = true
                        setTimeout(() => {

                            recogLess()
                        }, 200);
                        // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
                        break;
                    case '../Sounds/level0_sounds/ML_A_L0_9.mp3':
                        // console.log("Egighth end");
                        // insTwoLoad = false
                        // ins2Hide = true
                        setTimeout(() => {

                            recogEqual()
                        }, 200);
                        // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
                        break;
                    case '../Sounds/level0_sounds/ML_A_L0_10.mp3':
                        // console.log("Nineth end");
                        // insTwoLoad = false
                        // ins2Hide = true
                        setTimeout(() => {
                            levelZeroComplete()

                        }, 200);

                        // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
                        break;

                    default:

                        break;
                }
                console.log('sound ended');
                nextAudio = true;
                // console.log("sound.source.onended", sound.source.onended);
                // audio2Load = true
                // nextAudioConst = true;
                // console.log("nextAudio inside", nextAudio);
                // var storeAudioState =  sound.source.onended;
                // console.log("storeAudioState", storeAudioState);
                // console.log("storeAudioState Inside", storeAudioState);
                // console.log("sound Inside :- ", sound);
                // console.log("sound Inside isplaying this :- ", isPlaying);
                // console.log("sound Inside isplaying :- ", sound.isPlaying);
                this.isPlaying = false;
                // sound.isPlaying = false; 
                // console.log("sound Inside isplaying this:- ", this.isPlaying);
                // console.log("sound Inside isplaying :- ", sound.isPlaying);

                // if(nextAudio == true){
                // presentationTwo()
                // nextAudio = false
                // testingAudio2()
                // playAudio("../Sounds/level0_sounds/ML_A_L0_2.mp3")
                // console.log("audio2Load status:-", audio2Load);
                // audio2Load = true
                // if (audio2Load == true){
                //     // playAudio("../Sounds/level0_sounds/ML_A_L0_2.mp3")
                //     presentationTwo()
                //     // insTwoLoad = false
                //     audio2Load = false
                // }

                // }

                // if (this.isPlaying == false){
                //     console.log("playing");
                //     audioPlayed = true
                // }
            }
        });

    }

}

// Pause BG Audio Here
function soundBG(path) {

    // Audio Listener Object
    listener2 = new THREE.AudioListener();
    // camera.add(listener);
    scene.add(listener2);

    // create the PositionalAudio object (passing in the listener)
    sound2 = new THREE.PositionalAudio(listener2);

    // load a sound and set it as the PositionalAudio object's buffer
    var audioLoader2 = new THREE.AudioLoader();
    // console.log("audioLoader :-", audioLoader)
    // console.log("audioLoader Start :-", audioLoader.manager.itemStart);
    // console.log("audioLoader End :-", audioLoader.manager.itemEnd);
    audioLoader2.load(path, function (buffer) {
        sound2.setBuffer(buffer);
        sound2.setRefDistance(20);
        // Sound Speed Control here

        sound2.play();
        // For Autoplay audio
        // sound.autoplay = true;
        sound2.setVolume(0.1)
        // console.log("sound:- ", sound);
        storeAudioState = sound2.source.onended;
    }, false);
}

// All Header Components Add Here
// Home Button Function
function headerHome() {
    // console.log("Function headerHome");
    const hHome = new THREE.TextureLoader();
    hHome.load(
        // Load Home Image
        "../asset/logo/Home.png",

        function (textureHome) {
            var planeMaterialHome = new THREE.MeshBasicMaterial({
                map: textureHome,
                transparent: true,
            });
            //Create a 0.30x0.30 plane with texture
            // var planeGeometryHome = new THREE.PlaneBufferGeometry(0.37, 0.35); // Active
            var planeGeometryHome = new THREE.PlaneBufferGeometry(0.37, 0.33);
            planeHome = new THREE.Mesh(planeGeometryHome, planeMaterialHome);
            scene.add(planeHome);
            // planeHome.position.x = -2.8
            // planeHome.position.y = 1.5
            // planeHome.position.z = 1

            planeHome.position.x = PHomeX
            planeHome.position.y = PHomeY
            planeHome.position.z = 1

            // OnClick Event For planeHome
            const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
            domEvents.addEventListener(planeHome, 'click', function (event) {
                console.log("planeHome clicked")

                // planeLZCLHS.dispose

                // Only Remove but Button is Active after this event perform
                // scene.remove(planeLZCLHS, planeLZCRHS);


                // firstVisitAgain()
                // homePopup();
                // Redirect to new page onClick - working
                // domEventsLHS.userData = { URL: "http://stackoverflow.com" };
                // window.location.href = '/homePopup.html';

                var currentPath = `${endPoint}/index.html`

                if (currentPath == `${endPoint}/index.html`) {
                    console.log("Redirect New Page");
                    console.log("endPoint", endPoint);
                    // document.location.href = '/homePopup.html'
                    // window.location.replace(`${endPoint}/homePopup.html`);
                    window.location.replace(`${endPoint}/homeIndex.html`);
                } else {
                    // document.location.href = '/homePopup.html'
                    window.location.replace(`${endPoint}/homeIndex.html`);
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
    // // Resize the Screen  - Global - Active
    // window.addEventListener('resize', function () {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight)
    // })
}

// Back Button Function
function headerBack() {
    // console.log("Function headerBack");
    const hBack = new THREE.TextureLoader();
    hBack.load(
        // Load Back_inActive Image
        "../asset/logo/Back_Inactive.png",

        function (textureBack) {
            var planeMaterialBack = new THREE.MeshBasicMaterial({
                map: textureBack,
                transparent: true,
                // visible: false 
            });
            //Create a 0.30x0.30 plane with texture
            var planeGeometryBack = new THREE.PlaneBufferGeometry(0.37, 0.33);
            planeBack = new THREE.Mesh(planeGeometryBack, planeMaterialBack);
            scene.add(planeBack);
            // planeBack.position.x = -2.2
            // planeBack.position.y = 1.5
            // planeBack.position.z = 1

            planeBack.position.x = PBackX
            planeBack.position.y = PBackY
            planeBack.position.z = 1

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

// Progress Button Function
function headerProgress() {
    // console.log("Function headerProgress");
    const hProgress = new THREE.TextureLoader();
    hProgress.load(
        // Load Back_inActive Image
        "../asset/Progress_bar/Progress bar_Type_1.png",

        function (textureProgress) {
            var planeMaterialProgress = new THREE.MeshBasicMaterial({
                map: textureProgress,
                transparent: true,
                // visible: false 
            });
            //Create a 0.30x0.30 plane with texture
            // var planeGeometryProgress = new THREE.PlaneBufferGeometry(2, 0.35); // Active
            var planeGeometryProgress = new THREE.PlaneBufferGeometry(2, 0.28);
            // var planeGeometryProgress = new THREE.PlaneBufferGeometry(1.8, 0.35);
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

// function audioChecker(imgpath){
//     // console.log("audio checker working")

//     switch (imgpath) {
//         case '../asset/logo/Music.png':
//             sound2.pause();
//             headerSoundOff()
//             break;
//         case '../asset/logo/Music_Mute.png':
//             sound2.play();
//             break;

//         default:
//             break;
//     }
// }

// Sound Button Function

// if (musicImgStatus == true){
//     headerSound("../asset/logo/Music.png")
// }else{
//     headerSound("../asset/logo/Music_Mute.png")
// }

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
            // var planeGeometrySound = new THREE.PlaneBufferGeometry(0.37, 0.35);
            var planeGeometrySound = new THREE.PlaneBufferGeometry(0.37, 0.33);
            planeSound = new THREE.Mesh(planeGeometrySound, planeMaterialSound);
            scene.add(planeSound);
            // planeSound.position.x = 1.5
            // planeSound.position.y = 1.5
            // planeSound.position.z = 1

            planeSound.position.x = PSoundX
            planeSound.position.y = PSoundY
            planeSound.position.z = 1

            // Add OnClick event Here
            // Music off When This Event Occurs
            const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
            domEvents.addEventListener(planeSound, 'click', function (event) {
                console.log("Sound Btn Click")
                toggelMusic()
                // toggelMusic(path)
                // sound2.pause();
                // puase backgroud sound
                // setBackgroudAudio = false
                // checkBGAudio()
                // stopBGAudio();

                // audioChecker('../asset/logo/Music.png')
                // headerSoundOff()

                // sound2.stop();

                // if ('../Sounds/level0_sounds/backgroud_music_free.mp3'){
                //     // sound.setVolume(0.1)
                //     // sound.pause()
                // }

                // return (
                //     <div class="firstJsDiv">
                //         <input type="button" placeholder="demo Btn" />
                //         {console.log("Checking Div Tag")}
                //     </div>
                // )
                // (

                // console.log("This is Return Function")
                // {<button>
                //     click
                // </button>}

                // )
                // scene.remove(planeSound)



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
                var planeGeometrySound = new THREE.PlaneBufferGeometry(0.37, 0.33);
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
                var planeGeometrySound = new THREE.PlaneBufferGeometry(0.37, 0.33);
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

// Hint Button Function
function headerHint() {
    // console.log("Function headerHint");
    const hHint = new THREE.TextureLoader();
    hHint.load(
        // Load Hint_Inactive Image
        "../asset/logo/Hint_Inactive.png",

        function (textureHint) {
            var planeMaterialHint = new THREE.MeshBasicMaterial({
                map: textureHint,
                transparent: true,
                // visible: false 
            });
            //Create a 0.30x0.30 plane with texture
            var planeGeometryHint = new THREE.PlaneBufferGeometry(0.37, 0.33);
            planeHint = new THREE.Mesh(planeGeometryHint, planeMaterialHint);
            scene.add(planeHint);
            // planeHint.position.x = 2
            // planeHint.position.y = 1.5
            // planeHint.position.z = 1

            planeHint.position.x = PHintX
            planeHint.position.y = PHintY
            planeHint.position.z = 1

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

// Reward Button Function
function headerReward() {
    // console.log("Function headerReward");
    const hReward = new THREE.TextureLoader();
    hReward.load(
        // Load Rewards Image
        // "../asset/logo/Rewards.png",
        // "../asset/logo/Rewards 00.png",
        rewardImg,

        function (textureReward) {
            var planeMaterialReward = new THREE.MeshBasicMaterial({
                map: textureReward,
                transparent: true,
                // visible: false 
            });
            //Create a 0.30x0.30 plane with texture
            var planeGeometryReward = new THREE.PlaneBufferGeometry(1, 0.33);
            planeReward = new THREE.Mesh(planeGeometryReward, planeMaterialReward);
            scene.add(planeReward);
            // planeReward.position.x = 2.9
            // planeReward.position.y = 1.53
            // planeReward.position.z = 1

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
// --------------------------------------------------------------------------------------------------------

// function testingAudio2(){
//     console.log("total execution count");
//     presentationTwo()
// }
// playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3');

// setTimeout(function () { 
//     console.log("Set Timeout Function -ML_A_L0_1 ");

//     // Load Required Audio (playAudio Function is Declare Above)
//     sound.play();
//     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')

//     // // Set Interval Here
//     // const setIntervalobj = setInterval(playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3'), 70)
//     // clearInterval(setIntervalobj)

// }, 1000)


// Function For Load Dynamic Images
// function loadDynamicImg() {
//     console.log("load Dynamic Image Function Working ");
//     // var multiImage = new Array();
//     // multiImage[0] = "../asset/new_image_assets/game element-01.png" 
//     // multiImage[1] = "../asset/new_image_assets/game element-02.png"
//     // multiImage[2] = "../asset/new_image_assets/game element-03.png"
// }



// ML_A_L0_1 - 0.07sec audio
// setTimeout(function () {
//     console.log("Set Timeout Function -ML_A_L0_1 ");
//     // Load Required Audio (playAudio Function is Declare Above)
//     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')

// }, 1000)

// // ML_A_L0_1 - 0.07sec audio
// setTimeout(function () {
//     console.log("Set Timeout Function - 2")
//     playAudio("../Sounds/level0_sounds/ML_A_L0_2.mp3")
// }, 2000)

// Function for Render Instructor Slide-1
// function renderInsOne() {

// Load Instructor-1

function presentationOne() {
    console.clear()
    // snum = 1
    // urlUpdate(1)
    // insTwoLoad = true
    // console.log("Function renderInsOne Execute");
    // Render 2nd Instructor After 1st audio complete
    // if( nextAudio == true){
    // Load Instructor-1 At Center 
    const loadInsL0_1 = new THREE.TextureLoader();
    loadInsL0_1.load(
        ins1,

        function (textureInsL0_1) {
            var planeMaterialInsL0_1 = new THREE.MeshBasicMaterial({
                map: textureInsL0_1,
                transparent: true,
                // visible: false 
            });
            //Create a 2x2 plane with texture
            var planeGeometryInsL0_1 = new THREE.PlaneBufferGeometry(3, 3);
            // var planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
            scene.add(planeInsL0_1);
            planeInsL0_1.position.x = 0.5
            planeInsL0_1.position.y = -0.8
            // planeInsL0_1.position.z = 1

            // console.log("nextAudio status in One",nextAudio);
            if (nextAudio == true) {
                planeInsL0_1.visible = false
                // insTwoLoad = true;
                // presentationTwo();
            }
            nextAudio = false

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in Instructor L0_1 Image.');
        }
    );
    // }

    // ------------------------------------------------------------------------------------------
    // Dot Animation --Working
    if (isDotShow == true) {
        // Function for make circle
        function createCircleTexture(color, size) {
            var matCanvas = document.createElement('canvas');
            matCanvas.width = matCanvas.height = size;
            var matContext = matCanvas.getContext('2d');
            // create texture object from canvas.
            var texture = new THREE.Texture(matCanvas);
            // Draw a circle
            var center = size / 2;
            matContext.beginPath();
            matContext.arc(center, center, size / 2, 0, 2 * Math.PI, false);
            matContext.closePath();
            matContext.fillStyle = color;
            matContext.fill();
            // need to set needsUpdate
            texture.needsUpdate = true;
            // return a texture made from the canvas
            return texture;
        }

        // Dot Put Here -1
        var dotGeometry = new THREE.BufferGeometry();
        dotGeometry.setAttribute('position', new THREE.Float32BufferAttribute(new THREE.Vector3().toArray(), 3));
        // var dotMaterial = new THREE.PointsMaterial({ size: 0.1 });
        var dotMaterial = new THREE.PointsMaterial({
            size: 0.2,
            // map: createCircleTexture('#00ff00', 256),
            map: createCircleTexture('#ffffff', 256),
            transparent: true,
            depthWrite: false,
            opacity: 1
        });
        dot = new THREE.Points(dotGeometry, dotMaterial);
        scene.add(dot);
        dot.position.x = 0.9
        dot.position.y = 0.27
        dot.position.z = 1


        // Dot Put Here -2
        var dotGeometry2 = new THREE.BufferGeometry();
        dotGeometry2.setAttribute('position', new THREE.Float32BufferAttribute(new THREE.Vector3().toArray(), 3));
        // var dotMaterial = new THREE.PointsMaterial({ size: 0.1 });
        var dotMaterial2 = new THREE.PointsMaterial({
            size: 0.2,
            // map: createCircleTexture('#00ff00', 256),
            map: createCircleTexture('#ffffff', 256),
            transparent: true,
            depthWrite: false,
            opacity: 0.5
        });
        dot2 = new THREE.Points(dotGeometry2, dotMaterial2);
        scene.add(dot2);
        dot2.position.x = 1.08
        dot2.position.y = 0.27
        dot2.position.z = 1
        // dot.scale.set(0, 0, 0);


        // Dot Put Here -3
        var dotGeometry3 = new THREE.BufferGeometry();
        dotGeometry3.setAttribute('position', new THREE.Float32BufferAttribute(new THREE.Vector3().toArray(), 3));
        // var dotMaterial = new THREE.PointsMaterial({ size: 0.1 });
        var dotMaterial3 = new THREE.PointsMaterial({
            size: 0.2,
            // map: createCircleTexture('#00ff00', 256),
            map: createCircleTexture('#ffffff', 256),
            transparent: true,
            depthWrite: false,
            opacity: 0.2
        });
        dot3 = new THREE.Points(dotGeometry3, dotMaterial3);
        scene.add(dot3);
        dot3.position.x = 1.25
        dot3.position.y = 0.27
        dot3.position.z = 1

        // dot.position.z = 0

        // showDot()

        // function showDot() {
        //     setTimeout(() => {
        //         dot.position.z = 1
        //     }, 1000)
        // }
        // Interval-1
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 1
            dotMaterial2.opacity = 0.5
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 600);


        // Interval 2
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.4
            dotMaterial2.opacity = 1
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 1600);

        // Interval -3
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.2
            dotMaterial2.opacity = 0.4
            dotMaterial3.opacity = 1

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 2200);

        // Interval -4
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 1
            dotMaterial2.opacity = 0.5
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 2800);

        // Interval -5
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.4
            dotMaterial2.opacity = 1
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 3400);

        // Interval -6
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.2
            dotMaterial2.opacity = 0.4
            dotMaterial3.opacity = 1

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 4000);

        // Interval -7
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 1
            dotMaterial2.opacity = 0.5
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 4600);


        // Interval -8
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.4
            dotMaterial2.opacity = 1
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 5200);

        // Interval -9
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.2
            dotMaterial2.opacity = 0.4
            dotMaterial3.opacity = 1

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 5800);

        // Interval -10
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 1
            dotMaterial2.opacity = 0.5
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 6400);


        // Interval -11
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.4
            dotMaterial2.opacity = 1
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 7000);


        // Interval -12
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.2
            dotMaterial2.opacity = 0.4
            dotMaterial3.opacity = 1

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 7600);

        // Interval -13
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 1
            dotMaterial2.opacity = 0.5
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 8200);


        // Interval -14
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.4
            dotMaterial2.opacity = 1
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 9000);


        // Interval -15
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.2
            dotMaterial2.opacity = 0.4
            dotMaterial3.opacity = 1

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 10000);

        // Interval -16
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 1
            dotMaterial2.opacity = 0.5
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 10800);


        // Interval -17
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.4
            dotMaterial2.opacity = 1
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 11600);


        // Interval -18
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.2
            dotMaterial2.opacity = 0.4
            dotMaterial3.opacity = 1

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 12400);


        // Interval -19
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 1
            dotMaterial2.opacity = 0.5
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 13400);


        // Interval -20
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.4
            dotMaterial2.opacity = 1
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 14000);


        // Interval -21
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.2
            dotMaterial2.opacity = 0.4
            dotMaterial3.opacity = 1

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 14800);

        // Interval -22
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 1
            dotMaterial2.opacity = 0.5
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 15600);


        // Interval -23
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.4
            dotMaterial2.opacity = 1
            dotMaterial3.opacity = 0.2

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 16200);


        // Interval -24
        // setInterval(() => {
        setTimeout(() => {
            console.log("interval call");
            // scene.add(dot);
            // dot.position.z = 1
            dotMaterial.opacity = 0.2
            dotMaterial2.opacity = 0.4
            dotMaterial3.opacity = 1

            renderer.render(scene, camera)
            document.body.appendChild(renderer.domElement);
        }, 17000);



    }
    // ------------------------------------------------------------------------------------------

    //Render the scene
    renderer.render(scene, camera);
    document.body.appendChild(renderer.domElement);

    // // Resize the Screen  - Global - active
    // window.addEventListener('resize', function () {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight)
    // })
}

// Function for Render Instructor Slide-2
// function renderInsTwo() {
function presentationTwo() {
    console.clear()
    // Hide Instructor-1 After Audio-1 complete
    // nextAudio = false
    // console.log("-------");
    // scene.remove(planeInsL0_1)
    if (insOneLoad == false) {
        planeInsL0_1.visible = false
        // console.log("Hide Instructor here");
    }
    // console.log("Function presentationTwo Execute");
    // console.log("nextAudio in presentationTwo", nextAudio);

    // Render 2nd Instructor After 1st audio complete
    // Load Instructor After 1st audio execution done 
    const loadInsL0_2 = new THREE.TextureLoader();
    loadInsL0_2.load(
        ins2,

        function (textureInsL0_2) {
            var planeMaterialInsL0_2 = new THREE.MeshBasicMaterial({
                map: textureInsL0_2,
                transparent: true,
                // visible: false 
            });
            //Create a 2x2 plane with texture
            var planeGeometryInsL0_2 = new THREE.PlaneBufferGeometry(3, 3);
            planeInsL0_2 = new THREE.Mesh(planeGeometryInsL0_2, planeMaterialInsL0_2);
            scene.add(planeInsL0_2);
            planeInsL0_2.position.x = 2.3
            planeInsL0_2.position.y = -0.8
            // planeInsL0_2.position.z = 1

            //Render the scene
            renderer.render(scene, camera);
            document.body.appendChild(renderer.domElement);
        },
        // undefined,
        function (err) {
            console.error('An error happened in Instructor L0_2 Image.');
        }
    );
    // }
}

// Function for Introduction of More
// Object Size Change
function introMore() {
    console.clear()

    isDotShow = false
    // scene.remove(dotMaterial, dotMaterial2, dotMaterial3)
    scene.remove(dot, dot2, dot3)
    // console.log("planeInsL0_2.visible ", planeInsL0_2.visible);
    // Audio Indicating More
    playAudio(s1sound)
    if (planeInsL0_2.visible) {
        // console.log("Is Visible");
        planeInsL0_2.visible = false
    }

    //  ------------------------  Working  --------------------------
    // Inner Function Change Image onClick         
    const introMoreloadLHS = new THREE.TextureLoader();
    introMoreloadLHS.load(
        // "../asset/Set.png",
        s1lhs,

        // S3LHS,

        //   "../asset/test.jpeg",
        //  "../asset/Image place holder.png",
        function (textureintroMoreLHS) {
            var planeMaterialintroMoreLHS = new THREE.MeshBasicMaterial({
                map: textureintroMoreLHS,
                transparent: true,
                // visible: false 
            });
            // textureintroMoreLHS.wrapS = THREE.RepeatWrapping;
            // textureintroMoreLHS.wrapT = THREE.RepeatWrapping;
            // textureLHS.repeat.set( 4, 4 );

            //Create a 2x2 plane with texture
            var planeGeometryintroMoreLHS = new THREE.PlaneBufferGeometry(2.5, 2.5);
            planeintroMoreLHS = new THREE.Mesh(planeGeometryintroMoreLHS, planeMaterialintroMoreLHS);
            scene.add(planeintroMoreLHS);
            planeintroMoreLHS.position.x = SXIPosLHS
            planeintroMoreLHS.position.y = SYIPosLHS

            // // OnClick Event For planeLHS
            // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
            //     console.log("planeInnerLHS clicked")
            //     // alert("btn clicked")
            // }, false)

            // Add Hand Image Here
            const loadLHSHand = new THREE.TextureLoader();
            loadLHSHand.load(
                // Hand Image
                shand,

                function (textureintroMoreLHSHand) {
                    var planeMaterialintroMoreLHSHand = new THREE.MeshBasicMaterial({
                        map: textureintroMoreLHSHand,
                        transparent: true,
                        // visible: false 
                    });
                    textureintroMoreLHSHand.wrapS = THREE.RepeatWrapping;
                    textureintroMoreLHSHand.wrapT = THREE.RepeatWrapping;
                    // textureLHS.repeat.set( 4, 4 );
                    //Create a 2x2 plane with texture
                    var planeGeometryintroMoreLHSHand = new THREE.PlaneBufferGeometry(0.9, 0.9);
                    planeintroMoreLHSHand = new THREE.Mesh(planeGeometryintroMoreLHSHand, planeMaterialintroMoreLHSHand);
                    scene.add(planeintroMoreLHSHand);
                    planeintroMoreLHSHand.position.x = -0.55
                    planeintroMoreLHSHand.position.y = -1.5
                    // // OnClick Event For planeLHS
                    // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
                    // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
                    //     console.log("planeInnerLHS clicked")
                    //     // alert("btn clicked")
                    // }, false)

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
        },
        // undefined,
        function (err) {
            console.error('An error happened in LHS Image.');
        }
    );

    //  ------------------------  Working  --------------------------
    // RHS Inner Function Change Image onClick
    //  var meshRHS;         
    const introMoreloadRHS = new THREE.TextureLoader();
    introMoreloadRHS.load(
        // 2nd URL
        s1rhs,


        function (textureintroMoreRHS) {
            var planeMaterialintroMoreRHS = new THREE.MeshBasicMaterial({
                map: textureintroMoreRHS,
                transparent: true,
                // visible: false 
            });
            // textureintroMoreRHS.wrapS = THREE.RepeatWrapping;
            // textureintroMoreRHS.wrapT = THREE.RepeatWrapping;
            // textureLHS.repeat.set( 4, 4 );

            //Create a 2x2 plane with texture
            var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(2.5, 2.5);
            planeintroMoreRHS = new THREE.Mesh(planeGeometryintroMoreRHS, planeMaterialintroMoreRHS);
            scene.add(planeintroMoreRHS);
            planeintroMoreRHS.position.x = SXIPosRHS
            planeintroMoreRHS.position.y = SYIPosRHS
            // // OnClick Event For planeLHS
            // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
            //     console.log("planeInnerLHS clicked")
            //     // alert("btn clicked")
            // }, false)

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

// Function for Introduction of Less
// Object Size Change 
function introLess() {
    console.clear()
    // console.log("planeintroMoreLHS Status:- ", planeintroMoreLHS.visible);
    // Audio Indicating Less
    playAudio(s2sound)
    if (planeintroMoreLHS.visible) {
        // console.log("Is Visible introLess");
        planeintroMoreLHS.visible = false
        planeintroMoreRHS.visible = false
        planeintroMoreLHSHand.visible = false
    }

    //  ------------------------  Working  --------------------------
    // Load Image into introless LHS Side
    const loadLHSintroLess = new THREE.TextureLoader();
    loadLHSintroLess.load(
        s2lhs,

        function (textureintroLessLHS) {
            var planeMaterialintroLessLHS = new THREE.MeshBasicMaterial({
                map: textureintroLessLHS,
                transparent: true,
                // visible: false 
            });
            //Create a 2x2 plane with texture
            var planeGeometryintroLessLHS = new THREE.PlaneBufferGeometry(2.5, 2.5);
            planeintroLessLHS = new THREE.Mesh(planeGeometryintroLessLHS, planeMaterialintroLessLHS);
            scene.add(planeintroLessLHS);
            planeintroLessLHS.position.x = SXIPosLHS
            planeintroLessLHS.position.y = SYIPosLHS

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
    // Load Image into introless RHS Side         
    const loadRHSintroLess = new THREE.TextureLoader();
    loadRHSintroLess.load(
        // 2nd URL
        s2rhs,

        function (textureintroLessRHS) {
            var planeMaterialintroLessRHS = new THREE.MeshBasicMaterial({
                map: textureintroLessRHS,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            var planeGeometryintroLessRHS = new THREE.PlaneBufferGeometry(2.5, 2.5);
            planeintroLessRHS = new THREE.Mesh(planeGeometryintroLessRHS, planeMaterialintroLessRHS);
            scene.add(planeintroLessRHS);
            planeintroLessRHS.position.x = SXIPosRHS
            planeintroLessRHS.position.y = SYIPosRHS

            // Add Hand Image Here
            const loadRHSintroLessHand = new THREE.TextureLoader();
            loadRHSintroLessHand.load(
                // Hand Image
                shand,
                function (textureRHSHand) {
                    var planeMaterialInnerRHS = new THREE.MeshBasicMaterial({
                        map: textureRHSHand,
                        transparent: true,
                        // visible: false 
                    });
                    textureRHSHand.wrapS = THREE.RepeatWrapping;
                    textureRHSHand.wrapT = THREE.RepeatWrapping;
                    // textureLHS.repeat.set( 4, 4 );
                    //Create a 2x2 plane with texture
                    var planeGeometryInnerRHS = new THREE.PlaneBufferGeometry(0.9, 0.9);
                    planeintroLessRHSHand = new THREE.Mesh(planeGeometryInnerRHS, planeMaterialInnerRHS);
                    scene.add(planeintroLessRHSHand);
                    planeintroLessRHSHand.position.x = 2.4
                    planeintroLessRHSHand.position.y = -1.7
                    // // OnClick Event For planeLHS
                    // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
                    // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
                    //     console.log("planeInnerLHS clicked")
                    //     // alert("btn clicked")
                    // }, false)

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

// Function for Introduction of Equal
// Object Size Change 
function introEqual() {
    console.clear()
    // console.log("planeintroLessLHS Status:- ", planeintroLessLHS.visible);
    // Audio Indicating Equal
    playAudio(s3sound)
    if (planeintroLessLHS.visible) {
        // console.log("Is Visible introEqual");
        planeintroLessLHS.visible = false
        planeintroLessRHS.visible = false
        planeintroLessRHSHand.visible = false
    }

    //  ------------------------  Working  --------------------------
    // Load Image into introless LHS Side
    const loadLHSintroEqual = new THREE.TextureLoader();
    loadLHSintroEqual.load(
        s3equal,
        function (textureintroEqualLHS) {
            var planeMaterialintroEqualLHS = new THREE.MeshBasicMaterial({
                map: textureintroEqualLHS,
                transparent: true,
                // visible: false 
            });
            //Create a 2x2 plane with texture
            var planeGeometryintroEqualLHS = new THREE.PlaneBufferGeometry(2.5, 2.5);
            planeintroEqualLHS = new THREE.Mesh(planeGeometryintroEqualLHS, planeMaterialintroEqualLHS);
            scene.add(planeintroEqualLHS);
            planeintroEqualLHS.position.x = SXIPosLHS
            planeintroEqualLHS.position.y = SYIPosLHS

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
    // Load Image into introEqual RHS Side         
    const loadRHSintroEqual = new THREE.TextureLoader();
    loadRHSintroEqual.load(
        // 2nd URL
        s3equal,

        function (textureintroEqualRHS) {
            var planeMaterialintroEqualRHS = new THREE.MeshBasicMaterial({
                map: textureintroEqualRHS,
                transparent: true,
                // visible: false 
            });
            //Create a 2x2 plane with texture
            var planeGeometryintroEqualRHS = new THREE.PlaneBufferGeometry(2.5, 2.5);
            planeintroEqualRHS = new THREE.Mesh(planeGeometryintroEqualRHS, planeMaterialintroEqualRHS);
            scene.add(planeintroEqualRHS);
            planeintroEqualRHS.position.x = SXIPosRHS
            planeintroEqualRHS.position.y = SYIPosRHS

            // Add Hand Image Here
            const loadRHSintroEqualHand = new THREE.TextureLoader();
            loadRHSintroEqualHand.load(
                // Hand Image
                shand,
                function (textureRHSHand) {
                    var planeMaterialInnerRHS = new THREE.MeshBasicMaterial({
                        map: textureRHSHand,
                        transparent: true,
                        // visible: false 
                    });
                    textureRHSHand.wrapS = THREE.RepeatWrapping;
                    textureRHSHand.wrapT = THREE.RepeatWrapping;
                    // textureLHS.repeat.set( 4, 4 );
                    //Create a 2x2 plane with texture
                    var planeGeometryInnerRHS = new THREE.PlaneBufferGeometry(0.9, 0.9);
                    planeintroEqualRHSHand = new THREE.Mesh(planeGeometryInnerRHS, planeMaterialInnerRHS);
                    scene.add(planeintroEqualRHSHand);
                    planeintroEqualRHSHand.position.x = 2.4
                    planeintroEqualRHSHand.position.y = -1.7
                    // // OnClick Event For planeLHS
                    // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
                    // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
                    //     console.log("planeInnerLHS clicked")
                    //     // alert("btn clicked")
                    // }, false)

                    //Render the scene
                    renderer.render(scene, camera);
                    document.body.appendChild(renderer.domElement);
                },
                // undefined,
                function (err) {
                    console.error('An error happened in planeintroEqualRHSHand Image.');
                }
            );
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

// Make Recognition-More Function 
// Calling Same Function of introMore
// Object Size Change 
function recogMore() {
    console.clear()
    // console.log("planeintroEqualLHS Status:- ", planeintroEqualLHS.visible);
    // Audio Indicating Equal
    playAudio(s4sound)
    if (planeintroEqualLHS.visible) {
        // console.log("Is Visible recogMore");
        planeintroEqualLHS.visible = false
        planeintroEqualRHS.visible = false
        planeintroEqualRHSHand.visible = false
    }

    //  ------------------------  Working  --------------------------
    // Inner Function Change Image onClick         
    const introMoreloadLHS = new THREE.TextureLoader();
    introMoreloadLHS.load(
        // "../asset/Set.png",
        s4lhs,
        //   "../asset/test.jpeg",
        //  "../asset/Image place holder.png",
        function (textureintroMoreLHS) {
            var planeMaterialintroMoreLHS = new THREE.MeshBasicMaterial({
                map: textureintroMoreLHS,
                transparent: true,
                // visible: false 
            });
            //Create a 2x2 plane with texture
            var planeGeometryintroMoreLHS = new THREE.PlaneBufferGeometry(2.5, 2.5);
            planerecogMoreLHS = new THREE.Mesh(planeGeometryintroMoreLHS, planeMaterialintroMoreLHS);
            scene.add(planerecogMoreLHS);
            planerecogMoreLHS.position.x = SXIPosLHS
            planerecogMoreLHS.position.y = SYIPosLHS

            // // OnClick Event For planeLHS
            // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
            //     console.log("planeInnerLHS clicked")
            //     // alert("btn clicked")
            // }, false)

            // Add Hand Image Here
            const loadLHSHand = new THREE.TextureLoader();
            loadLHSHand.load(
                // Hand Image
                shand,
                function (textureintroMoreLHSHand) {
                    var planeMaterialintroMoreLHSHand = new THREE.MeshBasicMaterial({
                        map: textureintroMoreLHSHand,
                        transparent: true,
                        // visible: false 
                    });
                    textureintroMoreLHSHand.wrapS = THREE.RepeatWrapping;
                    textureintroMoreLHSHand.wrapT = THREE.RepeatWrapping;
                    // textureLHS.repeat.set( 4, 4 );
                    //Create a 2x2 plane with texture
                    var planeGeometryintroMoreLHSHand = new THREE.PlaneBufferGeometry(0.9, 0.9);
                    planerecogMoreLHSHand = new THREE.Mesh(planeGeometryintroMoreLHSHand, planeMaterialintroMoreLHSHand);
                    scene.add(planerecogMoreLHSHand);
                    planerecogMoreLHSHand.position.x = -0.55
                    planerecogMoreLHSHand.position.y = -1.5
                    // // OnClick Event For planeLHS
                    // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
                    // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
                    //     console.log("planeInnerLHS clicked")
                    //     // alert("btn clicked")
                    // }, false)

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
        },
        // undefined,
        function (err) {
            console.error('An error happened in LHS Image.');
        }
    );

    //  ------------------------  Working  --------------------------
    // RHS Inner Function Change Image onClick
    //  var meshRHS;         
    const introMoreloadRHS = new THREE.TextureLoader();
    introMoreloadRHS.load(
        // 2nd URL
        s4rhs,
        function (textureintroMoreRHS) {
            var planeMaterialintroMoreRHS = new THREE.MeshBasicMaterial({
                map: textureintroMoreRHS,
                transparent: true,
                // visible: false 
            });
            //Create a 2x2 plane with texture
            var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(2.5, 2.5);
            planerecogMoreRHS = new THREE.Mesh(planeGeometryintroMoreRHS, planeMaterialintroMoreRHS);
            scene.add(planerecogMoreRHS);
            planerecogMoreRHS.position.x = SXIPosRHS
            planerecogMoreRHS.position.y = SYIPosRHS
            // // OnClick Event For planeLHS
            // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
            //     console.log("planeInnerLHS clicked")
            //     // alert("btn clicked")
            // }, false)



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

// Make Recognition-Less Function 
// Calling Same Function of recogMore
function recogLess() {
    console.clear()
    // console.log("planerecogMoreLHS Status:- ", planerecogMoreLHS.visible);
    // Audio Indicating Equal
    playAudio(s5sound)
    if (planerecogMoreLHS.visible) {
        // console.log("Is Visible recogLess");
        planerecogMoreLHS.visible = false
        planerecogMoreRHS.visible = false
        planerecogMoreLHSHand.visible = false
    }

    //  ------------------------  Working  --------------------------
    // Inner Function Change Image onClick         
    const introMoreloadLHS = new THREE.TextureLoader();
    introMoreloadLHS.load(
        // "../asset/Set.png",
        s5lhs,
        //   "../asset/test.jpeg",
        //  "../asset/Image place holder.png",
        function (textureintroMoreLHS) {
            var planeMaterialintroMoreLHS = new THREE.MeshBasicMaterial({
                map: textureintroMoreLHS,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            var planeGeometryintroMoreLHS = new THREE.PlaneBufferGeometry(2.5, 2.5);
            planerecogLessLHS = new THREE.Mesh(planeGeometryintroMoreLHS, planeMaterialintroMoreLHS);
            scene.add(planerecogLessLHS);
            planerecogLessLHS.position.x = SXIPosLHS
            planerecogLessLHS.position.y = SYIPosLHS

            // // OnClick Event For planeLHS
            // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
            //     console.log("planeInnerLHS clicked")
            //     // alert("btn clicked")
            // }, false)

            // Add Hand Image Here
            const loadLHSHand = new THREE.TextureLoader();
            loadLHSHand.load(
                // Hand Image
                shand,
                function (textureintroMoreLHSHand) {
                    var planeMaterialintroMoreLHSHand = new THREE.MeshBasicMaterial({
                        map: textureintroMoreLHSHand,
                        transparent: true,
                        // visible: false 
                    });
                    textureintroMoreLHSHand.wrapS = THREE.RepeatWrapping;
                    textureintroMoreLHSHand.wrapT = THREE.RepeatWrapping;
                    // textureLHS.repeat.set( 4, 4 );
                    //Create a 2x2 plane with texture
                    var planeGeometryintroMoreLHSHand = new THREE.PlaneBufferGeometry(0.9, 0.9);
                    planerecogLessLHSHand = new THREE.Mesh(planeGeometryintroMoreLHSHand, planeMaterialintroMoreLHSHand);
                    scene.add(planerecogLessLHSHand);
                    planerecogLessLHSHand.position.x = -0.55
                    planerecogLessLHSHand.position.y = -1.5
                    // // OnClick Event For planeLHS
                    // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
                    // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
                    //     console.log("planeInnerLHS clicked")
                    //     // alert("btn clicked")
                    // }, false)

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
        },
        // undefined,
        function (err) {
            console.error('An error happened in LHS Image.');
        }
    );

    //  ------------------------  Working  --------------------------
    // RHS Inner Function Change Image onClick
    //  var meshRHS;         
    const introMoreloadRHS = new THREE.TextureLoader();
    introMoreloadRHS.load(
        // 2nd URL
        s5rhs,
        function (textureintroMoreRHS) {
            var planeMaterialintroMoreRHS = new THREE.MeshBasicMaterial({
                map: textureintroMoreRHS,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(2.5, 2.5);
            planerecogLessRHS = new THREE.Mesh(planeGeometryintroMoreRHS, planeMaterialintroMoreRHS);
            scene.add(planerecogLessRHS);
            planerecogLessRHS.position.x = SXIPosRHS
            planerecogLessRHS.position.y = SYIPosRHS
            // // OnClick Event For planeLHS
            // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
            //     console.log("planeInnerLHS clicked")
            //     // alert("btn clicked")
            // }, false)



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

// Make Recognition-Equal Function 
// Calling Same Function of recogLess
function recogEqual() {
    console.clear()
    // console.log("planerecogLessLHS Status:- ", planerecogLessLHS.visible);
    // Audio Indicating Equal
    playAudio(s6sound)
    if (planerecogLessLHS.visible) {
        // console.log("Is Visible recogEqual");
        planerecogLessLHS.visible = false
        planerecogLessRHS.visible = false
        planerecogLessLHSHand.visible = false
    }

    //  ------------------------  Working  --------------------------
    // Inner Function Change Image onClick         
    const introMoreloadLHS = new THREE.TextureLoader();
    introMoreloadLHS.load(
        // "../asset/Set.png",
        s6img,
        //   "../asset/test.jpeg",
        //  "../asset/Image place holder.png",
        function (textureintroMoreLHS) {
            var planeMaterialintroMoreLHS = new THREE.MeshBasicMaterial({
                map: textureintroMoreLHS,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            var planeGeometryintroMoreLHS = new THREE.PlaneBufferGeometry(2.5, 2.5);
            planerecogEqualLHS = new THREE.Mesh(planeGeometryintroMoreLHS, planeMaterialintroMoreLHS);
            scene.add(planerecogEqualLHS);
            planerecogEqualLHS.position.x = SXIPosLHS
            planerecogEqualLHS.position.y = SYIPosLHS

            // // OnClick Event For planeLHS
            // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
            //     console.log("planeInnerLHS clicked")
            //     // alert("btn clicked")
            // }, false)

            // Add Hand Image Here
            const loadLHSHand = new THREE.TextureLoader();
            loadLHSHand.load(
                // Hand Image
                shand,
                function (textureintroMoreLHSHand) {
                    var planeMaterialintroMoreLHSHand = new THREE.MeshBasicMaterial({
                        map: textureintroMoreLHSHand,
                        transparent: true,
                        // visible: false 
                    });
                    textureintroMoreLHSHand.wrapS = THREE.RepeatWrapping;
                    textureintroMoreLHSHand.wrapT = THREE.RepeatWrapping;
                    // textureLHS.repeat.set( 4, 4 );
                    //Create a 2x2 plane with texture
                    var planeGeometryintroMoreLHSHand = new THREE.PlaneBufferGeometry(0.9, 0.9);
                    planerecogEqualLHSHand = new THREE.Mesh(planeGeometryintroMoreLHSHand, planeMaterialintroMoreLHSHand);
                    scene.add(planerecogEqualLHSHand);
                    planerecogEqualLHSHand.position.x = -0.55
                    planerecogEqualLHSHand.position.y = -1.5
                    // // OnClick Event For planeLHS
                    // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
                    // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
                    //     console.log("planeInnerLHS clicked")
                    //     // alert("btn clicked")
                    // }, false)

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
        },
        // undefined,
        function (err) {
            console.error('An error happened in LHS Image.');
        }
    );

    //  ------------------------  Working  --------------------------
    // RHS Inner Function Change Image onClick
    //  var meshRHS;         
    const introMoreloadRHS = new THREE.TextureLoader();
    introMoreloadRHS.load(
        // 2nd URL
        s6img,
        function (textureintroMoreRHS) {
            var planeMaterialintroMoreRHS = new THREE.MeshBasicMaterial({
                map: textureintroMoreRHS,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(2.5, 2.5);
            planerecogEqualRHS = new THREE.Mesh(planeGeometryintroMoreRHS, planeMaterialintroMoreRHS);
            scene.add(planerecogEqualRHS);
            planerecogEqualRHS.position.x = SXIPosRHS
            planerecogEqualRHS.position.y = SYIPosRHS
            // // OnClick Event For planeLHS
            // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
            //     console.log("planeInnerLHS clicked")
            //     // alert("btn clicked")
            // }, false)

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

                // Check Presenation level is complete or not
                var level1_Pre = localStorage.getItem('level1_Pre')
                var level1_Pre_val = JSON.parse(level1_Pre)
                // console.log("L2_Pre:-", level2_Pre_val)
                if (level1_Pre_val == false) {

                    // document.location.href = '/level2_Pre.html'
                    // window.location.replace(`${endPoint}/level2_Pre.html`);
                    window.location.replace(`/level1_Pre.html`);

                } else {
                    // document.location.href = '/level2.html'
                    window.location.replace(`/level1.html`);

                }

                // var currentPath = `${endPoint}/level1_Pre.html`

                // if (currentPath == `${endPoint}/level1_Pre.html`) {
                //     console.log("Redirect New Page");
                //     console.log("endPoint", endPoint);
                //     // location.href = '/level1.html'

                //     window.location.replace(`${endPoint}/level1_Pre.html`); // Active
                //     // history.back()
                //     // history.go(1)
                // } else {
                //     // location.href = '/level1.html'
                //     window.location.replace(`${endPoint}/level1_Pre.html`); // Active
                //     // history.back()
                //     // history.go(1)
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

// Function For Complete Level-0
function levelZeroComplete() {
    console.clear()
    playAudio(L0ComSound)
    console.log("planerecogEqualLHS Status:- ", planerecogEqualLHS.visible);
    // Audio Indicating Equal
    // playAudio("../Sounds/level0_sounds/ML_A_L0_10.mp3")
    if (planerecogEqualLHS.visible) {
        console.log("Is Visible");
        planerecogEqualLHS.visible = false
        planerecogEqualRHS.visible = false
        planerecogEqualLHSHand.visible = false
        planeLHSMain.visible = false
        planeRHSMain.visible = false
    }

    //  ------------------------  Working  --------------------------
    // Inner Function Change Image onClick         
    // Load play again image 
    const loadImg = new THREE.TextureLoader();
    loadImg.load(
        // "../asset/Let's_play.png",
        play_again,

        function (texture) {
            var planeMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            // var planeGeometry = new THREE.PlaneBufferGeometry(0.80, 0.80);
            // var planeGeometry = new THREE.PlaneBufferGeometry(1.2, 0.80); // Active
            var planeGeometry = new THREE.PlaneBufferGeometry(0.9, 0.70);
            planeLZCLHS = new THREE.Mesh(planeGeometry, planeMaterial);
            scene.add(planeLZCLHS)
            planeLZCLHS.position.x = -1.1
            planeLZCLHS.position.y = -0.4
            // planeLZCLHS.position.z =1

            // OnClick Event For planeLHS
            const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
            domEvents.addEventListener(planeLZCLHS, 'click', function (event) {
                console.log("planeLZCLHS clicked")

                // Set Level Complete
                // var setItemLocal = localStorage.setItem('level0Complete', true)
                localStorage.setItem('level0Complete', true)

                // Make PlaneLZCLHS Disable After Click on It
                // planeLZCLHS.planeGeometry.dispose()

                // Only Remove but Button is Active after this event perform
                // scene.remove(planeLZCLHS, planeLZCRHS)

                // Go To first Visit Function
                // firstVisitAgain()

                // Reload Page || Refresh Page 
                // window.location.href = '/index.html'

                var currentPath = `${endPoint}/index.html`

                if (currentPath == `${endPoint}/index.html`) {
                    console.log("Redirect New Page");
                    console.log("endPoint", endPoint);
                    location.href = '/index.html'
                } else {
                    location.href = '/index.html'
                }

                //Render the scene
                renderer.render(scene, camera);
                document.body.appendChild(renderer.domElement);

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
            console.error('An error happened in LHS Image.');
        }
    );

    //  ------------------------  Working  --------------------------
    // RHS Inner Function Change Image onClick
    //  var meshRHS;         
    const introMoreloadRHS = new THREE.TextureLoader();
    introMoreloadRHS.load(
        // Play Next Level Image
        // play_next, // Active
        play_game,

        function (textureintroMoreRHS) {
            var planeMaterialintroMoreRHS = new THREE.MeshBasicMaterial({
                map: textureintroMoreRHS,
                transparent: true,
                // visible: false 
            });
            //Create a 2x2 plane with texture
            // var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(0.80, 0.80);
            // var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(1.5, 0.80);
            // var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(1.3, 0.70); // Active for Play Next Level
            var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(0.9, 0.70); //
            planeLZCRHS = new THREE.Mesh(planeGeometryintroMoreRHS, planeMaterialintroMoreRHS);
            scene.add(planeLZCRHS);
            planeLZCRHS.position.x = 1.1
            planeLZCRHS.position.y = -0.4

            // // OnClick Event For planeLHS
            const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            domEventsInnerLHS.addEventListener(planeLZCRHS, 'click', function (event) {
                console.log("Play the next level clicked")

                // Set Level Complete
                // var setItemLocal = localStorage.setItem('level0Complete', true)
                localStorage.setItem('level0Complete', true)

                // window.location.href = '/level1_Pre.html'
                var currentPath = `${endPoint}/index.html`

                if (currentPath == `${endPoint}/index.html` || currentPath == `${endPoint}`) {
                    console.log("Redirect New Page");
                    console.log("endPoint", endPoint);
                    // document.location.href = '/level1_Pre.html'
                    window.location.replace(`${endPoint}/level1_Pre.html`);
                } else {
                    // document.location.href = '/level1_Pre.html'
                    window.location.replace(`${endPoint}/level1_Pre.html`);
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

// Function For Display Canvas
function init() {
    console.clear()
    // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3');
    // playAudio('../Sounds/level0_sounds/backgroud_music_free.mp3');
    NavBar()


    function NavBar() {
        // Call All Header Functions Here
        headerHome()
        headerBack()
        headerProgress()
        headerSound('../asset/logo/Music.png')
        // headerSound()
        // toggelMusic()

        headerHint()
        headerReward()
        RewardPoints(getRewardData)
    }



    // ------------------       working       ---------------------------------
    // Load LHS Image Here

    const loadLHSImg = new THREE.TextureLoader();
    loadLHSImg.load(
        // "../asset/test.jpeg",
        "../asset/Image place holder.png",
        // "../asset/Set.png",

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
            // var planeGeometryLHS = new THREE.PlaneBufferGeometry(3, 3);
            var planeGeometryLHS = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
            planeLHSMain = new THREE.Mesh(planeGeometryLHS, planeMaterialLHS);
            scene.add(planeLHSMain);
            planeLHSMain.position.x = SXIPosLHS
            planeLHSMain.position.y = SYIPosLHS
            // planeLHS.position.z = 1

            // OnClick Event For planeLHS
            const domEventsLHS = new THREEx.DomEvents(camera, renderer.domElement)
            domEventsLHS.addEventListener(planeLHSMain, 'click', function (event) {
                // console.log("planeLHS clicked")

                // Load Required Audio (playAudio Function is Declare Above)
                // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')

                // Redirect to new page onClick - working
                // domEventsLHS.userData = { URL: "http://stackoverflow.com" };
                // location.href = 'level0_4.html';

                // Redirect to new page onClick - not working
                // var mybtn = document.querySelector('.level0_4');
                // mybtn.onClick = "location.href='level0_4.html'";

                // //  ------------------------  Working  --------------------------
                // // Inner Function Change Image onClick         
                // const loadLHSImgInner = new THREE.TextureLoader();
                // loadLHSImgInner.load(
                // "../asset/new_image_assets/game element-01.png",

                //     function (textureInnerLHS) {
                //         var planeMaterialInnerLHS = new THREE.MeshBasicMaterial({
                //             map: textureInnerLHS,
                //             transparent: true,
                //             // visible: false 
                //         });
                //         textureInnerLHS.wrapS = THREE.RepeatWrapping;
                //         textureInnerLHS.wrapT = THREE.RepeatWrapping;
                //         // textureLHS.repeat.set( 4, 4 );
                //         //Create a 2x2 plane with texture
                //         var planeGeometryInnerLHS = new THREE.PlaneBufferGeometry(2, 2);
                //         var planeInnerLHS = new THREE.Mesh(planeGeometryInnerLHS, planeMaterialInnerLHS);
                //         scene.add(planeInnerLHS);
                //         planeInnerLHS.position.x = -1.2
                //         planeInnerLHS.position.y = -0.7

                //         // // OnClick Event For planeLHS
                //         // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
                //         // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
                //         //     console.log("planeInnerLHS clicked")
                //         //     // alert("btn clicked")
                //         // }, false)

                //         //Render the scene
                //         renderer.render(scene, camera);
                //         document.body.appendChild(renderer.domElement);
                //     },
                //     // undefined,
                //     function (err) {
                //         console.error('An error happened in LHS Image.');
                //     }
                // );
            }, false)
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
        "../asset/Image place holder.png",
        // "../asset/test.jpeg",

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
            var planeGeometryRHS = new THREE.PlaneBufferGeometry(WBPosX, WBPosY);
            // console.log("check for plaen size planeGeometryRHS", planeGeometryRHS)
            planeRHSMain = new THREE.Mesh(planeGeometryRHS, planeMaterialRHS);
            // console.log("planeRHS", planeRHS)
            scene.add(planeRHSMain);
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

    // renderInsOne();
    // presentationOne();

    setTimeout(() => {
        presentationOne();

    }, 300);


    //Render the scene
    renderer.render(scene, camera);
    document.body.appendChild(renderer.domElement);

    // controls.update();
    // // Resize the Screen  - Global - Active
    // window.addEventListener('resize', function () {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight)
    // })

}


// // Function For Homebtn Popup
// function homePopup() {

//     const canvasPopup = document.querySelector('.homepopup');


//     // Scene  - Popup
//     var scenePopup = new THREE.Scene();

//     // Camera For Popup
//     var cameraPopup = new THREE.PerspectiveCamera(
//         60,
//         // window.innerWidth / window.innerHeight,
//         600 / 500,
//         0.5,
//         1000
//     );
//     cameraPopup.position.set(0, 0, 4);

//     // RendererPopup- Global
//     const rendererPopup = new THREE.WebGLRenderer({
//         // canvas,
//         canvasPopup,
//         alpha: true,
//     });
//     // rendererPopup.setPixelRatio(window.devicePixelRatio);
//     // rendererPopup.setSize(window.innerWidth, window.innerHeight);
//     rendererPopup.setPixelRatio(600);
//     rendererPopup.setSize(600, 500);
//     document.body.appendChild(rendererPopup.domElement);

//     // Render 2nd Instructor After 1st audio complete
//     // Load Instructor After 1st audio execution done 
//     const loadPopup = new THREE.TextureLoader();
//     loadPopup.load(
//         "../asset/Instructor_L0_2.png",

//         function (texturePopup) {
//             var planeMaterialPopup = new THREE.MeshBasicMaterial({
//                 map: texturePopup,
//                 transparent: true,
//                 // visible: false 
//             });
//             // textureInsL0_1.wrapS = THREE.RepeatWrapping;
//             // textureInsL0_1.wrapT = THREE.RepeatWrapping;
//             // textureLHS.repeat.set( 4, 4 );
//             //Create a 2x2 plane with texture
//             var planeGeometryPopup = new THREE.PlaneBufferGeometry(2.3, 2.3);
//             var planePopup = new THREE.Mesh(planeGeometryPopup, planeMaterialPopup);

//             scene.add(planePopup);
//             planePopup.position.x = 2
//             planePopup.position.y = -0.7
//             planePopup.position.z = 1

//             //Render the scene
//             rendererPopup.render(scenePopup, cameraPopup);
//             document.body.appendChild(rendererPopup.domElement);
//         },
//         // undefined,
//         function (err) {
//             console.error('An error happened in Instructor L0_2 Image.');
//         }
//     );
//     // }
//     // Render Scene and Camera Popup - Global
//     rendererPopup.render(scene, camera)
//     document.body.appendChild(rendererPopup.domElement);

//     // Resize the Screen Popup - Global
//     window.addEventListener('resize', function () {
//         camera.aspect = window.innerWidth / window.innerHeight;
//         // camera.aspect = 600 / 500;
//         camera.updateProjectionMatrix();
//         rendererPopup.setSize(window.innerWidth, window.innerHeight)
//         // rendererPopup.setSize(600, 500)
//     })
// }


