import React, { Component } from "react"

class InputUrl extends Component {

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
    this.props.addUrlProps(this.state.title); //bubble up
    this.setState({    title: ""  }); //refresh in curr state
  };

  render() {
    return (
      <>
      <h5> Enter your URL here: </h5>

      <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        placeholder="Add url..."
        value={this.state.title}
        name="title"
        onChange={this.onChange}
      />
        <button>Submit</button>
      </form>

      </>
    )
  }
}
export default InputUrl
