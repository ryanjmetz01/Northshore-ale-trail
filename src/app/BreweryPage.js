import OnTap from "./BP-onTap";
import Image from "next/image";
import './BreweryPage.css'; 


export default function BreweryPage({brewLogo, tapList}){

    
    return (
    <>
        <div className="grid-container">
            <div className="leftside">
                <Image 
                    src={brewLogo}
                    width={500}
                    height={500}
                    className="breweryImage"
                    alt="image of the brewery"
                />
                <h3>6704 NE 181st St.
                Kenmore, WA 98028</h3>
                <h3>Hours*</h3>
                <ul>
                    <li>M-W: 3-9PM</li>
                    <li>TH-SUN: 12-9PM</li>
                </ul>
                <p>*Subject to Change</p>
            </div>
            <div className="on-tap-desc">
                <p className="description">Described as a family friendly brewery, Stoup Brewing in Kenmore is one of three Stoup Brewing locations. First started in 2013 by a husband
                    and wife duo along with a third friend, Stoup delivers on award-winning beers like thier <i>Citra IPA</i> and <i>Robust Porter</i>. Stoup Brewing also offers pub fare appitizers 
                    and pizza making it a great place to stop in for a bite and a beer.
                </p>
                <OnTap 
                    onTapList={tapList}
                />
            </div>
        </div>
    </>
    )
}