import "./hero.css";
import cities from "../data/cities.js";
import Card from "../components/card/Card.jsx";
import { useState, useEffect } from "react";

const Hero = (props) => {

    const {austin, dallas, houston, sanAntonio, attractionType, searchTerm, setSearchTerm} = props;
    const [displayCities, setDisplayCities] = useState("");


    useEffect(() => {
    
        const filteredCities = cities.filter((city)=>{
            return ( austin && city.city === "Austin" ) ||
                   ( dallas && city.city === "Dallas-Fort Worth" ) ||
                   ( houston && city.city === "Houston" )||
                   ( sanAntonio && city.city === "San Antonio" ) ||
                   ( !austin && !dallas && !houston && !sanAntonio );
        });
        const filteredCities2 = filteredCities.filter((city) => {            
            
            const populationLower = city.population.toLowerCase();
            if (attractionType === "all" && populationLower.includes(searchTerm) )
                city.displayPopulation = city.population;
            else
                city.displayPopulation="";

            const parksLower = city.parks.toLowerCase();
            if( (attractionType === "all" || attractionType === "parks") && parksLower.includes(searchTerm) )
                city.displayParks = city.parks;
            else
                city.displayParks="";
                
            const museumsLower = city.museums.toLowerCase();
            if( (attractionType === "all" || attractionType === "museums") && museumsLower.includes(searchTerm) )
                city.displayMuseums = city.museums;
            else
                city.displayMuseums="";

            const restaurantsLower = city.restaurants.toLowerCase();
            if( (attractionType === "all" || attractionType === "restaurants") && restaurantsLower.includes(searchTerm) )
                city.displayRestaurants = city.restaurants;
            else
                city.displayRestaurants="";

            const attractionsLower = city.attractions.toLowerCase();
            if (attractionType === "all" && attractionsLower.includes(searchTerm) )
                city.displayAttractions = city.attractions;
            else
                city.displayAttractions="";

            const zooLower = city.zoo.toLowerCase();
            if( (attractionType === "all" || attractionType === "zoo") && parksLower.includes(searchTerm) )
                city.displayZoo = city.zoo;
            else
                city.displayZoo="";
                
            const UniversityLower = city.University.toLowerCase();
            if (attractionType === "all" && UniversityLower.includes(searchTerm) )
                city.displayUniversity = city.University;
            else
                city.displayUniversity="";

            const CompaniesLower = city.Companies.toLowerCase();
            if (attractionType === "all" && CompaniesLower.includes(searchTerm) )
                city.displayCompanies = city.Companies;
            else
                city.displayCompanies="";

            const descriptionLower = city.description.toLowerCase();
            if (attractionType === "all" && descriptionLower.includes(searchTerm) )
                city.displayDescription = city.description;
            else
                city.displayDescription="";

            if ( city.displayPopulation || city.displayParks || city.displayMuseums|| city.displayRestaurants || city.displayAttractions ||
                city.displayZoo || city.displayUniversity || city.displayCompanies || city.displayDescription )
                return true;
            else
                return false;
        })
        const mappedCities = filteredCities2.map((city) => {
            return <Card info = {city}/>
        });
        setDisplayCities(mappedCities);
    
    },[austin,dallas,houston,sanAntonio,attractionType,searchTerm])

    return (
        <>
        {displayCities}
        </>
    );
}

export default Hero;