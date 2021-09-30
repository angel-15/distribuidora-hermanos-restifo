import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>desde 1994</h1>
		<p>
			<img src={rigoImage} />
		</p>
	</div>
);
