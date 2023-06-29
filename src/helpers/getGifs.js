export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=X9q54znu214B8lA4daZnDHkUxIB2aM4B&q=${category}&limit=10`
  const respon = await fetch(url)
  const { data } = await respon.json()

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs
}