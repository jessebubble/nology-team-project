
const Card = (props) => {

    const {city, displayPopulation, displayParks, displayMuseums, displayRestaurants, attractions,
    displayZoo, image, University, Companies, description} = props.info

    return (
        <div>
            <h1>{city}</h1>
            <img src={image} alt="city pic" height="500"></img>
            <p>{displayPopulation}</p>
            <p>{description}</p>
            <p>{attractions}</p>
            <p>{displayParks}</p>
            <p>{displayMuseums}</p>
            <p>{displayRestaurants}</p>
            <p>{displayZoo}</p>
            <p>{University}</p>
            <p>{Companies}</p>
            
            
        </div>
    )
}

export default Card;