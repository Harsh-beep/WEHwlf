import './App.css';
import logo2 from 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg'
import React from 'react'
import ReactPlayer from 'react-player'
function App() {
    return (
        <>
            
            
            <style src="./App.css"></style>
            <title>All In One Website</title>
            <body>
                <img src={logo2}>
                </img>
                <h2 className="name">
                    All_In_One
                </h2>
                <h2 className="nav">Home</h2>
                <h2 className="nav">Youtube</h2>
                <h2 className="nav">Songs</h2>
                <h2 className="nav">Anime</h2>
                <h2 className="nav">Contacts</h2>
                <h2 className="heading">Welcome To All in One Website</h2>
                <p className="para">asjfaskljfksajfkasdjfkasjfklsajfkasjfa<br></br>
                    slfjsdklfjsaknfsdfn<br></br>
                    sflkjsdkfjskdafskdlfasjfd<br></br>
                    sdfksakjfsaklfj
                </p>
            </body>
        </>
    );
}

export default App;
