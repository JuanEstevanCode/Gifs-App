import { useEffect, useState } from "react"

interface Props {
    placeholder?:string
    onSearch: (value:string) => void
}

const SearchBar = ({placeholder='Buscar', onSearch}:Props) => {

    const [value, setValue] = useState('')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onSearch(value)
        }, 1000)

        return () => {
            clearTimeout(timeoutId)
        }
    },[value, onSearch])

    const inputValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const manageKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            handleClickSearch()
        }
    }

    const handleClickSearch = () => {
        if (!value.trim()) return
        onSearch(value)
    }

    return (
        <div className="search-container">
            <input type="text" name="" id="" onKeyDown={manageKeyDown} onChange={inputValue} value={value} placeholder={placeholder} />
            <button onClick={handleClickSearch}>Buscar</button>
        </div>
    )
}

export default SearchBar
