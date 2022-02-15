import React, { Component } from "react"

class InputUrl extends Component {

  state = {
    title: "",
    slug: ""
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addUrlProps(this.state.title, this.state.slug); //bubble up
    this.setState({    title: "", slug: "" }); //refresh in curr state
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
        <input
          type="text"
          placeholder="Add optional custom slug"
          value={this.state.slug}
          name="slug"
          onChange={this.onChange}
        />
          <button>Submit</button>
      </form>

      </>
    )
  }
}
export default InputUrl
