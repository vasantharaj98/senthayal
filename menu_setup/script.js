$(document).ready(function() {
    $("#header").load("header.html");
    });

$(document).ready(function() {
    $("#footer").load("footer.html");
});



document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        document.getElementById('navbar_top').classList.add('fix');

        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        document.getElementById('navbar_top').classList.remove('fix');
        // remove padding top from body
        document.body.style.paddingTop = '0';
      }
    });
  });

  const drawer_open = () => {
    document.getElementById("drawer").classList.add('drawer_open');
    document.getElementById("drawer1").classList.remove('drawer_open1');
  }
  const drawer_open1 = () => {
    document.getElementById("drawer1").classList.add('drawer_open1');
    document.getElementById("drawer").classList.remove('drawer_open');
  }
  const drawer_close = () => {
    document.getElementById("drawer").classList.remove('drawer_open');
  }
  const drawer_close1 = () => {
    document.getElementById("drawer1").classList.remove('drawer_open1');
  }
  const location_open = () => {
    document.getElementById("location_drawer").classList.remove('drawer');
    document.getElementById("location_drawer").classList.add('loc_drawer_open');
  }
  const location_close = () => {
    document.getElementById("location_drawer").classList.remove('loc_drawer_open');
    document.getElementById("location_drawer").classList.add('drawer');
  }