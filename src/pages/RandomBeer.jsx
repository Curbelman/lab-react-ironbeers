import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

function RandomBeer () {
    const [randomBeer, setRandomBeer] = useState(null);
    // const { id } = useParams();

    const beerNotFoundImage = "https://images.unsplash.com/photo-1539788292313-547a2c372229?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJ1bmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
    

    useEffect(() => {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((beer) => {
            console.log(beer.data)
            setRandomBeer(beer.data)
            })
    }, [])

    return (
        <div>
        <Navbar />
            {!randomBeer && 
            <div>
                <h3>This beer has gone missing!</h3>
                
                <img src={beerNotFoundImage} alt="beer not found" />
            </div>
            }

            {randomBeer && 
            <div>
            <img src={randomBeer.image_url} alt={randomBeer.name} height="200" />
                    <h3>{randomBeer.name}</h3>
                    <p><i>{randomBeer.tagline}</i></p>
                    <p>First brewed: {randomBeer.first_brewed}</p>
                    <p>Contributed by: {randomBeer.contributed_by}</p>
                    <p>Attenuation level: {randomBeer.attenuation_level}</p>
                    <p>{randomBeer.description}</p>
            </div>
            }
            <button onClick={() => window.location.reload(false)}>Another Random Beer</button>
            <br/>
            <Link to="/">Back to Home</Link>
            <br/>
            <Link to="/beers">Check the full Beer Catalogue</Link>
        </div>
    )

}

export default RandomBeer;