import Image from "next/image";
import "./district.css"; 
import Link from "next/link";

const District = ({name, imgSrc, linkName}) => {
  return (
    <div className="district">
        <div>
            <h4 className="district-name">{name}</h4>
        </div>
        <div>
        <Image 
            src={imgSrc}
            width={250}
            height={250}
            className="district_image"
            alt="image of the district"
        />
        </div>
        <div >
          <Link href={linkName}>
            <button className="district-button">View This District</button>
          </Link>
        </div>
    </div>
  )
}

export default District