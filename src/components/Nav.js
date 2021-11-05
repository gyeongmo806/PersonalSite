import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ isLogin }) => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/edit">Edit</Link>
					</li>
					<li>{isLogin ? "" : <Link to="/auth">Auth</Link>}</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
