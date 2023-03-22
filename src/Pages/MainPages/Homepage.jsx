import RecentSongs from "../ContentComponents/RecentSongs"
import NavigationBar from "../EveryPageStuff/NavigationBar"

export default function Homepage(){
    return (
       <div id='Home'>
        <h2>Welcome To EggLand</h2> 
        <NavigationBar/>
        <RecentSongs/>
        
       </div>
    )
}