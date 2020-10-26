let globalEntregaId = 0
class Entrega{
    constructor(descricao, morador, operador,data_Saida, data_Entrega){
        this.id = globalEntregaId++
        this.descricao = descricao
        this.morador = morador
        this.data_Entrega = data_Entrega
        this.data_Saida = data_Saida
        this.operador = operador

    }

}