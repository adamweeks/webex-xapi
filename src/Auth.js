import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Button, Input} from '@momentum-ui/react';

function Auth(props) {
  const [token, setToken] = useState(process.env.REACT_APP_TOKEN)

  function handleChange(e) {
    setToken(e.target.value);
  }

  return (
    <>
      <Input 
        autoComplete="on"
        label="Access Token" 
        id="token" 
        placeholder="Access Token" 
        onChange={handleChange} 
        value={token}
      />
      <Button children="Save Token" onClick={() => props.onAuth(token)} />
    </>
  )
}

Auth.propTypes = {
  onAuth: PropTypes.func.isRequired
}

export default Auth

