'use client'

import JsFileDownloader from 'js-file-downloader'

export default function StartDownload({imageSource,imageAlt}){
    new JsFileDownloader({
        url: imageSource + `?height=2650&width=2650`,
        nameCallback: function() {
            return imageAlt + '.jpg'
        },
        timeout: 50000,
        forceDesktopMode: true
    })
}