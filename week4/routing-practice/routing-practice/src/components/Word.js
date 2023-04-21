import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

const Word = (props) => {
    const {word, number, color1, color2} = useParams()
    const resultWord = isNaN(word)
    const resultNumber = isNaN(number)
    console.log(resultWord) //should console log true b/c not a number
    console.log(resultNumber) //should console log false because is a number

    return(
        <div>
        {
            isNaN(word)?
            <h2 style={ color1? {color: color1, backgroundColor: color2} :null}> The word is: {word} </h2> : 
            <h2> The number is: {word} </h2>
        }
    </div>
    )
}

export default Word;