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
import SignIn from './components/signin';
import SignUp from './components/signup';

function App() {
  return (
    <Fragment>
		<Router>
			<Routes>
				<Route path="/" element={<NavBar />}/>
				<Route path="signin" element={<SignIn />}/>
				<Route path="signup" element={<SignUp />}/>

			</Routes>
								
		</Router>
	</Fragment>
  );
}

export default App;
