import app, { database } from "./firebase";
import { getDatabase, ref, set, push, remove, child, query, orderByKey, orderByChild, get} from "firebase/database";
import firebase from 'firebase/compat/app'


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

function addToList(listName, outerList){

}
function getTeamMembers(teamName){
    //return list of users in one team
    const que  = query(ref(database, "teams/" + teamName + "/members/"));
    // teamsRef.orderByChild().on(('child_added'), (snapshot) => {
    //     console.log(snapshot.key);
    // });

    let result = get(que)
    .then((snapshot) =>{
        var names = [];
        //names list will store the team members associated with provided team name
        snapshot.forEach((childSnapshot) => {
            //names.push(childSnapshot.val());
            var key = childSnapshot.key;
            //console.log(childSnapshot.val());
            names.push(key);
            //console.log(names)
            //console.log(key);

        });
        //console.log(names)

        return names;
    });
    
    


    //console.log(names)

    //return the names list
    return result;

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

var testList = getTeamMembers("Fruits");

console.log(testList);