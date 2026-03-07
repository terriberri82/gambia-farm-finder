import styles from './FarmCard.module.css';
import { Link } from "react-router";

function FarmCard({viewFarmName,viewArea,viewProduce,viewFarmType, farmId}){
 
return (
    <>
    <h2 className={styles.farmName}>{viewFarmName}</h2>
    <h3 className={styles.area}>Area:{viewArea}</h3>
     <ul className={styles.product}>
      {viewProduce.map((produce) => (
        <li key={produce}>{produce}</li>
      ))}
    </ul>
    <span className={styles.typeFarm}>Farm Type:{viewFarmType}</span>
    <Link className={styles.details} to={`/farms/${farmId}`}>View Details</Link>
    </>
)
}
export default FarmCard