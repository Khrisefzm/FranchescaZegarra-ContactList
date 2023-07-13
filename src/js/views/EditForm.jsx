import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { seeContact } from "../store/Slice/contactsSlice";

export const EditForm = () => {

    const param = useParams();
    const contacts = useSelector((store) => store.contact.value);
    
    const contact = contacts.filter(contact => contact.id == param.id);
    
    const [form, setForm] = useState({
        full_name: contact.full_name,
        email:contact.email,
        phone: contact.phone,
        address:contact.address
    });

    const changeInput = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sentForm = (e) => {
        e.preventDefault();
        fetch(`https://assets.breatheco.de/apis/fake/contact/${param.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...form, agenda_slug: "khrisefzm"})
        })
        .then(response => {return response.json();})
        .then(data => {
            console.log(data);
            fetch('https://assets.breatheco.de/apis/fake/contact/agenda/khrisefzm')
            .then (response => {return response.json();})
            .then (data => {dispatch(seeContact(data));
            console.log(data)})
            .catch (error => console.log(error))
        })
        .catch(error => console.log(error));

        //To return the route before
        navigate("/");
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