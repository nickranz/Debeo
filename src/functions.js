import app, { database } from "./firebase";
import { getDatabase, ref, set, push, remove, child } from "firebase/database";

const teamsRef = ref(database, "teams");

function addTeam(teamName){ //do we need to explicitly not allow duplicates or does firebase do that?
    //addTeam with teamName as key (best solution for our time constraints)
    //May use push() to generate unique ID as attribute
    set(ref(database, 'teams/' + teamName), { 
        name: teamName,
        members:'',
        admin:'',
        currentDebt:'',
        paymentHistory:''
    
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
removeTeam("Fruits");
addTeam("Fruits");;

addMember("Fruits", "Dragonfruit");
addMember("Fruits", "Kiwi");
addMember("Fruits", "Mango");
addMember("Fruits", "Tangerine");

setAdmin("Fruits", "Mango");