import { Restaurant } from "../RMS/Restaurant";
import { Address } from "../sourceOfManyClass/Address";
import { Food ,Foods} from "../sourceOfManyClass/Food";
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
 
}

let phnomPenh = new Address("Phnom Penh", "str 2004", 12495969, "houseNo49");
let vegetables = new Food(Foods.FRYVEGETABLE, 1);
let koko = new Food(Foods.KOKO, 2);
let table1 = new Table(1, 4);
let table2 = new Table(2, 5);
let restaurantInfo = new RestaurantInfo("SP_Restaurant", phnomPenh);
restaurantInfo.addFood(vegetables);
restaurantInfo.addFood(koko);
restaurantInfo.setTable(table1);
restaurantInfo.setTable(table2);
console.log(restaurantInfo);
