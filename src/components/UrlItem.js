import React from "react"

class UrlItem extends React.Component {
  render() {
    return <li>
    <input type="checkbox"
          checked={this.props.url.completed}
          onChange={() => this.props.handleChangeProps(this.props.url.id)}
          />
    {this.props.url.title}

    <button onClick={() => this.props.deleteUrlProps(this.props.url.id)}>
      Delete
    </button>

    </li>
  }
}

export default UrlItem
