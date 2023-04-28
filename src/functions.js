import app, { database } from "./firebase";
import { getDatabase, ref, set, push, remove, child } from "firebase/database";

const teamsRef = ref(database, "teams")


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
    //addTeam with teamName as key (best solution for our time constraints)
    //May use push() to generate unique ID as attribute
    set(ref(database, 'teams/' + teamName), { 
        name: teamName,
        members:'',
        admin:'',
        currentDebt:0,
        paymentHistory:''
    
    })
    .catch((err) => {
    console.log(err);
    });

    return;
}
function addMember(teamName, memberName){
    

    return;
}
function removeTeam(teamName){
    //Get the reference to specific teamName table via teamRef child
    var teamRef = ref(database, "teams/" + teamName)
    .catch((err) => {
        console.log(err);
    });


    remove(teamRef);
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
addTeam("TempTeam");

removeTeam("TempTeam");
