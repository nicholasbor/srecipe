import React from 'react';
import { 
    Link,
} from 'react-router-dom';

const NavBar = ({isAuth, setAuth}) => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        setAuth(false);
    };
    
    return (
        <nav className="flex justify-between h-16 bg-black text-white items-center">
            <Link className="pl-8" to='/'>Srecipe</Link>
            <div className="px-4 cursor-pointer md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                {!isAuth ? (<Link className="p-4" to="/signin">Sign In</Link>) : (<Link className="p-4" to="/profile">Profile</Link>)}
                {!isAuth ? (<Link className="p-4" to="/signup">Sign Up</Link>) : (<button onClick={handleLogout}>Log Out</button>)}
            </div>
        </nav>
    );
};

export default NavBar;
