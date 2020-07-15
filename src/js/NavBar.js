import React from "react"
import logo from "../media/headerlogo.png"
import { Link } from "react-router-dom"
/* import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom"
import Catalogue from "../catalogue.html"
import YourComponent from "../catalogue.html" */

export default function NavBar() {
	return (
		<header className="header-banner">
			<img src={logo} alt="logo" className="header-logo"></img>
			<ul className="navigation">
				<li className="nav-element active">
					<Link to="/">Home</Link>
				</li>
				<li className="nav-element">
					<Link to="/Catalogue">Catalogue</Link>
				</li>
				<li className="nav-element">Log In</li>
			</ul>
		</header>
	)
}
