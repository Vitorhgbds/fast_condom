let globalOperatorId = 0
class Operator{
    constructor(nome){
        this.id = globalOperatorId++
        this.nome = nome
        var siglaNome = nome.split(" ")
        this.sigla = ""
        siglaNome.forEach(nome => {
            this.sigla = this.sigla + nome.charAt(0) + ""
        })
        this.sigla = this.getIniciais()
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