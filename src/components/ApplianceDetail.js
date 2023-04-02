import React from 'react'
import { useParams } from 'react-router-dom';

export const ApplianceDetail = ({ appliances }) => {
    const { id } = useParams();
    const appliance = appliances.find(appliance => appliance.id === parseInt(id));
  
    return (
      <div>
        <h1>User Details</h1>
        {appliance ? (
          <div>
            <p>ID: {appliance.id}</p>
            <p>UID: {appliance.uid}</p>
            <p>Brand: {appliance.brand}</p>
            <p>Equipment: {appliance.equipment}</p>
          </div>
        ) : (
          <p>Appliance not found</p>
        )}
      </div>
    );
}
