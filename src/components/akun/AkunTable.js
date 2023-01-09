import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const AkunTable = () => {
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




        <div className="card">
            <div className="card-body">
                <div className="container mb-2 mt-2">
                    <div className="d-flex justify-content-start">
                        <Link to="/akun/add" className="btn btn-success">
                            Add ++
                        </Link>
                    </div>
                    <div className="py-4">


                        <table className="table table-hover">
                            <thead className="table-primary ">
                                <tr >
                                    <th scope="col">No</th>
                                    <th scope="col">Nama AKUN</th>
                                    <th scope="col">STATUS</th>
                                    <th scope="col" className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {akun.map((akun, i) => (

                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{akun.nama_akun}</td>
                                        <td>{akun.status}</td>
                                        <td className="align-center">
                                            {/* <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button class="btn btn-primary me-md-2" type="button">Button</button>
                                        <button class="btn btn-primary" type="button">Button</button>
                                    </div> */}
                                            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                                                <Link to={`edit/${akun.id_akun}`} className="btn btn-outline-warning">
                                                    Edit
                                                </Link>
                                                <a
                                                    onClick={() => deleteAkun(akun.id_akun)}
                                                    className="btn btn-outline-danger"
                                                >
                                                    Delete
                                                </a>

                                            </div>
                                        </td>
                                    </tr>

                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* <div class="border border-danger border-5">
                <h1 class="mt-4">Kanan Sidebar</h1>
                <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                <p>
                    Make sure to keep all page content within the
                    <code>#page-content-wrapper</code>
                    . The top navbar is optional, and just for demonstration. Just create an element with the
                    <code>#sidebarToggle</code>
                    ID which will toggle the menu when clicked.
                </p>
            </div> */}
        </div >
    );
};

export default AkunTable;
