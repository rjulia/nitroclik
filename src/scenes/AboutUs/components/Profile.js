import React from 'react';
import './Profile.scss'

const Profile = (props) => {
  const { name, picture, position, bio } = props.people;

  return (
    <div className="col-12 col-md-3 profile">
      <div className="row">
        <div className="col-md-12 profile__img">
          <div className="frame">
            <img src={picture} alt={name} />
          </div>
        </div>
        <div className="col-md-12 profile__text">
          <h3>{name}</h3>
          <p className="profile__text">{position}</p>
          {/* <p>{bio}</p> */}
        </div>
      </div>
    </div>
  )

}

export default Profile
