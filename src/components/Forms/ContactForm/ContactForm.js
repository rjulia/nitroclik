import React, { Component, Fragment } from 'react';
import { Input } from "../../index.components";
import axios from 'axios';
import styled from 'styled-components';

import { withSwalInstance } from "sweetalert2-react";
import swal from "sweetalert2";
const SweetAlert = withSwalInstance(swal);
const SweetError = withSwalInstance(swal);

const initialState = {
  name : '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  mailSent: '',
  favourites: [],
  show: false,
  hasError: false
}
const API_PATH = './api/index.php';

const Button = styled.button`
  background-color: #FFA59E;
  border-radius: none;
  border: none;
`

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {  
      ...initialState
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.favourites !== this.state.favourites) {
      this.setState({ favourites: nextProps.favourites });
    }
  }

  handleInputChange = e => {
      const { name, value} = e.target;
      this.setState({
          [name] : value,
          
      })
  }
  getNames(data){
    const list =[]
    const servicesArray = this.props.data.filter( function(services) {
      if(data.includes(services.id)) {
        return services.name;
      }
      return '';
    })
    servicesArray.forEach( e=> {
      list.push(e.name)
    })
    return list
  }

  cleanState = () => {
      this.setState({...initialState});
  }
  
  sendEmail = e => {
    e.preventDefault();
 
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    }).then(result => {
        this.setState({
          show: true,
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ hasError: true, error: error.message }));
  };

  validFrom = () => {
    const {name, email, phone, subject, message} = this.state;
    const noValid = !name || !email || !phone || !subject || !message;
    return noValid;
}

  render() {
    return (
      <Fragment>
        <form action="#">
            <Input
              inputtype={"text"}
              title={"Your name *"}
              name={"name"}
              param={"form-group"}
              value={this.state.name}
              placeholder={"Your name"}
              onChange={this.handleInputChange}
            />{" "}
            <Input
              inputtype={"email"}
              title={"Email *"}
              name={"email"}
              param={"form-group"}
              value={this.state.email}
              placeholder={"Email"}
              onChange={this.handleInputChange}
            />{" "}
            <Input
              inputtype={"text"}
              title={"Phone *"}
              name={"phone"}
              param={"form-group"}
              value={this.state.phone}
              placeholder={"Phone"}
              onChange={this.handleInputChange}
            />{" "}
            <Input
              inputtype={"text"}
              title={"Subject *"}
              name={"subject"}
              param={"form-group"}
              value={this.state.subject}
              placeholder={"Subject"}
              onChange={this.handleInputChange}
            />{" "}
            <Input
              inputtype={"text"}
              title={"Message *"}
              name={"message"}
              param={"form-group"}
              value={this.state.message}
              placeholder={"Message"}
              onChange={this.handleInputChange}
            />{" "}
          <Button disabled={this.validFrom()} type="submit" onClick={e => this.sendEmail(e)} value="Submit" className="btn">Submit</Button>
          <p>* All fields are required</p>
          <div>
            {this.state.mailSent &&
              <div>Thank you for contcting us.</div>
            }
          </div>
        </form>
        <SweetAlert
          show={this.state.show}
          title="GOOD!"
          text="The wmail was sended succesfull"
          onConfirm={() => {
            this.setState({ 
              show: false
            });
            this.props.deleteFavourites();
            this.cleanState();
          }}
        />
        <SweetError
          show={this.state.hasError}
          title="HEY!"
          type="warning"
          text="Something happend in Data Base"
          onConfirm={() => {
            this.setState({ 
              hasError: false
            });
            this.props.deleteFavourites();
            this.cleanState();
          }}
        />
      </Fragment>
    );
  }
}

export default ContactForm;