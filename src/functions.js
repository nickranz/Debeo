import app, { database } from "./firebase";
import { getDatabase, ref, set, push, remove } from "firebase/database";

const teamsRef = ref(database, "teams");


// class Team{
//     name;
//     admin;
    
//     Team(name){
//         this.name = name;
//         this.admin = null;
//     }

//     setName(name){

//     }
//     getName(){
//         return this.name;
//     }
//     setAdmin(adminUser){

//     }
//     getAdmin(){
//         return this.admin;

//     }

//     addMember(user){

//     }
// } 
//     class Item {
//         constructor(name, cost, quantity) {
//           this.name = name;
//           this.cost = cost;
//           this.quantity = quantity;
//         }
//         getName() {
//             return this.name;
//         }
//         getCost() {
//             return this.cost;
//         }
//         getQuantity() {
//             return this.quantity;
//         }
//         setName(newName) {
//             this.name = newName;
//             return;
//         }
//         setCost(newCost) {
//             this.cost = newCost;
//             return;
//         }
//         setQuantity(newQuantity) {
//             this.quantity = newQuantity;
//             return this.name;
//         }
    
//       }


function addTeam(teamName){
    var key = push(teamsRef, { 
        "key" : key,
        "team_name" : teamName,
        "members" : null,
        "admin" : null, 
    
    }).catch((err) => {
        console.log(err);
    });
    return;
}
function addMember(teamName, memberName){
    var memberRef = ref(database, "teams/" + teamName + "/members");
    var key = push(memberRef,{
        "username" : memberName,
		"id" : key,
    }).catch((err) =>{
        console.log("ADDMEMBER() : " + err);
    });
    return;
}
function removeTeam(teamName){
    var teamRef = ref(database, "teams/" + teamName);
    remove(teamRef).then(() => {
        console.log("team " + teamName + "removed");
      });
    return;
}
function removeMember(teamName, memberName){
    return;
}
function setAdmin(teamName, memberName){
    return;
}
function unsetAdmin(teamName, memberName){
    return;
}
function addTransaction(teamName, memberName){
    return;
}
function addItem(teamName, memberName){
    return;
}
function removeTransaction(teamName, memberName){
    return;
}
function removeItem(teamName, memberName){
    return;
}
/* TESTING ============================================================================================= */
// addTeam("apples");
addTeam("grapefruit");
removeTeam("team1");