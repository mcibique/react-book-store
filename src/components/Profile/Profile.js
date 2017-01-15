import React from 'react';
import './Profile.scss';

export const Profile = (props) => (
  <div className="user-profile">
    <img src="//placehold.it/64/fff" alt="profile" />
    <div>{ props.profile.userName }</div>
  </div>
);

export default Profile;
