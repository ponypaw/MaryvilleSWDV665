var Grocery = /** @class */ (function () {
    function Grocery(name, price, inStock, sold) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.sold = sold;
    }
    return Grocery;
}());

var milk = new Grocery("Martha's Milk", 2.87, 10, 7);
var bread = new Grocery("Bert's Bread", 1.53, 5, 19);
var eggs = new Grocery("Edith's Eggs", 1.98, 12, 48);

var groceries: any = [];

groceries.push(milk);
groceries.push(bread);
groceries.push(eggs);


let table = document.getElementById('groceriesList');

for (let i = 0; i < groceries.length; ++i) {
  var row = document.createElement("tr");

  let c1 = document.createElement("td");
  let c2 = document.createElement("td")
  let c3 = document.createElement("td")

  c1.innerText = groceries[i].name;
  c2.innerText = groceries[i].price;
  c3.innerText = groceries[i].inStock;

  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);

  console.log("Row is " + row);

  if(table != null) {
    table.appendChild(row);
  }
  
}