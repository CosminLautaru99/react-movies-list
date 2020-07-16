import React from "react"
import storedMovies from "./MovieCardDiv"
import MovieCard from "./MovieCard"
let index

const GetIndex = (movie) => {
	/* for (var i = 0; i < storedMovies.length; i++) {
		index = storedMovies[i].index
		if (storedMovies[i] === index) {
			console.log(index)
		}
	}
  console.log(i) */
	for (let i = 0; i < storedMovies.length; i++) {
		if (storedMovies[i].id === movie.id) {
			document.querySelector(".add-button").classList.add("123")
		}
		console.log(movie.id)
	}
	return null
}

export default GetIndex
