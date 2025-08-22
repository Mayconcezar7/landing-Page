const produtosInformacao = [

    { imagem: "../imgProdutos/cafe.jpeg", alt: "bebida cafe", nome: "Café", descricao: "Clássico global, pode ser puro, expresso, coado, cappuccino ou latte.", tamanho: "250ml", preco: 7.90, tipo: "Bebidas Quentes" },
    { imagem: "../imgProdutos/cha.jpeg", alt: "bebida Chá", nome: "Chá", descricao: "Popular em inúmeras culturas, com variedades como preto, verde, camomila e chai.", tamanho: "250ml", preco: 6.90, tipo: "Bebidas Quentes" },
    { imagem: "../imgProdutos/Cappuccino.jpeg", alt: "bebida Cappuccino", nome: "Cappuccino", descricao: "Combinação italiana de café expresso, leite vaporizado e espuma de leite.", tamanho: "250ml", preco: 17.90, tipo: "Bebidas Quentes" },
    { imagem: "../imgProdutos/Chocolate-quente.jpeg", alt: "bebida Chocolate Quente", nome: "Chocolate Quente", descricao: "Feito com leite e cacau, muito apreciado no inverno.", tamanho: "300ml", preco: 10.90, tipo: "Bebidas Quentes" },



    { imagem: "../imgProdutos/suco-de-laranja.jpg", alt: "Suco de laranja gelado", nome: "Suco de laranja gelado", descricao: "Suco natural de laranja, refrescante e nutritivo.", tamanho: "500ml", preco: 23.90, tipo: "Bebidas Geladas" },
    { imagem: "../imgProdutos/Iced coffee.jpeg", alt: "Iced coffee", nome: "Iced coffee", descricao: "Café servido com gelo, pode levar leite ou açúcar.", tamanho: "250ml", preco: 25.90, tipo: "Bebidas Geladas" },
    { imagem: "../imgProdutos/Milk-shake-morango.png", alt: "Milk-shake Morango", nome: "Milk-shake Morango", descricao: "Bebida cremosa de sorvete batido com leite e Morango.", tamanho: "700ml", preco: 18.90, tipo: "Bebidas Geladas" },

]

const menuOptions = document.querySelectorAll(".item")
const backgroundBlack = document.querySelector("#menu-options")
const produtos = document.querySelector(".container-produtos")
const produtionsBtnFechar = document.querySelector(".produtions-btn-fechar")
const paragrafoItem = document.querySelector(".paragrafo-item")
const containerProdutos = document.querySelector(".container-produtos")

const iconCarrinho = document.querySelector(".btn-carrinho-compras")
const iconCarrinhoBackground = document.querySelector("#backgroudCarrinho")
const fecharCarrinho = document.querySelector(".btn-fechar-carrinho")
const itensCarrinhoAdd = document.querySelector(".itens-carrinho")
const precoTotal = document.querySelector("#span-valor-total")
const fundoFinalizarPedido = document.querySelector("#background-finalizar-pedido")
const btnFecharFinalizarPagamento = document.querySelector("#btn-fechar-finalizar-pagamento")


const btnFinalizarPedido = document.querySelector("#btn-finalizar-pedido")

let itensCarrinho = []







// Mostrar itens menu
const showItens = (paragrafo) => {
    produtos.innerHTML = ""

    paragrafoItem.innerHTML = paragrafo



    const filtros = produtosInformacao.filter(itens => itens.tipo == paragrafo)

    filtros.forEach((produtosItem) => {

        let divItens = document.createElement("div")
        divItens.classList.add("produtos-item")


        divItens.innerHTML = `
                            <img src="${produtosItem.imagem}" alt="">
                            <div class="container-descricao-item">
                                <p class="descricao-item"> <strong class="nome-produto">${produtosItem.nome}</strong> <br> <br> ${produtosItem.descricao} <br><strong>${produtosItem.tamanho}</strong></p>
                                <p class="preco-item"> <strong>${produtosItem.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong></p>
                            </div>
                            <button class="btn-add-carrinho" data-nome="${produtosItem.nome}" data-tamanho="${produtosItem.tamanho}" data-preco="${produtosItem.preco}" > <i class="fa fa-cart-plus"></i></button>
        `

        produtos.appendChild(divItens)

    })


}


//Pegar itens add ao carrinho 

const mostrarCarrinho = (nome, tamanho, preco) => {
    const verificacaoDoItensCarrinho = itensCarrinho.find(itens => itens.nome == nome)

    if (verificacaoDoItensCarrinho) {
        verificacaoDoItensCarrinho.quantidade += 1

    } else {

        itensCarrinho.push({
            nome,
            tamanho,
            preco,
            quantidade: 1
        })

    }




    atualizandoCarrinho()
}

//mostrar os itens carrinhos 
const atualizandoCarrinho = () => {
    let total = 0

    itensCarrinhoAdd.innerHTML = ""

    itensCarrinho.forEach((produtosCarrinho) => {

        let itensDoCarrinho = document.createElement("div")

        itensDoCarrinho.classList.add("produtos-carrinho")


        itensDoCarrinho.innerHTML = `
                        <h3 class="nome"> ${produtosCarrinho.nome}</h3>
                        <p class="tamanho">${produtosCarrinho.tamanho}</p>
                        <p class="preco">${produtosCarrinho.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                        <p class="quantidade">Qta: ${produtosCarrinho.quantidade}</p>
                        
                        <button class="remover-item-carrinho" data-nome="${produtosCarrinho.nome}">Remover</button>
        `

        total += produtosCarrinho.preco * produtosCarrinho.quantidade

        itensCarrinhoAdd.appendChild(itensDoCarrinho)


    })

    precoTotal.style.color = "green"

    precoTotal.innerHTML = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


    if (itensCarrinho.length > 0) {
        btnFinalizarPedido.style.display = "flex"

    } else {

        btnFinalizarPedido.style.display = "none"
    }

}



//remover itens do carrinho
const removerItemCarrinho = (nome) => {

    const index = itensCarrinho.findIndex(item => item.nome == nome)


    if (index !== -1) {

        const item = itensCarrinho[index]

        if (item.quantidade > 1) {

            item.quantidade -= 1
            atualizandoCarrinho()

        } else {

            itensCarrinho.splice(item, 1)
            atualizandoCarrinho()
        }

    } Toastify({
        text: "Item Removido",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#ff0e0eff",
        },
    }).showToast();

}



//aparecer menu
menuOptions.forEach(btnMenu => {

    btnMenu.addEventListener("click", (e) => {

        backgroundBlack.style.display = "flex";



        let categoria = e.target.closest(".item")

        if (categoria) {
            let paragrafo = categoria.getAttribute("data-item")



            showItens(paragrafo);

        }
    })

})


produtionsBtnFechar.addEventListener("click", () => {
    backgroundBlack.style.display = "none"
})


backgroundBlack.addEventListener("click", (e) => {
    if (e.target === backgroundBlack) {
        backgroundBlack.style.display = "none"
    }
})



//pegar dados para o carrinho
containerProdutos.addEventListener("click", (e) => {

    let parente = e.target.closest(".btn-add-carrinho")

    if (parente) {

        let nome = parente.getAttribute("data-nome")
        let tamanho = parente.getAttribute("data-tamanho")
        let preco = parseFloat(parente.getAttribute("data-preco"))


        mostrarCarrinho(nome, tamanho, preco)


        Toastify({
            text: "Item Adicionado",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#4fa726ff",
            },
        }).showToast();


    }

})




//fechar/abrir carrinho de compras 

iconCarrinho.addEventListener("click", () => {

    iconCarrinhoBackground.style.display = "flex"

    atualizandoCarrinho()

})


iconCarrinhoBackground.addEventListener("click", (e) => {

    if (e.target == iconCarrinhoBackground) {

        iconCarrinhoBackground.style.display = "none"

    }

})


fecharCarrinho.addEventListener("click", () => {
    iconCarrinhoBackground.style.display = "none"
})



itensCarrinhoAdd.addEventListener("click", (e) => {



    if (e.target.classList.contains("remover-item-carrinho")) {

        let nome = e.target.getAttribute("data-nome")

        removerItemCarrinho(nome);



    }

})

btnFinalizarPedido.addEventListener("click", (e) => {

    e.preventDefault()

    fundoFinalizarPedido.style.display = "flex"


})


fundoFinalizarPedido.addEventListener("click", (e)=>{

    if (e.target == fundoFinalizarPedido) {
        fundoFinalizarPedido.style.display = "none"
    }
})

btnFecharFinalizarPagamento.addEventListener("click", () => {

    

    fundoFinalizarPedido.style.display = "none"


})


