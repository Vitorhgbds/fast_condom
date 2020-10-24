let globalId = 0
class Operator{
    constructor(nome){
        this.id = globalId++
        this.nome = nome
        var siglaDoNome
        
        this.sigla
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