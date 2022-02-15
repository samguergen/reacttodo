import React from "react"
import UrlItem from "./UrlItem";

class UrlsList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.urls.map(url => (
        <UrlItem key={url.id} url={url} handleChangeProps={this.props.handleChangeProps}   deleteUrlProps={this.props.deleteUrlProps}/>
        ))}
      </ul>
    )
  }
}

export default UrlsList
