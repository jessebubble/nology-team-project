<<<<<<< HEAD
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
=======
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Hero from "./container/Hero";
>>>>>>> 6d987c3125ee89484cc9c3ee413255e17e7f09fd

  return (
    <>
<<<<<<< HEAD
    <HomePage/>
=======
    <NavBar />
    <Hero />
    <Footer />
>>>>>>> 6d987c3125ee89484cc9c3ee413255e17e7f09fd
    </>
  );
}

export default App;