import { EditorState, convertToRaw } from "draft-js";
import React, { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { db, storage } from "../fbase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import getContents from "../components/getContents";
import { useHistory } from "react-router";

const MyEditor = () => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [title, setTitle] = useState("");
	const history = useHistory();
	let images = [];
	const config = {
		image: {
			uploadEnabled: true,
			uploadCallback: async (file) => {
				// Create a root reference
				console.log("upload");
				var name = file.name + Math.round(Math.random() * 100 + 1);

				var storageRef = await ref(storage, "image/" + name);

				await uploadBytes(storageRef, file);
				var url = await getDownloadURL(storageRef);
				// Create a reference to 'mountains.jpg'
				// var mountainsRef = storageRef.child("mountains.jpg");
				images.push(url);
				return { data: { link: url } };
			},

			inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
			previewImage: true,
			alt: { present: false, mandatory: false },
		},
	};

	const onChangeTitle = (event) => {
		setTitle(event.target.value);
	};
	const onEditorStateChange = (editorState) => {
		console.log(editorState);
		setEditorState(editorState);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!title) {
			alert("제목을 입력해주세요");
			return;
		}
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
				toolbar={config}
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
