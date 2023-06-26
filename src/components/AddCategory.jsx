import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputHandler = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return

    onNewCategory(inputValue.trim())
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
