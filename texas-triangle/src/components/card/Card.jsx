
const Card = (props) => {

    const {city, displayPopulation, displayParks, displayMuseums, displayRestaurants, displayAttractions,
    displayZoo, image, displayUniversity, displayCompanies, displayDescription} = props.info

    return (
        <div>
            <h1>{city}</h1>
            <img src={image} alt="city pic" height="500"></img>
            <p>{displayDescription}</p>
            <p>{displayPopulation}</p>
            <p>{displayAttractions}</p>
            <p>{displayParks}</p>
            <p>{displayMuseums}</p>
            <p>{displayRestaurants}</p>
            <p>{displayZoo}</p>
            <p>{displayUniversity}</p>
            <p>{displayCompanies}</p>
        </div>
    )
}

export default Card;