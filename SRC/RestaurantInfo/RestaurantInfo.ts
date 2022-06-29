import { Restaurant } from "../RestaurantManagement/Restaurant";
import { Address } from "../sourceOfManyClass/Address";
import { Food, Foods } from "../sourceOfManyClass/Food";
import { Table } from "./Table";


export class RestaurantInfo extends Restaurant {
  private foods: Food[] = [];
  private tables: Table[] = [];
  constructor(name: string, private address: Address) {
    super(name);
  }
  addFood(food: Food) {
    this.foods.push(food);
  }
  setTable(table: Table) {
    this.tables.push(table);
  }
  getFood() {
    return this.foods;
  }
  getTable() {
    return this.tables;
  }
  getAddress(){
    return this.address;
  }

}

