"use client"

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        
        if (event.key === "Enter" || event.type === "click") {
            const keyword = searchRef.current.value

            if (!keyword || keyword.trim() == "") return

            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }

    // addEventListener("submit", handleSearch, false)

    return (
        <div className="relative md:ml-8">
                <input placeholder="cari anime..."
                    className="w-full md:mr-4 pl-3 pr-10 py-2 rounded-2xl "
                    ref={searchRef}
                    onKeyDown={handleSearch} name="search" />
                <button className="absolute top-2 right-2" onClick={handleSearch} >
                    <MagnifyingGlass size={24} />
                </button>
        </div>
    );
}

export default InputSearch