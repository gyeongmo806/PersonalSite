import React, { useEffect } from "react";
import { useState } from "react";

const ImageList = (props) => {
	const [images, setImages] = useState([]);
	const create_list = () => {
		console.log(props.imageUrls);
		const list = props.imageUrls.map((url) => {
			return (
				<li>
					<h3>hello</h3>
					<img src={url} alt="thumbnail" width="100" height="100" />
				</li>
			);
		});
		setImages(list);
	};
	useEffect(() => create_list(), []);

	return <>{images}</>;
};

export default ImageList;
