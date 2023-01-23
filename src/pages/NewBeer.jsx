import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

function NewBeer(){
    const [newBeer, setNewBeer] = useState({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = name === 'attenuation_level' ? Number(e.target.value) : e.target.value;

        setNewBeer(newBeer => ({...newBeer, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        .then(submitSuccess => {setSuccess(true); e.target.reset()})
    }

    return (
        <div>
        <Navbar />
            <form>
                <div>
                <label>Name of the beer</label>
                <br/>
                <input type='text' name='name' placeholder="Add a great beer here!" onChange={handleChange}></input>
                <br/>
                </div>
                <div>
                <label>Tagline</label>
                <br/>
                <input type='text' name='tagline' placeholder="Drink responsibly" onChange={handleChange}></input>
                <br/>
                </div>
                <div>
                <label>Description</label>
                <br/>
                <textarea type='text' name='description' rows='4' cols='35' onChange={handleChange}></textarea>
                <br/>
                </div>
                <div>
                <label>When was the beer first brewed?</label>
                <br/>
                <input type='text' name='first_brewed' placeholder="mm/yyyy" onChange={handleChange}></input>
                <br/>
                </div>
                <div>
                <label>Brewer's tips</label>
                <br/>
                <textarea type='text' name='brewers_tips' placeholder="Pairs well with cheese and charcuterie" rows='4' cols='35' onChange={handleChange}></textarea>
                <br/>
                </div>
                <div>
                <label>Attenuation Level</label>
                <br/>
                <input type='number' name='attenuation_level' placeholder="45" onChange={handleChange}></input>
                <br/>
                </div>
                <div>
                <label>Contributed by</label>
                <br/>
                <input type='text' name='contributed_by' placeholder="Your name or nickname" onChange={handleChange}></input>
                <br/>
                </div>
                <button type='submit' onClick={handleSubmit}>Add to the catalogue</button>
            </form>
            {success && 
            <div>
            <p>Thanks for your submission!</p>
            <br/>
            <button onClick={() => window.location.reload(false)}>Add another beer</button>
            <br/>
            <Link to="/">Back to Home</Link>
            <br/>
            <Link to="/beers">Check the full Beer Catalogue</Link>
            </div>
            }
        </div>
    )
}

export default NewBeer;