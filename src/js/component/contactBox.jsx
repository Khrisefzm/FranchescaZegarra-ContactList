import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contactId } from "../store/Slice/saveIdSlice";

export default function ContactBox({name, address, phone, email, id}) {

    function deleteContact(id) {
        fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
            method: "DELETE"
        })
        .then (response => {return response.json()})
        .then (data => console.log(data))
        .catch (error => console.log(error))
    }

    const dispatch = useDispatch();

    return (
        <>
            <div className="row border p-3" id={id}>
                <div className="col-2">
                    <img src="https://c-cl.cdn.smule.com/rs-s77/arr/10/c3/586c5b5a-1edf-4024-addb-7b4b3c90dd4a.jpg" className="perfil-image" />
                </div>
                <div className="col">
                    <h3> {name} </h3>
                    <p className="m-0 p-0 mt-1"> <i className="bi bi-geo-alt-fill"></i> {address} </p>
                    <p className="m-0 p-0 mt-1"> <i className="bi bi-telephone-fill"></i> {phone} </p>
                    <p className="m-0 p-0 mt-1"> <i className="bi bi-envelope-fill"></i> {email} </p>
                </div>
                <div className="col-1">
                    <Link to={`/Edit/${id}`} className="pencil" >
                        <i className="bi bi-pencil-fill"></i>
                    </Link>
                </div>
                <div className="col-1">
                    <div type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                        <i className="bi bi-trash-fill"></i>
                    </div> 
                </div>
            </div>
            <div className="modal fade" tabIndex="-1" aria-labelledby="exampleModalLabel" id="exampleModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Are you sure?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            If you delete this thing the entery universe will go down!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Oh no!</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{console.log(id); deleteContact(id)}}>Yes baby!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
};

