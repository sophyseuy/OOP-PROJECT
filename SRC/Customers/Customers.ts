import { Restaurant } from "../Restaurant";
export enum Gender{
    Male='male',
    Female='Female'
}
export class Customers extends Restaurant{
constructor(name:string,gender:Gender){
    super(name)
}
}