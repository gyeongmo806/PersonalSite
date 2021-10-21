import { ContentState, EditorState, convertToRaw } from "draft-js";
import React, { useEffect, useState } from "react";
import { getDoc, collection, doc } from "@firebase/firestore";
import { db } from "../fbase";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useHistory } from "react-router";
import draftToHtml from "draftjs-to-html";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const ViewContent = () => {
	const [html, setHtml] = useState("");
	const [title, setTitle] = useState("");
	let { id } = useParams();

	const getContent = async () => {
		const snapShot = await getDoc(doc(db, "Contents", id));
		console.log(snapShot.data());
		const rawTohtml = draftToHtml(snapShot.data().desc);
		setTitle(snapShot.data().Title);
		setHtml(ReactHtmlParser(rawTohtml));
	};
	useEffect(() => {
		getContent();
	}, []);

	return (
		<>
			<h2>{title}</h2>
			{html}
		</>
	);
};

export default ViewContent;
