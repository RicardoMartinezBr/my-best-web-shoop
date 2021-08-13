// const toggle = document.querySelector('.toggle')
// const toggleTwo = document.querySelector('.accordion__arrow-down')
// const content = document.querySelector('.accordion__content-wrapper')

// toggle.addEventListener('click', () => {
//     content.classList.toggle('hide');
// })

// document.querySelectorAll('toggleTwo').forEach(item => { 
//     item.addEventListener('click', () => {
//         content.classList.toggle('hide');
//     })
// })

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}