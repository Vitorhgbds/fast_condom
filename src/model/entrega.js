let globalId1 = 0
class Entrega{
    constructor(descricao, morador, operador,data_Saida, data_Entrega){
        this.id = globalId1++
        this.descricao = descricao
        this.morador = morador
        this.data_Entrega = data_Entrega
        this.data_Saida = data_Saida
        this.operador = operador

    } 
    
    getDescricao(){
        return this.descricao
    }

    getId(){
        return this.id
    }

    getNomeMorador(){
        return this.morador.nome
    }

    getApMorador(){
        return this.morador.nroAp
    }

    getIiniciaisOperador(){
        return this.operator.getIiniciais
    }
    
    setData_Saida(data_Saida){
        this.data_Saida = data_Saida
    }

    setData_Entrega(data_Entrega){
        this.data_Entrega = data_Entrega
    }

}