import React, { Component } from 'react';
import { HeaderSection } from "../../../Components/index.components";
import firebase from '../../../Services/Firebase/index';
import { Card } from '../../../Components/index.components'


const images = {
  small: './assets/images/blogheader_340.jpg',
  medium: './assets/images/blogheader.jpg',
  large: './assets/images/blogheader.jpg',
  xlarge: './assets/images/blogheader.jpg'
}
const title = "Blog";
const subtitle = "we like to share with you our knowledge";

class HomeBlog extends Component {
  
  async getMarker() {
    const snapshot = await firebase.firestore().collection('blogs').get()
    return snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });
  }
  state = {
    articles: []
  }

  componentDidMount(){
    this.getMarker().then( data => {
      this.setState({
        articles: data
      })
    });
  }
  render() {
    return (
      <div className="sections container d-flex flex-column my-5">
        <HeaderSection 
        images={images}
        title={title}
        subtitle = {subtitle}
        />
        <div className="row">
          {this.state.articles.map((article, idx) =>(
            <div key={idx} className="col-md-4 col-12" >
              <Card {...article}/>

            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomeBlog;