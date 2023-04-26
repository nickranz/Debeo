import { getDatabase, ref, set } from "firebase/database";
import app, { database } from "./firebase";

class Team{
    name;
    admin;
    
    Team(name){
        this.name = name;
        this.admin = null;
    }

    setName(name){

    }
    getName(){
        return this.name;
    }
    setAdmin(adminUser){

    }
    getAdmin(){
        return this.admin;

    }

    addMember(user){

    }
} 

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
    