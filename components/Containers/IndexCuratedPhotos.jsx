'use client'

import { useEffect,useState } from "react"
import { getCuratedPhotos } from "modules/pexels_config"
import CustomImage from "./CustomImage"

export default function IndexCuratedPhotos(){
    const [ curatedPhotos,setCuratedPhotos ] = useState([])

    const fetchCuratedImages = async()=>{
        let res = await getCuratedPhotos()
        setCuratedPhotos(res)
    }

    useEffect(()=>{
        fetchCuratedImages()
    }, [])

    return (
        <div className='index-curated-images-container margin-auto-1440'>
            IndexCuratedPhotos
            
            {console.log(curatedPhotos)}
        </div>
    )
}