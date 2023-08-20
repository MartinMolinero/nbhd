"use client"

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { userLogin, logout } from "@redux/actions/authActions";

const Navbar = () => {
    const [isLogged, setIsLogged] = useState(false);

    const router = useRouter();
    const dispatch = useAppDispatch();
    const token = useAppSelector(({ authReducer }) => authReducer.userToken);

    useEffect(() => {
        setIsLogged(token && true);
    }, [token]);

    const handleLoginButton = () => {
        dispatch(userLogin()); // TO DO: agregar logica real de este boton
    }

    const handleLogoutButton = () => {
        dispatch(logout()); // TO DO: agregar logica real de este boton
    }

    return (
        <nav className="bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <div className="flex md:order-2">
                    {isLogged ?
                        <button onClick={handleLogoutButton} type="button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-2 bg-red-600 hover:bg-red-700 focus:ring-red-800">
                            Cerrar sesión
                        </button> :
                        <button onClick={handleLoginButton} type="button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                            Iniciar sesión
                        </button>
                    }

                    <button onClick={() => router.push('/announcements/new')} type="button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                        Nuevo anuncio
                    </button>

                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;