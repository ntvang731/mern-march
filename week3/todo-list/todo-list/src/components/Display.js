import React, {useState} from 'react'

const Display = (props) => {

    const {todoList, setTodoList} = props;

    const toggleTodoItem = (item) => {
        // create a variable to capture the updated list which can then be passed
        // as an argument to set the list
        const updatedTodoList = todoList.map((itemTodo) => {
            if(itemTodo === item){
                itemTodo.itemCompleted = !itemTodo.itemCompleted
            }
            // must return items that do not meet the if condition back to the todoList
            // in order to not lose those items
            return itemTodo
        })
        setTodoList(updatedTodoList)
    }

    const deleteHandler = (item) => {
        // use filter to delete an item from an array list
        const updatedTodoList = todoList.filter((itemTodo) => itemTodo !== item)
        setTodoList(updatedTodoList)
    }

    return (
        <div>
            {
                todoList.map((item, index) => (
                    <div key={index}>
                        {
                            item.itemCompleted?
                            <h3 className='line-through'>Item: {item.content}</h3>:
                            <h3>Item: {item.content}</h3>
                        }
                        <span>Item completed?</span>
                        {/* create anoynymous function to prevent toggleTodoItem function from instantly running
                        and to be able to pass item as an arugment via that function */}
                        <input type='checkbox' name='itemCompleted' checked={item.itemCompleted} onClick={() => toggleTodoItem(item)}/>
                        {/* you can also pass the index as the argument instead of the entire object */}
                        <button onClick={() => deleteHandler(item)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Display