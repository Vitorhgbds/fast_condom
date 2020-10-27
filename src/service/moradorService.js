const corpoTabelaMoradores = document.getElementById('tabelaMoradores')
const operadorMenuMorador = document.getElementById('nomeOperadorAtual')

let moradores = []

let operadorAtualMorador = JSON.parse(localStorage.getItem('loginOperador'))
operadorMenuMorador.innerText = operadorAtualMorador.sigla

moradores = JSON.parse(localStorage.getItem('moradores')) 
                        || [new Morador("Josh Pereira","1112223331","B32"),
                            new Morador("Sergio Alcantra","1112223332","A123"),
                            new Morador("Julia Almeida","1112223333","C41")]

localStorage.setItem('moradores',JSON.stringify(moradores))
globalMoradorId = parseInt(localStorage.getItem('idMoradores') || '3')



tableMoradoresMout(moradores)

function addMorador(nome,RG,nroAp) {
    let morador = new Morador(nome,RG,nroAp)
    moradores.push(morador)

    localStorage.setItem('moradores',JSON.stringify(moradores))
    localStorage.setItem('idMoradores',globalMoradorId)
    addLineWith(morador)
}

function tableMoradoresMout(moradores) {
    if(corpoTabelaMoradores){
        moradores.forEach(mor => {
            addLineWith(mor)
        })
    }
}

function findMorador(idMorador){
    return moradores.find(mor => mor.id === parseInt(idMorador))
}

function deleteMoradorFromList(morador) {
    moradores = moradores.filter(mor => mor.RG !== morador.RG)
    localStorage.setItem('moradores',JSON.stringify(moradores))
}

function deleteMorador(moradorLine, morador) {
    deleteMoradorFromList(morador)
    corpoTabelaMoradores.removeChild(moradorLine)
}

function loadMoradores(){
    var corpoDropDown = document.getElementById('dropDownMoradores')  
    moradores.forEach(mor => {
        var novaLinha = document.getElementById(mor.id)
        if(novaLinha){
            corpoDropDown.removeChild(novaLinha)
        }
    })
    
    moradores.forEach(mor => {
        var novaLinha = document.createElement('option')
        novaLinha.value = mor.id
        novaLinha.innerText = mor.nome
        novaLinha.id = mor.id
        corpoDropDown.append(novaLinha)
    })
}

function addLineWith(morador){
    var novaLinha = document.createElement("tr")
    var novaColunaNome = document.createElement("td")
    var novaColunaRG = document.createElement("td")
    var novaColunaNroAp = document.createElement("td")
    var novaColunaDelete = document.createElement("td")
    var buttonDelete = document.createElement("button")
    var centralizando = document.createElement("center")

    buttonDelete.style = "padding-left:10%; padding-right:10%;"
    buttonDelete.innerText = "delete"
    buttonDelete.className = "button"
    buttonDelete.addEventListener("click", () => deleteMorador(novaLinha, morador))

    novaColunaRG.innerText = morador.RG
    novaColunaNome.innerText = morador.nome
    novaColunaNroAp.innerText = morador.nroAp

    centralizando.append(buttonDelete)
    novaColunaDelete.append(centralizando)

    novaLinha.append(novaColunaNome)
    novaLinha.append(novaColunaRG)
    novaLinha.append(novaColunaNroAp)
    novaLinha.append(novaColunaDelete)

    corpoTabelaMoradores.append(novaLinha)
}