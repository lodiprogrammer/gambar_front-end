import React from "react";
import { Link } from "react-router-dom";



function nav() {
    return (


        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="akuntable" className="nav-link">
                                Akun
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="SideBar" className="nav-link">
                                sidebar
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


        </div>

    )
}

export default nav;
