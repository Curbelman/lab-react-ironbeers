import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

function AllBeers(){
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            console.log(response.data);
            setBeers(response.data)
        });
    }, []);

    return (
        <div>
        <Navbar />
            <h3>Our Beer Catalogue</h3>
            {beers.map((beer) => (
                <Link to={`/beers/${beer._id}`}>
                 <div key={beer._id} style={{border: '1px solid rgba(0, 0, 0, 0.05)'}}>
                    <img src={beer.image_url} alt={beer.name} height="200" />
                    <h3>{beer.name}</h3>
                    <p><i>{beer.tagline}</i></p>
                    <p>First brewed: {beer.first_brewed}</p>
                    <p>Contributed by: {beer.contributed_by}</p>
                 </div>
                </Link>
                
            ))}
        </div>
    )
}

export default AllBeers;