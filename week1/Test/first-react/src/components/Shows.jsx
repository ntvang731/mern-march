import React from "react";

const Shows = (props) => {
    console.log(props);
    let {title} = props
    let {releaseYear} = props
    return(
        <div>
            {/* <h2>Title: {props.title}</h2>
            <h3>Released in: {props.releaseYear}</h3> */}
            <h2>Title: {title}</h2>
            <h3>Released in: {releaseYear}</h3>
        </div>
    )
}

export default Shows;