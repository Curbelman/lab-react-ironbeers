import { Link } from 'react-router-dom';

const allBeersImage = "https://images.unsplash.com/photo-1626320290598-03656e931a31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTd8NzYyNzY1fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
const randomBeerImage = "https://images.unsplash.com/photo-1626598764031-1c872ae61c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NjB8NzYyNzY1fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
const newBeerImage = "https://images.unsplash.com/photo-1648142375707-03918153f53e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8NzYyNzY1fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60";

function Homepage(){
    return (
        <div>
            <div>
                <Link >
                    <img src={allBeersImage} alt="all our beers" height="200" />
                    <h2>Check out All our Beers</h2>
                    <p>Our collection of wonderful beers offers you the chance to get to know the
                    best products from local breweries from around the world.</p>
                </Link>
                <Link >
                    <img src={randomBeerImage} alt="all our beers" height="200" />
                    <h2>Check out a Random Beer</h2>
                    <p>Don't know exactly what you want? Feeling adventurous? Dive in to a random beer from our collection!</p>
                </Link>
                <Link >
                    <img src={newBeerImage} alt="all our beers" height="200" />
                    <h2>Add a New Beer to our catalogue</h2>
                    <p>Can't find a beer that you want to recommend? Add it here to our list, and we'll showcase it to the world!</p>
                </Link>
            </div>
        </div>
    )
}

export default Homepage;