// si no se coloca el export default, no se tomará el main
export default class Bhaskara {
    ca;
    cb;
    ti;

    constructor(a,b,c){ // el constructor es una función/ método
        this.ca = a;
        this.cb = b;
        this.ti = c;
    }

    calcular_r1(){
        const bloque1 = Math.pow(this.cb,2) - (4*this.ca*this.ti);
        const raiz = Math.sqrt(bloque1);
        const r1 = (-this.cb + raiz) / (this.ca*2);
        return r1.toFixed(2);
    }

    calcular_r2(){
        const bloque1 = Math.pow(this.cb,2) - (4*this.ca*this.ti);
        const raiz = Math.sqrt(bloque1);
        const r2 = (-this.cb - raiz) / (this.ca*2);
        return r2.toFixed(2);
    }
}
