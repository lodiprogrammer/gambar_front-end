import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AkunList = () => {
    const [akun, setAkun] = useState([]);

    useEffect(() => {
        getAkun();
    }, []);

    const getAkun = async () => {
        const response = await axios.get("http://localhost:5000/akun");
        setAkun(response.data);
    };

    const deleteAkun = async (id_akun) => {
        try {
            await axios.delete(`http://localhost:5000/akun/${id_akun}`);
            getAkun();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-5">
            <Link to="/add" className="btn btn-success">
                Add New
            </Link>
            <div className="columns is-multiline mt-2">
                {akun.map((akun) => (
                    <div className="column is-one-quarter" key={akun.id_akun}>
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{akun.nama_akun}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{akun.status}</p>
                                    </div>
                                </div>
                            </div>

                            <footer className="card-footer">
                                <Link to={`edit/${akun.id_akun}`} className="card-footer-item">
                                    Edit
                                </Link>
                                <a
                                    onClick={() => deleteAkun(akun.id_akun)}
                                    className="card-footer-item"
                                >
                                    Delete
                                </a>
                            </footer>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default AkunList;
