import { headers } from "next/headers"
import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col md:items-center justify-between p-4 gap-2 border">
                <Link href="/" className="font-bold text-4xl">RAnimeList</Link>
                <InputSearch/>
                <UserActionButton/>
            </div>
        </header>
    )
}

export default Navbar