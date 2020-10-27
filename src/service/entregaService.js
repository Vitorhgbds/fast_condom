const corpoTabelaEntregas = document.getElementById('tabelaEntregas')
const operadorMenuEntrega = document.getElementById('nomeOperadorAtual')

let entregas = []

let operadorAtualEntrega = JSON.parse(localStorage.getItem('loginOperador'))

operadorMenuEntrega.innerText = operadorAtualEntrega.sigla

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

function searchByDescription(descricao){
    var entregasDescricao = []
    entregas.forEach(ent => {
        if(ent.descricao.includes(descricao)){
            entregasDescricao.push(ent)
        }
    })
    tableEntregasMout(entregasDescricao)
}

function searchByNotEntregue(){
    var notEntregue = []
    entregas.forEach(ent =>{
        if(!ent.data_Entrega){
            notEntregue.push(ent)
        }
    })
    tableEntregasMout(notEntregue)
}

function tableEntregasMout(entregas) {
    entregas.forEach(ent => {
        addLineWith(ent)
    })
}

function searchByData(d1,d2){
    let date1 = d1.split('/')
    date_start = new Date(date1[2], date1[1] - 1, date1[0])
    let date2 = d2.split('/')
    date_end = new Date(date2[2], date2[1] - 1, date2[0])
    var entregasDate = []
        entregas.forEach(ent => {
            let date3 = ent.data_Saida.split('/')
            date = new Date(date3[2], date3[1] - 1, date3[0])
            if(date>=date_start && date_end>=date){
            entregasDate.push(ent)
        }
    })
    tableEntregasMout(entregasDate)
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