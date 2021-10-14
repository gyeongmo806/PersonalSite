import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../fbase";

async function handleOnClick(event) {
	event.preventDefault();
	const docRef = await addDoc(collection(db, "Contents"), {
		Date: Date(),
		ThumbNail: "Japan",
		Title: "Test",
		Views: 1,
		contentId: Math.random() * 100,
	});
	console.log("Document written with ID: ", docRef.id);
}

const Nav = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<a href="/home">Home</a>
					</li>
					<li>
						<a href="/auth">Auth</a>
					</li>
					<li>
						<a href="/edit" onClick={handleOnClick}>
							Edit
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
