import { getDatabase, ref, set } from "firebase/database";

function writeData(){

	const db = getDatabase;
	set(ref(db, 'teams/' + 'turtles'), 
			{
				"team_id" : 000,
				"members" : {
					"member1": {
						"username" : "raphael2023",
						"id" : 1,
					},
					"member2": {
						"username" : "donnyboy2023",
						"id" : 2,
					},
				},
				"admin" : 1,
				"current_debt" : {
					"member1": {
						"member2": 0
					},
					"member2": {
						"member1" : 0
					}
				},
				"payment_history" : {
					"transaction1": {
						"name" : "Walmart Groceries",
						"date" : 01/07/2023,
						"total_cost" : 100,
						"paid_for_by" : 004,
						"items" : {
							"Milk" : {
								"cost" : 25,
								"quantity" : 1
							},
							"Bread" : {
								"cost" : 25,
								"quantity" : 1
							},
							"Eggs" : {
								"cost" : 25,
								"quantity" : 2
							}
						},
						"transaction_debt" : {
							"member1": {
								"member2": 0
							},
							"member2": {
								"member1" : 0
							}
						}
					}
					      
				}
			}

	)
}
