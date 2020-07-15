import React, { useState } from "react"
import MovieCard from "./MovieCard"
import logo from "../media/headerlogo.png"
import { Link } from "react-router-dom"

export default function SearchMovies() {
	//states- input query, movies

	const [query, setQuery] = useState("")
	const [movies, setMovies] = useState([])

	const SearchMovies = async (e) => {
		e.preventDefault()

		const url = `https://api.themoviedb.org/3/search/movie?
		api_key=1feee4575bbd364d882f83c7be694477&language=en-US&query=${query}`

		try {
			const res = await fetch(url)
			const data = await res.json()

			/* console.log(data.results) */
			setMovies(data.results)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<>
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

			<div className="container">
				<h1 className="title">React Movie Search</h1>
				<form className="form" onSubmit={SearchMovies}>
					<label className="label" htmlFor="query">
						Movie Name
					</label>
					<input
						className="input"
						type="text"
						name="query"
						placeholder="i.e. Jurassic Park"
						value={query}
						onChange={(e) => {
							setQuery(e.target.value)
						}}
					></input>
					<button className="button" type="submit">
						Search
					</button>
				</form>

				<div className="card-list" id="card-list">
					{movies
						.filter((movie) => movie.poster_path)
						.map((movie) => (
							<MovieCard movie={movie} key={movie.id} />
						))}
				</div>
			</div>
		</>
	)
}
