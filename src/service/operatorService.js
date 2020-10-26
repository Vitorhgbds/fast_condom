const corpoTabelaOperadores = document.getElementById('tabelaOperadores')

let operadores = [];


operadores = JSON.parse(localStorage.getItem('operadores')) 
                        || [new Operator("Vitor Hugo"), new Operator("Julia Makowski"),
                            new Operator("Lucas Bankow")]

globalOperatorId = parseInt(localStorage.getItem('idOperadores') || '2')

localStorage.setItem('operadores', JSON.stringify(operadores)) 
localStorage.setItem('idOperadores', globalOperatorId)

tableOperatorsMout(operadores)

function addOperator(nome) {
    let operator = new Operator(nome)
    operadores.push(operator)
    addLineWith(operator)

    localStorage.setItem('operadores', JSON.stringify(operadores)) 
    localStorage.setItem('idOperadores', globalOperatorId)

    var retrievedObject = localStorage.getItem('operadores'); 
    console.log('retrievedObject: ', JSON.parse(retrievedObject)); 
}

function tableOperatorsMout(operators) {
    operators.forEach(ope => {
        addLineWith(ope)
    })
}

function deleteOperatorFromList(operator) {
    operators = operators.filter(ope => ope.id !== operator.id)
    localStorage.setItem('operadores', JSON.stringify(operators))
}

function deleteOperator(operatorLine, operator) {
    deleteOperatorFromList(operator)
    corpoTabelaOperadores.removeChild(operatorLine)
}

function findOperator(id){
    return operadores.find(ope => ope.id === parseInt(id))
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

    console.log("Operator: ",operator);
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
