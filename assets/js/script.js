// Ensure that the document is ready before running the code.
$(document).ready(function() {

// Listener for the save button beside each time block.
$(".btn").click(function (event) {
  event.preventDefault();  

// Look at any siblings of this button's parent element that have a class of description.
// Take their value, if any, and put that in a variable called input.
var input = $(this).siblings(".description").val();
console.log(input)
  
// Look at the parent of this button, take its ID, and then split everything from the dash backwards. So hour-09 returns 09.
var time = $(this).parent().attr("id").split("-")[1];
console.log(time)

// Log to local storage the time as the key name and the user's input as the value.
localStorage.setItem(time, input);
})

// When loading the page, pull data, if any, from these keys, to display what was saved on the page.

$("#hour-09 .description").val(localStorage.getItem("09"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));


// Display the current date for the header.
var currentDate = dayjs().format("MMMM D, YYYY");
var showDate = document.getElementById("currentDay");
  console.log(currentDate)
showDate.innerHTML = currentDate;

// Records the current time (just the hour).
var currentTime = dayjs().format("HH");
console.log(currentTime)

// FOR GRADER: I had to move this section because, based on these comments, the order put
// this code before the current time was determined, so it wasn't working. So either
// that's a problem with the homework and I caught something to help you, or maybe there's
// another way to make all of this work in the order that was given. I'll have to ask.

$(".time-block").each(function () {

// Look at each time block and, like earlier, split everything from the dash backwards for the timeBlock variable.
  var timeBlock = $(this).attr("id").split("-")[1];
    console.log(timeBlock)
    console.log(currentTime)

// Compare the current time to the number of each time block.
// Depending on if it's equal, less than or greater, a class will be added to that time block
// so that the color changes to indicate past, present, or future.

    if (currentTime == timeBlock) {
      $(this).addClass("present");
    } else if (currentTime < timeBlock) {      
      $(this).addClass("future");
    } else if (currentTime > timeBlock) {         
      $(this).addClass("past");
    }
})

// This was an additional button I wanted to add so that local storage could be cleared out
// so that it would be easy to start over if desired.

$(".reset").click(function() {  
  localStorage.clear()
  location.reload()
})

// This was another button that I wanted to add so that it would save all fields.

$(".save").click(function(){    
  var log09 = document.getElementById("text09").value
  if (log09 !== "") {
    localStorage.setItem("09", log09)
  }
  var log10 = document.getElementById("text10").value
  if (log10 !== "") {
    localStorage.setItem("10", log10)
  }
  var log11 = document.getElementById("text11").value
  if (log11 !== "") {
    localStorage.setItem("11", log11)
  }
  var log12 = document.getElementById("text12").value
  if (log12 !== "") {
    localStorage.setItem("12", log12)
  }
  var log13 = document.getElementById("text13").value
  if (log13 !== "") {
    localStorage.setItem("13", log13)
  }
  var log14 = document.getElementById("text14").value
  if (log14 !== "") {
    localStorage.setItem("14", log14)
  }
  var log15 = document.getElementById("text15").value
  if (log15 !== "") {
    localStorage.setItem("15", log15)
  }
  var log16 = document.getElementById("text16").value
  if (log16 !== "") {
    localStorage.setItem("16", log16)
  }
  var log17 = document.getElementById("text17").value
  if (log17 !== "") {
    localStorage.setItem("17", log17)
  }  
  new Alert({container: ".notify", type: "success", message: "Saved", close: false, duration: 1})  
})

})