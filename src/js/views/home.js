import React from "react";
import "../../styles/home.css";
import ContactBox from "../component/contactBox.jsx";
import { Link } from "react-router-dom";

export const Home = () => (
	<>
	<div className="d-grid gap-2 d-md-flex justify-content-md-end container p-0 mb-3">
		<Link to="/Form">
			<button className="btn btn-success" type="button">Add New Contact</button>
		</Link>
	</div>
	<div className="container">
		<ContactBox 
			img="https://c-cl.cdn.smule.com/rs-s77/arr/10/c3/586c5b5a-1edf-4024-addb-7b4b3c90dd4a.jpg"
			name="name1"
			adress="adress1"
			cellphone={9991235482}
			email="email@gmail.com"
		/>
	</div>
	</>
	
);
