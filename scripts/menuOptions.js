const menuOptions =  document.querySelectorAll(".item")
const backgroundBlack = document.querySelector("#menu-options")
const produtos  = document.querySelector(".lista-de-item")
const produtionsBtnFechar =  document.querySelector(".produtions-btn-fechar")








const showItens = (paragrafo)=>{

   
    produtos.innerHTML =""



    let h2 = document.createElement("h2")


    h2.innerHTML = paragrafo


    produtos.appendChild(h2)

    

}













menuOptions.forEach(btnMenu =>{
   
    btnMenu.addEventListener("click",(e) =>{
        
        backgroundBlack.style.display = "flex";  
        
        

        let categoria = e.target.closest(".item")

        if(categoria){
            let paragrafo = categoria.getAttribute("data-item")


            showItens(paragrafo);
            
        }
    })
 
})


produtionsBtnFechar.addEventListener("click",() =>{
        backgroundBlack.style.display = "none"       
})


backgroundBlack.addEventListener("click",(e) =>{
        if(e.target=== backgroundBlack){   
            backgroundBlack.style.display= "none"
        }
})
