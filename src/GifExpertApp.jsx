import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one punch', 'dragon ball'])

  const onAddCategory = (value) => {

    // de esta manera podemos evaluar que si existe en el array se salga de funcion
    if (categories.includes(value)) return
    setCategories([value, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      <button onClick={onAddCategory}>Agregar</button>


      {categories.map((item) => (
        <GifGrid
          key={item}
          category={item} />
      ))}
    </>
  )
}
