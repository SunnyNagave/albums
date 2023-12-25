import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Routes , Route, BrowserRouter } from 'react-router-dom';
import HomeScreen from './components/HomeScreen/HomeScreen';
import AddAlbum from './components/AddAlbum/AddAlbum';
import UpdateAlbum from './components/UpdateAlbum/UpdateAlbum';

class App extends Component {
  constructor(){
    super();
    // initial state
    this.state = {
      albumList : [],
      albumToBeUpdated : {},
      indexToUpdate : 0
    }
  }

  // Page will do this when it loads initially
  componentDidMount = async() => {
    const albumList = await fetch("https://jsonplaceholder.typicode.com/albums").then(
      (response) => response.json()
    ).then(
      (json) => json
    );
    this.setState({
      albumList
    })
  }

  // function to add a new album to existing list
  addAlbum = (userId, title) => {
    const lastIndex = this.state.albumList.length + 1;
    const albumToAdd = {
      userId : userId,
      id : lastIndex,
      title : title
    }
    
    // to add the given album to API
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method : 'POST',
      body : JSON.stringify( albumToAdd ),
      headers : {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then((response) => response.json())
    .then((json) => json);

    // add album to state
    this.setState({
      albumList : [...this.state.albumList, albumToAdd]
    })
    // alerts the user when new album is added. 
    alert(`New Album with title ${title} added`)
  }

  // function to delete album from album list
  deleteAlbum = (id) => {
    // filter the album based on the id to be deleted
    const newAlbumList = this.state.albumList.filter((album) => album.id !== id);

    // to delete the album from API
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method:'DELETE',
    });

    // make changes to state
    this.setState({
      albumList: newAlbumList,
    })

    // alert the user that album is deleted
    alert("Album Deleted Successful") 
  }

  // function to set the album which will update
  setAlbumToUpdate = async(album, index) => {
    this.setState({
      albumToBeUpdated : album,
      indexToUpdate : index
    })
  }

  // function to actually update the album
  updateAlbum = async (id, newUserId, newTitle) => {
    let updatedAlbum = [];

    // if the id is less than 101 then make the API call to get the updated albums
    if(id < 101){
      updatedAlbum = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method : "PUT",
        body : JSON.stringify({
          userId : newUserId,
          id : id,
          title : newTitle,
        }),
        headers : {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json())
      .then((json) => json);
    }else{

      // if id is greater than 100 then we assign the updated value directly
      updatedAlbum = {  
        userId : newUserId,
        id : id,
        title : newTitle,
      }
    }

    // get current album
    const currentAlbumList = this.state.albumList;

    // change the current album with updated album
    currentAlbumList[this.state.indexToUpdate] = updatedAlbum;

    // update the state with updated album
    this.setState({
      albumList : currentAlbumList
    })

    // alerts the user that album has been updated
    alert(`Album with title ${newTitle} updated`);
  }

  // render the components with props passed with them
  render(){
    return (
      <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="" element={<HomeScreen albumList={this.state.albumList} setAlbumToUpdate={this.setAlbumToUpdate} deleteAlbum={this.deleteAlbum}/>}/>
              <Route path="add-album" element={<AddAlbum addAlbum={this.addAlbum}/>}/>
              <Route path="update-album" element={<UpdateAlbum albumToBeUpdated={this.state.albumToBeUpdated} updateAlbum={this.updateAlbum}/>}/>
            </Routes>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
