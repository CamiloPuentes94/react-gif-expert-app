import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['dragon ball'])

  const onAddCategory = (value) => {

    // de esta manera podemos evaluar que si existe en el array se salga de funcion
    if (categories.includes(value)) return
    setCategories([value, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />


      {categories.map((item) => (
        <GifGrid
          key={item}
          category={item} />
      ))}
    </>
  )
}
