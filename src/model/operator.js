let globalId = 0
class Operator{
    constructor(nome){
        this.id = globalId++
        this.nome = nome
    } 
    
    getName(){
        return this.nome
    }

    getId(){
        return this.id
    }

    setName(novoNome){
        this.nome = novoNome
    }

}