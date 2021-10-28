function addcesta(idbotao) {
    if (typeof itenssalvos === "undefined") {
        itenssalvos = []
        carrinho = []
    }

    var idhtml = idbotao.replace("btn", "iten")
    var itencar = document.getElementById(idhtml)
    var id = parseInt(document.getElementById(idbotao).value)
    var listagem = document.getElementById("listagem")
    itenssalvos.push(itencar)
    carrinho.push({
            id: id,
            Nome: itencar
        })
        //console.log(itenssalvos[0].children[1].textContent)
    for (var x = 0; x < itenssalvos.length; x++) {
        var test = document.createElement("p")
        test.innerHTML += carrinho[x].Nome.children[1].textContent
        listagem.appendChild(test)
    }

}