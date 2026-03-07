import '../App.css'
import styles from './FarmDetailPage.module.css';
import { useParams, Link, useNavigate } from "react-router"


function FarmDetailPage({viewFarmName,viewArea,viewProduce,viewFarmType, viewDescription, viewPhone, viewSocialMedia}){
 const {id} = useParams()
// const farm= allFarms.find((farm) => farm.id ===id)
const navigate = useNavigate()
return (
    <>
    <h2 className={styles.farmName}>{viewFarmName}</h2>
    <h3 className={styles.area}>Area:{viewArea}</h3>
     <ul className={styles.product}>
      {viewProduce.map((produce) => (
        <li key={produce}>{produce}</li>
      ))}
    </ul>
    <p className={styles.description}>{viewDescription}</p>
    <span className={styles.phone}>{viewPhone}</span>
    <span className={styles.socialMedia}>{viewSocialMedia}</span>
    <span className={styles.typeFarm}>Farm Type:{viewFarmType}</span>
    <button className={styles.back} onClick={() => navigate(-1)}>Back</button>
    </>
)
}

export default FarmDetailPage