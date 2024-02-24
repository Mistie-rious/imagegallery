import Link from "next/link"
import Search from "./Search"


export default function Navbar() {
  return (
    <header className="bg-black  sticky top-0 z-10">
        <nav className=" flex max-w-6xl items-center gap-4 font-bold mx-auto p-4 flex-col sm:justify-between sm:flex-row text-2xl sm:text-3xl">
        <h2 className="text-white text-2xl sm:text-3xl whitespace-nowrap text-center ">
        <Link href='/'>Mistie's Gallery</Link>
        </h2>
        <Search/>
        </nav>
    </header>
  )
}
