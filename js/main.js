$(document).ready(function () {

  // jQuery goes here
  //$('html').addClass('js');

});

document.addEventListener('DOMContentLoaded', function () {
  // All JS that needs to fire after the DOM has loaded goes here
});

// nav toggle
document.querySelector('.js-nav-toggle').addEventListener('click', function () {

  if (document.body.getAttribute('data-nav-open') === 'yes') {
    document.body.setAttribute('data-nav-open', 'no');
  } else {
    document.body.setAttribute('data-nav-open', 'yes');
  }

});
