import React from "react";
import { Link } from "react-router-dom";

export default function ContactBox({img, name, adress, cellphone, email}) {
    return (
        <>
            <div className="row border p-3">
                <div className="col-2">
                    <img src={img} className="perfil-image" />
                </div>
                <div className="col">
                    <h3> {name} </h3>
                    <p className="m-0 p-0 mt-1"> <i className="bi bi-geo-alt-fill"></i> {adress} </p>
                    <p className="m-0 p-0 mt-1"> <i className="bi bi-telephone-fill"></i> {cellphone} </p>
                    <p className="m-0 p-0 mt-1"> <i class="bi bi-envelope-fill"></i> {email} </p>
                </div>
                <div className="col-1">
                    <Link to="/Form" className="pencil">
                        <i className="bi bi-pencil-fill"></i>
                    </Link>
                </div>
                <div className="col-1">
                    <div type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-trash-fill"></i>
                    </div> 
                </div>
            </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                If you delete this thing the entery universe will go down!
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Oh no!</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Yes baby!</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
    
};

