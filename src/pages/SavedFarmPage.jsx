import '../App.css'
import FarmList from '../features/farms/FarmList'
import { useNavigate } from "react-router" 

function SavedFarmPage(){
const allFarms =[]
const navigate = useNavigate();
const handleGoHome = () =>{
    navigate('/')};
return(
    <>
    <h2>My Saved Farms</h2>
    {allFarms && allFarms.length > 0 ? <FarmList allFarms={allFarms}/>
    :<p>No Saved Farms</p>}
    <button onClick={handleGoHome}>Home</button>
    </>
)
}

export default  SavedFarmPage


