import React, { Component } from 'react';
import { Input } from "../../index.components";
import axios from 'axios';

const initialState = {
  name : '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  mailSent: ''
}
const API_PATH = './api/index.php';

class ContactForm extends Component {
  state = {
    ...initialState
  }

  handleInputChange = e => {
      const { name, value} = e.target;

      this.setState({
          [name] : value
      })
  }

  cleanState = () => {

      this.setState({...initialState});
  }
  sendEmail = e => {
    e.preventDefault();
    console.log(this.state)
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    return (
      <form action="#">
          <Input
            inputtype={"text"}
            title={"Your name"}
            name={"name"}
            param={"form-group"}
            value={this.state.name}
            placeholder={"Your name"}
            onChange={this.handleInputChange}
          />{" "}
          <Input
            inputtype={"email"}
            title={"Email"}
            name={"email"}
            param={"form-group"}
            value={this.state.email}
            placeholder={"Email"}
            onChange={this.handleInputChange}
          />{" "}
          <Input
            inputtype={"text"}
            title={"Phone"}
            name={"phone"}
            param={"form-group"}
            value={this.state.phone}
            placeholder={"Phone"}
            onChange={this.handleInputChange}
          />{" "}
          <Input
            inputtype={"text"}
            title={"Subject"}
            name={"subject"}
            param={"form-group"}
            value={this.state.subject}
            placeholder={"Subject"}
            onChange={this.handleInputChange}
          />{" "}
          <Input
            inputtype={"text"}
            title={"Message"}
            name={"message"}
            param={"form-group"}
            value={this.state.message}
            placeholder={"Message"}
            onChange={this.handleInputChange}
          />{" "}
        <button type="submit" onClick={e => this.sendEmail(e)} value="Submit" className="btn">Submit</button>
        <div>
          {this.state.mailSent &&
            <div>Thank you for contcting us.</div>
          }
        </div>
      </form>
    );
  }
}

export default ContactForm;