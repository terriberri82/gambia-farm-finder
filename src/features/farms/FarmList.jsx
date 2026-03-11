import FarmCard from './FarmCard';

function FarmList({ allFarms, showUnSave, onUnSave}) {
  return (
    <div>
      {allFarms &&
        allFarms.map((farm) => (
          <FarmCard
            key={farm.id}
            farmId={farm.id}
            viewFarmName={farm.name}
            viewArea={farm.area}
            viewProduce={farm.produce}
            viewFarmType={farm.type}
            showUnSave={showUnSave}
            onUnSave={onUnSave}
          />
        ))}
    </div>
  );
}
export default FarmList;
