const corpoTabelaOperadores = document.getElementById('tabelaOperadores')

let operators = [
    new Operator("Vitor Hugo"), new Operator("Mathias Kauf"), new Operator("Julia Mako")
]

tableOperatorsMout(operators)

function addOperator(nome) {
    let operator = new Operator(nome)
    operators.push(operator)
    addLineWith(operator)
}

function tableOperatorsMout(operators) {
    operators.forEach(ope => {
        addLineWith(ope)
    })
}

function deleteOperatorFromList(operator) {
    operators = operators.filter(ope => ope.id !== operator.id)
}

function deleteOperator(operatorLine, operator) {
    deleteOperatorFromList(operator)
    corpoTabelaOperadores.removeChild(operatorLine)
}

function addLineWith(operator){
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

    novaColunaId.innerText = operator.id
    novaColunaNome.innerText = operator.nome
    novaColunaSigla.innerText = operator.getIniciais();

    centralizando.append(buttonDelete)
    novaColunaDelete.append(centralizando)

    novaLinha.append(novaColunaId)
    novaLinha.append(novaColunaNome)
    novaLinha.append(novaColunaSigla)
    novaLinha.append(novaColunaDelete)

    corpoTabelaOperadores.append(novaLinha)
}
