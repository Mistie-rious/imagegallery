import type { ImageResults } from "../models/Images";

function getPageNumber(url: string){
    const {searchParams} = new URL(url)
    return searchParams.get('page')
}

export default function getPrevNextImages(images: ImageResults){
    let nextPage = images.next_page
    ? getPageNumber(images.next_page)
    : null
    
    const prevPage = images.prev_page
    ? getPageNumber(images.prev_page)
    : null

    const totalpages = images.total_results % images.per_page
    ? Math.ceil(images.total_results / images.per_page)
    : (images.total_results / images.per_page) + 1

    if (nextPage && prevPage && (parseInt(prevPage) + 5)) {
        nextPage = (parseInt(prevPage) + 5).toString()
    }

    if (nextPage && parseInt(nextPage) >= totalpages) {
        nextPage = null
    }

    return {nextPage, prevPage}

}