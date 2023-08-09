import React, { useState } from "react"
import { Account } from "../components/Account"
import { useDispatch, useSelector } from "react-redux";
import { userNameEdit } from "../features/user/userSlice";

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

	const userDetails = useSelector((state) => state.user.userInfo);


	const dispatch = useDispatch();
	const handleUserEditEvent = (e) => {
		e.preventDefault();
		let nameEdit = {
			userName: username,
		};
	
		dispatch(userNameEdit(nameEdit)).then((result) => {
			if(result.payload){
				setUsername("");
				showUserForm();
			}
		})
	}

   return <main className="main bg-dark">
	<div className="header">
		<h1>
		Welcome back
		<br></br>
		{`${userDetails.firstName} ${userDetails.lastName} !`}
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
	value={userDetails.firstName}
	disabled
	/>
	</div>
	<div className="input-wrapper">
	<label htmlFor="lastname">Last Name</label>
	<input
	type="text"
	id="lastname"
	value={userDetails.lastName}
	disabled
	/>
	</div>
	<div>
	<button type="submit" className="save-button" onClick={handleUserEditEvent}>
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
			<Account key={index} title={details.title} description={details.description} amount={details.amount}/>
		)) 
	}
</main>
}