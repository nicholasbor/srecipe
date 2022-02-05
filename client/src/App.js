import { 
    Fragment,
    useState
} from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import SignIn from './components/signin';
import SignUp from './components/signup';
import WithNav from './components/withNav';
import WithoutNav from './components/withoutNav';
import Home from './components/home'

function App() {
	const [isAuth, setIsAuth] = useState(false)

	const setAuth = (bool) => {
		setIsAuth(bool);
	};

	return (
		<Fragment>
			<Router>
				<Routes>
					<Route element={<WithNav isAuth={isAuth} setAuth={setAuth}/>}>
						<Route path="/" element={<Home />}/>
					</Route>
					<Route element={<WithoutNav />}>
						<Route path="signup" element={ !isAuth ? (<SignUp setAuth={setAuth} />) : (<Navigate to="/" />)}/>
						<Route path="signin" element={ !isAuth ? (<SignIn />) : (<Navigate to="/" />)}/>
					</Route>
				</Routes>
			</Router>
		</Fragment>
	);
}

export default App;
