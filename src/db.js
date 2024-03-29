import { getDatabase, ref, set } from "firebase/database";
import app, { database } from "./firebase";

function sampleData(){

	set(ref(database, 'teams/team2'), 
			{
				"team_name" : "turtles",
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
						"date" : 0,
						"total_cost" : 100,
						"paid_for_by" : 4,
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

// writeData();

