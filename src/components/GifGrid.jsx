import { useEffect, useState } from "react"
import { GifItem } from "./GifItem"
import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs(category).then(res => setImages(res))

  }, [])


  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((item) => (
          <GifItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </>
  )
}
