import React from "react";
import ContentList from "../components/ContentList";

const Home = () => {
	return (
		<>
			<header>
				<h1>Site</h1>
			</header>
			<div className="galleryContein">
				<ul className="gallery">
					<ContentList />
				</ul>
			</div>
		</>
	);
};

export default Home;
