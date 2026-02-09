import { useState } from "react"
import type { Gif } from "../interfaces/gif.interface"
import { getGifs } from "../actions/get-gif-by-value-input"


const useGifs = () => {

    const [previousSearches, setpreviousSearches] = useState<string[]>([])
    const [gifs, setGifs] = useState<Gif[]>([])

    const handleValueClick = async (value: string) => {
        setGifs(await getGifs(value))
    }

    const handleSearch = async (value: string) => {
        value = value.trim().toLowerCase()

        if (value.length === 0) return

        setpreviousSearches(prev => {
            const filtered = prev.filter(item => item !== value)
            return [value, ...filtered].slice(0, 5)
        })

        setGifs(await getGifs(value))
    }


    return {
        //values 
        previousSearches,
        gifs,

        //Actions
        handleSearch,
        handleValueClick
    }
}

export default useGifs
