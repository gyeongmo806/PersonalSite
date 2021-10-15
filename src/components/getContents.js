import { db } from "../fbase";
import { collection, getDocs } from "firebase/firestore";

const getContents = async () => {
	const contents = [];
	console.log("fetchGallery");
	const snapShot = await getDocs(collection(db, "Contents"));
	const DocsSize = await snapShot.size;
	await snapShot.forEach((content) => {
		contents.push(content);
		console.log(content);
	});
	return { DocsSize, contents };
};

export default getContents;
