import { useNavigate } from "react-router-dom";
import "./Navbar.css";

// Navbar component which will be there on each page to navigate between pages
export default function Navbar(){
    const navigate = useNavigate();
    // when clicked on add album it will be redirected to add album page
    const navigateToAdd = () => {
        navigate("/add-album");
    };

    // when clicked on home it will be redirected to home page
    const navigateToHome = () => {
        navigate("/");
    }
    return(
        <>
            <div className="navbar px-4">
                <div className="display-6" onClick={navigateToHome}>Home</div>
                <div className="display-6" onClick={navigateToAdd}>Add Albums</div>
            </div>
        </>
    )
}