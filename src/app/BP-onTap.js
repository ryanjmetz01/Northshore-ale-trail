import './BP-onTap.css'; 

export default function OnTap({onTapList}){
    return (
        <div className="on-tap">
            <h2>On Tap:</h2>
            <ul className="taplist">
                {onTapList.map((tuple) => {
                    return (
                        <li className="item" key={tuple[0]}>
                            {`${tuple[0]} .............................. ${tuple[1]} ABV`}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}