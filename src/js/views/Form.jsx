import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addContact } from "../store/Slice/contactsSlice";
import { useDispatch } from 'react-redux';

export const ContactForm = () => {
    const [form, setForm] = useState({
        name:"",
        email:"",
        phone:0,
        adress:""
    });

    const changeInput = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }
    console.log(form);
    
    const dispatch = useDispatch()
    
    const sentForm = (e) => {
        e.preventDefault();
        const newContact = form;
        dispatch(addContact(newContact));
    }

    return (
        <div className="container">
            <h1 className="text-center"> Contact information </h1>
            <form onSubmit={sentForm}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" name="name" onChange={changeInput}/>
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
                    <input type="text" className="form-control" name="adress" onChange={changeInput}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Link to="/">
                or get back to contacts
            </Link>
        </div>
    )
}