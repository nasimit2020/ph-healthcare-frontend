"use server"

import { IUserLoginData } from "@/app/login/page";

export const userLogin = async (data: IUserLoginData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data),
    });

    const userInfo = await res.json();
    return userInfo;
}