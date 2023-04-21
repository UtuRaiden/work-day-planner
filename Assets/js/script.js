$(function () {
  today = dayjs(new Date).format('dddd, MMMM D');
  currentTime = parseInt(dayjs(new Date).format('H'));
$("#currentDay").text(today);

console.log(currentTime);

var workHours = 9;
var endWork = 18;

console.log(workHours);

while(workHours < endWork){
var wh = workHours;
console.log(wh);

if (workHours === currentTime){
  document.getElementById(wh).classList.add('present')
}

if (workHours < currentTime){
  document.getElementById(wh).classList.add('past')
}

if (workHours > currentTime){
  document.getElementById(wh).classList.add('future')
}

console.log(workHours);

workHours++;
}

$(".saveBtn").on("click", function(){
    var userInput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time,userInput);
})

$('#9 .description').val(localStorage.getItem("9"));
$('#10 .description').val(localStorage.getItem("10"));
$('#11 .description').val(localStorage.getItem("11"));
$('#12 .description').val(localStorage.getItem("12"));
$('#13 .description').val(localStorage.getItem("13"));
$('#14 .description').val(localStorage.getItem("14"));
$('#15 .description').val(localStorage.getItem("15"));
$('#16 .description').val(localStorage.getItem("16"));
$('#17 .description').val(localStorage.getItem("17"));




});


