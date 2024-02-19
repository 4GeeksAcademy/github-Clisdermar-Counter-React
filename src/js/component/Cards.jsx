import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { func } from "prop-types";

function Cards(props) {

    return <>
        <div className="container bg-dark">

            <div class="card bg-black text-white">
                <div class="card-body">
                    <h1>{props.icon ? <FontAwesomeIcon icon={faClock} /> : props.num}</h1>
                </div>
            </div>
        </div>
    </>
}


export default Cards;