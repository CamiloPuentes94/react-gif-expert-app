import { useState } from "react"
import { AddCategory } from "./components/AddCategory"


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one punch', 'dragon ball'])

  const onAddCategory = (value) => {

    // de esta manera podemos evaluar que si existe en el array se salga de funcion
    if (categories.includes(value)) return
    setCategories([value, ...categories])
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* Listados de Gif */}
      <button onClick={onAddCategory}>Agregar</button>

      <ol>
        {categories.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      {/* Git Item */}
    </>
  )
}
