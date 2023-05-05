import app, { database } from "./firebase";
import { getDatabase, ref, set, push, remove, child, query, orderByKey, orderByChild, get} from "firebase/database";
import firebase from 'firebase/compat/app'

// const Client = require('@veryfi/veryfi-sdk');
//Veryfi Client Info
const client_id = 'vrf3xG8VBKx1DTvReVbViJmmXHTa9lrO6bK2Z0m';
const client_secret = 'xWN4J7BjGC8T8nGy2FF3DkOnodSvitE1I7zI6ZSMUM89Y79ZHXKzWima8wHNniT0HTmkSHbN4OsteS52BE99w2pkPUPwY3Fl56moDS3xSy9k8yw4uD7cdkYeLOTC8MKb';
const username = 'rhirave';
const api_key ='44644504b962712022363599591fb03f';

//let my_client = new Client(client_id, client_secret, username, api_key);

function addTeam(teamName){ //do we need to explicitly not allow duplicates or does firebase do that?
    //addTeam with teamName as key (best solution for our time constraints)
    //May use push() to generate unique ID as attribute
    set(ref(database, 'teams/' + teamName), { 
        name: teamName,
        members:'',
        admin:'',
        currentDebt:'',
        // paymentHistory:''
    
    })
    .catch((err) => {
    console.log(err);
    });

    return;
}
function addMember(teamName, userName){
    set(ref(database, 'teams/' + teamName + '/members/' + userName), { 
        username : userName,
        email: "",
    }).catch((err) => {
    console.log(err);
    });

    return;
}
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
function setAdmin(teamName, userName){
    set(ref(database, 'teams/' + teamName +"/admin"), {
        admin : userName
    }).catch((err) => {
        console.log(err);
    });
    return;
}

function getTeamMembers(teamName){
    //return list of users in one team
    const que  = query(ref(database, "teams/" + teamName + "/members/"));
    const names = [];
    // teamsRef.orderByChild().on(('child_added'), (snapshot) => {
    //     console.log(snapshot.key);
    // });

    get(que)
    .then((snapshot) =>{
        //names list will store the team members associated with provided team name
        snapshot.forEach(childSnapshot => {
            names.push("" + childSnapshot.child("username").val().toString());
            console.log(childSnapshot.child("username").val().toString());
        });

    });

    //return the names list
    return names;
}

function addTransaction(teamName, paid_by_member, transaction_date){
    push(ref(database, 'teams/' + teamName + '/transactions/'), {
        paid_by : paid_by_member,
        transaction_date : transaction_date,
        transaction_debt : ""
    }).catch((err) => {
        console.log(err);
    });
    return;
}
function addItem(teamName, transactionID){
    return;
}
function removeTransaction(teamName, memberName){
    return;
}
function removeItem(teamName, memberName){
    return;
}

/* TESTING ============================================================================================= */
removeTeam("Fruits");
addTeam("Fruits");

addMember("Fruits", "Dragonfruit");
addMember("Fruits", "Kiwi");
addMember("Fruits", "Mango");
addMember("Fruits", "Tangerine");

setAdmin("Fruits", "Mango");

var fruit_members = getTeamMembers("Fruits");
console.log("fruit_members.length = " + fruit_members.length);
for (let i = 0; i < fruit_members.length; i++) {
    console.log(fruit_members[i]);
}

addTransaction("Fruits", "Kiwi", "01-02-2023");