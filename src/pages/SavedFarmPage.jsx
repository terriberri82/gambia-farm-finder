import '../App.css';
import FarmList from '../features/farms/FarmList';
import { useNavigate } from 'react-router';
import styles from './SavedFarm.module.css';

function SavedFarmPage({ allFarms, savedFarms }) {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');
  };

  const savedFarmObjects = allFarms.filter((farm) =>
    savedFarms.includes(farm.id)
  );
  return (
    <>
      <h2 className={styles.title}>My Saved Farms</h2>
      {savedFarmObjects && savedFarmObjects.length > 0 ? (
        <FarmList allFarms={savedFarmObjects} />
      ) : (
        <p>No Saved Farms</p>
      )}
      <button className={styles.homeButton} onClick={handleGoHome}>
        Home
      </button>
    </>
  );
}

export default SavedFarmPage;
