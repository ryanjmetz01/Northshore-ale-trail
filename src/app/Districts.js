import District from "./District"
import "./districts.css"; 

const Districts = ({d1Name, d1Img, d2Name, d2Img, d3Name, d3Img, linkName1, linkName2, linkName3}) => {
  return (
    <div className="districts">
        <District 
            name={d1Name}
            imgSrc={d1Img}
            linkName={linkName1}
        />
        <District 
            name={d2Name}
            imgSrc={d2Img}
            linkName={linkName2}
        />
        <District
            name={d3Name}
            imgSrc={d3Img}
            linkName={linkName3}
        />
    </div>
  )
}

export default Districts