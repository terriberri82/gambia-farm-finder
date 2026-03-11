import '../App.css';
import FarmMap from '../shared/FarmMap';
import styles from './FarmDetailPage.module.css';
import { useParams, useNavigate } from 'react-router';
import Card from '../shared/Card';

function FarmDetailPage({ allFarms, handleToggleSave, savedFarms }) {
  const { id } = useParams();
  const navigate = useNavigate();
  if (!allFarms || allFarms.length === 0) {
    return <p>Loading...</p>;
  }
  const farm = allFarms.find((farm) => farm.id === id);
  if (!farm) {
    return <h3 className={styles.notFoundMessage}>Farm Not Found!</h3>;
  }

  const isSaved = savedFarms.includes(farm.id);

  return (
    <div className={styles.pageContainer}>
      <Card>
        <h2 className={styles.farmName}>{farm.name}</h2>
        <h3 className={styles.area}>Area: {farm.area}</h3>
        <ul className={styles.product}>
          {farm.produce.map((produce) => (
            <li key={produce}>{produce}</li>
          ))}
        </ul>
        <p className={styles.description}>{farm.description}</p>
        <span className={styles.phone}>Phone #: {farm.phone}</span>
        <div className={styles.socialMedia}>
          {farm.socialMedia &&
            Object.entries(farm.socialMedia).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noreferrer">
                {platform}
              </a>
            ))}
        </div>
        <span className={styles.typeFarm}>Farm Type: {farm.type}</span>
        <div className={styles.buttonContainer}>
          <button className={styles.back} onClick={() => navigate(-1)}>
            Back
          </button>
          <button
            className={styles.save}
            onClick={() => handleToggleSave(farm.id)}
          >
            {isSaved ? 'Unsave' : 'Save'}
          </button>
        </div>
        <FarmMap lat={farm.lat} lng={farm.lng} name={farm.name} />
      </Card>
    </div>
  );
}

export default FarmDetailPage;
