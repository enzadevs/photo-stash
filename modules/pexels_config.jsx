const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY

export const getSearchQueryPhotos = async(inputTextValue,currentPage)=>{
    const res = await fetch(`https://api.pexels.com/v1/search?query=${inputTextValue}?page=${currentPage}&per_page=45`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      )
      const responseJson = await res.json()
      return responseJson.photos
}

export const getCuratedPhotos = async (currentPage) => {
    const res = await fetch(`https://api.pexels.com/v1/curated?page=${currentPage}&per_page=30&orientation=portrait`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    )
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const responseJson = await res.json()
    return responseJson.photos
}