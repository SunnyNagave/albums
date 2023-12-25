import "./AlbumPage.css";
import pencil from "./pencil.png";
import deleteimg from "./delete.png";
import { Link } from "react-router-dom";

// function to render the album page by using map function
const AlbumPage = (props) => {
    return(
        <>
            <div class="albumenclosure">
                {props.albumList.map((album, index) => {
                    return(
                        <>
                            <div class="albumcontainer">
                                <div class="albumtitle">
                                    User {album.userId} . {album.title}
                                </div>
                                <div class="albumbuttons">
                                    <Link to="/update-album">
                                        <button class="btn btn-outline-info btn-album" onClick={() => props.setAlbumToUpdate(album,index)}>
                                            <img alt="update" src={pencil}/>
                                        </button>
                                    </Link>
                                    <button class="btn btn-outline-danger btn-album" onClick={() => props.deleteAlbum(album.id)}>
                                        <img alt="delete" src={deleteimg}/>
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                }
                )}
            </div>
        </>
    )
}

export default AlbumPage;