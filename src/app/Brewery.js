import Link from "next/link";
import Image from "next/image";
import "./Brewery.css";


const Brewery = ({img, brewLink, brewName}) => {
  return (
    <>
        <div> 
            <Image
                src={img}
                width={100}
                height={100}
                alt="The logo of the brewery"
                className="brewery-image"
            />
        </div>
        <div className="brewery-name">
            <Link href={brewLink}>
                <p>{brewName}</p>
            </Link>
        </div>
    </>
  )
}

export default Brewery