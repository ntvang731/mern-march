import React from 'react';

const BoxForm = () => {

    const handleSubmit = () => {

    }

    const handleOnChange = () => {

    }

    return (
        <div>
            <form id="boxForm" onSubmit={handleSubmit}>
                <h2>Box Form</h2>
                <div className="formContainer">
                    <div className="labelInput">
                        <label>Color</label>
                        <input type="text" name="firstName" onChange={handleOnChange}/>
                        <button className="addButton">Add</button>
                    </div>
                    <div className="addButton">
                    </div>
                </div>
            </form>
            <div className="box"></div>
        </div>
    )
}
export default BoxForm;