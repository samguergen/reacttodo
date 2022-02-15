import React, { Component } from "react"
// import Button from 'react-bootstrap/Button'
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Form} from 'react-bootstrap';

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

      <Form onSubmit={this.handleSubmit}>

        <Form.Group className="mb-3" controlId="url">
          <Form.Label>Enter your URL here:</Form.Label>
          <Form.Control type="text"
                        placeholder="Add url..."
                        value={this.state.title}
                        name="title"
                        onChange={this.onChange} />
          <Form.Text className="text-muted">
            Enter a valid URL format
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="slug">
          <Form.Label>Enter custom slug:</Form.Label>
          <Form.Control type="text"
                        placeholder="custom slug..."
                        value={this.state.slug}
                        name="slug"
                        onChange={this.onChange} />
          <Form.Text className="text-muted">
            Optional
          </Form.Text>
        </Form.Group>

          <Button variant="primary" type="submit" className="submit-btn"> Submit </Button>
      </Form>

      </>
    )
  }
}
export default InputUrl
