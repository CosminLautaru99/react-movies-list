import React, { useState } from "react"
import MovieCard from "./MovieCard"

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
			console.log(data.results)
			setMovies(data.results)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<>
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
			<div className="card-list">
				{movies
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<MovieCard movie={movie} key={movie.id} />
					))}
			</div>
		</>
	)
}
