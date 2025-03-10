import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Header() {
    const categories = useSelector(state => state.categories)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>

                            {
                                categories.length > 0 && categories.map((c, i) => (
                                    <li className="nav-item" key={i}>
                                        <Link className="nav-link text-capitalize" to={`/category/${c.toLowerCase()}`}>{c}</Link>
                                    </li>

                                ))
                            }



                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}