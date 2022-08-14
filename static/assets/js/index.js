//FOR OPEN AND CLOSE NAVBAR 
let navOpen = document.querySelector(".icon-resp")
let list = document.querySelector(".list-nav-resp")
navOpen.addEventListener('click', () => {
  console.log(navOpen.children)
  navOpen.children[0].classList.toggle("hidden")
  navOpen.children[1].classList.toggle("hidden")
  list.classList.toggle("list-nav-resp-open")
})
  //////////////

let LinkNavbar = document.querySelectorAll(".list-nav-resp li a");
for (i = 0; i < LinkNavbar.length; i++){
  LinkNavbar[i].addEventListener("click", () => {
    navOpen.children[0].classList.toggle("hidden")
    navOpen.children[1].classList.toggle("hidden")
    list.classList.toggle("list-nav-resp-open")
  })
}

function NavbarResponsive() {
  navOpen.children[0].classList.toggle("hidden")
  navOpen.children[1].classList.toggle("hidden")
  list.classList.toggle("list-nav-resp-open")
}