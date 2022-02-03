import React from 'react';
import { Fragment } from 'react';
import { 
    Link,
} from 'react-router-dom';

const SignUp = () => {
    return (
        <Fragment>
            <div className='px-4 pt-20 pb-40 bg-gradient-to-r from-moonlit1 via-moonlit2 to-moonlit3 min-h-screen font-Roboto shadow-xl'>
                <header className='max-w-lg mx-auto text-center pb-10 pt-20'>
                    <h1 className='text-4xl font-bold text-white'>
                        <Link to='/'>Srecipe</Link>
                    </h1>
                </header>

                <body className='bg-white max-w-lg mx-auto rounded-lg p-10'>
                    <div>
                        <h3 className='pt-5 pb-10 text-center text-2xl font-bold text-gray-700'> Create your account </h3>
                    </div>

                    <form className='flex flex-col' autoComplete='off'>
                        <div className='relative my-4 bg-white rounded-md border-2 border-gray-300 focus-within:border-sky-500'>
                            <input className='block pb-4 px-3 pt-6 w-full text-md appearance-none focus:outline-none bg-transparent bg-white rounded-md text-gray-700' placeholder=" "  type="email" name="email" id="email" />
                            <label className='absolute top-0 text-md pb-4 px-3 pt-5 -zIndex-1 duration-300 origin-0 rounded text-gray-700 font-bold' for="email">Email</label>
                        </div>


                        <div className='relative my-4 bg-white rounded-md border-2 border-gray-300 focus-within:border-sky-500'>
                            <input className='block pb-4 px-3 pt-6 w-full text-md appearance-none focus:outline-none bg-transparent bg-white rounded-md text-gray-700' placeholder=" "  type="text" name="username" id="username" />
                            <label className='absolute top-0 text-md pb-4 px-3 pt-5 -zIndex-1 duration-300 origin-0 rounded text-gray-700 font-bold' for="username">Username</label>
                        </div>

                        <div className='relative my-4 bg-white rounded-md border-2 border-gray-300 focus-within:border-sky-500'>
                            <input className='block pb-4 px-3 pt-6 w-full text-md appearance-none focus:outline-none bg-transparent bg-white rounded-md text-gray-700' placeholder=" "  type="password" name="password" id="password" />
                            <label className='absolute top-0 text-md pb-4 px-3 pt-5 -zIndex-1 duration-300 origin-0 rounded text-gray-700 font-bold' for="password">Password</label>
                        </div>

                        <button className='shadow-lg hover:shadow-sm bg-gradient-to-r from-moonlit1 via-moonlit2 to-moonlit3 hover:from-cyan-500 hover:to-blue-500 text-white rounded-md font-bold p-2 mt-5 transition duration-300' type="submit">Sign Up</button>
                    </form>
                </body>

                <div className='flex space-x-2 text-white justify-center mt-12'>
                    <p>Have an account?</p>
                    <Link className='font-bold' to='/signin'>Sign in</Link>
                </div>
            </div>
        </Fragment>
    );
};

export default SignUp;
