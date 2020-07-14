/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */
/*
Original code
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);
*/

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#f0134d',
    lineColor: '#f0134d'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/