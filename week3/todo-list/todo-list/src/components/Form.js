import React, {useState} from 'react'

const Form = (props) => {

    const [todoItem, setTodoItem] = useState({
        content:'',
        itemCompleted:false
    })

    const {todoList, setTodoList} = props

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(`This is the new item ${JSON.stringify(todoItem)}`)
        setTodoList(prevState => ([...prevState, todoItem]))
        setTodoItem({
            content:'',
            checkboxStatus:false
        })
    }

    const changeHandler = (e) => {
        console.log(e)
        if(e.target.type === 'checkbox'){
            // setTodoItem(...todoItem, itemCompleted: !todoItem.itemCompleted)
            // toggling checkbox on/off
            setTodoItem(prevState => ({...prevState, itemCompleted: !todoItem.itemCompleted}))
            // else statement needed in order for checkbox boolean value to match with alternate click and unclicked state
        } else{
            setTodoItem(prevState => ({...prevState, [e.target.name]: e.target.value}))
        }
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={submitHandler}>
                <input type='text' name='content' onChange={changeHandler} value={todoItem.content}/>
                <button>Add</button>
                <div>
                    {/* <label>Item has been completed</label> */}
                    {/* setting checked attribute to todoItem.itemCompleted will cause the checkbox
                    to be checked or unchecked after form submittal based on the current state of itemCompleted boolean */}
                    {/* <input type='checkbox' name='itemCompleted' onClick={changeHandler} checked={todoItem.itemCompleted}/> */}
                </div>
            </form>
        </div>
    )
}

export default Form