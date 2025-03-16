const navLinks = document.querySelector("nav");
const menuButton = document.querySelector("button");
const hero = document.querySelector("#hero1")
const tagAnchor = document.querySelector(".anchorTag")



  menuButton.addEventListener('click', ()=>{
  navLinks.classList.toggle('hidden')
  navLinks.style.display= 'flex'
   navLinks.style.flexDirection = 'column'
  
})



hero.addEventListener('click', ()=>{
  navLinks.classList.add('hidden')
  navLinks.style.display = 'none'
})

tagAnchor.addEventListener('click', ()=>{
  navLinks.classList.add('hidden')
  navLinks.style.display = 'none'
})







// menuButton.addEventListener('click', ()=>{
//   navLinks.classList.remove('hidden')
//   navLinks.style.display= 'none'
//    navLinks.style.flexDirection = 'none'

// })




// function toggleItemAdd() {
 
//   navLinks.style.backgroundColor = "rgba(8, 8, 0, 0.95)";
//   navLinks.style.display = "flex";
//   navLinks.style.marginLeft = '-150px'
//   navLinks.style.minHeight = '500px'
//   navLinks.style.paddingLeft = '40px'
//   navLinks.style.paddingTop = '40px'
//   navLinks.style.flexDirection = "column";
//   navLinks.style.width = "100%";
//   navLinks.classList.toggle("hidden");
//   navLinks.classList.toggle("block");

// }





// menuButton.addEventListener("click", toggleItemAdd);

// menuButton.addEventListener('click', ()=>{
//   navLinks.style.display = 'block'
// })






