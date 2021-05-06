/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function dropdownFunction1() {
  document.getElementById("filterVegetable").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.filter_1')) {
    var dropdowns1 = document.getElementsByClassName("filterVeg-content");
    var i;
    for (i = 0; i < dropdowns1.length; i++) {
      var openDropdown1 = dropdowns1[i];
      if (openDropdown1.classList.contains('show')) {
        openDropdown1.classList.remove('show');
      }
    }
  }
}

function dropdownFunction2() {
  document.getElementById("filterMonth").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.filter_2')) {
    var dropdowns2 = document.getElementsByClassName("filterMon-content");
    var i;
    for (i = 0; i < dropdowns2.length; i++) {
      var openDropdown2 = dropdowns2[i];
      if (openDropdown2.classList.contains('show')) {
        openDropdown2.classList.remove('show');
      }
    }
  }
} 