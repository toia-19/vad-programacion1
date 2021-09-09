export default class Area{
    bs;
    bi;
    al;
    bs2;
    al2;

    constructor(a,b,h,b2,h2){
        this.bs = a;
        this.bi = b;
        this.al = h;

        this.bs2 = b2;
        this.al2 = h2;
    }

    calcularAreaTrap(){
        const bloque1 = (parseInt(this.bs) + parseInt(this.bi)) / 2;
        const area1 = bloque1 * this.al;

        return area1;
    }

    calcularArea(){
        const bloque2 = (parseInt(this.bs2) * parseInt(this.al2));
        const area2 = bloque2 / 2;
        
        return area2;
    }
}