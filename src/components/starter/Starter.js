import React from 'react'
import Bulbizarre from "./Bublizarre";
import Salameche from "./Salameche";
import Carapuce from "./Carapuce";
import {Link} from "react-router-dom";

const Starter = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-12 text-center">
                    <h2>Choisissez votre pokemon de départ</h2>
                </div>
                <div className="col-md-4 col-lg-4">
                    <Bulbizarre/>
                </div>
                <div className="col-md-4 col-lg-4">
                    <Salameche/>
                </div>
                <div className="col-md-4 col-lg-4">
                    <Carapuce/>
                </div>
                <div className="col-md-12 col-lg-12 text-center">
                    <Link to={`/list`}>
                        <p>Voir la liste de tous les pokemons</p>
                    </Link>
                </div>
            </div>

        </div>
    )
};

export default Starter