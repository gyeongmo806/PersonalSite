import React from "react";
import Router from "./Router";
import "../mvp.css";
import Nav from "../routes/Nav";

const App = () => {
	return (
		<>
			<Nav />
			<Router />
		</>
	);
};

export default App;
