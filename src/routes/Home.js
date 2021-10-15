import React, { useEffect, useState } from "react";
import getContents from "../components/getContents";

const Home = () => {
	const [contentList, setContentList] = useState([]);

	const loadContents = async () => {
		const { contents } = await getContents();
		console.log(contents);
		const List = contents.map((content) => (
			<li key={content.data().contentId}>
				<img
					src={content.data().ThumbNail}
					alt="thumb"
					width="200"
					height="auto"
				></img>
				<p></p>
				<span>
					<a href={content.data().ThumbNail}>
						{content.data().Title}
					</a>
				</span>
			</li>
		));
		setContentList(List);
	};
	useEffect(() => {
		console.log("useEffect");
		loadContents();
	}, []);

	return (
		<>
			<header>
				<h1>Personal Site</h1>
			</header>
			<div id="gallery">
				<ul>{contentList}</ul>
			</div>
		</>
	);
};

export default Home;
