export enum Foods{
    KOKO='Koko',
    MAJU='Maju',
    FRYVEGETABLE='Fried vegetable',
    FRYEGG='Fried egg',
    KHMERSUOP='Khmer soup'
}
export class Food{
    constructor(private name:Foods,private price:number){}
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
}