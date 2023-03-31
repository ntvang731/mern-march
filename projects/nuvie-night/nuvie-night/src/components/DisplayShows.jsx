import React, {useState} from 'react';

const DisplayShows = (props) => {

    const {showList, setShowList} = props;
    
    return (
        <div>
            <h2>Television Show Data</h2>
            {
                // showList.map((show, index) => ()) is the structure used here
                showList.map((show, index) => ( // callback function here within paranthesis
                    // the key gives react a unique prop identifier for each individual div
                    // because each div will hold a different object of data
                    <div className="tvShowData" key={index}>
                        <h3>{show.title}</h3>
                        <p>Genre: {show.genre}</p>
                        <p>Release Year: {show.releaseYear}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayShows;