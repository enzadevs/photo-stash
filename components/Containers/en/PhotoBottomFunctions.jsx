'use client'

import Link from 'next/link'
import StartDownload from 'components/Functions/DownloadPhoto'
import ThrowToast from 'components/Functions/Toaster'

export default function PhotoBottomFunctions({styles,photographer,photographer_url,pexels_url,originalImg,url}){
    return (
        <div className={styles.bottom_functions_container}>
            <span className={styles.photographer_name_container}>
                <p>Photo by: <Link className={styles.photographer_link} href={photographer_url} target='_blank'>{photographer}</Link></p>
            </span>
            <span className={styles.pexels_url_container}>
                <Link href={pexels_url} className={styles.pexels_link} target='_blank'>
                    Pexels page
                </Link>
            </span>
            <span className={styles.download_btn_container}>
                <button 
                    onClick={()=>{
                        StartDownload({imageSource: originalImg,imageAlt: url})
                        ThrowToast()
                    }}
                    className={styles.download_button}
                >Download
                </button>
            </span>
        </div>
    )
}