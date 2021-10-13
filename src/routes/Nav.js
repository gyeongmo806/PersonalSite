import React from "react";

function handleOnClick(event) {
	event.preventDefault();
}

const Nav = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<a href="/home">Home</a>
					</li>
					<li>
						<a href="/auth">Auth</a>
					</li>
					<li>
						<a href="/edit" onClick={handleOnClick}>
							Edit
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
