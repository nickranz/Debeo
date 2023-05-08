import {addTeam, addMember, addTransaction, addItem, getItems, getTransactions, getTeamMembers, removeMember, removeTeam} from './functions';


//const functions = require('./functions').default

//import functions for testing
//const functions = require('./functions');

beforeEach(() => {
    removeTeam("TestTeam")
    addTeam("TestTeam");
    addMember("TestTeam", "User1", "UserEmail@email.com")
});

test('Test creation of a team', () => {
    console.log(getTeamMembers("TestTeam"))
    async function sequence() {
        await promise1(100); // Wait 50ms…
        expect(getTeamMembers("TestTeam")).toStrictEqual(['User1']);
    }
});

test('Remove member TestUser1', () => {
    removeMember("TestTeam", "User1");
    expect(getTeamMembers("TestTeam")).toStrictEqual([]);
});