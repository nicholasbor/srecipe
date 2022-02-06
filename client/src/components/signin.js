import React from 'react';
import { 
    Fragment,
    useState
} from 'react';
import { 
  Link,
} from 'react-router-dom';

const SignIn = ({ setAuth }) => {

    const [details, setDetails] = useState({
        email: "",
        user_password: ""
    });

    const { email, user_password } = details

    const handleChange = (e) => {
        setDetails({
            ...details, 
            [e.target.name]: e.target.value
        });
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const body = { email, user_password };

            const res = await fetch("/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body),
            });

            const data = await res.json();
            
            localStorage.setItem('token', data.token);

            setAuth(true);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
        <div className='px-4 pt-20 pb-40 bg-gradient-to-r from-moonlit1 via-moonlit2 to-moonlit3 min-h-screen font-Roboto shadow-xl'>
            <header className='max-w-lg mx-auto text-center pb-10 pt-20'>
                <h1 className='text-4xl font-bold text-white'>
                    <Link to='/'>Srecipe</Link>
                </h1>
            </header>

            <div className='bg-white max-w-lg mx-auto rounded-lg p-10'>
                <div>
                    <h3 className='py-5 text-center text-2xl font-bold text-gray-700'> Sign in to Srecipe </h3>
                </div>

                <form className='flex flex-col' autoComplete='off' onSubmit={handleSubmitForm}>
                    <div className='relative my-4 bg-white rounded-md border-2 border-gray-300 focus-within:border-sky-500'>
                        <input 
                            className='block pb-4 px-3 pt-6 w-full text-md appearance-none focus:outline-none bg-transparent bg-white rounded-md text-gray-600' 
                            placeholder=" "  
                            type="email" 
                            name="email" 
                            id="email"
                            value={email}
                            onChange={e => handleChange(e)}
                        />
                        <label className='absolute top-0 text-md pb-4 px-3 pt-5 -zIndex-1 duration-300 origin-0 rounded text-gray-600 font-bold' htmlFor="email">Email</label>
                    </div>

                    <div className='relative my-4 bg-white rounded-md border-2 border-gray-300 focus-within:border-sky-500'>
                        <input 
                            className='block pb-4 px-3 pt-6 w-full text-md appearance-none focus:outline-none bg-transparent bg-white rounded-md text-gray-600' 
                            placeholder=" "  
                            type="user_password" 
                            name="user_password" 
                            id="user_password"
                            value={user_password}
                            onChange={e => handleChange(e)}
                        />
                        <label className='absolute top-0 text-md pb-4 px-3 pt-5 -zIndex-1 duration-300 origin-0 rounded text-gray-600 font-bold' htmlFor="user_password">Password</label>
                    </div>

                    <button className='shadow-lg hover:shadow-sm bg-gradient-to-r from-moonlit1 via-moonlit2 to-moonlit3 hover:from-cyan-500 hover:to-blue-500 text-white rounded-md font-bold p-2 mt-5 transition duration-300' type="submit">Sign In</button>
                </form>
            </div>

            <div className='flex space-x-2 text-white justify-center mt-12'>
                <p>Don't have an account?</p>
                <Link className='font-bold' to='/signup '>Sign Up</Link>
            </div>
        </div>
        </Fragment>
    );
};

export default SignIn;
