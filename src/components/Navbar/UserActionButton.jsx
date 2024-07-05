import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"


const UserActionButton = async () => {
    const user = await authUserSession()

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"
    return (
        <div className="flex justify-between gap-6">
            {
                user ? <Link href="/users/dashboard" className="py-1">Dashboard</Link> : null
            }
            <Link href={actionURL} className="bg-color-primary hover:bg-color-dark hover:text-color-accent rounded-lg text-color-dark py-1 px-8 transition-all ">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton