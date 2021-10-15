import React, { useEffect, useState } from "react";

const Nav = ({ isLogin }) => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<a href="/home">Home</a>
					</li>
					<li>
						<a href="/edit">Edit</a>
					</li>
					<li>{isLogin ? "" : <a href="/auth">Auth</a>}</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
