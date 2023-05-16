import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    console.log(props);
    return (
        <div>
            <h3>i have device : {props.name}</h3>
            <DeviceDetails></DeviceDetails>
        </div>
    );
};

export default Device;