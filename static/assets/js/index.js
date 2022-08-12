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