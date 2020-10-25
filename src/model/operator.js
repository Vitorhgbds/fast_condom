let globalId = 0
class Operator{
    constructor(nome){
        this.id = globalId++
        this.nome = nome
        var siglaNome = nome.split(" ")
        this.sigla = ""
        siglaNome.forEach(nome => {
            this.sigla = this.sigla + nome.charAt(0) + ""
        })
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

    getIniciais(){
        var iniciais = ""
        if(this.sigla.length > 1){
            iniciais = iniciais + this.sigla.charAt(0) + ". " + this.sigla.charAt(1); 
        }
        else {
            iniciais = iniciais + this.sigla.charAt(0)
        }
        return iniciais
    }
}