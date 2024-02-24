import { ImageResults } from "../models/Images";
import { ImagesSchemaWithPhotos } from "../models/Images";

export default async function FetchImages(url: string): Promise<ImageResults|undefined>{
    try{
        const res = await fetch (url, {
            headers: {
                Authorization: process.env.PEXELS_API!
            }
        })
        if (!res.ok) throw new Error ("Unable to fetch!")
    
        
        const imageResults : ImageResults = await res.json()

        //parse data with zod
        const parsedData = ImagesSchemaWithPhotos.parse(imageResults)

        if (parsedData.total_results === 0) return undefined

        return parsedData
        
    } catch(e){
         console.error("Error fetching images:", e);
        // Rethrow the error to handle it in the calling function
        throw e;

    }

}