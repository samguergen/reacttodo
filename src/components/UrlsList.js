import React from "react"
import UrlItem from "./UrlItem";

class UrlsList extends React.Component {
  render() {
    return (
      <>

        <h5> List of Previous URLS: </h5>

        <ul>
          {
            this.props.urls.map(url => (
            <UrlItem key={url.slug} url={url} handleChangeProps={this.props.handleChangeProps}   deleteUrlProps={this.props.deleteUrlProps}/>
            ))
          }
        </ul>

      </>
    )
  }
}

export default UrlsList
