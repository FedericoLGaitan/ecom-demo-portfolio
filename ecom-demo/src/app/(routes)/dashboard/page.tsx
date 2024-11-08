
import { useUser } from "@auth0/nextjs-auth0/client"

export function page() {
    const {error, isLoading, user} = useUser()
    return (
        <div className="flex flex-col">
            <p className="text-2xl font-bold">
                Usuario:
            </p>
           
        </div>
    )
}


export default page