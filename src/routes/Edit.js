import React from "react";
import { db } from "../fbase";
import { addDoc, collection, getDoc, getDocs } from "@firebase/firestore";
import MyEditor from "./Editor";

// const docRef = addDoc(, {
// 	Date: Date(),
// 	ThumbNail: "Japan",
// 	Title: "Test",
// 	Views: 1,
// 	contentId: Math.random() * 100,
// });

const Edit = () => {
	// Add a new document with a generated id.

	return (
		<>
			<h2>Edit</h2>
			<MyEditor />
		</>
	);
};

export default Edit;
