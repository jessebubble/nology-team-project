import HomePage from "./container/HomePage";
import {useState, useEffect } from "react";

const App = () => {

  const [places, setPlaces] = useState([]);
  // const [austin, setAustin] = useState(false);
  // const [sanAntonio, setSanAntonio] = useState(false);
  // const [dallas, setDallas] = useState(false);
  // const [houston, setHouston] = useState(false);
  const [searchAttractions, setAttractions] = useState("");
  const [city, setCity] = useState("");
  const [resto, setResto] = useState(false);
  const [museum, setMuseum] = useState(false);
  const [park, setPark] = useState(false);

  useEffect(() => {
    filterPlaces();
  }, [city, resto, museum, park]);

    const filterPlaces = () => {
    const searchAttractionsStr = searchAttractions ? `&=${searchAttractions}` : "";

    const cityStr = city ? `&city=${city}` : "";

    const restoStr = resto ? `&resto=${resto}` : "";

    const museumStr = museum ? `&museum=${museum}` : "";

    const parkStr = park ? `&park=${park}` : "";

    const url = `https://${searchAttractionsStr}${cityStr}${restoStr}${museumStr}${parkStr}`;
    console.log(url);

    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPlaces(res);
      })
  }

  return (
    <>
    <HomePage/>
    </>
  );
}

export default App;