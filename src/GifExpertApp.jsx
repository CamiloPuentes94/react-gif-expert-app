import { useState } from "react"


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one punch', 'dragon ball'])

  const onAddCategory = () => {
    setCategories(['Hunter x Hunter', ...categories])
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}

      {/* Listados de Gif */}
      <button onClick={onAddCategory}>Agregar</button>

      <ol>
        {categories.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      {/* Git Item */}
    </>
  )
}
