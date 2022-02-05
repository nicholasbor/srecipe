import React, { Fragment } from 'react';
import { 
    Outlet 
} from 'react-router';
import NavBar from './navBar';

const WithNav = ({isAuth, setAuth}) => {
    return (
        <Fragment>
            <NavBar isAuth={isAuth} setAuth={setAuth}/>
            <Outlet />
        </Fragment>
    );
};

export default WithNav;