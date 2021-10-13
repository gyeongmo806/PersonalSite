import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Edit from "../routes/Edit";

const AppRouter = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/auth">
						<Auth />
					</Route>
					<Route path="/edit">
						<Edit />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default AppRouter;
