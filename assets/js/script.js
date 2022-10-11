//Current day header via Moment
var currentDay = moment();
$("#currentDay").text(currentDay.format("[Today is ]dddd, MMMM Do YYYY.[ The current time is ]h:mm:ss a."));
var nineAmBlock = document.querySelector("#block9am")
var tenAmBlock = document.querySelector("#block10am")
var elevenAmBlock = document.querySelector("#block11am")
var noonBlock = document.querySelector("#blockNoon")
var onePmBlock = document.querySelector("#block1pm")
var twoPmBlock = document.querySelector("#block2pm")
var threePmBlock = document.querySelector("#block3pm")
var fourPmBlock = document.querySelector("#block4pm")
var fivePmBlock = document.querySelector("#block5pm")

var nineamText = $("#nineAmText")
var toDo = $(nineamText.value)

hours=[9, 10, 11, 12, 13, 14, 15, 16, 17]
var container = document.querySelector(".container")


for (let index= 0; index < hours.length; index++){
    var outerDiv = document.createElement("div")
    outerDiv.classList.add("row","timeblock")
    
};


if (currentDay.format("HH") == 9) {
    nineAmBlock.classList.add("present");
    } else if (currentDay.format("HH") > 9) {
            nineAmBlock.classList.add("past")
        }
      else if (currentDay.format("HH") < 9){
            nineAmBlock.classList.add("future")
        }

        if (currentDay.format("HH") == 10) {
            tenAmBlock.classList.add("present");
            } else if (currentDay.format("HH") > 10) {
                    tenAmBlock.classList.add("past")
                }
              else if (currentDay.format("HH") < 10){
                    tenAmBlock.classList.add("future")
                }
                if (currentDay.format("HH") == 11) {
                    elevenAmBlock.classList.add("present");
                    } else if (currentDay.format("HH") > 11) {
                            elevenAmBlock.classList.add("past")
                        }
                      else if (currentDay.format("HH") < 11){
                            elevenAmBlock.classList.add("future")
                        }
                        
        if (currentDay.format("HH") == 12) {
            noonBlock.classList.add("present");
            } else if (currentDay.format("HH") > 12) {
                    noonBlock.classList.add("past")
                }
              else if (currentDay.format("HH") < 12){
                    noonBlock.classList.add("future")
                }
                if (currentDay.format("HH") == 13) {
                    onePmBlock.classList.add("present");
                    } else if (currentDay.format("HH") > 13) {
                            onePmBlock.classList.add("past")
                        }
                      else if (currentDay.format("HH") < 13){
                            onePmBlock.classList.add("future")
                        }
                        if (currentDay.format("HH") == 14) {
                            twoPmBlock.classList.add("present");
                            } else if (currentDay.format("HH") > 14) {
                                    twoPmBlock.classList.add("past")
                                }
                              else if (currentDay.format("HH") < 14){
                                    twoPmBlock.classList.add("future")
                                }
                                if (currentDay.format("HH") == 15) {
                                    threePmBlock.classList.add("present");
                                    } else if (currentDay.format("HH") > 15) {
                                            threePmBlock.classList.add("past")
                                        }
                                      else if (currentDay.format("HH") < 15){
                                            threePmBlock.classList.add("future")
                                        }
    
                                        if (currentDay.format("HH") == 16) {
                                            fourPmBlock.classList.add("present");
                                            } else if (currentDay.format("HH") > 16) {
                                                    fourPmBlock.classList.add("past")
                                                }
                                              else if (currentDay.format("HH") < 16){
                                                    fourPmBlock.classList.add("future")
                                                }
                                                if (currentDay.format("HH") == 17) {
                                                    fivePmBlock.classList.add("present");
                                                    } else if (currentDay.format("HH") > 17) {
                                                            threePmBlock.classList.add("past")
                                                        }
                                                      else if (currentDay.format("HH") < 17){
                                                            fivePmBlock.classList.add("future")
                                                        }
                    