import { Link } from "react-router"
import '../App.css'
function NotFoundPage(){

return(
    <div>
      <h1>Looks like this farm is off the map!</h1>
      <p>
        The page you are trying to reach doesn’t exist or may have been moved.
        But there are still plenty of farms waiting to be discovered.
      </p>
      <Link to="/">Return to Farm Finder</Link>
    </div>
)

}

export default NotFoundPage