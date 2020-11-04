const corpoTabelaOperadores = document.getElementById('tabelaOperadores')

let operators = []

operators = JSON.parse(localStorage.getItem('operadores')) 
                        || [new Operator("Vitor Hugo"), new Operator("Julia Makowski"),
                            new Operator("Lucas Bankow")]

globalOperatorId = parseInt(localStorage.getItem('idOperadores') || '3')

if(corpoTabelaOperadores){
    tableOperatorsMout(operators)
}

function addOperator(nome) {
    let operator = new Operator(nome)
    operators.push(operator)
    addLineWith(operator)



    // Put the object into storage
    if(!localStorage.getItem('operators')){
        localStorage.setItem('operators', JSON.stringify(operators)); 
    }else {
        var operatorsJSON = localStorage.getItem('operators') 
        operators = operators.push.apply(JSON.parse(operatorsJSON));
    }   

    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('operators'); 
    console.log('retrievedObject: ', JSON.parse(retrievedObject)); 
}

function tableOperatorsMout(operators) {
    
    if(localStorage.getItem('operators')){
        console.log(localStorage.getItem('operators'));
        var operatorsJSON = localStorage.getItem('operators');
        operators = JSON.parse(operatorsJSON);
    } else{
        operators = [new Operator("Vitor Hugo"), new Operator("Mathias Kauf"), new Operator("Julia Mako")]
    }
    operators.forEach(ope => {
        addLineWith(ope)
    })
}

function loadOperators(){
    var corpoDropDown = document.getElementById('dropDownOperadores')  
    operators.forEach(ope => {
        var novaLinha = document.getElementById(ope.sigla)
        if(novaLinha){
            corpoDropDown.removeChild(novaLinha)
        }
    })
    
    operators.forEach(ope => {
        var novaLinha = document.createElement('option')
        novaLinha.value = ope.sigla
        novaLinha.innerText = ope.nome
        novaLinha.id = ope.sigla
        corpoDropDown.append(novaLinha)
    })
}

function findOperator(sigla){
    return operators.find(ope => ope.sigla === sigla)
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

    console.log("Operator: ",operator);
    novaColunaId.innerText = operator.id
    novaColunaNome.innerText = operator.nome
    //novaColunaSigla.innerText = operator.getIniciais();

    centralizando.append(buttonDelete)
    novaColunaDelete.append(centralizando)

    novaLinha.append(novaColunaId)
    novaLinha.append(novaColunaNome)
    novaLinha.append(novaColunaSigla)
    novaLinha.append(novaColunaDelete)

    corpoTabelaOperadores.append(novaLinha)
}
