import { Fragment } from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	Link
} from "react-router-dom";

import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
		<Router>
			<NavBar />
		</Router>
	</Fragment>
  );
}

export default App;
