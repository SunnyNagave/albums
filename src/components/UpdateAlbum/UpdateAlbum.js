import "./UpdateAlbum.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const UpdateAlbum = (props) => {
    // get the data from user form and use the function passed as prop to update the album
    const updateData = () => {
        const idToBeUpdated = props.albumToBeUpdated.id;
        const updatedUserID = Number(document.getElementById("user-id").value);
        const updatedTitle = document.getElementById("album-title").value;
        props.updateAlbum(idToBeUpdated, updatedUserID, updatedTitle);
    }
    return(
        <>
            <Navbar/>
            <div className="form-container">
                {/* bootstrap form class to check whether the data is there or not before submitting */}
                <form className="was-validated">
                    <div className="form-group">
                        <label for="user-id">User Id : </label>
                        <input type="number" className="form-control" id="user-id" placeholder="User Id" defaultValue={props.albumToBeUpdated.userId}required/>
                        <div className="valid-feedback"></div>
                        <div className="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div className="form-group">
                        <label for="album-details">Album Title : </label>
                        <textarea type="text" className="form-control" id="album-title" placeholder="Album Details" defaultValue={props.albumToBeUpdated.title} required></textarea>
                        <div className="valid-feedback"></div>
                        <div className="invalid-feedback">Please fill out this field</div>
                    </div>
                    {/* when clicked in update button redirect to home screen and updates the album via a function */}
                    <Link to="/"><button type="submit" onClick={updateData}className="btn btn-outline-primary">Update Album</button></Link>
                </form>
            </div>
        </>
    )
    
}

export default UpdateAlbum;