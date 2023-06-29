import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs(category).then(res => setImages(res))

  }, [])


  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
    </>
  )
}
