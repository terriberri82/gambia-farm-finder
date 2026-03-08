import '../App.css'
import styles from './FarmDetailPage.module.css';
import { useParams, useNavigate } from "react-router"


function FarmDetailPage({allFarms}){

 const {id} = useParams()
const navigate = useNavigate()
if(!allFarms || allFarms.length ===0) {
    return <p>Loading...</p>
}
const farm= allFarms.find((farm) => farm.id ===id)
if (!farm){
    return <p>Farm Not Found!</p>
}
   
return (
    <>
    <h2 className={styles.farmName}>{farm.name}</h2>
    <h3 className={styles.area}>Area:{farm.area}</h3>
     <ul className={styles.product}>
      {farm.produce.map((produce) => (
        <li key={produce}>{produce}</li>
      ))}
    </ul>
    <p className={styles.description}>{farm.description}</p>
    <span className={styles.phone}>{farm.phone}</span>
    <div className={styles.socialMedia}>
        {farm.socialMedia && Object.entries(farm.socialMedia).map(([platform, url])=>(
           <a key={platform} href={url} target="_blank" rel="noreferrer">
            {platform}
           </a> 
        ))}
    </div>
    <span className={styles.typeFarm}>Farm Type:{farm.type}</span>
    <button className={styles.back} onClick={() => navigate(-1)}>Back</button>
    </>
)
}

export default FarmDetailPage