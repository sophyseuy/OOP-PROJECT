export enum Foods{
    KOKO='koko',
    MAJU='maju',
    FRYVEGETABLE='fryvegetable'
}
export class Food{
    constructor(private name:Foods,private price:number){}
}