import React from "react"
import Button from 'react-bootstrap/Button'

class UrlItem extends React.Component {
  render() {
    return <li key={this.props.url.slug}>

    <b> {this.props.url.short_url} </b>
    <span> (original URL: {this.props.url.url} ) </span>

    <Button variant="danger"
            className="del-btn"
            onClick={() => this.props.deleteUrlProps(this.props.url.slug)} >
            Delete
    </Button>

    </li>
  }
}

export default UrlItem
