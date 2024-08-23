import Breweries from "./Breweries";
import "./DistrictPage.css"; 
import Image from "next/image";
import { fetchDistrictBreweries } from "@/app/data";

const DistrictPage =  async ({distName, distImg}) => {

    const breweries = await fetchDistrictBreweries(distName); 

  return (
    <main>
        <div className="container">
            <div className="image">
                <Image 
                    src={distImg}
                    alt="District Logo"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="breweries">
                <Breweries breweryList={breweries}/>
            </div>        
        </div>
    </main>
  )
}

export default DistrictPage