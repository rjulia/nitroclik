import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import firebase from '../../../Services/Firebase/index';
import './DetailBlog.scss';


class DetailBlog extends Component {
  state ={
    article: {}
  }
  async getDoc() {
    const {Id} = this.props.match.params;
    if (Id) {
      return await firebase.firestore().collection('blogs').doc(Id).get();
    }
  }
  
  componentDidMount(){
    this.getDoc().then(data =>{
      this.setState({
        article: data.data()
      })
    });
  }

  render() {
    const {article} = this.state
    return (
      <div className="detail-blog container d-flex justify-content-center flex-column">
        <h1 className="detail-blog__title">{article.title}</h1>
        <p className='detail-blog__sortdef'>{article.sortdef}</p>
        <div className='detail-blog__img'>
          <img src={article.image} alt={article.title} />
        </div>
        <p className='detail-blog__text' dangerouslySetInnerHTML={{__html: article.text}}></p>
      </div>
    );
  }
}

export default withRouter(DetailBlog);
