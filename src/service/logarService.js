const corpoTabelaOperadoresLogar = document.getElementById('tabelaOperadoresLogar')

let operadores = [];


operadores = JSON.parse(localStorage.getItem('operadores')) 
                        || [new Operator("Vitor Hugo"), new Operator("Julia Makowski"),
                            new Operator("Lucas Bankow")]

globalOperatorId = parseInt(localStorage.getItem('idOperadores') || '2')

    localStorage.setItem('operadores', JSON.stringify(operadores)) 
    localStorage.setItem('idOperadores', globalOperatorId)

tableOperatorsMout(operadores)

function tableOperatorsMout(operators) {
    operators.forEach(ope => {
        addLineWith(ope)
    })
}

function tableRedirect(sigla) {
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
    buttonEntrar.addEventListener("click", () => tableRedirect())

    novaColunaId.innerText = operator.id
    novaColunaNome.innerText = operator.nome
    novaColunaSigla.innerText = operator.getIniciais();

    centralizando.append(buttonEntrar)
    novaColunaEntrar.append(centralizando)

    novaLinha.append(novaColunaId)
    novaLinha.append(novaColunaNome)
    novaLinha.append(novaColunaSigla)
    novaLinha.append(novaColunaEntrar)

    corpoTabelaOperadoresLogar.append(novaLinha)
}