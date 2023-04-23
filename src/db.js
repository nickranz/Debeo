import { getDatabase, ref, set } from "firebase/database";

function writeData(){

	const db = getDatabase;
	set(ref(db, 'teams/' + 'turtles'),
			{
				team_id : 000
				members : {
					001: {
						username : "raphael2023"
						name : "Raph"
					}
					002: {
						username : "donatellol2023"
						name : "Donny"
					}
					003: {
						username : "leonardo2023"
						name : "Leo"
					}
					004: {
						username : "michelangelo2023"
						name : "mikey"
					}
				}
				admin : 001 //Raph
				current_debt : {
					001: {
						<002, $0>
						<003, $50>
						<004, $25>
					}
					002: {
						<001, $0>
						<003, $0>
						<004, $0>
					}
					003: {
						<001, $0>
						<002, $50>
						<004, $25>
					}
					004: {
						<001, $0>
						<002, $25> // 4 -> 2 = 50 & 2 -> 4 = 25
						<003, $0>
					}
				}
				payment_history : {
					001: {
						name : "Walmart Groceries"
						date : 01/07/2023
						total_cost : $100
						paid_for_by : 004
						items : {
							"Milk" : {
								cost : $25
								quantity : 1
							}
							"Bread" : {
								cost : $25
								quantity : 1
							}
							"Eggs" : {
								cost : $25
								quantity : 2
							}
						}
						transaction_debt : {
							001: {
								<002, $0>
								<003, $0>
								<004, $25>
							}
							002: {
								<001, $0>
								<003, $0>
								<004, $25>
							}
							003: {
								<001, $0>
								<002, $0>
								<004, $25>
							}
							004: {
								<001, $0>
								<002, $0>
								<003, $0>
							}
						}
					}
					002: {
						name : "Aldi Groceries"
						date : 01/07/2023
						total_cost : $200
						paid_for_by : 002
						items : {
							"Spinach" : {
								cost : $10
								quantity : 10
							}
							"Bananas" : {
								cost : $20
								quantity : 1
							}
							"Ketchup" : {
								cost : $15
								quantity : 4
							}
							"Mustard" : {
								cost : $20
								quantity : 1
							}
						}
						transaction_debt : {
							001: {
								<002, $50>
								<003, $0>
								<004, $0>
							}
							002: {
								<001, $0>
								<003, $0>
								<004, $0>
							}
							003: {
								<001, $0>
								<002, $50>
								<004, $0>
							}
							004: {
								<001, $0>
								<002, $50>
								<003, $0>
							}
						}
					}        
				}
			})
		
		


}
