import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from "./shared/components/SearchBar"
import { mockGifs } from "./mock-data/gifs.mock"
import PreviousSeaches from "./gifs/components/PreviousSearches"
import GifList from "./gifs/components/GifList"
import { useState } from "react"

const GifsApp = () => {
    const [previousSearches, setpreviousSearches] = useState<string[]>([])

    const addSearch = (search:string) => {
        setpreviousSearches(prev => [...prev, search])
    }

    const handleTermClick = (term:string) => {
        console.log(term)
    }

    return (
        <>
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto"/>
            <SearchBar onSearch={addSearch} placeholder="Buscador"/>
            <PreviousSeaches handleClickPrevious={handleTermClick} searches={previousSearches}/>
            <GifList gifs={mockGifs}/>
        </>
    )
}

export default GifsApp
