import "./hero.css";
import cities from "../data/cities.js";
import Card from "../components/card/Card.jsx";
import { useState, useEffect } from "react";

const Hero = (props) => {

    const {austin, dallas, houston, sanAntonio, attractionType} = props;
    const [displayCities, setDisplayCities] = useState("");

    const updateCities = () => {
        const filteredCities = cities.filter((city)=>{
            return ( austin && city.city === "Austin" ) ||
                   ( dallas && city.city === "Dallas-Fort Worth" ) ||
                   ( houston && city.city === "Houston" )||
                   ( sanAntonio && city.city === "San Antonio" ) ||
                   ( !austin && !dallas && !houston && !sanAntonio );
        });
        const mappedCities = filteredCities.map((city) => {
            if( attractionType == "all" ) {
                city.displayPopulation = city.population
            }    else {
                city.displayPopulation = "";
            }
            if( attractionType == "all" || attractionType == "parks" )
                city.displayParks = city.parks;
            else
                city.displayParks="";
            if( attractionType == "all" || attractionType == "museums" )
            city.displayMuseums = city.museums;
            else
                city.displayMuseums="";
            if( attractionType == "all" || attractionType == "restaurant" )
            city.displayRestaurants = city.restaurants;
            else
                city.displayRestaurants="";
            if( attractionType == "all" || attractionType == "zoo" )
            city.displayZoo = city.zoo;
            else
                city.displayZoo="";
            return <Card info = {city}/>
        });
        setDisplayCities(mappedCities);
    }

    useEffect(() => {updateCities()},[austin,dallas,houston,sanAntonio,attractionType])

    return (
        <>
        {displayCities}
        </>
    );
}

export default Hero;