import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <p>
                home page created
                
            </p>
            <Link to="/about_me">About Me</Link>
        </div>
    )
}

export default HomePage;