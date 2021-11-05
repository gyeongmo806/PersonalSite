import { EditorState, convertToRaw } from "draft-js";
import React, { useState, useEffect } from "react";
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
	const [imageUrls, setImageUrls] = useState([]);

	const history = useHistory();
	let temp = [];
	const imageUpload = async (file) => {
		console.log("upload");
		console.log(file);
		var name = file.name + Math.round(Math.random() * 100 + 1);

		var storageRef = await ref(storage, "image/" + name);

		await uploadBytes(storageRef, file);
		var url = await getDownloadURL(storageRef);

		return { data: { link: url } };
	};
	const config = {
		image: {
			uploadEnabled: true,
			uploadCallback: imageUpload,
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
		if (editorState.getLastChangeType() === "insert-fragment") {
			setImageUrls(temp);
		}

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
			ThumbNail: imageUrls[0]
				? imageUrls[0]
				: "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
			desc: convertToRaw(editorState.getCurrentContent()),
			Date: Date(),
			Title: title,
		});
		console.log("Document written with ID: ", docRef.id);
	};
	useEffect(() => {
		document.getElementsByClassName("");
	});

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
