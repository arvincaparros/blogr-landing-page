// Init Target Element
const arrows = document.querySelectorAll('.arrow');
const menuButton = document.querySelector('.hamburger-button');
const closeButton = document.querySelector('.close-button');
const mobileArrows = document.querySelectorAll('.arrow-btn');
const lists = document.querySelectorAll('.list-item');
const links = document.querySelectorAll('.list');

// Loop Target Element
arrows.forEach((arrow, i) => {
  // Click event
  arrow.addEventListener('click', function() {
    // Callback
    toggleMenu(i);
  });
})

// Toggle Event
function toggleMenu(i) {
  // Loop
  lists.forEach((list, j) => {
    if(j === i) {
      list.classList.toggle('drop-down');
    }
  })
}

// Hamburger menu event
menuButton.addEventListener('click', function() {
  document.querySelector('.mobile-navbar').style.right = '0px';
})

// Close menu event
closeButton.addEventListener('click', function() {
  document.querySelector('.mobile-navbar').style.right = '-325px';
})


// Loop Target Element
mobileArrows.forEach((mobileArrow, index) => {
  // Click event
  mobileArrow.addEventListener('click', function() {
    toggleLink(index);
  });
});

// Toggle Event
function toggleLink(index) {
  // Loop
  links.forEach((link, a) => {
    if(a === index) {
      link.classList.toggle('show-ul');
    }
  })
}