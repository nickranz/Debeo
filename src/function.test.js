import {addTeam, addMember, addTransaction, addItem, getItems, getTransactions, getTeamMembers, removeMember, removeTeam, setAdmin, getAdmin, removeItem} from './functions';

beforeAll(() => {
    addTeam("TestTeam");
});

/**ADD TEAM =========================================================================================================================== */
test('Creation of an empty team to empty database', () => {
    //console.log(getTeamMembers("TestTeam"))
    async function sequence() {
        addTeam("TestTeam");
        await promise1(1000); // Wait 50 ms for update 
        expect(getTeamMembers("TestTeam")).toStrictEqual([]);
    }
});
test('Creation of an empty team to non-empty database', () => {
    //console.log(getTeamMembers("TestTeam"))
    async function sequence() {
        addTeam("TestTeam2");
        await promise1(1000); // Wait 50 ms for update 
        expect(getTeamMembers("TestTeam2")).toStrictEqual([]);
    }
});
/**ADD MEMBER ====================================================================================================================== */
test('Adding one team members to team w/ no members', () => {
   
    addMember("TestTeam", "User1", "UserEmail1@email.com")
    
    async function sequence() {
    console.debug("TEST:" + getTeamMembers("TestTeam"));
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
/**REMOVE MEMBER =============================================================================================================== */
test('Remove nonexistent user from team', () => {
    async function sequence() {
    removeMember("fakeuser", "User1");
    expect(getTeamMembers("TestTeam")).toStrictEqual(['User1', 'User2', 'User3', 'User4']);
    }
});
test('Remove single member from non-empty member list in team', () => {
    async function sequence() {
    removeMember("TestTeam", "User1");
    expect(getTeamMembers("TestTeam")).toStrictEqual(['User2', 'User3', 'User4']);
    }
});
test('Remove all members from non-empty member list in team', () => {
    async function sequence() {
    removeMember("TestTeam", "User2");
    removeMember("TestTeam", "User3");
    removeMember("TestTeam", "User4");
    expect(getTeamMembers("TestTeam")).toStrictEqual([]);
    }
});
addMember("TestTeam", "User1", "UserEmail1@email.com");
addMember("TestTeam", "User2", "UserEmail2@email.com");
addMember("TestTeam", "User3", "UserEmail3@email.com");
addMember("TestTeam", "User4", "UserEmail4@email.com");
/**SET ADMIN ==================================================================================================================== */
test('Set admin for team when admin = null', () => {
    async function sequence() {
    setAdmin("TestTeam", "User2")
    expect(getAdmin("TestTeam")).toStrictEqual('User2');
    }

})

test('Set admin for team when admin = existing user', () => {
    async function sequence() {
    setAdmin("TestTeam", "User3")
    expect(getAdmin("TestTeam")).toStrictEqual('User3');
    }

})
/**ADD TRANSACTION =================================================================================================================== */
test('Add and get one transaction to empty transaction list', () => {
    async function sequence() {
    addTransaction("TestTeam", "Transaction1", "User2", "01-02-2023");
    expect(getTransaction("TestTeam")).toStrictEqual(['Transaction1']);
    }
})

test('Add and get one transaction to non empty transaction list', () => {
    async function sequence() {
    addTransaction("TestTeam", "Transaction2", "User3", "01-03-2023");
    expect(getTransaction("TestTeam")).toStrictEqual(['Transaction2', 'Transaction3']);
    }
})
/**REMOVE TRANSACTION =============================================================================================================== */
test('Remove nonexistent transaction from 2-item transaction list', () => {
    async function sequence() {
    removeTransaction("FakeTransaction");
    expect(getTransaction("TestTeam")).toStrictEqual(['Transaction2']);
    }
})
test('Remove one transaction from 2-item transaction list', () => {
    async function sequence() {
    removeTransaction("Transaction1");
    expect(getTransaction("TestTeam")).toStrictEqual(['Transaction2']);
    }
})
test('Remove one transaction from single-item transaction list', () => {
    async function sequence() {
    removeTransaction("Transaction2");
    expect(getTransaction("TestTeam")).toStrictEqual([]);
    }
})
test('Remove one transaction from empty list list', () => {
    async function sequence() {
    removeTransactsion("FakeTransaction");
    expect(getTransaction("TestTeam")).toStrictEqual([]);
    }
})
/**ADD ITEMS ============================================================================================================= */
test('Add and get one item to empty item list', () => {
    async function sequence() {
    addTransaction("TestTeam", "Transaction1", "User2", "01-02-2023");
    expect(getTransaction("TestTeam")).toStrictEqual(['Transaction1']);
    }
})

test('Add and get one transaction to non empty transaction list', () => {
    async function sequence() {
    addTransaction("TestTeam", "Transaction2", "User3", "01-03-2023");
    expect(getTransaction("TestTeam")).toStrictEqual(['Transaction2', 'Transaction3']);
    }
})
addTransaction("TestTeam", "Transaction1", "User2", "01-05-2023");

/**GET + ADD ITEMS ============================================================================================================= */
test('Add and get one item from empty transaction list', () => {
    async function sequence() {
    addItem("TestTeam", "Transaction1", "Item1", 20.00, 2);
    expect(getTransactions("TestTeam")).toStrictEqual(['Transaction1']);
    }
})
test('Add and get one item from non-empty transaction list', () => {
    async function sequence() {
    addItem("TestTeam", "Transaction1", "Item2", 10.00, 4);
    expect(getTransactions("TestTeam")).toStrictEqual(['Transaction1', "Transaction2"]);
    }
})
/** GET + REMOVE ITEMS ====================================================================================================================================== */
test('Remove and get one item from non-empty transaction list', () => {
    async function sequence() {
    removeItem("TestTeam", "Transaction1", "Item1");
    expect(getTransactions("TestTeam")).toStrictEqual(["Transaction2"]);
    }
})
test('Remove and get one item from single-item transaction list', () => {
    async function sequence() {
    removeItem("TestTeam", "Transaction1", "Item2");
    expect(getTransactions("TestTeam")).toStrictEqual([]);
    }
})
test('Remove and get one item from empty transaction list', () => {
    async function sequence() {
    removeItem("TestTeam", "Transaction1", "FakeItem");
    expect(getTransactions("TestTeam")).toStrictEqual([]);
    }
})
/**=================================================================================================================================================== */
afterAll(done => {
    //removeTeam("TestTeam")
    done();
})