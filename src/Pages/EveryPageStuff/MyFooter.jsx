import "../EveryPageStuff/MyFooter.css"
import smallLogo from "../EveryPageStuff/Images/Yaya_Banaya_Logo_v2small.png"

export default function MyFooter() {
    return(
        <>
        <footer className="imgContainer">
       
            <ul>
            <img className="smallLogo" alt="Logo" src={smallLogo}></img>
                <li>&#169; 2023 Yavuz Yurtseven</li>
                <li>Terms Of Service</li>
                <li>Privacy Notice</li>              
            </ul>
        </footer>
        </>
    )
}