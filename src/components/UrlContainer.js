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

  componentDidMount() {
    this.getUrls();
  }

  getUrls = () => {
    console.log('inside getUrls');
    axios.get('https://api.bely.me/links', {
      headers: {
        'GB-Access-Token': '8a68b5e50d8c084a30b1f5f7ee66e7dc'
      }})
    .then(
      (response) => {
        const pastShortURLs = response.data
        console.log('pastShortURLs ', pastShortURLs);
        this.setState({    urls: pastShortURLs  });
        // this.setState({    urls: [...this.state.urls, pastShortURLs]  });
        console.log('this.state.urls ', this.state.urls);
      },
      (error) => {
        console.log(error)
      }
    )
  }


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

  delUrlItem = url => {
    this.deleteShorten(url)
    .then(
      (response) => {
          this.setState({
            urls: [
              ...this.state.urls.filter(
                url => {
                  return url.slug !== url;
                })
              ]
            });
      },
      (error) => {
        console.log(error)
      }
    )
  };

  deleteShorten = async slug => {
      const response = await axios.delete(
        'https://api.bely.me/links/' + slug,
        {
        headers: {
          'GB-Access-Token': '8a68b5e50d8c084a30b1f5f7ee66e7dc'
        }})

      console.log('response ', response.data);
    };


    addUrlItem = url => {
      this.postShorten(url)
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
      this.setState({    urls: [...this.state.urls, response.data]  });
    };




    render() {
      return (
        <div>
          <Header />
          <InputUrl addUrlProps={this.addUrlItem} />

          <UrlsList
          urls={this.state.urls}
          handleChangeProps={this.handleChange}
          deleteUrlProps={this.delUrlItem}/>
        </div>
      );
    }

}
export default UrlContainer
