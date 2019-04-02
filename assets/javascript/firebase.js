// Initialize Firebase
var config = {
 apiKey: "AIzaSyC1kKG2iWXeLJ2kTQmk-UHfQTYYrGrmEfk",
 authDomain: "group-project-bridgecontrol.firebaseapp.com",
 databaseURL: "https://group-project-bridgecontrol.firebaseio.com",
 projectId: "group-project-bridgecontrol",
 storageBucket: "",
 messagingSenderId: "206097633250"
};

firebase.initializeApp(config);
var database = firebase.database();
var rootRef = firebase.database().ref();

// var allLog = [];
var snapArr;
// Attach an asynchronous callback to read the data at our posts referencer
rootRef.on(
 "value",
 function(snapshot) {
   snapArr = _.toArray(snapshot.val());
   console.log(snapArr);

 },
 function(errorObject) {
   console.log("The read failed: " + errorObject.code);
 }
);

// // var historyLog=database.ref('historyLog/');
function pushFirebase(errorItem) {
 // Code for the push
 database.ref().push({
   errorItem: errorItem
 });


   }


   // function that adds alarms to the alarm history modal
function alarmList(switchNum) {
   var currentDate = moment().format('lll');
   errorItem= currentDate.toUpperCase() + " - User: "+username+" - Fault:"+ $(switchNum).text() + "OUT OF SEQUENCE";
   var errorLi = `<li>${errorItem}</li>`;
   pushFirebase(errorLi);
   errorLog.push(errorLi);

   $("#alarm-list").empty();
   for (var i = 0; i < errorLog.length; i++) {
     $("#alarm-list").append(errorLog[i]);
   }

   }

   $("#fault-history").on("click",function(event){
       event.preventDefault();
       console.log(snapArr.length);
       $("#alarm-list").empty();
       for(x=0;x<snapArr.length;x++)
       {
       $("#alarm-list").append(snapArr[x].errorItem);
     }
     });








$("#reset").on("click", function() {
 database.ref("/").set("reset.json");
 database.ref("/").remove();
 location.reload();
});




//**************************************************************************************************************************** */

// console.log(snapArr.length);
   // for (x = 0; x < snapArr.length; x++) {
   //     if(!allLog.includes(snapArr[x].errorLog))
   //     {
   //   allLog.push(snapArr[x].errorLog);
   // }
   // }
   // // allLog=allLog[allLog.length-1];
   // // .errorLog;
   // // console.log(allLog.length);
   // for (x = 0; x < allLog.length; x++) {
   //   console.log(allLog[x]);
   // }
   // //   console.log(_.toArray(snapshot.val())[0].errorLog);
   //   console.log(snapshot.val());

//Outmoded
// Get a database reference to our posts
// var ref = new Firebase("https://group-project-bridgecontrol.firebaseio.com");

// // historyLog=database.ref('/');
// console.log(historyLog);
// errorLog+=historyLog;
// historyLog.set(errorLog);
// console.log(historyLog);
// testArr=_.toArray(historyLog);
// console.log(testArr);
// database.ref("/").push(historyLog);
// }

// This function will be called anytime new data is added to our database reference, and we don't need to write any extra code to make this happen.
// Attach an asynchronous callback to read the data at our posts reference
// database.on( "value",
//   function(snapshot) {
//     console.log(snapshot.val());
//   },
//   function(errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   }
// );
// // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
// database.ref().on("child_added", function(childSnapshot) {

//   console.log(childSnapshot.val().historyLog);

//   // Handle the errors
// }, function(errorObject) {
//   console.log("Errors handled: " + errorObject.code);
// });

// dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

// });