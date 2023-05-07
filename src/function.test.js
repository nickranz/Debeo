// import {addTeam, addMember, addTransaction, addItem, getItems, getTransactions, getMembers} from './functions';
//import functions for testing
const functions = require('./functions');

beforeEach(() => {
    addTeam("TestTeam");
    addMember("TestTeam", "TestUser1", "UserEmail@email.com")
});

test('Test creation of a team', () => {
    expect(getMembers("TestTeam")).toBe(['TestUser1']);
});

test('Remove member TestUser1', () => {
    removeMember("TestTeam", "TestUser1");
    expect(getMembers("TestTeam")).toBe([]);
});