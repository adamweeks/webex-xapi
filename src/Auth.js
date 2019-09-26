import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Button, Input} from '@momentum-ui/react';

function Auth(props) {
  const [token, setToken] = useState("")


  return (
    <>
      <Input 
        label="Access Token" 
        id="token" 
        placeholder="Access Token" 
        onChange={(e) => {setToken(e.value)}} 
      />
      <Button children="Save Token" onClick={props.onAuth(token)} />
    </>
  )
}

Auth.propTypes = {
  onAuth: PropTypes.func.isRequired
}

export default Auth

