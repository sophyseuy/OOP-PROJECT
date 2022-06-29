import { Gender } from "../sourceOfManyClass/Gender";
import { Position } from "./Positionn";

export abstract class Person {
    constructor(
        protected fullName: string,
        protected age: number,
        protected gender: Gender,
        protected position: Position) { }
}