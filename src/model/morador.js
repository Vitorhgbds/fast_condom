let globalMoradorId = 0;
class Morador{
    constructor(nome, RG, nroAp){
        this.RG = RG
        this.nome = nome
        this.nroAp = nroAp
        this.id = globalMoradorId++;
    } 

    setName(novoNome){
        this.nome = novoNome
    }

}