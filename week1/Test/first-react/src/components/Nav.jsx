import React from "react";

const Nav = (props) => {
    console.log(props);
    //destructuring so you don't use dot notation (e.g. props.name)
    let {name} = props
    return(
        <div>
            {/* if not destructuring}
            {/* <h1>Hello {props.name}!</h1> */}

            {/* if destructuring */}
            <h1>Hello {name}!</h1>
        </div>
    )
}

export default Nav;