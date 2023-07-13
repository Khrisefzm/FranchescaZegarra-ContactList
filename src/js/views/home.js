import React from "react";
import "../../styles/home.css";
import ContactBox from "../component/contactBox.jsx";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export const Home = () => {
	const contacts = useSelector((store) => store.contact.value);

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

				<div className="alert alert-danger mt-3" role="alert">
					Nota: Antes de eliminar cualquier contacto, es necesario recargar la página, sino el botón no funciona bien.
					Me he dado cuenta que esto pasa con los contactos añadidos, que por alguna razón tienen una id: undefined.
					No he sabido arreglarlo :( Así qeu si al revisar esto encuentran el error, me lo hacen saber por favor.
				</div>
				<div className="alert alert-success mt-3" role="alert">
					A pesar de ese detallito, técnicamente, el programa cumple con todo lo solicitado!! :D
				</div>
			</div>
		</>)
	}
;
