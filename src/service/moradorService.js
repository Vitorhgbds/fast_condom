const corpoTabelaMoradores = document.getElementById('tabelaMoradores')

let moradores = [
    new Morador("vitor"), new Morador("Mathias"), new Morador("julia")
]

tableMoradoresMout(moradores)

function addMorador(nome) {
    let morador = new Morador(nome)
    moradores.push(morador)
    var novaLinha = document.createElement("tr")
    var novaColunaId = document.createElement("td")
    var novaColunaNome = document.createElement("td")
    var novaColunaSigla = document.createElement("td")
    var novaColunaDelete = document.createElement("td")
    var buttonDelete = document.createElement("button")
    var centralizando = document.createElement("center");

    buttonDelete.style = "padding-left:10%; padding-right:10%;"
    buttonDelete.innerText = "delete"
    buttonDelete.className = "button"
    buttonDelete.addEventListener("click", () => deleteMorador(novaLinha, morador))

    novaColunaId.innerText = morador.getId()
    novaColunaNome.innerText = morador.getName()
    novaColunaSigla.innerText = morador.getIniciais()

    centralizando.append(buttonDelete)
    novaColunaDelete.append(centralizando)

    novaLinha.append(novaColunaId)
    novaLinha.append(novaColunaNome)
    novaLinha.append(novaColunaSigla)
    novaLinha.append(novaColunaDelete)

    corpoTabelaMoradores.append(novaLinha)
}

function tableMoradoresMout(moradores) {
    moradores.forEach(mor => {
        var novaLinha = document.createElement("tr")
        var novaColunaId = document.createElement("td")
        var novaColunaNome = document.createElement("td")
        var novaColunaSigla = document.createElement("td")
        var novaColunaDelete = document.createElement("td")
        var buttonDelete = document.createElement("button")
        var centralizando = document.createElement("center");

        buttonDelete.style = "padding-left:10%; padding-right:10%;"
        buttonDelete.innerText = "delete"
        buttonDelete.className = "button"
        buttonDelete.addEventListener("click", () => deleteMorador(novaLinha, mor))

        novaColunaId.innerText = mor.id
        novaColunaNome.innerText = mor.nome
        novaColunaSigla.innerText = mor.sigla

        centralizando.append(buttonDelete)
        novaColunaDelete.append(centralizando)

        novaLinha.append(novaColunaId)
        novaLinha.append(novaColunaNome)
        novaLinha.append(novaColunaSigla)
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