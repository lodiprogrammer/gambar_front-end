import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPesanan = () => {
    const [nomor, setNomor] = useState("");
    const [jenis, setJenis] = useState("");
    const [nama, setNama] = useState("");
    const [harga, setHarga] = useState("");
    const [qty, setQty] = useState("");
    const [total, setTotal] = useState("");
    const { id } = useParams();//ngambil dari id url
    const navigate = useNavigate();

    useEffect(() => {
        getPesananById();
    }, []);

    const getPesananById = async () => {
        const response = await axios.get(`http://localhost:5000/pesanan/${id}`);
        setNomor(response.data.no_pesanan);
        setJenis(response.data.jenis_menu);
        setNama(response.data.nama_menu);
        setHarga(response.data.harga_menu);
        setQty(response.data.qty_pesanan);
        setTotal(response.data.total_pesanan);

    };

    // const loadImage = (e) => {
    //     const image = e.target.files[0];
    //     setFile(image);
    //     setPreview(URL.createObjectURL(image));
    // };

    const updatePesanan = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nomor", nomor);
        formData.append("jenis", jenis);
        formData.append("nama", nama);
        formData.append("harga", harga);
        formData.append("qty", qty);
        formData.append("total", total);
        try {
            await axios.patch(`http://localhost:5000/pesanan/${id}`, formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            navigate("/pesanan");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns is-centered mt-5">

            <div className="column is-half">
                <form onSubmit={updatePesanan}>

                    <div className="field">
                        <label className="label">Nomor</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={nomor}
                                onChange={(e) => setNomor(e.target.value)}
                                placeholder="Nomor"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Nama</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                placeholder="nama"
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
                                placeholder="jenis"
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
                                placeholder="harga"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Qty</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                                placeholder="qty"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Total</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={total}
                                onChange={(e) => setTotal(e.target.value)}
                                placeholder="total"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button
                                type="submit"
                                className="btn btn-success">
                                Update
                            </button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default EditPesanan;
