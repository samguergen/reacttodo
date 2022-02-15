import React from "react"

class UrlItem extends React.Component {
  render() {
    return <li key={this.props.url.slug}> 

    {this.props.url.short_url}

    <button onClick={() => this.props.deleteUrlProps(this.props.url.slug)}>
      Delete
    </button>

    </li>
  }
}

export default UrlItem
