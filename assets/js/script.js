document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      // You can adjust the value as needed
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

// logic respondsive

const btnRes = document.querySelector('.nav-btn-responsive');
const menu = document.querySelector('.navbar-collapse');

btnRes.addEventListener('click', () => {
  menu.classList.toggle('active');
  btnRes.classList.toggle('cross');
});

// AOS
AOS.init({
  disable: function () {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  },
  duration: 1200,
  easing: 'ease-in-out', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom',
});

document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');
  const firstNavItem = navItems[0];
  const underline = document.querySelector('.underline');

  // Inisialisasi underline di bawah elemen pertama saat halaman dimuat
  underline.style.width = `${firstNavItem.offsetWidth}px`;
  underline.style.transform = `translateX(${firstNavItem.offsetLeft}px)`;
});

function changeTab(item) {
  const underline = document.querySelector('.underline');
  const navItems = document.querySelectorAll('.nav-item');

  underline.style.width = `${item.offsetWidth}px`;
  underline.style.transform = `translateX(${item.offsetLeft}px)`;

  navItems.forEach((navItem) => navItem.classList.remove('active'));
  item.classList.add('active');
}
