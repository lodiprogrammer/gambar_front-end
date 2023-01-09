import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditMenu = () => {

    const { id } = useParams();
    const [gambar, setGambar] = useState("");
    const [nama, setNama] = useState("");
    const [jenis, setJenis] = useState("");
    const [harga, setHarga] = useState("");
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getMenuById();
    }, []);

    const getMenuById = async () => {
        const response = await axios.get(`http://localhost:5000/menu/${id}`);
        setNama(response.data.nama_menu);
        setJenis(response.data.jenis_menu);
        setHarga(response.data.harga_menu);
        setGambar(response.data.gambar);
        setPreview(response.data.url);
    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setGambar(image);
        setPreview(URL.createObjectURL(image));
    };

    const updateMenu = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("gambar", gambar);
        formData.append("nama", nama);
        formData.append("jenis", jenis);
        formData.append("harga", harga);
        try {
            await axios.patch(`http://localhost:5000/menu/${id}`, formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            navigate("/menu");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns is-centered mt-5">
            <div className="column is-half">
                <form onSubmit={updateMenu}>
                    <div className="field">
                        <label className="label">Nama</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                placeholder="Product Name"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Jenis</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={jenis}
                                onChange={(e) => setJenis(e.target.value)}
                                placeholder="Product Name"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Harga</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}
                                placeholder="Product Name"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Gambar</label>
                        <div className="control">
                            <div className="file">
                                <label className="file-label">
                                    <input
                                        type="file"
                                        className="file-input"
                                        onChange={loadImage}
                                    />
                                    <span className="file-cta">
                                        <span className="file-label">Choose a file...</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {preview ? (
                        <figure className="image is-128x128">
                            <img src={preview} alt="Preview Image" />
                        </figure>
                    ) : (
                        ""
                    )}

                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-success">
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditMenu;
