import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Authentication = props => (
  props.token
    ? <div onClick={() => Auth.logout()}>Logout</div> :
        <div>
          <h1>Welcome</h1>
          <Link to='/login'>Login</Link>
        </div>
);

export default Authentication;