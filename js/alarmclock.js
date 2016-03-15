function Alarm(hours, minutes) {
  this.hours = hours;
  this.minutes = minutes;
}

Alarm.prototype.fullAlarm = function(){
  return (this.hours + ":" + this.minutes);
};

exports.Alarm = Alarm;
