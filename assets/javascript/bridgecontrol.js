
// //for testing
// $(document).ready(function() {
//   // bridgeExplodes();
// });
    // runOpeningSequence();

    // checkFailureConditions();
   

$("#testMode").on("click",function(){
testMode();

});

function testMode(){
$("#login-screen").addClass("hidden");
$("#active").removeClass("hidden");
$("#reset").removeClass("hidden");
}

$("#operate-button").unbind("click").on("click", function(){
    // $(this).toggleClass("released");
console.log("opening");
    runOpeningSequence();
});

function closeSwitches()
{
          //data state flip, text update
          $("#operate-button").css("background-color","rgb(68, 206, 68)");
          $switch1.text("SPAN LOCKS DRIVEN");
          $switch1.attr("data-state", "closed");
          $switch1.css("background-color","rgb(68, 206, 68)");
          
          $switch2.text("TAIL LOCKS DRIVEN");
        $switch2.attr("data-state", "closed");
        $switch2.css("background-color","rgb(68, 206, 68)");
        $switch3.text("MOTOR BRAKES SET");
        $switch3.attr("data-state", "closed");
        $switch3.css("background-color","rgb(68, 206, 68)");
        $switch4.text("MACHINERY BRAKES SET");
        $switch4.attr("data-state", "closed");
        $switch4.css("background-color","rgb(68, 206, 68)");
        $switch5.attr("data-state", "closed");
        $switch5.text("BRIDGE CLOSED");
        // $switch5.toggleClass("transition");
        $switch5.css("background-color","rgb(68, 206, 68)");
        transition = false;
       
}






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

      //   //data state flip, text update
      // $switch1.text("SPAN LOCKS DRIVEN");
      // $switch1.attr("data-state", "closed");
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
            // var currentDate = moment().format('lll');
            // errorLog.push( currentDate.toUpperCase() + " -  " + $(this).text() + " OUT OF SEQUENCE");
            // console.log(errorLog);
            // $("#alarm-list").empty();
            // alarmList();
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
            // var currentDate = moment().format('lll');
            // errorLog.push( currentDate.toUpperCase() + " -  " + $(this).text() + " OUT OF SEQUENCE");
            // console.log(errorLog);
            // $("#alarm-list").empty();
            // alarmList();
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
              $switch4.css("font-size","15px");
              $switch4.attr("data-state", "open");
              
            } else {
              $switch4.text("MACHINERY BRAKES SET");
              $switch4.attr("data-state", "closed");
            }
          } else {
            // var currentDate = moment().format('lll');
            // errorLog.push( currentDate.toUpperCase() + " -  " + $(this).text() + " OUT OF SEQUENCE");
            // console.log(errorLog);
            // $("#alarm-list").empty();
            // alarmList();
          }
        

    }
    function runS5(){


        if ($switch4.attr("data-state") === "open") {
            if (
              $switch5.text().trim() === "BRIDGE CLOSED" ||
              $switch5.text().trim() === "BRIDGE OPEN"
            ) {
              $switch5.text("BRIDGE MOVING");
              animateBridgeOpen();
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
              animateBridgeClose();
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
            // var currentDate = moment().format('lll');
            // errorLog.push( currentDate.toUpperCase() + " -  " + $(this).text() + " OUT OF SEQUENCE");
            // console.log(errorLog);
            // $("#alarm-list").empty();
            // alarmList();
          }

          

    }
    function finishTransition(){
        $switch5.attr("data-state", "open");
        $switch5.text("BRIDGE OPEN");
        transition = false;
        $switch5.toggleClass("transition");
        $switch5.css("background","yellow");
        $("#operate-button").css("background","yellow");
    }


function bridgeExplodes()
{

    var path="http://api.giphy.com/v1/gifs/E1q0A3MWQ98I0?api_key=6aJGcOZM6D5TfU3Ptk0Hkim49Je9DsJv";
    var apiKey   = "6aJGcOZM6D5TfU3Ptk0Hkim49Je9DsJv";


    $.ajax({
      url: path,
      type: 'GET',
    })
    .done(function(response) {
      console.log(response);
    });




    // var opened = window.open("");
    // opened.document.write(`<html><head><title></title></head><img src='${response.images.original.url}'></img><body>test</body></html>`);
        // console.log("bridge explodes");
    // $("#canvas").empty();
    // $("#canvas").append("<iframe src='https://giphy.com/embed/12KiGLydHEdak8' width='616px' height='304px' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>");
    // //wait some time then put canvas back
    // setTimeout(function(){$("#canvas").append("<canvas></canvas>");}, 3000);
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

// // (username, errorLog
// function updateFirebase(){
// //   historicErrorLog.push({
// //     "username":username,
// //     "errorLog":errorLog,
// //     "dateAdded": firebase.database.ServerValue.TIMESTAMP

// //   });

//   database.ref("historicErrorLog/").update({
//     // username:username,
//     errorLog:username +errorLog
//     // dateAdded: firebase.database.ServerValue.TIMESTAMP
//   });
// }

// var historicErrorLog=firebase.database().ref("historicErrorLog/");

// historicErrorLog.orderByKey().on("child_added", function(data) {
//   console.log(data.key.errorLog);
// });

// database.ref().on("value",function(fireLog){
//   // console.log(fireLog.val().historicErrorLog);
//   historicErrorLog=fireLog.val()
//   // .historicErrorLog;
  
//   });
// // .ref("historicErrorLog/");


// $("#fault-history").on("click",function(){
//   console.log(historicErrorLog.length);
//   //   $("#alarm-list").empty();
//   //   historicErrorLog=database.ref().val();
//   //   // .GetValueAsync();

//   //   for (var i = 0; i < historicErrorLog.length; i++) {
//   // console.log(historicErrorLog[i]);
//   //   // var historicLi = `<li> ${historicErrorLogFBase[i]} </li>`;
//   //   // console.log(errorLog[i]);
//     // $("#alarm-list").append(historicErrorLog[i]);
//     // }
// });



