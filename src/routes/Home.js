import React, { useEffect, useState } from "react";
import getContents from "../components/getContents";

const Home = () => {
	const [contentList, setContentList] = useState([]);

	const loadContents = async () => {
		const { contents } = await getContents();
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
					<a href={`/content/${content.id}`}>
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
				<h1>Site</h1>
			</header>
			<div className="galleryContein">
				<ul className="gallery">{contentList}</ul>
			</div>
		</>
	);
};

export default Home;
