import React from "react"
import { Account } from "../components/Account"

let accountDetails = null;

const placeholderDetails = [{
	title: "Argent Bank Checking (x8349)",
	amount: "$2,082.79",
	description: "Available Balance",
},
{
	title: "Argent Bank Savings (x6712)",
	amount: "$10,928.42",
	description: "Available Balance",
},
{
	title: "Argent Bank Credit Card (x8349)",
	amount: "$184.30",
	description: "Available Balance",
}]

export const Profile = () =>{
	if(localStorage.getItem("user")){
		accountDetails = 	JSON.parse(localStorage.getItem("user"));
		console.log(accountDetails);
	}
	else{
		accountDetails = null;
	}

   return <main className="main bg-dark">
	<div className="header">
		<h1>
		Welcome back
		<br></br>
		{`${accountDetails.firstName} ${accountDetails.lastName} !`}
		</h1>
	<button className="edit-button">Edit Name</button>
	</div>
	<h2 className="sr-only">Accounts</h2>
	{
		placeholderDetails.map((details, index) => (
			<Account key={index} title={details.title} description={details.description} amount={details.amount} username={accountDetails.userName}/>
		)) 
	}
</main>
}