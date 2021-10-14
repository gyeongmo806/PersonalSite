import React, { useEffect, useState } from "react";
import { db, storage } from "../fbase";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "@firebase/storage";

const Home = () => {
	const [contentList, setContentList] = useState([]);
	const contents = [];

	const fetchGallery = async () => {
		console.log("fetchGallery");
		const snapShot = await getDocs(collection(db, "Contents"));
		await snapShot.forEach((content) => {
			contents.push(content);
		});
		const List = contents.map((content) => (
			<li key={content.data().contentId}>
				<img
					src={content.data().ThumbNail}
					alt="thumb"
					width="200"
					height="auto"
				></img>
				<p></p>
				<span>{content.data().Title}</span>
			</li>
		));
		setContentList(List);
	};

	useEffect(() => {
		console.log("useEffect");
		fetchGallery();
	}, []);

	return (
		<>
			<header>
				<h1>Gyeongmo Personal Site</h1>
			</header>
			<div id="gallery">
				<ul>{contentList}</ul>
			</div>
		</>
	);
};

export default Home;
