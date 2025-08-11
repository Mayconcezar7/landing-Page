const menuOptions =  document.querySelectorAll(".item")

const backgroundBlack = document.querySelector("#menu-options")


menuOptions.forEach(btnMenu =>{

    //fundo desfocado

    btnMenu.addEventListener("click",() =>{

        backgroundBlack.style.display = "flex"
        
          
    })


    backgroundBlack.addEventListener("click",(e) =>{

        const listItens = document.querySelector("#produtos")

        

        if(e.target=== backgroundBlack){
            
            
            backgroundBlack.style.display= "none"

        }
          
    })




})