class Entrega{
    constructor(data, hora, descricao, nroAp, operador ){
        this.data = data;
        this.hora = hora
        this.descricao = descricao;
        this.nroAp = nroAp
        this.operador = operador;
    } 

    getData(){
        return this.data
    }

    gethora(){
        return this.hora
    }

    getDescricao(){
        return this.descricao
    }

    getNroAp(){
        return this.nroAp
    }

    getOperador(){
        return this.operador
    }
}