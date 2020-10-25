let globalId = 0
class Morador{
    constructor(nome, rg, numeroAp){
        this.id = globalId++
        this.nome = nome
        this.rg = rg
        this.numeroAp = numeroAp

    } 
    
    getName(){
        return this.nome
    }

    getId(){
        return this.id
    }

    getRg(){
        return this.rg
    }

    getNumeroAp(){
        return this.numeroAp
    }

    setName(novoNome){
        this.nome = novoNome
    }

}