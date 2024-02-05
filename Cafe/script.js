function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-dark-grey";
  }
  document.getElementById("myLink").click();
  
  window.onscroll = function() {
    var aboutContainer = document.querySelector('.fixed-text-container');
    var menuSection = document.getElementById('menu');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > aboutContainer.offsetTop && scrollPosition < menuSection.offsetTop) {
      aboutContainer.classList.add('fixed');
    } else {
      aboutContainer.classList.remove('fixed');
    }
  };