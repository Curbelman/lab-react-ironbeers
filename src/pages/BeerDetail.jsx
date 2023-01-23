import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

function BeerDetail () {
    const [oneBeer, setOneBeer] = useState(null);
    const { id } = useParams();

    const beerNotFoundImage = "https://images.unsplash.com/photo-1539788292313-547a2c372229?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJ1bmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
    

    useEffect(() => {
        //const beerAPI = `https://ih-beers-api2.herokuapp.com/beers/${id}`
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((beer) => {
            console.log(beer.data)
            setOneBeer(beer.data)
            })

            // if (selectedBeer) {
            //     setOneBeer(selectedBeer)
            // }
    }, [id])

    return (
        <div>
        <Navbar />
            {!oneBeer && 
            <div>
                <h3>This beer has gone missing!</h3>
                
                <img src={beerNotFoundImage} alt="beer not found" />
            </div>
            }

            {oneBeer && 
            <div>
            <img src={oneBeer.image_url} alt={oneBeer.name} height="200" />
                    <h3>{oneBeer.name}</h3>
                    <p><i>{oneBeer.tagline}</i></p>
                    <p>First brewed: {oneBeer.first_brewed}</p>
                    <p>Contributed by: {oneBeer.contributed_by}</p>
                    <p>Attenuation level: {oneBeer.attenuation_level}</p>
                    <p>{oneBeer.description}</p>
            </div>
            }

            <Link to="/beers">Back to Beer Catalogue</Link>
        </div>
    )

}

export default BeerDetail;