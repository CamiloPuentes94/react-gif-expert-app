import { useState } from "react"

export const AddCategory = ({ addCategories }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputHandler = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return

    addCategories(item => [inputValue, ...item])
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputHandler}
      />
    </form>
  )
}
