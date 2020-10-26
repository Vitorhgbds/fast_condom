  
class Morador{
    constructor(nome, RG, nroAp){
        this.RG = RG
        this.nome = nome
        this.nroAp = nroAp
    } 
    
    getName(){
        return this.nome
    }

    getRG(){
        return this.RG
    }

    getNroAp(){
        return this.nroAp
    }

    setName(novoNome){
        this.nome = novoNome
    }

}