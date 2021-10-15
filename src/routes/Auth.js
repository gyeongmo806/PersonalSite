import React from "react";
import { useState } from "react/cjs/react.development";
import { auth } from "../fbase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";
const Auth = ({ isLogin, setIsLogin }) => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleOnChange = (e) => {
		if (e.target.name === "email") {
			setEmail(e.target.value);
		} else {
			setPassword(e.target.value);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// ...
				setIsLogin(true);
				console.log(isLogin);
				// history.push("/home");
				// sessionStorage.setItem("uid", user.uid);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	return (
		<>
			<form>
				<input
					value={email}
					type="text"
					name="email"
					placeholder="email"
					onChange={handleOnChange}
				/>
				<input
					value={password}
					type="password"
					name="password"
					placeholder="password"
					onChange={handleOnChange}
				/>
				<button onClick={handleSubmit}>Submit</button>
			</form>
		</>
	);
};

export default Auth;
