export class Todo {
    public id: number;
    public texto: string;
    public completado: boolean;

    constructor(texto: string) {
        this.texto = texto;
        //this.id = new Date().getTime();//simularia un id
        this.id = Math.random();
        this.completado = false;
    }

}