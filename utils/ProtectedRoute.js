"use client"

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { useAppSelector } from "@redux/hooks";

export const ProtectedRoute = ({ children }) => {
    const token = useAppSelector(({ authReducer }) => authReducer.userToken);
    const router = useRouter();

    useEffect(() => {
        // checks if the user is authenticated
        console.log(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {children}
        </>
    );
}