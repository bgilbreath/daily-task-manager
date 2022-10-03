//Current day header via Moment
var currentDay = moment();
$("#currentDay").text(currentDay.format("[Today is ]dddd, MMMM Do YYYY.[ The current time is ]h:mm:ss a."));

//Functionality for adding tasks to list
$( document ).ready(()=>{
    $( "#addButtonNine" ).on( "click",()=>{
        $("#nineamList").append("<li>" + $("#nineamText").val() + "</li>");
        nineamText.value = "";
    });
});

$( document ).ready(()=>{
    $( "#addButtonTen" ).on( "click",()=>{
        $("#tenamList").append("<li>" + $("#tenamText").val() + "</li>");
        tenamText.value = "";
    });
});

$( document ).ready(()=>{
    $( "#addButtonEleven" ).on( "click",()=>{
        $("#elevenamList").append("<li>" + $("#elevenamText").val() + "</li>");
        elevenamText.value = "";
    });
});

$( document ).ready(()=>{
    $( "#addButtonNoon" ).on( "click",()=>{
        $("#noonList").append("<li>" + $("#noonText").val() + "</li>");
        noonText.value = "";
    });
});

$( document ).ready(()=>{
    $( "#addButtonOne" ).on( "click",()=>{
        $("#onepmList").append("<li>" + $("#onepmText").val() + "</li>");
        onepmText.value = "";
    });
});

$( document ).ready(()=>{
    $( "#addButtonTwo" ).on( "click",()=>{
        $("#twopmList").append("<li>" + $("#twopmText").val() + "</li>");
        twopmText.value = "";
    });
});

$( document ).ready(()=>{
    $( "#addButtonThree" ).on( "click",()=>{
        $("#threepmList").append("<li>" + $("#threepmText").val() + "</li>");
        threepmText.value = "";
    });
});

$( document ).ready(()=>{
    $( "#addButtonFour" ).on( "click",()=>{
        $("#fourpmList").append("<li>" + $("#fourpmText").val() + "</li>");
        fourpmText.value = "";
    });
});

$( document ).ready(()=>{
    $( "#addButtonFive" ).on( "click",()=>{
        $("#fivepmList").append("<li>" + $("#fivepmText").val() + "</li>");
        fivepmText.value = "";
    });
});
//Resets input on submit
$("#nineamText")[0].reset();

//Change textarea background color based on time
var checkTime = function () {

    //Get Current time
    var currentTime = moment().format('H');

    //get all elements with class "taskarea"
    var timeBlockElements = $("#nineam");

    //loop through taskarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {

        //Get element i's ID as a string
        var elementID = timeBlockElements[i].id;

        //get element by ID
        var manipID = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }
}

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);