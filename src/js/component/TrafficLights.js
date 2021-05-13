import React from "react";
import { useState } from "react";
import "../../styles/index.scss";
const TrafficLights = () => {
	const [red, setRed] = useState("red ");
	const [orange, setOrange] = useState("orange");
	const [green, setGreen] = useState("green");
	return (
		<div className="container-fluid">
			<div className="top"></div>
			<div className="container_traffic">
				<div
					className={red}
					onClick={() => {
						setRed("redShadow");
						setGreen(green);
					}}></div>
				<div
					className={orange}
					onClick={() => setOrange("orangeShadow")}></div>
				<div
					className={green}
					onClick={() => setGreen("greenShadow")}></div>
			</div>
		</div>
	);
};

export default TrafficLights;
