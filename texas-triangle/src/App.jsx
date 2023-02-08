import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Hero from "./container/Hero";
import { useState } from "react";
import SearchBar from "./components/searchbar/SearchBar";

const App = () => {
  // const [places, setPlaces] = useState([]);
  const [austin, setAustin] = useState(false);
  const [sanAntonio, setSanAntonio] = useState(false);
  const [dallas, setDallas] = useState(false);
  const [houston, setHouston] = useState(false);
  const [attractionType, setAttractionType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  // const [city, setCity] = useState("");
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
  }

  return (
    <>
    <NavBar
      setAustin={setAustin} austin={austin}
      setDallas={setDallas} dallas={dallas}
      setHouston={setHouston} houston={houston}
      setSanAntonio={setSanAntonio} sanAntonio={sanAntonio}
    />
    <div className="hero">
        <div className="hero-container">
            <div className="hero-left">
                <h1>Hero Left</h1>
                <p>What is texas triangle</p>
                <SearchBar handleInput={handleInput} />
                <p>Button</p>
                <div className="filter-dropdown">
                  <p>Looking for information about attractions?</p>
                    <select name="attractions" onChange={(e)=>{setAttractionType(e.target.value)}}>
                        <option value="all">All</option>
                        <option value="parks">Parks</option>
                        <option value="museums">Museums</option>
                        <option value="restaurant">Restaurants</option>
                        <option value="zoo">Zoos</option>
                    </select>
                </div>
            </div>
            <div className="hero-right">
            <h1>Hero Right</h1>
    <Hero 
      austin={austin}
      dallas={dallas}
      houston={houston}
      sanAntonio={sanAntonio}
      attractionType={attractionType}
      setSearchTerm={setSearchTerm}
      searchTerm={searchTerm}
     />
     </div>
 </div>
</div>
    <Footer />
    
    </>
  );
}

export default App;