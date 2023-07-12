import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

export const EditForm = () => {

    const contacts = useSelector((store) => store.contact.value);
    const id = useSelector(store => store.saveId.value);
    
    const contact = contacts.filter(contact => contact.id == id)
    
    const [form, setForm] = useState({
        full_name: contact.full_name,
        email:contact.email,
        phone: contact.phone,
        address:contact.address
    });

    const changeInput = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }
    console.log(form);
    
    const sentForm = (e) => {
        e.preventDefault();
        fetch(`https://assets.breatheco.de/apis/fake/contact/${contact[0].id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...form, agenda_slug: "khrisefzm"})
        })
        .then(response => {return response.json();})
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <h1 className="text-center"> Edit contact information </h1>
            <form onSubmit={sentForm}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" name="full_name" onChange={changeInput}  />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" onChange={changeInput}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="number" className="form-control" name="phone" onChange={changeInput} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" onChange={changeInput} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Link to="/">
                or get back to contacts
            </Link>
        </div>
    )
}