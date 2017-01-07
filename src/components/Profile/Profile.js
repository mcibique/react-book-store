import React from 'react';
import './Profile.scss';

export const Profile = (props) => (
  <div className="user-profile">
    {props.profile.userName}
  </div>
);

export default Profile;
