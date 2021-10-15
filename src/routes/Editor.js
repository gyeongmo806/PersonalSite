import { ContentState, EditorState, convertToRaw } from "draft-js";
import React, { useEffect, useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../fbase";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import getContents from "../components/getContents";
import { useHistory } from "react-router";

const MyEditor = () => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [title, setTitle] = useState("");
	const history = useHistory();

	const onChangeTitle = (event) => {
		setTitle(event.target.value);
	};
	const onEditorStateChange = (editorState) => {
		console.log(editorState);
		setEditorState(editorState);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { DocsSize } = await getContents();
		await createDoc(DocsSize);

		history.push("/home");
	};
	const createDoc = async (DocsSize) => {
		const docRef = await addDoc(collection(db, "Contents"), {
			contentId: DocsSize + 1,
			ThumbNail: "https://source.unsplash.com/random",
			desc: convertToRaw(editorState.getCurrentContent()),
			Date: Date(),
			Title: title,
		});
		console.log("Document written with ID: ", docRef.id);
	};
	return (
		<>
			<input
				value={title}
				onChange={onChangeTitle}
				placeholder="제목을 입력하세요."
			></input>
			<Editor
				editorState={editorState}
				wrapperClassName="demo-wrapper"
				editorClassName="demo-editor"
				onEditorStateChange={onEditorStateChange}
				localization={{
					locale: "ko",
				}}
			/>

			<button onClick={handleSubmit}>Submit</button>
		</>
	);
};

export default MyEditor;
