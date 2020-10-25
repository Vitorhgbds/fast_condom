const corpoTabelaOperadores = document.getElementById('tabelaOperadores')

let operators = [
    new Operator("vitor"), new Operator("Mathias"), new Operator("julia")
]

tableOperatorsMout(operators)

function addOperator(nome) {
    let operator = new Operator(nome)
    operators.push(operator)
    var novaLinha = document.createElement("tr")
    var novaColunaId = document.createElement("td")
    var novaColunaNome = document.createElement("td")
    var novaColunaSigla = document.createElement("td")
    var novaColunaDelete = document.createElement("td")
    var buttonDelete = document.createElement("button")
    var centralizando = document.createElement("center");
    buttonDelete.style = " padding-left:10%; padding-right:10%;"
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

function tableOperatorsMout(operators) {
    operators.forEach(ope => {
        var novaLinha = document.createElement("tr")
        var novaColunaId = document.createElement("td")
        var novaColunaNome = document.createElement("td")
        var novaColunaSigla = document.createElement("td")
        var novaColunaDelete = document.createElement("td")
        var buttonDelete = document.createElement("button")
        var centralizando = document.createElement("center");
        buttonDelete.style = " padding-left:10%; padding-right:10%;"
        buttonDelete.innerText = "delete"
        buttonDelete.className = "button"
        buttonDelete.addEventListener("click", () => deleteOperator(novaLinha, ope))

        novaColunaId.innerText = ope.id
        novaColunaNome.innerText = ope.nome
        novaColunaSigla.innerText = ope.sigla

        centralizando.append(buttonDelete)
        novaColunaDelete.append(centralizando)

        novaLinha.append(novaColunaId)
        novaLinha.append(novaColunaNome)
        novaLinha.append(novaColunaSigla)
        novaLinha.append(novaColunaDelete)

        corpoTabelaOperadores.append(novaLinha)
    })
}

function deleteOperatorFromList(operator) {
    operators = operators.filter(ope => ope.id !== operator.id)
}

function deleteOperator(operatorLine, operator) {
    deleteOperatorFromList(operator)
    corpoTabelaOperadores.removeChild(operatorLine)
}