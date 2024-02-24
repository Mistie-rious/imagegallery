import FetchImages from "../lib/FetchImages";
import { ImageResults } from "../models/Images";
import ImgContainer from "./ImgContainer";
import getBlurredDataUrls from "../lib/getBase64";
import getPrevNextImages from "../lib/getPrevNextImages";
import Footer from "./Footer";

type Props = {
    topic?:  string|undefined,
    page?: string|undefined,
}

export default async function Gallery({topic = 'curated', page}: Props) {



    let url
    //  = !topic ? 'https://api.pexels.com/v1/curated' : `https://api.pexels.com/v1/search?query=${topic}`
    if (topic === 'curated' && page){ //if it is a diff curated page
        url = `https://api.pexels.com/v1/curated?page=${page}`
    }
    else if (topic === 'curated'){ //first curated page
        url = `https://api.pexels.com/v1/curated`
    }
    else if (!page){
       url = `https://api.pexels.com/v1/search?query=${topic}`
    }
    else {
        url =  `https://api.pexels.com/v1/search?query=${topic}&page=${page}`
    }
    const images: ImageResults | undefined = await FetchImages(url)

   


    if (!images || images.per_page === 0) return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>

    const imagesWithBlur = await getBlurredDataUrls(images)

    const {nextPage, prevPage} = getPrevNextImages(images)

   const footerProps = {page, topic, prevPage, nextPage}
    
    

    return (
        <>
        <section className="px-1 my-3 grid  grid-cols-gallery auto-rows-[10px]">

            {imagesWithBlur.map(photo => (
                <ImgContainer key={photo.id} photo = {photo}/>
            ))}

        </section>
        <Footer {...footerProps}/>
        </>
    )
}