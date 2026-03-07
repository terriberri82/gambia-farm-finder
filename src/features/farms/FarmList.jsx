import FarmCard from './FarmCard';

function FarmList({allFarms}){
 return(
    <div className="farm-list-container">
        {allFarms && allFarms.map((farm)=>(
         <FarmCard 
            key={farm.id} 
            farmId={farm.id}
            viewFarmName={farm.name}
            viewArea={farm.area}
            viewProduce={farm.produce}
            viewFarmType={farm.type}
             />
        ))}
    </div>
)
}
export default FarmList