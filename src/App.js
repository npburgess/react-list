// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	//declare data var and setData function
	const [data, setData] = useState(null);
	//some visually appealing colours..
	let colours = [
		"#FEC868",
		"#C9E4DE",
		"#C6DEF1",
		"#DBCDF0",
		"#F2C6DE",
		"#F7D9C4",
		"#FFADAD"
	];

	//fetch data from API
	useEffect(() => {
		fetch("https://boards.api.huddo.com/v")
			.then((response) => response.json())
			//set modified response data
			.then((data) => setData(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<>
			<h2>Mo’ Boards Mo’ Problems</h2>
			<ol id="ordered-list">
				{data ? (
					// If data exists, create each as list item
					data.map((item, index) => (
						<li
							data-key={colours[index]}
							key={index}
						>
							<h3
								style={{
									color: colours[
										index
									]
								}}
							>
								{item.name}
							</h3>
							<p>
								Version: {item.version}
							</p>
						</li>
					))
				) : (
					<h3>Loading boards...</h3>
				)}
			</ol>
		</>
	);
}

export default App;
