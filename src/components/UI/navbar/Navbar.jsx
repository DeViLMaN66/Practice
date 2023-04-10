import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__links">
				<Link to="/" className='navbar__item'>About</Link>
				<Link to="/posts" className='navbar__item'>Posts</Link>
				<Link to="/login" className='navbar__item'>Login</Link>
			</div>
		</div>
	);
};

export default Navbar;