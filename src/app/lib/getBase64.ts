import { getPlaiceholder } from "plaiceholder";
import type { Photo, ImageResults } from "../models/Images";

async function getBase64(url: string):Promise<string> {

    try{
    const res = await fetch (url)

    if (!res.ok) throw new Error (`Error: ${res.status} ${res.statusText}`)

    const buffer = await res.arrayBuffer()

    const {base64} = await getPlaiceholder(Buffer.from(buffer))

    return base64
} catch (e){
    console.error("Error fetching images:", e);
    // Rethrow the error to handle it in the calling function
    throw e;

}
}

export default async function getBlurredDataUrls(images: ImageResults) : Promise<Photo[]>{
    const base64Promises = images.photos.map(image => 
      getBase64(image.src.large)
    )

    const base64Results = await Promise.all(base64Promises)

    const BlurredImage: Photo[] = images.photos.map((photo, i) => {
        photo.blurredDataUrl = base64Results[i]
        return photo
    })
    return BlurredImage
}