var input = document.getElementByID('health-no');
var welcome = document.getElementByID('welcome-wrap');
var transition = document.createElement('@-webkit-keyframes')

var doctor_pin = document.getElementByID('doc-pin');

window.onload = function() {
  doctor_pin.style.display = 'none';
};

input.addEventListener('keyup', function() {
  if (event.keyCode === 13) {
    welcome.style.display = 'none';
  }
});
