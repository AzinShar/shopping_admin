"use client";

import { useCallback, useState } from 'react';


export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = useCallback(async () => {
        const res = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        if(data.error)
            alert(data.error)
        else window.location.href = '/dashboard'
    }, [email, password])

    return (

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className=" size-24 mx-auto" src="/img/Logo.png" alt="Your Company" />
                <h2 className="mt-10 text-center font-inter text-2xl/9 font-bold tracking-tight text-black-900">Welcome Back!</h2>
                <h4 className="mt-5 text-center font-inter text-1xl/9 tracking-tight text-black/30">Login to your account</h4>

            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action='#' method="POST">
                    <div>

                        <div className="relative flex items-center font-inter">
                            <input
                                name='email'
                                type="email"
                                placeholder="Email Address"
                                className=" font-inter pl-10 pr-4 py-2 border border-gray-300 rounded-lg  w-full bg-[#EFF1F9]"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <div className="absolute left-3 text-gray-500">
                                <img src="/img/Message.png" className="w-3 h-auto" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">

                        </div>
                        <div>
                            <div className="relative flex items-center font-inter">
                                <input
                                    name='password'
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="font-inter pl-10 pr-10 py-2 border border-gray-300 rounded-lg w-full bg-[#EFF1F9]"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="absolute left-3 text-gray-500">
                                    <img src="/img/Lock.png" className="w-3 h-auto" />
                                </div>
                                <div
                                    className="absolute right-3 text-gray-500 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <img src="/img/show.png" alt="Show Password" className="w-4 h-auto" />
                                    ) : (
                                        <img src="/img/hide.png" alt="Hide Password" className="w-4 h-auto" />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="mt-2 font-inter text-primary/100 flex flex-row-reverse">Recover password</a>
                        </div>
                    </div>

                    <p className=" font-inter mt-10 text-center text-sm/6 text-[#8B8D97]">
                        Don't have an account?
                        <a href="#" className="font-inter text-indigo-600  text-[#48BFE3]"> Sign up</a>
                    </p>

                    <div className="flex items-center flex-col">
                        <button type="submit" onClick={()=>handleLogin()} className="flex justify-center w-40 center rounded-md bg-primary px-3 py-3 text-sm/6 font-inter text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                    </div>
                </form>

            </div>
        </div>


    )
}