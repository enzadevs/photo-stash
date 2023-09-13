'use client'

import { useEffect,useState } from "react"
import { getCuratedPhotos } from "modules/pexels_config"
import CustomImageComponent from "./CustomImageComponent"

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
        <div className='index-curated-images margin-auto-1440'>
            IndexCuratedPhotos
            {curatedPhotos?.map(item=>{
                return(
                    <p>{item.id}</p>
                )
            })}
            {console.log(curatedPhotos)}
        </div>
    )
}