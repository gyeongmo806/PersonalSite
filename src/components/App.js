import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../fbase";
import Router from "./Router";

const App = () => {
	const [init, setInit] = useState(false);
	console.log(false);
	const [isLogin, setIsLogin] = useState(false);
	console.log("update");
	useEffect(() => {
		console.log(isLogin);
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsLogin(true);
			} else {
				setIsLogin(false);
			}
			setInit(true);
		});
	});
	return (
		<>
			{init ? (
				// <Nav isLogin={isLogin} />
				<Router isLogin={isLogin} setIsLogin={setIsLogin} />
			) : (
				<></>
			)}
		</>
	);
};

export default App;
