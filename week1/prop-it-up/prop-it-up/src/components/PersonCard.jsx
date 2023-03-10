import React from 'react';

const PersonCard = (props) => {
    let {firstName} = props;
    let {lastName} = props;
    let {age} = props;
    let {hairColor} = props;
    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default PersonCard;