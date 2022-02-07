import { 
    Fragment,
    useState,
	useEffect
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

	const checkAuth = async () => {
		if (localStorage.token) {
			try {
				const res = await fetch("/auth/verify", {
					method: "GET",
					headers: {
						token: localStorage.token
					},
				});
	
				const data = await res.json();
				
				if (data === true) {
					setAuth(true);
				} else {
					setAuth(false);
				}
			} catch (err) {
				console.error(err.message);
			}
		}
	};

	useEffect(() => {
		checkAuth();
	});

	return (
		<Fragment>
			<Router>
				<Routes>
					<Route element={<WithNav isAuth={isAuth} setAuth={setAuth}/>}>
						<Route path="/" element={<Home />}/>
					</Route>
					<Route element={<WithoutNav />}>
						<Route path="signup" element={ !isAuth ? (<SignUp setAuth={setAuth} />) : (<Navigate to="/" />)}/>
						<Route path="signin" element={ !isAuth ? (<SignIn setAuth={setAuth} />) : (<Navigate to="/" />)}/>
					</Route>
				</Routes>
			</Router>
		</Fragment>
	);
}

export default App;
