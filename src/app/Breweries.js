import Brewery from "./Brewery"; 
import "./Breweries.css";

const Breweries = ({breweryList}) => {
  return (
    <>
        <h1 className="title">Explore {breweryList.length} Breweries</h1>
        <div className="grid-container">
            {breweryList.map((brew) => {
                return (
                    <div className="brewery" key={brew.name}>
                        <Brewery
                            img={brew.logo}
                            brewLink={brew.website}
                            brewName={brew.name}
                        />
                    </div>
                );
            })}
        </div>
    </>
  )
}

export default Breweries