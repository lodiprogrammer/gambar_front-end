import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddPesanan = () => {

    const navigate = useNavigate();//untuk navigasi halaman
    const [nomor, setNomor] = useState("");
    const [jenis, setJenis] = useState("");
    const [nama, setNama] = useState("");
    const [harga, setHarga] = useState("");
    const [qty, setQty] = useState("");
    const [total, setTotal] = useState("");

    const [akun, setAkun] = useState([]);

    useEffect(() => {
        getAkun();
    }, []);

    const getAkun = async () => {
        const response = await axios.get("http://localhost:5000/akun");
        setAkun(response.data);
    };

    const savePesanan = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nomor", nomor);
        formData.append("nama", nama);
        formData.append("jenis", jenis);
        formData.append("harga", harga);
        formData.append("qty", qty);
        formData.append("total", total);

        try {
            await axios.post("http://localhost:5000/pesanan", formData, {
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

                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Cari Pesanan
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
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
                                                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                                                        <Link to={`edit/${akun.id_akun}`} className="btn btn-outline-warning">
                                                            Edit
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>

                                        ))}

                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>



                <form onSubmit={savePesanan}>

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
                                Simpan
                            </button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddPesanan;
