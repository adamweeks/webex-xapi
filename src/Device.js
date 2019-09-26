import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Input} from '@momentum-ui/react';

function Device(props) {
  const [device, setDevice] = useState(process.env.REACT_APP_DEVICE_ID);

  function handleChange(e) {
    setDevice(e.target.value);
    props.onDeviceChange(e.target.value);
  }

  return (
    <>
      <Input 
        autoComplete="on"
        label="Device ID" 
        id="token" 
        placeholder="Device ID" 
        onChange={handleChange} 
        value={device}
      />
    </>
  )
}

Device.propTypes = {
  onDeviceChange: PropTypes.func.isRequired
}

export default Device

