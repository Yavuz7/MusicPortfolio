import "../EveryPageStuff/WebsiteHeader.css"
import bigLogo from "../EveryPageStuff/Images/Yaya_Banaya_Logo_v2.png"

export default function WebsiteHeader(){
    return(
        <div className="headerBg">
            <img alt="Main Logo" src={bigLogo}></img>
        </div>
    )
}