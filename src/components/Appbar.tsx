
"use client "

import { useRouter } from "next/navigation";

export default function AppBar(){

    const router = useRouter();

    return (


        <button onClick={()=>{

            router.push("/auth/api/signin");

        }}></button>
    )
}




