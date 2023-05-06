import {addTeam, addMember, addTransaction, addItem, getItems, getTransactions, getMembers} from './functions';
//import functions for testing


beforeEach(() => {
    addTeam("TestTeam");
    addMember("TestTeam", "TestUser1", "UserEmail@email.com")
});
test('Test creation of a team', () => {
    expect(getMembers("TestTeam")).toBe(['TestUser1']);
});