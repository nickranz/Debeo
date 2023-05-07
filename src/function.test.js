import {addTeam, addMember, addTransaction, addItem, getItems, getTransactions, getTeamMembers, removeMember, removeTeam} from './functions';


//const functions = require('./functions').default

//import functions for testing
//const functions = require('./functions');

beforeEach(() => {
    removeTeam("TestTeam")
    addTeam("TestTeam");
    addMember("TestTeam", "TestUser1", "UserEmail@email.com")
});

test('Test creation of a team', () => {
    expect(getTeamMembers("TestTeam")).toStrictEqual(['TestUser1']);
});

test('Remove member TestUser1', () => {
    removeMember("TestTeam", "TestUser1");
    expect(getTeamMembers("TestTeam")).toStrictEqual([]);
});