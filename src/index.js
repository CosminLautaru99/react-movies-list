import React from "react"
import ReactDOM from "react-dom"
import "./style/App.css"
import "./style/index.css"
import "./style/navbar.css"
import SearchMovies from "./js/SearchMovies"

/* import AddMovies from "./js/AddMovies" */

import { BrowserRouter, Route, Switch } from "react-router-dom"

import Catalogue from "./js/Catalogue"

class Main extends React.Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={SearchMovies}></Route>
						<Route path="/Catalogue" component={Catalogue}></Route>
						{/* <div className="page-containter">
							<SearchMovies />
						</div> */}
					</Switch>
				</BrowserRouter>
			</>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById("root"))
