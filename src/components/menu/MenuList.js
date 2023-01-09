import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MenuList = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        getMenu();
    }, []);

    const getMenu = async () => {
        const response = await axios.get("http://localhost:5000/menu");
        setMenu(response.data);
    };

    const deleteMenu = async (id_menu) => {
        try {
            await axios.delete(`http://localhost:5000/menu/${id_menu}`);
            getMenu();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-5">
            <Link to="/menu/add" className="button is-success">
                Add New
            </Link>
            <div className="columns is-multiline mt-2">
                {menu.map((menu) => (
                    <div className="column is-one-quarter">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={menu.url} alt="Image" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{menu.nama_menu}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{menu.harga_menu}</p>
                                    </div>
                                </div>
                            </div>

                            <footer className="card-footer">
                                <Link to={`edit/${menu.id_menu}`} className="card-footer-item">
                                    Edit
                                </Link>
                                <a
                                    onClick={() => deleteMenu(menu.id_menu)}
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

export default MenuList;
