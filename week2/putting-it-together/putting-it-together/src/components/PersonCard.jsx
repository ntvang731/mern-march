import React, {useState} from 'react';

const PersonCard = (props) => {
    let {firstName} = props;
    let {lastName} = props;
    let {age} = props;
    let {hairColor} = props;
    //Delcare a new state variable called "getAge"
    const [getAge, setAge] = useState(age);
    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            {/* Use 'getAge' to render useState value; using 'age' will render props original value only */}
            <p>Age: {getAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ (event) => setAge(getAge + 1)}>Birthday Button for {firstName} {lastName}
            </button>
        </div>
    )
}

export default PersonCard;