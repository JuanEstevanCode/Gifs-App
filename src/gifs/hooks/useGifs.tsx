import { useRef, useState } from "react"
import type { Gif } from "../interfaces/gif.interface"
import { getGifs } from "../actions/get-gif-by-value-input"

// const gifsCache: Record<string, Gif[]> = {}

const useGifs = () => {

    const [previousSearches, setpreviousSearches] = useState<string[]>([])
    const [gifs, setGifs] = useState<Gif[]>([])

    const gifsCache = useRef<Record<string,Gif[]>>({})

    const handleValueClick = async (value: string) => {
        if (gifsCache.current[value]) {
            setGifs(gifsCache.current[value])
            return;
        }

        const gifs = await getGifs(value)
        setGifs(gifs)
    }

    const handleSearch = async (value: string) => {
        value = value.trim().toLowerCase()

        if (value.length === 0) return

        setpreviousSearches(prev => {
            const filtered = prev.filter(item => item !== value)
            return [value, ...filtered].slice(0, 5)
        })
        if (previousSearches.includes(value)) return;

        const gifs = await getGifs(value)
        setGifs(gifs)
        gifsCache.current[value] = gifs
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
