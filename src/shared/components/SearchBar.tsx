import { useState } from "react"

interface Props {
    placeholder?:string
    onSearch: (value:string) => void
}

const SearchBar = ({placeholder='Buscar', onSearch}:Props) => {

    const [value, setValue] = useState('')

    const inputValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const manageKeyDown = (e:React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            handleClickSearch()
        }
    }

    const handleClickSearch = () => {
        if (!value.trim()) return
        console.log(value)
        onSearch(value)
        setValue('')
    }

    return (
        <div className="search-container">
            <input type="text" name="" id="" onKeyDown={manageKeyDown} onChange={inputValue} value={value} placeholder={placeholder} />
            <button onClick={handleClickSearch}>Buscar</button>
        </div>
    )
}

export default SearchBar
