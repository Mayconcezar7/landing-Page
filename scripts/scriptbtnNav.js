const btnFechar = document.querySelector(".btn-fechar")
const btnAbrir = document.querySelector(".btn-open")
const navUl= document.querySelector(".nav-ul-1")
const overlay = document.querySelector(".overlay-menu")
const links = document.querySelectorAll(".links")



links.forEach(btn =>{

    btn.addEventListener("click",()=>{
        navUl.classList.remove("open")
        overlay.style.display = "none"
    })
})


overlay.addEventListener("click", (e)=>{

    if(e.target === overlay){
        navUl.classList.remove("open")
        overlay.style.display = "none"
    }
})


btnAbrir.addEventListener("click", () => {

    navUl.classList.add("open")

    
    overlay.style.display = "flex"
})


btnFechar.addEventListener("click", () => {

    navUl.classList.remove("open")
    
    overlay.style.display = "none"
    
})