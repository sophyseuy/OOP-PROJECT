import { Restaurant } from "../Restaurant";
export enum Gender{
    Male='male',
    Female='Female'
}
export class Customers{
constructor(private name:string, gender:Gender){
}
}