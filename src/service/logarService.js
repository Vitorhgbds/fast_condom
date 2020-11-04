const corpoTabelaOperadoresLogar = document.getElementById('tabelaOperadoresLogar')

let operadores = [];
operators = JSON.parse(localStorage.getItem('operadores')) 
                        || [new Operator("Vitor Hugo"), new Operator("Julia Makowski"),
                            new Operator("Lucas Bankow")]

globalOperatorId = parseInt(localStorage.getItem('idOperadores') || '3')

moradores = JSON.parse(localStorage.getItem('moradores')) 
                        || [new Morador("Josh Pereira","1112223331","B32"),
                            new Morador("Sergio Alcantra","1112223332","A123"),
                            new Morador("Julia Almeida","1112223333","C41")]

localStorage.setItem('moradores',JSON.stringify(moradores))
globalMoradorId = parseInt(localStorage.getItem('idMoradores') || '3')

if(corpoTabelaOperadoresLogar){
    tableOperatorsMout(operators)
}

function tableOperatorsMout(operators) {
    operators.forEach(ope => {
        addLineWith(ope)
    })
}

function tableRedirect(operador) {
    operador = operador
    localStorage.setItem('loginOperador',JSON.stringify(operador))
    location.href = "operadores.html"
}

function addLineWith(operator) {
    var novaLinha = document.createElement("tr")
    var novaColunaId = document.createElement("td")
    var novaColunaNome = document.createElement("td")
    var novaColunaSigla = document.createElement("td")
    var novaColunaEntrar = document.createElement("td")
    var buttonEntrar = document.createElement("button")
    var centralizando = document.createElement("center");

    buttonEntrar.style = "padding-left:10%; padding-right:10%;"
    buttonEntrar.innerText = "Entrar"
    buttonEntrar.className = "button"
    buttonEntrar.addEventListener("click", () => tableRedirect(operator))

    novaColunaId.innerText = operator.id
    novaColunaNome.innerText = operator.nome
    novaColunaSigla.innerText = operator.sigla

    centralizando.append(buttonEntrar)
    novaColunaEntrar.append(centralizando)

    novaLinha.append(novaColunaId)
    novaLinha.append(novaColunaNome)
    novaLinha.append(novaColunaSigla)
    novaLinha.append(novaColunaEntrar)

    corpoTabelaOperadoresLogar.append(novaLinha)
}