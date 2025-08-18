const produtosInformacao = [
    
    {imagem:"../imgProdutos/cafe.jpeg" ,alt:"bebida cafe", nome:"Café" , descricao:"Clássico global, pode ser puro, expresso, coado, cappuccino ou latte." , tamanho:"250ml", preco: 7.90 ,tipo:"Bebidas Quentes"},
    {imagem:"../imgProdutos/cha.jpeg" ,alt:"bebida Chá", nome:"Chá" , descricao:"CPopular em inúmeras culturas, com variedades como preto, verde, camomila e chai." , tamanho:"250ml", preco: 6.90 ,tipo:"Bebidas Quentes"},
    {imagem:"../imgProdutos/Cappuccino.jpeg" ,alt:"bebida Cappuccino", nome:"Cappuccino" , descricao:"Combinação italiana de café expresso, leite vaporizado e espuma de leite." , tamanho:"250ml", preco: 17.90 , tipo:"Bebidas Quentes"},
    {imagem:"../imgProdutos/Chocolate-quente.jpeg" ,alt:"bebida Chocolate Quente", nome:"Chocolate Quente" , descricao:"Feito com leite e cacau, muito apreciado no inverno." , tamanho:"300ml", preco: 10.90 , tipo:"Bebidas Quentes"},
    
    

    {imagem:"../imgProdutos/suco-de-laranja.jpg" ,alt:"Suco de laranja gelado", nome:"Suco de laranja gelado" , descricao:"Suco natural de laranja, refrescante e nutritivo." , tamanho:"500ml", preco: 23.90 ,tipo:"Bebidas Geladas"},
    {imagem:"../imgProdutos/Iced coffee.jpeg" ,alt:"Iced coffee", nome:"Iced coffee" , descricao:"Café servido com gelo, pode levar leite ou açúcar." , tamanho:"250ml", preco: 25.90 ,tipo:"Bebidas Geladas"},
    {imagem:"../imgProdutos/Milk-shake-morango.png" ,alt:"Milk-shake Morango", nome:"Milk-shake Morango" , descricao:"Bebida cremosa de sorvete batido com leite e Morango." , tamanho:"700ml", preco: 18.90 ,tipo:"Bebidas Geladas"},
    
]

const menuOptions =  document.querySelectorAll(".item")
const backgroundBlack = document.querySelector("#menu-options")
const produtos  = document.querySelector(".container-produtos")
const produtionsBtnFechar =  document.querySelector(".produtions-btn-fechar")


const paragrafoItem = document.querySelector(".paragrafo-item")









const showItens = (paragrafo)=>{
    produtos.innerHTML = ""

    paragrafoItem.innerHTML = paragrafo
   

   
    const filtros = produtosInformacao.filter(itens => itens.tipo == paragrafo)

    filtros.forEach((produtosItem) =>{

        let divItens = document.createElement("div")
        divItens.classList.add("produtos-item")


        divItens.innerHTML = `
                            <img src="${produtosItem.imagem}" alt="">
                            <div class="container-descricao-item">
                                <p class="descricao-item"> <strong class="nome-produto">${produtosItem.nome}</strong> <br> <br> ${produtosItem.descricao} <br><strong>${produtosItem.tamanho}</strong></p>
                                <p class="preco-item"> <strong>${produtosItem.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></p>
                            </div>
                            <button class="btn-add-carrinho" data-nome="${produtosItem.nome}" data-tamanho="${produtosItem.tamanho}" data-preco="${produtosItem.preco}" > <i class="fa fa-cart-plus"></i></button>

        
        `

        produtos.appendChild(divItens)

    })

   


    
  

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
