console.log("index Main Page Working")

// const canvas = document.querySelector('.indexMain');
// Set Data To Local Storage
var setItemLocal

setItemLocal = localStorage.setItem('level0', true)

// localStorage.setItem('level0', false)
// localStorage.setItem('level1', false)
// localStorage.setItem('level2', false)
// localStorage.setItem('level3', false)
// localStorage.setItem('level4', false)
//  ------------------   Working   ----------------------

// Get Item From Local Storage 
// var roundData = localStorage.getItem("level1Rounds")
// var finalData = JSON.parse(roundData).level1Rounds
// var levelNumber
var setItemLocal = localStorage.setItem('level1_Pre', false)
var setItemLocal = localStorage.setItem('level2_Pre', false)
var setItemLocal = localStorage.setItem('level3_Pre', false)
var setItemLocal = localStorage.setItem('level4_Pre', false)

var findRewards = localStorage.getItem("RewardPoints")
var addReward = JSON.parse(findRewards)

if (findRewards) {
  // var setItemLocal = localStorage.setItem('RewardPoints', 0)  // Reward Points
  var setItemLocal = localStorage.setItem('RewardPoints', addReward)  // Reward Points
} else {

  var setItemLocal = localStorage.setItem('RewardPoints', 0)  // Reward Points
}
// var setItemLocal = localStorage.setItem('RewardPoints', 100)  // Reward Points

var level0 = localStorage.getItem("level0")
console.log(level0);
var level1 = localStorage.getItem("level1")
var level2 = localStorage.getItem("level2")
var level3 = localStorage.getItem("level3")
var level4 = localStorage.getItem("level4")

var level0Final = JSON.parse(level0)
var level1Final = JSON.parse(level1)
var level2Final = JSON.parse(level2)
var level3Final = JSON.parse(level3)
var level4Final = JSON.parse(level4)

console.log("level0Final", level0Final)
console.log("level1Final", level1Final)
console.log("level2Final", level2Final)
console.log("level3Final", level3Final)
console.log("level4Final", level4Final)

//  ------------------------------------------------------

if (level0Final == true) {
  console.log("redirect Level 1");
  location.href = "index.html"
}
if (level1Final == true) {
  console.log("redirect Level 1");
  location.href = "level1.html"
}
if (level1Final == true && level2Final == true) {
  console.log("redirect Level 2");
  location.href = "level2.html"
}
if (level1Final == true && level2Final == true && level3Final == true) {
  console.log("redirect Level 3");
  location.href = "level3.html"
}
if (level1Final == true && level2Final == true && level3Final == true && level4Final == true) {
  console.log("redirect Level 4");
  location.href = "level4.html"
}
