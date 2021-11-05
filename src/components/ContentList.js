import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getContents from "./getContents";
export default function ContentList() {
	const [contents, setContents] = useState([]);

	const loadContents = async () => {
		console.log("Load Contents List");
		const { contents } = await getContents();
		setContents(contents);
	};
	useEffect(() => {
		loadContents();
	}, []);
	return (
		<>
			{contents.map((content) => (
				<li key={content.data().contentId}>
					<img
						src={content.data().ThumbNail}
						alt="thumb"
						width="auto"
						height="250"
					></img>
					<p></p>
					<span>
						<Link to={`/content/${content.id}`}>
							{content.data().Title}
						</Link>
					</span>
				</li>
			))}
		</>
	);
}
