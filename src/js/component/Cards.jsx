import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function Cards(props) {
    return (
        <div className="container bg-dark">
            <div className="card bg-black text-white">
                <div className="card-body text-center">
                    <h1>{props.icon ? <FontAwesomeIcon icon={faClock} /> : props.num}</h1>
                </div>
            </div>
        </div>
    );
}

export default Cards;