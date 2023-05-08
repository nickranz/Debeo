import {addTeam, addMember, addTransaction, addItem, getItems, getTransactions, getTeamMembers, removeMember, removeTeam, setAdmin, getAdmin} from './functions';


//const functions = require('./functions').default

//import functions for testing
//const functions = require('./functions');

beforeAll(() => {
    addTeam("TestTeam");
});

test('Creation of a empty team with member', () => {
    //console.log(getTeamMembers("TestTeam"))
    async function sequence() {
        addMember("TestTeam", "User1", "UserEmail@email.com");
        await promise1(1000); // Wait 50 ms for update 
        expect(getTeamMembers("TestTeam")).toStrictEqual(['User1']);
    }
});

test('Adding multiple team members to team', () => {
   
    addMember("TestTeam", "User2", "UserEmail1@email.com")
    addMember("TestTeam", "User3", "UserEmail2@email.com")
    addMember("TestTeam", "User4", "UserEmail3@email.com")
    
    async function sequence() {
    console.debug("TEST:" + getTeamMembers("TestTeam"));
    expect(getTeamMembers("TestTeam")).toStrictEqual(['User1', 'User2', 'User3', 'User4']);
    }
});

test('Remove single member from team', () => {
    async function sequence() {
    removeMember("TestTeam", "User1");
    expect(getTeamMembers("TestTeam")).toStrictEqual(['User2', 'User3', 'User4']);
    }
});

test('Set admin for team', () => {
    async function sequence() {
    setAdmin("TestTeam", "User2")
    expect(getAdmin("TestTeam")).toStrictEqual(['User2']);
    }

})



afterAll(done => {
    removeTeam("TestTeam")
    done();
})