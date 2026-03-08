import '../App.css'
import FarmList from '../features/farms/FarmList'
import { useNavigate } from "react-router" 

function SavedFarmPage({allFarms, savedFarms}){

const navigate = useNavigate();
const handleGoHome = () =>{
    navigate('/')};

const savedFarmObjects = allFarms.filter(farm => savedFarms.includes(farm.id))   
return(
    <>
    <h2>My Saved Farms</h2>
    {savedFarmObjects && savedFarmObjects.length > 0 ? <FarmList allFarms={savedFarmObjects}/>
    :<p>No Saved Farms</p>}
    <button onClick={handleGoHome}>Home</button>
    </>
)
}

export default  SavedFarmPage


