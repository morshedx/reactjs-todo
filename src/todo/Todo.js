import React, { Component } from 'react'

import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button"
import ListItem from '@material-ui/core/ListItem';
import CheckIcon from '@material-ui/icons/Check';
import TextField from "@material-ui/core/TextField"
import CardContent from '@material-ui/core/CardContent';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default class TodoApp extends Component {
    state = {
        todos: [],
        todoText: '',
    }

    handleOnchange = event => {
        this.setState({
            todoText: event.target.value  
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()

        if ( !this.state.todoText.length ) {
            return;
        }

        let newTodo = {
            id: Date.now(),
            todoText: this.state.todoText
        }

        let todos = [...this.state.todos, newTodo]

        this.setState({
            todos,
            todoText: ''
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3">
                        <Card>
                            <CardContent>
                                <h3>Add Todo</h3>
                                <hr/>
                                <form onSubmit={this.handleOnSubmit}>
                                    <div className="form-group">
                                        <TextField
                                            fullWidth
                                            label="Todo Title"
                                            type="text"
                                            value={this.state.todoText}
                                            onChange={this.handleOnchange}
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        color="primary"
                                        variant="contained"
                                        >
                                        Add {this.state.todos.length + 1}
                                    </Button>
                                </form>

                                <ul className="list-group">
                                    
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="mt-4">
                            <CardContent>
                                <h3>Todo List</h3>
                                <hr/>
                                <List>
                                    {this.state.todos.map(todo => {
                                        return (
                                            <ListItem key={todo.id} button>
                                                <ListItemIcon>
                                                    <CheckIcon />
                                                </ListItemIcon  >
                                                <ListItemText primary={`${todo.todoText}`} />
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>
        )
    }
}