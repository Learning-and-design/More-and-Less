
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js'; 
// import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
console.log("Home Page Btn Working");
console.log("23/04")


// Loader When Page is Load
window.onload = function () { document.getElementById("loading").style.display = "none" }

// window.onload = function () {
//     document.getElementById('clickButton').click();
// }

// Access Canvas From index.html File
const canvas = document.querySelector('.homepopup');


// ------------------- Jquery ----------------------------------------------

// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

// !function () {
//     "use strict";
//     var a = "undefined" != typeof module && module.exports, b = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element, c = function () {
//         for (var a, b, c = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], d = 0, e = c.length, f = {}; e > d; d++)
//             if (a = c[d], a && a[1] in document) {
//                 for (d = 0, b = a.length; b > d; d++)
//                     f[c[0][d]] = a[d];
//                 return f;
//             }
//         return !1;
//     }(), d = {
//         request: function (a) {
//             var d = c.requestFullscreen;
//             a = a || document.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? a[d]() : a[d](b && Element.ALLOW_KEYBOARD_INPUT);
//         }, exit: function () {
//             document[c.exitFullscreen]();
//         }, toggle: function (a) {
//             this.isFullscreen ? this.exit() : this.request(a);
//         }, raw: c
//     };
//     return c ? (Object.defineProperties(d, {
//         isFullscreen: {
//             get: function () {
//                 return Boolean(document[c.fullscreenElement]);
//             }
//         }, element: {
//             enumerable: !0, get: function () {
//                 return document[c.fullscreenElement]
//             }
//         }, enabled: {
//             enumerable: !0, get: function () {
//                 return Boolean(document[c.fullscreenEnabled]);
//             }
//         }
//     }), void (a ? module.exports = d : window.screenfull = d)) : void (a ? module.exports = !1 : window.screenfull = !1);
// }();


// $(document).ready(function () {
//     $('.homepopup').click(function () {
//         if (screenfull.isFullscreen !== true) {
//             screenfull.toggle();
//         }
//     });
// });
// ----------------------------------------------------------------------

// var e = document.getElementById('homepopup');
// // document.body.requestFullscreen().apply(e)
// // (e.webkitRequestFullScreen || e.mozRequestFullScreen).apply(e);
// start()

// async function start() {
//     await document.body.requestFullscreen();
//     await screen.orientation.lock("landscape");
//     // ready();
// }

// var getFullScreen = localStorage.getItem('FullScreen')
// var value = JSON.parse(getFullScreen)
// console.log("ssdsd", JSON.parse(getFullScreen))
// console.log(getFullScreen)
// if (value == true) {
//     console.log("Condition working");
//     // openFullscreen()
// }
// openFullscreen()
// setTimeout(() => {
//     openFullscreen()
// }, 2000);

//  ----------------------- Working ---------------------------------------
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
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
console.log("window.innerWidth, window.innerHeight",window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Render Scene and Camera  - Global
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement);

// Resize the Screen  - Global
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
})

// -----------------------------------------------------------------------------

// // Scene  - Global
// var scene = new THREE.Scene();

// // window Inner Height and weidth
// // var winWidth = window.screen.width
// // var winHeight = window.screen.height
// var winWidth = window.innerWidth
// var winHeight = window.innerHeight

// // Camera - Global
// var camera = new THREE.PerspectiveCamera(
//     60,
//     // window.innerWidth / window.innerHeight,
//     winWidth / winHeight,
//     1,
//     1000
// );
// camera.position.set(0, 0, 4);

// // Renderer - Global
// const renderer = new THREE.WebGLRenderer({
//     canvas,
//     // canvasPopup,
//     alpha: true,
//     antialias: true,
// });
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(winWidth, winHeight);
// // renderer.setSize(window.screen.width, window.screen.height);
// // console.log("window.innerWidth, window.innerHeight",window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Render Scene and Camera  - Global
// renderer.render(scene, camera)
// document.body.appendChild(renderer.domElement);

// screen.orientation.lock("landscape")


// // Check Full Screen is Active or Not
// var element = document.querySelector(".homepopup");
// // make the element go to full-screen mode
// element.requestFullscreen()
//     .then(function () {
//         // element has entered fullscreen mode successfully
//         console.log("Auto Full Screen");
//     })
//     .catch(function (error) {
//         // element could not enter fullscreen mode
//         console.log("Full Screen Disable");
//     });


// openFullscreen()
// Click eevnt on HomePage
// document.getElementById('homepopup').click();
// window.onload = function () {
//     document.getElementById('homepopup').click();

//     var scriptTag = document.createElement("script");
//     scriptTag.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js";
//     document.getElementsByTagName("head")[0].appendChild(scriptTag);
// }

// function openFullscreen() {
//     localStorage.setItem('FullScreen', true)
//     console.log("Full Screen Fuction Working");
//     // var elem = document.getElementById("level1Test");
//     // console.log("-- W", winWidth, "H:-", winHeight);
//     // console.log("Ele W:-", elem.width, "H:-", elem.height);
//     // // winWidth = elem.width
//     // // winHeight = elem.height

//     // if (elem.requestFullscreen) {
//     //     elem.requestFullscreen();
//     // } else if (elem.mozRequestFullScreen) {
//     //     // / Firefox /
//     //     elem.mozRequestFullScreen();
//     // } else if (elem.webkitRequestFullscreen) {
//     //     // / Chrome, Safari & Opera /
//     //     elem.webkitRequestFullscreen();
//     // } else if (elem.msRequestFullscreen) {
//     //     // / IE/Edge /
//     //     elem.msRequestFullscreen();
//     // }
//     // elem.style.width = '100%';
//     // elem.style.height = '100%';

//     start()

//     function ready() {
//         const { type } = screen.orientation;
//         console.log(`Fullscreen and locked to ${type}. Ready!`);
//     }

//     async function start() {
//         await document.body.requestFullscreen();
//         await screen.orientation.lock("landscape");
//         ready();
//     }
    
//     // // renderer.setSize(window.innerWidth, window.innerHeight);
//     // function Resize() {
//     //     // camera.aspect = winWidth / winHeight;
//     //     // camera.aspect = window.innerWidth / window.screen.height
//     //     // camera.aspect = window.screen.width / window.innerHeight

//     //     camera.updateProjectionMatrix();
//     //     // renderer.setSize(winWidth, winHeight)
//     //     renderer.setSize(window.screen.width, window.innerHeight);

//     //     // Render Scene and Camera  - Global
//     //     renderer.render(scene, camera)
//     //     document.body.appendChild(renderer.domElement);

//     // }

//     // // Render Scene and Camera  - Global
//     // renderer.render(scene, camera)
//     // document.body.appendChild(renderer.domElement);

//     // // Resize the Screen  - Global
//     // window.addEventListener('resize', Resize)
//     // window.addEventListener('resize', throttle(
//     //     () => {
//     //         const width = window.innerWidth;
//     //         const height = window.innerHeight;
//     //         camera.aspect = width / height;
//     //         camera.updateProjectionMatrix();
//     //         renderer.setSize(width, height);
//     //         setCanvasDimensions(renderer.domElement, width, height);
//     //     },
//     //     // resizeUpdateInterval,
//     //     { trailing: true }
//     // ))
// }

// document.body.requestFullscreen();

// renderer.setSize(window.innerWidth, window.innerHeight);
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


// screen.lockOrientation('landscape');
// window.screen.lockOrientation('landscape');


// // screen.addEventListener("orientationchange", function () {
// window.addEventListener("orientationchange", function () {
//     // console.log("The orientation of the screen is: " + screen.orientation);
//     // Resize the Screen  - Global
//     window.addEventListener('resize', function () {
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(window.innerWidth, window.innerHeight)
//     })
// });


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

// Global Varibale are Declare Here
var isAudioPlaying = false;
var isFirstVisit = false;
var audioPlayed = true;  // This is Check the audio is complete or Not
var insOneLoad = true;
var insTwoLoad = true;
var ins2Hide = false;
// var audio2Load = false;
var planeInsL0_1,planeInsL0_2, planeLHSMain, planeRHSMain ,sound, listener, storeAudioState;

// LevelZeroComplete (LZC) Variables 
var planeLZCLHS, planeLZCRHS;

// var sound = document.getElementById("sound").value;
var nextAudio = false;  // For Next audio Approval default (false)
// console.log("nextAudio ", nextAudio);

//  ---------------------------------------------------------------------------------
//Load Background Image
const loadImg = new THREE.TextureLoader();  // For Backgroud Image
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
            
            // Active
            // Resize the Screen  - Global
            // window.addEventListener('resize', function () {
            //     camera.aspect = window.innerWidth / window.innerHeight;
            //     camera.updateProjectionMatrix();
            //     renderer.setSize(window.innerWidth, window.innerHeight)
            // })
        },
        // undefined,
        function (err) {
            console.error('An error happened in Backgroud Image', err);
        }
);
// ------------------------------------------------------------------------------------------

// firstVisitAgain()
// homePageHandler();
setTimeout(() => {
    // console.log("SetTime For Let's Play Button")
    homePageHandler();
}, 300);


// firstVisit Function Will be Executed When Use Visit Page First Time
function firstVisitAgain(){

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
                plane2.position.z =1

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

                        if (audioPlayed == true){
                            nextAudio = false   // For Reactive Ins-1
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
                        else{
                            console.log("btndisable updated", btndisable);
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
}


// Audio Play
function playAudio(path){

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
        storeAudioState =  sound.source.onended;
        // console.log("storeAudioState", storeAudioState);
        sound.source.onended = function () {

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
            // openFullscreen()
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


function homePageHandler() {
    // console.log("planerecogEqualLHS Status:- ", planerecogEqualLHS.visible);
    // Audio Indicating Equal
    // playAudio("../Sounds/level0_sounds/ML_A_L0_10.mp3")
    // openFullscreen()
    // playAudio("../Sounds/HomePage_sounds/GL_A_1.mp3")
    playAudio("../Sounds/Global_Music/GL_A_5_Home.mp3")
    
    //  ------------------------  Working  --------------------------
    // Inner Function Change Image onClick         
    // Load play again image 
    const loadImg = new THREE.TextureLoader();
    loadImg.load(
    // "../asset/Let's_play.png",
    // "../asset/logo/Play again.png",
    // "../asset/logo/Continue game.png",
    "../asset/logo/Continue_Green.png",

        function (texture) {
            var planeMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                // visible: false 
            });

            //Create a 2x2 plane with texture
            // var planeGeometry = new THREE.PlaneBufferGeometry(1, 1);
            var planeGeometry = new THREE.PlaneBufferGeometry(0.9, 0.9);
            var planeLZCLHS = new THREE.Mesh(planeGeometry, planeMaterial);
            scene.add(planeLZCLHS);
            planeLZCLHS.position.x = -1
            planeLZCLHS.position.y = -0.3
            // planeLZCLHS.position.z = 1

            // OnClick Event For planeLHS
                const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
                domEvents.addEventListener(planeLZCLHS, 'click', function (event) {
                    // console.log("planeLZCLHS clicked")
                    // console.log("Function Working")

                    // planeLZCLHS.dispose

                    // Only Remove but Button is Active after this event perform
                    scene.remove(planeLZCLHS, planeLZCRHS);

                    // Redirect to Level0 onClick - working
                    // domEventsLHS.userData = { URL: "http://stackoverflow.com" };
                    // location.href = 'index.html';   // Main Redirect Page    // Woking
                    
                    // Push user To Last Location
                    history.back()   // Send back to last location Page // Working
                    // history.go(-1)   // Send back to last location Page // Working
                    
                    // history.pushState('index.html')   // Send back to last location Page
                    // history.pushState()   // Send back to last location Page
                    // history.forward()   // Send back to last location Page
                    // location.href = 'testing.html';


                    // firstVisitAgain()
                                 
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
            console.error('An error happened in LHS Image.');
        }
    );
                
    //  ------------------------  Working  --------------------------
    // RHS Inner Function Change Image onClick
    //  var meshRHS;         
    const introMoreloadRHS = new THREE.TextureLoader();
    introMoreloadRHS.load(
        // Play Next Level Image
    //    "../asset/logo/Play the next level.png",
        // "../asset/logo/Pick new game.png",
        "../asset/logo/Pick_New_Game_Blue.png",

        function (textureintroMoreRHS) {
            var planeMaterialintroMoreRHS = new THREE.MeshBasicMaterial({
                map: textureintroMoreRHS,
                transparent: true,
                // visible: false 
            });
            //Create a 2x2 plane with texture
            // var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(0.95, 0.95);
            var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(1.1, 0.9);
            planeLZCRHS = new THREE.Mesh(planeGeometryintroMoreRHS, planeMaterialintroMoreRHS);
            scene.add(planeLZCRHS);
            planeLZCRHS.position.x = 1
            planeLZCRHS.position.y = -0.3
            // planeLZCRHS.position.z = 1

            // // OnClick Event For planeLHS
            const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
            domEventsInnerLHS.addEventListener(planeLZCRHS, 'click', function (event) {
                console.log("planeInnerLHS clicked")
                // openFullscreen()

                // location.href = "level1_Pre.html"

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
            console.error('An error happened in RHS Image.');
        }
    );  
     
    //Render the scene
    renderer.render(scene, camera);
    document.body.appendChild(renderer.domElement);      

    // Active
    // // Resize the Screen  - Global
    // window.addEventListener('resize', function () {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight)
    // })
}

function init() {

    homePageHandler()

    // renderInsOne();
    presentationOne();
    // console.log("nextaudio status------", nextAudio);
    // introMore();
    // renderInsThree()
    // setTimeout(

    // controls.update();

    // Render Scene and Camera - Global
    renderer.render(scene, camera)
    document.body.appendChild(renderer.domElement);

    // Active
    // // Resize the Screen  - Global
    // window.addEventListener('resize', function () {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight)
    // })

}

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// Below code is New Code 


// // import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js'; 
// // import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
// console.log("Page is Working");

// // Access Canvas From index.html File
// const canvas = document.querySelector('.homepopup');

// // Scene  - Global
// var scene = new THREE.Scene();


// // Camera - Global
// var camera = new THREE.PerspectiveCamera(
//     60,
//     window.innerWidth / window.innerHeight,
//     1,
//     1000
// );
// camera.position.set(0, 0, 4);


// // Renderer - Global
// const renderer = new THREE.WebGLRenderer({
//     canvas,
//     // canvasPopup,
//     alpha: true,
// });
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// console.log("window.innerWidth, window.innerHeight",window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Render Scene and Camera  - Global
// renderer.render(scene, camera)
// document.body.appendChild(renderer.domElement);

// // Resize the Screen  - Global
// window.addEventListener('resize', function () {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight)
// })





// const loadImg = new THREE.TextureLoader();
//     loadImg.load(
//     "../asset/BackgroundL0.png",

//         function (texture) {
//             var planeMaterial = new THREE.MeshBasicMaterial({
//                 map: texture,
//                 transparent: true,
//                 // visible: false 
//             });

//             //Create a 2x2 plane with texture
//             // var planeGeometry = new THREE.PlaneBufferGeometry(16, 9);
//             // var planeGeometry = new THREE.PlaneBufferGeometry(9.1, 4.8);
//             var ang_rad = camera.fov * Math.PI / 180;
//             var fov_y = camera.position.z * Math.tan(ang_rad / 2) * 2;
//             var planeGeometry = new THREE.PlaneBufferGeometry(fov_y * camera.aspect, fov_y);
//             var plane = new THREE.Mesh(planeGeometry, planeMaterial);
//             scene.add(plane);
//             // plane.position.z =1
//         },
//         // undefined,
//         function (err) {
//             console.error('An error happened in Backgroud Image', err);
//         }
// );

// // Controls - access OrbitControls
// // const controls = new OrbitControls( camera, renderer.domElement );

// // Global Varibale are Declare Here
// var isAudioPlaying = false;
// var isFirstVisit = false;
// var audioPlayed = true;  // This is Check the audio is complete or Not
// var insOneLoad = true;
// var insTwoLoad = true;
// var ins2Hide = false;
// // var audio2Load = false;
// var planeInsL0_1,planeInsL0_2, planeLHSMain, planeRHSMain ,sound, listener, storeAudioState;

// // Headers Variables
// var planeHome, planeBack, planeProgress, planeSound,planeSoundOff, planeHint, planeReward;

// // IntroMore Variables 
// var planeintroMoreLHS, planeintroMoreRHS,planeintroMoreLHSHand;

// // IntroLess Variables 
// var planeintroLessLHS, planeintroLessRHS,planeintroLessRHSHand;

// // IntroEqual Variables 
// var planeintroEqualLHS, planeintroEqualRHS,planeintroEqualRHSHand;

// // RecogMore Variables 
// var planerecogMoreLHS, planerecogMoreRHS, planerecogMoreLHSHand;

// // RecogLess Variables 
// var planerecogLessLHS, planerecogLessRHS, planerecogLessLHSHand;

// // RecogEqual Variables 
// var planerecogEqualLHS, planerecogEqualRHS,planerecogEqualLHSHand;

// // LevelZeroComplete (LZC) Variables 
// var planeLZCLHS, planeLZCRHS;

// // var sound = document.getElementById("sound").value;
// var nextAudio = false;  // For Next audio Approval default (false)
// console.log("nextAudio ", nextAudio);

// // var nextAudioConst = false;


// // Call All The Functions Here
// // init();
// firstVisit()



// // // setTimeout level 0_1 slide
// // setTimeout(firstVisit(),1000)




// // firstVisit Function Will be Executed When Use Visit Page First Time
// function firstVisit(){

//     // controls.update();
//     isFirstVisit = true;
//     insOneLoad = true;  // Display 1st instructor
//     insTwoLoad = false; // Hide 2nd instructor
//     // Load Image here Start Button 
//     const loadImg = new THREE.TextureLoader();
//         loadImg.load(
//         "../asset/Let's_play.png",

//             function (texture) {
//                 var planeMaterial = new THREE.MeshBasicMaterial({
//                     map: texture,
//                     transparent: true,
//                     // visible: false 
//                 });

//                 //Create a 2x2 plane with texture
//                 var planeGeometry = new THREE.PlaneBufferGeometry(0.80, 0.80);
//                 var plane = new THREE.Mesh(planeGeometry, planeMaterial);
//                 scene.add(plane);
//                 plane.position.z =1

//                 // OnClick Event For planeLHS
//                     const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
//                     domEvents.addEventListener(plane, 'click', function (event) {
//                         // event.preventDefault()
//                         console.log("planeInnerLHS clicked")
//                         console.log("planeInnerLHS origDomEvent", event.origDomEvent)
//                         console.log("planeInnerLHS isTrusted", event.origDomEvent.isTrusted)
//                         var btndisable = event.origDomEvent.isTrusted;
//                         console.log("btndisable",btndisable);

//                         // Remove EventListner Here
//                         domEvents.removeEventListener(plane, 'click', function(e){
//                             console.log("remove listner call")
//                             domEvents.addEventListener(plane, 'click', function (event) {
//                                 console.log("Add Listne Again")
//                             })
//                             // plane.visible = false
//                         })
//                         if (audioPlayed == true){
//                             init();     // call Main Function
//                             console.log("this is true");
//                             plane.visible = false;
                            
//                             // Comment audio only for testing purpose
//                             playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
//                             // btndisable = false

//                             console.log("insOneLoad inside Function", insOneLoad);
//                             console.log("insTwoLoad inside Function", insTwoLoad);
//                             // isFirstVisit = false
                            
//                             insOneLoad = false;  // Make instructor 1 invisible
//                             insTwoLoad = false;  // Make instructor 2 invisible
//                         }
//                         else{
//                             console.log("btndisable updated", btndisable);
//                         }
//                         // plane.visible = false;    
//                     }, false)

//                 //Render the scene
//                 renderer.render(scene, camera);
//                 document.body.appendChild(renderer.domElement);
//             },
//             // undefined,
//             function (err) {
//                 console.error('An error happened in LHS Image.');
//             }
//         );
// }

// // firstVisit Function Will be Executed When Use Visit Page First Time
// function firstVisitAgain(){

//     // isFirstVisit = true;
//     insOneLoad = true;  // Display 1st instructor
//     insTwoLoad = false; // Hide 2nd instructor
//     // Load Image here Start Button 
//     const loadImg2 = new THREE.TextureLoader();
//         loadImg2.load(
//         "../asset/Let's_play.png",

//             function (texture2) {
//                 var planeMaterial2 = new THREE.MeshBasicMaterial({
//                     map: texture2,
//                     transparent: true,
//                     // visible: false 
//                 });

//                 //Create a 2x2 plane with texture
//                 var planeGeometry2 = new THREE.PlaneBufferGeometry(0.80, 0.80);
//                 var plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
//                 scene.add(plane2);
//                 plane2.position.z =1

//                 // OnClick Event For planeLHS
//                     const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
//                     domEvents.addEventListener(plane2, 'click', function (event) {
//                         // event.preventDefault()
//                         console.log("plane2 clicked")
//                         // console.log("planeInnerLHS origDomEvent", event.origDomEvent)
//                         // console.log("planeInnerLHS isTrusted", event.origDomEvent.isTrusted)
//                         // var btndisable = event.origDomEvent.isTrusted;
//                         // console.log("btndisable",btndisable);

//                         // // Remove EventListner Here
//                         // domEvents.removeEventListener(plane, 'click', function(e){
//                         //     console.log("remove listner call")
//                         //     domEvents.addEventListener(plane, 'click', function (event) {
//                         //         console.log("Add Listne Again")
//                         //     })
//                         //     // plane.visible = false
//                         // })

//                         if (audioPlayed == true){
//                             nextAudio = false   // For Reactive Ins-1
//                             init();     // call Main Function
//                             console.log("this is true");
//                             plane2.visible = false;
                            
//                             // Comment audio only for testing purpose
//                             playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
//                             // btndisable = false

//                             console.log("insOneLoad inside Function", insOneLoad);
//                             console.log("insTwoLoad inside Function", insTwoLoad);
//                             // isFirstVisit = false
                            
//                             insOneLoad = false;  // Make instructor 1 invisible
//                             insTwoLoad = false;  // Make instructor 2 invisible
//                         }
//                         else{
//                             console.log("btndisable updated", btndisable);
//                         }
//                         // plane.visible = false;    
//                     }, false)

//                 //Render the scene
//                 renderer.render(scene, camera);
//                 document.body.appendChild(renderer.domElement);
//             },
//             // undefined,
//             function (err) {
//                 console.error('An error happened in LHS Image.');
//             }
//         );
// }

// // // setTimeout level 0_2 slide -- Move Instructor to right side
// // setTimeout(firstVisit(),1000)

// // Autoplay Function
// // function autoPlay(){
// //     var playAudio = document.querySelector('.c').autoPlay;
// //}

// // // Call function on Reload
// // window.onload = function() {
// //     setTimeout(function(){
// //     // myAudio.play();
// //     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
// //     }, 0); // you can change this... whatever you want //
// // }

// // Call Function On Reload page
// // if (){
// // window.onload = playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
// // }

// // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
// // setInterval(playAudio, 5000)

// // setTimeout(function () { 
// //     console.log("Set Timeout Function -ML_A_L0_1 ");

// //     // Load Required Audio (playAudio Function is Declare Above)
// //     sound.play();
// //     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')

// //     // // Set Interval Here
// //     // const setIntervalobj = setInterval(playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3'), 70)
// //     // clearInterval(setIntervalobj)

// // }, 1000)

// // setInterval(playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3'), 1000)

// // setTimeout(function () { 
// //     console.log("Set Timeout Function -ML_A_L0_2 ");
    
// //     // Load Required Audio (playAudio Function is Declare Above)
// //     // getAudioContext();
// //     // console.log("getAudioContext:- ", getAudioContext);
// //     // playAudio('../Sounds/level0_sounds/ML_A_L0_2.mp3')

// //     //  ------------------------  Working  --------------------------
// //                 // Inner Function Change Image onClick         
// //                 const loadLHSImgInner = new THREE.TextureLoader();
// //                 loadLHSImgInner.load(
// //                 // "../asset/Set.png",
// //                 "../asset/new_image_assets/game element-01.png",

// //                 //   "../asset/test.jpeg",
// //                 //  "../asset/Image place holder.png",
// //                     function (textureInnerLHS) {
// //                         var planeMaterialInnerLHS = new THREE.MeshBasicMaterial({
// //                             map: textureInnerLHS,
// //                             // visible: false 
// //                         });
// //                         textureInnerLHS.wrapS = THREE.RepeatWrapping;
// //                         textureInnerLHS.wrapT = THREE.RepeatWrapping;
// //                         // textureLHS.repeat.set( 4, 4 );
// //                         //Create a 2x2 plane with texture
// //                         var planeGeometryInnerLHS = new THREE.PlaneBufferGeometry(2, 2);
// //                         var planeInnerLHS = new THREE.Mesh(planeGeometryInnerLHS, planeMaterialInnerLHS);
// //                         scene.add(planeInnerLHS);
// //                         planeInnerLHS.position.x = -1.5
// //                         planeInnerLHS.position.y = -0.7

// //                         // // OnClick Event For planeLHS
// //                         // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
// //                         // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
// //                         //     console.log("planeInnerLHS clicked")
// //                         //     // alert("btn clicked")
// //                         // }, false)

// //                         //Render the scene
// //                         renderer.render(scene, camera);
// //                         document.body.appendChild(renderer.domElement);
// //                     },
// //                     // undefined,
// //                     function (err) {
// //                         console.error('An error happened in LHS Image.');
// //                     }
// //                 );
// // }, 1000)


// // Function For Play Audio
// function playAudio(path){

//     isAudioPlaying = true;
//     if (isAudioPlaying) {
//         console.log("IsAudioPlaying:- " + isAudioPlaying)

    

//     // const audioScene = new THREE.Scene();
 
//     // Audio Listener Object
//     listener = new THREE.AudioListener();
//     // camera.add(listener);
//     scene.add(listener);

//     // create the PositionalAudio object (passing in the listener)
//     sound = new THREE.PositionalAudio(listener);
        
//     // load a sound and set it as the PositionalAudio object's buffer
//     var audioLoader = new THREE.AudioLoader();
//     // console.log("audioLoader :-", audioLoader)
//     // console.log("audioLoader Start :-", audioLoader.manager.itemStart);
//     // console.log("audioLoader End :-", audioLoader.manager.itemEnd);
//     audioLoader.load(path, function (buffer) {
//         sound.setBuffer(buffer);
//         sound.setRefDistance(20);
//         // Sound Speed Control here
        
//         sound.play();
//         // For Autoplay audio
//         // sound.autoplay = true;
//         // sound.setVolume(0.5)
//         // console.log("sound:- ", sound);
//         storeAudioState =  sound.source.onended;
//         // console.log("storeAudioState", storeAudioState);
//         sound.source.onended = function () {

//             switch (path) {
//                 case '../Sounds/level0_sounds/ML_A_L0_1.mp3':
//                     console.log("first end");
//                     presentationTwo()
//                     playAudio("../Sounds/level0_sounds/ML_A_L0_2.mp3")
                    
//                     // insTwoLoad = false
//                     // console.log("insTwoLoad in switch", insTwoLoad);
//                     break;

//                 case '../Sounds/level0_sounds/ML_A_L0_2.mp3':
//                     console.log("Second end");
//                     // insTwoLoad = false
//                     // ins2Hide = true
//                     introMore()
//                     // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
//                     break;
//                 case '../Sounds/level0_sounds/ML_A_L0_4.mp3':   
//                     console.log("Third end");
//                     // insTwoLoad = false
//                     // ins2Hide = true
//                     introLess()
//                     // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
//                     break;
//                 case '../Sounds/level0_sounds/ML_A_L0_5.mp3':   
//                     console.log("Fourth end");
//                     // insTwoLoad = false
//                     // ins2Hide = true
//                     introEqual()
//                     // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
//                     break;
//                 case '../Sounds/level0_sounds/ML_A_L0_6.mp3':   
//                     console.log("Fifth end");
//                     playAudio("../Sounds/level0_sounds/ML_A_L0_7.mp3")
//                     // insTwoLoad = false
//                     // ins2Hide = true
//                     // recogMore()
//                     // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
//                     break;
//                 case '../Sounds/level0_sounds/ML_A_L0_7.mp3':   
//                     console.log("sixth end");
//                     // insTwoLoad = false
//                     // ins2Hide = true
//                     recogMore()
//                     // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
//                     break;
//                 case '../Sounds/level0_sounds/ML_A_L0_8.mp3':   
//                     console.log("seventh end");
//                     // insTwoLoad = false
//                     // ins2Hide = true
//                     recogLess()
//                     // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
//                     break;
//                 case '../Sounds/level0_sounds/ML_A_L0_9.mp3':   
//                     console.log("Egighth end");
//                     // insTwoLoad = false
//                     // ins2Hide = true
//                     recogEqual()
//                     // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
//                     break;
//                 case '../Sounds/level0_sounds/ML_A_L0_10.mp3':   
//                     console.log("Nineth end");
//                     // insTwoLoad = false
//                     // ins2Hide = true
//                     levelZeroComplete()

//                     // playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
//                     break;
            
//                 default:
//                     break;
//             }
//             console.log('sound ended');
//             nextAudio = true;
//             // console.log("sound.source.onended", sound.source.onended);
//             // audio2Load = true
//             // nextAudioConst = true;
//             // console.log("nextAudio inside", nextAudio);
//             // var storeAudioState =  sound.source.onended;
//             // console.log("storeAudioState", storeAudioState);
//             // console.log("storeAudioState Inside", storeAudioState);
//             // console.log("sound Inside :- ", sound);
//             // console.log("sound Inside isplaying this :- ", isPlaying);
//             // console.log("sound Inside isplaying :- ", sound.isPlaying);
//             this.isPlaying = false; 
//             // sound.isPlaying = false; 
//             // console.log("sound Inside isplaying this:- ", this.isPlaying);
//             // console.log("sound Inside isplaying :- ", sound.isPlaying);
            
//             // if(nextAudio == true){
//                 // presentationTwo()
//                 // nextAudio = false
//                 // testingAudio2()
//                 // playAudio("../Sounds/level0_sounds/ML_A_L0_2.mp3")
//                 // console.log("audio2Load status:-", audio2Load);
//                 // audio2Load = true
//                 // if (audio2Load == true){
//                 //     // playAudio("../Sounds/level0_sounds/ML_A_L0_2.mp3")
//                 //     presentationTwo()
//                 //     // insTwoLoad = false
//                 //     audio2Load = false
//                 // }
                
//             // }

//             // if (this.isPlaying == false){
//             //     console.log("playing");
//             //     audioPlayed = true
//             // }
//         }
//     });
    
//     }

// }


// // All Header Components Add Here
// // Home Button Function
// function headerHome(){
//     console.log("Function headerHome");
//         const hHome = new THREE.TextureLoader();
//         hHome.load(
//         // Load Home Image
//         "../asset/logo/Home.png",

//             function (textureHome) {
//                 var planeMaterialHome = new THREE.MeshBasicMaterial({
//                     map: textureHome,
//                     transparent: true,
//                     // visible: false 
//                 });
//                 //Create a 0.30x0.30 plane with texture
//                 var planeGeometryHome = new THREE.PlaneBufferGeometry(0.30, 0.30);
//                 planeHome = new THREE.Mesh(planeGeometryHome, planeMaterialHome);
//                 scene.add(planeHome);
//                 planeHome.position.x = -2.5
//                 planeHome.position.y = 1.5
//                 planeHome.position.z = 1

//                 // OnClick Event For planeHome
//                 const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
//                 domEvents.addEventListener(planeHome, 'click', function (event) {
//                     console.log("planeHome clicked")

//                     // planeLZCLHS.dispose

//                     // Only Remove but Button is Active after this event perform
//                     // scene.remove(planeLZCLHS, planeLZCRHS);


//                     // firstVisitAgain()
//                     // homePopup();
//                     // Redirect to new page onClick - working
//                     // domEventsLHS.userData = { URL: "http://stackoverflow.com" };
//                     location.href = 'homePopup.html';

//                     // Redirect to new page onClick - not working
//                     // var mybtn = document.querySelector('.level0_4');
//                     // mybtn.onClick = "location.href='level0_4.html'";
                                 
//                     // console.log("planeInnerLHS origDomEvent", event.origDomEvent)
//                     // console.log("planeInnerLHS isTrusted", event.origDomEvent.isTrusted)
//                     // var btndisable = event.origDomEvent.isTrusted;
//                     // console.log("btndisable",btndisable);
//                     // if (audioPlayed == true){
//                     //     console.log("this is true");
//                     //     plane.visible = false;
//                     //     init();     // call Main Function
                        
//                     //     // Comment audio only for testing purpose
//                     //     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
//                     //     // btndisable = false

//                     //     insOneLoad = false;  // Make instructor 1 invisible
//                     //     insTwoLoad = false;  // Make instructor 2 invisible
//                     //     console.log("insOneLoad inside Function", insOneLoad);
//                     //     console.log("insTwoLoad inside Function", insTwoLoad);
//                     // }
//                     // else{
//                     //     console.log("btndisable updated", btndisable);
//                     // }
//                     // plane.visible = false;    
//                 }, false)

//                 //Render the scene
//                 renderer.render(scene, camera);
//                 document.body.appendChild(renderer.domElement);
//             },
//             // undefined,
//             function (err) {
//                 console.error('An error happened in planeHome.');
//             }
//         );
// }

// // Back Button Function
// function headerBack(){
//     console.log("Function headerBack");
//         const hBack = new THREE.TextureLoader();
//         hBack.load(
//         // Load Back_inActive Image
//         "../asset/logo/Back_Inactive.png",

//             function (textureBack) {
//                 var planeMaterialBack = new THREE.MeshBasicMaterial({
//                     map: textureBack,
//                     transparent: true,
//                     // visible: false 
//                 });
//                 //Create a 0.30x0.30 plane with texture
//                 var planeGeometryBack = new THREE.PlaneBufferGeometry(0.30, 0.30);
//                 planeBack = new THREE.Mesh(planeGeometryBack, planeMaterialBack);
//                 scene.add(planeBack);
//                 planeBack.position.x = -2
//                 planeBack.position.y = 1.5
//                 planeBack.position.z = 1

//                 //Render the scene
//                 renderer.render(scene, camera);
//                 document.body.appendChild(renderer.domElement);
//             },
//             // undefined,
//             function (err) {
//                 console.error('An error happened in planeBack.');
//             }
//         );
// }

// // Progress Button Function
// function headerProgress(){
//     console.log("Function headerProgress");
//         const hProgress = new THREE.TextureLoader();
//         hProgress.load(
//         // Load Back_inActive Image
//         "../asset/Progress_bar/Progress bar_Type_1.png",

//             function (textureProgress) {
//                 var planeMaterialProgress = new THREE.MeshBasicMaterial({
//                     map: textureProgress,
//                     transparent: true,
//                     // visible: false 
//                 });
//                 //Create a 0.30x0.30 plane with texture
//                 var planeGeometryProgress = new THREE.PlaneBufferGeometry(1.80, 0.30);
//                 planeProgress = new THREE.Mesh(planeGeometryProgress, planeMaterialProgress);
//                 scene.add(planeProgress);
//                 planeProgress.position.x = 0
//                 planeProgress.position.y = 1.5
//                 planeProgress.position.z = 1

//                 //Render the scene
//                 renderer.render(scene, camera);
//                 document.body.appendChild(renderer.domElement);
//             },
//             // undefined,
//             function (err) {
//                 console.error('An error happened in planeProgress.');
//             }
//         );
// }

// // Sound Button Function
// function headerSound(){
//     console.log("Function headerSound");
//         const hSound = new THREE.TextureLoader();
//         hSound.load(
//         // Load Music Image
//         "../asset/logo/Music.png",

//             function (textureSound) {
//                 var planeMaterialSound = new THREE.MeshBasicMaterial({
//                     map: textureSound,
//                     transparent: true,
//                     // visible: false 
//                 });
//                 //Create a 0.30x0.30 plane with texture
//                 var planeGeometrySound = new THREE.PlaneBufferGeometry(0.30, 0.30);
//                 planeSound = new THREE.Mesh(planeGeometrySound, planeMaterialSound);
//                 scene.add(planeSound);
//                 planeSound.position.x = 1.45
//                 planeSound.position.y = 1.5
//                 planeSound.position.z = 1

//                 // Add OnClick event Here
//                 // Music off When This Event Occurs
//                 const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
//                 domEvents.addEventListener(planeSound, 'click', function(event){
//                     console.log("Sound Off Btn Click")

//                     // return (
//                     //     <div class="firstJsDiv">
//                     //         <input type="button" placeholder="demo Btn" />
//                     //         {console.log("Checking Div Tag")}
//                     //     </div>
//                     // )
//                     // (
                                            
//                         // console.log("This is Return Function")
//                         // {<button>
//                         //     click
//                         // </button>}
                       
//                     // )
//                     // scene.remove(planeSound)

//                     // // Add Music Mute Btn Here
//                     // const hSound = new THREE.TextureLoader();
//                     //     hSound.load(
//                     //     // Load Music Image
//                     //     "../asset/logo/Music_Mute.png",

//                     //         function (textureSoundOff) {
//                     //             var planeMaterialSoundOff = new THREE.MeshBasicMaterial({
//                     //                 map: textureSoundOff,
//                     //                 transparent: true,
//                     //                 // visible: false 
//                     //             });
//                     //             //Create a 0.30x0.30 plane with texture
//                     //             var planeGeometrySoundOff = new THREE.PlaneBufferGeometry(0.30, 0.30);
//                     //             planeSoundOff = new THREE.Mesh(planeGeometrySoundOff, planeMaterialSoundOff);
//                     //             scene.add(planeSoundOff);
//                     //             planeSoundOff.position.x = 1.45
//                     //             planeSoundOff.position.y = 1.5
//                     //             planeSoundOff.position.z = 1

//                     //             // Add OnClick event Here
//                     //             // Music ON When This Event Occurs
//                     //             const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
//                     //             domEvents.addEventListener(planeSoundOff, 'click', function(event){
//                     //                 console.log("Sound On Btn Click")
//                     //                 scene.remove(planeSoundOff)

//                     //                 // sound.setVolume(0.50);
//                     //             }, false)
                                
//                     //             //Render the scene
//                     //             renderer.render(scene, camera);
//                     //             document.body.appendChild(renderer.domElement);
//                     //         },
//                     //         // undefined,
//                     //         function (err) {
//                     //             console.error('An error happened in planeSound.');
//                     //         }
//                     //     );
//                     // sound.setVolume(0);
//                 }, false)

//                 //Render the scene
//                 renderer.render(scene, camera);
//                 document.body.appendChild(renderer.domElement);
//             },
//             // undefined,
//             function (err) {
//                 console.error('An error happened in planeSound.');
//             }
//         );
// }

// // Hint Button Function
// function headerHint(){
//     console.log("Function headerHint");
//         const hHint = new THREE.TextureLoader();
//         hHint.load(
//         // Load Hint_Inactive Image
//         "../asset/logo/Hint_Inactive.png",

//             function (textureHint) {
//                 var planeMaterialHint = new THREE.MeshBasicMaterial({
//                     map: textureHint,
//                     transparent: true,
//                     // visible: false 
//                 });
//                 //Create a 0.30x0.30 plane with texture
//                 var planeGeometryHint = new THREE.PlaneBufferGeometry(0.30, 0.30);
//                 planeHint = new THREE.Mesh(planeGeometryHint, planeMaterialHint);
//                 scene.add(planeHint);
//                 planeHint.position.x = 1.8
//                 planeHint.position.y = 1.5
//                 planeHint.position.z = 1

//                 //Render the scene
//                 renderer.render(scene, camera);
//                 document.body.appendChild(renderer.domElement);
//             },
//             // undefined,
//             function (err) {
//                 console.error('An error happened in planeHint.');
//             }
//         );
// }

// // Reward Button Function
// function headerReward(){
//     console.log("Function headerReward");
//         const hReward = new THREE.TextureLoader();
//         hReward.load(
//         // Load Rewards Image
//         "../asset/logo/Rewards.png",

//             function (textureReward) {
//                 var planeMaterialReward = new THREE.MeshBasicMaterial({
//                     map: textureReward,
//                     transparent: true,
//                     // visible: false 
//                 });
//                 //Create a 0.30x0.30 plane with texture
//                 var planeGeometryReward = new THREE.PlaneBufferGeometry(0.80, 0.30);
//                 planeReward = new THREE.Mesh(planeGeometryReward, planeMaterialReward);
//                 scene.add(planeReward);
//                 planeReward.position.x = 2.55
//                 planeReward.position.y = 1.5
//                 planeReward.position.z = 1

//                 //Render the scene
//                 renderer.render(scene, camera);
//                 document.body.appendChild(renderer.domElement);
//             },
//             // undefined,
//             function (err) {
//                 console.error('An error happened in planeReward.');
//             }
//         );
// }

// // function testingAudio2(){
// //     console.log("total execution count");
// //     presentationTwo()
// // }
// // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3');

// // setTimeout(function () { 
// //     console.log("Set Timeout Function -ML_A_L0_1 ");

// //     // Load Required Audio (playAudio Function is Declare Above)
// //     sound.play();
// //     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')

// //     // // Set Interval Here
// //     // const setIntervalobj = setInterval(playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3'), 70)
// //     // clearInterval(setIntervalobj)

// // }, 1000)


// // Function For Load Dynamic Images
// // function loadDynamicImg() {
// //     console.log("load Dynamic Image Function Working ");
// //     // var multiImage = new Array();
// //     // multiImage[0] = "../asset/new_image_assets/game element-01.png" 
// //     // multiImage[1] = "../asset/new_image_assets/game element-02.png"
// //     // multiImage[2] = "../asset/new_image_assets/game element-03.png"
// // }



// // ML_A_L0_1 - 0.07sec audio
// // setTimeout(function () {
// //     console.log("Set Timeout Function -ML_A_L0_1 ");
// //     // Load Required Audio (playAudio Function is Declare Above)
// //     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')

// // }, 1000)

// // // ML_A_L0_1 - 0.07sec audio
// // setTimeout(function () {
// //     console.log("Set Timeout Function - 2")
// //     playAudio("../Sounds/level0_sounds/ML_A_L0_2.mp3")
// // }, 2000)

// // Function for Render Instructor Slide-1
// // function renderInsOne() {


// function presentationOne() {
//     // insTwoLoad = true
//     console.log("Function renderInsOne Execute");
//     // Render 2nd Instructor After 1st audio complete
//     // if( nextAudio == true){
//     // Load Instructor-1 At Center 
//         const loadInsL0_1 = new THREE.TextureLoader();
//         loadInsL0_1.load(
//         "../asset/Instructor_L0_1.png",

//             function (textureInsL0_1) {
//                 var planeMaterialInsL0_1 = new THREE.MeshBasicMaterial({
//                     map: textureInsL0_1,
//                     transparent: true,
//                     // visible: false 
//                 });
//                 // textureInsL0_1.wrapS = THREE.RepeatWrapping;
//                 // textureInsL0_1.wrapT = THREE.RepeatWrapping;
//                 // textureLHS.repeat.set( 4, 4 );
//                 // alert(document.getElementById("sound"))

//                 //Create a 2x2 plane with texture
//                 var planeGeometryInsL0_1 = new THREE.PlaneBufferGeometry(2.3, 2.3);
//                 // var planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
//                 planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
//                 scene.add(planeInsL0_1);
//                 planeInsL0_1.position.z = 1
//                 planeInsL0_1.position.x = 0.5
//                 planeInsL0_1.position.y = -0.7

//                 console.log("nextAudio status in One",nextAudio);
//                 if(nextAudio == true)
//                 {
//                     planeInsL0_1.visible = false
//                     // insTwoLoad = true;
//                     // presentationTwo();
//                 }
//                 nextAudio = false

//                 //Render the scene
//                 renderer.render(scene, camera);
//                 document.body.appendChild(renderer.domElement);
//             },
//             // undefined,
//             function (err) {
//                 console.error('An error happened in Instructor L0_1 Image.');
//             }
//         );
//     // }
// }

// // Function for Render Instructor Slide-2
// // function renderInsTwo() {
// function presentationTwo() {
//     // Hide Instructor-1 After Audio-1 complete
//     // nextAudio = false
//     console.log("-------");
//     if (insOneLoad == false){
//         planeInsL0_1.visible = false
//         console.log("Hide Instructor here");
//     }
//     console.log("Function presentationTwo Execute");
//     // console.log("nextAudio in presentationTwo", nextAudio);

//     // Render 2nd Instructor After 1st audio complete
//     // Load Instructor After 1st audio execution done 
//      const loadInsL0_2 = new THREE.TextureLoader();
//      loadInsL0_2.load(
//      "../asset/Instructor_L0_2.png",

//          function (textureInsL0_2) {
//             var planeMaterialInsL0_2 = new THREE.MeshBasicMaterial({
//                 map: textureInsL0_2,
//                 transparent: true,
//                 // visible: false 
//             });
//             // textureInsL0_1.wrapS = THREE.RepeatWrapping;
//             // textureInsL0_1.wrapT = THREE.RepeatWrapping;
//             // textureLHS.repeat.set( 4, 4 );
//             //Create a 2x2 plane with texture
//             var planeGeometryInsL0_2 = new THREE.PlaneBufferGeometry(2.3, 2.3);
//             planeInsL0_2 = new THREE.Mesh(planeGeometryInsL0_2, planeMaterialInsL0_2);
//             scene.add(planeInsL0_2);
//             planeInsL0_2.position.x = 2
//             planeInsL0_2.position.y = -0.7
//             planeInsL0_2.position.z = 1

//             // nextAudio = true
//             // insTwoLoad = false
//             // console.log("next audio for 2nd", nextAudio);
//             // console.log("insTwoLoad for 2nd", insTwoLoad);

//             // if (nextAudio == true){
//             //     planeInsL0_2.visible = false
//             // }
//             // nextAudio = false
//             // setTimeout(() => {
//             //     planeInsL0_2.visible = false
//             // }, 5000);

//             //Render the scene
//             renderer.render(scene, camera);
//             document.body.appendChild(renderer.domElement);
//          },
//          // undefined,
//          function (err) {
//              console.error('An error happened in Instructor L0_2 Image.');
//          }
//      );
//     // }
// }

// // Function for Introduction of More
// function introMore(){
//     console.log("planeInsL0_2.visible ", planeInsL0_2.visible);
//     // Audio Indicating More
//     playAudio("../Sounds/level0_sounds/ML_A_L0_4.mp3")
//     if(planeInsL0_2.visible)
//     {
//         console.log("Is Visible");
//         planeInsL0_2.visible = false
//     }
    
//     //  ------------------------  Working  --------------------------
//                 // Inner Function Change Image onClick         
//                 const introMoreloadLHS = new THREE.TextureLoader();
//                 introMoreloadLHS.load(
//                 // "../asset/Set.png",
//                 "../asset/new_image_assets/game element-10.png",

//                 //   "../asset/test.jpeg",
//                 //  "../asset/Image place holder.png",
//                     function (textureintroMoreLHS) {
//                         var planeMaterialintroMoreLHS = new THREE.MeshBasicMaterial({
//                             map: textureintroMoreLHS,
//                             transparent: true,
//                             // visible: false 
//                         });
//                         textureintroMoreLHS.wrapS = THREE.RepeatWrapping;
//                         textureintroMoreLHS.wrapT = THREE.RepeatWrapping;
//                         // textureLHS.repeat.set( 4, 4 );
//                         //Create a 2x2 plane with texture
//                         var planeGeometryintroMoreLHS = new THREE.PlaneBufferGeometry(2, 2);
//                         planeintroMoreLHS = new THREE.Mesh(planeGeometryintroMoreLHS, planeMaterialintroMoreLHS);
//                         scene.add(planeintroMoreLHS);
//                         planeintroMoreLHS.position.x = -1.2
//                         planeintroMoreLHS.position.y = -0.7

//                         // // OnClick Event For planeLHS
//                         // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//                         // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
//                         //     console.log("planeInnerLHS clicked")
//                         //     // alert("btn clicked")
//                         // }, false)

//                         // Add Hand Image Here
//                         const loadLHSHand = new THREE.TextureLoader();
//                         loadLHSHand.load(
//                         // Hand Image
//                         "../asset/hand_img.png",

//                             function (textureintroMoreLHSHand) {
//                             var planeMaterialintroMoreLHSHand = new THREE.MeshBasicMaterial({
//                                     map: textureintroMoreLHSHand,
//                                     transparent: true,
//                                     // visible: false 
//                                 });
//                                 textureintroMoreLHSHand.wrapS = THREE.RepeatWrapping;
//                                 textureintroMoreLHSHand.wrapT = THREE.RepeatWrapping;
//                                 // textureLHS.repeat.set( 4, 4 );
//                                 //Create a 2x2 plane with texture
//                                 var planeGeometryintroMoreLHSHand = new THREE.PlaneBufferGeometry(0.7, 0.7);
//                                 planeintroMoreLHSHand = new THREE.Mesh(planeGeometryintroMoreLHSHand, planeMaterialintroMoreLHSHand);
//                                 scene.add(planeintroMoreLHSHand);
//                                 planeintroMoreLHSHand.position.x = -0.55
//                                 planeintroMoreLHSHand.position.y = -1.5
//                                 // // OnClick Event For planeLHS
//                                 // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//                                 // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
//                                 //     console.log("planeInnerLHS clicked")
//                                 //     // alert("btn clicked")
//                                 // }, false)

//                                 //Render the scene
//                                 renderer.render(scene, camera);
//                                 document.body.appendChild(renderer.domElement);
//                             },
//                             // undefined,
//                             function (err) {
//                                 console.error('An error happened in RHS Image.');
//                             }
//                         );

//                         //Render the scene
//                         renderer.render(scene, camera);
//                         document.body.appendChild(renderer.domElement);
//                     },
//                     // undefined,
//                     function (err) {
//                         console.error('An error happened in LHS Image.');
//                     }
//                 );
    
//     //  ------------------------  Working  --------------------------
//                 // RHS Inner Function Change Image onClick
//                 //  var meshRHS;         
//                 const introMoreloadRHS = new THREE.TextureLoader();
//                 introMoreloadRHS.load(
//                    // 2nd URL
//                    "../asset/new_image_assets/game element-03.png",

//                     function (textureintroMoreRHS) {
//                        var planeMaterialintroMoreRHS = new THREE.MeshBasicMaterial({
//                             map: textureintroMoreRHS,
//                             transparent: true,
//                             // visible: false 
//                         });
//                         textureintroMoreRHS.wrapS = THREE.RepeatWrapping;
//                         textureintroMoreRHS.wrapT = THREE.RepeatWrapping;
//                         // textureLHS.repeat.set( 4, 4 );
//                         //Create a 2x2 plane with texture
//                         var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(2, 2);
//                         planeintroMoreRHS = new THREE.Mesh(planeGeometryintroMoreRHS, planeMaterialintroMoreRHS);
//                         scene.add(planeintroMoreRHS);
//                         planeintroMoreRHS.position.x = 1.2
//                         planeintroMoreRHS.position.y = -0.7
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
//                         console.error('An error happened in RHS Image.');
//                     }
//                 );   
    
//     //Render the scene
//     renderer.render(scene, camera);
//     document.body.appendChild(renderer.domElement);
    
// }

// // Function for Introduction of Less
// function introLess(){
//     console.log("planeintroMoreLHS Status:- ", planeintroMoreLHS.visible);
//     // Audio Indicating Less
//     playAudio("../Sounds/level0_sounds/ML_A_L0_5.mp3")
//     if(planeintroMoreLHS.visible)
//     {
//         console.log("Is Visible introLess");
//         planeintroMoreLHS.visible = false
//         planeintroMoreRHS.visible = false
//         planeintroMoreLHSHand.visible = false
//     }
    
//     //  ------------------------  Working  --------------------------
//                 // Load Image into introless LHS Side
//                 const loadLHSintroLess = new THREE.TextureLoader();
//                 loadLHSintroLess.load(
//                 "../asset/new_image_assets/game element-08.png",

//                     function (textureintroLessLHS) {
//                         var planeMaterialintroLessLHS = new THREE.MeshBasicMaterial({
//                             map: textureintroLessLHS,
//                             transparent: true,
//                             // visible: false 
//                         });
//                         textureintroLessLHS.wrapS = THREE.RepeatWrapping;
//                         textureintroLessLHS.wrapT = THREE.RepeatWrapping;
//                         // textureLHS.repeat.set( 4, 4 );
//                         //Create a 2x2 plane with texture
//                         var planeGeometryintroLessLHS = new THREE.PlaneBufferGeometry(2, 2);
//                         planeintroLessLHS = new THREE.Mesh(planeGeometryintroLessLHS, planeMaterialintroLessLHS);
//                         scene.add(planeintroLessLHS);
//                         planeintroLessLHS.position.x = -1.2
//                         planeintroLessLHS.position.y = -0.7

//                         //Render the scene
//                         renderer.render(scene, camera);
//                         document.body.appendChild(renderer.domElement);
//                     },
//                     // undefined,
//                     function (err) {
//                         console.error('An error happened in LHS Image.');
//                     }
//                 );
    
//     //  ------------------------  Working  --------------------------
//                 // Load Image into introless RHS Side         
//                 const loadRHSintroLess = new THREE.TextureLoader();
//                 loadRHSintroLess.load(
//                    // 2nd URL
//                    "../asset/new_image_assets/game element-02.png",

//                     function (textureintroLessRHS) {
//                        var planeMaterialintroLessRHS = new THREE.MeshBasicMaterial({
//                             map: textureintroLessRHS,
//                             transparent: true,
//                             // visible: false 
//                         });
//                         textureintroLessRHS.wrapS = THREE.RepeatWrapping;
//                         textureintroLessRHS.wrapT = THREE.RepeatWrapping;
//                         // textureLHS.repeat.set( 4, 4 );
//                         //Create a 2x2 plane with texture
//                         var planeGeometryintroLessRHS = new THREE.PlaneBufferGeometry(2, 2);
//                         planeintroLessRHS = new THREE.Mesh(planeGeometryintroLessRHS, planeMaterialintroLessRHS);
//                         scene.add(planeintroLessRHS);
//                         planeintroLessRHS.position.x = 1.2
//                         planeintroLessRHS.position.y = -0.7
                        
//                         // Add Hand Image Here
//                         const loadRHSintroLessHand = new THREE.TextureLoader();
//                         loadRHSintroLessHand.load(
//                         // Hand Image
//                         "../asset/hand_img.png",

//                             function (textureRHSHand) {
//                             var planeMaterialInnerRHS = new THREE.MeshBasicMaterial({
//                                     map: textureRHSHand,
//                                     transparent: true,
//                                     // visible: false 
//                                 });
//                                 textureRHSHand.wrapS = THREE.RepeatWrapping;
//                                 textureRHSHand.wrapT = THREE.RepeatWrapping;
//                                 // textureLHS.repeat.set( 4, 4 );
//                                 //Create a 2x2 plane with texture
//                                 var planeGeometryInnerRHS = new THREE.PlaneBufferGeometry(0.7, 0.7);
//                                 planeintroLessRHSHand = new THREE.Mesh(planeGeometryInnerRHS, planeMaterialInnerRHS);
//                                 scene.add(planeintroLessRHSHand);
//                                 planeintroLessRHSHand.position.x = 2
//                                 planeintroLessRHSHand.position.y = -1.5
//                                 // // OnClick Event For planeLHS
//                                 // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//                                 // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
//                                 //     console.log("planeInnerLHS clicked")
//                                 //     // alert("btn clicked")
//                                 // }, false)

//                                 //Render the scene
//                                 renderer.render(scene, camera);
//                                 document.body.appendChild(renderer.domElement);
//                             },
//                             // undefined,
//                             function (err) {
//                                 console.error('An error happened in RHS Image.');
//                             }
//                         );

//                         //Render the scene
//                         renderer.render(scene, camera);
//                         document.body.appendChild(renderer.domElement);
//                     },
//                     // undefined,
//                     function (err) {
//                         console.error('An error happened in RHS Image.');
//                     }
//                 );
//     //Render the scene
//     renderer.render(scene, camera);
//     document.body.appendChild(renderer.domElement);
    
// }

// // Function for Introduction of Equal
// function introEqual(){
//     console.log("planeintroLessLHS Status:- ", planeintroLessLHS.visible);
//     // Audio Indicating Equal
//     playAudio("../Sounds/level0_sounds/ML_A_L0_6.mp3")
//     if(planeintroLessLHS.visible)
//     {
//         console.log("Is Visible introEqual");
//         planeintroLessLHS.visible = false
//         planeintroLessRHS.visible = false
//         planeintroLessRHSHand.visible = false
//     }
    
//     //  ------------------------  Working  --------------------------
//                 // Load Image into introless LHS Side
//                 const loadLHSintroEqual = new THREE.TextureLoader();
//                 loadLHSintroEqual.load(
//                 "../asset/new_image_assets/game element-05.png",

//                     function (textureintroEqualLHS) {
//                         var planeMaterialintroEqualLHS = new THREE.MeshBasicMaterial({
//                             map: textureintroEqualLHS,
//                             transparent: true,
//                             // visible: false 
//                         });
//                         textureintroEqualLHS.wrapS = THREE.RepeatWrapping;
//                         textureintroEqualLHS.wrapT = THREE.RepeatWrapping;
//                         // textureLHS.repeat.set( 4, 4 );
//                         //Create a 2x2 plane with texture
//                         var planeGeometryintroEqualLHS = new THREE.PlaneBufferGeometry(2, 2);
//                         planeintroEqualLHS = new THREE.Mesh(planeGeometryintroEqualLHS, planeMaterialintroEqualLHS);
//                         scene.add(planeintroEqualLHS);
//                         planeintroEqualLHS.position.x = -1.2
//                         planeintroEqualLHS.position.y = -0.7

//                         //Render the scene
//                         renderer.render(scene, camera);
//                         document.body.appendChild(renderer.domElement);
//                     },
//                     // undefined,
//                     function (err) {
//                         console.error('An error happened in LHS Image.');
//                     }
//                 );
    
//     //  ------------------------  Working  --------------------------
//                 // Load Image into introEqual RHS Side         
//                 const loadRHSintroEqual = new THREE.TextureLoader();
//                 loadRHSintroEqual.load(
//                    // 2nd URL
//                    "../asset/new_image_assets/game element-05.png",

//                     function (textureintroEqualRHS) {
//                        var planeMaterialintroEqualRHS = new THREE.MeshBasicMaterial({
//                             map: textureintroEqualRHS,
//                             transparent: true,
//                             // visible: false 
//                         });
//                         textureintroEqualRHS.wrapS = THREE.RepeatWrapping;
//                         textureintroEqualRHS.wrapT = THREE.RepeatWrapping;
//                         // textureLHS.repeat.set( 4, 4 );
//                         //Create a 2x2 plane with texture
//                         var planeGeometryintroEqualRHS = new THREE.PlaneBufferGeometry(2, 2);
//                         planeintroEqualRHS = new THREE.Mesh(planeGeometryintroEqualRHS, planeMaterialintroEqualRHS);
//                         scene.add(planeintroEqualRHS);
//                         planeintroEqualRHS.position.x = 1.2
//                         planeintroEqualRHS.position.y = -0.7
                        
//                         // Add Hand Image Here
//                         const loadRHSintroEqualHand = new THREE.TextureLoader();
//                         loadRHSintroEqualHand.load(
//                         // Hand Image
//                         "../asset/hand_img.png",

//                             function (textureRHSHand) {
//                             var planeMaterialInnerRHS = new THREE.MeshBasicMaterial({
//                                     map: textureRHSHand,
//                                     transparent: true,
//                                     // visible: false 
//                                 });
//                                 textureRHSHand.wrapS = THREE.RepeatWrapping;
//                                 textureRHSHand.wrapT = THREE.RepeatWrapping;
//                                 // textureLHS.repeat.set( 4, 4 );
//                                 //Create a 2x2 plane with texture
//                                 var planeGeometryInnerRHS = new THREE.PlaneBufferGeometry(0.7, 0.7);
//                                 planeintroEqualRHSHand = new THREE.Mesh(planeGeometryInnerRHS, planeMaterialInnerRHS);
//                                 scene.add(planeintroEqualRHSHand);
//                                 planeintroEqualRHSHand.position.x = 2
//                                 planeintroEqualRHSHand.position.y = -1.5
//                                 // // OnClick Event For planeLHS
//                                 // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//                                 // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
//                                 //     console.log("planeInnerLHS clicked")
//                                 //     // alert("btn clicked")
//                                 // }, false)

//                                 //Render the scene
//                                 renderer.render(scene, camera);
//                                 document.body.appendChild(renderer.domElement);
//                             },
//                             // undefined,
//                             function (err) {
//                                 console.error('An error happened in planeintroEqualRHSHand Image.');
//                             }
//                         );
//                         //Render the scene
//                         renderer.render(scene, camera);
//                         document.body.appendChild(renderer.domElement);
//                     },
//                     // undefined,
//                     function (err) {
//                         console.error('An error happened in RHS Image.');
//                     }
//                 );
//     //Render the scene
//     renderer.render(scene, camera);
//     document.body.appendChild(renderer.domElement);   
// }

// // Make Recognition-More Function 
// // Calling Same Function of introMore
// function recogMore(){
//     console.log("planeintroEqualLHS Status:- ", planeintroEqualLHS.visible);
//     // Audio Indicating Equal
//     playAudio("../Sounds/level0_sounds/ML_A_L0_8.mp3")
//     if(planeintroEqualLHS.visible)
//     {
//         console.log("Is Visible recogMore");
//         planeintroEqualLHS.visible = false
//         planeintroEqualRHS.visible = false
//         planeintroEqualRHSHand.visible = false
//     }

//     //  ------------------------  Working  --------------------------
//                 // Inner Function Change Image onClick         
//                 const introMoreloadLHS = new THREE.TextureLoader();
//                 introMoreloadLHS.load(
//                 // "../asset/Set.png",
//                 "../asset/new_image_assets/game element-08.png",

//                 //   "../asset/test.jpeg",
//                 //  "../asset/Image place holder.png",
//                     function (textureintroMoreLHS) {
//                         var planeMaterialintroMoreLHS = new THREE.MeshBasicMaterial({
//                             map: textureintroMoreLHS,
//                             transparent: true,
//                             // visible: false 
//                         });
//                         textureintroMoreLHS.wrapS = THREE.RepeatWrapping;
//                         textureintroMoreLHS.wrapT = THREE.RepeatWrapping;
//                         // textureLHS.repeat.set( 4, 4 );
//                         //Create a 2x2 plane with texture
//                         var planeGeometryintroMoreLHS = new THREE.PlaneBufferGeometry(2, 2);
//                         planerecogMoreLHS = new THREE.Mesh(planeGeometryintroMoreLHS, planeMaterialintroMoreLHS);
//                         scene.add(planerecogMoreLHS);
//                         planerecogMoreLHS.position.x = -1.2
//                         planerecogMoreLHS.position.y = -0.7

//                         // // OnClick Event For planeLHS
//                         // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//                         // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
//                         //     console.log("planeInnerLHS clicked")
//                         //     // alert("btn clicked")
//                         // }, false)

//                         // Add Hand Image Here
//                         const loadLHSHand = new THREE.TextureLoader();
//                         loadLHSHand.load(
//                         // Hand Image
//                         "../asset/hand_img.png",

//                             function (textureintroMoreLHSHand) {
//                             var planeMaterialintroMoreLHSHand = new THREE.MeshBasicMaterial({
//                                     map: textureintroMoreLHSHand,
//                                     transparent: true,
//                                     // visible: false 
//                                 });
//                                 textureintroMoreLHSHand.wrapS = THREE.RepeatWrapping;
//                                 textureintroMoreLHSHand.wrapT = THREE.RepeatWrapping;
//                                 // textureLHS.repeat.set( 4, 4 );
//                                 //Create a 2x2 plane with texture
//                                 var planeGeometryintroMoreLHSHand = new THREE.PlaneBufferGeometry(0.7, 0.7);
//                                 planerecogMoreLHSHand = new THREE.Mesh(planeGeometryintroMoreLHSHand, planeMaterialintroMoreLHSHand);
//                                 scene.add(planerecogMoreLHSHand);
//                                 planerecogMoreLHSHand.position.x = -0.55
//                                 planerecogMoreLHSHand.position.y = -1.5
//                                 // // OnClick Event For planeLHS
//                                 // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//                                 // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
//                                 //     console.log("planeInnerLHS clicked")
//                                 //     // alert("btn clicked")
//                                 // }, false)

//                                 //Render the scene
//                                 renderer.render(scene, camera);
//                                 document.body.appendChild(renderer.domElement);
//                             },
//                             // undefined,
//                             function (err) {
//                                 console.error('An error happened in RHS Image.');
//                             }
//                         );

//                         //Render the scene
//                         renderer.render(scene, camera);
//                         document.body.appendChild(renderer.domElement);
//                     },
//                     // undefined,
//                     function (err) {
//                         console.error('An error happened in LHS Image.');
//                     }
//                 );
    
//     //  ------------------------  Working  --------------------------
//                 // RHS Inner Function Change Image onClick
//                 //  var meshRHS;         
//                 const introMoreloadRHS = new THREE.TextureLoader();
//                 introMoreloadRHS.load(
//                    // 2nd URL
//                    "../asset/new_image_assets/game element-02.png",

//                     function (textureintroMoreRHS) {
//                        var planeMaterialintroMoreRHS = new THREE.MeshBasicMaterial({
//                             map: textureintroMoreRHS,
//                             transparent: true,
//                             // visible: false 
//                         });
//                         textureintroMoreRHS.wrapS = THREE.RepeatWrapping;
//                         textureintroMoreRHS.wrapT = THREE.RepeatWrapping;
//                         // textureLHS.repeat.set( 4, 4 );
//                         //Create a 2x2 plane with texture
//                         var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(2, 2);
//                         planerecogMoreRHS = new THREE.Mesh(planeGeometryintroMoreRHS, planeMaterialintroMoreRHS);
//                         scene.add(planerecogMoreRHS);
//                         planerecogMoreRHS.position.x = 1.2
//                         planerecogMoreRHS.position.y = -0.7
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
//                         console.error('An error happened in RHS Image.');
//                     }
//                 );   
    
//     //Render the scene
//     renderer.render(scene, camera);
//     document.body.appendChild(renderer.domElement);
    
// }

// // Make Recognition-Less Function 
// // Calling Same Function of recogMore
// function recogLess(){
//     console.log("planerecogMoreLHS Status:- ", planerecogMoreLHS.visible);
//     // Audio Indicating Equal
//     playAudio("../Sounds/level0_sounds/ML_A_L0_9.mp3")
//     if(planerecogMoreLHS.visible)
//     {
//         console.log("Is Visible recogLess");
//         planerecogMoreLHS.visible = false
//         planerecogMoreRHS.visible = false
//         planerecogMoreLHSHand.visible = false
//     }

//     //  ------------------------  Working  --------------------------
//                 // Inner Function Change Image onClick         
//                 const introMoreloadLHS = new THREE.TextureLoader();
//                 introMoreloadLHS.load(
//                 // "../asset/Set.png",
//                 "../asset/new_image_assets/game element-03.png",

//                 //   "../asset/test.jpeg",
//                 //  "../asset/Image place holder.png",
//                     function (textureintroMoreLHS) {
//                         var planeMaterialintroMoreLHS = new THREE.MeshBasicMaterial({
//                             map: textureintroMoreLHS,
//                             transparent: true,
//                             // visible: false 
//                         });
//                         textureintroMoreLHS.wrapS = THREE.RepeatWrapping;
//                         textureintroMoreLHS.wrapT = THREE.RepeatWrapping;
//                         // textureLHS.repeat.set( 4, 4 );
//                         //Create a 2x2 plane with texture
//                         var planeGeometryintroMoreLHS = new THREE.PlaneBufferGeometry(2, 2);
//                         planerecogLessLHS = new THREE.Mesh(planeGeometryintroMoreLHS, planeMaterialintroMoreLHS);
//                         scene.add(planerecogLessLHS);
//                         planerecogLessLHS.position.x = -1.2
//                         planerecogLessLHS.position.y = -0.7

//                         // // OnClick Event For planeLHS
//                         // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//                         // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
//                         //     console.log("planeInnerLHS clicked")
//                         //     // alert("btn clicked")
//                         // }, false)

//                         // Add Hand Image Here
//                         const loadLHSHand = new THREE.TextureLoader();
//                         loadLHSHand.load(
//                         // Hand Image
//                         "../asset/hand_img.png",

//                             function (textureintroMoreLHSHand) {
//                             var planeMaterialintroMoreLHSHand = new THREE.MeshBasicMaterial({
//                                     map: textureintroMoreLHSHand,
//                                     transparent: true,
//                                     // visible: false 
//                                 });
//                                 textureintroMoreLHSHand.wrapS = THREE.RepeatWrapping;
//                                 textureintroMoreLHSHand.wrapT = THREE.RepeatWrapping;
//                                 // textureLHS.repeat.set( 4, 4 );
//                                 //Create a 2x2 plane with texture
//                                 var planeGeometryintroMoreLHSHand = new THREE.PlaneBufferGeometry(0.7, 0.7);
//                                 planerecogLessLHSHand = new THREE.Mesh(planeGeometryintroMoreLHSHand, planeMaterialintroMoreLHSHand);
//                                 scene.add(planerecogLessLHSHand);
//                                 planerecogLessLHSHand.position.x = -0.55
//                                 planerecogLessLHSHand.position.y = -1.5
//                                 // // OnClick Event For planeLHS
//                                 // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//                                 // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
//                                 //     console.log("planeInnerLHS clicked")
//                                 //     // alert("btn clicked")
//                                 // }, false)

//                                 //Render the scene
//                                 renderer.render(scene, camera);
//                                 document.body.appendChild(renderer.domElement);
//                             },
//                             // undefined,
//                             function (err) {
//                                 console.error('An error happened in RHS Image.');
//                             }
//                         );

//                         //Render the scene
//                         renderer.render(scene, camera);
//                         document.body.appendChild(renderer.domElement);
//                     },
//                     // undefined,
//                     function (err) {
//                         console.error('An error happened in LHS Image.');
//                     }
//                 );
    
//     //  ------------------------  Working  --------------------------
//                 // RHS Inner Function Change Image onClick
//                 //  var meshRHS;         
//                 const introMoreloadRHS = new THREE.TextureLoader();
//                 introMoreloadRHS.load(
//                    // 2nd URL
//                    "../asset/new_image_assets/game element-07.png",

//                     function (textureintroMoreRHS) {
//                        var planeMaterialintroMoreRHS = new THREE.MeshBasicMaterial({
//                             map: textureintroMoreRHS,
//                             transparent: true,
//                             // visible: false 
//                         });
//                         textureintroMoreRHS.wrapS = THREE.RepeatWrapping;
//                         textureintroMoreRHS.wrapT = THREE.RepeatWrapping;
//                         // textureLHS.repeat.set( 4, 4 );
//                         //Create a 2x2 plane with texture
//                         var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(2, 2);
//                         planerecogLessRHS = new THREE.Mesh(planeGeometryintroMoreRHS, planeMaterialintroMoreRHS);
//                         scene.add(planerecogLessRHS);
//                         planerecogLessRHS.position.x = 1.2
//                         planerecogLessRHS.position.y = -0.7
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
//                         console.error('An error happened in RHS Image.');
//                     }
//                 );   
//     //Render the scene
//     renderer.render(scene, camera);
//     document.body.appendChild(renderer.domElement);
// }

// // Make Recognition-Equal Function 
// // Calling Same Function of recogLess
// function recogEqual(){
//     console.log("planerecogLessLHS Status:- ", planerecogLessLHS.visible);
//     // Audio Indicating Equal
//     playAudio("../Sounds/level0_sounds/ML_A_L0_10.mp3")
//     if(planerecogLessLHS.visible)
//     {
//         console.log("Is Visible recogEqual");
//         planerecogLessLHS.visible = false
//         planerecogLessRHS.visible = false
//         planerecogLessLHSHand.visible = false
//     }

//     //  ------------------------  Working  --------------------------
//                 // Inner Function Change Image onClick         
//                 const introMoreloadLHS = new THREE.TextureLoader();
//                 introMoreloadLHS.load(
//                 // "../asset/Set.png",
//                 "../asset/new_image_assets/game element-04.png",

//                 //   "../asset/test.jpeg",
//                 //  "../asset/Image place holder.png",
//                     function (textureintroMoreLHS) {
//                         var planeMaterialintroMoreLHS = new THREE.MeshBasicMaterial({
//                             map: textureintroMoreLHS,
//                             transparent: true,
//                             // visible: false 
//                         });
//                         textureintroMoreLHS.wrapS = THREE.RepeatWrapping;
//                         textureintroMoreLHS.wrapT = THREE.RepeatWrapping;
//                         // textureLHS.repeat.set( 4, 4 );
//                         //Create a 2x2 plane with texture
//                         var planeGeometryintroMoreLHS = new THREE.PlaneBufferGeometry(2, 2);
//                         planerecogEqualLHS = new THREE.Mesh(planeGeometryintroMoreLHS, planeMaterialintroMoreLHS);
//                         scene.add(planerecogEqualLHS);
//                         planerecogEqualLHS.position.x = -1.2
//                         planerecogEqualLHS.position.y = -0.7

//                         // // OnClick Event For planeLHS
//                         // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//                         // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
//                         //     console.log("planeInnerLHS clicked")
//                         //     // alert("btn clicked")
//                         // }, false)

//                         // Add Hand Image Here
//                         const loadLHSHand = new THREE.TextureLoader();
//                         loadLHSHand.load(
//                         // Hand Image
//                         "../asset/hand_img.png",

//                             function (textureintroMoreLHSHand) {
//                             var planeMaterialintroMoreLHSHand = new THREE.MeshBasicMaterial({
//                                     map: textureintroMoreLHSHand,
//                                     transparent: true,
//                                     // visible: false 
//                                 });
//                                 textureintroMoreLHSHand.wrapS = THREE.RepeatWrapping;
//                                 textureintroMoreLHSHand.wrapT = THREE.RepeatWrapping;
//                                 // textureLHS.repeat.set( 4, 4 );
//                                 //Create a 2x2 plane with texture
//                                 var planeGeometryintroMoreLHSHand = new THREE.PlaneBufferGeometry(0.7, 0.7);
//                                 planerecogEqualLHSHand = new THREE.Mesh(planeGeometryintroMoreLHSHand, planeMaterialintroMoreLHSHand);
//                                 scene.add(planerecogEqualLHSHand);
//                                 planerecogEqualLHSHand.position.x = -0.55
//                                 planerecogEqualLHSHand.position.y = -1.5
//                                 // // OnClick Event For planeLHS
//                                 // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//                                 // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
//                                 //     console.log("planeInnerLHS clicked")
//                                 //     // alert("btn clicked")
//                                 // }, false)

//                                 //Render the scene
//                                 renderer.render(scene, camera);
//                                 document.body.appendChild(renderer.domElement);
//                             },
//                             // undefined,
//                             function (err) {
//                                 console.error('An error happened in RHS Image.');
//                             }
//                         );

//                         //Render the scene
//                         renderer.render(scene, camera);
//                         document.body.appendChild(renderer.domElement);
//                     },
//                     // undefined,
//                     function (err) {
//                         console.error('An error happened in LHS Image.');
//                     }
//                 );
    
//     //  ------------------------  Working  --------------------------
//                 // RHS Inner Function Change Image onClick
//                 //  var meshRHS;         
//                 const introMoreloadRHS = new THREE.TextureLoader();
//                 introMoreloadRHS.load(
//                    // 2nd URL
//                    "../asset/new_image_assets/game element-04.png",

//                     function (textureintroMoreRHS) {
//                        var planeMaterialintroMoreRHS = new THREE.MeshBasicMaterial({
//                             map: textureintroMoreRHS,
//                             transparent: true,
//                             // visible: false 
//                         });
//                         textureintroMoreRHS.wrapS = THREE.RepeatWrapping;
//                         textureintroMoreRHS.wrapT = THREE.RepeatWrapping;
//                         // textureLHS.repeat.set( 4, 4 );
//                         //Create a 2x2 plane with texture
//                         var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(2, 2);
//                         planerecogEqualRHS = new THREE.Mesh(planeGeometryintroMoreRHS, planeMaterialintroMoreRHS);
//                         scene.add(planerecogEqualRHS);
//                         planerecogEqualRHS.position.x = 1.2
//                         planerecogEqualRHS.position.y = -0.7
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
//                         console.error('An error happened in RHS Image.');
//                     }
//                 );   
//     //Render the scene
//     renderer.render(scene, camera);
//     document.body.appendChild(renderer.domElement);  
// }

// // Function For Complete Level-0
// function levelZeroComplete(){
//     console.log("planerecogEqualLHS Status:- ", planerecogEqualLHS.visible);
//     // Audio Indicating Equal
//     // playAudio("../Sounds/level0_sounds/ML_A_L0_10.mp3")
//     if(planerecogEqualLHS.visible)
//     {
//         console.log("Is Visible");
//         planerecogEqualLHS.visible = false
//         planerecogEqualRHS.visible = false
//         planerecogEqualLHSHand.visible = false
//         planeLHSMain.visible = false
//         planeRHSMain.visible = false
//     }

//     //  ------------------------  Working  --------------------------
//     // Inner Function Change Image onClick         
//     // Load play again image 
//     const loadImg = new THREE.TextureLoader();
//     loadImg.load(
//     // "../asset/Let's_play.png",
//     "../asset/logo/Play again.png",

//         function (texture) {
//             var planeMaterial = new THREE.MeshBasicMaterial({
//                 map: texture,
//                 transparent: true,
//                 // visible: false 
//             });

//             //Create a 2x2 plane with texture
//             var planeGeometry = new THREE.PlaneBufferGeometry(0.80, 0.80);
//             var planeLZCLHS = new THREE.Mesh(planeGeometry, planeMaterial);
//             scene.add(planeLZCLHS);
//             planeLZCLHS.position.x = -1
//             planeLZCLHS.position.y = -0.4
//             // planeLZCLHS.position.z =1

//             // OnClick Event For planeLHS
//                 const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
//                 domEvents.addEventListener(planeLZCLHS, 'click', function (event) {
//                     console.log("planeLZCLHS clicked")

//                     // planeLZCLHS.dispose

//                     // Only Remove but Button is Active after this event perform
//                     scene.remove(planeLZCLHS, planeLZCRHS);


//                     firstVisitAgain()
                                 
//                     // console.log("planeInnerLHS origDomEvent", event.origDomEvent)
//                     // console.log("planeInnerLHS isTrusted", event.origDomEvent.isTrusted)
//                     // var btndisable = event.origDomEvent.isTrusted;
//                     // console.log("btndisable",btndisable);
//                     // if (audioPlayed == true){
//                     //     console.log("this is true");
//                     //     plane.visible = false;
//                     //     init();     // call Main Function
                        
//                     //     // Comment audio only for testing purpose
//                     //     playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')
//                     //     // btndisable = false

//                     //     insOneLoad = false;  // Make instructor 1 invisible
//                     //     insTwoLoad = false;  // Make instructor 2 invisible
//                     //     console.log("insOneLoad inside Function", insOneLoad);
//                     //     console.log("insTwoLoad inside Function", insTwoLoad);
//                     // }
//                     // else{
//                     //     console.log("btndisable updated", btndisable);
//                     // }
//                     // plane.visible = false;    
//                 }, false)

//             // // OnClick Event For planeLHS
//             // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//             // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
//             //     console.log("planeInnerLHS clicked")
//             //     // alert("btn clicked")
//             // }, false)

//             //Render the scene
//             renderer.render(scene, camera);
//             document.body.appendChild(renderer.domElement);
//         },
//         // undefined,
//         function (err) {
//             console.error('An error happened in LHS Image.');
//         }
//     );
                
    
//     //  ------------------------  Working  --------------------------
//                 // RHS Inner Function Change Image onClick
//                 //  var meshRHS;         
//                 const introMoreloadRHS = new THREE.TextureLoader();
//                 introMoreloadRHS.load(
//                    // Play Next Level Image
//                    "../asset/logo/Play the next level.png",

//                     function (textureintroMoreRHS) {
//                        var planeMaterialintroMoreRHS = new THREE.MeshBasicMaterial({
//                             map: textureintroMoreRHS,
//                             transparent: true,
//                             // visible: false 
//                         });
//                         // textureintroMoreRHS.wrapS = THREE.RepeatWrapping;
//                         // textureintroMoreRHS.wrapT = THREE.RepeatWrapping;
//                         // textureLHS.repeat.set( 4, 4 );
//                         //Create a 2x2 plane with texture
//                         var planeGeometryintroMoreRHS = new THREE.PlaneBufferGeometry(0.80, 0.80);
//                         planeLZCRHS = new THREE.Mesh(planeGeometryintroMoreRHS, planeMaterialintroMoreRHS);
//                         scene.add(planeLZCRHS);
//                         planeLZCRHS.position.x = 1
//                         planeLZCRHS.position.y = -0.4
//                         // // OnClick Event For planeLHS
//                         const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//                         domEventsInnerLHS.addEventListener(planeLZCRHS, 'click', function (event) {
//                             console.log("planeInnerLHS clicked")

//                             // planeLZCLHS.visible = false
//                             // planeLZCRHS.visible = false
//                             // alert("btn clicked")
//                         }, false)

//                         //Render the scene
//                         renderer.render(scene, camera);
//                         document.body.appendChild(renderer.domElement);
//                     },
//                     // undefined,
//                     function (err) {
//                         console.error('An error happened in RHS Image.');
//                     }
//                 );   
//     //Render the scene
//     renderer.render(scene, camera);
//     document.body.appendChild(renderer.domElement);  
// }

// // Function For Display Canvas
// function init() {
//     // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3');

//     // Call All Header Functions Here
//     headerHome()
//     headerBack()
//     headerProgress()
//     headerSound()
//     headerHint()
//     headerReward()

//     // renderInsOne();
//     presentationOne();
//     console.log("nextaudio status------", nextAudio);
//     // introMore();
//     // renderInsThree()
//     // setTimeout(
//     //     //  ------------------------  Working  --------------------------
//     //     // Inner Function Change Image onClick         
//     //     const loadLHSImgInner = new THREE.TextureLoader();
//     //     loadLHSImgInner.load(
//     //     // "../asset/Set.png",
//     //     "../asset/new_image_assets/game element-01.png",

//     //     //   "../asset/test.jpeg",
//     //     //  "../asset/Image place holder.png",
//     //         function (textureInnerLHS) {
//     //             var planeMaterialInnerLHS = new THREE.MeshBasicMaterial({
//     //                 map: textureInnerLHS,
//     //                 // visible: false 
//     //             });
//     //             textureInnerLHS.wrapS = THREE.RepeatWrapping;
//     //             textureInnerLHS.wrapT = THREE.RepeatWrapping;
//     //             // textureLHS.repeat.set( 4, 4 );
//     //             //Create a 2x2 plane with texture
//     //             var planeGeometryInnerLHS = new THREE.PlaneBufferGeometry(2, 2);
//     //             var planeInnerLHS = new THREE.Mesh(planeGeometryInnerLHS, planeMaterialInnerLHS);
//     //             scene.add(planeInnerLHS);
//     //             planeInnerLHS.position.x = -1.5
//     //             planeInnerLHS.position.y = -0.7

//     //             // // OnClick Event For planeLHS
//     //             // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//     //             // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
//     //             //     console.log("planeInnerLHS clicked")
//     //             //     // alert("btn clicked")
//     //             // }, false)

//     //             //Render the scene
//     //             renderer.render(scene, camera);
//     //             document.body.appendChild(renderer.domElement);
//     //         },
//     //         // undefined,
//     //         function (err) {
//     //             console.error('An error happened in LHS Image.');
//     //         }
//     //     ),3000)



//     // var img = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
//     //     map:THREE.ImageUtils.loadTexture('../asset/Backgound.png')
//     // });
//     // img.map.needsUpdate = true; //ADDED

//     // // Load image locally
//     // const textureLoader = new THREE.TextureLoader();
//     // scene.background = textureLoader.load(backgroudimg);
//     // scene.background = textureLoader.load('../asset/Backgound.png');

//     // // Access IMG from Online
//     // const textureLoader = new THREE.TextureLoader();
//     // loader.load('./asset/Backgound.png' , function(texture)
//     //             {
//     //             scene.background = textureLoader;  
//     //             });

//     // // const boxGeometry = new THREE.BoxGeometry(2, 2, 2 ,5,10,5);
//     // const boxGeometry = new THREE.BoxGeometry(2, 2, 2 );
//     // const boxMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
//     // const box = new THREE.Mesh(boxGeometry, boxMaterial);
//     // scene.add(box);
//     // box.position.x = 3
//     // box.position.y = 0


//         // Load Instructor-1 At Center 
//         // const loadInsL0_1 = new THREE.TextureLoader();
//         // loadInsL0_1.load(
//         // "../asset/Instructor_L0_1.png",

//         //     function (textureInsL0_1) {
//         //         var planeMaterialInsL0_1 = new THREE.MeshBasicMaterial({
//         //             map: textureInsL0_1,
//         //             transparent: true,
//         //             // visible: false 
//         //         });
//         //         // textureInsL0_1.wrapS = THREE.RepeatWrapping;
//         //         // textureInsL0_1.wrapT = THREE.RepeatWrapping;
//         //         // textureLHS.repeat.set( 4, 4 );

//         //         //Create a 2x2 plane with texture
//         //         var planeGeometryInsL0_1 = new THREE.PlaneBufferGeometry(2.3, 2.3);
//         //         var planeInsL0_1 = new THREE.Mesh(planeGeometryInsL0_1, planeMaterialInsL0_1);
//         //         scene.add(planeInsL0_1);
//         //         planeInsL0_1.position.z = 1
//         //         planeInsL0_1.position.x = 0.5
//         //         planeInsL0_1.position.y = -0.7

//         //         //Render the scene
//         //         renderer.render(scene, camera);
//         //         document.body.appendChild(renderer.domElement);
//         //     },
//         //     // undefined,
//         //     function (err) {
//         //         console.error('An error happened in Instructor L0_1 Image.');
//         //     }
//         // );
        
//         // renderInsTwo();
//         // if(nextAudio == true){
//         //     renderInsTwo()
//         // }

//         //  Function For Render instructor img2 on condition
//         //     function renderInsTwo() {
//         //     // Render 2nd Instructor After 1st audio complete
//         //     // if( nextAudio == true){
//         //          // Load Instructor After 1st audio execution done 
//         //      const loadInsL0_2 = new THREE.TextureLoader();
//         //      loadInsL0_2.load(
//         //      // "../asset/Set.png",
//         //      "../asset/Instructor_L0_2.png",
    
//         //      //   "../asset/test.jpeg",
//         //      //  "../asset/Image place holder.png",
//         //          function (textureInsL0_2) {
//         //             var planeMaterialInsL0_2 = new THREE.MeshBasicMaterial({
//         //                 map: textureInsL0_2,
//         //                 transparent: true,
//         //                 // visible: false 
//         //             });
//         //             // textureInsL0_1.wrapS = THREE.RepeatWrapping;
//         //             // textureInsL0_1.wrapT = THREE.RepeatWrapping;
//         //             // textureLHS.repeat.set( 4, 4 );
//         //             //Create a 2x2 plane with texture
//         //             var planeGeometryInsL0_2 = new THREE.PlaneBufferGeometry(2.3, 2.3);
//         //             var planeInsL0_2 = new THREE.Mesh(planeGeometryInsL0_2, planeMaterialInsL0_2);
//         //             scene.add(planeInsL0_2);
//         //             planeInsL0_2.position.z = 1
//         //             planeInsL0_2.position.x = 2
//         //             planeInsL0_2.position.y = -0.7

//         //             // nextAudio = true
//         //          },
//         //          // undefined,
//         //          function (err) {
//         //              console.error('An error happened in Instructor L0_2 Image.');
//         //          }
//         //      );
//         //     // }
//         // }

//         // // Load Instructor After 1st audio execution done 
//         // const loadInsL0_2 = new THREE.TextureLoader();
//         // loadInsL0_2.load(
//         // // "../asset/Set.png",
//         // "../asset/Instructor_L0_2.png",

//         // //   "../asset/test.jpeg",
//         // //  "../asset/Image place holder.png",
//         //     function (textureInsL0_2) {
//         //         var planeMaterialInsL0_2 = new THREE.MeshBasicMaterial({
//         //             map: textureInsL0_2,
//         //             transparent: true,
//         //             // visible: false 
//         //         });
//         //         // textureInsL0_1.wrapS = THREE.RepeatWrapping;
//         //         // textureInsL0_1.wrapT = THREE.RepeatWrapping;
//         //         // textureLHS.repeat.set( 4, 4 );
//         //         //Create a 2x2 plane with texture
//         //         var planeGeometryInsL0_2 = new THREE.PlaneBufferGeometry(2.3, 2.3);
//         //         var planeInsL0_2 = new THREE.Mesh(planeGeometryInsL0_2, planeMaterialInsL0_2);
//         //         scene.add(planeInsL0_2);
//         //         planeInsL0_2.position.z = 1
//         //         planeInsL0_2.position.x = 2
//         //         planeInsL0_2.position.y = -0.7
//         //     },
//         //     // undefined,
//         //     function (err) {
//         //         console.error('An error happened in Instructor L0_2 Image.');
//         //     }
//         // );

      
//     // ------------------       working       ---------------------------------
//     // Load LHS Image Here
    
//     const loadLHSImg = new THREE.TextureLoader();
//     loadLHSImg.load(
//         // "../asset/test.jpeg",
//         "../asset/Image place holder.png",
//         // "../asset/Set.png",

//         function (textureLHS) {
//             var planeMaterialLHS = new THREE.MeshBasicMaterial({
//                 map: textureLHS,
//                 transparent: true,
//                 // visible: false 
//             });
//             textureLHS.wrapS = THREE.RepeatWrapping;
//             textureLHS.wrapT = THREE.RepeatWrapping;
//             // textureLHS.repeat.set( 4, 4 );

//             //Create a 2x2 plane with texture
//             var planeGeometryLHS = new THREE.PlaneBufferGeometry(2.1, 2.1);
//             planeLHSMain = new THREE.Mesh(planeGeometryLHS, planeMaterialLHS);
//             scene.add(planeLHSMain);
//             planeLHSMain.position.x = -1.2
//             planeLHSMain.position.y = -0.7
//             // planeLHS.position.z = 1
            
//             // OnClick Event For planeLHS
//             const domEventsLHS = new THREEx.DomEvents(camera, renderer.domElement)
//             domEventsLHS.addEventListener(planeLHSMain, 'click', function (event) {
//                 console.log("planeLHS clicked")

//                 // Load Required Audio (playAudio Function is Declare Above)
//                 // playAudio('../Sounds/level0_sounds/ML_A_L0_1.mp3')

//                 // Redirect to new page onClick - working
//                 // domEventsLHS.userData = { URL: "http://stackoverflow.com" };
//                 // location.href = 'level0_4.html';

//                 // Redirect to new page onClick - not working
//                 // var mybtn = document.querySelector('.level0_4');
//                 // mybtn.onClick = "location.href='level0_4.html'";

//                 // //  ------------------------  Working  --------------------------
//                 // // Inner Function Change Image onClick         
//                 // const loadLHSImgInner = new THREE.TextureLoader();
//                 // loadLHSImgInner.load(
//                 // "../asset/new_image_assets/game element-01.png",

//                 //     function (textureInnerLHS) {
//                 //         var planeMaterialInnerLHS = new THREE.MeshBasicMaterial({
//                 //             map: textureInnerLHS,
//                 //             transparent: true,
//                 //             // visible: false 
//                 //         });
//                 //         textureInnerLHS.wrapS = THREE.RepeatWrapping;
//                 //         textureInnerLHS.wrapT = THREE.RepeatWrapping;
//                 //         // textureLHS.repeat.set( 4, 4 );
//                 //         //Create a 2x2 plane with texture
//                 //         var planeGeometryInnerLHS = new THREE.PlaneBufferGeometry(2, 2);
//                 //         var planeInnerLHS = new THREE.Mesh(planeGeometryInnerLHS, planeMaterialInnerLHS);
//                 //         scene.add(planeInnerLHS);
//                 //         planeInnerLHS.position.x = -1.2
//                 //         planeInnerLHS.position.y = -0.7

//                 //         // // OnClick Event For planeLHS
//                 //         // const domEventsInnerLHS = new THREEx.DomEvents(camera, renderer.domElement)
//                 //         // domEventsInnerLHS.addEventListener(planeInnerLHS, 'click', function (event) {
//                 //         //     console.log("planeInnerLHS clicked")
//                 //         //     // alert("btn clicked")
//                 //         // }, false)

//                 //         //Render the scene
//                 //         renderer.render(scene, camera);
//                 //         document.body.appendChild(renderer.domElement);
//                 //     },
//                 //     // undefined,
//                 //     function (err) {
//                 //         console.error('An error happened in LHS Image.');
//                 //     }
//                 // );
//               }, false)
//              //Render the scene
//              renderer.render(scene, camera);
//              document.body.appendChild(renderer.domElement);
//          },
//         //  undefined,
//          function (err) {
//              console.error('An error happened in LHS Image.');
//          }
//       );

//     // Load RHS Image Here
//     const loadRHSImg = new THREE.TextureLoader();
//     loadRHSImg.load(
//         "../asset/Image place holder.png",
//         // "../asset/test.jpeg",

//         function (textureRHS) {
//             // console.log("LHS Function Executed");
//             var planeMaterialRHS = new THREE.MeshBasicMaterial({
//                 map: textureRHS,
//                 transparent: true,
//                 // visible: false 
//             });
//             textureRHS.wrapS = THREE.RepeatWrapping;
//             textureRHS.wrapT = THREE.RepeatWrapping;
//             // textureLHS.repeat.set( 4, 4 );

//             //Create a 2x2 plane with texture
//             var planeGeometryRHS = new THREE.PlaneBufferGeometry(2.1, 2.1);
//             // console.log("check for plaen size planeGeometryRHS", planeGeometryRHS)
//             planeRHSMain = new THREE.Mesh(planeGeometryRHS, planeMaterialRHS);
//             // console.log("planeRHS", planeRHS)
//             scene.add(planeRHSMain);
//             planeRHSMain.position.x = 1.2
//             planeRHSMain.position.y = -0.7


//             // // OnClick Event For planeRHS
//             // const domEventsRHS = new THREEx.DomEvents(camera, renderer.domElement)
//             // domEventsRHS.addEventListener(planeRHSMain, 'click', function (event) {
//             //     console.log("planeRHS clicked")
//             //     // alert("btn clicked")

//             //     // Load Required Audio (playAudio Function is Declare Above)
//             //     // playAudio('../Sounds/level0_sounds/ML_A_L0_2.mp3')

//             //     //  ------------------------  Working  --------------------------
//             //     // RHS Inner Function Change Image onClick
//             //     //  var meshRHS;         
//             //      const loadRHSImgInner = new THREE.TextureLoader();
//             //      loadRHSImgInner.load(
//             //         // 2nd URL
//             //         "../asset/new_image_assets/game element-02.png",
 
//             //          function (textureInnerRHS) {
//             //             var planeMaterialInnerRHS = new THREE.MeshBasicMaterial({
//             //                  map: textureInnerRHS,
//             //                  transparent: true,
//             //                  // visible: false 
//             //              });
//             //              textureInnerRHS.wrapS = THREE.RepeatWrapping;
//             //              textureInnerRHS.wrapT = THREE.RepeatWrapping;
//             //              // textureLHS.repeat.set( 4, 4 );
//             //              //Create a 2x2 plane with texture
//             //              var planeGeometryInnerRHS = new THREE.PlaneBufferGeometry(2, 2);
//             //              var planeInnerRHS = new THREE.Mesh(planeGeometryInnerRHS, planeMaterialInnerRHS);
//             //              scene.add(planeInnerRHS);
//             //              planeInnerRHS.position.x = 1.2
//             //              planeInnerRHS.position.y = -0.7

//             //              // OnClick Event For planeLHS
//             //              const domEventsInnerRHS = new THREEx.DomEvents(camera, renderer.domElement)
//             //              domEventsInnerRHS.addEventListener(planeInnerRHS, 'click', function (event) {
//             //                 console.log("planeInnerRHS clicked")
//             //                 // alert("btn clicked")

//             //                 // Set Image for either correct Or incorrect
//             //                 const loadRHSImgInner = new THREE.TextureLoader();
//             //                 loadRHSImgInner.load(
//             //                 // incorrect
                            
//             //                    "../asset/new_image_assets/Rectangle error.png" ,
           
//             //                     function (textureInnerRHS) {
//             //                         var planeMaterialInnerRHS = new THREE.MeshBasicMaterial({
//             //                             map: textureInnerRHS,
//             //                             // visible: false 
//             //                         });
//             //                         textureInnerRHS.wrapS = THREE.RepeatWrapping;
//             //                         textureInnerRHS.wrapT = THREE.RepeatWrapping;
//             //                         // textureLHS.repeat.set( 4, 4 );
//             //                         //Create a 2x2 plane with texture
//             //                         var planeGeometryInnerRHS = new THREE.PlaneBufferGeometry(2, 2);
//             //                         var planeInnerRHS = new THREE.Mesh(planeGeometryInnerRHS, planeMaterialInnerRHS);
//             //                         scene.add(planeInnerRHS);
//             //                         planeInnerRHS.position.x = 1.2
//             //                         planeInnerRHS.position.y = -0.7
           
//             //                         // OnClick Event For planeLHS
//             //                         const domEventsInnerRHS = new THREEx.DomEvents(camera, renderer.domElement)
//             //                         domEventsInnerRHS.addEventListener(planeInnerRHS, 'click', function (event) {
//             //                            console.log("planeInnerRHS clicked")
//             //                            // alert("btn clicked")
//             //                         }, false)
           
//             //                        //Render the scene
//             //                        renderer.render(scene, camera);
//             //                        document.body.appendChild(renderer.domElement);
//             //                     },
//             //                     // undefined,
//             //                     function (err) {
//             //                         console.error('An error happened in RHS Image.');
//             //                     }
//             //                 );
//             //              }, false)

//             //             //Render the scene
//             //             renderer.render(scene, camera);
//             //             document.body.appendChild(renderer.domElement);
//             //          },
//             //          // undefined,
//             //          function (err) {
//             //              console.error('An error happened in RHS Image.');
//             //          }
//             //      );
//             // }, false)

//             //Render the scene
//             renderer.render(scene, camera);
//             document.body.appendChild(renderer.domElement);
//         },
//         undefined,
//         function (err) {
//             console.error('An error happened in RHS Image.');
//         }
//     );

//     // const planeGeometry = new THREE.PlaneBufferGeometry(2, 2);
//     // // const texture = new THREE.TextureLoader().load('./asset/Set.png');
//     // // const texture = new THREE.TextureLoader().load('https://images.unsplash.com/photo-1646335480320-6cfb285c835c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80');
//     // // const planeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
//     // // material.map    = THREE.ImageUtils.loadTexture('images/earthmap1k.jpg');
//     // // const planeMaterial = new THREE.MeshBasicMaterial({map: texture});
//     // // const planeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff });
//     // // const color4 = new THREE.Color32("rgb(100%, 0%, 0%)");


//     // // // Image Debuging
//     // //const loader = new THREE.TextureLoader();
//     // // // load a resource
//     // //loader.load(
//     // //    // resource URL
//     // //    // './asset/Set.png',       // Local Image Path
//     // //    'https://images.unsplash.com/photo-1646335480320-6cfb285c835c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',

//     // //    // onLoad callback
//     // //    function ( texture ) {
//     // //        // in this example we create the material when the texture is loaded
//     // //        const planeMaterial = new THREE.MeshBasicMaterial( {
//     // //            map: texture
//     // //            
//     // //        } );
//     // //    },

//     // //    // onProgress callback currently not supported
//     // //    undefined,

//     // //    // onError callback
//     // //    function ( err ) {
//     // //        console.error( 'An error happened.' );
//     // //    }
//     // //);

//     // // const planeMaterial = new THREE.MeshBasicMaterial({color: "rgb(100%, 0%, 0%)"});

//     // // const planeMaterial = new THREE.MeshBasicMaterial({
//     // //     color: "#fafafa",
//     // //     side: THREE.DoubleSide,
//     // //     // visible: false,
//     // // });

//     // const planeMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('../asset/test.jpeg') });

//     // // const planeMaterial = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load("./asset/Set.png") })

//     // // const textureloader = new THREE.TextureLoader();
//     // //        textureloader.load('./asset/Set.png',function(tx){
//     // //         planeMaterial = new THREE.MeshBasicMaterial({
//     // // 	        map: tx,
//     // //         wireframe: false
//     // //   	  });

//     // const plane = new THREE.Mesh(planeGeometry, planeMaterial);
//     // // plane.overdraw = true;
//     // // plane.doubleside = true;

//     // scene.add(plane)

//     // // plane.cursor = 'pointer';
//     // // plane.on('click', function(ev) {() => console.log("clicked")});


//     // plane.position.x = 1.5
//     // plane.position.y = -0.7
//     // // plane.position.z = -4



//     // const sphereGeometry = new THREE.SphereGeometry(2);
//     // const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00 });
//     // const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial)
//     // scene.add(sphere);


//     // const textureImage = '../asset/ping_pong_ball.png';
//     // const texture2 = new THREE.TextureLoader().load('./asset/Set.png');
//     // console.log("texture2",texture2)

//     // let texture3 = new THREE.TextureLoader().load(`./asset/Set.png`);
//     // cover(texture3, 1.8 / 2.0);
//     // console.log("texture3", texture3)

//     // // const box2Geometry = new THREE.Box3(1, 1, 1 );

//     // const plane2Geometry = new THREE.PlaneBufferGeometry(2, 2);
//     // // // const plane2Material = new THREE.MeshBasicMaterial({color: 0xffffff});
//     // // var img = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
//     // //     // map:THREE.ImageUtils.loadTexture('./asset/Set.png')
//     // //     map: new THREE.TextureLoader().load('./asset/Set.png')
//     // //     // map:THREE.ImageUtils.loadTexture('./asset/Set.png')
//     // //     // map:THREE.TextureLoader('../asset/ping_pong_ball.png')
//     // // });
//     // // img.map.needsUpdate = true; //ADDED
//     // // const plane2Material = new THREE.MeshBasicMaterial({map: texture2});
//     // // const plane2Material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./asset/Set.png')});
//     // const plane2Texture = THREE.ImageUtils.loadTexture('../asset/test.jpeg')
//     // const plane2Material = new THREE.MeshBasicMaterial({ map: plane2Texture });
//     // plane2Texture.wrapS = THREE.RepeatWrapping;
//     // plane2Texture.wrapT = THREE.RepeatWrapping;
//     // console.log("plane2Material:- ", plane2Material)
//     // // const plane2 = new THREE.Mesh(plane2Geometry, plane2Material);
//     // const plane2 = new THREE.Mesh(plane2Geometry, plane2Material);
//     // // const plane2 = new THREE.Mesh(plane2Geometry, img);
//     // plane2.overdraw = true;
//     // scene.add(plane2);
//     // console.log("plane2 dimentions:- ", plane2.position.length())

//     // plane2.position.x = -1.5
//     // plane2.position.y = -0.7

//     // // For Plane 3
//     // var planeGeom = new THREE.PlaneGeometry(2, 2);
//     // var imgSrc = "./asset/Set.png"
//     // var mesh;
//     // var tex = new THREE.TextureLoader().load(imgSrc, (tex) => {
//     // tex.needsUpdate = true;
//     // mesh.scale.set(1.0, tex.image.height / tex.image.width, 1.0);
//     // });
//     // 
//     // var material = new THREE.MeshLambertMaterial({
//     // color: 0xffffff,
//     // map: tex
//     // });
//     // mesh = new THREE.Mesh(planeGeom, material);
//     // // console.log("mesh",mesh )
//     // console.log("distance",mesh.position.distanceTo(new THREE.Vector3(0 ,1 ,2)) )
//     // scene.add(mesh);



//     // if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
//     //    console.info( "This page is reloaded" );

//     // //  -------------------- This code is working     --------------------------------------------------------
//     // //Load the texture4
//     // var loader = new THREE.TextureLoader();
//     // loader.load(
//     //     // "https://cdn.glitch.com/62a3a7d1-3c19-4fb7-b1ef-a1c65ba38596%2Fboard.svg?v=1577426114562",
//     //     "../asset/test.jpeg",

//     //    function (texture4) {
//     //        var material4 = new THREE.MeshBasicMaterial({ map: texture4, visible: false });
//     //        texture4.wrapS = THREE.RepeatWrapping;
//     //        texture4.wrapT = THREE.RepeatWrapping;
//     //        // texture4.repeat.set( 4, 4 );

//     //        //Create a 2x2 plane with texture
//     //        var geometry4 = new THREE.PlaneBufferGeometry(2, 2);
//     //        //var material = new THREE.MeshBasicMaterial({ map: texture });
//     //        var plane4 = new THREE.Mesh(geometry4, material4);
//     //        scene.add(plane4);
//     //        // plane4.position.x = -1
//     //        // plane4.position.y = -0.5

//     //         //Render the scene
//     //         renderer.render(scene, camera);
//     //         document.body.appendChild(renderer.domElement);
//     //     },
//     //     // undefined,
//     //     function (err) {
//     //         console.error('An error happened.');
//     //     }
//     // );
//     //  ------------------------------------------------------------------------------------------------------------

//     // }


//     // const axesHelper = new THREE.AxesHelper(10);
//     // scene.add(axesHelper);

//     // // Access Function Here for load image
//     // var loader = new THREE.TextureLoader();
//     // loader.load("./asset/Set.png",
//     //             function (texture) {
//     //                 displayPanels(texture);
//     //             } );


//     //Load Image Here
//     // const textureLoader =  new THREE.TextureLoader();
//     // const cubeTextureLoader =  new THREE.CubeTextureLoader();
//     // scene.background = cubeTextureLoader.load([
//     //     '../asset/ping_pong_ball.png',
//     // ])


//     // Create a texture loader so we can load our image file
//     // var loader = new THREE.TextureLoader();

//     // // Load an image file into a custom material
//     // var material = new THREE.MeshLambertMaterial({
//     // map: loader.load('https://s3.amazonaws.com/duhaime/blog/tsne-webgl/assets/cat.jpg')
//     // });



//     // controls.update();

// }

// // function createBoxWithRoundedEdges( width, height, depth, radius0, smoothness ) {
// //     let shape = new THREE.Shape();
// //     let eps = 0.00001;
// //     let radius = radius0 - eps;
// //     shape.absarc( eps, eps, eps, -Math.PI / 2, -Math.PI, true );
// //     shape.absarc( eps, height -  radius * 2, eps, Math.PI, Math.PI / 2, true );
// //     shape.absarc( width - radius * 2, height -  radius * 2, eps, Math.PI / 2, 0, true );
// //     shape.absarc( width - radius * 2, eps, eps, 0, -Math.PI / 2, true );
// //     let geometry = new THREE.ExtrudeBufferGeometry( shape, {
// //       amount: depth - radius0 * 2,
// //       bevelEnabled: true,
// //       bevelSegments: smoothness * 2,
// //       steps: 1,
// //       bevelSize: radius,
// //       bevelThickness: radius0,
// //       curveSegments: smoothness
// //     });

// //     geometry.center();

// //     return geometry;
// //   }


// //  // Create Function for Show the Image
// // function displayPanels (texture) {
// // 
// //     const scene = new THREE.Scene();  
// // 
// //     // plane geometry with texture-mapped floral image
// //     var planeGeom = new THREE.PlaneGeometry(10,10);
// //     var planeMat = new THREE.MeshBasicMaterial(
// //                            {color: 0xffffff,
// //                             map: texture} );
// //     var planeMesh = new THREE.Mesh(planeGeom, planeMat);
// //     scene.add(planeMesh);
// // 
// //     // // repeat texture mapping on right panel
// //     // var planeMeshR = planeMesh.clone();
// //     // var dist = 5*Math.cos(Math.PI/4);
// //     // planeMeshR.position.set(5+dist, 0, dist);
// //     // planeMeshR.rotation.y = -Math.PI/4;
// //     // scene.add(planeMeshR);
// // 
// //     // // repeat texture mapping on left panel
// //     // var planeMeshL = planeMesh.clone();
// //     // planeMeshL.position.set(-5-dist, 0, dist);
// //     // planeMeshL.rotation.y = Math.PI/4;
// //     // scene.add(planeMeshL);
// // 
// //     TW.render();    // render the scene
// // }

// // Function For Home Popup
// function homePopup() {
    
//     console.log("------- Popup");
//     // if (insOneLoad == false){
//     //     planeInsL0_1.visible = false
//     //     console.log("Hide Instructor here");
//     // }
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
//      const loadPopup = new THREE.TextureLoader();
//      loadPopup.load(
//      "../asset/Instructor_L0_2.png",

//          function (texturePopup) {
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
//          },
//          // undefined,
//          function (err) {
//              console.error('An error happened in Instructor L0_2 Image.');
//          }
//      );
//     // }
//         // Render Scene and Camera Popup - Global
//         rendererPopup.render(scene, camera)
//         document.body.appendChild(rendererPopup.domElement);

//     // Resize the Screen Popup - Global
//     window.addEventListener('resize', function () {
//         camera.aspect = window.innerWidth / window.innerHeight;
//         // camera.aspect = 600 / 500;
//         camera.updateProjectionMatrix();
//         rendererPopup.setSize(window.innerWidth, window.innerHeight)
//         // rendererPopup.setSize(600, 500)
//     })
// }