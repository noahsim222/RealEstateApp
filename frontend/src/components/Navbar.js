import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import Alert from "./Alert";
import PropTypes from "prop-types";

function Navbar({ auth: { isAuthenticated, loading }, logout }) {
	const authLinks = (
		<a href="#!" className="navbarTop__auth__link" onClick={logout}>
			Logout
		</a>
	);

	const guestLinks = (
		<>
			<Link to="/login" className="navbarTop__auth__link">
				Login
			</Link>
			<Link to="/signup" className="navbarTop__auth__link">
				Sign Up
			</Link>
		</>
	);

	return (
		<div>
			<nav className="navbar">
				<div className="navbarTop">
					<div className="navbarTop__logo">
						<Link className="navbarTop__logo__link" to="/">
							Real Estate
						</Link>
					</div>
					<div className="navbarTop__auth">
						{!loading && (
							<>{isAuthenticated ? authLinks : guestLinks}</>
						)}
					</div>
				</div>
				<div className="navbarBottom">
					<li className="navbarBottom__item">
						<NavLink
							className="navbarBottom__item__link"
							exact
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li className="navbarBottom__item">
						<NavLink
							className="navbarBottom__item__link"
							exact
							to="/listings"
						>
							Listings
						</NavLink>
					</li>
					<li className="navbarBottom__item">
						<NavLink
							className="navbarBottom__item__link"
							exact
							to="/about"
						>
							About
						</NavLink>
					</li>
					<li className="navbarBottom__item">
						<NavLink
							className="navbarBottom__item__link"
							exact
							to="/contact"
						>
							Contact
						</NavLink>
					</li>
				</div>
			</nav>
			<Alert />
		</div>
	);
}

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
