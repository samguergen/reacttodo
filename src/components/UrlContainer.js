import React from "react"
import UrlsList from "./UrlsList";
import Header from "./Header"
import InputUrl from "./InputUrl"
import { v4 as uuidv4 } from "uuid";
import axios from "axios";


class UrlContainer extends React.Component {
  state = {
     urls: []
};

handleChange = (id) => {
  console.log("clicked", id);
  this.setState(prevState => {
    return {
      urls: prevState.urls.map(url => {
        if (url.id === id) {
          return {
            ...url,
            completed: !url.completed,
          }
        }
        return url
      }),
    }
  })
  };


  delUrl = id => {
    this.setState({
      urls: [
        ...this.state.urls.filter(
          url => {
            return url.id !== id;
          })
        ]
      });
  };

  addUrlItem = title => {
    const newUrl = {    id: uuidv4(),    title: title,    completed: false  };
    this.setState({    urls: [...this.state.urls, newUrl]  });
  };

  shortenURL = title => {
    const newURL = {    id: uuidv4(),    title: title,    completed: false  };
    this.postShorten(title)
  };

  postShorten = async url => {

    const response = await axios.post(
      'https://api.bely.me/links',
      {url: url },
      {
      headers: {
        'GB-Access-Token': '8a68b5e50d8c084a30b1f5f7ee66e7dc'
      }})

    console.log('response ', response.data);
    const newShortURL =    {
         id: uuidv4(),
         title: response.data.short_url,
         completed: false
       }
    this.setState({    urls: [...this.state.urls, newShortURL]  });
  };

  // getShorten = () => {
  //   const response = await axios.get(
  //     'https://api.bely.me/links',
  //     {
  //     headers: {
  //       'GB-Access-Token': '8a68b5e50d8c084a30b1f5f7ee66e7dc'
  //     }})
  //
  //   const pastShortURLs = response.data
  //   this.setState({    shortenedUrls: [...this.state.urls, pastShortURLs]  });
  //
  // }



  render() {
    return (
      <div>
        <Header />
        <InputUrl addUrlProps={this.postShorten} />

        <UrlsList
        urls={this.state.urls}
        handleChangeProps={this.handleChange}
        deleteUrlProps={this.delUrl}/>
      </div>
    );
  }

}
export default UrlContainer
