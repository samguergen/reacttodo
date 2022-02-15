import React from "react"

class UrlItem extends React.Component {
  render() {
    return <li key={this.props.url.slug}>

    <b> {this.props.url.short_url} </b>
    <span> (original URL: {this.props.url.url} ) </span>

    <button onClick={() => this.props.deleteUrlProps(this.props.url.slug)}>
      Delete
    </button>

    </li>
  }
}

export default UrlItem
