import "./hero.css";

const Hero = () => {

    return (
        <>
            <div className="hero">
                <div className="hero-container">
                    <div className="hero-left">
                        <h1>Hero Left</h1>
                        <p>What is texas triangle</p>
                        <p>Searchbar</p>
                        <p>Button</p>
                        <p>filter search</p>
                    </div>
                    <div className="hero-right">
                        <h1>Hero Right</h1>
                        <p> CARD component</p>
                        <p> city name </p>
                        <p>city image</p>
                        <p>city description</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;