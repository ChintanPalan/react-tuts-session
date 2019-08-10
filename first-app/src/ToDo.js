import React, { Component } from "react";


class ToDo extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {
                    name:"Buy Milk",
                    completed: false
                },
                {
                    name: "Eat Chocolate",
                    completed: true
                }
            ],
            newItem: ""
        };
    }

    handleClick(e){
        let todo = {
            name: this.state.newItem,
            completed: false
        };
        this.setState({
            todos: [ ...this.state.todos, todo ],
            newItem: ""
        });
    }

    toggleCompletion(index){
        let newTodos = [ ...this.state.todos ];
        newTodos[index].completed = !newTodos[index].completed;
        this.setState({
            todos: newTodos
        });
    }

    render() {
        return (
            <div>
                <h1>Todays List</h1>
                <ul>
                    {
                        this.state.todos.map((item, index) => {
                            return (
                                <li key={item.name}>
                                    {
                                        item.completed ? (<s>{item.name}</s>) : item.name
                                    }
                                    <button onClick={() => this.toggleCompletion(index)}>{item.completed ?"Mark Not Complete" : "Completed"}</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <input type="text" onChange={e => this.setState({ newItem: e.target.value })} value={this.state.newItem} name="todo" id="new-todo" placeholder="What do you want to do next?" /><button onClick={e => this.handleClick(e)}> Add</button>
            </div>
        )
    }
}

/*
* 1, List of items to do
* 2. Input Add New Items
* 3. Button to mark items as completed
* */


export default ToDo;

