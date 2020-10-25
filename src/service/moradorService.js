const corpoTabelaMoradores = document.getElementById('tabelaMoradores')

let moradores = [
    new Morador("vitor", "934824", "A21"), new Morador("Mathias", "94358", "B15"), new Morador("julia", "284748", "A12")
]

tableMoradoresMout(moradores)

function addMorador(nome, rg, numeroAp) {
    let morador = new Morador(nome, rg, numeroAp)
    moradores.push(morador)
    var novaLinha = document.createElement("tr")
    var novaColunaNome = document.createElement("td")
    var novaColunaRg = document.createElement("td")
    var novaColunaAp = document.createElement("td")
    var novaColunaDelete = document.createElement("td")
    var buttonDelete = document.createElement("button")
    var centralizando = document.createElement("center")

    buttonDelete.style = "padding-left:10%; padding-right:10%;"
    buttonDelete.innerText = "delete"
    buttonDelete.className = "button"
    buttonDelete.addEventListener("click", () => deleteMorador(novaLinha, morador))

    novaColunaNome.innerText = morador.getName()
    novaColunaRg.innerText = morador.getRg()
    novaColunaAp.innerText = morador.getNumeroAp()

    centralizando.append(buttonDelete)
    novaColunaDelete.append(centralizando)

    novaLinha.append(novaColunaNome)
    novaLinha.append(novaColunaRg)
    novaLinha.append(novaColunaAp)
    novaLinha.append(novaColunaDelete)

    corpoTabelaMoradores.append(novaLinha)
}

function tableMoradoresMout(moradores) {
    moradores.forEach(mor => {
        var novaLinha = document.createElement("tr")
        var novaColunaNome = document.createElement("td")
        var novaColunaRg = document.createElement("td")
        var novaColunaAp = document.createElement("td")
        var novaColunaDelete = document.createElement("td")
        var buttonDelete = document.createElement("button")
        var centralizando = document.createElement("center")

        buttonDelete.style = "padding-left:10%; padding-right:10%;"
        buttonDelete.innerText = "delete"
        buttonDelete.className = "button"
        buttonDelete.addEventListener("click", () => deleteMorador(novaLinha, mor))

        novaColunaNome.innerText = mor.nome
        novaColunaRg.innerText = mor.rg
        novaColunaAp.innerText = mor.numeroAp

        centralizando.append(buttonDelete)
        novaColunaDelete.append(centralizando)

        novaLinha.append(novaColunaNome)
        novaLinha.append(novaColunaRg)
        novaLinha.append(novaColunaAp)
        novaLinha.append(novaColunaDelete)

        corpoTabelaMoradores.append(novaLinha)
    })
}

function deleteMoradorFromList(morador) {
    moradores = moradores.filter(mor => mor.id !== mor.id)
}

function deleteMorador(moradorLine, morador) {
    deleteMoradorFromList(morador)
    corpoTabelaMoradores.removeChild(moradorLine)
}