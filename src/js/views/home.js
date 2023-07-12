import React from "react";
import "../../styles/home.css";
import ContactBox from "../component/contactBox.jsx";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export const Home = () => {
	const contacts = useSelector((store) => store.contact.value);

	console.log(contacts);

	return(
		<>
			<div className="d-grid gap-2 d-md-flex justify-content-md-end container p-0 mb-3">
				<Link to="/Form">
					<button className="btn btn-success" type="button">Add New Contact</button>
				</Link>
			</div>
			<div className="container">
				{ contacts && contacts.map((element, key) =>{
					return(
						<ContactBox key={key}
							name={element.full_name}
							address={element.address}
							phone={element.phone}
							email={element.email}
							id={element.id}
						/>)
					})
				}
			</div>
		</>)
	}
;
