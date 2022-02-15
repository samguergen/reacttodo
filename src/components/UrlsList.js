import React from "react"
import UrlItem from "./UrlItem";
import {ListGroup, Row, Col} from 'react-bootstrap';

class UrlsList extends React.Component {
  render() {
    return (
      <>

        <h5> List of Previous URLS: </h5>

        <ListGroup>
          {
            this.props.urls.map(url => (
            <UrlItem key={url.slug} url={url} handleChangeProps={this.props.handleChangeProps}   deleteUrlProps={this.props.deleteUrlProps}/>
            ))
          }
        </ListGroup>

      </>
    )
  }
}

export default UrlsList
