import { useState } from "react"

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('one punch')

  const onInputHandler = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputValue)
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
