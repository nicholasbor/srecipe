import { Fragment } from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Redirect,
	Link
} from "react-router-dom";

import NavBar from './components/navBar';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <Fragment>
		<Router>
			<Routes>
				<Route path="/" element={<NavBar />}/>
				<Route path="login" element={<Login />}/>
				<Route path="register" element={<Register />}/>

			</Routes>
								
		</Router>
	</Fragment>
  );
}

export default App;
