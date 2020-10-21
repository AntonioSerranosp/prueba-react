import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { fecthPost } from '../../helpers/fetch';


export const Home = () => {
   
    return (
        <div className="container">
            <div className="col-12">
                <img src="./assets/logo.png" className="img-fluid" alt="Gaspi"></img>
            </div>
            <div>
                <h2>Bienvenido Canditato 01 </h2>

            </div>

            <div>
                <button type="button" className="btn btn-outline-primary btn-lg">
                <Link to={'/productos'}>
                        continuar
                </Link>
                </button>
            </div>

            <div className="row"> 
                <h3>Verison 0.0.1</h3>
            </div>
        </div>
    )
}
