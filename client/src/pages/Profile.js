import React, { useState } from "react"
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
	const [showForm, setShowForm] = useState(false);
	const [username, setUsername] = useState("");

	const showUserForm = () => {
		setShowForm(!showForm);
	}

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
{
	(showForm === false && (<button className="edit-button" onClick={showUserForm}>Edit Name</button>))
}
{
	(showForm === true && (<section className="edit-content"><h1>Edit User Info</h1>
	<form>
	<div className="input-wrapper">
	<label htmlFor="username">Username</label>
	<input
	type="text"
	id="username"
	value={username}
	onChange={(e) => setUsername(e.target.value)}
	/>
	</div>
	<div className="input-wrapper">
	<label htmlFor="firstname">First Name</label>
	<input
	type="text"
	id="firstname"
	value={accountDetails.firstName}
	disabled
	/>
	</div>
	<div className="input-wrapper">
	<label htmlFor="lastname">Last Name</label>
	<input
	type="text"
	id="lastname"
	value={accountDetails.lastName}
	disabled
	/>
	</div>
	<div>
	<button type="submit" className="save-button">
		Save
	</button>
	<button type="button" className="cancel-button" onClick={showUserForm}>
		Cancel
	</button>
	</div>
	</form></section>))
}
	</div>
	<h2 className="sr-only">Accounts</h2>
	{
		placeholderDetails.map((details, index) => (
			<Account key={index} title={details.title} description={details.description} amount={details.amount} username={accountDetails.userName}/>
		)) 
	}
</main>
}