const menuOptions =  document.querySelectorAll(".item")
const backgroundBlack = document.querySelector("#menu-options")
const produtionsBtnFechar =  document.querySelector(".produtions-btn-fechar")


menuOptions.forEach(btnMenu =>{

    //fundo desfocado

    btnMenu.addEventListener("click",() =>{

        backgroundBlack.style.display = "flex"
        
          
    })


    produtionsBtnFechar.addEventListener("click",() =>{

        backgroundBlack.style.display = "none"
        
          
    })


    backgroundBlack.addEventListener("click",(e) =>{

        const listItens = document.querySelector("#produtos")

        

        if(e.target=== backgroundBlack){
            
            
            backgroundBlack.style.display= "none"

        }
          
    })




})