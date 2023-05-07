// import app, { database } from "./firebase";
// import { getDatabase, ref, set, push, remove, child, query, orderByKey, orderByChild, get} from "firebase/database";
// import {addTeam, addMember, addTransaction, addItem, getItems, getTransactions, getMembers} from './functions';
// import functions for testing
// import './functions';
const functions = require('./functions', './config.js' );

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