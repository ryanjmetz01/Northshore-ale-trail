import Breweries from "./Breweries";
import "./DistrictPage.css"; 
import Image from "next/image";

const DistrictPage = ({distImg}) => {

    const burkeGilmanList = [
        {
            name: "The Hop & Hound",
            link: "https://www.thehopandhound.com/", 
            image: "/Breweries/TheHopAndHound.jpg"
        }, 
        {
            name: "192 Brewing", 
            link: "https://192brewing.com/", 
            image: "/Breweries/192-brewing-logo.jpg"
        }, 
        {
            name: "Mcmenamins Anderson School", 
            link: "https://www.mcmenamins.com/anderson-school/home/about", 
            image: "/Breweries/mcmenaminsLogo.jpg"
        }, 
        {
            name: "Postdoc Brewing - Kenmore", 
            link: "https://www.postdocbrewing.com/", 
            image: "/Breweries/postdocbrewinglogo.png"
        }, 
        {
            name: "Stoup Brewing - Kenmore", 
            link: "https://www.stoupbrewing.com/", 
            image: "/Breweries/StoupBrewingLogo.png"
        }
    ]

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
                <Breweries breweryList={burkeGilmanList}/>
            </div>        
        </div>
    </main>
  )
}

export default DistrictPage