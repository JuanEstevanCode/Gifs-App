import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from "./shared/components/SearchBar"
import PreviousSeaches from "./gifs/components/PreviousSearches"
import GifList from "./gifs/components/GifList"
import useGifs from "./gifs/hooks/useGifs"

const GifsApp = () => {
    
    const {previousSearches, gifs, handleSearch, handleValueClick} = useGifs()

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
