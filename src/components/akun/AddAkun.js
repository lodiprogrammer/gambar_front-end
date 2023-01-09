import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAkun = () => {

    const navigate = useNavigate();//untuk navigasi halaman
    const [nama, setNama] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");



    const saveAkun = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama", nama);
        formData.append("password", password);
        formData.append("status", status);

        try {
            await axios.post("http://localhost:5000/akun", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            navigate("/akuntable");
        } catch (error) {
            console.log(error);
        }
    };




    return (



        <div className="columns is-centered mt-5">

            <div className="column is-half">
                <form onSubmit={saveAkun}>

                    <div className="field">
                        <label className="label">Nama</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                placeholder="Nama Akun"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Status</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                placeholder="status"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button
                                type="submit"
                                className="btn btn-success">
                                Simpan
                            </button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddAkun;
