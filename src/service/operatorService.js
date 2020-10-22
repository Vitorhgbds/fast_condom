const divDaTabelaOperadores = document.getElementById('tabelaDosOperadores')
const tableOperators = document.createElement("table")
divDaTabelaOperadores.append(tableOperators)
const tableHead = document.createElement("thead")
const tableRowHead = document.createElement("tr")
const tituloColuna0 = document.createElement("th")
const tituloColuna1 = document.createElement("th")
const tituloColuna2 = document.createElement("th")
const tableBody = document.createElement("tbody")
const tableRowBody = document.createElement("tr")

tableHead.append(tableRowHead)
tituloColuna0.innerText = "id"
tituloColuna1.innerText = "nome"
tituloColuna2.innerText = "delete"
tableRowHead.append(tituloColuna0)
tableRowHead.append(tituloColuna1)
tableRowHead.append(tituloColuna2)
tableBody.append(tableRowBody)
tableOperators.append(tableHead)
tableOperators.append(tableBody)


let operators = [
    new Operator(0,"vitor"), new Operator(1,"eduarda")
]

var count = 2

tableOperatorsMout(operators)

function addOperator(nome){
    let operator = new Operator(count,nome)
    Array.of(this.operators).push(operator)
    var novaLinha = document.createElement("tr")
    var novaColunaId = document.createElement("td")
    var novaColunaNome = document.createElement("td")
    var novaColunaDelete = document.createElement("td")
    var buttonDelete = document.createElement("button")
    buttonDelete.innerText = "[X]"
    buttonDelete.addEventListener("click", () => deleteOperator(novaLinha, operator))

    novaColunaId.innerText = operator.getId()
    novaColunaNome.innerText = operator.getName()
    novaColunaDelete.append(buttonDelete)

    novaLinha.append(novaColunaId)
    novaLinha.append(novaColunaNome)
    novaLinha.append(novaColunaDelete)

    tableBody.append(novaLinha)
    count++;
}

function tableOperatorsMout(operators){
    Array.of(operators).forEach(ope => {
        var novaLinha = document.createElement("tr")
        var novaColunaId = document.createElement("td")
        var novaColunaNome = document.createElement("td")
        var novaColunaDelete = document.createElement("td")
        var buttonDelete = document.createElement("button")
        buttonDelete.innerText = "[X]"
        buttonDelete.addEventListener("click", () => deleteOperator(novaLinha, ope))

        novaColunaId.innerText = ope.id
        novaColunaNome.innerText = ope.nome
        novaColunaDelete.append(buttonDelete)

        novaLinha.append(novaColunaId)
        novaLinha.append(novaColunaNome)
        novaLinha.append(novaColunaDelete)

        tableBody.append(novaLinha)
    })
}

function deleteOperatorFromList(operator){
    Array.of(this.operators).filter(ope => ope.id === operator.id).pop()
    count--;
}

function deleteOperator(operatorLine, operator){
    deleteOperatorFromList(operator)
    tableBody.removeChild(operatorLine)
}