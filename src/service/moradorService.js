const corpoTabelaMoradores = document.getElementById('tabelaMoradores')

let moradores = [
    new Morador("vitor","1111111112","B32"), new Morador("Mathias","1111111122","A123"), new Morador("julia","1111111123","C41")
]

tableMoradoresMout(moradores)

function addMorador(nome,RG,nroAp) {
    let morador = new Morador(nome,RG,nroAp)
    moradores.push(morador)
    var novaLinha = document.createElement("tr")
    var novaColunaNome = document.createElement("td")
    var novaColunaRG = document.createElement("td")
    var novaColunaNroAp = document.createElement("td")
    var novaColunaDelete = document.createElement("td")
    var buttonDelete = document.createElement("button")
    var centralizando = document.createElement("center");

    buttonDelete.style = "padding-left:10%; padding-right:10%;"
    buttonDelete.innerText = "delete"
    buttonDelete.className = "button"
    buttonDelete.addEventListener("click", () => deleteMorador(novaLinha, morador))

    novaColunaRG.innerText = morador.getRG()
    novaColunaNome.innerText = morador.getName()
    novaColunaNroAp.innerText = morador.getNroAp()

    centralizando.append(buttonDelete)
    novaColunaDelete.append(centralizando)

    novaLinha.append(novaColunaNome)
    novaLinha.append(novaColunaRG)
    novaLinha.append(novaColunaNroAp)
    novaLinha.append(novaColunaDelete)

    corpoTabelaMoradores.append(novaLinha)
}

function tableMoradoresMout(moradores) {
    moradores.forEach(mor => {
        var novaLinha = document.createElement("tr")
        var novaColunaNome = document.createElement("td")
        var novaColunaRG = document.createElement("td")
        var novaColunaNroAp = document.createElement("td")
        var novaColunaDelete = document.createElement("td")
        var buttonDelete = document.createElement("button")
        var centralizando = document.createElement("center");

        buttonDelete.style = "padding-left:10%; padding-right:10%;"
        buttonDelete.innerText = "delete"
        buttonDelete.className = "button"
        buttonDelete.addEventListener("click", () => deleteMorador(novaLinha, mor))

        novaColunaRG.innerText = mor.RG
        novaColunaNome.innerText = mor.nome
        novaColunaNroAp.innerText = mor.nroAp

        centralizando.append(buttonDelete)
        novaColunaDelete.append(centralizando)

        novaLinha.append(novaColunaNome)
        novaLinha.append(novaColunaRG)
        novaLinha.append(novaColunaNroAp)
        novaLinha.append(novaColunaDelete)

        corpoTabelaMoradores.append(novaLinha)
    })
}

function deleteMoradorFromList(morador) {
    moradores = moradores.filter(mor => mor.id !== mor.id)
}

function deleteMorador(moradorLine, morador) {
    deleteMoradorFromList(morador)
    corpoTabelaMoradores.removeChild(moradorLine)
}