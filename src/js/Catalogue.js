import React from "react"
import logo from "../media/headerlogo.png"
import { NavLink } from "react-router-dom"

import movies from "./SearchMovies"
/* import MovieCard from "./MovieCard" */
/* import movies from "./SearchMovies" */
/* import SearchMovies from "./SearchMovies" */

const Catalogue = () => {
	function TestFunc() {
		console.log(movies)
		return (
			<>
				<button onClick={TestFunc}>Click</button>
			</>
		)
	}
	return (
		<>
			<header className="header-banner">
				<img src={logo} alt="logo" className="header-logo"></img>
				<ul className="navigation">
					<li className="nav-element">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="nav-element active">
						<NavLink to="/Catalogue">Catalogue</NavLink>
					</li>
					<li className="nav-element">Log In</li>
				</ul>
			</header>

			<div className="container">
				<TestFunc />
			</div>
		</>
	)
}

export default Catalogue

/* console.log(movies.length)

let i
let movie_index
const card_list_div = document.querySelector("#card-list")

function findIndex() {
	for (i = 0; i < movies.length; i++) {
		;(function (index) {
			card_list_div.children[i].onmouseover = function () {
				movie_index = index
			}
		})(i)
	}
	console.log(movies.length)
	console.log(movie_index)
} */

/* 
function testFunc() {
	console.log(movies.lenght)
	return (
		<>
			<button onClick={testFunc}>Click</button>
		</>
	)
} */
