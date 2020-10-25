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
    buttonDelete.addEventListener("click", () => deleteOperator(novaLinha, operator))

    novaColunaId.innerText = operator.getId()
    novaColunaNome.innerText = operator.getName()
    novaColunaSigla.innerText = operator.getIniciais()

    centralizando.append(buttonDelete)
    novaColunaDelete.append(centralizando)

    novaLinha.append(novaColunaId)
    novaLinha.append(novaColunaNome)
    novaLinha.append(novaColunaSigla)
    novaLinha.append(novaColunaDelete)

    corpoTabelaOperadores.append(novaLinha)
}

function tableMoradoresMout(moradores) {
    moradores.forEach(ope => {
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
        buttonDelete.addEventListener("click", () => deleteMorador(novaLinha, ope))

        novaColunaId.innerText = ope.id
        novaColunaNome.innerText = ope.nome
        novaColunaSigla.innerText = ope.sigla

        centralizando.append(buttonDelete)
        novaColunaDelete.append(centralizando)

        novaLinha.append(novaColunaId)
        novaLinha.append(novaColunaNome)
        novaLinha.append(novaColunaSigla)
        novaLinha.append(novaColunaDelete)

        corpoTabelaMoradores.append(novaLinha)
    })
}

function deleteMoradorFromList(operator) {
    moradores = moradores.filter(mor => mor.id !== mor.id)
}

function deleteMorador(moradorLine, morador) {
    deleteMoradorFromList(operator)
    corpoTabelaMoradores.removeChild(operatorLine)
}