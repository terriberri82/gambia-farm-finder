import '../App.css';
import FarmList from '../features/farms/FarmList';
import { useNavigate } from 'react-router';
import styles from './SavedFarm.module.css';

function SavedFarmPage({ allFarms, savedFarms, handleToggleSave }) {
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
        <FarmList allFarms={savedFarmObjects}  showUnSave={true} onUnSave={handleToggleSave}/>
      ) : (
        <p className={styles.noSaved}>No Saved Farms</p>
      )}
      <button className={styles.homeButton} onClick={handleGoHome}>
        Home
      </button>
    </>
  );
}

export default SavedFarmPage;
