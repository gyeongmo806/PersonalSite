import React, { useEffect, useState } from "react";
import { db, storage } from "../fbase";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "@firebase/storage";
const contents = [];

const Home = () => {
	var [contentList, setContentList] = useState([]);
	const getContents = async () => {
		try {
			const querySnapshot = await getDocs(collection(db, "Contents"));
			querySnapshot.forEach(async (content) => {
				console.log(content.data());
				const contentData = content.data();
				const storageRef = ref(storage, contentData.ThumbNail);
				const url = await getDownloadURL(storageRef);
				console.log("hello");
				contents.push(
					<li key={contentData.id}>
						<img
							src={url}
							alt="img"
							width="200"
							height="auto"
						></img>
						<a href={url}>{contentData.Title}</a>
					</li>
				);
				setContentList(contents);
			});

			console.log(contentList);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		getContents();
	});

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
