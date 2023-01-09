import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditAkun = () => {
    const [nama, setNama] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const { id } = useParams();//ngambil dari id url
    const navigate = useNavigate();

    useEffect(() => {
        getAkunById();
    }, []);

    const getAkunById = async () => {
        const response = await axios.get(`http://localhost:5000/akun/${id}`);
        setNama(response.data.nama_akun);
        setPassword(response.data.password_akun);
        setStatus(response.data.status);
    };

    // const loadImage = (e) => {
    //     const image = e.target.files[0];
    //     setFile(image);
    //     setPreview(URL.createObjectURL(image));
    // };

    const updateAkun = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama", nama);
        formData.append("password", password);
        formData.append("status", status);
        try {
            await axios.patch(`http://localhost:5000/akun/${id}`, formData, {
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
                <form onSubmit={updateAkun}>
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
                            <button type="submit" className="btn btn-success">
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditAkun;
