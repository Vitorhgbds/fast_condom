const corpoTabelaEntregas = document.getElementById('tabelaEntregas')

let entregas = [
    new Entrega("25/10/2020","15:45","Submarino", "B32", "VH"), new Entrega("26/10/2020","17:45","ShopTime", "B40", "JM"), new Entrega("26/10/2020","08:11","Amazon", "B31", "VH")
]

tableEntregasMout(entregas)

function addEntregas(data,hora,descricao,nroAp, operador) {
    let entrega = new Entrega(data,hora,descricao,nroAp, operador)
    entregas.push(entrega)
    addLineWith(entrega)
}

function tableEntregasMout(entregas) {
    entregas.forEach(mor => {
        addLineWith(mor)
    })
}

function deleteEntregasFromList(entrega) {
    entregas = entrega.filter(mor => mor.id !== mor.id)
}

function deleteEntrega(entregaLine, entrega) {
    deleteEntregaFromList(entrega)
    corpoTabelaEntregas.removeChild(entregaLine)
}

function addLineWith(entrega){
    var novaLinha = document.createElement("tr")
    var novaColunaData = document.createElement("td")
    var novaColunaHora = document.createElement("td")
    var novaColunaDescricao = document.createElement("td")
    var novaColunaNroAp = document.createElement("td")
    var novaColunaOperador = document.createElement("td")
    var novaColunaDelete = document.createElement("td")
    var buttonDelete = document.createElement("button")
    var centralizando = document.createElement("center");

    buttonDelete.style = "padding-left:10%; padding-right:10%;"
    buttonDelete.innerText = "delete"
    buttonDelete.className = "button"
    buttonDelete.addEventListener("click", () => deleteEntrega(novaLinha, entrega))

    novaColunaData.innerText = entrega.data
    novaColunaHora.innerText = entrega.hora
    novaColunaDescricao.innerText = entrega.descricao
    novaColunaNroAp.innerText = entrega.nroAp
    novaColunaOperador.innerText = entrega.operador

    centralizando.append(buttonDelete)
    novaColunaDelete.append(centralizando)

    novaLinha.append(novaColunaData)
    novaLinha.append(novaColunaHora)
    novaLinha.append(novaColunaDescricao)
    novaLinha.append(novaColunaNroAp)
    novaLinha.append(novaColunaOperador)
    novaLinha.append(novaColunaDelete)

    corpoTabelaEntregas.append(novaLinha)
}