const arrows = document.querySelectorAll('.arrow');

arrows.forEach((arrow, i) => {
  arrow.addEventListener('click', function() {
    toggleMenu(i);
  });
})

function toggleMenu(i) {
  const lists = document.querySelectorAll('.list-item');
  lists.forEach((list, j) => {
    if(j === i) {
      list.classList.toggle('drop-down');
    }
  })
  
}