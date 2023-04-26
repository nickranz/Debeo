import "./db.js"
import "./firebase.js"

class Item {
    constructor(name, cost, quantity) {
      this.name = name;
      this.cost = cost;
      this.quantity = quantity;
    }
    getName() {
        return this.name;
    }
    getCost() {
        return this.cost;
    }
    getQuantity() {
        return this.quantity;
    }
    setName(newName) {
        this.name = newName;
        return;
    }
    setCost(newCost) {
        this.cost = newCost;
        return;
    }
    setQuantity(newQuantity) {
        this.quantity = newQuantity;
        return this.name;
    }

  }