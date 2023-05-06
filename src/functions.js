import app, { database } from "./firebase";
import { getDatabase, ref, set, push, remove, child, query, orderByKey, orderByChild, get} from "firebase/database";
import firebase from 'firebase/compat/app'


function addTeam(teamName){ //do we need to explicitly not allow duplicates or does firebase do that?
    //addTeam with teamName as key (best solution for our time constraints)
    //May use push() to generate unique ID as attribute
    try{
        set(ref(database, 'teams/' + teamName), { 
            name: teamName,
            members:'',
            admin:'',
            currentDebt:'',
            // paymentHistory:''
        })
    }
    catch(err){
        console.log(err);
    };

    return;
}
/**Adds member w/ key username at path teams/teamName/members/userName */
function addMember(teamName, userName, userEmail){
    try{
        set(ref(database, 'teams/' + teamName + '/members/' + userName), { 
            username : userName,
            email: userEmail
        });
    }
    catch(err){
        console.log(err);
    }

    return;
}
/**Removes Team w/ key teamName from path teams/teamName */
function removeTeam(teamName){
    //Get the reference to specific teamName table via teamRef child
    try {
        var teamRef = ref(database, "teams/" + teamName);
        remove(teamRef);
    }
    catch(err) { 
        console.error(err);
    }
    return;
}
/**Removes member w/ key username from path teams/teamName/members/userName */
function removeMember(teamName, userName){
    try {
        var memberRef = ref(database, "teams/" + teamName +"/members/" + userName);
        remove(memberRef);
    }
    catch(err) { 
        console.error(err);
    }
    return;
}
/**Sets admin of a team at path teams/teamName */
function setAdmin(teamName, userName){
    try{
        set(ref(database, 'teams/' + teamName +"/admin"), userName);
    }
    catch(err){
        console.log(err);
    };
    return;
}
/**Gets admin of a team */
function getAdmin(teamName){
//return list of users in one team
try {
    const que  = query(ref(database, "teams/" + teamName));
    let result = get(que)
    .then((snapshot) =>{
        //return snapshot.getValue("admin");
        return snapshot("admin").val();
    });
}
catch(err){
    console.log(err);
}
}
/**Returns list of member usernames from path teams/teamName/members */
function getTeamMembers(teamName){
    //return list of users in one team
    const que  = query(ref(database, "teams/" + teamName + "/members"));
    const names = [];
    let result = get(que)
    .then((snapshot) =>{
        //names list will store the team members associated with provided team name
        snapshot.forEach((childSnapshot) => {
            var key = childSnapshot.key;
            names.push(key);
            //console.log(childSnapshot.child("username").val());
            //names.push(childSnapshot.child("username").val())
        });
        
    });
    //return the names list
    return names;

}

/**Adds transaction w/ key transactionName at path teams/teamName/transactions. Initializes paid_by and date fields. */
function addTransaction(teamName, transactionName, paid_by, date){
    try{ 
        set(ref(database, 'teams/' + teamName +"/transactions/" + transactionName), {
             transactionName : transactionName,
             paid_by : paid_by,
             date : date,
             items : ""
        })
    }
     catch(err){
        console.error(err);
    }
    return;
 }
/** Get list of transaction keys from teamName */
 function getTransactions(teamName){
    try{

        //return list of users in one team
        const que  = query(ref(database, "teams/" + teamName + "/transactions"));
        const transactions = [];
        let result = get(que)
        .then((snapshot) =>{
            //names list will store the team members associated with provided team name
            snapshot.forEach((childSnapshot) => {
                var key = childSnapshot.key;
                transactions.push(key);
                //console.log(childSnapshot.child("transactionName").val());
                //transactions.push(childSnapshot.child("transactionName").val())
            });
        });

        return transactions;
    }
    catch(err){
        console.error(err);
    }
 }
/**Get list of item objects from transaction name */
function getItems(teamName, transactionName){
    try{

        //return list of users in one team
        const que  = query(ref(database, "teams/" + teamName + "/transactions/" + transactionName));
        const items = [];
        let result = get(que)
        .then((snapshot) =>{
            //names list will store the team members associated with provided team name
            snapshot.forEach((childSnapshot) => {
                //var key = childSnapshot.key;
                //items.push(key);
                items.push(childSnapshot.val())
                //console.log(childSnapshot.child("transactionName").val());
                //transactions.push(childSnapshot.child("transactionName").val())
            });
        });

        return items;
    }
    catch(err){
        console.error(err);
    }

}


/**Adds item w/ key itemName at path teams/teamName/transactions/itemName. Initializes itemPrice and itemQuantity fields. */
function addItem(teamName, transactionName, itemName, itemPrice, itemQuantity){
     set(ref(database, 'teams/' + teamName +"/transactions/" + transactionName + "/" + itemName), {
         itemName : itemName,
         itemPrice : itemPrice,
         itemQuantity : itemQuantity
     })
 }
/**Removes transaction w/ key transactionName from path teams/teamName/transactions */
function removeTransaction(teamName, transactionName){
    try {
        var transactionRef = ref(database, "teams/" + teamName + "/transactions/" + transactionName);
        remove(transactionRef);
    }
    catch(err) { 
        console.error(err);
    }
    return;
}
/**Removes item w/ key itemName from path teams/teamName/transactions/transactionName */
function removeItem(teamName, transactionName, itemName){
    try {
        var itemRef = ref(database, "teams/" + teamName + "/transactions/" + transactionName + "/" + itemName);
        remove(itemRef);
    }
    catch(err) { 
        console.error(err);
    }
    return;
}

/* TESTING ============================================================================================= */
removeTeam("Fruits");
addTeam("Fruits");;

addMember("Fruits", "Dragonfruit", "dragonfruit@fruit.com");
addMember("Fruits", "Kiwi", "kiwi@fruit.com");
addMember("Fruits", "Mango", "mango@fruit.com");
addMember("Fruits", "Tangerine", "tangerine@fruit.com");

setAdmin("Fruits", "Mango");

var testList = getTeamMembers("Fruits");
console.log(testList);

addTransaction("Fruits", "Walmart", "Kiwi", "05-05-2023");
addTransaction("Fruits", "Target", "Tangerine", "08-22-2023");
removeTransaction("Fruits", "Target");

console.log("Transactions");
var testTransactions = getTransactions("Fruits");
console.log(testTransactions);
addItem("Fruits", testTransactions[0], "Poop Sock", 47000, 24);
console.log("Items:")
console.log(getItems("Fruits", testTransactions[0]))