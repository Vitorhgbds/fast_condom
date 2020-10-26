const corpoTabelaEntregas = document.getElementById('tabelaEntregas')

let entregas = [
    new Entrega("lalalaa", new Morador("Vitor","1112223332","A123"), new Operator ("Joao Pedro"), "26/10/2020", "27/10/2020")
]

tableEntregasMout(entregas)

function addEntrega(descricao, morador, operador,data_Saida, data_Entrega) {
    
        let entrega = new Entrega(descricao, morador, operador,data_Saida, data_Entrega)
        entregas.push(entrega)
        addLineWith(entrega)
}

function tableEntregasMout(entregas) {
    entregas.forEach(ent => {
        addLineWith(ent)
    })
}

function deleteEntregaFromList(entrega) {
    entregas = entregas.filter(ent => ent.id !== entrega.id)
}

function deleteEntrega(entregaLine, entrega) {
    deleteEntregaFromList(entrega)
    corpoTabelaEntregas.removeChild(entregaLine)
}

function addLineWith(entrega){
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
    novaColunaOperador.innerText = entrega.operador.getIniciais()
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