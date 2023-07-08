import React from "react";
import { Link } from "react-router-dom";

export const ContactForm = () => (
    <div className="container">
        <h1 className="text-center"> Contact information </h1>
        <form>
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="number" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Adress</label>
                <input type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Link to="/">
			or get back to contacts
		</Link>
    </div>
)