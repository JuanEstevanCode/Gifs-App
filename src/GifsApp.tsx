import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from "./shared/components/SearchBar"
import { mockGifs } from "./mock-data/gifs.mock"
import PreviousSeaches from "./gifs/components/PreviousSeaches"
import GifList from "./gifs/components/GifList"

const GifsApp = () => {
    return (
        <>
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto"/>
            <SearchBar placeholder="Buscador"/>
            <PreviousSeaches searches={['Goku', 'Saitama', 'Elden Ring']}/>
            <GifList gifs={mockGifs}/>
        </>
    )
}

export default GifsApp
