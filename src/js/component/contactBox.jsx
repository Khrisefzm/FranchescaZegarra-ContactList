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
                    <div type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-trash-fill"></i>
                    </div> 
                </div>
            </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                If you delete this thing the entery universe will go down!
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary">Oh no!</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Yes baby!</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
    
};

