$(document).ready(function() {
checkOpeningSequence();

});

var getAttrDataState=".attr('data-state')";

//triggered by opening sequence 
function runOpeningSequence(){
    //ran in sequence
    //for each button
    //how to check data-state of button
    //if data-state is open
    //all others must be closed
    
//console log data state


if(
    $switch1.getAttrDataState==="closed"&&
    $switch2.getAttrDataState==="closed"&&
    $switch3.getAttrDataState==="closed"&&
    $switch4.getAttrDataState==="closed"&&
    $switch5.getAttrDataState==="closed"
    )
    {
        $switch1.attr("data-state","open");
    }

    if(
        $switch1.getAttrDataState==="open"&&
        $switch2.getAttrDataState==="closed"&&
        $switch3.getAttrDataState==="closed"&&
        $switch4.getAttrDataState==="closed"&&
        $switch5.getAttrDataState==="closed"
        )
        {
            $switch2.attr("data-state","open");
        }

        if(
            $switch1.getAttrDataState==="open"&&
            $switch2.getAttrDataState==="open"&&
            $switch3.getAttrDataState==="closed"&&
            $switch4.getAttrDataState==="closed"&&
            $switch5.getAttrDataState==="closed"
            )
            {
                $switch3.attr("data-state","open");
            }
            if(
                $switch1.getAttrDataState==="open"&&
                $switch2.getAttrDataState==="open"&&
                $switch3.getAttrDataState==="open"&&
                $switch4.getAttrDataState==="closed"&&
                $switch5.getAttrDataState==="closed"
                )
                {
                    $switch4.attr("data-state","open");
                }
                if(
                    $switch1.getAttrDataState==="open"&&
                    $switch2.getAttrDataState==="open"&&
                    $switch3.getAttrDataState==="open"&&
                    $switch4.getAttrDataState==="open"&&
                    $switch5.getAttrDataState==="closed"
                    )
                    {
                        $switch5.attr("data-state","open");
                    }

if($switch5.getAttrDataState==="transition-open")
{
    playOpen();
}


}

// function checkFailureConditions(){
// var switchArr  =[$switch1,$switch2,$switch3,$switch4,$swich5];


// for (x=0;x<switchArr.length;x++)
// {
//     if(switchArr[x].getAttrDataState)
// }

// }



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