//untuk hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik di luar hamburger
// window.addEventListener("click", function (e) {
//   if (e.target != hamburger && e.target != navMenu) {
//     hamburger.classList.remove("hamburger-active");
//     navMenu.classList.add("hidden");
//   }
// });

//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  // mengambil posisi header terhadap ujung atas halaman
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

//darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  // Jika dicentang (checked), tambahkan class 'dark', jika tidak, hapus class 'dark'
  // darkToggle.checked
  //   ? html.classList.add("dark")
  //   : html.classList.remove("dark");
  if (darkToggle.checked) {
    html.classList.add("dark");
    // tambahkan local storange juga
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

//pindahkan posisi toggle sesuai theme di local storange
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // ketika di local storange dipilih dark mode, checknya akan true (sebelah kanan)
  darkToggle.checked = true;
} else {
  // dan kebalikannya
  darkToggle.checked = false;
}
