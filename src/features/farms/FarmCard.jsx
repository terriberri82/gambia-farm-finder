import { Link } from 'react-router';
import Card from '../../shared/Card';

function FarmCard({
  viewFarmName,
  viewArea,
  viewProduce,
  viewFarmType,
  farmId,
}) {
  return (
    <Card>
      <h2>{viewFarmName}</h2>
      <h3>Area: {viewArea}</h3>
      <ul>
        {viewProduce.map((produce) => (
          <li key={produce}>{produce}</li>
        ))}
      </ul>
      <span>Farm Type: {viewFarmType}</span>
      <Link to={`/farms/${farmId}`}>View Details</Link>
    </Card>
  );
}
export default FarmCard;
