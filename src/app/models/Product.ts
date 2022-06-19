export const QUANTITIES: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export class Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;

  constructor() {
    this.id = 1;
    this.name = "";
    this.price = 0.0;
    this.url = "";
    this.description = "";
  }
}
