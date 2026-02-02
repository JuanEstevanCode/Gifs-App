import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from "./shared/components/SearchBar"
import PreviousSeaches from "./gifs/components/PreviousSearches"
import GifList from "./gifs/components/GifList"
import { useState } from "react"
import { getGifs } from "./gifs/actions/get-gif-by-value-input"
import type { Gif } from "./gifs/interfaces/gif.interface"

const GifsApp = () => {
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

    return (
        <>
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto" />
            <SearchBar onSearch={handleSearch} placeholder="Buscador" />
            <PreviousSeaches handleClickPrevious={handleValueClick} searches={previousSearches} />
            <GifList gifs={gifs} />
        </>
    )
}

export default GifsApp
