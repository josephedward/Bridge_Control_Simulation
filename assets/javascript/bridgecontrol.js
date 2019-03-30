$(document).ready(function() {
});
    // runOpeningSequence();

    // checkFailureConditions();
   
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

var database=firebase.database();


function pushFirebase(errorLog){
database.ref().set({
    username:username,
    errorLog:errorLog,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
});
}


var historicErrorLogFBase;

database.ref().on("value",function(fireLog){
historicErrorLogFBase=fireLog.val().errorLog;
});

$("#fault-history").on("click",function(){
    $("#alarm-list").empty();

    for (var i = 0; i < historicErrorLogFBase.length; i++) {
    var errorLi = `<li>User: ${username} Error: ${historicErrorLogFBase[i]} </li>`;
    // console.log(errorLog[i]);
    ;
    $("#alarm-list").append(errorLi);
    }
});

$("#reset").on("click", function(){

    database.ref('/').set("reset.json");
    location.reload();

});



$("#operate-button").on("click", function(){
console.log("opening");
    runOpeningSequence();
});




//triggered by opening sequence 
 //ran in sequence
    //for each button
    //how to check data-state of button
    //if data-state is open
    //all others must be closed    
//console log data state
function runOpeningSequence(){ 
   setTimeout(function(){runS1();
    setTimeout(function(){runS2();
        setTimeout(function(){runS3();
            setTimeout(function(){runS4();
                setTimeout(function(){runS5();
                    setTimeout(function(){finishTransition();
                    },2000);
                },2000); 
            },2000);
        },2000);
    },2000);
},2000); 
  

 } 

    function runS1(){
          //if statement to prevent out of sequence operation
  if ($switch2.attr("data-state") === "closed") {
    $switch1.toggleClass("released");
    if (
      $switch1.text().trim() === "SPAN LOCKS DRIVEN" &&
      $switch1.attr("data-state") === "closed"
    ) {
        //data state flip, text update
      $switch1.text("SPAN LOCKS PULLED");
      $switch1.attr("data-state", "open");
    } else {

        //data state flip, text update
      $switch1.text("SPAN LOCKS DRIVEN");
      $switch1.attr("data-state", "closed");
    }
    }
}
    function runS2(){
        if (
            $switch1.attr("data-state") === "open" &&
            $switch3.attr("data-state") === "closed"
          ) {
            $switch2.toggleClass("released");
            if (
              $switch2.text().trim() === "TAIL LOCKS DRIVEN" &&
              $switch2.attr("data-state") === "closed"
            ) {
              $switch2.text("TAIL LOCKS PULLED");
              $switch2.attr("data-state", "open");
            } else {
              $switch2.text("TAIL LOCKS DRIVEN");
              $switch2.attr("data-state", "closed");
            }
          } else {
            var currentDate = moment().format('lll');
            errorLog.push( currentDate.toUpperCase() + " -  " + $(this).text() + " OUT OF SEQUENCE");
            console.log(errorLog);
            pushFirebase(errorLog);
            $("#alarm-list").empty();
            alarmList();
          }

    }
    function runS3(){
        if (
            $switch2.attr("data-state") === "open" &&
            $switch4.attr("data-state") === "closed"
          ) {
            $switch3.toggleClass("released");
            if (
              $switch3.text().trim() === "MOTOR BRAKES SET" &&
              $switch3.attr("data-state") === "closed"
            ) {
              $switch3.text("MOTOR BRAKES RELEASED");
              $switch3.attr("data-state", "open");
            } else {
              $switch3.text("MOTOR BRAKES SET");
              $switch3.attr("data-state", "closed");
            }
          } else {
            var currentDate = moment().format('lll');
            errorLog.push( currentDate.toUpperCase() + " -  " + $(this).text() + " OUT OF SEQUENCE");
            console.log(errorLog);
            $("#alarm-list").empty();
            alarmList();
          }

    }
    function runS4(){
        if (
            $switch3.attr("data-state") === "open" &&
            $switch5.attr("data-state") === "closed" &&
            transition === false
          ) {
            $switch4.toggleClass("released");
            if (
              $switch4.text().trim() === "MACHINERY BRAKES SET" &&
              $switch4.attr("data-state") === "closed"
            ) {
              $switch4.text("MACHINERY BRAKES RELEASED");
              $switch4.attr("data-state", "open");
            } else {
              $switch4.text("MACHINERY BRAKES SET");
              $switch4.attr("data-state", "closed");
            }
          } else {
            var currentDate = moment().format('lll');
            errorLog.push( currentDate.toUpperCase() + " -  " + $(this).text() + " OUT OF SEQUENCE");
            console.log(errorLog);
            pushFirebase(errorLog);
            $("#alarm-list").empty();
            alarmList();
          }
        

    }
    function runS5(){


        if ($switch4.attr("data-state") === "open") {
            if (
              $switch5.text().trim() === "BRIDGE CLOSED" ||
              $switch5.text().trim() === "BRIDGE OPEN"
            ) {
              $switch5.text("BRIDGE MOVING");
              $switch5.toggleClass("released");
              $switch5.toggleClass("transition");
              transition = true;
              
            } else if (
              $switch5.text().trim() === "BRIDGE MOVING" &&
              $switch5.attr("data-state") === "closed"
            ) {
              $switch5.attr("data-state", "open");
              $switch5.text("BRIDGE OPEN");
            transition = false;
              $switch5.toggleClass("transition");
            } else if (
              $switch5.text().trim() === "BRIDGE MOVING" &&
              $switch5.attr("data-state") === "open"
            ) {
              $switch5.attr("data-state", "closed");
              $switch5.text("BRIDGE CLOSED");
              $switch5.toggleClass("transition");
              transition = false;
            }
          } else {
            var currentDate = moment().format('lll');
            errorLog.push( currentDate.toUpperCase() + " -  " + $(this).text() + " OUT OF SEQUENCE");
            console.log(errorLog);
            pushFirebase(errorLog);
            $("#alarm-list").empty();
            alarmList();
          }

          

    }
    function finishTransition(){
        $switch5.attr("data-state", "open");
        $switch5.text("BRIDGE OPEN");
      transition = false;
        $switch5.toggleClass("transition");
    }

//     console.log($switch1.attr('data-state'));
// if(
//     ($switch1.attr('data-state')==="closed")&&
//     ($switch2.attr('data-state')==="closed")&&
//     ($switch3.attr('data-state')==="closed")&&
//     ($switch4.attr('data-state')==="closed")&&
//     ($switch5.attr('data-state')==="closed")
//     )
//     {
//         console.log("Opening Switch 1");
//      setInterval(function(){ $switch1.toggleClass("released");},2000);  
//     }

//     if(
//         $switch1.attr('data-state')==="open"&&
//         $switch2.attr('data-state')==="closed"&&
//         $switch3.attr('data-state')==="closed"&&
//         $switch4.attr('data-state')==="closed"&&
//         $switch5.attr('data-state')==="closed"
//         )
//         {
//             console.log("Opening Switch 2");
//             setInterval(function(){ $switch2.toggleClass("released");},2000);       }

//         if(
//             $switch1.attr('data-state')==="open"&&
//             $switch2.attr('data-state')==="open"&&
//             $switch3.attr('data-state')==="closed"&&
//             $switch4.attr('data-state')==="closed"&&
//             $switch5.attr('data-state')==="closed"
//             )
//             {
//                 console.log("Opening Switch 3");
//                 setInterval(function(){ $switch3.toggleClass("released");},2000);            
//             }
//             if(
//                 $switch1.attr('data-state')==="open"&&
//                 $switch2.attr('data-state')==="open"&&
//                 $switch3.attr('data-state')==="open"&&
//                 $switch4.attr('data-state')==="closed"&&
//                 $switch5.attr('data-state')==="closed"
//                 )
//                 {
//                     console.log("Opening Switch 4");
//                     setInterval(function(){ $switch4.toggleClass("released");},2000);
//                 }
//                 if(
//                     $switch1.attr('data-state')==="open"&&
//                     $switch2.attr('data-state')==="open"&&
//                     $switch3.attr('data-state')==="open"&&
//                     $switch4.attr('data-state')==="open"&&
//                     $switch5.attr('data-state')==="closed"
//                     )
//                     {
//                         console.log("Opening Switch 5");
//                         setInterval(function(){ $switch5.toggleClass("released");},2000);
//                     }

// if($switch5.attr('data-state')==="transition-open")
// {
//     playOpen();
// }




function checkFailureConditions(){
    $switch1.attr("data-state","open");
    $switch5.attr("data-state","open");
    var switchArr  =[$switch1,$switch2,$switch3,$switch4,$swich5];
for (x=0;x<switchArr.length;x++)
{
    if((switchArr[x].getAttrDataState==="open")&&(switchArr[x-1].getAttrDataState==="closed"))
    {
     bridgeExplodes();   
    }
}

}

function bridgeExplodes()
{
    console.log("bridge explodes");
    $("#canvas").empty();
    $("#canvas").append("<iframe src='https://giphy.com/embed/12KiGLydHEdak8' width='616px' height='304px' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>");
    //wait some time then put canvas back
    setTimeout(function(){$("#canvas").append("<canvas></canvas>");}, 3000);
}


//algorithm success

/* click handler to watch for open button clicked

if the data-state of switch-1, switch-2, switch-3 switch-4 and switch-5 are
set to closed, change switch-1 data-state to open

if data-state of switch-1 is open && switch-2 is closed && switch-3 is closed
&& switch-4 is closed && switch 5 is closed; change switch-2 to open

if data-state of switch-1 is open && switch-2 is open && switch-3 is closed &&
switch-4 is closed && switch-5 is closed; change switch-3 to open

if data-state of switch-1 is open && switch-2 is open && switch-3 is open &&
switch-4 is closed && switch-5 is closed; change switch-4 to open

if data-state of switch-1 is open && switch-2 is open && switch-3 is open &&
switch-4 is closed && switch-5 is closed; change switch-4 to open;

if data-state of switch-1 is open && switch-2 is open && switch-3 is open &&
switch-4 is open && switch-5 is closed; change switch-5 to transition

if switch-5 data-state="transition" .play()


else if {


if switch-1 data-state="open" && switch-2 data-state="closed" && switch-3 data-state="open"
add error "Operation out of sequence" to alarm list (prompt bridge explosion photo in canvas????)

stack if statements inside of else if where any situation that mimics the scenario above
returns the error and resets all data states to closed.

*/