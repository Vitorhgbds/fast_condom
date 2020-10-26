const corpoTabelaEntregas = document.getElementById('tabelaEntregas')

let entregas = []

entregas = JSON.parse(localStorage.getItem('entregas')) || [new Entrega("lalalaa", findMorador(1),
    findOperator("J. M"), "26/10/2020", "27/10/2020")]

localStorage.setItem('entregas', JSON.stringify(entregas))
globalEntregaId = parseInt(localStorage.getItem('idEntregas') || '1')

tableEntregasMout(entregas)

function addEntrega(data_Saida, descricao, operadorSigla, data_Entrega, moradorId) {
    console.log(data_Entrega);
    console.log(descricao);
    console.log(data_Saida);
    console.log(operadorSigla);
    console.log(moradorId);
    console.log(document.getElementById('dropDownOperadores'))
    let entrega = new Entrega(descricao, findMorador(moradorId),
        findOperator(operadorSigla), data_Saida, data_Entrega)
    entregas.push(entrega)

    localStorage.setItem('entregas', JSON.stringify(entregas))
    localStorage.setItem('idEntregas', globalEntregaId)
    addLineWith(entrega)
}

function tableEntregasMout(entregas) {
    entregas.forEach(ent => {
        addLineWith(ent)
    })
}

function deleteEntregaFromList(entrega) {
    entregas = entregas.filter(ent => ent.id !== entrega.id)
    localStorage.setItem('entregas', JSON.stringify(entregas))
}

function deleteEntrega(entregaLine, entrega) {
    deleteEntregaFromList(entrega)
    corpoTabelaEntregas.removeChild(entregaLine)
}

function addLineWith(entrega) {
    var novaLinha = document.createElement("tr")
    var novaColunaId = document.createElement("td")
    var novaColunaData = document.createElement("td")
    var novaColunaDescricao = document.createElement("td")
    var novaColunaNroAp = document.createElement("td")
    var novaColunaOperador = document.createElement("td")
    var novaColunaRetirada = document.createElement("td")
    var novaColunaMorador = document.createElement("td")
    var novaColunaDelete = document.createElement("td")
    var buttonDelete = document.createElement("button")
    var centralizando = document.createElement("center");

    buttonDelete.style = "padding-left:10%; padding-right:10%;"
    buttonDelete.innerText = "delete"
    buttonDelete.className = "button"
    buttonDelete.addEventListener("click", () => deleteEntrega(novaLinha, morador))


    novaColunaId.innerText = entrega.id
    novaColunaData.innerText = entrega.data_Saida
    novaColunaDescricao.innerText = entrega.descricao
    novaColunaNroAp.innerText = entrega.morador.nroAp
    novaColunaOperador.innerText = entrega.operador.sigla
    novaColunaRetirada.innerText = entrega.data_Entrega
    novaColunaMorador.innerText = entrega.morador.nome
    novaColunaDelete


    centralizando.append(buttonDelete)
    novaColunaDelete.append(centralizando)

    novaLinha.append(novaColunaId)
    novaLinha.append(novaColunaData)
    novaLinha.append(novaColunaDescricao)
    novaLinha.append(novaColunaNroAp)
    novaLinha.append(novaColunaOperador)
    novaLinha.append(novaColunaRetirada)
    novaLinha.append(novaColunaMorador)


    corpoTabelaEntregas.append(novaLinha)
}


///////////// COISAS DO POP-UP COMEÇA AQUI CUIDADO 
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}