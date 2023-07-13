import React from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import {ContactForm} from "./views/Form.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { seeContact } from "./store/Slice/contactsSlice";
import { EditForm } from "./views/EditForm.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const dispatch = useDispatch();

	//create an agenda
	/*useEffect(() => {
		fetch('https://assets.breatheco.de/apis/fake/contact/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: 	JSON.stringify({
					full_name: "Dave Bradley",
					email: "dave@gmail.com",
					agenda_slug: "khrisefzm",
					address:"47568 NW 34ST, 33434 FL, USA",
					phone:"7864445566"
			})
        })
        .then(response => {return response.json();})
        .then(data => console.log(data))
        .catch(error => console.log(error));	
	}, [])*/
	

	useEffect(() => {
		fetch('https://assets.breatheco.de/apis/fake/contact/agenda/khrisefzm')
		.then (response => {return response.json();})
		.then (data => {dispatch(seeContact(data));
		console.log(data)})
		.catch (error => console.log(error))
	}, []);
	

	return (

		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Form" element={<ContactForm />} />
						<Route path="/Edit/:id" element={<EditForm/>} />
						<Route path="/demo" element={<Demo/>} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
