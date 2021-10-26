import React from "react";

const ImageList = ({ imageUrls }) => {
	console.log("ImageListUp");
	const list = imageUrls.map((url) => {
		return (
			<li>
				<h3>hello</h3>
				<img src={url} alt="thumbnail" width="100" height="100" />
			</li>
		);
	});

	return <ul>{list}</ul>;
};

export default ImageList;
