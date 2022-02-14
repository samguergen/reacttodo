import React, { Component } from "react"

class InputTodo extends Component {

  state = {
    fName: "Sam",
    lastName: "Guerg",
    title: "test",
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title); //bubble up
    this.setState({    title: ""  }); //refresh in curr state
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        placeholder="Add todo..."
        value={this.state.title}
        name="title"
        onChange={this.onChange}
      />
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo
