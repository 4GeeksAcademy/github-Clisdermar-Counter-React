import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Cards from "./Cards.jsx";
import { icon } from "@fortawesome/fontawesome-svg-core";

//create your first component
const Home = (props) => {
	return (
		<div className="d-flex justify-content-center align-items-center">

			<Cards icon />
			<Cards num={Math.floor((props.seconds % 1000000) / 100000)} />
			<Cards num={Math.floor((props.seconds % 100000) / 10000)} />
			<Cards num={Math.floor((props.seconds % 10000) / 1000)} />
			<Cards num={Math.floor((props.seconds % 1000) / 100)} />
			<Cards num={Math.floor((props.seconds % 100) / 10)} />
			<Cards num={props.seconds % 10} />

		</div>


	);
};

export default Home;
