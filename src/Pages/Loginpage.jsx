import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function Loginpage({setIsLoggedIn}) {

    const navigate=useNavigate();
    const location=useLocation();
    //redirect jab koi kisi page pe hai to login baad whi page aaye
    const redirectPath= location.state?.from?.pathname|| '/';

    const handleLogin=(e)=>{
        e.preventDefault();
        setIsLoggedIn(true);
        alert('Login button clicked');

        navigate(redirectPath, {replace:true});
    }


    return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">

      <form className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-6 text-center text-3xl font-bold text-gray-900">
          Login
        </h1>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500"
          />
        </div>

        <button
          type="submit"
          onClick={handleLogin}
          className="w-full rounded-lg bg-green-600 py-3 text-lg font-semibold text-white transition hover:bg-green-700 cursor-pointer"
        >
          Login
        </button>

      </form>
    </div>
  );
}

  /*return (
    <div>
        <form>
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder='="password'></input>
            <button type="submit" 
            onClick={()=> {handleLogin()}}
            >
                Login
            </button>
        </form>
    </div>
  )
}

/*import React from 'react'

export default function Loginpage({ setIsLoggedIn }) {

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);

    alert('Login button clicked');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">

      <form className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-6 text-center text-3xl font-bold text-gray-900">
          Login
        </h1>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500"
          />
        </div>

        <button
          type="submit"
          onClick={handleLogin}
          className="w-full rounded-lg bg-green-600 py-3 text-lg font-semibold text-white transition hover:bg-green-700 cursor-pointer"
        >
          Login
        </button>

      </form>
    </div>
  );
}*/
