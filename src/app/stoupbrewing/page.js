import BreweryPage from "../BreweryPage";
import './page.css'
import { getStoupTapList } from "../fetchBrewData";

export default async function Stoup(){

    const tapList = await getStoupTapList(); 
    const brewLogo= '/Breweries/StoupBrewingLogo.png'

    return (
        <main>
            <BreweryPage 
                brewLogo={brewLogo}
                tapList={tapList}
            />
        </main>
    )
}
