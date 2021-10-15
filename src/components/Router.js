import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Edit from "../routes/Edit";
import Nav from "../routes/Nav";
const AppRouter = ({ isLogin, setIsLogin }) => {
	return (
		<>
			<Nav isLogin={isLogin} />
			<Router>
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/auth">
						{isLogin ? (
							<Home />
						) : (
							<Auth isLogin={isLogin} setIsLogin={setIsLogin} />
						)}
					</Route>
					<Route path="/edit">
						{isLogin ? (
							<Edit />
						) : (
							<Auth isLogin={isLogin} setIsLogin={setIsLogin} />
						)}
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default AppRouter;
