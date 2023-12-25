import React from "react";
import Navbar from "../Navbar/Navbar";
import "./AddAlbum.css";
import { Link } from "react-router-dom";

const AddAlbum = (props) => {

    // get the data from user form and use the function passed as prop to add the album
    const getData = () => {
        const userId = Number(document.getElementById("user-id").value);
        const albumDetails = document.getElementById("album-details").value;
        props.addAlbum(userId,albumDetails); 
    }
    return(
        <>
            <Navbar/>
            <div className="form-container">
                {/* bootstrap form class to check whether the data is there or not before submitting */}
                <form className="was-validated">
                    <div className="form-group">
                        <label for="user-id">User Id : </label>
                        <input type="text" className="form-control" id="user-id" placeholder="User Id" required/>
                        <div className="valid-feedback"></div>
                        <div className="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div className="form-group">
                        <label for="album-details">Album Details : </label>
                        <textarea type="text" className="form-control" id="album-details" placeholder="Album Details" required></textarea>
                        <div className="valid-feedback"></div>
                        <div className="invalid-feedback">Please fill out this field</div>
                    </div>
                    {/* when clicked in add button redirect to home screen and add the album to list via a function */}
                    <Link to="/"><button type="submit" className="btn btn-outline-primary" onClick={getData}>Add Album</button></Link>
                </form>
            </div>
        </>
    )
}

export default AddAlbum;