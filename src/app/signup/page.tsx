"use client";

import { useCallback, useState } from 'react';


export default function SingUp() {

    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

     const handleLogin = useCallback(async () => {
        if(password !== confirmPassword){
            setError('Password and Confirm Password are not same')
        }else{
            const res = await fetch('/api/signup', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            if(data.error)
                setError(data.error)
            else window.location.href = '/dashboard'}
        }, [email, password, confirmPassword])



    return (

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className=" size-24 mx-auto" src="/img/Logo.png" alt="Your Company" />
                <h2 className="mt-10 text-center font-inter text-2xl/9 font-bold tracking-tight text-black-900">Get Started</h2>
                <h4 className="mt-5 text-center font-inter text-1xl/9 tracking-tight text-black/30">Create your free account</h4>
            </div>

            <h3 className="text-center text-red-500">{error}</h3>


            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-6">
                    <div>
                        <div className="relative flex items-center font-inter">
                            <input
                                type="email"
                                placeholder="Your Email Address"
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
                        <div>
                            <div className="relative flex items-center font-inter">
                                <input
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
                    </div>
                   

                    <div>
                        <div className="relative flex items-center font-inter">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="font-inter pl-10 pr-10 py-2 border border-gray-300 rounded-lg w-full bg-[#EFF1F9]"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                            />
                            <div className="absolute left-3 text-gray-500">
                                <img src="/img/Lock.png" className="w-3 h-auto" />
                            </div>
                            <div
                                className="absolute right-3 text-gray-500 cursor-pointer"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? (
                                    <img src="/img/show.png" alt="Show Confirm Password" className="w-4 h-auto" />
                                ) : (
                                    <img src="/img/hide.png" alt="Hide Confirm Password" className="w-4 h-auto" />
                                )}
                            </div>
                        </div>
                    </div>

                    <p className=" font-inter mt-10 text-center text-sm/6 text-[#8B8D97]">
                        Already have an account?
                        <a href="http://localhost:3000/login" className="font-inter text-indigo-600  text-[#48BFE3]"> Login</a>
                    </p>

                    <div className="flex items-center flex-col">
                        <button  type="button" onClick={()=>handleLogin()} className="flex justify-center w-40 center rounded-md bg-primary px-3 py-3 text-sm/6 font-inter text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                    </div>
                </div>

            </div>
        </div>
    )
}