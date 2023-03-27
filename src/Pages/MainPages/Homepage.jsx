import RecentSongs from "../ContentComponents/RecentSongs"
import NavigationBar from "../EveryPageStuff/NavigationBar"
import WebsiteHeader from "../EveryPageStuff/WebsiteHeader"
import NavBarMusic from "../EveryPageStuff/NavBarMusic"

export default function Homepage(){
    return (
       <div id='Home'>
        <NavigationBar/>
        <NavBarMusic/>
        <WebsiteHeader/> 
        <RecentSongs/>
        
       </div>
    )
}