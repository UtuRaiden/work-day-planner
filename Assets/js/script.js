$(function () {
  //pulls the current date and the hour in military time
  today = dayjs(new Date).format('dddd, MMMM D');
  currentTime = parseInt(dayjs(new Date).format('H'));
$("#currentDay").text(today);

console.log(currentTime);
//defines variables
var workHours = 9;
var endWork = 18;

console.log(workHours);
//goes through each hour and checks what state it is in and gives it the corresponding class
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
//saves user input to local storage
$(".saveBtn").on("click", function(){
    var userInput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time,userInput);
})
//recalls the local storage to the correct location
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


