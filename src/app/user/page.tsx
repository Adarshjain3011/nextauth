
import {getServerSession} from "next-auth";

// import { NEXT_AUTH_CONFIG } from "../lib/auth";

export default async function User(){

    const session = await getServerSession();   // 

    return (

        <div>

            user Component

            {JSON.stringify(session)}

        </div>
    )
}


