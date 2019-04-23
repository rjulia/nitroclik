import React, { Fragment, Component } from 'react';
import './Profile.scss'
import { Modal, Button, NameTitle } from "../../../Components/index.components";
import _ from "lodash";
import localization from "../../../localization";

class Profile extends Component {
  state = {
    show: false

  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    const { name, picture, position, bio } = this.props.people;
    return (
      <Fragment>
        <div className="col-12 col-md-3 profile">
          <div className="row">
            <div className="col-md-12 profile__img">
              <div className="frame">
                <img scrolling="no" src={picture} alt={name} />
              </div>
            </div>
            <div className="col-md-12 profile__text">
              <h3>{name}</h3>
              <p className="profile__text_parf">{position}</p>
              <Button handleClose={this.showModal} className="btn" text={_.upperCase(localization.aboutUs.button_open)}></Button>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <NameTitle params={name} />
          <p className="bio_subtitle">{position}</p>
          <p className="bio_txt">{bio}</p>
        </Modal>
      </Fragment>
    )

  }

}

export default Profile
