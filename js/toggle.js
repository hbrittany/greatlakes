// Get a reference to the top nav using its class
var navTop = document.querySelector('.nav-top');

// Wait for the user to click on the nav button
document.querySelector('.nav-btn').addEventListener('click', function (e) {
  // Javascript passes an event object for event listeners
  // It's being captured in the `e` argument above

  // Since .nav-btn is a link, by default it navigate somewhere
  // `e.preventDefault()` will stop the link from doing what it normally does
  e.preventDefault();

  // Will toggle @data-state on .nav-top and .nav-btn
  // @data-state is being used in CSS to style what the nav elements will look like
  if (navTop.getAttribute('data-state') == 'expanded') {
    navTop.setAttribute('data-state', 'collapsed');
    this.setAttribute('data-state', 'inactive');
  } else {
    navTop.setAttribute('data-state', 'expanded');
    this.setAttribute('data-state', 'active');
  }
});