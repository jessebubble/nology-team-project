import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Hero from "./container/Hero";
import { useState } from "react";
import SearchBar from "./components/searchbar/SearchBar";
import "./app.css"

const App = () => {
  // const [places, setPlaces] = useState([]);
  const [austin, setAustin] = useState(false);
  const [sanAntonio, setSanAntonio] = useState(false);
  const [dallas, setDallas] = useState(false);
  const [houston, setHouston] = useState(false);
  const [attractionType, setAttractionType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState("all");
  // const [resto, setResto] = useState(false);
  // const [museum, setMuseum] = useState(false);
  // const [park, setPark] = useState(false);

  // useEffect(() => {
  //   filterPlaces();
  // }, [city, resto, museum, park]);

  //   const filterPlaces = () => {
  //   const searchAttractionsStr = searchAttractions ? `&=${searchAttractions}` : "";

  //   const cityStr = city ? `&city=${city}` : "";

  //   const restoStr = resto ? `&resto=${resto}` : "";

  //   const museumStr = museum ? `&museum=${museum}` : "";

  //   const parkStr = park ? `&park=${park}` : "";

  //   const url = `https://${searchAttractionsStr}${cityStr}${restoStr}${museumStr}${parkStr}`;
  //   console.log(url);

  //   return fetch(url)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setPlaces(res);
  //     })
  // }
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    console.log(searchTerm)
  }

  return (
    <>
    <NavBar
      setAustin={setAustin} austin={austin}
      setDallas={setDallas} dallas={dallas}
      setHouston={setHouston} houston={houston}
      setSanAntonio={setSanAntonio} sanAntonio={sanAntonio}
      setCity={setCity}
    />
    <div className="hero">
        <div className="hero-container">
            <div className="hero-left">
                
                <h4>What is texas triangle?</h4>
                <div className = "tx-triangle">The Texas Triangle (also known as Texaplex) is a region of Texas which contains the state's five largest cities and is home to the majority of the state's population. The Texas Triangle is formed by the state's four main urban centers, Austin, Dallas–Fort Worth, Houston, and San Antonio, connected by Interstate 45, Interstate 10, and Interstate 35. In 2020, the population of the Texas Triangle reached nearly 21 million following rapid growth across much of Texas. The Texas Triangle is one of eleven megaregions in the United States, clusters of urban areas which share economic and cultural ties.</div>
                <br></br>
                <SearchBar handleInput={handleInput} />
                
                <div className="filter-dropdown">
                  <h4>Looking for specific attractions?</h4>
                    <select name="attractions" onChange={(e)=>{setAttractionType(e.target.value)}}>
                        <option value="all">All</option>
                        <option value="parks">Parks</option>
                        <option value="museums">Museums</option>
                        <option value="restaurants">Restaurants</option>
                        <option value="zoo">Zoos</option>
                    </select>
                </div>
            </div>
            <div className="hero-right">
                <Hero 
                  austin={austin}
                  dallas={dallas}
                  houston={houston}
                  sanAntonio={sanAntonio}
                  attractionType={attractionType}
                  setSearchTerm={setSearchTerm}
                  searchTerm={searchTerm}
                  city={city}
                />
            </div>
          </div>
      </div>
    <Footer />
    
    </>
  );
}

export default App;