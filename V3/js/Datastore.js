console.log("Data Store File working")

// #region
/////////////////////// ------------------ Data CLASSES ------------------ //////////////////////////////////
class Main {
  constructor() {
    this.data = new Data();
  }
}

class Data {
  constructor() {
    this.learningTrackid = 0;
    this.gameId = 0;
    this.gameVersion = "";
    this.predGameId = 0;
    this.gamePath = "";
    this.isActive = false;
    this.isblocked = false;
    this.isGameDownloadComplete = false;
    this.attemptId0;
    this.gameName = "";
    this.totalRewards = 0;
    this.completedCount = 0;
    this.startDateTime = "";
    this.endDateTime = "";
    this.completed = false;
    this.isMusic = false;
    this.rewardsPerLevel = 0;
    this.lang = "";
    this.levelDetails = new LevelDetails();
  }
}

class LevelDetails {
  constructor() {
    this.currentLevel = new CurrentLevel();
    this.level0 = new Level0();
    this.level1 = new Level();
    this.level2 = new Level();
    this.level3 = new Level();
    this.level4 = new Level();
  }
}

class CurrentLevel {
  constructor() {
    this.level = 0;
    this.presentationCompleted = 0;
  }
}

class Level0 {
  constructor() {
    this.presentation = new Presentation();
  }
}

class Level {
  constructor() {
    this.presentation = new Presentation();
    this.completed = 0;
    this.playCount = 0;
    this.completedCount = 0;
    this.timeSpent = 0;
    this.correctAttempts = 0;
    this.incorrectAttempts = 0;
  }
}

class Presentation {
  constructor() {
    this.completed = 0;
    this.playCount = 0;
    this.completedCount = 0
    this.timeSpent = 0;
  }
}

/////////////////////// ------------------ Data CLASSES ------------------ //////////////////////////////////

// #endregion

// import './script'
// import { sendToApp } from './event'


var messageData;

var message = { "data": {} };
message.data = { "learningTrackid": 1, "gameId": 1, "gameVersion": "string", "predGameId": 0, "gamePath": "https://kreedo-game-upload-poc.s3.us-east-2.amazonaws.com/701_LearningTeens.zip", "isActive": true, "isblocked": false, "isGameDownloadComplete": true, "gameName": "Place Value Quantities", "attemptId": 0, "totalRewards": 0, "completedCount": 0, "startDateTime": "", "endDateTime": "", "completed": 0, "isMusic": true, "levelDetails": { "currentLevel": { "level": 0, "presentationCompleted": 0 }, "level0": { "presentation": { "completed": 0, "playCount": 0, "completedCount": 0, "timeSpent": 0 } }, "level1": { "presentation": { "completed": 0, "playCount": 0, "completedCount": 0, "timeSpent": 0 }, "completed": 0, "playCount": 0, "completedCount": 0, "timeSpent": 0, "correctAttempts": 0, "incorrectAttempts": 0 }, "level2": { "presentation": { "completed": 0, "playCount": 0, "completedCount": 0, "timeSpent": 0 }, "completed": 0, "playCount": 0, "completedCount": 0, "timeSpent": 0, "correctAttempts": 0, "incorrectAttempts": 0 }, "level3": { "presentation": { "completed": 0, "playCount": 0, "completedCount": 0, "timeSpent": 0 }, "completed": 0, "playCount": 0, "completedCount": 0, "timeSpent": 0, "correctAttempts": 0, "incorrectAttempts": 0 }, "level4": { "presentation": { "completed": 0, "playCount": 0, "completedCount": 0, "timeSpent": 0 }, "completed": 0, "playCount": 0, "completedCount": 0, "timeSpent": 0, "correctAttempts": 0, "incorrectAttempts": 0 } } };
var levelDetails = message.data.levelDetails;

const sendButton = document.querySelector('button#send1')
const getDataButton = document.querySelector('button#getdata')

const l1PComplete = document.querySelector('input#l1pComplete')

const l0Complete = document.querySelector('input#l0Complete')
const l1Complete = document.querySelector('input#l1Complete')

const l0Count = document.querySelector('input#l0Count')
const l1Count = document.querySelector('input#l1Count')

const l0Time = document.querySelector('input#l0Time')
const l1Time = document.querySelector('input#l1Time')

//document.addEventListener("data", handleEvent);
//console.log(document.addEventListener("data", handleEvent));
handleEvent(message);

// sendButton.addEventListener('click', handleSend); // Active 
// getDataButton.addEventListener('click', GetData); // Active 


// Abhishek Code ----------------------------------------------------------
// localStorage.setItem('level0count', 10)
// ------------------------------------------------------------------------


// function handleEvent(messageTemp) {
export function handleEvent(messageTemp) {
  messageData = messageTemp.data;
  // messageData = message.data;

  if (messageData) {

    self.globalThis.mainData = messageData;
    self.globalThis.global = {};
    self.globalThis.global.GameID = messageData.gameId;
    self.globalThis.global.GameName = messageData.gameName;
    self.globalThis.global.AttemptID = messageData.attemptId;
    // self.globalThis.global.IsWeb = isWeb;
    self.globalThis.global.RewardPoints = messageData.totalRewards;
    self.globalThis.global.isMusic = messageData.isMusic;
    self.globalThis.global.isGameCompleted = messageData.completed;
    self.globalThis.global.GameCompletedCounter = 0;
    self.globalThis.global.GameLevel = messageData.levelDetails.currentLevel.level;

    messageData.completedCount = 0;
    messageData.levelDetails.level0 = levelDetails.level0;
    messageData.levelDetails.level1 = levelDetails.level1;
    messageData.levelDetails.level2 = levelDetails.level2;
    messageData.levelDetails.level3 = levelDetails.level3;
    messageData.levelDetails.level4 = levelDetails.level4;


    if (self.globalThis.global.isGameCompleted) {
      self.globalThis.global.L4TutorialDone = 1;
      self.globalThis.global.L3TutorialDone = 1;
      self.globalThis.global.L2TutorialDone = 1;
      self.globalThis.global.L1TutorialDone = 1;
      self.globalThis.global.L0TutorialDone = 1;

      self.globalThis.global.L1_Completed = 1;
      self.globalThis.global.L2_Completed = 1;
      self.globalThis.global.L3_Completed = 1;
      self.globalThis.global.L4_Completed = 1;
    }
    else {
      if (self.globalThis.global.GameLevel == 0) {
        self.globalThis.global.L0TutorialDone = messageData.levelDetails.currentLevel.presentationCompleted
      }
      else if (self.globalThis.global.GameLevel == 1) {
        self.globalThis.global.L0TutorialDone = 1;
        self.globalThis.global.L1TutorialDone = messageData.levelDetails.currentLevel.presentationCompleted

      }
      else if (self.globalThis.global.GameLevel == 2) {
        self.globalThis.global.L2TutorialDone = messageData.levelDetails.currentLevel.presentationCompleted;
        self.globalThis.global.L1TutorialDone = 1;
        self.globalThis.global.L0TutorialDone = 1;

        self.globalThis.global.L1_Completed = 1;
      }
      else if (self.globalThis.global.GameLevel == 3) {
        self.globalThis.global.L3TutorialDone = messageData.levelDetails.currentLevel.presentationCompleted
        self.globalThis.global.L2TutorialDone = 1;
        self.globalThis.global.L1TutorialDone = 1;
        self.globalThis.global.L0TutorialDone = 1;


        self.globalThis.global.L1_Completed = 1;
        self.globalThis.global.L2_Completed = 1;
      }
      else if (self.globalThis.global.GameLevel == 4) {
        self.globalThis.global.L4TutorialDone = messageData.levelDetails.currentLevel.presentationCompleted
        self.globalThis.global.L3TutorialDone = 1;
        self.globalThis.global.L2TutorialDone = 1;
        self.globalThis.global.L1TutorialDone = 1;
        self.globalThis.global.L0TutorialDone = 1;

        self.globalThis.global.L1_Completed = 1;
        self.globalThis.global.L2_Completed = 1;
        self.globalThis.global.L3_Completed = 1;
      }
      else {
        console.log("current level " + self.globalThis.global.GameLevel);
      }
    }
  }

  window.sessionStorage.setItem("data", JSON.stringify(messageData));

  self.globalThis.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(self.globalThis));
}

function handleSend() {
  console.log(self.globalThis.global);

  var mainData = self.globalThis.mainData;

  mainData.levelDetails.level0.presentation.completed = l0Complete.checked ? 1 : 0;
  mainData.levelDetails.level0.presentation.playCount = l0Count.value;
  mainData.levelDetails.level0.presentation.timeSpent = l0Time.value;

  mainData.levelDetails.level1.presentation.completed = l0Complete.checked ? 1 : 0;
  mainData.levelDetails.level1.presentation.playCount = l1Count.value;
  mainData.levelDetails.level1.presentation.timeSpent = l1Time.value;

  mainData.levelDetails.level1.completed = l1Complete.checked ? 1 : 0;
  mainData.levelDetails.level1.playCount = l1Count.value;
  mainData.levelDetails.level1.timeSpent = l1Time.value;
  mainData.levelDetails.level1.correctAttempts = l1Count.value;

  self.globalThis.mainData = mainData;
  window.sessionStorage.setItem("data", JSON.stringify(mainData));
  sendToApp(mainData);
  // document.addEventListener("message", JSON.stringify(message));
}

function GetData() {
  // let msg = JSON.stringify(message);
  let msg = message;
  console.log("SEND BUTTON CLICKED" + " " + JSON.stringify(message) + " " + JSON.stringify(mainData));
  // console.log("fetch the level0 data from session ", JSON.parse())  // Edit By ABhishek 
  console.log(typeof (msg));
  // console.log(msg);
  console.log(message)
  if (msg.data.levelDetails.currentLevel.level == 0) {

    // l1Complete = details.completed;
    // l1Count = details.completedCount;
    // l1PComplete = details.comple
    document.getElementById("l1Time").value = msg.data.levelDetails.level0.presentation.timeSpent;
    document.getElementById("l1Count").value = msg.data.levelDetails.level0.presentation.playCount;
    // document.getElementById("l1Complete").value = msg.data.levelDetails.Level0.presentation.completed;
    console.log(msg.data.levelDetails.level0.presentation.completed);
    document.getElementById("l1Complete").checked = msg.data.levelDetails.level0.presentation.completed == 1 ? true : false;
    // completed: 1
    // completedCount: 0
  }
  console.log(msg.data.levelDetails.level0);
  console.log(msg.data.levelDetails.level1);
  console.log(l1Count)
  // lD = msg.data.levelDetails;
  // currentL = lD.currentLevel.level;
  // cldata = ld[`level${currentL}`];
  // console.log(cldata)
  document.getElementById("l1Count").value
  document.getElementById("l1pComplete").value
  // document.getElementById("l0Complete").value
  // document.getElementById("l1Time").value = l1Count;
  // document.getElementById("l1Complete").value = l1Time;
}

async function OnBeforeProjectStart(globalThis) {
  globalThis.getInstanceByUid(486).setJsonDataCopy(messageData);
  console.log("CONSTRUCT_JSON_DATA_SET", globalThis.getInstanceByUid(486).getJsonDataCopy())
  globalThis.addEventListener("tick", () => Tick(globalThis));
}

function Tick(globalThis) {
  // Code to run every tick
}

