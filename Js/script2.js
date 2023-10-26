// alert("selamat datang..");
// var lagi = true;

// while (lagi === true) {
//   var nama = prompt("masukkan nama");
//   alert("Halo " + nama);

//   lagi = confirm("coba lagi?");
// }

// alert("terimakasih..");

// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburgermenu diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

{
  /* <button
  type="button"
  onclick="document.getElementById('about).style.display='block'"
>
  Click Me!
</button>; */
}

// function toggleParagraph() {
//   const sejarahParagraph = document.getElementById("sejarah-paragraph");
//   if (
//     sejarahParagraph.style.display === "block" ||
//     sejarahParagraph.style.display === ""
//   ) {
//     sejarahParagraph.style.display = "none"; // Sembunyikan paragraf jika sedang tampil
//   } else {
//     sejarahParagraph.style.display = "block"; // Tampilkan paragraf jika sedang tersembunyi
//   }
// }
