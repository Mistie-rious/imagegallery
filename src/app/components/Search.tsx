"use client"
import { useState, FormEvent } from "react"
import  { useRouter } from "next/navigation"
export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (search) router.push(`results/${search}`)
        setSearch('')
    }
  return (
        <form 
        onSubmit={handleSubmit}
        className="flex md:justify-between justify-center
        ">
            <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="rounded-xl p-2 w-[260px] sm:w-80 text-black text-xl"
            />
            
       
        </form>
  )
}
