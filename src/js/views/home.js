import React from "react";
import "../../styles/home.css";
import ContactBox from "../component/contactBox.jsx";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export const Home = () => {
	const contacts = useSelector((store) => store.contact.value);

	console.log(contacts);

	let body = {
		"full_name": "Dave Bradley",
		"email": "dave@gmail.com",
		"agenda_slug": "my_super_agenda",
		"address":"47568 NW 34ST, 33434 FL, USA",
		"phone":"7864445566"
	}

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
							img="https://c-cl.cdn.smule.com/rs-s77/arr/10/c3/586c5b5a-1edf-4024-addb-7b4b3c90dd4a.jpg"
							name={element.name}
							adress={element.adress}
							phone={element.phone}
							email={element.email}
						/>)
					})
				}
			</div>
		</>)
	}
;
