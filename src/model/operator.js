class Operator{
    constructor(id, nome){
        this.id = id
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