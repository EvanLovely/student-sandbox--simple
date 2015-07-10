// We can't do anything with JavaScript until all of the HTML is loaded, so we listen for the event "DOMContentLoaded" to fire, then we can kick off the rest of our JavaScript inside the `function`.
document.addEventListener('DOMContentLoaded', function () {

  // nav toggle
  document.querySelector('.js-nav-toggle').addEventListener('click', function () {

    if (document.body.getAttribute('data-nav-open') === 'yes') {
      document.body.setAttribute('data-nav-open', 'no');
    } else {
      document.body.setAttribute('data-nav-open', 'yes');
    }

  });

});
