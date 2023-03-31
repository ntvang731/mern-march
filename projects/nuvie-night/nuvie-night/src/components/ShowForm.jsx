import React, {useState} from 'react';

const ShowForm = (props) => {

    const {showList, setShowList} = props

    const [show, setShow] = useState({
        title:'',
        genre:'',
        releaseYear:''
    })

    // const [formErrors, setFormErrors] = useState({
    //     titleError:'',
    //     genreError:'',
    //     releaseDateError:'',
    //     endYearError:'',
    //     castError:''
    // })

    const [formError, setFormError] = useState();

    const runValidations = () => {
        let isValid = true;
        if (show.title === '' || show.genre === '' || show.releaseYear === '') {
                console.log('All data fields required')
                isValid = false
                setFormError(false);
                console.log(formError)
                return isValid
            } else {
                return isValid
            }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // will console log [object Object] as part of the string
        console.log(`This is the new show ${show}`)
        // will console log the actual object data as part of the string
        console.log(`This is the new show ${JSON.stringify(show)}`)
        let isValid = runValidations();
        if (isValid){
            console.log(isValid)
            // setShowList([...showList, show])
            setShowList(prevState => ([...prevState, show]))
            // resets the State to default values after State had been set to an object
            // two way data binding in tangent with useState
            setShow({
                title:'',
                genre:'',
                releaseYear:''
            })
            // clear user input from form fields
            document.getElementById('showForm').reset();
            setFormError();
        } else {
            return isValid
        }
    }

    const handleOnChange = (e) => {
        setShow(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    return(
        <div>
            <form id="showForm" onSubmit={handleSubmit}>
                <h2>Television Show Form</h2>
                <div className="errors">
                    {formError === false ? <p>All data fields required</p> : null}
                </div>
                <div className="formContainer">
                    <div className="labelInput">
                        <label>Title</label>
                        <input type="text" name="title" onChange={handleOnChange}/>
                    </div>
                    <div className="errors">
                        {show.title.length < 1 ? <p>Title must be at least 1 character</p> : null}
                    </div>
                    <div className="labelInput">
                        <label>Genre</label>
                        <input type="text" name="genre" onChange={handleOnChange}/>
                    </div>
                    <div className="errors">
                        {show.genre.length < 2 ? <p>Genre must be at least 2 characters</p> : null}
                    </div>
                    <div className="labelInput">
                        <label>Release Year</label>
                        <input type="text" name="releaseYear" onChange={handleOnChange}/>
                    </div>
                    <div className="errors">
                        {show.releaseYear.length < 4 ? <p>Release year must be at least 4 characters</p> : null}
                    </div>
                    <div className="addButton">
                        <button>Add Show</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ShowForm;