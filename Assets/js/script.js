$(function () {
  today = dayjs(new Date).format('dddd, MMMM D');
  currentTime = dayjs(new Date).format('H')
$("#currentDay").text(today);

});
