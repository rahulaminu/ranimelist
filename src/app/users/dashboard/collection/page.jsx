import Image from "next/image"
import Link from "next/link"
import Header from "@/components/dashboard/Header"
import prisma from "@/libs/prisma"
import { authUserSession } from "@/libs/auth-libs"

const Page = async () => {
    const user = await authUserSession()
    const collection = await prisma.collection.findMany({ where: { user_email: user.email } })

    return (
        <section className="mt-4 w-full px-4">
            <Header title="My Collection" />
            <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-4">
                {collection.map((collect, index) => {
                    return (
                        <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative border-2">
                            <Image className="w-full" src={collect.anime_image} alt={collect.anime_image} width={350} height={350} />
                            <div className=" absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
                                <h5 className=" text-xl text-center">{collect.anime_title}</h5>
                            </div>
                        </Link>
                    );
                })}

            </div>
        </section>
    )
}

export default Page