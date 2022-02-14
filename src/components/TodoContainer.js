import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";
import axios from "axios";


class TodoContainer extends React.Component {

  state = {
 todos: [
   {
     id: uuidv4(),
     title: "Setup development environment",
     completed: true
   },
   {
     id: uuidv4(),
     title: "Develop website and add content",
     completed: false
   },
   {
     id: uuidv4(),
     title: "Deploy to live server",
     completed: false
   }
 ]
};

handleChange = (id) => {
  console.log("clicked", id);
  this.setState(prevState => {
    return {
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }
  })
  };


  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(
          todo => {
            return todo.id !== id;
          })
        ]
      });
  };

  addTodoItem = title => {
    const newTodo = {    id: uuidv4(),    title: title,    completed: false  };
    this.setState({    todos: [...this.state.todos, newTodo]  });
  };

  shortenURL = title => {
    const newURL = {    id: uuidv4(),    title: title,    completed: false  };
    this.getShorten(title)
    .then((data) => {
    console.log('data', data)
    //this.setState({    todos: [...this.state.todos, data]  });
    })
    .catch((e) => {
    console.log('error', e)
    })
  };

  getShorten = async url => {
    const response = await axios.post(
      'https://api.bely.me/links',
      {url: 'https://google.com/' },
      {
      headers: {
        'GB-Access-Token': '8a68b5e50d8c084a30b1f5f7ee66e7dc'
      }})

    console.log('response ', response.data);
    this.setState({    todos: [...this.state.todos, response.data]  });
  };




render() {
  return (
    <div>
      <Header />
      <InputTodo addTodoProps={this.getShorten} />
      <TodosList
      todos={this.state.todos}
      handleChangeProps={this.handleChange}
      deleteTodoProps={this.delTodo}/>
    </div>
  );
}

}
export default TodoContainer
