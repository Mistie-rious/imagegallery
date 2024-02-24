import Gallery from "./Gallery"
import Link from "next/link"

type Props ={
    page: string|undefined
    topic: string
    prevPage?: string|null
    nextPage?: string|null
}

export default function Footer({page, topic, prevPage, nextPage}: Props) {

    if (!prevPage && !nextPage) return  
    const pageNum : number[] = []

    if(prevPage && nextPage){
        for( let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
            pageNum.push(i)
        }
        
   
    }

    const nextPageArea = nextPage? 
    (
        <Link href={`/results/${topic}/${nextPage}`} 
        className={!prevPage ? 'mx-auto': ""}> 
        {!prevPage? "more" : ""} &gt;&gt;&gt; 
        </Link>
    ) : null

    const prevPageArea = prevPage? 
    (   <>
        <Link href={`/results/${topic}/${nextPage}`} 
        className={!nextPage ? 'mx-auto': ""}> 
        &lt;&lt;&lt;  {!nextPage? "more" : ""} 
        </Link>

        {pageNum.map((num,i) => (
            page && num === parseInt(page) 
           ? <span key={i}>{num}</span>
           : <Link key={i} href={`/results/${topic}/${num}`}
           className="underline">{num}</Link>
        ))}
        </>
    ) : null

    

    return (
        <footer className="flex justify-between items-center 
        px-4 py-2 font-bold w-60 mx-auto">
            {prevPageArea}
            {nextPageArea}
        </footer>
    )
}
    