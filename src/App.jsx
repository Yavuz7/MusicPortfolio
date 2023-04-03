import Homepage from './Pages/MainPages/Homepage'
import NavigationBar from './Pages/EveryPageStuff/NavigationBar'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
        <Homepage/>
      </BrowserRouter>           
    </div>
  )
}

export default App
