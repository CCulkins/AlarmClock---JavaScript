var Alarm = require('./../js/alarmclock.js').Alarm;

var dateTime = null, date = null;

var update = function () {
  date = moment(new Date());
  dateTime.html(date.format('LTS'));
};

$(document).ready(function(){
  dateTime = $('#time');
    $("#alarmform").submit(function(event){
      event.preventDefault();

      var hours = $("#hours").val();
      var minutes = $("#minutes").val();

      var newAlarm = new Alarm(hours, minutes);

      $("ul#empty").append(hours + ":" + minutes);
    });

    update();
    setInterval(update, 1000);
});
