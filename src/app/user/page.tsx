
import {getServerSession} from "next-auth";

export default async function (){

    const session = await getServerSession();

    return (

        <div>

            user Component

            {JSON.stringify(session)}

        </div>
    )
}


