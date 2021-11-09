function addcesta(idbotao) {
    if (typeof itenssalvos === "undefined") {
        itenssalvos = []
        carrinho = []
    }
    var car = document.getElementById("carrinho")
    var idhtml = idbotao.replace("btn", "iten")
    var itencar = document.getElementById(idhtml)
    var id = parseInt(document.getElementById(idbotao).value)
    var listagem = document.getElementById("listagem")
    listagem.innerHTML = ""
    itenssalvos.push(itencar)
    carrinho.push({
        id: id,
        Nome: itencar
    })
    car.innerHTML = carrinho.length

    for (var x = 0; x < itenssalvos.length; x++) {
        var test = document.createElement("p")
        test.innerHTML += carrinho[x].Nome.children[1].textContent
        listagem.appendChild(test)
    }
    alert(`Item adicionado!`)
}
const newLocal = $('.carousel').carousel()