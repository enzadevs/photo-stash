const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY

export const getSearchQueryPhotos = async(inputTextValue,currentPage)=>{
    const res = await fetch(`https://api.pexels.com/v1/search?query=${inputTextValue}?page=${currentPage}&per_page=45`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      )
      await new Promise((resolve) => resolve(res))
      const responseJson = await res.json()
      return responseJson.photos
}

export const getCuratedPhotos = async() => {
    const res = await fetch(`https://api.pexels.com/v1/curated?page=0&per_page=23&orientation=portrait`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    )
    await new Promise((resolve) => resolve(res))
    const responseJson = await res.json()
    return responseJson.photos
}