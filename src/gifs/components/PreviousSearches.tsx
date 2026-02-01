interface Props {
    searches: string[]
    handleClickPrevious: (valor:string) => void
}

const PreviousSeaches = ({ searches, handleClickPrevious }: Props) => {
 
    return (
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    searches.map((term) => (
                        <li onClick={() => handleClickPrevious(term)} key={term}>{term}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PreviousSeaches
