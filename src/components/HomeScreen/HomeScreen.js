import Navbar from "../Navbar/Navbar";
import AlbumPage from "../AlbumPage/AlbumPage";

const HomeScreen = (props) => {
    return(
        <>
            <Navbar/>
            <AlbumPage albumList={props.albumList} setAlbumToUpdate={props.setAlbumToUpdate} deleteAlbum={props.deleteAlbum}/>
        </>
    )
}

export default HomeScreen;