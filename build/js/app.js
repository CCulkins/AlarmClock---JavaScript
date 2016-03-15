(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alarm(hours, minutes) {
  this.hours = hours;
  this.minutes = minutes;
}

Alarm.prototype.fullAlarm = function(){
  return (this.hours + ":" + this.minutes);
};

exports.Alarm = Alarm;

},{}],2:[function(require,module,exports){
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

},{"./../js/alarmclock.js":1}]},{},[2]);
