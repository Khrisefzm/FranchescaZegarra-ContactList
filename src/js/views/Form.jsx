import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../store/Slice/contactsSlice";

export const ContactForm = () => {
    const [form, setForm] = useState({
        full_name:"",
        email:"",
        phone: "",
        address:""
    });

    const changeInput = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sentForm = (e) => {
        e.preventDefault();
        fetch('https://assets.breatheco.de/apis/fake/contact/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...form, agenda_slug: "khrisefzm"})
        })
        .then(response => {
            if (response.ok) {dispatch(addContact(form))}
            return response.json();
        })
        .then(data => {console.log(data);})
        .catch(error => console.log(error));

        navigate("/"); //To go back
    }

    return (
        <div className="container">
            <h1 className="text-center"> Contact information </h1>
            <form onSubmit={sentForm} action="/">
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" name="full_name" onChange={changeInput}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" onChange={changeInput}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="number" className="form-control" name="phone" onChange={changeInput}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Adress</label>
                    <input type="text" className="form-control" name="address" onChange={changeInput}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Link to="/">
                or get back to contacts
            </Link>
        </div>
    )
}