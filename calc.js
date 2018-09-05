'use strict'
var $ = require('jquery')
window.Bootstrap = require('bootstrap')

let formula = document.querySelector('#formula')
let res = document.querySelector('#tempA')
if (formula != null) {
  formula.addEventListener('input', () => {
    if (formula.value !="") {   
      var python = require("python-shell")
      var path = require("path")
      var options = {
        scriptPath : path.join(__dirname, "py/"),
        args : [formula.value]
      }
      var calc = new python.PythonShell("calc.py", options);
    
      calc.on('message', function(message) {
        res.textContent = message;
        bkg(parseFloat(message))
      })
    }
      
    })
  }
formula.dispatchEvent(new Event('input'))

function bkg(num) {
  if (num <= 25 && num > 0) {
    document.getElementById("top").style.backgroundColor = "#0081AF"
  } else if (num > 25 && num < 50) {
    document.getElementById("top").style.backgroundColor = "#3AB795";
  } else if (num > 50 && num < 75) {
    document.getElementById("top").style.backgroundColor = "#A0E8AF"; 
  } else if (num > 75 && num < 100) {
    document.getElementById("top").style.backgroundColor = "#86BAA1";
  } else if (num > 100 && num < 125) {
    document.getElementById("top").style.backgroundColor = "#FABC3C";
  } else if (num > 125 && num < 150) {
    document.getElementById("top").style.backgroundColor = "#FFB238";
  } else if (num > 150 && num < 175) {
    document.getElementById("top").style.backgroundColor = "#F19143";
  } else if (num > 175 && num < 200) {
    document.getElementById("top").style.backgroundColor = "#FF773D";
  } else if (num > 200) {
    document.getElementById("top").style.backgroundColor = "#F55536";
  } else if (num > -25 && num < 0) {
    document.getElementById("top").style.backgroundColor = "#B07C9E";
  } else if (num > -50 && num < -25) {
    document.getElementById("top").style.backgroundColor = "#A755C2";
  } else if (num > -75 && num < -50) {
    document.getElementById("top").style.backgroundColor = "#6622CC";
  } else if (num > -100 && num < -75) {
    document.getElementById("top").style.backgroundColor = "#CE6D8B";
  } else if (num > -125 && num < -100) {
    document.getElementById("top").style.backgroundColor = "#CE2D4F";
  } else if (num > -150 && num < -125) {
    document.getElementById("top").style.backgroundColor = "#FCB9B2";
  } else if (num > -175 && num < -150) {
    document.getElementById("top").style.backgroundColor = "#8C2F39";
  } else if (num > -175 && num < -200) {
    document.getElementById("top").style.backgroundColor = "#461220";
  } else if (num <= -200) {
    document.getElementById("top").style.backgroundColor = "#0D090A";
  } 
}
